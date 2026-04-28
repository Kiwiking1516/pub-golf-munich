import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const STORAGE_KEY = 'pubgolf-responsibility-accepted-v1';

interface ResponsibilityGateProps {
  children: React.ReactNode;
}

export default function ResponsibilityGate({ children }: ResponsibilityGateProps) {
  const { t } = useLanguage();
  const [accepted, setAccepted] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  // Re-check after mount in case storage hydration differs
  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === 'true') setAccepted(true);
    } catch { /* ignore storage errors in private browsing */ }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch { /* ignore storage errors in private browsing */ }
    setAccepted(true);
  };

  if (accepted) return <>{children}</>;

  const bullets = [
    t('responsibility.bullet1'),
    t('responsibility.bullet2'),
    t('responsibility.bullet3'),
    t('responsibility.bullet4'),
    t('responsibility.bullet5'),
  ];

  return (
    <div
      className="fixed inset-0 z-[9999] bg-deep-green flex flex-col items-center justify-center p-6 overflow-y-auto"
      style={{ minHeight: 'var(--app-height, 100vh)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="responsibility-title"
    >
      <div className="w-full max-w-md bg-card border-2 border-border rounded-2xl p-6 my-auto animate-fade-in">
        <h1
          id="responsibility-title"
          className="font-display text-2xl font-bold text-foreground mb-4 text-center"
        >
          {t('responsibility.title')}
        </h1>
        <ul className="space-y-3 mb-6">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-foreground/90 leading-relaxed">
              <span className="text-gold flex-shrink-0">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleAccept}
          className="w-full py-3 rounded-xl bg-gold text-background font-bold tap-target transition-transform active:scale-[0.98]"
        >
          {t('responsibility.accept')}
        </button>
        <div className="mt-4 flex justify-center">
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
}
