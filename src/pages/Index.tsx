import { useGame } from '@/context/GameContext';
import ModeSelect from '@/components/ModeSelect';
import GameLayout from '@/components/GameLayout';

const Index = () => {
  const { mode } = useGame();

  if (!mode) return <ModeSelect />;
  return <GameLayout />;
};

export default Index;
