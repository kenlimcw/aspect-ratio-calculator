# Product Requirements Document: Aspect Ratio Calculator PWA

**Version:** 1.0
**Date:** 2026-02-26
**Status:** Approved for Build
**Project ID:** aspect-ratio-calculator
**Discovery Score:** 91.1 (Rank #1)

---

## 1. Executive Summary

The Aspect Ratio Calculator is a lightning-fast, offline-capable Progressive Web App (PWA) designed to solve dimension and scaling math for digital professionals and solo business owners. It targets **26,410 monthly searches** (rising trend from 14.8K to 22.2K over 12 months) with a keyword difficulty of **0.32** (very easy) and a CPC of **$7.57** (high advertiser value).

The SERP top 10 contains **zero goliaths** and **zero brand presence** — all competitors are small niche sites with minimal content depth. The top result is a personal blog experiment. This is a wide-open opportunity for a well-executed PWA to dominate.

**Core Objective:** Provide instant time-to-value through a zero-friction interface, backed by a programmatic SEO architecture to capture high-intent global search traffic.

**Domain:** aspect-ratio-calculator.com (available)

---

## 2. Market Data (from Discovery DB)

| Metric | Value | Source |
|--------|-------|--------|
| Monthly Search Volume | 26,410 | DataForSEO |
| CPC | $7.57 | DataForSEO |
| Keyword Difficulty | 0.32 (Very Easy) | DataForSEO |
| Trend Direction | Rising (+50% YoY) | Monthly search data |
| SERP Brand Count | 0 | SERP analysis |
| SERP Goliath Count | 0 | SERP analysis |
| Google Native Widget | No | SERP analysis |
| Answer Box | No | SERP analysis |
| PWA Fit Score | 9.0/10 | Heuristic scoring |
| Monetization Score | 5.0/10 | Heuristic scoring |
| Tech Complexity | Low — pure frontend | Assessment |
| B2B/B2C | B2C | Assessment |

### Global Demand

| Country | Volume | CPC |
|---------|--------|-----|
| United States | 14,800 | $7.57 |
| United Kingdom | 4,400 | $0.00 |
| Canada | 2,400 | $1.68 |
| Australia | 1,600 | $0.00 |
| Malaysia | 590 | $0.25 |
| Thailand | 480 | $0.03 |
| Romania | 390 | $1.30 |
| New Zealand | 320 | $0.00 |
| Czech Republic | 320 | $0.00 |
| Switzerland | 260 | $1.10 |
| Austria | 260 | $0.00 |
| Vietnam | 210 | $0.00 |
| Japan | 210 | $0.00 |
| Israel | 170 | $0.00 |

### Monthly Search Trend (12-month)

```
14,800 → 14,800 → 14,800 → 14,800 → 14,800 → 14,800 → 14,800 → 14,800 → 18,100 → 18,100 → 14,800 → 22,200
```

### SERP Top 10 (Current Competitors)

| Rank | Domain | Implied Audience |
|------|--------|-----------------|
| 1 | andrew.hedges.name | Developers (personal blog experiment) |
| 2 | calculatorsoup.com | General public (generic calculator portal) |
| 3 | calculateaspectratio.com | Generalist (single-purpose tool) |
| 4 | calculator.net | General public (generic calculator portal) |
| 5 | digitalrebellion.com | Video editors (post-production tools) |
| 6 | elitescreens.eu | AV/home theater (projection screens) |
| 7 | aspectratiocalculator.com | Generalist (single-purpose tool) |
| 8 | bellevuefineart.com | Photographers/artists (fine art framing) |
| 9 | lumino.one | Designers (design tooling) |
| 10 | rows.com | Spreadsheet/data users |

### Target Keywords

- `aspect ratio calculator` (primary)
- `aspect ratio calculator online`
- `aspect ratio calculator free`
- `aspect ratio calculator app`

---

## 3. Target Personas & Jobs-to-be-Done

Derived from SERP audience analysis, search keyword intent patterns, geographic demand, and consultant domain expertise. Each persona is mapped to SERP evidence from the discovery database.

### Persona A: Frontend Developer / UI Designer

| Attribute | Detail |
|-----------|--------|
| **Tech Proficiency** | High |
| **Primary JTBD** | Extract CSS ratio values and scale responsive web assets |
| **Key Frustration** | Mental math for responsive breakpoints; padding-top percentage hacks |
| **Typical Workflow** | Working in VS Code, needs quick dimension lookups, copies CSS directly |
| **SERP Evidence** | `andrew.hedges.name` (#1 — developer blog experiment) |
| **Devices** | Desktop (primary), mobile (secondary) |
| **Willingness to Pay** | Medium — values ad-free, will pay for developer export features |
| **Feature Priorities** | CSS `aspect-ratio` export, `padding-top` % hack, SVG viewBox copy, keyboard shortcuts, URL sharing |

### Persona B: Video Editor / Filmmaker

| Attribute | Detail |
|-----------|--------|
| **Tech Proficiency** | High |
| **Primary JTBD** | Downscale 4K/8K footage into broadcast or social media formats |
| **Key Frustration** | Remembering exact pixel counts for 2.39:1 cinemascope, letterboxing math |
| **Typical Workflow** | Mid-edit in Premiere/DaVinci, alt-tabs to calculator, needs instant answer |
| **SERP Evidence** | `digitalrebellion.com` (#5 — post-production tools) |
| **Devices** | Desktop |
| **Willingness to Pay** | Medium — values batch processing and custom presets for project templates |
| **Feature Priorities** | Cinema presets (2.39:1, 2.35:1, 1.85:1), drag-and-drop frame analysis, swap button |

### Persona C: Social Media Manager

| Attribute | Detail |
|-----------|--------|
| **Tech Proficiency** | Medium |
| **Primary JTBD** | Batch-scale content across multiple platform specifications |
| **Key Frustration** | Constantly changing platform requirements; needs to reformat same asset 5+ times |
| **Typical Workflow** | Creating content in Canva/Figma, needs platform-specific dimensions for each post |
| **SERP Evidence** | Target keywords `"...online"` and `"...free"` indicate quick web tool preference |
| **Devices** | Desktop and mobile equally |
| **Willingness to Pay** | Low — wants free tool, tolerates ads |
| **Feature Priorities** | Platform presets (Instagram, TikTok, YouTube, X, LinkedIn), one-tap copy, visual preview |

### Persona D: Photographer / Print Designer

| Attribute | Detail |
|-----------|--------|
| **Tech Proficiency** | Medium |
| **Primary JTBD** | Translate physical dimensions (cm/inches) to digital pixels for print/web |
| **Key Frustration** | DPI/PPI conversion errors; mismatch between print specs and screen output |
| **Typical Workflow** | Preparing files for print, gallery, or web portfolio — needs pixel-perfect dimensions |
| **SERP Evidence** | `bellevuefineart.com` (#8 — fine art framing) |
| **Devices** | Desktop |
| **Willingness to Pay** | Medium — values saved custom presets for recurring client specs |
| **Feature Priorities** | Drag-and-drop image analysis, identify mode (what ratio is this photo?), photography presets (3:2, 5:4, 8:10) |

### Persona E: Solo Business Owner / Non-Technical User

| Attribute | Detail |
|-----------|--------|
| **Tech Proficiency** | Low |
| **Primary JTBD** | Fit an image into a website template, Canva design, or email header |
| **Key Frustration** | Intimidated by jargon ("aspect ratio", "resolution"); just wants "the right size" |
| **Typical Workflow** | Building Wix/Squarespace site, template says "hero image 1920x1080" — what does that mean? |
| **SERP Evidence** | `calculatorsoup.com`, `calculator.net` (#2, #4 — generic calculator portals serve this audience) |
| **Devices** | Mobile (primary), desktop (secondary) |
| **Willingness to Pay** | None — ad-supported tier only |
| **Feature Priorities** | Plain-English tooltips, visual preview box, platform presets with recognizable names, large tap targets |

### Persona F: AV Enthusiast / Home Theater Hobbyist

| Attribute | Detail |
|-----------|--------|
| **Tech Proficiency** | Medium |
| **Primary JTBD** | Calculate screen size and throw distance for projectors; match room dimensions to display ratios |
| **Key Frustration** | Converting between screen diagonal, width, height, and aspect ratio for equipment purchases |
| **Typical Workflow** | Shopping for projector/screen, needs to know if 16:9 or 2.35:1 fits their wall |
| **SERP Evidence** | `elitescreens.eu` (#6 — projection screen company ranking for this keyword) |
| **Devices** | Mobile (measuring rooms) and desktop (shopping) |
| **Willingness to Pay** | Low |
| **Feature Priorities** | Common display presets (16:9, 21:9, 2.35:1), identify mode, visual proportions box |

### Persona Priority Matrix

| Persona | Traffic Share | Revenue Potential | Priority |
|---------|--------------|-------------------|----------|
| C: Social Media Manager | 30% | Low (ads) | **P0 — Primary** |
| E: Solo Business Owner | 25% | Low (ads) | **P0 — Primary** |
| A: Frontend Developer | 15% | High (Pro tier) | **P1 — Secondary** |
| B: Video Editor | 12% | High (Pro tier) | **P1 — Secondary** |
| D: Photographer | 10% | Medium (Pro tier) | **P2 — Tertiary** |
| F: AV Enthusiast | 8% | Low (ads) | **P2 — Tertiary** |

**Personas C and E** drive 55% of traffic volume (ad-supported free tier).
**Personas A and B** drive 27% of traffic but represent the **Pro tier conversion opportunity**.

---

## 4. Core User Flows (MVP)

The application uses a reactive, state-driven frontend. There are **no "Submit" buttons**; calculations occur on every keyup event.

### Flow 1: Free-Type Scale (All Personas)

1. User enters or selects an aspect ratio (e.g., 16:9)
2. System locks ratio and shows default dimensions (1920 x 1080)
3. User changes width → height auto-calculates (or vice versa)
4. User clicks "Copy" → dimensions copied to clipboard

**Persona A addition:** "Copy as CSS" button outputs `aspect-ratio: 16 / 9;`
**Persona E addition:** Visual preview box changes shape in real-time as user types

### Flow 2: Platform Preset (Personas C, E)

1. User clicks a visual preset card (e.g., "Instagram Story")
2. System locks ratio at 9:16 and pre-fills 1080 x 1920
3. User alters one dimension; the other scales automatically
4. Badge shows platform name for reassurance

### Flow 3: Drag & Drop Auto-Fill (Personas A, B, D)

1. User drags an image file onto the calculator drop zone
2. System reads file metadata locally (no upload) and populates width/height
3. System auto-switches to Identify mode
4. Displays simplified ratio, decimal, and percentage

### Flow 4: Identify Unknown Ratio (All Personas)

1. User enters arbitrary width and height
2. System shows simplified ratio (via GCD), decimal value, height as % of width
3. User can copy any value

---

## 5. Mathematical Engine

Core cross-multiplication:

```
W₁/H₁ = W₂/H₂  →  W₂ = (W₁ × H₂) / H₁
```

GCD function reduces arbitrary pixels to simplest integer ratio:
- Input: 1920 × 1080 → GCD(1920, 1080) = 120 → Output: 16:9
- Input: 2560 × 1440 → GCD(2560, 1440) = 160 → Output: 16:9

---

## 6. Feature Specification

### MVP (v1.0) — Free Tier

| Feature | Persona | Status |
|---------|---------|--------|
| Resize mode with bidirectional input | All | Built |
| Identify mode (ratio, decimal, %) | All | Built |
| 7 ratio presets (16:9, 4:3, 1:1, 9:16, 3:2, 21:9, 4:5) | All | Built |
| GCD simplification engine | All | Built |
| Swap width/height button | All | Built |
| Copy dimensions to clipboard | All | Built |
| Visual preview box (dynamic shape) | All | Built |
| PWA manifest + service worker | All | Built |
| Static export (Next.js) | — | Built |
| **Platform presets** (IG, TikTok, YouTube, X, LinkedIn, FB) | C, E | **TODO** |
| **Drag-and-drop image auto-fill** | A, B, D | **TODO** |
| **Dark/Light mode toggle** (+ prefers-color-scheme) | All | **TODO** |
| **Plain-English tooltips** on ratios | E, F | **TODO** |
| **Developer export** (CSS, padding-top %, SVG viewBox) | A | **TODO** |
| **URL parameter sharing** (?w=1920&h=1080&r=16:9) | All | **TODO** |
| **ARIA labels + keyboard navigation** | All | **TODO** |
| **JSON-LD schema** (SoftwareApplication + Calculator) | — | **TODO** |
| **PWA install prompt** (beforeinstallprompt) | All | **TODO** |
| **SEO content** (What is an aspect ratio?, Common ratios table) | — | Built |

### v1.1 — Pro Tier (Post-Launch)

| Feature | Persona | Monetization |
|---------|---------|-------------|
| Ad-free experience | All | Pro ($14.99 lifetime) |
| Batch CSV processing | C, B | Pro |
| Custom saved presets (brand guidelines) | C, D | Pro |
| Calculation history | All | Pro |
| DPI/PPI converter | D | Pro |

---

## 7. Design & UX Specification

### Visual Design

- **Color scheme:** Dark-first (professional tool aesthetic), with light mode toggle
- **Dark theme:** Background #030712, Surface #111827, Accent #3B82F6 (blue)
- **Light theme:** Background #FFFFFF, Surface #F8FAFC, Accent #2563EB
- **Typography:** Geist Sans (system-optimized, Google Fonts)
- **Input fields:** Large (text-2xl), center-aligned, auto-select on focus for instant overwrite
- **Preview box:** Dynamic proportional rectangle with accent border, updates on every keystroke

### Interaction Design

- **No submit buttons** — all calculations are reactive (on keyup/change)
- **Tap-to-select-all** on input focus for instant overwriting
- **Keyboard shortcuts:** Tab between fields, Enter to copy
- **Platform preset cards:** Visual cards with platform icon + standard dimensions
- **Tooltips:** Hover on any ratio to see plain-English explanation (e.g., "1.778 → Standard widescreen TV format used by YouTube and Netflix")

### Responsive Behavior

- **Desktop:** Centered max-width 512px, comfortable padding
- **Tablet:** Same layout, slightly reduced padding
- **Mobile:** Full-width inputs, stacked layout below 480px, large 48px touch targets

---

## 8. SEO Architecture

### Programmatic Landing Pages (v1.1)

| URL Pattern | Example | Target |
|-------------|---------|--------|
| `/ratio/{w}-{h}` | `/ratio/16-9` | "16:9 aspect ratio calculator" |
| `/platform/{name}` | `/platform/instagram-reels` | "instagram reels aspect ratio" |
| `/convert/{dims}` | `/convert/1920x1080-to-4-3` | "convert 1920x1080 to 4:3" |

### On-Page SEO (MVP)

- `<title>`: "Aspect Ratio Calculator - Free Online Tool"
- `<meta description>`: "Calculate and convert aspect ratios instantly. Resize dimensions for YouTube, Instagram, TikTok, and more. Free, fast, works offline."
- JSON-LD: `SoftwareApplication` schema with `Calculator` type
- Semantic HTML: `<main>`, `<section>`, `<h1>`-`<h2>` hierarchy
- Content sections: "What is an Aspect Ratio?", "Common Aspect Ratios" table, "How to Use"

---

## 9. Monetization Strategy

### Tier 1: Free Utility (Ad-Supported)

- **Target:** High-volume global traffic (Personas C, E, F)
- **Revenue:** Non-intrusive display ads below the fold (Google AdSense initially; upgrade to Mediavine/Ezoic at 50K+ sessions/month)
- **Placement:** Below calculator, outside active interaction area
- **Economics:** At 5K monthly visitors × $7.57 RPM → ~$38/month passive baseline

### Tier 2: Pro (Lifetime Unlock)

- **Target:** Power users (Personas A, B, D)
- **Pricing:** $14.99 one-time lifetime unlock (via Stripe)
- **Rationale:** Calculator tools have low recurring value perception. Lifetime unlock removes churn friction and avoids Stripe's $0.30 per-transaction overhead eating into micro-subscriptions. No App Store commission fees.
- **Pro features:** Ad-free, batch processing, custom presets, developer export, calculation history

---

## 10. Technical Architecture

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 16 (static export) | SSG for SEO, React 19, built-in optimizations |
| Styling | Tailwind CSS 4 + CSS custom properties | Dark/light theming, minimal bundle |
| PWA | Manual service worker + manifest.json | Full offline support, no heavy library needed |
| State | React useState + URL params | No backend, no external state library |
| Hosting | Cloudflare Pages or Vercel | Free tier, edge CDN, instant deploys |
| Payments (v1.1) | Stripe Checkout | One-time lifetime unlock, no recurring complexity |
| Analytics | Plausible or Umami | Privacy-friendly, lightweight, GDPR-compliant |
| Ads | Google AdSense → Mediavine | Graduated based on traffic threshold |

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse PWA | All pass |
| First Contentful Paint | < 1.0s |
| Time to Interactive | < 1.5s |
| Total Bundle Size (JS) | < 100KB |
| Offline Support | Full functionality |

---

## 11. Success Metrics

| Metric | Target (6 months) |
|--------|-------------------|
| Organic monthly visitors | 5,000+ |
| SERP ranking (primary keyword) | Top 5 |
| PWA installs | 500+ |
| Bounce rate | < 40% |
| Avg. session duration | > 60 seconds |
| Pro tier conversions (v1.1) | 3-5% of Western traffic |

---

## 12. Agent Feedback Log

### PERSONA Agent (Customer Proxy)

> **Decision: Dark-first theme** — Confidence HIGH. Video editors and developers (Personas A, B) work in dark IDEs/NLEs. Social media managers (C) are in dark-themed apps. Dark-first serves the majority.
>
> **Decision: Platform presets as visual cards** — Confidence HIGH. Persona E needs recognizable names ("Instagram Story") not ratios ("9:16"). Cards with platform names reduce cognitive load.
>
> **Decision: Large center-aligned inputs** — Confidence HIGH. Persona E is intimidated by dense UIs. Oversized inputs signal simplicity.
>
> **Decision: No sidebar navigation** — Confidence HIGH. Single-page utility tool. Sidebar adds unnecessary complexity for a calculator. Scroll-down layout is sufficient.
>
> **Decision: Lifetime pricing over subscription** — Confidence MEDIUM. Calculator tools don't justify recurring billing. $14.99 lifetime is a better match for utility perception. Flagged for G1 review.

### UI Agent (Cross-Review)

> **Feedback on SPEC:** Platform presets need both ratio AND default pixel dimensions. Instagram Story = 9:16 AND 1080x1920. Users expect the pixels, not just the ratio.
>
> **Feedback on SPEC:** Visual preview box should show the platform icon/name inside it when a platform preset is selected.

### SECURITY Agent (Cross-Review)

> **Feedback on drag-and-drop:** Image file reading must be client-side only via FileReader API. No file data should be sent to any server. The Image() constructor reads dimensions from metadata without loading full pixel data — use `naturalWidth`/`naturalHeight`.
>
> **Feedback on URL sharing:** URL params must be sanitized. Only allow numeric values for w/h/r params. Reject non-numeric input to prevent XSS via URL.

### QA Agent (Cross-Review)

> **Feedback on GCD edge cases:** GCD(0, n) should return n, not 0. GCD of non-integer inputs should round first. Current implementation handles this correctly (Math.round in gcd function).
>
> **Feedback on copy button:** Test clipboard API fallback — some browsers block clipboard in non-secure contexts. The catch block is empty; should show a fallback "Select and copy manually" message.

---

## 13. Current State & Build Plan

### Already Built (Standalone PWA)
- Core calculator (Resize + Identify modes)
- 7 ratio presets with bidirectional calculation
- GCD engine, swap button, copy to clipboard
- Visual preview box
- PWA manifest.json + service worker (stale-while-revalidate)
- Next.js 16 static export
- Dark theme with CSS custom properties
- SEO content (What is?, Common Ratios table, How to Use)

### Build Sprint (This Session)
1. Platform presets (Instagram, YouTube, TikTok, X, LinkedIn, Facebook)
2. Drag-and-drop image auto-fill
3. Dark/light mode toggle
4. Plain-English tooltips
5. Developer export (CSS, padding-top, viewBox)
6. URL parameter sharing
7. ARIA labels + keyboard navigation
8. JSON-LD schema + PWA install prompt
9. Build verification

---

*Generated by ShipWright Agent System — PERSONA, SPEC, UI, SECURITY, QA agents*
