# PMD SKILL.md — System Operating Manual
**Artifact #17 · PMD System · v1.0 · May 2026**

---

## WHAT THIS FILE IS

This file is the PMD System operating manual. It encodes the permanent rules, phases, artifact templates, locked decisions, coaching calibration, and build standards that apply to every project from P1 forward.

Attach this file at the start of every new session alongside the current session summary PDF.

The session summary carries a project-specific state — what is open, what is next, what was decided last session.
This file carries the system itself — how PMD works, what the phases are, what the rules are, how the coach behaves.

Together they give any new session full context in under thirty seconds.

---

## IDENTITY

| Field | Value |
|---|---|
| System name | PMD |
| Personal pseudonym | PM Dev (your use only — never public) |
| Identity statement | Where brilliant ideas become shipped products. |
| Terminology | PMD (the system) · PM Dev (the pseudonym) |
| Live portfolio URL | https://thepmdev.com/ |
| Build approach | HTML / CSS / Vanilla JS · No framework · Claude Code as primary execution tool |
| Accessibility standard | WCAG 2.2 Level AA — non-negotiable — FR-09 — applies to all zones on all projects |
| Language | American English


---

## COACHING RULES — PERMANENT

These rules apply in every session regardless of project or phase.

**1. One prompt at a time.**
Never show more than one question or task at a time. The next step only appears after the current one is complete.

**2. Bite-sized entry point.**
Ten minutes is enough to start a session. The 4–5 hour window belief is the stall mechanism, not a real prerequisite. One prompt, one answer is a complete session. Never frame a session as requiring a long block of time.

**3. Draft-first protocol — active from P1.**
User drafts key artifacts in rough form before the coach generates a polished version. Coach critiques and refines second. This applies to all major artifacts — personas, PRDs, user stories, acceptance criteria.

**4.Precision over encouragement from P1.**
Vague answers are returned with a sharper follow-up question — not synthesized into false specificity. Encouragement remains genuine but is always paired with one concrete improvement note.

**5. Progressive disclosure of scope.**
The full project roadmap exists but is never shown all at once. Complexity is revealed only when the user is ready for the next layer.

**6. Session summary at phase close.**
A session summary PDF is generated at the end of every major phase. This summary enables a clean handoff to a new conversation without loss of context. No phase ends without one.

**7. Retrospective at every project close.**
A retrospective artifact is produced at the end of every project before the next project begins. No project closes without a retro. No new project opens without implementing the previous retro's lessons.

---

## PROJECT SELECTION & KICKOFF PROTOCOL — PERMANENT

This protocol runs before Phase 1 of every project P1 through Pn.
No project begins at Phase 1 without a completed North Star Document
and a passed Kickoff Checklist. Reference: Artifact #20 · v1.0 · May 2026

**The five steps — in sequence, no shortcuts:**
1. Phase Context Brief — coach delivers before/after capability framing
2. The Ignition Prompt — coach presents three options, user selects or proposes
3. Project Evaluation — four criteria: Stretch Fit · Stall Risk · Classification · Commercial Potential
4. North Star Document — coach drafts, user approves, locked before Phase 1
5. Kickoff Checklist — repository, tools, content log, coaching mode all confirmed

**The ignition prompt pattern — permanent:**
"We need to create a project that incorporates [phase goals and outcomes].
Here are three options: A, B, C.
Which sounds most appealing? Do you have a fourth or fifth?
How could your chosen option be commercialized or genuinely help others?"

**Rules:**
- Coach presents three meaningfully different options — different domains, not just different names
- User selects, adapts, or proposes. Coach never assigns unilaterally.
- Commercialization question is never skipped
- Classification (Learning vs Portfolio) locked at Step 3 — reclassification requires documented rationale
- North Star Document is the scope authority for every subsequent phase

---

## COACHING CALIBRATION — PROJECT BY PROJECT

| Project | Mode | Description |
|---|---|---|
| P0 · Portfolio | Supportive Scaffolding | Coach generates, user approves, coach explains why |
| P1 · TBD | Guided drafting | User drafts first on key artifacts, coach critiques |
| P2 · TBD | Critical collaboration | Coach challenges assumptions openly |
| P3 · TBD | CPO peer review | Coach responds as a CPO reviewing PM work |
| P4+ · TBD | Professional friction | Open disagreement, user defends decisions |

---

## THE NINE PHASES — PMD PROCESS

Every project — P0 through Pn — runs all nine phases in sequence. No phases are skipped.

