<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Layout rules

**Do not reach for `position: absolute` unless the layout genuinely cannot be
expressed any other way.** Ordinary structure is flexbox or grid. When an
element only needs nudging from where flow already put it, use
`position: relative`. Absolute is the last resort, never the default.

Overlapping layers are the one case that earns a stack — and even then prefer a
grid whose children all sit in `grid-area: 1 / 1` (`col-start-1 row-start-1`),
so the stack keeps flow, intrinsic sizing and a real bounding box. Reserve true
absolute positioning for things that must be taken out of flow entirely:
modals, popovers, tooltips, sticky overlays.

**Never hardcode a coordinate that depends on content.** A `left`/`top` pair
measured off a Figma render is frozen against the exact string that was in the
design. Change `10,000` to `₹10,000`, or `RUNNER UP` to `SECOND`, and every
left-anchored `whitespace-nowrap` node silently slides out of frame, because
only its right edge is free to move. This has already broken `PrizePool.tsx`
once. Anchor to the edge the design aligns on — `text-right`, `items-end`,
`justify-between`, `gap` — and let the box measure itself.

Design constants that do *not* depend on content are fine to keep as
proportional `vw` values: the type scale, and the offsets between fixed layers
of a poster composition. The rule is about content-derived geometry.
