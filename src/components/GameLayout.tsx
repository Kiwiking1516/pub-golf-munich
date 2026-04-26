import { useState } from 'react';
import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import { getCityById, getCityAccentCSS, getSecondCourseInfo } from '@/data/cities';
import { ChevronLeft, HelpCircle, Settings } from 'lucide-react';
import PlayerTab from './PlayerTab';
import CourseTab from './CourseTab';
import GameTab from './GameTab';
import MapTab from './MapTab';
import ScorecardTab from './ScorecardTab';
import BottomNav from './BottomNav';
import LanguageToggle from './LanguageToggle';
import HowToSheet from './HowToSheet';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';

export default function GameLayout() {
  const { activeTab, clearMode, mode, isGreenMode, city, alcoholFreeMode, setAlcoholFreeMode } = useGame();
  const { t } = useLanguage();
  const [helpOpen, setHelpOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const cityConfig = city ? getCityById(city) : null;
  const accentCSS = cityConfig ? getCityAccentCSS(cityConfig) : '46 65% 52%';
  const accentStyle = isGreenMode ? {} : { color: `hsl(${accentCSS})` };
  const accentClass = isGreenMode ? 'text-secondary' : '';

  const secondCourseRaw = city ? getSecondCourseInfo(city) : null;
  const courseName = isGreenMode && city
    ? `${secondCourseRaw?.emoji || ''} ${t(`course2.${city}.name`)}`
    : '🍺 Pub Golf';

  const tabContent: Record<string, React.ReactNode> = {
    spieler: <PlayerTab />,
    kurs: <CourseTab />,
    spiel: <GameTab />,
    map: <MapTab />,
    karte: <ScorecardTab />,
  };

  return (
    <div className="flex flex-col bg-background" style={{ height: 'var(--app-height)' }}>
      <header className="bg-card border-b border-border px-4 py-3 flex items-center gap-3">
        <button
          onClick={clearMode}
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-xs tap-target"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{t('layout.switchCourse')}</span>
        </button>
        <h1 className={`font-display font-bold flex-1 text-center ${accentClass}`} style={accentStyle}>
          {cityConfig?.emoji} {courseName}
        </h1>
        <button
          onClick={() => setHelpOpen(true)}
          className="text-sand hover:text-foreground transition-colors tap-target p-1 shrink-0"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
        <button
          onClick={() => setSettingsOpen(true)}
          className="text-sand hover:text-foreground transition-colors tap-target p-1 shrink-0"
          aria-label={t('af.settings')}
        >
          <Settings className="w-5 h-5" />
        </button>
        <LanguageToggle className="shrink-0" />
      </header>

      <main className="flex-1 overflow-hidden">
        {tabContent[activeTab]}
      </main>

      <BottomNav />
      <HowToSheet open={helpOpen} onClose={() => setHelpOpen(false)} />

      <Sheet open={settingsOpen} onOpenChange={setSettingsOpen}>
        <SheetContent side="right" className="bg-card border-border">
          <SheetHeader>
            <SheetTitle>{t('af.settings')}</SheetTitle>
          </SheetHeader>
          <div className="mt-6 p-4 rounded-xl border border-border bg-background flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <div className="text-foreground text-sm font-bold">🥤 {t('af.title')}</div>
              <p className="text-muted-foreground text-[11px] mt-1 leading-snug">{t('af.desc')}</p>
            </div>
            <Switch checked={alcoholFreeMode} onCheckedChange={setAlcoholFreeMode} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
