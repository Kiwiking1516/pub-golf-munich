import { useState, useRef, useEffect, useCallback } from 'react';
import L from 'leaflet';
import { Route, X, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import { getBarsForCity, optimizeRoute, shuffle } from '@/data/pubs';
import { allRules } from '@/data/rules';
import { Hole, HoleFlag, PubLocation } from '@/types/game';
import { toast } from 'sonner';

const CITY_COLORS: Record<string, string> = {
  münchen: '#d4af37',
  berlin: '#7744aa',
  frankfurt: '#88cc44',
  hamburg: '#1a7aaa',
  köln: '#cc2200',
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

  const barDotsRef = useRef<L.Marker[]>([]);
  const selectedMarkersRef = useRef<L.Marker[]>([]);
  const routeLineRef = useRef<L.Polyline | null>(null);
  const routeShadowRef = useRef<L.Polyline | null>(null);

  const cityColor = city ? CITY_COLORS[city] || '#d4af37' : '#d4af37';
  const allBars = city ? getBarsForCity(city) : [];

  const clearMapElements = useCallback(() => {
    barDotsRef.current.forEach(m => m.remove());
    barDotsRef.current = [];
    selectedMarkersRef.current.forEach(m => m.remove());
    selectedMarkersRef.current = [];
    routeLineRef.current?.remove();
    routeLineRef.current = null;
    routeShadowRef.current?.remove();
    routeShadowRef.current = null;
  }, []);

  // Draw all bar dots when active
  useEffect(() => {
    if (!map || !active) return;

    barDotsRef.current.forEach(m => m.remove());
    barDotsRef.current = [];

    const selectedIds = new Set(selectedBars.map(b => b.id));

    allBars.forEach(bar => {
      if (selectedIds.has(bar.id)) return; // skip selected bars, they have numbered markers

      const icon = L.divIcon({
        className: '',
        html: `<div style="width:8px;height:8px;background:${cityColor};border-radius:50%;opacity:0.5;border:1px solid rgba(255,255,255,0.6);cursor:pointer;"></div>`,
        iconSize: [8, 8],
        iconAnchor: [4, 4],
      });

      const m = L.marker([bar.lat, bar.lng], { icon }).addTo(map);
      m.on('click', () => {
        setSelectedBars(prev => {
          if (prev.length >= 18) {
            toast(t('map.maxReached'));
            return prev;
          }
          return [...prev, bar];
        });
      });
      barDotsRef.current.push(m);
    });

    return () => {
      barDotsRef.current.forEach(m => m.remove());
      barDotsRef.current = [];
    };
  }, [map, active, allBars, cityColor, selectedBars, t]);

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
      m.on('click', () => {
        setSelectedBars(prev => prev.filter(b => b.id !== bar.id));
      });
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
    }
  }, [active, clearMapElements]);

  const handleOptimize = () => {
    const optimized = optimizeRoute(selectedBars);
    setSelectedBars(optimized);
  };

  const removeBar = (id: string) => {
    setSelectedBars(prev => prev.filter(b => b.id !== id));
  };

  const generateCourse = () => {
    if (selectedBars.length < 2) return;

    const eligibleRules = allRules.filter(r => r.id !== 'doppeltes-loch');
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

    // Add turn flag
    const middleIndices = holes
      .map((_, i) => i)
      .filter(i => i > 0 && i < holes.length - 1 && holes[i].flags.length === 0);
    if (middleIndices.length > 0) {
      const turnIdx = middleIndices[Math.floor(Math.random() * middleIndices.length)];
      holes[turnIdx].flags = ['turn'];
    }

    if (!mode) setMode('biergolf' as any);
    setCustomHoles(holes);
    onToggle(); // exit builder
    clearMapElements();
    setActiveTab('spiel');
  };

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

      {/* Instruction */}
      {active && selectedBars.length === 0 && (
        <div className="absolute top-2 left-2 right-14 z-[1000] bg-card/95 backdrop-blur-sm rounded-lg p-3 animate-fade-in">
          <p className="text-foreground text-xs">{t('map.tapBarsInstruction')}</p>
        </div>
      )}

      {/* Bottom panel */}
      {active && selectedBars.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 z-[1000] bg-card/95 backdrop-blur-sm border-t border-border p-4 pb-6 animate-fade-in safe-bottom">
          <div className="flex items-center justify-between mb-3">
            <span className="text-foreground text-sm font-semibold">
              {t('map.yourCourse')}: {selectedBars.length} Bars
            </span>
            <button
              onClick={onToggle}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-muted text-muted-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Horizontal chip list */}
          <div className="flex gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-hide">
            {selectedBars.map((bar, i) => (
              <button
                key={bar.id}
                onClick={() => removeBar(bar.id)}
                className="flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-foreground text-xs font-medium"
              >
                <span className="font-bold" style={{ color: cityColor }}>{i + 1}</span>
                <span className="truncate max-w-[100px]">{bar.name}</span>
                <X className="w-3 h-3 text-muted-foreground" />
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 mb-2">
            <Button
              onClick={handleOptimize}
              variant="outline"
              className="flex-1 gap-1"
              disabled={selectedBars.length < 2}
            >
              <Shuffle className="w-4 h-4" />
              {t('map.optimizeRoute')}
            </Button>
          </div>

          <Button
            onClick={generateCourse}
            disabled={selectedBars.length < 2}
            className="w-full"
            variant="default"
          >
            {t('map.createCourse')}
          </Button>

          {selectedBars.length < 2 && (
            <p className="text-destructive text-xs text-center mt-2">{t('map.minRequired')}</p>
          )}
        </div>
      )}
    </>
  );
}
