import { useGame } from '@/context/GameContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function RegionSelect() {
  const { setRegion } = useGame();
  const { t } = useLanguage();

  const regions = [
    { id: 'de' as const, flag: '🇩🇪', name: 'Deutschland', desc: t('region.deDesc') },
    { id: 'uk' as const, flag: '🇬🇧', name: 'UK & Ireland', desc: t('region.ukDesc') },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-deep-green" style={{ minHeight: 'var(--app-height)' }}>
      <div className="animate-fade-in text-center mb-8">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">{t('region.title')}</h1>
        <p className="text-muted-foreground text-sm">{t('region.subtitle')}</p>
      </div>

      <div className="w-full max-w-sm space-y-4 animate-fade-in">
        {regions.map((r) => (
          <button
            key={r.id}
            onClick={() => setRegion(r.id)}
            className="w-full text-left p-5 rounded-xl border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 tap-target group"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">{r.flag}</span>
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-xl font-bold text-foreground">{r.name}</h2>
                <p className="text-muted-foreground text-sm">{r.desc}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <LanguageToggle />
      </div>

      <p className="text-muted-foreground/40 text-xs mt-4 text-center">🍻 Pub Golf</p>
      <p className="text-muted-foreground/60 text-[10px] mt-2 text-center max-w-xs px-4">{t('region.ageFooter')}</p>
      <p className="text-muted-foreground/60 text-[10px] mt-2 text-center">
        <a href="/#/privacy" className="hover:text-foreground transition-colors underline-offset-2 hover:underline">{t('footer.privacy')}</a>
        <span className="mx-1.5">·</span>
        <a href="/#/imprint" className="hover:text-foreground transition-colors underline-offset-2 hover:underline">{t('footer.imprint')}</a>
      </p>
    </div>
  );
}
