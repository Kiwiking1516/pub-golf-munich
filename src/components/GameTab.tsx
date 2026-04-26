import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import { getSecondCourseInfo } from '@/data/cities';
import { getScoreInfo, getScoreColor, formatScoreVsPar, getTotalScoreColor } from '@/utils/scoring';
import { getRuleById } from '@/data/rules';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Trophy, Beer, Dices, X, RefreshCw, Plus, Navigation as NavigationIcon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import MapChoiceDialog, { getMapPref, navigateTo } from './MapChoiceDialog';
import { neutralizeDrinkLabel } from '@/utils/alcoholFree';

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
  const { holes, currentHole, isGreenMode, city, alcoholFreeMode } = useGame();
  const [navTarget, setNavTarget] = useState<{ lat: number; lng: number; label: string } | null>(null);
  const { t, lang } = useLanguage();
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
          <div className="flex items-center gap-1.5">
            <h3 className="font-display text-lg font-bold text-foreground mb-0.5">{hole.name}</h3>
            {hole.lat && hole.lng && (
              <button
                onClick={() => {
                  const pref = getMapPref();
                  if (pref) {
                    navigateTo(pref, hole.lat!, hole.lng!, hole.name);
                  } else {
                    setNavTarget({ lat: hole.lat!, lng: hole.lng!, label: hole.name });
                  }
                }}
                className="text-sand hover:text-foreground transition-colors tap-target mb-0.5"
                title={t('game.navigate')}
              >
                <NavigationIcon size={16} />
              </button>
            )}
          </div>
          <p className="text-sand text-sm">{neutralizeDrinkLabel(hole.drink, alcoholFreeMode, lang)}</p>
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
      {navTarget && (
        <MapChoiceDialog
          lat={navTarget.lat}
          lng={navTarget.lng}
          label={navTarget.label}
          onClose={() => setNavTarget(null)}
        />
      )}
    </div>
  );
}

