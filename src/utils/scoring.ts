export interface ScoreInfo {
  label: string;
  emoji: string;
  colorClass: string;
  isCircle: boolean;
}

export function getScoreInfo(score: number, par: number): ScoreInfo {
  const diff = score - par;
  if (diff <= -3) return { label: 'Albatross', emoji: '🦅🦅', colorClass: 'bg-score-albatross text-background', isCircle: true };
  if (diff === -2) return { label: 'Eagle', emoji: '🦅', colorClass: 'bg-score-eagle text-background', isCircle: true };
  if (diff === -1) return { label: 'Birdie', emoji: '🐦', colorClass: 'bg-score-birdie text-background', isCircle: true };
  if (diff === 0) return { label: 'Par', emoji: '✅', colorClass: 'bg-score-par text-background', isCircle: false };
  if (diff === 1) return { label: 'Bogey', emoji: '', colorClass: 'bg-score-bogey text-background', isCircle: false };
  if (diff === 2) return { label: 'Double', emoji: '💀', colorClass: 'bg-score-double text-background', isCircle: false };
  return { label: 'Triple', emoji: '☠️', colorClass: 'bg-score-triple text-background', isCircle: false };
}

export function getScoreColor(score: number, par: number): string {
  const diff = score - par;
  if (diff <= -2) return 'text-score-albatross';
  if (diff === -1) return 'text-score-birdie';
  if (diff === 0) return 'text-score-par';
  if (diff === 1) return 'text-score-bogey';
  if (diff === 2) return 'text-score-double';
  return 'text-score-triple';
}

export function getTotalScoreColor(total: number): string {
  if (total < -2) return 'text-score-albatross';
  if (total < 0) return 'text-score-birdie';
  if (total === 0) return 'text-score-par';
  if (total <= 2) return 'text-score-bogey';
  if (total <= 5) return 'text-score-double';
  return 'text-score-triple';
}

export function formatScoreVsPar(total: number): string {
  if (total === 0) return 'E';
  return total > 0 ? `+${total}` : `${total}`;
}
