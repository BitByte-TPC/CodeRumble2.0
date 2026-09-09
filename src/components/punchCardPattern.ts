export function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

export const PUNCH_COLUMN_COUNT = 40

// Exact dot-matrix pattern of the CodeRumble punch card, decoded row by row
// from the per-dot coordinates in Figma. Two frames carry the same artwork —
// "Group 10" in the hero strip (node 560:298) and the strip inside Frame 75
// (node 478:586) — so it lives here once rather than in each consumer.
//
// Rows are stored in card order, which is upside down relative to how the card
// reads on the page; every consumer renders the strip rotated 180deg. That
// means the LAST row here is the TOP row on screen, and column c sits at
// screen position 39 - c.
export const PUNCH_ROWS: number[][] = [
  [2, 5, 7, 11, 15, ...range(17, 39)],
  [1, 3, 6, 9, 12, 13, 16, ...range(17, 39)],
  [0, 2, 3, 5, 7, 8, 9, 11, 12, 15, 16, ...range(17, 39)],
  range(0, 39),
  range(0, 39),
]

// --- Prize pool ------------------------------------------------------------
// Two more dot matrices, both from the prize-pool frame. They are different
// cards from PUNCH_ROWS above — different column counts, different artwork —
// so they get their own tables rather than a slice of that one.

// The pale rule that opens the section: two rows of 39 columns (nodes 994:1768
// and 994:1739). Unlike PUNCH_ROWS these read left to right on screen, so no
// consumer rotates them.
export const PRIZE_RULE_COLUMN_COUNT = 39

export const PRIZE_RULE_ROWS: number[][] = [
  [...range(0, 23), 26, 27, 30, 33, 36, 38],
  [...range(0, 22), 24, 28, 32, 34, 37],
]

// The orange block that runs under the machine (node 994:1730, "Frame 144").
// The Figma group carries 31 columns, but the frame only ever shows the first
// 16 of them — verified against the design render, where the dots stop well
// short of the prize card with nothing overlapping them — so the table is cut
// to what the section actually draws.
//
// The card is symmetric about its middle: rows 4-7 are rows 3-0 reversed, so
// only the top half is written out and PRIZE_PUNCH_ROWS mirrors it.
export const PRIZE_PUNCH_COLUMN_COUNT = 16

const PRIZE_PUNCH_TOP_HALF: number[][] = [
  [2, 6, ...range(8, 15)],
  [0, 3, 4, ...range(7, 15)],
  [0, 2, 3, ...range(6, 15)],
  range(0, 15),
]

export const PRIZE_PUNCH_ROWS: number[][] = [
  ...PRIZE_PUNCH_TOP_HALF,
  ...[...PRIZE_PUNCH_TOP_HALF].reverse(),
]