function RulesPanel({ isFirstVisit }: { isFirstVisit: boolean }) {
  const { holes, currentHole, rollRuleForHole, removeRuleFromHole, surpriseMode } = useGame();
  const { t } = useLanguage();
  const hole = holes[currentHole];
  const [rolling, setRolling] = useState(false);
  const [rollingType, setRollingType] = useState<'main' | 'reroll' | 'add' | null>(null);
  const [rollResult, setRollResult] = useState<'none' | 'rule' | null>(null);
  const [pulseButton, setPulseButton] = useState(false);
  const [hasRolled, setHasRolled] = useState(false);
  const [lastRolledRuleId, setLastRolledRuleId] = useState<string | null>(null);
  const [flashRuleId, setFlashRuleId] = useState<string | null>(null);

  const count = hole.activeRules.length;

  // Reset roll state when hole changes
  useEffect(() => {
    setHasRolled(false);
    setLastRolledRuleId(null);
    setRollResult(null);
    setRollingType(null);
    setFlashRuleId(null);
  }, [currentHole]);

  // Pulse dice button on first visit to a hole with no rules
  useEffect(() => {
    if (isFirstVisit && count === 0) {
      setPulseButton(true);
      const timer = setTimeout(() => setPulseButton(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isFirstVisit, currentHole, count]);

  const doRoll = (type: 'main' | 'reroll' | 'add') => {
    setRolling(true);
    setRollingType(type);
    setRollResult(null);

    // If re-rolling, remove the last rolled rule first
    if (type === 'reroll' && lastRolledRuleId) {
      removeRuleFromHole(currentHole, lastRolledRuleId);
    }

    setTimeout(() => {
      const result = rollRuleForHole(currentHole);
      setRollResult(result ? 'rule' : 'none');
      setHasRolled(true);
      setLastRolledRuleId(result || null);
      setRolling(false);
      setRollingType(null);

      // Flash the new rule briefly
      if (result && (type === 'reroll' || type === 'add')) {
        setFlashRuleId(result);
        setTimeout(() => setFlashRuleId(null), 1000);
      }

      setTimeout(() => setRollResult(null), 2000);
    }, 600);
  };

  const showArrivalPrompt = isFirstVisit && count === 0 && !rollResult && !hasRolled;
  const isSurpriseArrival = surpriseMode && showArrivalPrompt;

  return (
    <div className={`mx-4 mt-3 rounded-lg border ${isSurpriseArrival ? 'border-rule-fun bg-rule-fun/15' : 'border-rule-fun/60 bg-rule-fun/10'}`}>
      <div className="bg-rule-fun/20 px-3 py-2">
        <span className="text-rule-fun text-xs font-bold">
          🎲 {count > 0 ? `${count} ${count > 1 ? t('game.specialRulesPlural') : t('game.specialRules')}` : t('game.noRules')}
        </span>
      </div>

      {/* Arrival prompt — shown on first visit when no rules */}
      {showArrivalPrompt && (
        <div className={`px-3 pt-3 text-center animate-fade-in ${isSurpriseArrival ? 'pb-1' : ''}`}>
          <span className={`text-rule-fun ${isSurpriseArrival ? 'text-base font-bold' : 'text-sm'}`}>
            {t('game.arrivalRollPrompt')}
          </span>
        </div>
      )}

      {/* No-rule prompt for non-first-visit */}
      {!showArrivalPrompt && count === 0 && !rollResult && !hasRolled && (
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
        {!hasRolled ? (
          <button
            onClick={() => doRoll('main')}
            disabled={rolling}
            className={`w-full py-2.5 rounded-lg text-sm font-bold bg-rule-fun/25 hover:bg-rule-fun/35 text-rule-fun flex items-center justify-center gap-2 tap-target transition-all ${rolling ? 'animate-pulse' : ''} ${pulseButton ? 'animate-pulse ring-2 ring-rule-fun/50' : ''}`}
          >
            <Dices className={`w-4 h-4 ${rolling ? 'animate-spin' : ''}`} /> {rolling ? '...' : t('game.rollRule')}
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => doRoll('reroll')}
              disabled={rolling}
              className={`flex-1 py-2.5 rounded-lg text-sm font-bold bg-score-bogey/20 hover:bg-score-bogey/30 text-score-bogey flex items-center justify-center gap-2 tap-target transition-all ${rolling && rollingType === 'reroll' ? 'animate-pulse' : ''}`}
            >
              <RefreshCw className={`w-4 h-4 ${rolling && rollingType === 'reroll' ? 'animate-spin' : ''}`} /> {rolling && rollingType === 'reroll' ? '...' : t('game.reRoll')}
            </button>
            <button
              onClick={() => doRoll('add')}
              disabled={rolling}
              className={`flex-1 py-2.5 rounded-lg text-sm font-bold bg-rule-fun/25 hover:bg-rule-fun/35 text-rule-fun flex items-center justify-center gap-2 tap-target transition-all ${rolling && rollingType === 'add' ? 'animate-pulse' : ''}`}
            >
              <Plus className={`w-4 h-4 ${rolling && rollingType === 'add' ? 'animate-spin' : ''}`} /> {rolling && rollingType === 'add' ? '...' : t('game.addRule')}
            </button>
          </div>
        )}
      </div>

      {/* Active rules — auto-expanded with full descriptions */}
      {count > 0 && (
        <div className="p-2 space-y-1">
          {hole.activeRules.map(rId => {
            const rule = getRuleById(rId);
            if (!rule) return null;
            const ruleName = t(`rule.${rId}.name`);
            const ruleShort = t(`rule.${rId}.short`);
            const ruleDesc = t(`rule.${rId}.desc`);
            const isFlashing = flashRuleId === rId;
            return (
              <div key={rId} className={`flex items-start gap-1 animate-fade-in ${isFlashing ? 'animate-pulse' : ''}`}>
                <div className="flex-1 p-2 rounded-md">
                  <div className="flex items-center gap-2">
                    <span>{rule.emoji}</span>
                    <span className="text-foreground text-sm font-medium flex-1">{ruleName}</span>
                    <span className="text-sand text-[10px]">{ruleShort}</span>
                  </div>
                  <p className="mt-1 text-foreground/80 text-sm leading-relaxed">{ruleDesc}</p>
                </div>
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
  const { holes, currentHole, scores, penalties, setScore, setPenalty, alcoholFreeMode } = useGame();
  const { t, lang } = useLanguage();
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
            {penaltyCount} {neutralizeDrinkLabel(penaltyCount > 1 ? t('game.penaltySips') : t('game.penaltySip'), alcoholFreeMode, lang)}
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

  // Track visited holes for first-arrival prompt
  const [visitedHoles, setVisitedHoles] = useState<Set<number>>(() => new Set([0]));
  const prevHoleRef = useRef(currentHole);

  useEffect(() => {
    if (currentHole !== prevHoleRef.current) {
      prevHoleRef.current = currentHole;
      if (!visitedHoles.has(currentHole)) {
        setVisitedHoles(prev => new Set(prev).add(currentHole));
      }
    }
  }, [currentHole]);

  // A hole is "first visit" if it was just added to visited set this render cycle
  // We track it differently: a hole is first visit if it wasn't in the set BEFORE the effect ran
  const [firstVisitHole, setFirstVisitHole] = useState<number | null>(0);

  useEffect(() => {
    // When currentHole changes, check if it was previously visited
    const wasVisited = visitedHoles.has(currentHole) && currentHole === prevHoleRef.current;
    // On first mount, hole 0 is first visit
    if (!wasVisited || currentHole === 0) {
      setFirstVisitHole(currentHole);
    } else {
      setFirstVisitHole(null);
    }
  }, [currentHole]);

  const isFirstVisit = firstVisitHole === currentHole;

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
      <RulesPanel isFirstVisit={isFirstVisit} />

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
            onClick={() => {
              // Water reminder before advancing. Button is only shown when !isLast,
              // so this never fires after the final hole.
              toast(t('game.waterBreak'), { duration: 5000 });
              setCurrentHole(currentHole + 1);
            }}
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
