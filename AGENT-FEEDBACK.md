# Agent Feedback Log: Aspect Ratio Calculator

## Round Table Configuration
- **Rounds:** 2 (max)
- **Agents:** 6 persona agents (A-F) + SPEC agent (synthesizer)
- **Date:** 2026-02-26

---

## ROUND 1: Initial Review of Draft App

Each persona agent reviewed the current Calculator.tsx and page.tsx independently.

### Cross-Persona Issue Heatmap

| Issue | A (Dev) | B (Video) | C (SMM) | D (Photo) | E (Biz) | F (AV) | Consensus |
|-------|---------|-----------|---------|-----------|---------|--------|-----------|
| Copy button outputs useless format | CRITICAL | MEDIUM | MEDIUM | LOW | MEDIUM | LOW | **HIGH — Fix** |
| Missing platform/context presets | — | CRITICAL | CRITICAL | CRITICAL | HIGH | HIGH | **CRITICAL — Fix** |
| parseInt blocks decimal ratios (2.39) | — | CRITICAL | — | MEDIUM | — | — | **CRITICAL — Fix** |
| Presets reset width to 1920 | HIGH | MEDIUM | MEDIUM | MEDIUM | — | — | **HIGH — Fix** |
| No CSS/developer export | CRITICAL | — | — | — | — | — | **HIGH — Fix (Persona A only)** |
| No physical units (inches/cm) | — | — | — | CRITICAL | — | CRITICAL | **DEFER — v1.1 (niche)** |
| No diagonal entry mode | — | — | — | — | — | CRITICAL | **DEFER — v1.1 (niche)** |
| No DPI/print conversion | — | — | — | CRITICAL | — | LOW | **DEFER — v1.1 (niche)** |
| Plain-English labels needed | — | — | HIGH | — | CRITICAL | — | **HIGH — Fix** |
| Identify mode: no format recognition | — | HIGH | HIGH | MEDIUM | HIGH | — | **HIGH — Fix** |
| No matte/letterbox calculator | — | HIGH | — | — | — | MEDIUM | **DEFER — v1.1** |
| No throw distance calculator | — | — | — | — | — | HIGH | **DEFER — v1.1 (niche)** |
| Jargon-heavy labels ("Ratio W") | — | — | — | — | CRITICAL | — | **HIGH — Fix** |
| Visual preview lacks context | MEDIUM | MEDIUM | — | — | MEDIUM | — | **LOW — Minor tweak** |

### SPEC Agent Synthesis: Round 1 Decisions

Based on cross-persona consensus, these changes are **APPROVED for MVP build**:

#### MUST FIX (blocking ship)

1. **Fix parseInt → parseFloat on custom ratio inputs** (Personas B, D)
   - Lines 162, 182 in Calculator.tsx: `parseInt` → `parseFloat`
   - Bug: entering 2.39 silently becomes 2, producing wrong output

2. **Add platform presets with real names and pixel dimensions** (Personas C, E)
   - Instagram Post (1080x1080, 1:1), Story/Reel (1080x1920, 9:16), Portrait (1080x1350, 4:5)
   - YouTube Video (1920x1080, 16:9), Shorts (1080x1920, 9:16), Thumbnail (1280x720, 16:9)
   - TikTok Video (1080x1920, 9:16)
   - X/Twitter Post (1600x900, 16:9), Header (1500x500, 3:1)
   - LinkedIn Post (1200x627, ~1.91:1), Banner (1584x396, 4:1)
   - Facebook Post (1200x630, ~1.91:1), Cover (820x312, ~2.63:1)
   - Pinterest Pin (1000x1500, 2:3)

3. **Add cinema/broadcast presets** (Persona B)
   - 2.39:1 Cinemascope (4096x1716)
   - 2.35:1 Anamorphic (1920x817)
   - 1.85:1 Flat (1920x1038)
   - DCI 4K (4096x2160)
   - UHD 4K (3840x2160)

4. **Add photography presets** (Persona D)
   - 5:4 (8x10 print)
   - 7:5 (5x7 print)

5. **Don't reset width to 1920 on preset click** (Personas A, B, C, D)
   - Keep current width, recalculate height from new ratio
   - Only set 1920 on first load or if width is empty

6. **Improve copy button** (All personas)
   - Multi-format: "Copy WxH", "Copy Width", "Copy Height"
   - Developer extras: "Copy CSS aspect-ratio", "Copy padding-bottom %"

7. **Add developer output panel in Resize mode** (Persona A)
   - Show live: `aspect-ratio: 16 / 9`, `padding-bottom: 56.25%`, `width: Xpx; height: Ypx`

8. **Improve labels for non-technical users** (Persona E)
   - "Ratio W" → "Width Ratio" with helper text
   - Add sub-labels under Resize/Identify tabs explaining what each does
   - Tooltips on ratio presets showing plain-English descriptions visible by default (not hover-only)

9. **Add format recognition to Identify mode** (Personas B, C, D, E)
   - Match dimensions against known formats (YouTube 1080p, Instagram Post, 4K, etc.)
   - Show "This matches: YouTube 1080p (16:9)" below the ratio output

#### DEFERRED to v1.1

- Physical units (inches, cm, feet) — Personas D, F
- Diagonal entry mode — Persona F
- DPI/PPI conversion — Persona D
- Throw distance calculator — Persona F
- Matte/letterbox calculator — Personas B, F
- Batch CSV processing — Persona C
- Non-square pixel aspect ratio (PAR) — Persona B
- Room constraint mode — Persona F
- Megapixel output — Persona D
- Breakpoint quick-fill strip — Persona A

---

## ROUND 2: Review of Proposed Changes

All 6 personas reviewed the SPEC synthesis. Results:

### Consensus Matrix

