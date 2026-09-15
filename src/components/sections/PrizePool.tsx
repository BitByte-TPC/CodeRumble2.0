import { Fragment } from "react"
import Image from "next/image"
import prizeMachine from "@/assets/prize-machine.jpg"
import prizeMachineGrain from "@/assets/prize-machine-grain.png"
import DotGrid from "@/components/DotGrid"
import {
  PRIZE_PUNCH_COLUMN_COUNT,
  PRIZE_PUNCH_ROWS,
  PRIZE_RULE_COLUMN_COUNT,
  PRIZE_RULE_ROWS,
} from "@/components/punchCardPattern"

// Every length here is figma_px / 1440 written as a vw, the way the footer does
// it. vw and not a percentage because this section is a stack of overlaps — the
// dot block sits over the machine, the machine sits over the prize card and
// crops its rules — and a percentage re-resolves against whichever box it lands
// in, so the three layers would drift apart from each other as the page
// resizes. One shared unit off the page width keeps them registered.
//
// There is no separate mobile arrangement: the composition IS the overlaps, and
// they only survive proportional scaling, so the whole plate shrinks together
// like a poster rather than restacking.
//
// What these numbers are NOT is coordinates for the text. Nothing below is
// positioned by a measured left/top: the section is a flex column, the plate is
// a single-cell grid, and every string inside the card is flushed to the card's
// right padding. That is deliberate — the earlier build pinned each amount by
// its left edge, so prefixing a ₹ grew the string one monospace advance to the
// right and shot ₹10,000 clean off the page. Type is anchored to the edge the
// design aligns on and left to measure itself.

// --- Section rhythm --------------------------------------------------------
// Distances between the three fixed layers, top to bottom. None depend on
// content, only on the type scale, which is fixed.
const SECTION_TOP = "4.1806vw" // 60.2px to the pale rule
const RULE_TO_HEADING = "4.8472vw" // 69.8px
const HEADING_TO_PLATE = "6.9792vw" // 100.5px
const SECTION_BOTTOM = "9.3889vw" // 135.2px of black under the card

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

// --- The prize card --------------------------------------------------------
// The card's padding box is exactly the span of the two black rules (166.6px
// in from the left, 540.56px wide), so the rules are plain full-width children
// and the type flushes to the same right edge they end on. The left padding
// sits under the machine, which is why the amounts can grow leftward past it
// without ever showing: overflow goes into covered ground, not off-screen.
const CARD_PAD_TOP = "8.2431vw"
const CARD_PAD_BOTTOM = "7.8819vw"
const CARD_PAD_LEFT = "11.5667vw"
const CARD_PAD_RIGHT = "3.9503vw"
const CARD_RULE_HEIGHT = "0.1389vw"

// Figma sets the label/amount gap at 10.5, 16.8 and 8.6px — line-height slop
// from three different leadings, not three intentions. One value for all three.
const TIER_LABEL_GAP = "0.8333vw"

// The three tiers. Sizes step down with the money — 118.75 / 101.53 / 83.79 —
// and each keeps the leading Figma gives it. Vertical placement is left to
// `justify-between`: the two rules settle into the free space rather than
// carrying tops of their own.
const TIERS = [
  { label: "WINNER", amount: "₹10,000", size: "8.2467vw", leading: "0.6366" },
  { label: "SECOND", amount: "₹6,000", size: "7.0506vw", leading: "0.828" },
  { label: "THIRD", amount: "₹4,000", size: "5.8188vw", leading: "0.6366" },
]

