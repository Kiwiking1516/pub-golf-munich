import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import { getSecondCourseInfo } from '@/data/cities';
import { getScoreInfo, getScoreColor, formatScoreVsPar, getTotalScoreColor } from '@/utils/scoring';
import { getRuleById } from '@/data/rules';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Trophy, Beer, Dices, X } from 'lucide-react';
import { useState } from 'react';

function ProgressBar() {
  const { holes, currentHole, setCurrentHole, scores, players, isGreenMode } = useGame();
  const { t } = useLanguage();
  const accentBg = isGreenMode ? 'bg-green-accent' : 'bg-gold';

  return (
    <div className="px-4 pt-3 pb-2">
      <div className="flex gap-0.5 mb-1">
        {holes.map((hole, i) => {
          const hasScores = players.every(p => scores[p]?.[i] !== undefined);
          const hasRules = hole.activeRules.length > 0;
          const isCurrent = i === currentHole;
          let bg = 'bg-muted/40';
          if (hasScores) bg = accentBg;
          else if (isCurrent) bg = 'bg-foreground';
          else if (hasRules) bg = 'bg-rule-fun/60';
          return (
            <button
              key={i}
              onClick={() => setCurrentHole(i)}
              className={`flex-1 h-2 rounded-full transition-all ${bg} ${isCurrent ? 'ring-1 ring-foreground' : ''} tap-target`}
              style={{ minWidth: 0 }}
            />
          );
        })}
      </div>
      <p className={`text-xs text-center ${isGreenMode ? 'text-green-accent' : 'text-gold'}`}>
        {t('game.hole')} {currentHole + 1} / {holes.length}
      </p>
    </div>
  );
}

