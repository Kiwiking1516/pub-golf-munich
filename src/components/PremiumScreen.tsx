import { useState } from 'react';
import { validatePremiumCode, setPremium, isPremium } from '@/utils/premium';
import { ArrowLeft, Check, Star, ExternalLink } from 'lucide-react';

interface Props {
  onBack: () => void;
  onSuccess: () => void;
}

export default function PremiumScreen({ onBack, onSuccess }: Props) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(isPremium());

  const handleUnlock = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setError('');
    try {
      const valid = await validatePremiumCode(code);
      if (valid) {
        setPremium(true);
        setSuccess(true);
      } else {
        setError('Ungültiger Code. Bitte prüfe deine Kaufbestätigung.');
      }
    } catch {
      setError('Fehler bei der Validierung.');
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-deep-green">
        <div className="animate-scale-in text-center">
          <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-success" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">⭐ Premium aktiv!</h2>
          <p className="text-muted-foreground text-sm mb-8">GPS-Kurse sind jetzt verfügbar.</p>
          <button
            onClick={onSuccess}
            className="gradient-gold text-primary-foreground font-bold px-8 py-3 rounded-xl tap-target transition-transform active:scale-[0.98]"
          >
            Zurück zur Stadtauswahl
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-6 bg-deep-green">
      <button onClick={onBack} className="text-muted-foreground flex items-center gap-1 text-sm tap-target mb-8 self-start">
        <ArrowLeft className="w-4 h-4" /> Zurück
      </button>

      <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full">
        <div className="text-center mb-8 animate-fade-in">
          <Star className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Premium freischalten</h2>
          <p className="text-muted-foreground text-sm">
            Schalte GPS-Kurse frei und unterstütze die Weiterentwicklung.
          </p>
        </div>

        <a
          href="https://pubgolf.gumroad.com/l/premium"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full gradient-gold text-primary-foreground font-bold py-4 rounded-xl tap-target transition-transform active:scale-[0.98] flex items-center justify-center gap-2 mb-8"
        >
          Jetzt kaufen (2,99 €) <ExternalLink className="w-4 h-4" />
        </a>

        <div className="w-full border-t border-border pt-6">
          <p className="text-muted-foreground text-sm text-center mb-4">Bereits gekauft? Code eingeben:</p>
          <input
            type="text"
            value={code}
            onChange={e => { setCode(e.target.value); setError(''); }}
            onKeyDown={e => e.key === 'Enter' && handleUnlock()}
            placeholder="Code eingeben..."
            className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-base mb-3"
          />
          {error && <p className="text-destructive text-xs mb-3">{error}</p>}
          <button
            onClick={handleUnlock}
            disabled={loading || !code.trim()}
            className="w-full py-3 rounded-xl border-2 border-primary text-primary font-bold tap-target transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Prüfe...' : 'FREISCHALTEN'}
          </button>
        </div>

        <p className="text-muted-foreground/50 text-xs mt-8 text-center">
          Bei Fragen: support@pubgolf.de
        </p>
      </div>
    </div>
  );
}
