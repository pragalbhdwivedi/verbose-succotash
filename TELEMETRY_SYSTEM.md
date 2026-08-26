# Pragalbh.in — Observatory Telemetry System

Updated: 26 August 2026
Stage: 9E — Stella Nova information hierarchy / telemetry
Status: Baseline defined

## Purpose

Telemetry makes the Explore Network feel like an operating map without turning it into decorative HUD theatre. Every readout must explain where the visitor is, what kind of object is selected, how connected it is, or what maturity/evidence state it carries.

## Primary status strip

The existing powered-system status remains the primary readout.

Primary text communicates selected object identity/state:
- root: `System online · tap a node`
- domain/pillar: `<TYPE> · <LABEL>`
- project: `<MATURITY> · <LABEL>`

Secondary telemetry communicates compact structural context:
- desktop: `L<depth> · <relations> REL · <visible> VISIBLE`
- mobile: `L<depth> · <relations>R`

The mobile form intentionally drops non-essential simultaneous information.

## Drawer system readout

The selected-system drawer exposes a second, denser readout immediately after the node level/state.

Structural line:

`PATH L<depth> / <relations> REL / <children> CHILD / <visible> VISIBLE`

For projects:

`PROJECT / <maturity> / <evidence count> EVIDENCE`

For non-project nodes:

`<type> / <level>`

## Meaning

- `L` = depth from Pragalbh/root in the capability hierarchy
- `REL` = currently visible relationships touching the selected node
- `CHILD` = direct capability/project children defined under the selected node
- `VISIBLE` = number of currently visible nodes in the progressive graph
- maturity = `LIVE`, `FIELD`, `PROTO`, `BUILD`, `APPLIED`, or `CASE`
- evidence count = evidence entries attached to the selected project case

## Rules

1. Telemetry may describe portfolio structure; it must not invent operational production metrics.
2. Counts shown here are counts inside the public portfolio graph/evidence model, not protected institutional inventory counts.
3. Telemetry uses the existing DM Mono operational voice.
4. Telemetry remains subordinate to the human-readable project/domain label.
5. Mobile telemetry is shorter than desktop telemetry.
6. Telemetry must update from the same graph state used by navigation rather than maintaining a second source of truth.
7. Telemetry adds no new CSS layer; it reuses the established observatory/status/readout vocabulary.
8. The readout is informational and `aria-hidden` where it duplicates information already available through accessible graph/drawer semantics.
9. Simple / Non-Technical View will not expose this density by default.
10. No fake CPU, uptime, traffic, location, financial or live institutional statistics may be added merely to make the interface feel technical.
