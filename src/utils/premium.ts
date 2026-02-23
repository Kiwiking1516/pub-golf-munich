const PREMIUM_STORAGE_KEY = 'pubgolf-premium';

// SHA-256 hash of "PUBGOLF-2026"
const PREMIUM_HASH = 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3';

export function isPremium(): boolean {
  try {
    return localStorage.getItem(PREMIUM_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setPremium(value: boolean): void {
  localStorage.setItem(PREMIUM_STORAGE_KEY, value ? 'true' : 'false');
}

export async function validatePremiumCode(inputCode: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const data = encoder.encode(inputCode.trim().toUpperCase());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex === PREMIUM_HASH;
}
