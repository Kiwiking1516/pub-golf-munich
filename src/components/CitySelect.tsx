import { useGame } from '@/context/GameContext';
import { CITIES } from '@/data/cities';
import { getCourseInfo } from '@/data/courses';

export default function CitySelect() {
  const { setCity } = useGame();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-green">
      <div className="animate-fade-in text-center mb-8">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">🗺️ Wähle deine Stadt</h1>
        <p className="text-muted-foreground text-sm">Pub Golf in ganz Deutschland</p>
      </div>

      <div className="w-full max-w-sm space-y-3 animate-fade-in">
        {CITIES.map((city) => {
          const accentStyle = { color: `hsl(${city.accentHue} ${city.accentSaturation}% ${city.accentLightness}%)` };
          const borderStyle = { borderColor: `hsl(${city.accentHue} ${city.accentSaturation}% ${city.accentLightness}% / 0.3)` };

          return (
            <button
              key={city.id}
              onClick={() => setCity(city.id)}
              className="w-full text-left p-4 rounded-xl border-2 bg-card hover:border-opacity-100 transition-all duration-300 tap-target group"
              style={borderStyle}>
              <div className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-lg font-bold" style={accentStyle}>{city.name}</h2>
                  <p className="text-muted-foreground text-xs truncate">{city.tagline}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-muted-foreground/40 text-xs mt-6 text-center">Prost! 🍻</p>
    </div>
  );
}
