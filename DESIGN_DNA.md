# Pragalbh.in — Design DNA

Updated: 26 August 2026
Stage: 9A — Taste DNA
Status: Baseline defined

## Purpose

This file defines the visual and interaction reasoning for pragalbh.in. It does not describe a generic dark portfolio theme. It defines why the interface should look and behave the way it does.

The governing product idea remains:

> **A living systems observatory documenting the institutions, infrastructure, software, automation and physical systems Pragalbh designs, operates, integrates and troubleshoots.**

Every major visual decision should follow this chain:

**Trigger → Decision → Reason → Evidence → Trade-off**

If a new treatment cannot explain that chain, it should not be added.

---

## 1. Core identity

### Trigger
The visitor needs to understand that the portfolio is about connected systems, not a collection of unrelated skills.

### Decision
Pragalbh is the system origin at the centre of an expanding operating map.

### Reason
The strongest professional pattern is cross-domain systems thinking: education, operations, infrastructure, software, networking, automation, identity, energy and physical systems are repeatedly connected in the work.

### Evidence
The portfolio case architecture already links Smart Classroom, Solar CCTV, institutional identity, private infrastructure and digital operations across multiple domains.

### Trade-off
The graph demands more interaction literacy than a normal list, therefore Recruiter View and the planned non-technical view remain mandatory parallel routes.

---

## 2. Color means state or domain

Color is functional. It should not be added simply to make a section feel richer.

### Signal green — active system

**Trigger:** a system, path or action is currently selected or active.

**Decision:** use luminous lime/green for current, active links, focus state, primary actions and live telemetry.

**Reason:** green behaves like power/current/state feedback within the observatory metaphor.

**Trade-off:** overuse destroys hierarchy. Green must not become a general decorative accent.

### Blue — education and human systems

**Trigger:** the visitor is navigating education, academic operations or institutional-human workflows.

**Decision:** use restrained blue as the domain identifier.

**Reason:** visually separates education/operations from technical infrastructure without creating a second visual brand.

### Violet — architecture and abstract systems

**Trigger:** the content describes architecture, requirements, planning or system relationships rather than a physical implementation.

**Decision:** use violet as the architecture/system-design signal.

### Cyan — automation and software

**Trigger:** the content is software, automation, CI/CD, orchestration or machine-driven workflow.

**Decision:** use cyan as the automation/software signal.

### Amber — field / physical / energy / caution

**Trigger:** the content represents physical systems, energy, field engineering, prototype maturity or operational caution.

**Decision:** use amber for field/physical state and prototype-like maturity where appropriate.

### White / neutral — evidence object

**Trigger:** a node represents a project/evidence object rather than a broad capability domain.

**Decision:** use a stronger neutral/white treatment so proof is visually distinct from skill taxonomy.

---

## 3. Maturity is visible before detail

### Trigger
The visitor needs to know whether a project is live, field-applied, prototyped or still being built without opening the full case study.

### Decision
Use a compact maturity vocabulary:

- `LIVE` — production/public operating system
- `FIELD` — field engineering/system work
- `PROTO` — prototype or source-backed architecture
- `BUILD` — active development
- `APPLIED` — applied institutional/infrastructure work
- `CASE` — fallback when a stronger maturity label is not justified

### Reason
Professional credibility improves when maturity is explicit instead of implied.

### Evidence
The deeper proof taxonomy already distinguishes live/public/source-backed/field/applied evidence.

### Trade-off
Maturity badges must remain subordinate to project titles. They are evidence metadata, not branding stickers.

---

## 4. Selected paths stay electrically hot

### Trigger
The graph expands into multiple levels and visitors need spatial memory.

### Decision
Keep the selected ancestry path visually energised while unrelated branches quiet down.

### Reason
The visitor should see not only *what* is selected, but *how it connects back to the whole system*.

### Trade-off
Persistent glow must be calmer than click-zap animation; otherwise state and event become indistinguishable.

---

## 5. Motion has four levels

### Level 0 — Ambient
Sparse particles, quiet node breathing, slow observatory motion, continuous low-intensity current.

**Purpose:** communicate that the system is alive.

### Level 1 — State
Persistent hot path, active node charge, project lock-on, visible maturity/status.

**Purpose:** communicate location and selection.

### Level 2 — Transition
New branch draw-in, short ignition, project reveal, drawer/modal transition.

**Purpose:** communicate change in information architecture.

### Level 3 — Expressive event
Electrical zap on meaningful node activation and first-load power-up.

**Purpose:** make the core interaction memorable.

### Rule
Do not add another Level-3 effect without removing or reducing an existing expressive event.

---

## 6. Typography hierarchy

The typography system should communicate three different voices.

