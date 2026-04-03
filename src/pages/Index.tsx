import { useGame } from '@/context/GameContext';
import RegionSelect from '@/components/RegionSelect';
import CitySelect from '@/components/CitySelect';
import ModeSelect from '@/components/ModeSelect';
import GameLayout from '@/components/GameLayout';

const Index = () => {
  const { region, city, mode } = useGame();

  if (!region) return <RegionSelect />;
  if (!city) return <CitySelect />;
  if (!mode) return <ModeSelect />;
  return <GameLayout />;
};

export default Index;
