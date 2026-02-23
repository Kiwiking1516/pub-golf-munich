import { useGame } from '@/context/GameContext';
import { getScoreInfo, formatScoreVsPar, getTotalScoreColor } from '@/utils/scoring';
import { getRuleById } from '@/data/rules';

export default function ScorecardTab() {
  const { players, holes, scores, penalties, getPlayerTotal, getPlayerHolesPlayed,
    setActiveTab, clearMode, resetGame, isGreenMode } = useGame();
  const accentClass = isGreenMode ? 'text-green-accent' : 'text-gold';
  const accentBg = isGreenMode ? 'gradient-green' : 'gradient-gold';

  const sorted = [...players].sort((a, b) => getPlayerTotal(a) - getPlayerTotal(b));
  const medals = ['🥇', '🥈', '🥉'];
  const totalPar = holes.reduce((s, h) => s + h.par, 0);

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <h2 className={`font-display font-bold text-lg ${accentClass} px-4 pt-4 pb-2`}>Scorecard</h2>

      {/* Player summary cards */}
      <div className="flex gap-3 overflow-x-auto px-4 pb-3 scrollbar-hide">
        {sorted.map((p, i) => {
          const total = getPlayerTotal(p);
          const played = getPlayerHolesPlayed(p);
          const totalPen = Object.values(penalties[p] || {}).reduce((a, b) => a + b, 0);
          const colorClass = getTotalScoreColor(total);
          return (
            <div key={p} className={`shrink-0 bg-card rounded-xl border border-border p-3 min-w-[140px] ${i === 0 ? 'border-gold/40' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{medals[i] || `${i + 1}.`}</span>
                <span className="text-foreground font-bold text-sm truncate">{p}</span>
              </div>
              <div className={`font-display text-2xl font-bold ${colorClass} mb-1`}>
                {played > 0 ? formatScoreVsPar(total) : '–'}
              </div>
              <div className="flex items-center gap-2 text-sand text-[10px]">
                <span>🍺 {totalPen}</span>
                <span>·</span>
                <span>{played}/{holes.length} Löcher</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Score table */}
      <div className="flex-1 overflow-x-auto px-4">
        <table className="w-full text-xs border-collapse min-w-[320px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-sand py-2 px-1 w-6">#</th>
              <th className="text-left text-sand py-2 px-1">Lokal</th>
              <th className="text-center text-sand py-2 px-1 w-10">Par</th>
              {players.map(p => (
                <th key={p} className="text-center text-foreground py-2 px-1 font-bold truncate max-w-[60px]">{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {holes.map((hole, i) => {
              const showTurn = hole.flags.includes('turn');
              return (
                <tr key={i} className={`border-b border-border/50 ${showTurn ? 'border-b-2 border-b-green-accent/40' : ''}`}>
                  <td className={`py-2 px-1 font-display font-bold ${accentClass}`}>{i + 1}</td>
                  <td className="py-2 px-1 text-foreground">
                    <span className="truncate block max-w-[100px]">{hole.name}</span>
                    {hole.activeRules.length > 0 && (
                      <span className="text-rule-fun text-[9px]">
                        {hole.activeRules.map(rId => {
                          const r = getRuleById(rId);
                          return r?.emoji;
                        }).join(' ')}
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-1 text-center text-sand font-bold">{hole.par}</td>
                  {players.map(p => {
                    const s = scores[p]?.[i];
                    if (s === undefined) return <td key={p} className="py-2 px-1 text-center text-muted-foreground">–</td>;
                    const info = getScoreInfo(s, hole.par);
                    const pen = penalties[p]?.[i] || 0;
                    return (
                      <td key={p} className="py-2 px-1 text-center">
                        <span className={`inline-flex items-center justify-center text-[11px] font-bold ${info.colorClass} ${info.isCircle ? 'w-7 h-7 rounded-full' : 'px-2 py-0.5 rounded-md'}`}>
                          {s}{pen > 0 && <sup className="text-[8px] ml-0.5">+{pen}</sup>}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            {/* Total row */}
            <tr className="border-t-2 border-border">
              <td className="py-2 px-1"></td>
              <td className="py-2 px-1 text-foreground font-bold">Gesamt</td>
              <td className="py-2 px-1 text-center font-bold text-sand">{totalPar}</td>
              {players.map(p => {
                const total = getPlayerTotal(p);
                const played = getPlayerHolesPlayed(p);
                const colorClass = getTotalScoreColor(total);
                return (
                  <td key={p} className="py-2 px-1 text-center">
                    <span className={`font-display font-bold text-sm ${played > 0 ? colorClass : 'text-muted-foreground'}`}>
                      {played > 0 ? formatScoreVsPar(total) : '–'}
                    </span>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="p-4 space-y-2 border-t border-border mt-2">
        <button
          onClick={() => setActiveTab('spiel')}
          className="w-full py-3 rounded-xl border border-border text-foreground font-bold tap-target transition-all active:scale-[0.98]"
        >
          ← Zurück zum Spiel
        </button>
        <div className="flex gap-2">
          <button
            onClick={clearMode}
            className="flex-1 py-3 rounded-xl border border-border text-sand font-bold tap-target text-sm"
          >
            ⛳ Modus wechseln
          </button>
          <button
            onClick={() => { if (window.confirm('Spiel wirklich zurücksetzen? Alle Scores gehen verloren!')) resetGame(); }}
            className="flex-1 py-3 rounded-xl border border-penalty/30 text-penalty font-bold tap-target text-sm"
          >
            🗑 Reset
          </button>
        </div>
      </div>
    </div>
  );
}
