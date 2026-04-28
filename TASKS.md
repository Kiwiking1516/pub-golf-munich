# Pub Golf — Task Tracker

> **⚠️ Working Copy Convention** — `/Users/richardfriedrich/Projects/pub-golf-munich/` is the **only** working copy. Do **not** edit the iCloud copy at `~/Library/Mobile Documents/iCloud~md~obsidian/.../Pub Golf App/pub-golf-munich/` — it has been retired (deleted 2026-04-28) to prevent iCloud sync conflicts. The PRD at `~/Library/Mobile Documents/.../Pub Golf App/PRD-pub-golf.md` stays in Obsidian intentionally (second brain), but no code lives in iCloud anymore. Always start sessions with `cd ~/Projects/pub-golf-munich`.

**Last Updated:** 2026-04-28 (Lovable detached, design exploration started, iCloud copy retired)
**Stage:** building (v1 functionally complete; design polish + paywall activation pending)
**Repo:** `/Users/richardfriedrich/Projects/pub-golf-munich/` → `https://github.com/Kiwiking1516/Pub-Golf.git`
**PRD:** `/Users/richardfriedrich/Library/Mobile Documents/iCloud~md~obsidian/Documents/Second Brain/Claude/Projects/Pub Golf App/PRD-pub-golf.md`

## Current Status

PubGolf is a Vite/React/shadcn web app wrapped via Capacitor for iOS, with full paywall infrastructure already wired but dormant (`useEntitlements` returns `isPremium: true` so v1 ships free). Lovable has been disconnected — all future work happens in Claude Code from `~/Projects/pub-golf-munich/`. The user is currently exploring 5 design directions in the `designs/` folder (green-jacket, neon-fairway, biergarten, sport-mode, pub-crawl-party) and has begun nudging design tokens in `index.html` / `index.css` / `tailwind.config.ts`.

The PRD targets 3 release phases: v1 (course builder + scorecard + leaderboard) is mostly done; v2 (photos + shareable summary card) and v3 (persistent profiles + Munich-curated default courses) are open.

## Done ✓

- [x] Vite/React/TS scaffold with shadcn/ui + Leaflet + React Query (Lovable origin)
- [x] 13 cities supported (5 DE + 7 UK + 1 IE) with region selector
- [x] 2 game modes (biergolf 18-hole / biergarten 9-hole)
- [x] Course builder: presets per city, shuffle, custom map-area select, hand-pick course (`MapCourseBuilder.tsx`, 496 lines)
- [x] Course sharing: `encodeCourse` / `decodeCourse` round-trip via base64 URL fragment, `pendingImport` confirmation UI
- [x] Live scoring, penalties, surprise-mode random rules, region/city-scoped rules
- [x] Apple Maps / Google Maps preference dialog (`MapChoiceDialog.tsx`)
- [x] Alcohol-Free Mode toggle (App Store 1.4.3 compliance)
- [x] Responsibility Gate splash (App Store 1.4.3 compliance)
- [x] Privacy + Imprint legal pages (German/EU compliance)
- [x] Full DE/EN i18n via `LanguageContext` + `translations.ts`
- [x] Capacitor + iOS Xcode project (`capacitor.config.ts`, `ios/`, appId `app.friedrich.pubgolf`)
- [x] Paywall infrastructure: gates wired in `MapTab.tsx` (GPS, MapAreaSelect, MapCourseBuilder), `CourseTab.tsx` (Share when isCustomCourse), Settings sheet in `GameLayout.tsx`. `useEntitlements` returns `isPremium: true` (v1 ships free, all gates dormant)
- [x] Bar database: ~5000 OSM-scraped bars across UK + DE/IE in `scripts/cities/*.json`
- [x] **2026-04-28** — Detached from Lovable: removed `lovable-tagger` dep + `componentTagger` plugin from `vite.config.ts`. Commit `83a63e4` pushed.
- [x] **2026-04-28** — Migrated canonical working copy out of iCloud to `~/Projects/pub-golf-munich/`. Bundle backup at `~/pub-golf-icloud-backup-20260428.bundle`.

## In Progress

