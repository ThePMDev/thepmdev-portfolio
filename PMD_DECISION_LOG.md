# PMD_DECISION_LOG.md
## System Decision Log — PMD · Where brilliant ideas become shipped products
**Created: Session 09 · May 2026 · v1.0**

---

## WHAT THIS FILE IS

This file is the authoritative record of system-level decisions for PMD — the structural, governance, roadmap sequencing, coaching calibration, tooling, and artifact architecture choices that determine how the system works.

It is **not** a project-level decision record. Per-project tradeoffs and requirements are documented in each project's PRD (Section 5 — Documented Tradeoffs). Session-level open items and deferred decisions are tracked in NOTES.md.

This file answers one question: **"Why does PMD work this way?"**

---

## HOW TO USE THIS FILE

**Reading:** Entries are organised by domain category. Use the section headers to scan by topic. Cross-reference tags at each entry identify related decisions in other sections.

**Adding an entry:** Append within the relevant primary category section. Use the entry format below. Never edit or delete a historical entry — superseded decisions are marked as such and retained for the record.

**Entry format:**
```
### [DECISION-ID] · [Short decision title]
- **Date:** Month Year
- **Session:** Session XX
- **Status:** Active | Superseded by [DECISION-ID]
- **Decision:** What was decided, stated plainly.
- **Options considered:** What alternatives were evaluated and rejected.
- **Rationale:** Why this option was chosen over the alternatives.
- **Cross-refs:** [DOMAIN-ID] if this decision touches other categories
```

**Decision ID format:** `[CATEGORY PREFIX]-[3-digit sequence]`
- `GOV` — Governance
- `ROAD` — Roadmap & Sequencing
- `COACH` — Coaching Calibration
- `TOOL` — Tooling & Architecture
- `CONTENT` — Content Strategy
- `ARTIFACT` — Artifact & Schema

---

## CATEGORIES