function HoleInfoCard() {
  const { holes, currentHole, isGreenMode, city } = useGame();
  const { t } = useLanguage();
  const hole = holes[currentHole];
  const isSignature = hole.flags.includes('signature');
  const isTurn = hole.flags.includes('turn');
  const isFinale = hole.flags.includes('finale');
  const accentClass = isGreenMode ? 'text-green-accent' : 'text-gold';

  const secondCourse = city ? getSecondCourseInfo(city) : null;
  const scName = city ? t(`course2.${city}.name`) : '';
  let borderClass = 'border-border';
  if (isSignature) borderClass = 'border-gold';
  else if (isFinale) borderClass = 'border-score-albatross';
  else if (isTurn) borderClass = 'border-green-accent';

  return (
    <div className={`mx-4 rounded-xl border-2 ${borderClass} ${isSignature ? 'bg-gold/5' : 'bg-card'} p-4 relative`}>
      {isTurn && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-accent text-background text-[10px] font-bold px-3 py-0.5 rounded-full">{t('game.turn')}</div>}
      {isFinale && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-score-albatross text-background text-[10px] font-bold px-3 py-0.5 rounded-full">{t('game.finale')}</div>}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`font-display text-2xl font-bold ${accentClass}`}>#{currentHole + 1}</span>
            <span className="text-sand text-xs">{hole.time}</span>
          </div>
          <h3 className="font-display text-lg font-bold text-foreground mb-0.5">{hole.name}</h3>
          <p className="text-sand text-sm">{hole.drink}</p>
          {isGreenMode && secondCourse && (
            <span className="inline-block mt-1 text-[10px] bg-green-accent/20 text-green-accent px-2 py-0.5 rounded-full font-bold">
              {secondCourse.emoji} {scName.toUpperCase()} {currentHole + 1}/{holes.length}
            </span>
          )}
        </div>
        <div className={`${isGreenMode ? 'bg-green-accent/20' : 'bg-gold/20'} rounded-xl px-4 py-2 text-center`}>
          <div className="text-sand text-[10px] font-bold uppercase">Par</div>
          <div className={`font-display text-2xl font-bold ${accentClass}`}>{hole.par}</div>
        </div>
      </div>
      {hole.flags.includes('signature') && (
        <div className="mt-2 flex items-center gap-1">
          <span className="text-gold text-xs">{t('game.signatureHole')}</span>
        </div>
      )}
    </div>
  );
}

function RulesPanel() {
  const { holes, currentHole, rollRuleForHole, removeRuleFromHole } = useGame();
  const { t } = useLanguage();
  const hole = holes[currentHole];
  const [expanded, setExpanded] = useState<string | null>(null);
  const [rolling, setRolling] = useState(false);
  const [rollResult, setRollResult] = useState<'none' | 'rule' | null>(null);

  const count = hole.activeRules.length;

  const handleRoll = () => {
    setRolling(true);
    setRollResult(null);
    setTimeout(() => {
      const result = rollRuleForHole(currentHole);
      setRollResult(result ? 'rule' : 'none');
      setRolling(false);
      setTimeout(() => setRollResult(null), 2000);
    }, 600);
  };

  return (
    <div className="mx-4 mt-3 rounded-lg border border-rule-fun/60 bg-rule-fun/10 overflow-hidden">
      <div className="bg-rule-fun/20 px-3 py-2">
        <span className="text-rule-fun text-xs font-bold">
          🎲 {count > 0 ? `${count} ${count > 1 ? t('game.specialRulesPlural') : t('game.specialRules')}` : t('game.noRules')}
        </span>
      </div>

      {count === 0 && !rollResult && (
        <div className="px-3 pt-2 text-center animate-fade-in">
          <span className="text-sand text-sm">{t('game.rollPrompt')}</span>
        </div>
      )}

      {rollResult === 'none' && (
        <div className="px-3 pt-2 text-center animate-fade-in">
          <span className="text-sand text-sm">✨ {t('game.noRuleRolled')}</span>
        </div>
      )}

      <div className="p-2">
        <button
          onClick={handleRoll}
          disabled={rolling}
          className={`w-full py-2.5 rounded-lg text-sm font-bold bg-rule-fun/25 hover:bg-rule-fun/35 text-rule-fun flex items-center justify-center gap-2 tap-target transition-all ${rolling ? 'animate-pulse' : ''}`}
        >
          <Dices className={`w-4 h-4 ${rolling ? 'animate-spin' : ''}`} /> {rolling ? '...' : t('game.rollRule')}
        </button>
      </div>

      {count > 0 && (
        <div className="p-2 space-y-1">
          {hole.activeRules.map(rId => {
            const rule = getRuleById(rId);
            if (!rule) return null;
            const isExp = expanded === rId;
            const ruleName = t(`rule.${rId}.name`);
            const ruleShort = t(`rule.${rId}.short`);
            const ruleDesc = t(`rule.${rId}.desc`);
            return (
              <div key={rId} className="flex items-start gap-1 animate-fade-in">
                <button onClick={() => setExpanded(isExp ? null : rId)} className="flex-1 text-left p-2 rounded-md hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-2">
                    <span>{rule.emoji}</span>
                    <span className="text-foreground text-sm font-medium flex-1">{ruleName}</span>
                    <span className="text-sand text-[10px]">{ruleShort}</span>
                  </div>
                  {isExp && <p className="mt-1 text-sand text-xs leading-relaxed">{ruleDesc}</p>}
                </button>
                <button
                  onClick={() => removeRuleFromHole(currentHole, rId)}
                  className="p-2 text-sand hover:text-penalty transition-colors tap-target"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function PlayerScoreInput({ player }: { player: string }) {
  const { holes, currentHole, scores, penalties, setScore, setPenalty } = useGame();
  const { t } = useLanguage();
  const hole = holes[currentHole];
  const score = scores[player]?.[currentHole] ?? hole.par;
  const penaltyCount = penalties[player]?.[currentHole] ?? 0;
  const info = getScoreInfo(score, hole.par);
  const scoreColor = getScoreColor(score, hole.par);
  const hasScore = scores[player]?.[currentHole] !== undefined;

  return (
    <div className={`bg-card rounded-lg border ${hasScore ? 'border-border' : 'border-border/50'} p-3 animate-fade-in`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-foreground font-medium text-sm">{player}</span>
        {hasScore && <span className={`text-[10px] font-bold ${scoreColor}`}>{info.label} {info.emoji}</span>}
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setScore(player, currentHole, score - 1)}
          className="w-12 h-12 rounded-xl bg-muted text-foreground font-bold text-xl tap-target transition-transform active:scale-90 flex items-center justify-center"
        >−</button>
        <span className={`font-display text-4xl font-bold ${hasScore ? scoreColor : 'text-muted-foreground'} w-16 text-center transition-colors`}>
          {hasScore ? score : '–'}
        </span>
        <button
          onClick={() => setScore(player, currentHole, score + 1)}
          className="w-12 h-12 rounded-xl bg-muted text-foreground font-bold text-xl tap-target transition-transform active:scale-90 flex items-center justify-center"
        >+</button>
        <button
          onClick={() => {
            if (!hasScore) setScore(player, currentHole, score);
            setPenalty(player, currentHole, penaltyCount + 1);
          }}
          className="relative w-12 h-12 rounded-xl bg-penalty/20 text-penalty tap-target transition-transform active:scale-90 flex items-center justify-center"
        >
          <Beer className="w-5 h-5" />
          {penaltyCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-penalty text-background text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {penaltyCount}
            </span>
          )}
        </button>
      </div>
      {penaltyCount > 0 && (
        <div className="mt-1 flex items-center justify-between">
          <p className="text-penalty text-[10px]">
            {penaltyCount} {penaltyCount > 1 ? t('game.penaltySips') : t('game.penaltySip')}
          </p>
          <button onClick={() => setPenalty(player, currentHole, penaltyCount - 1)} className="text-sand text-[10px] underline">{t('game.remove')}</button>
        </div>
      )}
    </div>
  );
}

function Leaderboard() {
  const { players, getPlayerTotal, getPlayerHolesPlayed, isGreenMode } = useGame();
  const { t } = useLanguage();

  const sorted = [...players].sort((a, b) => getPlayerTotal(a) - getPlayerTotal(b));
  const medals = ['🥇', '🥈', '🥉'];

  return (
    <div className="mx-4 mt-4 mb-2">
      <h4 className="text-sand text-xs font-bold mb-2 uppercase">{t('game.standing')}</h4>
      <div className="space-y-1">
        {sorted.map((p, i) => {
          const total = getPlayerTotal(p);
          const played = getPlayerHolesPlayed(p);
          const colorClass = getTotalScoreColor(total);
          return (
            <div key={p} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${i === 0 && played > 0 ? 'bg-gold/10 border border-gold/20' : 'bg-card'}`}>
              <span className="w-6 text-center">{medals[i] || `${i + 1}.`}</span>
              <span className="flex-1 text-foreground font-medium">{p}</span>
              <span className="text-sand text-xs">{played}{t('game.holes_short')}</span>
              <span className={`font-display font-bold ${played > 0 ? colorClass : 'text-muted-foreground'}`}>
                {played > 0 ? formatScoreVsPar(total) : '–'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function GameTab() {
  const { holes, currentHole, setCurrentHole, players, scores, setActiveTab, isGreenMode } = useGame();
  const { t } = useLanguage();
  const allScored = players.every(p => scores[p]?.[currentHole] !== undefined);
  const isLast = currentHole === holes.length - 1;
  const isFirst = currentHole === 0;
  const accentBg = isGreenMode ? 'gradient-green' : 'gradient-gold';

  if (players.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center">
        <p className="text-sand text-lg mb-4">{t('game.noPlayers')}</p>
        <button onClick={() => setActiveTab('spieler')} className={`${accentBg} text-primary-foreground font-bold px-6 py-3 rounded-xl tap-target`}>
          {t('game.addPlayers')}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-4">
      <ProgressBar />
      <HoleInfoCard />
      <RulesPanel />

      <div className="px-4 mt-4 space-y-2">
        {players.map(p => <PlayerScoreInput key={p} player={p} />)}
      </div>

      <div className="px-4 mt-4 flex gap-3">
        <button
          onClick={() => setCurrentHole(currentHole - 1)}
          disabled={isFirst}
          className={`flex-1 py-3 rounded-xl border border-border text-foreground font-bold tap-target transition-all flex items-center justify-center gap-1 ${isFirst ? 'opacity-30 cursor-not-allowed' : 'active:scale-[0.98]'}`}
        >
          <ChevronLeft className="w-4 h-4" /> {t('game.back')}
        </button>
        {isLast ? (
          <button
            onClick={() => setActiveTab('karte')}
            className={`flex-[2] py-3 rounded-xl ${accentBg} text-primary-foreground font-bold tap-target transition-transform active:scale-[0.98] flex items-center justify-center gap-1`}
          >
            <Trophy className="w-4 h-4" /> {t('game.results')}
          </button>
        ) : (
          <button
            onClick={() => setCurrentHole(currentHole + 1)}
            className={`flex-[2] py-3 rounded-xl ${accentBg} text-primary-foreground font-bold tap-target transition-transform active:scale-[0.98] flex items-center justify-center gap-1`}
          >
            {allScored ? '✓ ' : ''}{t('game.next')} <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      <Leaderboard />
    </div>
  );
}