### Editorial / identity voice
Used for large positioning statements and human-readable case titles.

**Intent:** confident, direct, legible, not futuristic cosplay.

### Operational / telemetry voice
Used for states, maturity, coordinates, evidence labels, breadcrumbs and compact system language.

**Intent:** technical precision and observatory instrumentation.

### Reading / explanation voice
Used for summaries, case-study reasoning and non-technical explanations.

**Intent:** calm long-form readability.

### Rule
Monospace is for system metadata, not entire paragraphs. Large serif/editorial experiments must not reduce recruiter clarity.

---

## 7. Containers are earned

### Trigger
A piece of information requires separation because it behaves as a discrete control, evidence object or comparison unit.

### Decision
Use a border/panel/card only when that boundary communicates structure.

### Reason
Repeated bordered cards are one of the fastest ways to make the site look like a generic generated SaaS template.

### Trade-off
Removing containers increases reliance on spacing and typography, so spacing rhythm must become more disciplined in Stage 9B/9C.

---

## 8. Project = proof, skill = capability

### Trigger
The visitor sees a project node.

### Decision
Project nodes receive stronger lock-on, maturity and evidence treatment than skill/domain nodes.

### Reason
The portfolio should reward proof over self-declared capability.

### Trade-off
Too much project emphasis can make the underlying skill map harder to scan; unrelated nodes should dim rather than disappear.

---

## 9. Evidence is visually quieter than claims but stronger than decoration

### Trigger
A case contains a repository, live system, architecture diagram, source-backed document or field proof.

### Decision
Evidence receives a consistent proof frame and source/status language rather than decorative imagery.

### Reason
The purpose of media is to make a professional claim harder to doubt.

### Rule
Every future screenshot/photo must answer: **What claim does this prove?**

---

## 10. Three audience modes must share one identity

The portfolio has or will have three routes:

1. **Explore Network** — deep systems exploration
2. **Recruiter View** — fast professional evaluation
3. **Simple / Non-Technical View** — understandable explanation without technical vocabulary

### Decision
All three use the same evidence, maturity states, semantic colors and typography family, but vary information density and vocabulary.

### Reason
The site should adapt to audience knowledge without presenting three different personal brands.

---

## 11. Non-technical translation rule

Technical terms should never be removed from the evidence model, but Simple View should translate them into outcomes.

Examples:

- `Kubernetes HA` → **Reliable private infrastructure designed to keep services available when individual components fail.**
- `FET + XML timetable automation` → **A school timetable that can become an automation source instead of remaining a printed schedule.**
- `Direct-DC Solar CCTV Edge` → **Remote surveillance designed to run continuously while avoiding unnecessary power conversion.**
- `RBAC + audit trails` → **Software where access and important actions can be controlled and traced.**

The non-technical route must simplify vocabulary, not accuracy.

---

## 12. Density rules

### Desktop
Allow broad spatial exploration and secondary telemetry.

### Mobile
Show fewer simultaneous labels, tighter graph framing, larger interaction targets and progressive disclosure.

### Recruiter View
Prefer hierarchy and evidence over atmospheric detail.

### Simple View
Prefer plain-language problem → system → outcome stories over architecture vocabulary.

---

## 13. Interaction states

Every interactive object should support a coherent subset of these states:

- idle
- hover / pointer-near
- focus-visible
- active/selected
- related
- dimmed/unrelated
- loading/transitioning where applicable
- maturity/proof state for projects
- reduced-motion equivalent

No important meaning may exist only on hover.

---

## 14. Visual anti-patterns

Do not introduce:

- gradient-heavy SaaS hero styling
- decorative glassmorphism everywhere
- repeated rounded cards without structural reason
- random neon accents
- giant icon grids
- meaningless 3D objects
- animated text simply because it can move
- excessive monospaced body copy
- cyberpunk HUD parody
- fake metrics
- fake project screenshots
- unverified outcome percentages
- visual treatments copied from paid HorizonX assets/code
- design attribution to Pragalbh for Kritica's Graphic Design / UI/UX / Art Direction work

---

## 15. Design acceptance test

Before a visual change enters production, answer:

1. What information or interaction problem does this solve?
2. Which semantic state/domain does it represent?
3. Does it make hierarchy easier to understand?
4. Is it calmer when persistent and stronger only when transitional?
5. Does the same meaning survive reduced motion?
6. Does it work without hover?
7. Does it improve Recruiter View or Simple View rather than merely Explore View?
8. Does it stay inside the payload budget?
9. Does it preserve evidence/maturity honesty?
10. Would the interface still make sense if the effect were removed?

If the only answer is “it looks cool,” the change does not pass Stage 9A.
