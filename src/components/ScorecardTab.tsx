import { useState, useEffect } from 'react';
import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import { getScoreInfo, formatScoreVsPar, getTotalScoreColor } from '@/utils/scoring';
import { getRuleById } from '@/data/rules';

const KOLSCH_RANKING_KEY = 'pubgolf-koelsch-ranking';

function KolschRanking() {
  const { players, holes, scores, city, mode } = useGame();
  const { t } = useLanguage();
  const [votes, setVotes] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KOLSCH_RANKING_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.votes) setVotes(parsed.votes);
        if (parsed.submitted) setSubmitted(parsed.submitted);
      }
    } catch {}
  }, []);

  if (city !== 'köln' || mode !== 'biergarten') return null;

  const allPlayed = players.length > 0 && players.every(p =>
    holes.every((_, i) => scores[p]?.[i] !== undefined)
  );
  if (!allPlayed) return null;

  const kölschSorten = holes.map(h => {
    const match = h.drink.match(/^(.+?)\s+0,2l/);
    return match ? match[1] : h.name;
  });

  const handleVote = (player: string, sorte: string) => {
    const newVotes = { ...votes, [player]: sorte };
    setVotes(newVotes);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    localStorage.setItem(KOLSCH_RANKING_KEY, JSON.stringify({ votes, submitted: true }));
  };

  const handleReset = () => {
    setVotes({});
    setSubmitted(false);
    localStorage.removeItem(KOLSCH_RANKING_KEY);
  };

  const tally: Record<string, number> = {};
  Object.values(votes).forEach(v => { tally[v] = (tally[v] || 0) + 1; });
  const sortedSorten = Object.entries(tally).sort((a, b) => b[1] - a[1]);
  const rankMedals = ['🥇', '🥈', '🥉'];

  return (
    <div className="mx-4 mt-4 rounded-xl border-2 border-rule-special/30 bg-rule-special/5 overflow-hidden">
      <div className="bg-rule-special/20 px-4 py-3">
        <h3 className="font-display font-bold text-foreground text-sm">{t('kolsch.title')}</h3>
        <p className="text-sand text-[11px]">{t('kolsch.subtitle')}</p>
      </div>

      {!submitted ? (
        <div className="p-4 space-y-3">
          {players.map(player => (
            <div key={player}>
              <p className="text-foreground text-xs font-medium mb-1">{player}:</p>
              <div className="flex flex-wrap gap-1">
                {kölschSorten.map((sorte, i) => (
                  <button
                    key={i}
                    onClick={() => handleVote(player, sorte)}
                    className={`text-[10px] px-2 py-1 rounded-full border transition-colors tap-target ${
                      votes[player] === sorte
                        ? 'border-rule-special bg-rule-special/20 text-rule-special font-bold'
                        : 'border-border text-sand'
                    }`}
                  >
                    {sorte}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            disabled={Object.keys(votes).length < players.length}
            className={`w-full py-2.5 rounded-lg font-bold text-sm transition-all tap-target ${
              Object.keys(votes).length >= players.length
                ? 'bg-rule-special text-background'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            }`}
          >
            {t('kolsch.vote')}
          </button>
        </div>
      ) : (
        <div className="p-4 space-y-2">
          {sortedSorten.map(([sorte, count], i) => {
            const maxCount = sortedSorten[0]?.[1] || 1;
            const width = Math.round((count / maxCount) * 100);
            return (
              <div key={sorte} className="flex items-center gap-2">
                <span className="w-5 text-center text-xs">{rankMedals[i] || `${i + 1}.`}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-foreground text-xs font-medium">{sorte}</span>
                    <span className="text-sand text-[10px]">{count} {count > 1 ? t('kolsch.votes') : t('kolsch.vote1')}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-rule-special rounded-full transition-all" style={{ width: `${width}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
          <button onClick={handleReset} className="text-sand text-[10px] underline mt-2">{t('kolsch.revote')}</button>
        </div>
      )}
    </div>
  );
}

export default function ScorecardTab() {
  const { players, holes, scores, penalties, getPlayerTotal, getPlayerHolesPlayed,
    setActiveTab, clearMode, resetGame, isGreenMode, city, mode } = useGame();
  const { t } = useLanguage();
  const accentClass = isGreenMode ? 'text-green-accent' : 'text-gold';

  const courseName = isGreenMode && city ? t(`course2.${city}.name`) : '🍺 Pub Golf';

  const sorted = [...players].sort((a, b) => getPlayerTotal(a) - getPlayerTotal(b));
  const medals = ['🥇', '🥈', '🥉'];
  const totalPar = holes.reduce((s, h) => s + h.par, 0);

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <h2 className={`font-display font-bold text-lg ${accentClass} px-4 pt-4 pb-2`}>{courseName} – {t('score.scorecard')}</h2>

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
                <span>{played}/{holes.length} {t('score.holes')}</span>
              </div>
            </div>
          );
        })}
      </div>

      <KolschRanking />

      <div className="flex-1 overflow-x-auto px-4 mt-2">
        <table className="w-full text-xs border-collapse min-w-[320px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-sand py-2 px-1 w-6">#</th>
              <th className="text-left text-sand py-2 px-1">{t('score.venue')}</th>
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
            <tr className="border-t-2 border-border">
              <td className="py-2 px-1"></td>
              <td className="py-2 px-1 text-foreground font-bold">{t('score.total')}</td>
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

      <div className="p-4 space-y-2 border-t border-border mt-2">
        <button
          onClick={() => setActiveTab('spiel')}
          className="w-full py-3 rounded-xl border border-border text-foreground font-bold tap-target transition-all active:scale-[0.98]"
        >
          {t('score.backToGame')}
        </button>
        <div className="flex gap-2">
          <button
            onClick={clearMode}
            className="flex-1 py-3 rounded-xl border border-border text-sand font-bold tap-target text-sm"
          >
            {t('score.changeMode')}
          </button>
          <button
            onClick={() => { if (window.confirm(t('score.resetConfirm'))) resetGame(); }}
            className="flex-1 py-3 rounded-xl border border-penalty/30 text-penalty font-bold tap-target text-sm"
          >
            {t('score.resetGame')}
          </button>
        </div>
      </div>
    </div>
  );
}
