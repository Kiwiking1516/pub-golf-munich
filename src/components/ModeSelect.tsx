import { useGame } from '@/context/GameContext';
import { getTotalPar } from '@/data/courses';

export default function ModeSelect() {
  const { setMode } = useGame();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-green">
      <div className="animate-fade-in text-center mb-10">
        <h1 className="font-display text-4xl font-bold text-gold mb-2">⛳ Pub Golf</h1>
        <p className="font-display text-xl text-cream">München</p>
        <p className="text-sand text-sm mt-2">Wähle deinen Kurs</p>
      </div>

      <div className="w-full max-w-sm space-y-5 animate-fade-in">
        {/* Biergolf */}
        <button
          onClick={() => setMode('biergolf')}
          className="w-full text-left p-5 rounded-xl border-2 border-gold/30 bg-card hover:border-gold hover:glow-gold transition-all duration-300 tap-target group"
        >
          <div className="flex items-start justify-between mb-3">
            <span className="text-3xl">🍺</span>
            <span className="gradient-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">18 LÖCHER</span>
          </div>
          <h2 className="font-display text-xl font-bold text-gold mb-1">Biergolf</h2>
          <p className="text-cream text-sm mb-3">18 Bars & Wirtshäuser durch die Münchner Innenstadt</p>
          <div className="flex items-center gap-4 text-sand text-xs">
            <span>Par 56</span>
            <span>•</span>
            <span>Mix aus Bieren & Drinks</span>
          </div>
          <div className="mt-3 text-xs text-sand/60">10:00 – 23:00 Uhr</div>
        </button>

        {/* Biergärten */}
        <button
          onClick={() => setMode('biergarten')}
          className="w-full text-left p-5 rounded-xl border-2 border-green-accent/30 bg-card hover:border-green-accent hover:glow-green transition-all duration-300 tap-target group"
        >
          <div className="flex items-start justify-between mb-3">
            <span className="text-3xl">☀️</span>
            <span className="gradient-green text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">9 LÖCHER</span>
          </div>
          <h2 className="font-display text-xl font-bold text-green-accent mb-1">Biergärten</h2>
          <p className="text-cream text-sm mb-3">9 echte Münchner Biergärten – jedes Loch eine volle Maß</p>
          <div className="flex items-center gap-4 text-sand text-xs">
            <span>Par 45</span>
            <span>•</span>
            <span>Nur Maß (1,0l)</span>
          </div>
          <div className="mt-3 text-xs text-sand/60">11:00 – 21:00 Uhr</div>
        </button>
      </div>

      <p className="text-sand/40 text-xs mt-8 text-center">Prost! 🍻</p>
    </div>
  );
}
