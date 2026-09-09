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
