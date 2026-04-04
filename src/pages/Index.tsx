import { useEffect, useState } from 'react';
import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import RegionSelect from '@/components/RegionSelect';
import CitySelect from '@/components/CitySelect';
import ModeSelect from '@/components/ModeSelect';
import GameLayout from '@/components/GameLayout';
import { decodeCourse } from '@/utils/courseShare';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CITIES } from '@/data/cities';
import { CityId, GameMode, Hole } from '@/types/game';

const Index = () => {
  const { region, city, mode, setRegion, setCity, setMode, setCustomHoles } = useGame();
  const { t } = useLanguage();
  const [showImport, setShowImport] = useState(false);
  const [importData, setImportData] = useState<{ city: CityId; mode: GameMode; holes: Hole[] } | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/#\/shared\/(.+)/);
    if (match) {
      const decoded = decodeCourse(match[1]);
      if (decoded) {
        setImportData(decoded);
        setShowImport(true);
      }
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  const handleLoadCourse = () => {
    if (!importData) return;
    const cityConfig = CITIES.find(c => c.id === importData.city);
    if (cityConfig) {
      setRegion(cityConfig.region);
    }
    setCity(importData.city);
    setMode(importData.mode);
    setCustomHoles(importData.holes);
    setShowImport(false);
    setImportData(null);
  };

  const importCityName = importData ? CITIES.find(c => c.id === importData.city)?.name || importData.city : '';
  const importTotalPar = importData ? importData.holes.reduce((s, h) => s + h.par, 0) : 0;

  return (
    <>
      <Dialog open={showImport} onOpenChange={(open) => { if (!open) { setShowImport(false); setImportData(null); } }}>
        <DialogContent className="max-w-sm mx-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-gold">{t('course.sharedCourse')}</DialogTitle>
          </DialogHeader>
          {importData && (
            <div className="space-y-4">
              <div className="space-y-1 text-sm">
                <p className="text-foreground"><span className="text-sand">{t('course.venue')}:</span> {importCityName}</p>
                <p className="text-foreground"><span className="text-sand">Holes:</span> {importData.holes.length}</p>
                <p className="text-foreground"><span className="text-sand">Par:</span> {importTotalPar}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => { setShowImport(false); setImportData(null); }}
                >
                  {t('course.cancelImport')}
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleLoadCourse}
                >
                  {t('course.loadCourse')}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {!region ? <RegionSelect /> :
       !city ? <CitySelect /> :
       !mode ? <ModeSelect /> :
       <GameLayout />}
    </>
  );
};

export default Index;
