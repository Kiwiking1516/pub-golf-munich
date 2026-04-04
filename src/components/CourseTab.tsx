import { useState } from 'react';
import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import { allRules, getRuleTypeColor } from '@/data/rules';
import { ChevronDown, ChevronUp, RotateCcw, Shuffle, Dices, Trash2, Sparkles, Share2, Copy, Check } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Hole } from '@/types/game';
import { encodeCourse } from '@/utils/courseShare';
import qrcode from 'qrcode-generator';

function HoleFlagBadge({ flag }: { flag: string }) {
  const { t } = useLanguage();
  const map: Record<string, string> = {
    signature: t('flag.signature'),
    turn: t('flag.turn'),
    finale: t('flag.finale'),
  };
  return (
    <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded-full font-bold">
      {map[flag] || flag}
    </span>
  );
}

function HoleCard({ hole, index, onUpdate }: { hole: Hole; index: number; onUpdate: (h: Hole) => void }) {
  const [open, setOpen] = useState(false);
  const [subTab, setSubTab] = useState<'info' | 'rules'>('info');
  const { isGreenMode, surpriseMode } = useGame();
  const { t } = useLanguage();
  const accentClass = isGreenMode ? 'text-green-accent' : 'text-gold';

  const ruleCount = hole.activeRules.length;

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden animate-fade-in">
      <button onClick={() => setOpen(!open)} className="w-full text-left p-3 flex items-center gap-3 tap-target">
        <span className={`font-display font-bold text-lg ${accentClass} w-7 text-center`}>{index + 1}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-foreground font-medium text-sm truncate">{hole.name}</span>
            {hole.flags.map(f => <HoleFlagBadge key={f} flag={f} />)}
          </div>
          <div className="flex items-center gap-2 text-sand text-xs mt-0.5">
            <span>{hole.drink}</span>
            <span>·</span>
            <span>{hole.time}</span>
          </div>
        </div>
        <span className="bg-muted text-foreground text-xs font-bold px-2.5 py-1 rounded-md">Par {hole.par}</span>
        {ruleCount > 0 && (
          <span className="bg-rule-fun/20 text-rule-fun text-[10px] font-bold px-2 py-0.5 rounded-full">{ruleCount}</span>
        )}
        {open ? <ChevronUp className="w-4 h-4 text-sand" /> : <ChevronDown className="w-4 h-4 text-sand" />}
      </button>

      {open && (
        <div className="border-t border-border">
          <div className="flex border-b border-border">
            <button
              onClick={() => setSubTab('info')}
              className={`flex-1 py-2 text-xs font-bold transition-colors ${subTab === 'info' ? accentClass + ' border-b-2 border-current' : 'text-sand'}`}
            >{t('course.info')}</button>
            <button
              onClick={() => setSubTab('rules')}
              className={`flex-1 py-2 text-xs font-bold transition-colors ${subTab === 'rules' ? accentClass + ' border-b-2 border-current' : 'text-sand'}`}
            >{t('course.rulesTab')} {ruleCount > 0 && `(${ruleCount})`}</button>
          </div>

          {subTab === 'info' ? (
            <div className="p-3 space-y-3">
              <Field label={t('course.venue')} value={hole.name} onChange={v => onUpdate({ ...hole, name: v.substring(0, 40) })} />
              <Field label={t('course.drink')} value={hole.drink} onChange={v => onUpdate({ ...hole, drink: v.substring(0, 40) })} />
              <Field label={t('course.time')} value={hole.time} onChange={v => onUpdate({ ...hole, time: v })} />
              <div className="flex items-center gap-3">
                <span className="text-sand text-xs w-16">Par</span>
                <button onClick={() => onUpdate({ ...hole, par: Math.max(1, hole.par - 1) })} className="bg-muted text-foreground w-9 h-9 rounded-lg font-bold tap-target">−</button>
                <span className="font-display font-bold text-foreground text-lg w-8 text-center">{hole.par}</span>
                <button onClick={() => onUpdate({ ...hole, par: Math.min(9, hole.par + 1) })} className="bg-muted text-foreground w-9 h-9 rounded-lg font-bold tap-target">+</button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {(['signature', 'turn', 'finale'] as const).map(flag => {
                  const active = hole.flags.includes(flag);
                  return (
                    <button
                      key={flag}
                      onClick={() => {
                        const flags = active ? hole.flags.filter(f => f !== flag) : [...hole.flags, flag];
                        onUpdate({ ...hole, flags });
                      }}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors tap-target ${active ? 'bg-gold/20 border-gold text-gold' : 'border-border text-sand'}`}
                    >
                      {t(`flag.${flag}`)}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="p-3 space-y-2 max-h-80 overflow-y-auto">
              {surpriseMode ? (
                <div className="text-center py-4">
                  <Sparkles className="w-5 h-5 text-rule-fun mx-auto mb-2" />
                  <p className="text-sand text-xs">{t('course.surpriseModeDesc')}</p>
                </div>
              ) : (
                <>
                  {allRules.map(rule => {
                    const active = hole.activeRules.includes(rule.id);
                    return <RuleRow key={rule.id} rule={rule} active={active} onToggle={() => {
                      const ar = active ? hole.activeRules.filter(r => r !== rule.id) : [...hole.activeRules, rule.id];
                      onUpdate({ ...hole, activeRules: ar });
                    }} />;
                  })}
                  {ruleCount > 0 && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-sand text-xs">{t('course.activeRules')}: {ruleCount}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sand text-xs w-16 shrink-0">{label}</span>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        className="flex-1 bg-input border border-border rounded-md px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring"
      />
    </div>
  );
}

function RuleRow({ rule, active, onToggle }: { rule: typeof allRules[0]; active: boolean; onToggle: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();
  const colorClass = `text-${getRuleTypeColor(rule.type)}`;
  const typeLabel = t(`rules.${rule.type}`);

  return (
    <div className={`rounded-lg border transition-colors ${active ? 'border-rule-fun/50 bg-rule-fun/5' : 'border-border'}`}>
        <div className="flex items-center gap-2 p-2 tap-target">
          <button onClick={onToggle} className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${active ? 'border-rule-fun bg-rule-fun text-background' : 'border-sand'}`}>
            {active && <span className="text-xs">✓</span>}
          </button>
          <span className="text-base">{rule.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-foreground text-sm font-medium truncate">{t(`rule.${rule.id}.name`)}</span>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-${getRuleTypeColor(rule.type)}/20 ${colorClass}`}>
                {typeLabel}
              </span>
            </div>
            <p className="text-sand text-[11px] truncate">{t(`rule.${rule.id}.short`)}</p>
        </div>
        <button onClick={() => setExpanded(!expanded)} className="text-sand tap-target p-1">
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      </div>
      {expanded && <p className="px-3 pb-2 text-sand text-xs leading-relaxed">{t(`rule.${rule.id}.desc`)}</p>}
    </div>
  );
}

export default function CourseTab() {
  const { holes, updateHole, resetCourse, shuffleCourse, randomizeRules, clearAllRules, isGreenMode, surpriseMode, setSurpriseMode, city, mode } = useGame();
  const { t } = useLanguage();
  const accentClass = isGreenMode ? 'text-green-accent' : 'text-gold';
  const totalPar = holes.reduce((s, h) => s + h.par, 0);
  const totalRules = holes.reduce((s, h) => s + h.activeRules.length, 0);
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = city && mode ? `${window.location.origin}/#/shared/${encodeCourse(holes, city, mode)}` : '';

  const qrSvg = showShare && shareUrl ? (() => {
    const qr = qrcode(0, 'M');
    qr.addData(shareUrl);
    qr.make();
    return qr.createSvgTag({ scalable: true });
  })() : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 pb-2">
        <h2 className={`font-display font-bold text-lg ${accentClass}`}>{t('course.editor')}</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowShare(true)}
            className="text-sand text-xs flex items-center gap-1 tap-target hover:text-foreground transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" /> {t('course.share')}
          </button>
          <button
            onClick={() => { if (window.confirm(t('course.shuffle_confirm'))) shuffleCourse(); }}
            className="text-sand text-xs flex items-center gap-1 tap-target hover:text-foreground transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5" /> {t('course.shuffle')}
          </button>
          <button
            onClick={() => { if (window.confirm(t('course.reset_confirm'))) resetCourse(); }}
            className="text-sand text-xs flex items-center gap-1 tap-target hover:text-foreground transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> {t('course.reset')}
          </button>
        </div>
      </div>

      {/* Share Dialog */}
      <Dialog open={showShare} onOpenChange={setShowShare}>
        <DialogContent className="max-w-sm mx-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle className={accentClass}>{t('course.share')}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                readOnly
                value={shareUrl}
                className="flex-1 bg-input border border-border rounded-md px-3 py-2 text-foreground text-xs focus:outline-none truncate"
              />
              <button
                onClick={handleCopy}
                className="bg-muted text-foreground px-3 py-2 rounded-md text-xs font-medium flex items-center gap-1 hover:bg-accent transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? t('course.copied') : t('course.copy')}
              </button>
            </div>
            <div
              className="mx-auto w-[200px] h-[200px] bg-white rounded-lg p-2 flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: qrSvg }}
            />
            <p className="text-sand text-xs text-center">{t('course.shareNote')}</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Surprise Mode toggle */}
      <div className="flex items-center justify-between px-4 pb-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-rule-fun" />
          <div>
            <span className="text-foreground text-xs font-bold">{t('course.surpriseMode')}</span>
            {surpriseMode && <p className="text-sand text-[10px]">{t('course.surpriseModeDesc')}</p>}
          </div>
        </div>
        <Switch checked={surpriseMode} onCheckedChange={setSurpriseMode} />
      </div>

      {!surpriseMode && (
        <div className="flex items-center gap-2 px-4 pb-2">
          <button
            onClick={() => randomizeRules()}
            className="text-rule-fun text-xs flex items-center gap-1 tap-target hover:opacity-80 transition-opacity bg-rule-fun/10 px-2.5 py-1.5 rounded-lg"
          >
            <Dices className="w-3.5 h-3.5" /> {t('course.randomizeRules')}
          </button>
          <button
            onClick={() => { if (window.confirm(t('course.clearRules_confirm'))) clearAllRules(); }}
            className="text-sand text-xs flex items-center gap-1 tap-target hover:text-foreground transition-colors bg-muted px-2.5 py-1.5 rounded-lg"
          >
            <Trash2 className="w-3.5 h-3.5" /> {t('course.clearRules')}
          </button>
        </div>
      )}

      <div className="flex-1 overflow-y-auto px-4 space-y-2 pb-4">
        {holes.map((hole, i) => (
          <HoleCard key={i} hole={hole} index={i} onUpdate={h => updateHole(i, h)} />
        ))}
      </div>

      <div className="px-4 py-3 border-t border-border bg-card flex items-center justify-between text-xs">
        <span className="text-sand">{t('course.totalPar')}: <span className={`font-bold ${accentClass}`}>{totalPar}</span></span>
        <span className="text-sand">{t('course.rules')}: <span className="font-bold text-rule-fun">{totalRules}</span></span>
      </div>
    </div>
  );
}
