import Image from "next/image"
import prizeMachine from "@/assets/prize-machine.jpg"
import prizeMachineGrain from "@/assets/prize-machine-grain.png"
import {
  PRIZE_PUNCH_COLUMN_COUNT,
  PRIZE_PUNCH_ROWS,
  PRIZE_RULE_COLUMN_COUNT,
  PRIZE_RULE_ROWS,
  range,
} from "@/components/punchCardPattern"

// Every offset here is figma_px / 1440 written as a vw, the way the footer does
// it. vw and not a percentage because this section is a stack of overlaps — the
// dot block sits over the machine, the machine sits over the prize card and
// crops its rules — and a percentage re-resolves against whichever box it lands
// in, so the three layers would drift apart from each other as the page
// resizes. One shared unit off the page width keeps them registered.
//
// There is no separate mobile arrangement: the composition IS the overlaps, and
// they only survive proportional scaling, so the whole plate shrinks together
// like a poster rather than restacking.

// 1387px of design height on the 1440 page.
const SECTION_HEIGHT = "96.3264vw"

// The pale rule that opens the section. Its dots are 24.33px on a 34.95px
// pitch, which a 39-column grid reproduces as a 24.33px column with a 10.63px
// gutter — the same trick the past-memories strip uses.
const RULE_DOT_GAP = "0.7381vw"
const RULE_WIDTH = "93.9306vw"

// Measured off the design render rather than taken from the group's own x.
// Figma reports Group 28 at x=1413 with a width of 1352, which cannot both be
// true; the render puts the first dot at 60.3px and every sibling in this
// section lands where its coordinates say, so the render is what this follows.
const RULE_LEFT = "4.1875vw"

// 22.52px dots on a 32.36px pitch across, 45.55px down.
const PUNCH_DOT_GAP_X = "0.6833vw"
const PUNCH_DOT_GAP_Y = "1.5989vw"
const PUNCH_WIDTH = "35.2708vw"

// The three tiers, each with its own type size and its own slot. The sizes step
// down with the money — 118.75 / 101.53 / 83.79 — and the labels stagger about
// 7px apart at the right edge instead of sharing one margin. Both are in the
// design and both are visible in the render, so both are reproduced as measured
// rather than regularised into a column.
const TIERS = [
  {
    label: "WINNER",
    labelLeft: "35.9028vw",
    labelTop: "8.2417vw",
    amount: "10,000",
    amountLeft: "21.7431vw",
    amountTop: "11.8458vw",
    amountSize: "8.2467vw",
    amountLeading: "0.6366",
  },
  {
    label: "RUNNER UP",
    labelLeft: "29.1451vw",
    labelTop: "24.9306vw",
    amount: "6,000",
    amountLeft: "27.9368vw",
    amountTop: "28.9722vw",
    amountSize: "7.0506vw",
    amountLeading: "0.828",
  },
  {
    label: "THIRD",
    labelLeft: "36.9444vw",
    labelTop: "40.2229vw",
    amount: "4,000",
    amountLeft: "30.9083vw",
    amountTop: "43.6917vw",
    amountSize: "5.8188vw",
    amountLeading: "0.6366",
  },
]

// Both rules span the full 540.56px of the card, and the machine is painted
// over their left ends. That clipping is the design, not an accident of
// stacking order, so they are drawn full width and left to be covered.
const RULE_TOPS = ["21.0167vw", "37.7813vw"]

