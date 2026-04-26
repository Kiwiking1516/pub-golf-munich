/**
 * Entitlements hook — single source of truth for premium-feature access.
 *
 * v1.0 stub: all features unlocked for every user. The app ships free.
 * v1.1 will replace the body of this hook with real StoreKit / RevenueCat
 * reads. Consumers should NOT import StoreKit directly — always go through
 * this hook so the gating policy can change in one place.
 */

/**
 * v1.1 migration plan:
 *
 * 1. Install RevenueCat (or use StoreKit 2 directly).
 * 2. Configure the IAP product in App Store Connect with product ID
 *    `com.<bundle>.pubgolf.premium` (one-time non-consumable unlock).
 * 3. Replace the body of useEntitlements() with:
 *      - Subscribe to RevenueCat customer info / StoreKit transactions
 *      - Return { isPremium: customerInfo.entitlements.active.premium != null }
 * 4. Add a "Restore Purchases" button (Apple-required) that calls the
 *    purchaser's restore method. Place it in the Settings sheet inside
 *    GameLayout next to the Alcohol-Free toggle.
 * 5. When isPremium flips from true to false (gate logic activates), add
 *    upsell UI to the three gated locations.
 *
 * Until then: every user is treated as premium and the gates are no-ops.
 */

export interface Entitlements {
  isPremium: boolean;
}

export function useEntitlements(): Entitlements {
  // v1.0: everyone is premium. Replace with real entitlement check in v1.1.
  return { isPremium: true };
}
