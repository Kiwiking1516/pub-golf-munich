import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import L from 'leaflet';
import { Route, X, Shuffle, Plus, Search, Map, List, LocateFixed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import { getBarsForCity, optimizeRoute, shuffle, distanceKm } from '@/data/pubs';
import { getRulesForCity } from '@/data/rules';
import { Hole, HoleFlag, PubLocation } from '@/types/game';
import { toast } from 'sonner';

const CITY_COLORS: Record<string, string> = {
  münchen: '#d4af37',
  berlin: '#7744aa',
  frankfurt: '#88cc44',
  hamburg: '#1a7aaa',
  köln: '#cc2200',
};

const TYPE_ICONS: Record<string, string> = {
  brauhaus: '🏠',
  kneipe: '🍺',
  bar: '🍹',
  biergarten: '🌳',
  cocktailbar: '🍸',
  irish: '☘️',
  sportbar: '⚽',
  szene: '✨',
  craft: '🍺',
};

function makeNumberedIcon(color: string, label: string) {
  const size = 23;
  return L.divIcon({
    className: '',
    html: `<div style="
      width:${size}px;height:${size}px;
      background:${color};
      border:3px solid rgba(255,255,255,0.95);
      border-radius:50%;
      box-shadow:0 2px 8px rgba(0,0,0,0.4);
      display:flex;align-items:center;justify-content:center;
      font-size:11px;font-weight:800;color:#fff;
      font-family:sans-serif;
    ">${label}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

interface Props {
  map: L.Map | null;
  city: string | null;
  active: boolean;
  onToggle: () => void;
}

export default function MapCourseBuilder({ map, city, active, onToggle }: Props) {
  const { setCustomHoles, setActiveTab, setMode, mode } = useGame();
  const { t } = useLanguage();

  const [selectedBars, setSelectedBars] = useState<PubLocation[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [locating, setLocating] = useState(false);

  const selectedMarkersRef = useRef<L.Marker[]>([]);
  const barDotsRef = useRef<L.Marker[]>([]);
  const routeLineRef = useRef<L.Polyline | null>(null);
  const routeShadowRef = useRef<L.Polyline | null>(null);

  const cityColor = city ? CITY_COLORS[city] || '#d4af37' : '#d4af37';
  const allBars = useMemo(() => (city ? getBarsForCity(city) : []), [city]);

  const getGpsPosition = useCallback((): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true, timeout: 10000 });
    });
  }, []);

  const findNearestBar = useCallback((lat: number, lng: number, bars: PubLocation[]) => {
    let nearest: PubLocation | null = null;
    let nearestDist = Infinity;
    for (const bar of bars) {
      const d = distanceKm(lat, lng, bar.lat, bar.lng);
      if (d < nearestDist) { nearestDist = d; nearest = bar; }
    }
    return { bar: nearest, distKm: nearestDist };
  }, []);

  const handleStartFromLocation = useCallback(async () => {
    if (!('geolocation' in navigator)) { toast(t('map.locationDenied')); return; }
    setLocating(true);
    try {
      const pos = await getGpsPosition();
      const { bar, distKm: dist } = findNearestBar(pos.coords.latitude, pos.coords.longitude, allBars);
      if (!bar || dist > 5) { toast(t('map.noNearbyBars')); setLocating(false); return; }
      setSelectedBars([bar]);
      const meters = Math.round(dist * 1000);
      toast(`${t('map.nearestBarFound')}: ${bar.name} (${meters}m)`);
      if (map) map.panTo([bar.lat, bar.lng], { animate: true, duration: 0.3 });
    } catch { toast(t('map.locationDenied')); }
    setLocating(false);
  }, [allBars, map, t, getGpsPosition, findNearestBar]);

  const handleSortFromHere = useCallback(async () => {
    if (!('geolocation' in navigator) || selectedBars.length < 2) return;
    setLocating(true);
    try {
      const pos = await getGpsPosition();
      const { bar: closest } = findNearestBar(pos.coords.latitude, pos.coords.longitude, selectedBars);
      if (!closest) { setLocating(false); return; }
      const rest = selectedBars.filter(b => b.id !== closest.id);
      setSelectedBars([closest, ...optimizeRoute(rest)]);
    } catch { toast(t('map.locationDenied')); }
    setLocating(false);
  }, [selectedBars, t, getGpsPosition, findNearestBar]);

  const selectedIds = useMemo(() => new Set(selectedBars.map(b => b.id)), [selectedBars]);

  const filteredBars = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return allBars;
    return allBars.filter(b =>
      b.name.toLowerCase().includes(query) ||
      (b.district?.toLowerCase().includes(query)) ||
      b.address.toLowerCase().includes(query)
    );
  }, [allBars, searchQuery]);

  const sortedBars = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (query) {
      return [...filteredBars].sort((a, b) => {
        const aName = a.name.toLowerCase().indexOf(query) >= 0 ? 0 : 1;
        const bName = b.name.toLowerCase().indexOf(query) >= 0 ? 0 : 1;
        if (aName !== bName) return aName - bName;
        return a.name.localeCompare(b.name);
      });
    }
    return [...filteredBars].sort((a, b) => {
      const distA = a.district || 'zzz';
      const distB = b.district || 'zzz';
      if (distA !== distB) return distA.localeCompare(distB);
      return a.name.localeCompare(b.name);
    });
  }, [filteredBars, searchQuery]);

  const districtGroups = useMemo(() => {
    if (searchQuery.trim()) return null;
    const groups: { district: string; bars: PubLocation[] }[] = [];
    let currentDistrict = '';
    for (const bar of sortedBars) {
      const d = bar.district || 'Sonstige';
      if (d !== currentDistrict) {
        currentDistrict = d;
        groups.push({ district: d, bars: [] });
      }
      groups[groups.length - 1].bars.push(bar);
    }
    return groups;
  }, [sortedBars, searchQuery]);

  const clearMapElements = useCallback(() => {
    selectedMarkersRef.current.forEach(m => m.remove());
    selectedMarkersRef.current = [];
    barDotsRef.current.forEach(m => m.remove());
    barDotsRef.current = [];
    routeLineRef.current?.remove();
    routeLineRef.current = null;
    routeShadowRef.current?.remove();
    routeShadowRef.current = null;
  }, []);

  // Draw unselected bar dots on map
  useEffect(() => {
    if (!map || !active) return;

    barDotsRef.current.forEach(m => m.remove());
    barDotsRef.current = [];

    allBars.forEach(bar => {
      if (selectedIds.has(bar.id)) return;

      const icon = L.divIcon({
        className: '',
        html: `<div style="width:8px;height:8px;background:${cityColor};border-radius:50%;opacity:0.5;border:1px solid rgba(255,255,255,0.6);"></div>`,
        iconSize: [8, 8],
        iconAnchor: [4, 4],
      });

      const m = L.marker([bar.lat, bar.lng], { icon, interactive: false }).addTo(map);
      barDotsRef.current.push(m);
    });

    return () => {
      barDotsRef.current.forEach(m => m.remove());
      barDotsRef.current = [];
    };
  }, [map, active, allBars, cityColor, selectedIds]);

  // Draw selected markers + route line
  useEffect(() => {
    if (!map || !active) return;

    selectedMarkersRef.current.forEach(m => m.remove());
    selectedMarkersRef.current = [];
    routeLineRef.current?.remove();
    routeLineRef.current = null;
    routeShadowRef.current?.remove();
    routeShadowRef.current = null;

    selectedBars.forEach((bar, i) => {
      const icon = makeNumberedIcon(cityColor, String(i + 1));
      const m = L.marker([bar.lat, bar.lng], { icon }).addTo(map);
      selectedMarkersRef.current.push(m);
    });

    if (selectedBars.length > 1) {
      const points: L.LatLngExpression[] = selectedBars.map(b => [b.lat, b.lng]);
      routeShadowRef.current = L.polyline(points, {
        color: '#000000', weight: 8, opacity: 0.4,
      }).addTo(map);
      routeLineRef.current = L.polyline(points, {
        color: cityColor, weight: 5, opacity: 0.9, dashArray: '12, 6',
      }).addTo(map);
    }
  }, [map, active, selectedBars, cityColor]);

  // Cleanup on deactivate
  useEffect(() => {
    if (!active) {
      clearMapElements();
      setSelectedBars([]);
      setSearchQuery('');
      setShowMap(false);
    }
  }, [active, clearMapElements]);

  const addBar = useCallback((bar: PubLocation) => {
    setSelectedBars(prev => {
      if (prev.length >= 18) {
        toast(t('map.maxReached'));
        return prev;
      }
      if (prev.some(b => b.id === bar.id)) return prev;
      return [...prev, bar];
    });
    if (map) {
      map.panTo([bar.lat, bar.lng], { animate: true, duration: 0.3 });
    }
  }, [map, t]);

  const removeBar = useCallback((id: string) => {
    setSelectedBars(prev => prev.filter(b => b.id !== id));
  }, []);

  const toggleBar = useCallback((bar: PubLocation) => {
    if (selectedIds.has(bar.id)) {
      removeBar(bar.id);
    } else {
      addBar(bar);
    }
  }, [selectedIds, addBar, removeBar]);

  const handleOptimize = () => {
    const optimized = optimizeRoute(selectedBars);
    setSelectedBars(optimized);
  };

  const generateCourse = () => {
    if (selectedBars.length < 2) return;

    const eligibleRules = getRulesForCity(city as import('@/types/game').CityId | null).filter(r => r.id !== 'doppeltes-loch');
    const shuffledRules = shuffle(eligibleRules);
    let ruleIdx = 0;

    const now = new Date();
    now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15, 0, 0);

    const holes: Hole[] = selectedBars.map((pub, i) => {
      let flags: HoleFlag[] = [];
      if (i === 0) flags = ['signature'];
      else if (i === selectedBars.length - 1) flags = ['finale'];

      const activeRules: string[] = [];
      if (i > 0 && i < selectedBars.length - 1 && Math.random() < 0.4 && ruleIdx < shuffledRules.length) {
        activeRules.push(shuffledRules[ruleIdx].id);
        ruleIdx++;
      }

      const time = new Date(now.getTime() + i * 45 * 60000);
      const hh = String(time.getHours()).padStart(2, '0');
      const mm = String(time.getMinutes()).padStart(2, '0');

      return {
        name: pub.name,
        drink: pub.drink,
        par: pub.suggestedPar,
        time: `${hh}:${mm}`,
        flags,
        activeRules,
        lat: pub.lat,
        lng: pub.lng,
        barId: pub.id,
      };
    });

    const middleIndices = holes
      .map((_, i) => i)
      .filter(i => i > 0 && i < holes.length - 1 && holes[i].flags.length === 0);
    if (middleIndices.length > 0) {
      const turnIdx = middleIndices[Math.floor(Math.random() * middleIndices.length)];
      holes[turnIdx].flags = ['turn'];
    }

    if (!mode) setMode('biergolf' as any);
    setCustomHoles(holes, 'builder');
    onToggle();
    clearMapElements();
    setActiveTab('spiel');
    toast(t('map.courseCreatedShare'));
  };

  const getSelectionIndex = (id: string) => {
    const idx = selectedBars.findIndex(b => b.id === id);
    return idx >= 0 ? idx + 1 : null;
  };

  // Calculate header height: search (~56px) + chips strip (~40px if visible)
  const headerHeight = selectedBars.length > 0 ? 'calc(56px + 44px)' : '56px';
  const footerHeight = '64px';

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="absolute top-32 right-2.5 z-[1000] w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-colors"
        style={{
          background: active ? cityColor : 'hsl(var(--card))',
          color: active ? '#fff' : 'hsl(var(--foreground))',
        }}
        title={t('map.buildCourse')}
      >
        <Route className="w-5 h-5" />
      </button>

      {/* Full-screen overlay when active and showing list */}
      {active && !showMap && (
        <div className="fixed inset-0 z-[1001] flex flex-col bg-background" style={{ height: 'var(--app-height, 100dvh)' }}>
          {/* Header: search + map toggle */}
          <div className="flex-shrink-0 bg-background border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('map.searchBar')}
                  className="pl-9 pr-9 h-10 text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button
                onClick={() => setShowMap(true)}
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-muted text-foreground"
                title={t('map.showMap')}
              >
                <Map className="w-5 h-5" />
              </button>
              <button
                onClick={onToggle}
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-muted text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Selected bars chip strip */}
          {selectedBars.length > 0 && (
            <div className="flex-shrink-0 px-4 py-2 bg-background border-b border-border">
              <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
                {selectedBars.map((bar, i) => (
                  <button
                    key={bar.id}
                    onClick={() => removeBar(bar.id)}
                    className="flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium"
                  >
                    <span className="font-bold" style={{ color: cityColor }}>{i + 1}</span>
                    <span className="truncate max-w-[80px]">{bar.name}</span>
                    <X className="w-3 h-3 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Bar list - scrollable middle */}
          <div className="flex-1 overflow-y-auto px-4 py-2 min-h-0">
            {/* Start from location button - only when no bars selected */}
            {selectedBars.length === 0 && (
              <button
                onClick={handleStartFromLocation}
                disabled={locating}
                className="w-full flex items-center gap-3 py-3 px-3 rounded-xl mb-3 border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors tap-target text-left"
              >
                <LocateFixed className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-foreground">
                  {locating ? t('map.findingLocation') : t('map.startFromLocation')}
                </span>
              </button>
            )}
            {sortedBars.length === 0 ? (
              <div className="flex items-center justify-center py-8 text-muted-foreground text-sm">
                {t('map.noBarsFound')}
              </div>
            ) : districtGroups ? (
              districtGroups.map(group => (
                <div key={group.district}>
                  <div className="sticky top-0 bg-background/95 backdrop-blur-sm py-1.5 z-10">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {group.district}
                    </span>
                  </div>
                  {group.bars.map(bar => (
                    <BarRow
                      key={bar.id}
                      bar={bar}
                      selected={selectedIds.has(bar.id)}
                      selectionIndex={getSelectionIndex(bar.id)}
                      cityColor={cityColor}
                      onToggle={() => toggleBar(bar)}
                    />
                  ))}
                </div>
              ))
            ) : (
              sortedBars.map(bar => (
                <BarRow
                  key={bar.id}
                  bar={bar}
                  selected={selectedIds.has(bar.id)}
                  selectionIndex={getSelectionIndex(bar.id)}
                  cityColor={cityColor}
                  onToggle={() => toggleBar(bar)}
                />
              ))
            )}
          </div>

          {/* Footer buttons */}
          <div className="flex-shrink-0 px-4 py-3 border-t border-border bg-card/95 backdrop-blur-sm safe-bottom">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                {selectedBars.length} / 18
              </span>
              {selectedBars.length >= 2 && (
                <Button
                  onClick={handleSortFromHere}
                  variant="outline"
                  size="sm"
                  className="gap-1"
                  disabled={locating}
                >
                  <LocateFixed className="w-3.5 h-3.5" />
                  {t('map.sortFromHere')}
                </Button>
              )}
              <Button
                onClick={handleOptimize}
                variant="outline"
                size="sm"
                className="gap-1"
                disabled={selectedBars.length < 2}
              >
                <Shuffle className="w-3.5 h-3.5" />
                {t('map.optimizeRoute')}
              </Button>
              <Button
                onClick={generateCourse}
                disabled={selectedBars.length < 2}
                size="sm"
                className="flex-1"
                variant="default"
              >
                {t('map.createCourse')}
              </Button>
            </div>
            {selectedBars.length > 0 && selectedBars.length < 2 && (
              <p className="text-destructive text-xs text-center mt-1.5">{t('map.minRequired')}</p>
            )}
          </div>
        </div>
      )}

      {/* "Back to list" button when showing map */}
      {active && showMap && (
        <button
          onClick={() => setShowMap(false)}
          className="fixed top-3 left-3 z-[1001] flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card/95 backdrop-blur-sm shadow-lg border border-border text-sm font-medium text-foreground"
        >
          <List className="w-4 h-4" />
          {t('map.showList')}
        </button>
      )}
    </>
  );
}

// Bar row component
function BarRow({
  bar,
  selected,
  selectionIndex,
  cityColor,
  onToggle,
}: {
  bar: PubLocation;
  selected: boolean;
  selectionIndex: number | null;
  cityColor: string;
  onToggle: () => void;
}) {
  const typeIcon = TYPE_ICONS[bar.type] || '🍺';

  return (
    <button
      onClick={onToggle}
      className={`w-full flex items-center gap-3 py-2.5 px-2 rounded-lg mb-0.5 text-left transition-colors tap-target ${
        selected
          ? 'bg-accent/50 border border-accent'
          : 'hover:bg-muted/50'
      }`}
    >
      <span className="text-lg flex-shrink-0 w-7 text-center">{typeIcon}</span>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-foreground truncate">{bar.name}</div>
        <div className="text-xs text-muted-foreground truncate">{bar.address}</div>
      </div>
      <div className="flex-shrink-0">
        {selected && selectionIndex != null ? (
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
            style={{ background: cityColor }}
          >
            {selectionIndex}
          </div>
        ) : (
          <div className="w-7 h-7 rounded-full flex items-center justify-center border border-border text-muted-foreground">
            <Plus className="w-3.5 h-3.5" />
          </div>
        )}
      </div>
    </button>
  );
}
