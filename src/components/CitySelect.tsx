import { useState } from 'react';
import { useGame } from '@/context/GameContext';
import { CITIES } from '@/data/cities';
import { getCourseInfo } from '@/data/courses';
import { isPremium } from '@/utils/premium';
import { Lock, MapPin } from 'lucide-react';
import { CityId } from '@/types/game';

interface Props {
  onPremiumClick: () => void;
  onGPSClick: () => void;
}

export default function CitySelect({ onPremiumClick, onGPSClick }: Props) {
  const { setCity } = useGame();
  const premium = isPremium();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-green">
      <div className="animate-fade-in text-center mb-8">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">🗺️ Wähle deine Stadt</h1>
        <p className="text-muted-foreground text-sm">Pub Golf in ganz Deutschland</p>
      </div>

      <div className="w-full max-w-sm space-y-3 animate-fade-in">
        {CITIES.map((city) => {
          const bgInfo = getCourseInfo(city.id, 'biergolf');
          const gartenInfo = getCourseInfo(city.id, 'biergarten');
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
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-muted text-foreground">
                  {2} Kurse
                </span>
              </div>
            </button>);

        })}

        {/* GPS Course */}
        <button
          onClick={() => premium ? onGPSClick() : onPremiumClick()}
          className="w-full text-left p-4 rounded-xl border-2 border-border bg-card hover:border-foreground/20 transition-all duration-300 tap-target group">

          <div className="flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <div className="flex-1 min-w-0">
              <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                Mein Standort
                {!premium && <Lock className="w-3.5 h-3.5 text-muted-foreground" />}
              </h2>
              <p className="text-muted-foreground text-xs">Kurs aus deiner Umgebung</p>
            </div>
            {!premium &&
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                PREMIUM
              </span>
            }
            {premium &&
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-success/20 text-success">
                ✓ AKTIV
              </span>
            }
          </div>
        </button>
      </div>

      <button
        onClick={onPremiumClick}
        className="mt-6 text-muted-foreground text-xs hover:text-foreground transition-colors tap-target">

        🔓 Premium freischalten
      </button>

      <p className="text-muted-foreground/40 text-xs mt-4 text-center">Prost! 🍻</p>
    </div>);

}