| Item | A (Dev) | B (Video) | C (SMM) | D (Photo) | E (Biz) | F (AV) | Result |
|------|---------|-----------|---------|-----------|---------|--------|--------|
| 1. parseFloat fix | CONFIRM | CONFIRM | CONFIRM | CONFIRM | CONFIRM | CONFIRM | **SHIP** |
| 2. Platform presets | CONFIRM | CONFIRM | CONFIRM | CONFIRM | CONFIRM | NEUTRAL | **SHIP** |
| 3. Cinema presets | CONFIRM | CONFIRM* | DEFER | CONFIRM | DEFER | CONFIRM* | **SHIP (grouped)** |
| 4. Photo presets | CONFIRM | CONFIRM | DEFER | CONFIRM* | CONFIRM | CONFIRM | **SHIP (grouped)** |
| 5. Keep width | CONFIRM | CONFIRM | CONFIRM | CONFIRM | CONFIRM | CONFIRM | **SHIP** |
| 6. Multi-format copy | CONFIRM | CONFIRM | CONFIRM | CONFIRM* | CONFIRM | CONFIRM | **SHIP** |
| 7. CSS dev panel | CONFIRM | CHALLENGE | CHALLENGE | CHALLENGE | CONFIRM* | NEUTRAL | **SHIP (toggle)** |
| 8. Better labels | CONFIRM | CONFIRM | CONFIRM | CONFIRM | CONFIRM | CONFIRM | **SHIP** |
| 9. Format recognition | CONFIRM | CONFIRM | CONFIRM | CONFIRM | CONFIRM | CONFIRM | **SHIP** |

### Key Round 2 Refinements (incorporated into build)

1. **Preset grouping is mandatory** — C, D, E all challenged flat list. Group by: Social, Cinema/Video, Photography. Use collapsible sections or tabs.
2. **CSS panel must be opt-in toggle** — C, D, E, B all challenged auto-display. Small "Show CSS" button.
3. **Cinema presets**: Add 1.78:1 label alongside 16:9 (B's request), mark 2.35:1 as "Legacy Scope" (B, D)
4. **Photo presets**: Add 4:3 / 4x6 print (D's critical gap — most common consumer print)
5. **Merge duplicate vertical presets**: TikTok + Reels + Shorts → "Vertical Video (9:16)" with platform sub-labels
6. **Tab rename**: "Identify" → "Identify Format" (B's request, E confirmed)
7. **Swap button already exists** — D and B flagged it as missing but it's in the current code. Need to make it more visible/labeled.
8. **Show both integer ratio AND decimal** in Identify mode (B, F both need this)

### Round 2 NEW Issues (triaged)

| Issue | Source | Decision |
|-------|--------|----------|
| inputmode="numeric" for mobile keyboards | A | **ADD to MVP** |
| Clipboard fallback for non-HTTPS | A | **ADD to MVP** |
| Input validation (NaN handling) | E | **ADD to MVP** |
| Preset search/filter at 15+ items | C | **DEFER — grouping solves this for now** |
| Safe zone warnings per platform | C | **DEFER — v1.1** |
| FFmpeg scale copy format | B | **DEFER — v1.1** |
| Letterbox/pillarbox calculator | F | **DEFER — v1.1** |
| localStorage for recent ratios | E | **DEFER — v1.1** |
| Throw distance calculator | F | **DEFER — v1.1** |

### Round Table Status: **CONVERGED after 2 rounds**

No unresolved CRITICAL disagreements. All agents confirmed readiness to build.

---

## POST-BUILD: Human Review Catch

### Issue: Quick-Ratio Row Regression

**Caught by:** Human reviewer (not caught by persona agents)
**Severity:** HIGH

The SPEC synthesis replaced the original 7-button flat ratio row with grouped/collapsible platform presets. This was correct for Personas C and E but degraded Persona A's fastest interaction path from 1 click to 3 clicks (open group → scan → click).

**Root cause:** Round 2 prompts asked agents to confirm *additions* (grouped presets) without explicitly surfacing the *removal* (flat ratio row). Persona A confirmed "add groups" without realizing the flat row would disappear.

**Process lesson:** Round table prompts must explicitly surface removals and trade-offs, not just additions. Template fix: "This change ADDS X but REMOVES Y. Is Y removal acceptable for your workflow?"

**Fix applied:** Added always-visible "Quick ratios" row (16:9, 4:3, 1:1, 9:16, 3:2, 21:9, 4:5) above the collapsible platform groups. Quick ratios only set the ratio and recalculate height (don't override width). Both developer speed and platform discoverability preserved.

### Issue: File Upload Button Missing

**Caught by:** Human reviewer
**Severity:** MEDIUM

Drag-and-drop image detection was built but completely invisible to Persona E (non-technical users). No button, no affordance — only a text hint in Identify mode saying "drag & drop." Persona E users on mobile or unfamiliar with drag-and-drop would never discover this feature.

**Root cause:** None of the persona agents flagged this because the feature didn't exist during Round 1 review. It was added during build based on the PRD spec but never re-reviewed by personas post-build.

**Process lesson:** Features added during build (not present during review rounds) need a post-build persona verification pass.

**Fix applied:** Added visible "Upload image" button with file icon in Identify mode. Uses hidden `<input type="file" accept="image/*">` triggered by the button. Same `Image()` metadata reading as drag-and-drop, client-side only.

---

## Feedback Statistics

| Metric | Value |
|--------|-------|
| Total feedback items | 67 |
| CRITICAL items | 14 |
| HIGH items | 19 |
| MEDIUM items | 22 |
| LOW items | 12 |
| Items addressed in MVP | 9 themes |
| Items deferred to v1.1 | 10 themes |
| Cross-persona agreements (3+ personas) | 8 |
| Single-persona requests | 12 |