1. [Governance](#1--governance)
2. [Roadmap & Sequencing](#2--roadmap--sequencing)
3. [Coaching Calibration](#3--coaching-calibration)
4. [Tooling & Architecture](#4--tooling--architecture)
5. [Content Strategy](#5--content-strategy)
6. [Artifact & Schema](#6--artifact--schema)

---

## 1 · Governance

System identity, operating rules, naming conventions, classification frameworks, and the boundaries of PMD itself.

---

### GOV-001 · System name and pseudonym separation
- **Date:** May 2026
- **Session:** Session 01
- **Status:** Active
- **Decision:** The system is named PMD. The personal pseudonym is PM Dev. PMD is used in all artifacts, documents, and public-facing materials. PM Dev is for personal reference only and never appears publicly.
- **Options considered:** Using a single public-facing identity; using a full name publicly from the start.
- **Rationale:** Separating system from person allows PMD to function as a product brand independent of any individual identity. Protects personal privacy during the portfolio-building phase before professional launch. Enables the system to outlast any single project or role.
- **Cross-refs:** TOOL-001

---

### GOV-002 · Project classification framework — Portfolio vs Learning
- **Date:** May 2026
- **Session:** Session 05
- **Status:** Active
- **Decision:** Every project is classified at kickoff Step 3 as either Portfolio (showcased on thepmdev.com, requires CI/CD + WCAG) or Learning (internal only, GitHub repo + local dev). Classification is locked at kickoff. Reclassification requires documented rationale.
- **Options considered:** Treating all projects as portfolio candidates by default; classifying retrospectively after completion.
- **Rationale:** Upfront classification prevents scope and quality standard confusion mid-build. A learning project built to portfolio standards wastes time. A portfolio project built to learning standards creates technical debt. The decision at the start forces clarity about what the project is actually for.
- **Cross-refs:** ROAD-002, TOOL-003

---

### GOV-003 · Project numbering convention
- **Date:** May 2026
- **Session:** Session 01
- **Status:** Active
- **Decision:** P0 is permanently reserved for the portfolio itself. P1 through Pn are development journey projects in sequence. Iterations within a project are versioned as P0 v2, P1 v2, etc. — not as new project numbers.
- **Options considered:** Sequential numbering from P1 with no reserved slot; date-based identifiers.
- **Rationale:** Reserving P0 for the portfolio establishes a permanent anchor. The portfolio always exists at P0 regardless of how many projects are completed. Version suffixes for iterations prevent project number inflation and keep the roadmap readable.
- **Cross-refs:** ROAD-001

---

### GOV-004 · WCAG 2.2 Level AA as non-negotiable standard
- **Date:** May 2026
- **Session:** Session 01
- **Status:** Active
- **Decision:** WCAG 2.2 Level AA applies to all portfolio projects without exception. It is encoded as FR-09 in every PRD. It is never deferred, descoped, or treated as a stretch goal.
- **Options considered:** WCAG 2.1 AA as the baseline; accessibility as a post-launch audit item; targeting Level A only for early projects.
- **Rationale:** Accessibility is a professional standard, not a feature. A PM portfolio that defers accessibility signals exactly the wrong thing to hiring evaluators. Encoding it as a non-negotiable FR from the start makes it a design constraint, not an afterthought.
- **Cross-refs:** TOOL-003

---

### GOV-005 · Creation of PMD_DECISION_LOG.md
- **Date:** May 2026
- **Session:** Session 09
- **Status:** Active
- **Decision:** A dedicated system-level decision log is created at repo root. It records structural, governance, roadmap, coaching, tooling, content, and artifact decisions — with options considered and rationale — for the life of the PMD system.
- **Options considered:** Continuing to rely on NOTES.md for all decision tracking; embedding decisions in session summaries only; no formal decision log.
- **Rationale:** NOTES.md tracks open items and deferred decisions at the project level. Session summaries capture what happened but not why alternatives were rejected. Neither answers "why does PMD work this way?" with the precision needed at P3 and beyond when earlier decisions will be interrogated. A dedicated log with rejected alternatives documented at the time of the decision is the only structure that serves this purpose. Distinct from per-project PRD tradeoff sections.
- **Cross-refs:** ARTIFACT-001

---

### GOV-006 · Full launch trigger — three conditions required
- **Date:** May 2026
- **Session:** Session 07
- **Status:** Active
- **Decision:** The portfolio URL is shared broadly and LinkedIn activation begins only when three conditions are simultaneously met: (1) P0 v2 complete, (2) minimum three portfolio-worthy projects live, (3) each project solves a materially different evaluator-relevant problem. Hard deadline: 180 days from May 2026.
- **Options considered:** Soft launch immediately after P0; launch after any single P1 project; no formal trigger — launch when it feels ready.
- **Rationale:** A portfolio with one project is a work sample, not a portfolio. Evaluators need evidence of range and repeatability. Three materially different projects establishes both. The hard deadline prevents indefinite deferral under the guise of "not ready yet."
- **Cross-refs:** ROAD-003, CONTENT-003

---

## 2 · Roadmap & Sequencing

Phase structure, project ordering, horizon decisions, and sequencing rationale.

---

### ROAD-001 · Nine-phase process applies to every project
- **Date:** May 2026
- **Session:** Session 01
- **Status:** Active
- **Decision:** Every project P0 through Pn runs all nine phases in sequence: Discovery → Research → Strategy → Roadmap → PRD → Design & Wireframing → Build → Launch & Marketing → Measure & Iterate. No phases are skipped.
- **Options considered:** Abbreviated phase sets for smaller or learning projects; skipping Launch & Marketing for internal projects; treating phases as optional scaffolding.
- **Rationale:** The value of the process is in completing it repeatedly. Skipping phases for convenience trains the habit of skipping phases. A learning project that runs all nine phases — even lightly — builds more process muscle than a portfolio project that skips Strategy. The process is the product.
- **Cross-refs:** GOV-002, COACH-001

---

### ROAD-002 · Deployment track split — Portfolio/Public vs Learning/Internal
- **Date:** May 2026
- **Session:** Session 08
- **Status:** Active
- **Decision:** Portfolio/Public projects require CI/CD via Netlify, thepmdev.com deployment, and full WCAG compliance. Learning/Internal projects require a GitHub repo and local development environment only. Track is locked at kickoff Step 3.
- **Options considered:** All projects deployed to thepmdev.com regardless of classification; no deployment requirement for any project until full launch trigger.
- **Rationale:** Deploying every learning project to production creates noise on thepmdev.com and dilutes the portfolio signal. Requiring a GitHub repo for all projects — including internal ones — ensures the work is version-controlled and recoverable regardless of classification.
- **Cross-refs:** GOV-002, TOOL-003

---

### ROAD-003 · P0 v2 precedes full launch — homepage must show project grid
- **Date:** May 2026
- **Session:** Session 07
- **Status:** Active
- **Decision:** Full launch is gated on P0 v2 being complete, which requires a homepage project thumbnail grid showing multiple projects. Launching P0 v1 broadly before P1 exists produces a single-project portfolio.
- **Options considered:** Full launch immediately after P0 sign-off; building P1 and P2 before revisiting P0 at all.
- **Rationale:** The homepage at P0 v1 is a proof of process for a single project. It becomes a portfolio when it shows multiple projects. Investing in P0 v2 before full launch ensures the first impression an evaluator receives is a portfolio, not a preview.
- **Cross-refs:** GOV-006

---

### ROAD-004 · Six system additions sequenced before P1 kickoff
- **Date:** May 2026
- **Session:** Session 08
- **Status:** Active
- **Decision:** Six system infrastructure additions — Kickoff Protocol, Skills Tracker, Living Resume, Sentiment Diary, Decision Log, Reading Tracker, Phase Retro — are completed before P1 begins. P1 does not start until the system is sufficiently equipped.
- **Options considered:** Starting P1 immediately after P0 sign-off and building system additions in parallel; deferring all system additions to post-P1.
- **Rationale:** Starting P1 without the Kickoff Protocol means the first project runs without the five-step process the protocol defines. Starting without the Skills Tracker means no structured record of capability growth from the beginning. Building the foundation before the first real project is cheaper than retrofitting it after.
- **Cross-refs:** COACH-002, ARTIFACT-003

---

## 3 · Coaching Calibration

Coaching mode escalation, draft-first protocol, session structure rules.

---

### COACH-001 · Coaching mode escalates project by project
- **Date:** May 2026
- **Session:** Session 01
- **Status:** Active
- **Decision:** Coaching intensity escalates on a defined schedule: P0 Supportive Scaffolding → P1 Guided Drafting → P2 Critical Collaboration → P3 CPO Peer Review → P4+ Professional Friction. Mode is fixed per project, not adjustable within a project.
- **Options considered:** Fixed coaching mode throughout all projects; user-selectable mode per session; escalation based on demonstrated competence rather than project number.
- **Rationale:** A fixed schedule creates a known contract. The user knows P3 will feel like a CPO review before P3 begins. Competence-based escalation introduces subjectivity and potential for mode inflation. Project-number escalation is objective, predictable, and prevents both over-scaffolding and premature friction.
- **Cross-refs:** COACH-002

---

### COACH-002 · Draft-first protocol active from P1
- **Date:** May 2026
- **Session:** Session 01
- **Status:** Active
- **Decision:** From P1 forward, the user drafts key artifacts in rough form before the coach generates a polished version. Coach critiques and refines second. Applies to all major artifacts: personas, PRDs, user stories, acceptance criteria.
- **Options considered:** Draft-first active from P0; coach-led generation throughout; draft-first only for written content, not technical specs.
- **Rationale:** P0 was deliberately coach-led to establish the pattern and prove the process. Applying draft-first at P0 would have introduced friction before the user had seen a complete cycle. From P1, the user has a reference point — they know what a finished artifact looks like and can produce a meaningful draft. Draft-first at P0 would have been draft-from-nothing, which is a different and less useful exercise.
- **Cross-refs:** COACH-001

---

### COACH-003 · Session entry point — ten minutes is enough
- **Date:** May 2026
- **Session:** Session 02
- **Status:** Active
- **Decision:** No session requires a large time block to begin. Ten minutes and one prompt is a complete session. Sessions are never framed as requiring a long uninterrupted window. One prompt, one answer moves the system forward.
- **Options considered:** Structuring sessions around defined time blocks; requiring phase completion within a session before closing.
- **Rationale:** The belief that meaningful work requires a 4–5 hour block is a primary stall mechanism for the target user. Encoding the opposite as a coaching rule directly addresses the identified loop from the Visionary Staller persona. A system that requires large blocks to function is a system that rarely functions.
- **Cross-refs:** GOV-001

---

### COACH-004 · Honest confidence scoring — never aspirational
- **Date:** May 2026
- **Session:** Session 07
- **Status:** Active
- **Decision:** Confidence scores are recorded and reported at their honest assessed value. An inflated score is explicitly worse than a lower honest one. Targets are defined per milestone: 1.0 at P0, 4–5 at P1, 7.0 at P3.
- **Options considered:** No confidence scoring; self-reported scores without defined targets; scores calibrated to external benchmarks rather than internal honesty.
- **Rationale:** A confidence score that tracks aspiration rather than reality provides no signal. The value of the score is in its honesty over time — it shows actual growth, not imagined growth. Defining targets in advance prevents retroactive score inflation to match targets.
- **Cross-refs:** ARTIFACT-002

---

## 4 · Tooling & Architecture

Build approach, CI/CD, instrumentation stack, and tool selection decisions.

---

### TOOL-001 · Build progression — HTML/CSS/JS → React → Full-stack
- **Date:** May 2026
- **Session:** Session 01
- **Status:** Active
- **Decision:** The build approach follows a deliberate progression: HTML/CSS/Vanilla JS at P0, React introduced at P1, full-stack capabilities developed across subsequent projects. Claude Code is the primary execution tool from P1 forward.
- **Options considered:** Starting with React at P0; framework-agnostic approach per project; starting with a full-stack framework immediately.
- **Rationale:** Starting with HTML/CSS/JS forces understanding of fundamentals before abstractions are introduced. A React-first P0 would have obscured what the framework is actually doing. The progression mirrors how professional competence is built — foundation first, abstraction second.
- **Cross-refs:** GOV-002

---

### TOOL-002 · Professional tooling deferred to P1
- **Date:** May 2026
- **Session:** Session 03
- **Status:** Active
- **Decision:** Notion (PRD documentation), Figma (wireframing), and Jira (sprint planning) are deferred from P0 to P1. P0 uses Claude-generated PDFs for artifacts and NOTES.md for tracking.
- **Options considered:** Full professional tooling stack from P0; deferred indefinitely until a specific trigger; introduced one tool at a time across P0 phases.
- **Rationale:** Introducing three new professional tools simultaneously at P0 would have added tooling overhead to an already complex first cycle. The goal of P0 was to complete a full nine-phase cycle and ship. Professional tooling is introduced at P1 when the process is established and tooling can serve the work rather than compete with it.
- **Cross-refs:** ROAD-001

---

### TOOL-003 · Instrumentation stack — GA4 + Clarity on all portfolio projects
- **Date:** May 2026
- **Session:** Session 07
- **Status:** Active
- **Decision:** Every portfolio project that ships to thepmdev.com gets GA4 (traffic and UTM attribution) and Microsoft Clarity (heatmaps, session recordings, click mapping) installed before any sharing. Both tools are free. Neither is optional.
- **Options considered:** GA4 only; instrumentation added post-launch; instrumentation only after reaching a session volume threshold.
- **Rationale:** Data from day one is worth more than data from day thirty. Clarity session recordings at low volume (10–15 sessions) reveal evaluator behaviour patterns that aggregate data obscures. Installing after launch loses the earliest and often most informative sessions.
- **Cross-refs:** GOV-004

---

### TOOL-004 · CI/CD via Netlify — no manual production edits
- **Date:** May 2026
- **Session:** Session 01
- **Status:** Active
- **Decision:** All portfolio deployments follow the CI/CD pipeline: local development → GitHub commit → Netlify auto-deploy → thepmdev.com. No direct production edits. No manual FTP. Zero-downtime deploys only.
- **Options considered:** Manual FTP deployment; direct production edits for small fixes; GitHub Pages instead of Netlify.
- **Rationale:** Manual production edits introduce the risk of unreviewed changes reaching the live URL. The CI/CD pipeline enforces a review step for every change, regardless of size. This is a professional standard that should be habituated from the first project, not introduced after bad habits are established.
- **Cross-refs:** GOV-002

---

## 5 · Content Strategy

Build-in-public framework, publishing obligations, and content system decisions.

---

### CONTENT-001 · Atom-to-Architecture framework — three tiers
- **Date:** May 2026
- **Session:** Session 08
- **Status:** Active
- **Decision:** Content is structured in three tiers: Tier 1 Build Log (150–300 words, 2–3× per week), Tier 2 Insight Pillar (600–1,000 words, 1–2× per month), Tier 3 Executive Case Study (1,500–2,500 words, once per portfolio project). Small posts aggregate into pillars. Pillars aggregate into case studies. No content is created in isolation.
- **Options considered:** Unstructured content as inspiration strikes; case studies only (no ongoing posting); social content without a long-form anchor.
- **Rationale:** Unstructured content produces inconsistent output and no compounding asset library. Case studies alone require large time investment and produce no ongoing visibility signal. The three-tier structure means every session generates Tier 1 raw material automatically — content is a by-product of the work, not an additional obligation.
- **Cross-refs:** CONTENT-002

---

### CONTENT-002 · Content strategy begins at P1 — not after portfolio is ready
- **Date:** May 2026
- **Session:** Session 08
- **Status:** Active
- **Decision:** Build-in-public content publishing begins at P1. It does not wait for the portfolio to reach full launch trigger. Tier 1 posts begin with the first P1 session.
- **Options considered:** Content begins at full launch trigger; content begins after three projects exist; content begins only for portfolio-classified projects.
- **Rationale:** Waiting for "ready" is the stall mechanism in publishing form. The audience for build-in-public content values the journey, not the destination. Early posts with low follower counts are not wasted — they establish the pattern, build the archive, and generate the content atoms that Tier 2 pillars will aggregate later.
- **Cross-refs:** GOV-006, CONTENT-001

---

### CONTENT-003 · Content panic rule — 'too much' invocation
- **Date:** May 2026
- **Session:** Session 08
- **Status:** Active
- **Decision:** If content creation begins to feel like a blocker rather than a by-product, the user invokes the phrase 'too much'. The coach narrows immediately to one single Tier 1 post from the most recent session. Content does not block shipping.
- **Options considered:** No panic rule — content obligations stand regardless; pausing content during high-build phases; removing content obligations entirely when shipping pressure is high.
- **Rationale:** A content system that creates anxiety defeats its own purpose. The panic rule preserves the minimum viable content output (one Tier 1 post) while removing the perfectionism and volume pressure that triggers the stall. Shipping always comes before publishing.
- **Cross-refs:** CONTENT-001, COACH-003

---

## 6 · Artifact & Schema

Artifact structure, versioning conventions, schema decisions, and PDF production standards.

---

### ARTIFACT-001 · Session summary PDF at every phase close
- **Date:** May 2026
- **Session:** Session 01
- **Status:** Active
- **Decision:** A session summary PDF is generated at the end of every major phase. The summary carries forward all context needed to resume in a new conversation without loss of state. No phase ends without a summary.
- **Options considered:** Plain text session notes in a .md file; relying on conversation history for context; summaries only at project close.
- **Rationale:** Conversation history is not portable across sessions. A PDF summary that contains identity, project status, completed work, open items, and a copy-paste resume prompt enables a new session to reach full context in under thirty seconds. The portability of the PDF is the entire point — it makes the system session-independent.
- **Cross-refs:** GOV-001

---

### ARTIFACT-002 · PDF table cells — P() helper pattern — locked
- **Date:** May 2026
- **Session:** Session 05
- **Status:** Active
- **Decision:** Every table cell in every ReportLab-generated PDF is wrapped in a Paragraph object via a P() helper function. Plain strings in table cells are never used. VALIGN TOP on all tables. Header rows bold white with amber bottom border.
- **Options considered:** Plain strings in non-wrapping cells; case-by-case wrapping only for known long content; switching to a different PDF library.
- **Rationale:** ReportLab does not word-wrap plain strings in table cells. Plain strings overflow on a single line. Paragraph objects wrap correctly at any content length. Applying the P() helper universally eliminates the overflow problem permanently rather than requiring per-cell judgement. Once discovered, this pattern applies retroactively to all PDF artifacts.
- **Cross-refs:** TOOL-001

---

### ARTIFACT-003 · Skills Tracker — React component — gray/amber/green states
- **Date:** May 2026
- **Session:** Session 08
- **Status:** Active
- **Decision:** Artifact #21 Skills & Tools Tracker is a React component with three status states: gray (not started), amber (in progress), green (complete). Portfolio ★ and auth ■ markers. Collapsible phase/project tree. 8 phases, 66+ projects.
- **Options considered:** Static PDF tracker; spreadsheet-based tracker; simple checklist in NOTES.md.
- **Rationale:** A static PDF tracker requires regeneration to update. A spreadsheet has no visual hierarchy for the phase/project tree structure. A React component renders the tree interactively, updates in place, and can be embedded on thepmdev.com as a live journey visualisation at P0 v2. The component format also demonstrates React capability — the tracker is itself a portfolio artifact.
- **Cross-refs:** ROAD-004

---

### ARTIFACT-004 · Sentiment Diary — JSON data source, terrain derived from score
- **Date:** May 2026
- **Session:** Session 09
- **Status:** Active
- **Decision:** Artifact #23 Sentiment Journey Diary uses PMD_Sentiment_Data.json as its single data source. Path terrain (peak/valley/neutral) is derived by the generator from confidence_score — no manual peak_valley field. self_assessment consolidates exceeded_expectations and fell_short. content_log_items and next_project_intent are required fields. horizon[] array provides forward-looking runway for the projected path.
- **Options considered:** Manual peak_valley field alongside confidence_score; separate exceeded and fell_short fields; optional content log and next intent fields; no forward-looking horizon data.
- **Rationale:** A manual terrain field that could contradict the numeric score is a data integrity risk with no upside — the score already encodes the terrain. Consolidating self_assessment removes redundancy with worked_well and tricky. Optional fields do not get filled — promoting to required ensures the data exists when the macro view needs it. The horizon array is structurally necessary for the infographic to render the forward path the original concept described.
- **Cross-refs:** CONTENT-001, ROAD-004

---

## VERSION HISTORY

| Version | Key change | Date |
|---|---|---|
| v1.0 | Initial creation — six categories, 19 founding entries seeded from P0 and Sessions 01–09. Entry format established. | May 2026 |

---

*PMD · PMD_DECISION_LOG.md · System Decision Log · v1.0 · May 2026 · Where brilliant ideas become shipped products*