export default function PrizePool() {
  return (
    <section
      id="prizes"
      className="flex w-full flex-col overflow-hidden bg-[#060606]"
      style={{ paddingTop: SECTION_TOP, paddingBottom: SECTION_BOTTOM }}
    >
      <DotGrid
        rows={PRIZE_RULE_ROWS}
        columnCount={PRIZE_RULE_COLUMN_COUNT}
        columnGap={RULE_DOT_GAP}
        rowGap="1.7264vw"
        color="#e1e1e1"
        style={{ marginLeft: RULE_LEFT, width: RULE_WIDTH }}
      />

      {/* The heading breaks after PRIZE in the design, where a 475px box forces
          the wrap. Hard-coding the break keeps it at every width instead of
          leaving it to whatever the box happens to measure.

          Figma reports 67.04% leading, but the render sets the two cap-tops
          86px apart — 0.865em, not 0.670em. Half-leading that tight would also
          crop the block, so the line box keeps Figma's number and the extra
          advance is made up by the gap between the lines. */}
      <h2
        className="font-plex-mono font-bold text-[#ef4b08]"
        style={{
          marginLeft: "4.8069vw",
          marginTop: RULE_TO_HEADING,
          fontSize: "6.8672vw",
          lineHeight: "0.6704",
        }}
      >
        <span className="block">PRIZE</span>
        <span className="block" style={{ marginTop: "0.1944em" }}>
          POOL
        </span>
      </h2>

      {/* The plate: card, machine and dot block all overlap, so they share one
          grid cell instead of being taken out of flow. Painting order is DOM
          order, and the cell still measures itself off the tallest layer. */}
      <div className="grid" style={{ marginTop: HEADING_TO_PLATE }}>
        <div
          className="col-start-1 row-start-1 flex flex-col justify-between self-start justify-self-end bg-[#d9d5c7]"
          style={{
            marginRight: "0.5486vw",
            width: "53.0556vw",
            height: "55.2778vw",
            paddingTop: CARD_PAD_TOP,
            paddingBottom: CARD_PAD_BOTTOM,
            paddingLeft: CARD_PAD_LEFT,
            paddingRight: CARD_PAD_RIGHT,
          }}
        >
          {TIERS.map((tier, index) => (
            <Fragment key={tier.label}>
              {/* Both rules span the card's full content width and the machine
                  is painted over their left ends. That clipping is the design,
                  not an accident of stacking order. */}
              {index > 0 && (
                <div
                  aria-hidden="true"
                  className="w-full bg-black"
                  style={{ height: CARD_RULE_HEIGHT }}
                />
              )}
              <div
                className="flex flex-col items-end"
                style={{ gap: TIER_LABEL_GAP }}
              >
                <p
                  className="font-plex-mono font-bold whitespace-nowrap text-black"
                  style={{ fontSize: "3.4722vw", lineHeight: "0.828" }}
                >
                  {tier.label}
                </p>
                <p
                  className="font-plex-mono font-bold whitespace-nowrap text-[#ef4b08]"
                  style={{ fontSize: tier.size, lineHeight: tier.leading }}
                >
                  {tier.amount}
                </p>
              </div>
            </Fragment>
          ))}
        </div>

        {/* The machine, over the card's left edge. The photograph is taller
            than its frame and hangs above it, so the crop lands on the monitor
            rather than centring the whole desk. Photo and grain share a cell
            the same way the plate's layers do. */}
        <div
          className="col-start-1 row-start-1 grid items-start justify-items-start self-start justify-self-start overflow-hidden bg-[#ece8e4]"
          style={{
            marginLeft: "19.1444vw",
            marginTop: "6.2431vw",
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
            className="col-start-1 row-start-1 max-w-none object-cover"
            style={{
              width: "40.0741vw",
              height: "53.4295vw",
              marginTop: "-5.0467vw",
            }}
          />
          {/* The same grain the design lays over this frame at 20%. */}
          <Image
            src={prizeMachineGrain}
            alt=""
            aria-hidden="true"
            sizes="(max-width: 900px) 60vw, 41vw"
            className="col-start-1 row-start-1 max-w-none object-cover opacity-20"
            style={{ width: "40.6431vw", height: "43.6944vw" }}
          />
        </div>

        {/* The orange block, top of the stack — it reads over the machine. */}
        <DotGrid
          rows={PRIZE_PUNCH_ROWS}
          columnCount={PRIZE_PUNCH_COLUMN_COUNT}
          columnGap={PUNCH_DOT_GAP_X}
          rowGap={PUNCH_DOT_GAP_Y}
          color="#f85a19"
          className="col-start-1 row-start-1 self-start justify-self-start"
          style={{
            marginLeft: "3.1181vw",
            marginTop: "16.9931vw",
            width: PUNCH_WIDTH,
          }}
        />
      </div>
    </section>
  )
}
