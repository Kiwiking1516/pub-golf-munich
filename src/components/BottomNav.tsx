import { useGame } from '@/context/GameContext';
import { TabType } from '@/types/game';
import { Users, Map, Crosshair, MapPin, Trophy } from 'lucide-react';

const tabs: { id: TabType; label: string; icon: typeof Users }[] = [
  { id: 'spieler', label: 'Spieler', icon: Users },
  { id: 'kurs', label: 'Kurs', icon: Map },
  { id: 'spiel', label: 'Spiel', icon: Crosshair },
  { id: 'map', label: 'Map', icon: MapPin },
  { id: 'karte', label: 'Score', icon: Trophy },
];

export default function BottomNav() {
  const { activeTab, setActiveTab, isGreenMode } = useGame();

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
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-bold">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
