import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
      className={`flex items-center gap-1.5 text-sm tap-target transition-all active:scale-95 ${className}`}
      aria-label="Switch language"
    >
      <span className={`text-lg leading-none ${lang === 'de' ? 'opacity-100 scale-110' : 'opacity-50 scale-90'} transition-all`}>🇩🇪</span>
      <span className="text-muted-foreground text-[10px] font-bold">/</span>
      <span className={`text-lg leading-none ${lang === 'en' ? 'opacity-100 scale-110' : 'opacity-50 scale-90'} transition-all`}>🇬🇧</span>
    </button>
  );
}
