import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useGame } from '@/context/GameContext';
import { getBarsForCity } from '@/data/pubs';
import { useLanguage } from '@/context/LanguageContext';

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

const CITY_COLORS: Record<string, string> = {
  münchen: '#d4af37',
  berlin: '#7744aa',
  frankfurt: '#88cc44',
  hamburg: '#1a7aaa',
  köln: '#cc2200',
};

function makeIcon(color: string, size: number = 13, label?: string) {
  if (label) {
    return L.divIcon({
      className: '',
      html: `<div style="
        width:${size + 10}px;height:${size + 10}px;
        background:${color};
        border:3px solid rgba(255,255,255,0.95);
        border-radius:50%;
        box-shadow:0 2px 8px rgba(0,0,0,0.4);
        display:flex;align-items:center;justify-content:center;
        font-size:${size - 4}px;font-weight:800;color:#fff;
        font-family:sans-serif;
      ">${label}</div>`,
      iconSize: [size + 10, size + 10],
      iconAnchor: [(size + 10) / 2, (size + 10) / 2],
    });
  }
  return L.divIcon({
    className: '',
    html: `<div style="width:${size}px;height:${size}px;background:${color};border:2.5px solid rgba(255,255,255,0.9);border-radius:50%;box-shadow:0 1px 5px rgba(0,0,0,0.4);"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export default function MapTab() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const { holes, city, currentHole } = useGame();
  const { t } = useLanguage();

  const cityColor = city ? CITY_COLORS[city] || '#d4af37' : '#d4af37';

  const holeCoords = holes.map(hole => {
    if (hole.lat != null && hole.lng != null) {
      const bars = city ? getBarsForCity(city) : [];
      const bar = hole.barId
        ? bars.find(b => b.id === hole.barId)
        : bars.find(b => b.name.toLowerCase() === hole.name.toLowerCase());
      return { lat: hole.lat, lng: hole.lng, bar: bar || null };
    }

    if (!city) return null;
    const bars = getBarsForCity(city);

    let match = bars.find(b => b.name.toLowerCase() === hole.name.toLowerCase());
    if (match) return { lat: match.lat, lng: match.lng, bar: match };

    match = bars.find(b =>
      hole.name.toLowerCase().includes(b.name.toLowerCase()) ||
      b.name.toLowerCase().includes(hole.name.toLowerCase())
    );
    if (match) return { lat: match.lat, lng: match.lng, bar: match };

    const holeWords = hole.name.toLowerCase().replace(/[^a-zäöüß\s]/g, '').split(/\s+/).filter(w => w.length > 2);
    let bestMatch: typeof bars[0] | null = null;
    let bestScore = 0;
    for (const b of bars) {
      const barWords = b.name.toLowerCase().replace(/[^a-zäöüß\s]/g, '').split(/\s+/).filter(w => w.length > 2);
      const overlap = holeWords.filter(w => barWords.some(bw => bw.includes(w) || w.includes(bw))).length;
      if (overlap > bestScore && overlap >= 2) {
        bestScore = overlap;
        bestMatch = b;
      }
    }
    if (bestMatch) return { lat: bestMatch.lat, lng: bestMatch.lng, bar: bestMatch };

    return null;
  });

  const hasCoords = holeCoords.some(c => c !== null);

  useEffect(() => {
    if (!mapRef.current || !hasCoords) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const validCoords = holeCoords.filter(c => c !== null) as NonNullable<typeof holeCoords[0]>[];
    if (validCoords.length === 0) return;

    const centerLat = validCoords.reduce((s, c) => s + c.lat, 0) / validCoords.length;
    const centerLng = validCoords.reduce((s, c) => s + c.lng, 0) / validCoords.length;

    const map = L.map(mapRef.current, {
      zoomControl: true,
      attributionControl: true,
    }).setView([centerLat, centerLng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    const routePoints: L.LatLngExpression[] = [];

    holeCoords.forEach((coord, i) => {
      if (!coord) return;

      routePoints.push([coord.lat, coord.lng]);
      const isCurrent = i === currentHole;
      const isPast = i < currentHole;
      const icon = makeIcon(
        isCurrent ? '#fff' : isPast ? cityColor : `${cityColor}99`,
        isCurrent ? 18 : 13,
        String(i + 1)
      );

      const hole = holes[i];
      const typeIcon = coord.bar ? TYPE_ICONS[coord.bar.type] || '🍺' : '🍺';

      const popup = `
        <div style="font-family:sans-serif;min-width:180px;">
          <div style="font-size:14px;font-weight:700;margin-bottom:4px;">${i + 1}. ${hole.name}</div>
          ${coord.bar ? `<div style="font-size:11px;color:#666;margin-bottom:6px;">📍 ${coord.bar.address}${coord.bar.district ? ` · ${coord.bar.district}` : ''}</div>` : ''}
          <div style="display:flex;gap:6px;margin-bottom:6px;">
            <span style="padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;background:${cityColor}22;color:${cityColor}">${typeIcon} ${coord.bar?.type || 'bar'}</span>
            <span style="padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;background:#f0f0f0;color:#333">⛳ Par ${hole.par}</span>
          </div>
          <div style="font-size:12px;color:#444;">🍺 ${hole.drink}</div>
          <div style="font-size:11px;color:#888;margin-top:4px;">🕐 ${hole.time}</div>
        </div>
      `;

      L.marker([coord.lat, coord.lng], { icon })
        .addTo(map)
        .bindPopup(popup, { maxWidth: 280 });
    });

    if (routePoints.length > 1) {
      L.polyline(routePoints, {
        color: cityColor,
        weight: 3,
        opacity: 0.6,
        dashArray: '8, 8',
      }).addTo(map);
    }

    if (validCoords.length > 1) {
      const bounds = L.latLngBounds(validCoords.map(c => [c.lat, c.lng] as L.LatLngExpression));
      map.fitBounds(bounds, { padding: [40, 40] });
    }

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [holes, city, currentHole, hasCoords]);

  if (!hasCoords) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center">
        <span className="text-4xl mb-4">🗺️</span>
        <p className="text-foreground font-display text-lg mb-2">{t('map.noData')}</p>
        <p className="text-muted-foreground text-sm">
          {t('map.noDataDesc')}
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <div ref={mapRef} className="h-full w-full" style={{ minHeight: '300px' }} />
    </div>
  );
}
