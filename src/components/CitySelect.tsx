import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import { CITIES } from '@/data/cities';
import { ChevronLeft } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

export default function CitySelect() {
  const { setCity, region, clearRegion } = useGame();
  const { t } = useLanguage();

  const filteredCities = CITIES.filter(c => c.region === region);

  return (
    <div className="flex flex-col items-center p-6 bg-deep-green overflow-y-auto overscroll-contain" style={{ height: 'var(--app-height)', WebkitOverflowScrolling: 'touch' }}>
      <div className="self-start flex items-center justify-between w-full mb-4">
        <button onClick={clearRegion} className="text-muted-foreground flex items-center gap-1 text-sm tap-target">
          <ChevronLeft className="w-4 h-4" /> {t('region.back')}
        </button>
        <LanguageToggle />
      </div>

      <div className="animate-fade-in text-center mb-8">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">{t('city.title')}</h1>
        <p className="text-muted-foreground text-sm">{t('city.subtitle')}</p>
      </div>

      <div className="w-full max-w-sm space-y-3 animate-fade-in">
        {filteredCities.map((city) => {
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
                  <p className="text-muted-foreground text-xs truncate">{t(`city.${city.id}.tagline`)}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-muted-foreground/40 text-xs mt-4 text-center">{t('city.footer')}</p>
    </div>
  );
}
