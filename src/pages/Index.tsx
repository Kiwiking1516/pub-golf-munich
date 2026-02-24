import { useGame } from '@/context/GameContext';
import CitySelect from '@/components/CitySelect';
import ModeSelect from '@/components/ModeSelect';
import GameLayout from '@/components/GameLayout';

const Index = () => {
  const { city, mode } = useGame();

  if (!city) return <CitySelect />;
  if (!mode) return <ModeSelect />;
  return <GameLayout />;
};

export default Index;