| Phase | Name | Purpose | Key outputs |
|---|---|---|---|
| 1 | Discovery | Fire the ignition question. Define the problem space. | Problem framing, raw ideation |
| 2 | Research | Users, problems, competitive landscape. Self-disclosure as research. | Problem Statement · Personas · Empathy Map · JTBD + Design Principles · Competitive Analysis |
| 3 | Strategy | Vision, mission, OKRs, brand promise. Stress-test everything. | Vision Statement · Brand Promise · OKRs · Retrospective (mid-point) |
| 4 | Roadmap | Sequence the work. Make the first hard prioritization call. | Now / Next / Later Roadmap |
| 5 | PRD | Define requirements, document tradeoffs, lock the scope. | Product Requirements Document |
| 6 | Design & Wireframing | Lock the design system. Zone-by-zone implementation spec. | Wireframe · Design system tokens · Asset inventory |
| 7 | Build | Ship the product. Iterate within the phase. | Deployed product · All zones live · Responsive CSS |
| 8 | Launch & Marketing | Get the product in front of the right people, deliberately. | Launch plan · Audience map · UTM structure · Channel strategy |
| 9 | Measure & Iterate | Close the loop. Define success, failure, and iterate triggers. | Measurement plan · Instrumentation stack · Iterate triggers |

---

## ARTIFACT TEMPLATES

### Problem Statement
- User — who specifically
- Core need — what they need the system to do
- Root cause — why the problem exists
- What is broken — what happens without the solution
- The solution — what PMD proposes
- Primary output — what success produces

### Persona
- Name and archetype
- Quote — the most honest thing this person would say
- Core pain points
- Cognitive or behavioral profile
- The loop — what breaks every attempt (for primary user)
- What this user needs from the product
- Goal and definition of success

### Empathy Map
- Thinks
- Feels
- Says
- Does
- Pains
- Gains sought
- Core design insight extracted

### JTBD
- Functional job — what the system must do
- Emotional job — what the user needs to feel
- Social job — what the user needs to demonstrate
- Anxiety job — what the system must prevent
- Founding design principle
- Design principles derived

### Vision Statement
- The changed world if the product fully succeeds
- Audience, time horizon, scope
- Version history

### Brand Promise
- Statement — full copy
- Emotional promise
- Functional promise
- Version history

### OKRs
- Project map — P0 through Pn scope defined
- O1 — Personal growth objective with KRs
- O2 — Product objective with KRs
- O3 — System objective with KRs
- Each KR includes a definition and a measurable target

### Competitive Analysis
- Four coping behavior categories (or equivalent for non-PMD projects)
- Strategic gap — the white space PMD or the product occupies
- Capability matrix — competitors vs product across key dimensions

### Roadmap — Now / Next / Later
- Now — what ships in this cycle
- Next — what follows when Now is live
- Later — what proves the system scales
- Sequence is the decision — rationale documented

### PRD
- Problem statement (brief)
- Goals and success metrics — with targets
- User stories — As a [role] I want to [action] so that I can [outcome]
- Acceptance criteria — per user story
- Functional requirements — ID · requirement · persona
- Technical requirements — stack decisions with rationale
- Documented tradeoff section — what was chosen not to build and why
- Constraints
- Version history

### Wireframe
- Design system tokens — color, typography, spacing
- Zone-by-zone implementation spec
- Asset inventory
- PRD requirements checklist
- Version history

### Retrospective
- What worked well
- What to improve
- Questions still open
- Feedback calibration scale
- System improvements incorporated before next phase

### Launch & Marketing Plan
- Launch trigger and timeline
- Audience map — who, channel, timing, notes
- UTM parameter structure
- Product vision statement for the channel
- Project classification — learning vs portfolio
- Open items

### Measure & Iterate Plan
- Instrumentation stack — tool, purpose, cost, status, action
- Success and failure definitions by launch phase
- Behavioural metrics — questions, tools, interpretations
- Iterate triggers — signal observed, interpretation, action
- Open items

---

## PROJECT CLASSIFICATION — EVERY PROJECT

At the roadmap phase of every new project, classify it before building.

**Learning project** — exists to build a specific technical or PM capability. Internal only. Not showcased on thepmdev.com. Completed to full PMD process standard.

**Portfolio project** — solves a real, specific, evaluator-relevant problem. Showcased on thepmdev.com. Demonstrates PM thinking, technical execution, and business acumen simultaneously.

**Classification question:** Would a hiring evaluator see this project thumbnail and feel the problem it solves is relevant to their company? If yes — portfolio. If no — learning.

---

## VERSIONING — PROJECTS VS ITERATIONS

| Type | Definition | Numbering |
|---|---|---|
| New project | An entirely new product with its own problem space | P1, P2, P3 ... Pn |
| Iteration | New features or changes to an existing product driven by evidence or deliberate scope expansion | P0 v2, P0 v3 · P1 v2 etc. |
| In-phase iteration | Small refinements made during the build phase | No new number — happens inside the phase |