- [ ] **Design exploration** — 5 design variants generated in `designs/` (HTML mockups), token tweaks in `index.html` / `src/index.css` / `tailwind.config.ts` (uncommitted). Decision needed: pick a direction, then port the chosen tokens into the live app and discard the mockups.

## Next Up (top 3)

- [ ] **Pick a design direction** from the 5 mockups in `designs/` and apply it to the live app. Then commit (or discard) the in-progress edits to `index.html` / `index.css` / `tailwind.config.ts`.
- [ ] **First TestFlight build**: `bun run build && bunx cap sync ios && bunx cap open ios` → archive in Xcode → upload to TestFlight. This validates the iOS wrapper end-to-end before any paywall activation.
- [ ] **Disconnect Lovable on the platform side** (manual, in lovable.dev project settings) so Lovable cannot push further commits to the GitHub repo.

## Backlog — Roadmap-aligned

### v1 polish (pre-launch)
- [ ] Resolve uncommitted design-token edits (commit or revert)
- [ ] Add OG image at `public/og-image.png` (currently referenced in `index.html`)
- [ ] Lint cleanup: 15 pre-existing errors in `pubs.ts`, `tailwind.config.ts`, `bar-database-raw.js`, `GameContext.tsx`, `LanguageContext.tsx`, shadcn UI files
- [ ] Bundle size: main JS chunk is 3.6 MB (621 kB gzipped) — consider `manualChunks` split for Leaflet + Recharts

### v1.1 — Paywall activation (when ready to monetise)
- [ ] Replace `useEntitlements.ts` body: integrate RevenueCat (`bun add @revenuecat/purchases-capacitor`) or StoreKit 2 directly
- [ ] Configure `app.friedrich.pubgolf.premium` non-consumable IAP in App Store Connect (€4.99 standard, €2.99 launch-week)
- [ ] Build `Paywall.tsx` upsell sheet — currently the gates hide buttons but there's no upsell UI when `isPremium` flips false. Reference impl preserved in `~/pub-golf-paywall-files-backup/Paywall.tsx`
- [ ] Add **Restore Purchases** button to the Settings sheet in `GameLayout.tsx` (App Store 3.1.1 requirement)
- [ ] Add `NSLocationWhenInUseUsageDescription` to `ios/App/App/Info.plist` for the GPS dot feature
- [ ] Sandbox-test purchase + restore flows end-to-end

### v2 — PRD scope (photos + shareable summary card)
- [ ] Photo per pub stop (Capacitor Camera plugin: `@capacitor/camera`)
- [ ] Group photo upload at each stop
- [ ] Final scorecard image export (Instagram-ready) with MVP / loser / most-photos awards
- [ ] Add `NSCameraUsageDescription` + `NSPhotoLibraryAddUsageDescription` to Info.plist

### v3 — PRD scope (persistence + curation)
- [ ] Persistent player profiles (account or device-bound — pick one)
- [ ] "Courses near you" library
- [ ] Munich-curated default courses (PRD's flagship use case — Richard's friend group)

### Cleanup / housekeeping
- [ ] Delete iCloud copy at `~/Library/Mobile Documents/.../Pub Golf App/pub-golf-munich/` after a soak period (≥1 week using local copy smoothly). Bundle backup retained.
- [ ] Delete `/tmp/pubgolf-compare/` (temp diff clone)
- [ ] Decide fate of `~/pub-golf-paywall-files-backup/` (keep until v1.1 paywall activation, or discard now)
- [ ] Archive or delete the legacy `Kiwiking1516/pub-golf-munich` GitHub repo (no longer tracked locally)

## Reference

- **Plan file (paywall v1.0 spec):** `~/.claude/plans/before-we-start-check-bright-ullman.md`
- **Bundle backup:** `~/pub-golf-icloud-backup-20260428.bundle` (1.7 MB git bundle)
- **Paywall components backup:** `~/pub-golf-paywall-files-backup/` (5 files)
- **Run dev:** `cd ~/Projects/pub-golf-munich && bun run dev` → http://localhost:8080
- **Run iOS:** `bun run build && bunx cap sync ios && bunx cap open ios`
