import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import RegionSelect from '@/components/RegionSelect';
import CitySelect from '@/components/CitySelect';
import ModeSelect from '@/components/ModeSelect';
import GameLayout from '@/components/GameLayout';
import { CITIES } from '@/data/cities';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { region, city, mode, pendingImport, clearPendingImport, setRegion, setCity, setMode, setCustomHoles } = useGame();
  const { t } = useLanguage();

  if (pendingImport) {
    const cityConfig = CITIES.find(c => c.id === pendingImport.city);
    const cityName = cityConfig ? `${cityConfig.emoji} ${cityConfig.name}` : pendingImport.city;
    const totalPar = pendingImport.holes.reduce((s, h) => s + h.par, 0);
    const previewBars = pendingImport.holes.slice(0, 5).map(h => h.name);
    const hasMore = pendingImport.holes.length > 5;

    const handleLoad = () => {
      if (cityConfig) setRegion(cityConfig.region);
      setCity(pendingImport.city);
      setMode(pendingImport.mode);
      setCustomHoles(pendingImport.holes);
      clearPendingImport();
    };

    return (
      <div className="min-h-[var(--app-height)] bg-background flex items-center justify-center p-4">
        <div className="bg-card border border-border rounded-xl p-6 max-w-sm w-full space-y-5 animate-fade-in">
          <h2 className="text-gold font-display text-xl font-bold text-center">{t('course.sharedCourse')}</h2>
          <div className="space-y-2 text-sm">
            <p className="text-foreground"><span className="text-sand">{t('course.venue')}:</span> {cityName}</p>
            <p className="text-foreground"><span className="text-sand">Holes:</span> {pendingImport.holes.length}</p>
            <p className="text-foreground"><span className="text-sand">Par:</span> {totalPar}</p>
          </div>
          <div className="space-y-1">
            {previewBars.map((name, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-sand">
                <span className="text-gold font-bold w-5 text-right">{i + 1}.</span>
                <span className="truncate">{name}</span>
              </div>
            ))}
            {hasMore && <p className="text-xs text-sand pl-7">…+{pendingImport.holes.length - 5} more</p>}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={clearPendingImport}>
              {t('course.cancelImport')}
            </Button>
            <Button className="flex-1" onClick={handleLoad}>
              {t('course.loadCourse')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {!region ? <RegionSelect /> :
       !city ? <CitySelect /> :
       !mode ? <ModeSelect /> :
       <GameLayout />}
    </>
  );
};

export default Index;
