import { useGame } from '@/context/GameContext';
import { getCityById, getCityAccentCSS, getSecondCourseInfo } from '@/data/cities';
import { ChevronLeft } from 'lucide-react';
import PlayerTab from './PlayerTab';
import CourseTab from './CourseTab';
import GameTab from './GameTab';
import ScorecardTab from './ScorecardTab';
import BottomNav from './BottomNav';

export default function GameLayout() {
  const { activeTab, clearMode, mode, isGreenMode, city } = useGame();
  const cityConfig = city ? getCityById(city) : null;
  const accentCSS = cityConfig ? getCityAccentCSS(cityConfig) : '46 65% 52%';
  const accentStyle = isGreenMode ? {} : { color: `hsl(${accentCSS})` };
  const accentClass = isGreenMode ? 'text-secondary' : '';

  const secondCourse = city ? getSecondCourseInfo(city) : null;
  const courseName = isGreenMode && secondCourse
    ? `${secondCourse.emoji} ${secondCourse.name}`
    : '🍺 Biergolf';

  const tabContent: Record<string, React.ReactNode> = {
    spieler: <PlayerTab />,
    kurs: <CourseTab />,
    spiel: <GameTab />,
    karte: <ScorecardTab />,
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 flex items-center gap-3">
        <button
          onClick={clearMode}
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-xs tap-target"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Kurs wechseln</span>
        </button>
        <h1 className={`font-display font-bold flex-1 text-center ${accentClass}`} style={accentStyle}>
          {cityConfig?.emoji} {courseName}
        </h1>
        <div className="w-16" />
      </header>

      {/* Content */}
      <main className="flex-1 overflow-hidden">
        {tabContent[activeTab]}
      </main>

      {/* Bottom nav */}
      <BottomNav />
    </div>
  );
}
