import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import { TabType } from '@/types/game';
import { Users, Map, Crosshair, MapPin, Trophy } from 'lucide-react';

export default function BottomNav() {
  const { activeTab, setActiveTab, isGreenMode } = useGame();
  const { t } = useLanguage();

  const tabs: { id: TabType; labelKey: string; icon: typeof Users }[] = [
    { id: 'spieler', labelKey: 'nav.players', icon: Users },
    { id: 'kurs', labelKey: 'nav.course', icon: Map },
    { id: 'spiel', labelKey: 'nav.game', icon: Crosshair },
    { id: 'map', labelKey: 'nav.map', icon: MapPin },
    { id: 'karte', labelKey: 'nav.score', icon: Trophy },
  ];

  return (
    <nav className="bg-card border-t border-border safe-bottom">
      <div className="flex">
        {tabs.map(tab => {
          const active = activeTab === tab.id;
          const Icon = tab.icon;
          const activeColor = isGreenMode ? 'text-green-accent' : 'text-gold';
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 tap-target transition-colors ${active ? activeColor : 'text-sand'}`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[10px] font-bold">{t(tab.labelKey)}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
