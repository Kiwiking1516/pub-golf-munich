import { useGame } from '@/context/GameContext';
import { getCityById, getCityAccentCSS } from '@/data/cities';
import { getCourseInfo } from '@/data/courses';
import { ChevronLeft } from 'lucide-react';

export default function ModeSelect() {
  const { city, setMode, clearCity } = useGame();
  if (!city) return null;
  const cityConfig = getCityById(city);
  if (!cityConfig) return null;

  const bgInfo = getCourseInfo(city, 'biergolf');
  const gartenInfo = getCourseInfo(city, 'biergarten');
  const accentCSS = getCityAccentCSS(cityConfig);
  const accentStyle = { color: `hsl(${accentCSS})` };
  const borderGoldStyle = { borderColor: `hsl(${accentCSS} / 0.3)` };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-green">
      <button onClick={clearCity} className="self-start text-muted-foreground flex items-center gap-1 text-sm tap-target mb-4">
        <ChevronLeft className="w-4 h-4" /> Städte
      </button>

      <div className="animate-fade-in text-center mb-10">
        <h1 className="font-display text-4xl font-bold mb-2" style={accentStyle}>
          {cityConfig.emoji} {cityConfig.name}
        </h1>
        <p className="font-display text-xl text-foreground">Pub Golf</p>
        <p className="text-muted-foreground text-sm mt-2">Wähle deinen Kurs</p>
      </div>

      <div className="w-full max-w-sm space-y-5 animate-fade-in">
        {/* Biergolf */}
        <button
          onClick={() => setMode('biergolf')}
          className="w-full text-left p-5 rounded-xl border-2 bg-card hover:glow-gold transition-all duration-300 tap-target group"
          style={borderGoldStyle}
        >
          <div className="flex items-start justify-between mb-3">
            <span className="text-3xl">🍺</span>
            <span className="text-xs font-bold px-3 py-1 rounded-full text-primary-foreground" style={{ background: `hsl(${accentCSS})` }}>
              {bgInfo.holes} LÖCHER
            </span>
          </div>
          <h2 className="font-display text-xl font-bold mb-1" style={accentStyle}>Biergolf</h2>
          <p className="text-foreground text-sm mb-3">{bgInfo.holes} Bars & Wirtshäuser</p>
          <div className="flex items-center gap-4 text-muted-foreground text-xs">
            <span>Par {bgInfo.par}</span>
            <span>•</span>
            <span>Mix aus Bieren & Drinks</span>
          </div>
        </button>

        {/* Biergärten */}
        <button
          onClick={() => setMode('biergarten')}
          className="w-full text-left p-5 rounded-xl border-2 border-secondary/30 bg-card hover:border-secondary hover:glow-green transition-all duration-300 tap-target group"
        >
          <div className="flex items-start justify-between mb-3">
            <span className="text-3xl">☀️</span>
            <span className="gradient-green text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">{gartenInfo.holes} LÖCHER</span>
          </div>
          <h2 className="font-display text-xl font-bold text-secondary mb-1">Biergärten</h2>
          <p className="text-foreground text-sm mb-3">{gartenInfo.holes} echte Biergärten – jedes Loch eine volle Maß</p>
          <div className="flex items-center gap-4 text-muted-foreground text-xs">
            <span>Par {gartenInfo.par}</span>
            <span>•</span>
            <span>Nur Maß (1,0l)</span>
          </div>
        </button>
      </div>

      <p className="text-muted-foreground/40 text-xs mt-8 text-center">Prost! 🍻</p>
    </div>
  );
}