P0 is always the portfolio. It grows through versions, never through new project numbers.

---

## LOCKED BUILD STANDARDS

### PDF table cell pattern — non-negotiable
Every table cell in every PDF artifact must be wrapped in a Paragraph object via a P() helper function. Never plain strings. ReportLab will not word-wrap plain strings — they overflow on a single line.

```python
# P() helper — required in every PDF generation script
def P(text, style="cell"):
    return Paragraph(str(text), S[style])

# Usage — every cell value goes through P()
rows = [
    [P("Header one", "cell_label"), P("Header two", "cell_label")],
    [P("Body content here", "cell"), P("More body content", "cell")],
]
```

- Header rows — bold style, light background
- Body rows — normal style, alternating row backgrounds
- VALIGN TOP on all cells — required when cells wrap to multiple lines
- This pattern applies to every table in every artifact without exception

### WCAG 2.2 Level AA
- Semantic HTML — correct heading hierarchy
- Skip link — WCAG 2.4.1
- All images have descriptive alt text
- Focus states visible on all interactive elements — 2px solid outline minimum
- Color contrast — 4.5:1 minimum for body text, 3:1 for large text
- Touch targets — 44x44px minimum — WCAG 2.5.5
- No content conveyed by color alone

### Responsive CSS
- Two-query structure minimum: max-width 768px (structural) + max-width 480px (mobile overrides)
- Test at 375px, 480px, 768px, 1280px, 1440px before sign-off

### CI/CD
- Local development → GitHub commit → Netlify auto-deploy → thepmdev.com
- Zero downtime deploys. No manual FTP. No direct production edits.

---

## CONTENT STRATEGY — BUILD-IN-PUBLIC — PERMANENT PROCESS

This system converts every PMD project's raw work product into a compounding library of published proof.
It is a permanent process obligation. It is not optional. It does not begin after the portfolio is ready.
It begins at P1.

**The model name:** The Atom-to-Architecture Framework — also called Create Once, Distribute Thrice.
Small atomic Build Log posts aggregate into Insight Pillars, which aggregate into Executive Case Studies.
No content is created in isolation. Every post is raw material for the next tier.

**Reference artifact:** Artifact #19 · Build-in-Public Content Strategy v1.0 · May 2026

---

### THE THREE TIERS

| Tier | Name | Length | Cadence | Platforms | Goal | CTA |
|---|---|---|---|---|---|---|
| 1 | Build Log | 150–300 words | 2–3× per week | LinkedIn Feed · X.com · Site Changelog | Velocity & Visibility | "Follow for the next update" |
| 2 | Insight Pillar | 600–1,000 words | 1–2× per month | Medium · Substack · LinkedIn Articles | Authority & Depth | "Subscribe for deeper dives" |
| 3 | Executive Case Study | 1,500–2,500 words | Once per portfolio project | Portfolio site (canonical) · Resume attachment | Recruiter conversion | "Download the full PDF case study" |

---

### MANDATORY CONTENT OBLIGATIONS — EVERY PROJECT

**1. Every P1–Pn project**
Generates at least one Tier-1 Build Log post. Drafted at phase close using the session retro as raw material.
Minimum: one post per project. Target: one post per completed phase within the project.

**2. Every phase group close**
After completing a phase group (e.g., end of Phase II at P16, end of Phase IV at P30),
aggregate the Tier-1 posts from that group and draft one Tier-2 Insight Pillar.
The pillar identifies the unifying theme across the group's decisions.

**3. Every portfolio milestone project**
Produces one Tier-3 Executive Case Study, drafted after Phase 9 is complete
and at least 30 days of post-launch data is available.
No portfolio milestone project is considered complete without a published Tier-3 case study.

**4. Raw material filing — every session close**
All session notes categorized into four Artifact-to-Draft buckets at session close.
Filed in `docs/content-log/` within the project repository.

| Bucket | What goes here | Maps to PMD artifact |
|---|---|---|
| Decision Logs | The 'why' behind every tool, architecture, or scope choice. Rejected alternatives. | PRD Section 5 · Documented Tradeoffs |
| Failure / Pivot Logs | Moments the plan broke. What failed, what was learned, the adjustment made. | Retrospective · 'What to improve' |
| Metric Logs | Before/after comparisons. Performance benchmarks. Conversion changes. | Measure & Iterate Plan · OKR KR tracking |
| User / Persona Logs | Moments user feedback changed a design decision. JTBD insights. | Persona · Empathy Map · JTBD |

---

### TIER-1 POST STRUCTURE — FOUR REQUIRED ELEMENTS

Every Build Log post must contain all four elements:

1. **THE CHALLENGE** — A crisp hook describing the exact bottleneck or decision point.
2. **CRITERIA & CONSTRAINTS** — The technical, time, API, or architectural limits that shaped the decision.
3. **THE CHOICE** — The exact path chosen and the viable alternative that was actively rejected — with explicit rationale.
4. **THE SIGNAL** — The positive outcome, metric improvement, or learning point. A failure is a valid signal.

---

### TIER-3 CASE STUDY STRUCTURE — FIVE REQUIRED SECTIONS

Every Executive Case Study must contain all five sections:

1. **Executive Summary & Core ROI** — Metric highlights. Skim-readable in 90 seconds.
2. **Market Opportunity & Problem Validation** — Discovery journey. Research, personas, competitive analysis.
3. **The Architectural Blueprint** — Tech stack, database structure, API rationale.
4. **The Engineering Crux & Pivots** — Where the plan failed and how it recovered. No sanitizing of tradeoffs.
5. **Outcomes, Analytics & Next Steps** — Metrics, learnings, and the future roadmap.

---

### THE HIDDEN SEO TACTIC — LINKEDIN PROFILE AUTHORITY

After publishing a Tier-2 Insight Pillar on Medium or Substack:
extract five distinct sub-points and publish each as a separate LinkedIn Feed post over five consecutive days.
Each post links back to the full article.

Result: A recruiter visiting the profile that week sees five consecutive days of high-quality product thinking.
The profile reads as active, deeply invested, and expert-level — from a single article written once.

---

### CONTENT PANIC RULE

If content creation begins to feel like a blocker rather than a by-product, invoke **'too much'**.
The coach will narrow to one single Tier-1 post from the most recent session.
Content does not block shipping. **Shipping always comes first.**

---

### VERSION HISTORY — CONTENT STRATEGY

| Version | Key change | Date |
|---|---|---|
| v1.0 | Initial content strategy — Atom-to-Architecture Framework — three tiers, four buckets, 40-topic menu, AI prompts | May 2026 |

---

## INSTRUMENTATION STANDARD — ALL PROJECTS

Every project that ships to thepmdev.com gets the following before full launch:

| Tool | Purpose | Cost | When |
|---|---|---|---|
| Google Analytics 4 | Traffic, sessions, UTM attribution | Free | Before any sharing |
| Microsoft Clarity | Heatmaps, scroll depth, session recordings, click mapping | Free | Before full launch |
| UTM parameters | Channel attribution per source | Free | One per active channel |

UTM naming convention: `?utm_source=[source]&utm_medium=[medium]&utm_campaign=[campaign]`

---

## FULL LAUNCH TRIGGER — PORTFOLIO

The portfolio URL is shared broadly only when all three conditions are met:

1. P0 v2 UI/UX iteration complete — homepage shows project thumbnail grid
2. Minimum three portfolio-worthy projects live and showcased
3. Each project solves a materially different, evaluator-relevant business problem

**Hard deadline: 180 days from May 2026.**

LinkedIn activation and associate PM job applications begin only at full launch trigger.

---

## CONFIDENCE SCORE TARGETS — HONEST CALIBRATION

| Milestone | Target score |
|---|---|
| P0 sign-off | 1.0 / 10 |
| P1 sign-off | 4–5 / 10 |
| P2 sign-off | 5–6 / 10 |
| P3 sign-off | 7.0 / 10 |

Scored honestly, not aspirationally. A honest lower score beats an inflated higher one every time.

---

## P0 v2 BACKLOG — FOR REFERENCE

Items locked for the next portfolio iteration. Do not build until P1 project exists to populate the homepage.

- Homepage redesign — project thumbnail grid — show don't tell vision
- Roadmap visualization page — inverted node tree — cumulative projects, tools, skills
- Navigation build-out — spans to proper anchor href tags — dedicated PMD Process page
- Artifact tiles — make clickable when Clarity dead click data confirms evaluator expectation
- CTA after Zone 3 — add if Clarity confirms sessions not converting after proof layer
- Netlify UTM redirect — replace Bit.ly with _redirects rules
- Footer email — live address after Google Workspace setup
- Mobile Zone 4 — mobile-friendly Playbook alternative

---

## VERSION HISTORY

| Version | Key change | Date |
|---|---|---|
| v1.0 | Initial SKILL.md — built from P0 complete project cycle — all nine phases documented | May 2026 |
| v1.1 | Content Strategy added — Atom-to-Architecture Framework — Artifact #19 incorporated as permanent process | May 2026 |
| v1.2 | Project Selection & Kickoff Protocol added — Artifact #20 — five steps, ignition prompt pattern | May 2026 |

---

*PMD · Where brilliant ideas become shipped products · Artifact #17 · SKILL.md v1.0 · May 2026*