function DotGrid({
  rows,
  columnCount,
  columnGap,
  rowGap,
  width,
  color,
  left,
  top,
}: {
  rows: number[][]
  columnCount: number
  columnGap: string
  rowGap: string
  width: string
  color: string
  left: string
  top: string
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute flex flex-col"
      style={{ left, top, width, rowGap }}
    >
      {rows.map((columns, rowIndex) => (
        <div
          key={rowIndex}
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
            columnGap,
          }}
        >
          {range(0, columnCount - 1).map((column) => (
            <div
              key={column}
              className="aspect-square"
              style={
                columns.includes(column)
                  ? { backgroundColor: color, borderRadius: "50%" }
                  : undefined
              }
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function PrizePool() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#060606]"
      style={{ height: SECTION_HEIGHT }}
    >
      <DotGrid
        rows={PRIZE_RULE_ROWS}
        columnCount={PRIZE_RULE_COLUMN_COUNT}
        columnGap={RULE_DOT_GAP}
        rowGap="1.7264vw"
        width={RULE_WIDTH}
        color="#e1e1e1"
        left={RULE_LEFT}
        top="4.1826vw"
      />

      {/* The heading breaks after PRIZE in the design, where a 475px box forces
          the wrap. Hard-coding the break keeps it at every width instead of
          leaving it to whatever the box happens to measure.

          Figma reports 67.04% leading, but the render sets the two cap-tops
          86px apart — 0.865em, not 0.670em. Half-leading that tight would also
          crop the block, so the line box keeps Figma's number and the extra
          advance is made up by the gap between the lines. */}
      <h2
        className="absolute font-plex-mono font-bold text-[#ef4b08]"
        style={{
          left: "4.8069vw",
          top: "14.1319vw",
          fontSize: "6.8672vw",
          lineHeight: "0.6704",
        }}
      >
        <span className="block">PRIZE</span>
        <span className="block" style={{ marginTop: "0.1944em" }}>
          POOL
        </span>
      </h2>

      {/* The prize card, bottom of the stack. */}
      <div
        className="absolute bg-[#d9d5c7]"
        style={{
          left: "46.3951vw",
          top: "31.6521vw",
          width: "53.0556vw",
          height: "55.2778vw",
        }}
      >
        {RULE_TOPS.map((top) => (
          <div
            key={top}
            aria-hidden="true"
            className="absolute bg-black"
            style={{
              left: "11.5667vw",
              top,
              width: "37.5386vw",
              height: "0.1389vw",
            }}
          />
        ))}

        {TIERS.map((tier) => (
          <div key={tier.label}>
            <p
              className="absolute font-plex-mono font-bold whitespace-nowrap text-black"
              style={{
                left: tier.labelLeft,
                top: tier.labelTop,
                fontSize: "3.4722vw",
                lineHeight: "0.828",
              }}
            >
              {tier.label}
            </p>
            <p
              className="absolute font-plex-mono font-bold whitespace-nowrap text-[#ef4b08]"
              style={{
                left: tier.amountLeft,
                top: tier.amountTop,
                fontSize: tier.amountSize,
                lineHeight: tier.amountLeading,
              }}
            >
              {tier.amount}
            </p>
          </div>
        ))}
      </div>

      {/* The machine, over the card's left edge. The photograph is taller than
          its frame and hangs 11.55% above it, so the crop lands on the monitor
          rather than centring the whole desk. */}
      <div
        className="absolute overflow-hidden bg-[#ece8e4]"
        style={{
          left: "19.1444vw",
          top: "37.8993vw",
          width: "40.6431vw",
          height: "43.6944vw",
          borderRadius: "1.1661vw",
          boxShadow: "1.1078vw 1.7492vw 2.3265vw 0 rgba(0,0,0,0.25)",
        }}
      >
        <Image
          src={prizeMachine}
          alt="A vintage desktop computer, keyboard and printout"
          sizes="(max-width: 900px) 60vw, 41vw"
          className="absolute left-0 max-w-none object-cover"
          style={{ width: "98.6%", height: "122.28%", top: "-11.55%" }}
        />
        {/* The same grain the design lays over this frame at 20%. */}
        <Image
          src={prizeMachineGrain}
          alt=""
          aria-hidden="true"
          sizes="(max-width: 900px) 60vw, 41vw"
          className="absolute inset-0 h-full w-full max-w-none object-cover opacity-20"
        />
      </div>

      {/* The orange block, top of the stack — it reads over the machine. */}
      <DotGrid
        rows={PRIZE_PUNCH_ROWS}
        columnCount={PRIZE_PUNCH_COLUMN_COUNT}
        columnGap={PUNCH_DOT_GAP_X}
        rowGap={PUNCH_DOT_GAP_Y}
        width={PUNCH_WIDTH}
        color="#f85a19"
        left="3.1181vw"
        top="48.6458vw"
      />
    </section>
  )
}
