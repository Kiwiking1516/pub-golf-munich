import type { Language } from '@/context/LanguageContext';

// Tokens that indicate an alcoholic drink reference.
// Matched as whole words, case-insensitive. Also matches German compound forms (e.g. "Bier" inside "Apfelwein"-style is rare; we keep tokens strict).
const DRINK_TOKENS = [
  'beer', 'pint', 'maß', 'mass', 'stange', 'geripptes', 'astra', 'bier',
  'kölsch', 'kolsch', 'lager', 'ale', 'guinness', 'craft', 'apfelwein',
  'äbbelwoi', 'ebbelwoi', 'apple wine', 'newcastle brown',
];

const PENALTY_PATTERNS_DE = [
  { re: /Strafschluck/g, replace: 'Strafpunkt' },
  { re: /Strafschlucke/g, replace: 'Strafpunkte' },
];

const PENALTY_PATTERNS_EN = [
  { re: /Penalty sips/gi, replace: 'Penalty points' },
  { re: /Penalty sip/gi, replace: 'Penalty point' },
];

/**
 * Replace alcohol-related labels with neutral terms when alcohol-free mode is on.
 * Returns the original string when the flag is off.
 */
export function neutralizeDrinkLabel(
  original: string,
  alcoholFreeMode: boolean,
  lang: Language = 'de',
): string {
  if (!alcoholFreeMode || !original) return original;

  const neutralWord = lang === 'en' ? 'Drink' : 'Getränk';
  let out = original;

  // Replace each token (case-insensitive, word-ish boundary)
  for (const token of DRINK_TOKENS) {
    const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Use a unicode-aware boundary: not a letter on either side
    const re = new RegExp(`(^|[^\\p{L}])(${escaped})(?=$|[^\\p{L}])`, 'giu');
    out = out.replace(re, (_m, pre) => `${pre}${neutralWord}`);
  }

  // Collapse possible duplicate "Drink Drink" / "Getränk Getränk" after substitutions
  out = out.replace(/\b(Drink|Getränk)(\s+\1)+/gi, '$1');

  // Penalty terms
  const penaltyPatterns = lang === 'en' ? PENALTY_PATTERNS_EN : PENALTY_PATTERNS_DE;
  for (const { re, replace } of penaltyPatterns) {
    out = out.replace(re, replace);
  }

  return out;
}
