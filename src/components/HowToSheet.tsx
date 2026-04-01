import { useLanguage } from '@/context/LanguageContext';
import { useGame } from '@/context/GameContext';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { X } from 'lucide-react';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const { isGreenMode } = useGame();
  const accentClass = isGreenMode ? 'text-green-accent' : 'text-gold';

  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <h3 className={`font-display font-bold text-sm mb-2 ${accentClass}`}>{title}</h3>
      {children}
    </div>
  );
}

function BodyText({ text }: { text: string }) {
  return (
    <div className="text-sand text-sm leading-relaxed whitespace-pre-line">{text}</div>
  );
}

export default function HowToSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLanguage();

  const ruleTypes = [
    { key: 'help.ruleHandicap', color: 'bg-rule-handicap/20 text-rule-handicap' },
    { key: 'help.ruleBonus', color: 'bg-rule-bonus/20 text-rule-bonus' },
    { key: 'help.ruleFun', color: 'bg-rule-fun/20 text-rule-fun' },
    { key: 'help.ruleSpecial', color: 'bg-rule-special/20 text-rule-special' },
  ];

  const scores = [
    'help.scoreAlbatross', 'help.scoreEagle', 'help.scoreBirdie',
    'help.scorePar', 'help.scoreBogey', 'help.scoreDouble', 'help.scoreTriple',
  ];

  return (
    <Sheet open={open} onOpenChange={v => !v && onClose()}>
      <SheetContent side="bottom" className="h-[90vh] bg-background rounded-t-2xl p-0 flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
          <h2 className="font-display font-bold text-lg text-foreground">{t('help.title')}</h2>
          <button onClick={onClose} className="text-sand hover:text-foreground transition-colors tap-target p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
          <Section title={t('help.whatIsTitle')}>
            <BodyText text={t('help.whatIsBody')} />
          </Section>

          <Section title={t('help.setupTitle')}>
            <BodyText text={t('help.setupBody')} />
          </Section>

          <Section title={t('help.courseTitle')}>
            <BodyText text={t('help.courseBody')} />
          </Section>

          <Section title={t('help.scoringTitle')}>
            <BodyText text={t('help.scoringBody')} />
            <div className="mt-2 space-y-1">
              {scores.map(key => (
                <div key={key} className="text-foreground text-xs font-medium px-2 py-1 bg-muted rounded">
                  {t(key)}
                </div>
              ))}
            </div>
          </Section>

          <Section title={t('help.rulesTitle')}>
            <BodyText text={t('help.rulesBody')} />
            <div className="mt-2 space-y-1.5">
              {ruleTypes.map(rt => (
                <div key={rt.key} className={`text-xs font-medium px-2.5 py-1.5 rounded-lg ${rt.color}`}>
                  {t(rt.key)}
                </div>
              ))}
            </div>
          </Section>

          <Section title={t('help.tipsTitle')}>
            <BodyText text={t('help.tipsBody')} />
          </Section>

          <div className="h-8" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
