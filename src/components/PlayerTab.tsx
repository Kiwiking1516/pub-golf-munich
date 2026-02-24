import { useState } from 'react';
import { useGame } from '@/context/GameContext';
import { getSecondCourseInfo } from '@/data/cities';
import { Plus, X } from 'lucide-react';

export default function PlayerTab() {
  const { players, addPlayer, removePlayer, holes, mode, city, startGame, gameStarted, isGreenMode } = useGame();
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const accentClass = isGreenMode ? 'text-green-accent' : 'text-gold';
  const borderAccent = isGreenMode ? 'border-green-accent' : 'border-gold';
  const bgAccent = isGreenMode ? 'gradient-green' : 'gradient-gold';

  const secondCourse = city ? getSecondCourseInfo(city) : null;

  const handleAdd = () => {
    setError('');
    if (!input.trim()) return;
    if (!addPlayer(input)) {
      setError('Name existiert bereits oder ist ungültig');
      return;
    }
    setInput('');
  };

  const totalPar = holes.reduce((s, h) => s + h.par, 0);

  const modeName = isGreenMode && secondCourse
    ? `${secondCourse.emoji} ${secondCourse.name}`
    : '🍺 Biergolf';
  const modeDesc = isGreenMode && secondCourse
    ? secondCourse.drink
    : 'Mix aus Bieren & Drinks';

  return (
    <div className="flex flex-col h-full p-4">
      {/* Mode info */}
      <div className="bg-card rounded-lg p-3 mb-4 border border-border">
        <div className="flex items-center gap-2 mb-1">
          <span className={`font-display font-bold ${accentClass}`}>
            {modeName}
          </span>
        </div>
        <p className="text-sand text-xs">
          {holes.length} Löcher · Par {totalPar} · {modeDesc}
        </p>
        {isGreenMode && secondCourse?.warning && (
          <p className="text-penalty text-[10px] mt-1">{secondCourse.warning}</p>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={input}
          onChange={e => { setInput(e.target.value); setError(''); }}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          placeholder="Spielername..."
          maxLength={20}
          className="flex-1 bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-base tap-target"
        />
        <button
          onClick={handleAdd}
          className={`${bgAccent} text-primary-foreground rounded-lg px-4 tap-target font-bold text-lg transition-transform active:scale-95`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      {error && <p className="text-penalty text-xs mb-2">{error}</p>}

      {/* Player list */}
      <div className="flex-1 overflow-y-auto space-y-2 mt-2">
        {players.length === 0 && (
          <p className="text-sand text-sm text-center mt-8">Füge Spieler hinzu um loszulegen</p>
        )}
        {players.map((p, i) => (
          <div key={p} className="flex items-center gap-3 bg-card rounded-lg px-4 py-3 border border-border animate-fade-in">
            <span className={`font-display font-bold ${accentClass} w-6 text-center`}>{i + 1}</span>
            <span className="flex-1 text-foreground font-medium">{p}</span>
            <button
              onClick={() => removePlayer(p)}
              className="text-muted-foreground hover:text-penalty transition-colors tap-target flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Start button */}
      {players.length >= 1 && !gameStarted && (
        <button
          onClick={startGame}
          className={`mt-4 w-full ${bgAccent} text-primary-foreground font-display font-bold text-lg py-4 rounded-xl tap-target transition-transform active:scale-[0.98] animate-fade-in`}
        >
          ⛳ Spiel starten
        </button>
      )}
      {gameStarted && players.length >= 1 && (
        <p className="mt-4 text-center text-sand text-sm">Spiel läuft – wechsle zum Tab „Spiel"</p>
      )}
    </div>
  );
}
