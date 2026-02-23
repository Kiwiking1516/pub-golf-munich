import { useState } from 'react';
import { useGame } from '@/context/GameContext';
import CitySelect from '@/components/CitySelect';
import ModeSelect from '@/components/ModeSelect';
import GameLayout from '@/components/GameLayout';
import PremiumScreen from '@/components/PremiumScreen';
import GPSCourse from '@/components/GPSCourse';

type Screen = 'city' | 'mode' | 'game' | 'premium' | 'gps';

const Index = () => {
  const { city, mode } = useGame();
  const [screen, setScreen] = useState<Screen | null>(null);

  // Determine screen from state if not overridden
  const currentScreen = screen || (mode ? 'game' : city ? 'mode' : 'city');

  if (currentScreen === 'premium') {
    return <PremiumScreen onBack={() => setScreen(null)} onSuccess={() => setScreen(null)} />;
  }

  if (currentScreen === 'gps') {
    return <GPSCourse onBack={() => setScreen(null)} />;
  }

  if (currentScreen === 'city' || (!city && !mode)) {
    return <CitySelect onPremiumClick={() => setScreen('premium')} onGPSClick={() => setScreen('gps')} />;
  }

  if (currentScreen === 'mode' || !mode) {
    return <ModeSelect />;
  }

  return <GameLayout />;
};

export default Index;
