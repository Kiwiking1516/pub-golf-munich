import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

export default function Privacy() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <div className="bg-deep-green min-h-screen" style={{ minHeight: 'var(--app-height)' }}>
      <div className="max-w-md mx-auto px-5 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-sand text-sm mb-4 tap-target hover:text-foreground transition-colors"
          aria-label="Back"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <article className="prose prose-invert max-w-none text-foreground">
          <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">
            {t('privacy.body')}
          </p>
        </article>
      </div>
    </div>
  );
}
