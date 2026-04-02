import { useState, useRef, useEffect, useCallback } from 'react';
import L from 'leaflet';
import { CircleDot, X, MapPin } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import { getBarsForCity, distanceKm, optimizeRoute, shuffle } from '@/data/pubs';
import { allRules } from '@/data/rules';
import { Hole, HoleFlag, PubLocation } from '@/types/game';

const CITY_COLORS: Record<string, string> = {
  münchen: '#d4af37',
  berlin: '#7744aa',
  frankfurt: '#88cc44',
  hamburg: '#1a7aaa',
  köln: '#cc2200',
};

interface Props {
  map: L.Map | null;
  city: string | null;
  active: boolean;
  onToggle: () => void;
}

export default function MapAreaSelect({ map, city, active, onToggle }: Props) {
  const { setCustomHoles, setActiveTab } = useGame();
  const { t } = useLanguage();
  const [center, setCenter] = useState<{ lat: number; lng: number } | null>(null);
  const [radius, setRadius] = useState(1500);
  const [showInstruction, setShowInstruction] = useState(false);

  const circleRef = useRef<L.Circle | null>(null);
  const barMarkersRef = useRef<L.Marker[]>([]);
  const instructionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cityColor = city ? CITY_COLORS[city] || '#d4af37' : '#d4af37';

  const allBars = city ? getBarsForCity(city) : [];

  const barsInRadius = center
    ? allBars.filter(b => distanceKm(center.lat, center.lng, b.lat, b.lng) <= radius / 1000)
    : [];

  const barCountColor = barsInRadius.length >= 18
    ? 'text-primary'
    : barsInRadius.length >= 9
      ? 'text-primary'
      : 'text-destructive';

  // Cleanup helper
  const clearMapElements = useCallback(() => {
    circleRef.current?.remove();
    circleRef.current = null;
    barMarkersRef.current.forEach(m => m.remove());
    barMarkersRef.current = [];
  }, []);

  // Draw circle + bar dots
  useEffect(() => {
    if (!map || !center || !active) return;

    // Update or create circle
    if (circleRef.current) {
      circleRef.current.setLatLng([center.lat, center.lng]);
      circleRef.current.setRadius(radius);
    } else {
      circleRef.current = L.circle([center.lat, center.lng], {
        radius,
        color: cityColor,
        fillColor: cityColor,
        fillOpacity: 0.1,
        weight: 2,
        dashArray: '8, 4',
      }).addTo(map);
    }

    // Update bar dots
    barMarkersRef.current.forEach(m => m.remove());
    barMarkersRef.current = [];

    allBars.forEach(bar => {
      const dist = distanceKm(center.lat, center.lng, bar.lat, bar.lng);
      const inside = dist <= radius / 1000;
      const dotColor = inside ? cityColor : '#888';
      const dotSize = inside ? 8 : 5;
      const opacity = inside ? 1 : 0.4;

      const icon = L.divIcon({
        className: '',
        html: `<div style="width:${dotSize}px;height:${dotSize}px;background:${dotColor};border-radius:50%;opacity:${opacity};border:1px solid rgba(255,255,255,0.6);"></div>`,
        iconSize: [dotSize, dotSize],
        iconAnchor: [dotSize / 2, dotSize / 2],
      });

      const m = L.marker([bar.lat, bar.lng], { icon, interactive: false }).addTo(map);
      barMarkersRef.current.push(m);
    });
  }, [map, center, radius, active, cityColor, allBars]);

  // Map click handler
  useEffect(() => {
    if (!map || !active) return;

    const onClick = (e: L.LeafletMouseEvent) => {
      setCenter({ lat: e.latlng.lat, lng: e.latlng.lng });
    };

    map.on('click', onClick);
    return () => { map.off('click', onClick); };
  }, [map, active]);

  // Cleanup on deactivate
  useEffect(() => {
    if (!active) {
      clearMapElements();
      setCenter(null);
      setRadius(1500);
    }
  }, [active, clearMapElements]);

  const toggleActive = () => {
    if (!active) {
      onToggle();
      setShowInstruction(true);
      if (instructionTimerRef.current) clearTimeout(instructionTimerRef.current);
      instructionTimerRef.current = setTimeout(() => setShowInstruction(false), 3000);
    } else {
      onToggle();
      setShowInstruction(false);
    }
  };

  const useMyLocation = () => {
    if (!('geolocation' in navigator)) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => {},
      { enableHighAccuracy: true }
    );
  };

  const generateCourse = (count: 9 | 18) => {
    if (barsInRadius.length < count || !center) return;

    const selected = shuffle(barsInRadius).slice(0, count);
    const routed = optimizeRoute(selected);

    const eligibleRules = allRules.filter(r => r.id !== 'doppeltes-loch');
    const shuffledRules = shuffle(eligibleRules);
    let ruleIdx = 0;

    const now = new Date();
    now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15, 0, 0);

    const holes: Hole[] = routed.map((pub: PubLocation, i: number) => {
      let flags: HoleFlag[] = [];
      if (i === 0) flags = ['signature'];
      else if (i === routed.length - 1) flags = ['finale'];

      const activeRules: string[] = [];
      if (i > 0 && i < routed.length - 1 && Math.random() < 0.4 && ruleIdx < shuffledRules.length) {
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

    // Add turn flag to random middle hole
    const middleIndices = holes
      .map((_, i) => i)
      .filter(i => i > 0 && i < holes.length - 1 && holes[i].flags.length === 0);
    if (middleIndices.length > 0) {
      const turnIdx = middleIndices[Math.floor(Math.random() * middleIndices.length)];
      holes[turnIdx].flags = ['turn'];
    }

    setCustomHoles(holes);
    setActive(false);
    clearMapElements();
    setActiveTab('spiel');
  };

  const radiusKm = (radius / 1000).toFixed(1);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={toggleActive}
        className="absolute top-20 right-2.5 z-[1000] w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-colors"
        style={{
          background: active ? cityColor : 'hsl(var(--card))',
          color: active ? '#fff' : 'hsl(var(--foreground))',
        }}
        title={t('map.selectArea')}
      >
        <CircleDot className="w-5 h-5" />
      </button>

      {/* Instruction overlay */}
      {active && showInstruction && !center && (
        <div className="absolute top-2 left-2 right-14 z-[1000] bg-card/95 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2 animate-fade-in">
          <p className="text-foreground text-xs flex-1">{t('map.tapInstruction')}</p>
          <button
            onClick={useMyLocation}
            className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md bg-primary/20 text-primary whitespace-nowrap"
          >
            <MapPin className="w-3 h-3" />
            {t('map.useMyLocation')}
          </button>
        </div>
      )}

      {/* Radius panel */}
      {active && center && (
        <div className="absolute bottom-0 left-0 right-0 z-[1000] bg-card/95 backdrop-blur-sm border-t border-border p-4 pb-6 animate-fade-in safe-bottom">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-foreground text-sm font-semibold">{t('map.radius')}: {radiusKm} km</span>
              <span className={`ml-3 text-sm font-bold ${barCountColor}`}>
                {barsInRadius.length} {t('map.barsFound')}
              </span>
            </div>
            <button
              onClick={() => { setActive(false); setShowInstruction(false); }}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-muted text-muted-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mb-3 flex items-center gap-3">
            <span className="text-muted-foreground text-xs">500m</span>
            <Slider
              value={[radius]}
              min={500}
              max={5000}
              step={100}
              onValueChange={([v]) => setRadius(v)}
              className="flex-1"
            />
            <span className="text-muted-foreground text-xs">5km</span>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <button
              onClick={useMyLocation}
              className="flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
            >
              <MapPin className="w-3 h-3" />
              {t('map.useMyLocation')}
            </button>
          </div>

          <div className="flex gap-2 mt-3">
            <Button
              onClick={() => generateCourse(9)}
              disabled={barsInRadius.length < 9}
              className="flex-1"
              variant="outline"
            >
              {t('map.generate9')}
            </Button>
            <Button
              onClick={() => generateCourse(18)}
              disabled={barsInRadius.length < 18}
              className="flex-1"
              variant="default"
            >
              {t('map.generate18')}
            </Button>
          </div>

          {barsInRadius.length < 9 && (
            <p className="text-destructive text-xs text-center mt-2">{t('map.notEnoughBars')}</p>
          )}
        </div>
      )}
    </>
  );
}
