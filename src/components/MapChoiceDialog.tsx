import { useLanguage } from '@/context/LanguageContext';

interface MapChoiceDialogProps {
  lat: number;
  lng: number;
  label: string;
  onClose: () => void;
}

const PREF_KEY = 'pubgolf-map-pref';

export function getMapPref(): string | null {
  return localStorage.getItem(PREF_KEY);
}

export function navigateTo(pref: string, lat: number, lng: number, label: string) {
  const encoded = encodeURIComponent(label);
  const url = pref === 'apple'
    ? `maps://maps.apple.com/?daddr=${lat},${lng}&dirflg=w&q=${encoded}`
    : `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
  window.location.href = url;
}

export default function MapChoiceDialog({ lat, lng, label, onClose }: MapChoiceDialogProps) {
  const { t } = useLanguage();

  const choose = (pref: 'apple' | 'google') => {
    localStorage.setItem(PREF_KEY, pref);
    navigateTo(pref, lat, lng, label);
    onClose();
  };

  const resetPref = () => {
    localStorage.removeItem(PREF_KEY);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="relative bg-card rounded-xl border border-border p-4 max-w-xs mx-auto w-full"
        onClick={e => e.stopPropagation()}
      >
        <h3 className="text-foreground font-display text-base font-bold text-center mb-3">
          {t('game.openNavigation')}
        </h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => choose('apple')}
            className="w-full py-3 rounded-lg bg-muted text-foreground font-medium text-sm tap-target hover:bg-muted/80 transition-colors"
          >
            Apple Maps
          </button>
          <button
            onClick={() => choose('google')}
            className="w-full py-3 rounded-lg bg-muted text-foreground font-medium text-sm tap-target hover:bg-muted/80 transition-colors"
          >
            Google Maps
          </button>
        </div>
        <button
          onClick={onClose}
          className="w-full text-sand text-sm mt-2 tap-target text-center"
        >
          {t('game.cancel')}
        </button>
        {localStorage.getItem(PREF_KEY) && (
          <button
            onClick={resetPref}
            className="w-full text-sand/60 text-xs mt-1 tap-target text-center hover:text-sand transition-colors"
          >
            {t('game.resetMapPref')}
          </button>
        )}
      </div>
    </div>
  );
}
