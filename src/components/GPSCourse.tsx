import { useState, useEffect } from 'react';
import { useGame } from '@/context/GameContext';
import { generateGPSCourse, distanceKm } from '@/data/pubs';
import { Hole, PubLocation } from '@/types/game';
import { ArrowLeft, MapPin, RefreshCw, Loader2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

type GPSState = 'requesting' | 'loading' | 'ready' | 'error';

export default function GPSCourse({ onBack }: { onBack: () => void }) {
  const { setMode, setCustomHoles } = useGame();
  const [gpsState, setGpsState] = useState<GPSState>('requesting');
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [radius, setRadius] = useState(1.5);
  const [count, setCount] = useState(18);
  const [pubs, setPubs] = useState<PubLocation[]>([]);
  const [expandedRadius, setExpandedRadius] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!navigator.geolocation) {
      setGpsState('error');
      setErrorMsg('Geolocation wird von deinem Browser nicht unterstützt.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setGpsState('loading');
      },
      err => {
        setGpsState('error');
        setErrorMsg(err.code === 1 ? 'Standort-Zugriff verweigert. Bitte erlaube den Zugriff in deinen Browser-Einstellungen.' : 'Standort konnte nicht ermittelt werden.');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);

  useEffect(() => {
    if (coords) {
      const result = generateGPSCourse(coords.lat, coords.lng, radius, count);
      setPubs(result.pubs);
      setExpandedRadius(result.expandedRadius);
      setGpsState('ready');
    }
  }, [coords, radius, count]);

  const regenerate = () => {
    if (!coords) return;
    // Shuffle the database slightly by adding random offset
    const result = generateGPSCourse(coords.lat + (Math.random() - 0.5) * 0.001, coords.lng + (Math.random() - 0.5) * 0.001, radius, count);
    setPubs(result.pubs);
    setExpandedRadius(result.expandedRadius);
  };

  const startCourse = () => {
    if (!coords) return;
    const holes: Hole[] = pubs.map((pub, i) => ({
      name: pub.name,
      drink: pub.drink,
      par: pub.suggestedPar,
      time: `${11 + Math.floor(i * 0.75)}:${(i % 2 === 0) ? '00' : '30'}`,
      flags: i === 0 ? ['signature'] : i === pubs.length - 1 ? ['finale'] : [],
      activeRules: [],
    }));
    setCustomHoles(holes);
    // Set mode based on count
    setMode(count <= 9 ? 'biergarten' : 'biergolf');
  };

  if (gpsState === 'requesting') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-green">
        <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
        <p className="text-foreground font-display text-lg">Standort wird ermittelt...</p>
        <p className="text-muted-foreground text-sm mt-2">Bitte erlaube den Zugriff auf deinen Standort.</p>
      </div>
    );
  }

  if (gpsState === 'error') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-green">
        <p className="text-destructive text-lg mb-4">📍 Fehler</p>
        <p className="text-muted-foreground text-sm text-center mb-6">{errorMsg}</p>
        <button onClick={onBack} className="gradient-gold text-primary-foreground font-bold px-6 py-3 rounded-xl tap-target">
          Zurück
        </button>
      </div>
    );
  }

  if (gpsState === 'loading') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-green">
        <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
        <p className="text-foreground font-display text-lg">Wir suchen Bars in deiner Nähe...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-deep-green">
      {/* Header */}
      <header className="p-4 flex items-center gap-3 border-b border-border">
        <button onClick={onBack} className="text-muted-foreground tap-target">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="font-display font-bold text-foreground flex-1">📍 GPS-Kurs</h1>
        <button onClick={regenerate} className="text-muted-foreground tap-target hover:text-foreground transition-colors">
          <RefreshCw className="w-5 h-5" />
        </button>
      </header>

      {/* Controls */}
      <div className="p-4 space-y-4 border-b border-border">
        <div>
          <label className="text-muted-foreground text-xs mb-2 block">Umkreis: {radius} km</label>
          <Slider
            value={[radius]}
            onValueChange={v => setRadius(v[0])}
            min={0.5}
            max={10}
            step={0.5}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCount(9)}
            className={`flex-1 py-2 rounded-lg text-sm font-bold tap-target border transition-colors ${count === 9 ? 'border-primary text-primary bg-primary/10' : 'border-border text-muted-foreground'}`}
          >
            9 Löcher
          </button>
          <button
            onClick={() => setCount(18)}
            className={`flex-1 py-2 rounded-lg text-sm font-bold tap-target border transition-colors ${count === 18 ? 'border-primary text-primary bg-primary/10' : 'border-border text-muted-foreground'}`}
          >
            18 Löcher
          </button>
        </div>
        {expandedRadius && (
          <p className="text-score-bogey text-xs">⚠️ Nicht genug Bars im Umkreis – Radius wurde erweitert.</p>
        )}
      </div>

      {/* Pub list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <p className="text-muted-foreground text-xs mb-2">{pubs.length} Stops gefunden</p>
        {pubs.map((pub, i) => (
          <div key={pub.id} className="bg-card rounded-lg border border-border p-3 flex items-center gap-3 animate-fade-in">
            <span className="font-display font-bold text-primary w-7 text-center">{i + 1}</span>
            <div className="flex-1 min-w-0">
              <p className="text-foreground text-sm font-medium truncate">{pub.name}</p>
              <p className="text-muted-foreground text-xs truncate">{pub.drink}</p>
              {coords && (
                <p className="text-muted-foreground text-[10px]">
                  {distanceKm(coords.lat, coords.lng, pub.lat, pub.lng).toFixed(1)} km
                </p>
              )}
            </div>
            <span className="bg-muted text-foreground text-xs font-bold px-2 py-1 rounded-md">Par {pub.suggestedPar}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="p-4 border-t border-border">
        <button
          onClick={startCourse}
          disabled={pubs.length === 0}
          className="w-full gradient-gold text-primary-foreground font-display font-bold text-lg py-4 rounded-xl tap-target transition-transform active:scale-[0.98] disabled:opacity-50"
        >
          ⛳ Diesen Kurs spielen
        </button>
      </div>
    </div>
  );
}
