# PMD — Open Items & Technical Debt

## Responsive pass (after all desktop zones complete)
- [ ] Logo size 160px — reassess at mobile breakpoints
- [ ] Blockquote font-size 1.25rem — check legibility at 375px width
- [ ] sketch-prd and sketch-roadmap height calc() — check distortion on non-standard screens
- [ ] Nav spans — become anchor tags at P1 — check touch target size (WCAG 2.5.5 — 44x44px min)
- [x] All zones — tested at 375px · 768px — COMPLETE
- [ ] All zones — test at 1280px · 1440px — spot check recommended

## P1 — Introduce at start of next project
- [ ] Notion — PRD documentation
- [ ] Figma — wireframing
- [ ] Jira — sprint planning and story points
- [ ] Nav spans → proper anchor href tags when pages exist
- [ ] GitHub Issues — replace NOTES.md as flag system

## WCAG — ongoing
- [ ] SC 2.4.5 — multiple ways to reach pages — required once About page exists
- [ ] Touch target audit at responsive pass
- [ ] Full WCAG 2.2 AA audit before site is shared with evaluators

## Deferred decisions
- [ ] About page — content and design TBD
- [ ] Projects page — single page or dropdown TBD
- [ ] GA4 measurement ID — replace placeholder at deploy config
- [ ] TOS / Privacy — footer placeholders — legal copy deferred
- [ ] Wireframe v4.1 PDF — generate and add to docs/current/
- [ ] Scroll chevron between zones — revisit once Zone 3 is built — assess whether affordance is needed or redundant
- [ ] PRD FR-05 amendment — thumbnail row placed in Zone 2 below fold, not above fold — document decision in next PRD version
- [ ] Zone 2 redundancy — thumbnail row previews Zone 3 content without adding depth 
    — revisit at P1 when artifact tiles link to full document views or individual pages
- [ ] Footer email — replace hello@thepmdev.com placeholder with live purpose-built contact address before sharing 
      site with evaluators
- [ ] Zone 4 hidden at 480px — consider mobile-friendly alternative to iframe for Playbook at P1

## Asset generation — documented decisions
- Thumbnails generated via PyMuPDF (fitz) — one-time script — not committed to repo
- generate_thumbnails.py deleted after use — utility scripts do not belong in portfolio repo
- Re-generate from source PDFs if thumbnails need to be updated

## P1 — Site architecture decisions — deferred from P0 close

- [ ] Homepage purpose — project showcase vs. personal brand landing page — decide before P1 build begins
- [ ] Nav structure — "Projects" with subpages vs. expanded category-level nav links — evaluate at P1 IA phase
- [ ] About page — reconsider necessity if homepage becomes brand-focused — may remove from nav at P1
- [ ] Projects nav — evaluate category structure: Apps · Data Analysis · PMD System · Other — with JavaScript expansion for      project lists
- [ ] Index.html long-term role — profiling most recent project vs. evergreen brand page — decision required 
      before P1 content build

## Next session opening agenda — in order
- [ ] 1. Retrospective — Phases 4–7 — P0 complete
- [ ] 2. 1280px and 1440px spot check
- [ ] 3. Official P0 sign-off
- [ ] 4. P1 kickoff — begin with architecture decisions in NOTES.md

## Session 07 — P0 Sign-Off — May 2026

### Immediate actions — complete these now
- [ ] Clarity — connect Microsoft Clarity property to GA4 for combined reporting
- [ ] GA4 — verify X.com UTM appearing as twitter / social / p0-soft-launch in Acquisition report
- [ ] docs/current/ — populate with Artifacts 14, 15, 16 and Session Summary v4.4
- [ ] docs/archive/ — move PMD_Session06_Summary_Phase7_Complete_v4.2.pdf here

### Instrumentation — ongoing monitoring
- [ ] Bit.ly click count vs GA4 twitter/social sessions — verify directional alignment
- [ ] Clarity — after minimum 50 human sessions post full launch — review scroll heatmap, click heatmap, and three session recordings — use iterate trigger table in Artifact #16

### P0 v2 backlog — deferred until after P1 kickoff
- [ ] Homepage redesign — project thumbnail grid — show don't tell vision — locked in Artifact #15
- [ ] Roadmap visualization page — inverted node tree — cumulative projects, tools, skills branching outward
- [ ] Navigation build-out — nav spans to proper anchor href tags — dedicated PMD Process page
- [ ] Artifact tiles — make clickable if Clarity dead click data confirms evaluator expectation
- [ ] CTA after Zone 3 — add if Clarity confirms sessions reaching Zone 3 but not converting
- [ ] Netlify UTM redirect — replace Bit.ly with _redirects rule for thepmdev.com/twitter and thepmdev.com/linkedin
- [ ] Mobile Zone 4 — consider mobile-friendly alternative to iframe for Playbook at P0 v2
- [ ] PRD FR-05 amendment — thumbnail row placed in Zone 2 below fold, not above fold — document in next PRD version

### Deferred — pending external dependencies
- [ ] Footer email — replace hello@thepmdev.com placeholder — pending Google Workspace setup and subdomain configuration under ThePMDev.com
- [ ] TOS / Privacy — footer placeholders — pending entity and Google Workspace setup
- [ ] LinkedIn activation — add UTM-tagged URL to profile — activate only when full launch trigger met: P0 v2 complete + 3 portfolio projects live
- [ ] Wireframe v4.1 PDF — generate updated wireframe reflecting built state — add to docs/current/

### P1 — next session agenda
- [ ] P1 project roadmap discussion — ideation, sequencing, and project selection
- [ ] Classify each candidate project: learning project (internal only) or portfolio project (showcased on thepmdev.com)
- [ ] Evaluation criterion for every candidate: stretches capability without triggering the stall
- [ ] Full launch trigger reminder: P0 v2 complete + 3 portfolio-worthy projects live — 180-day hard deadline running

### Completed this session — for the record
- [x] Retrospective — Phases 4–7 — Artifact #14 — approved
- [x] Phase 8 — Launch & Marketing — Artifact #15 — approved
- [x] Phase 9 — Measure & Iterate — Artifact #16 — approved
- [x] Google Analytics 4 — Measurement ID installed in index.html — confirmed live
- [x] Microsoft Clarity — tracking script installed in index.html — collecting
- [x] X.com UTM — Bit.ly shortened URL installed at pinned profile — active
- [x] 1280px and 1440px spot check — no issues
- [x] P0 — Project 0 — Portfolio Shell — officially signed off
- [x] PMD_SKILL.md file - created