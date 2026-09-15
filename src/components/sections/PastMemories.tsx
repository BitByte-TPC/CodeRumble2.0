import Image from "next/image"
import DotGrid from "@/components/DotGrid"
import { PUNCH_ROWS, PUNCH_COLUMN_COUNT } from "@/components/punchCardPattern"

// Frame 75 is a bleed frame: 1597px wide sitting at x=-51 on the 1440 page, so
// every offset below is (figma_x - 51) / 1440. Vertical offsets are percentages
// of the same 1440 width, which is what a percentage padding resolves against.
const PHOTOS = [
  "DSC06246",
  "DSC06250",
  "DSC06259",
  "DSC06260",
  "DSC06278",
  "DSC06297",
  "DSC06312",
  "DSC06324",
  "DSC06333",
]

// 326px tile + 56.72px gutter on the 1440 page. The floors stop the tiles
// collapsing to thumbnails on a phone, where 22.6vw is only ~85px; the loop
// still lands because the track is duplicated and shifted by half its own
// width, whichever way the tiles ended up being sized.
const TILE = "w-[max(22.639vw,190px)]"
const GUTTER = "mr-[max(3.939vw,20px)]"

function PhotoTile({ name, copy }: { name: string; copy: 1 | 2 }) {
  return (
    <div
      className={`memories-tile ${TILE} ${GUTTER} aspect-square shrink-0 overflow-hidden bg-[#060606]`}
    >
      <Image
        src={`/${name}.JPG`}
        // The second copy exists only to close the loop, so it is hidden from
        // assistive tech rather than read out as nine more photos.
        alt={copy === 1 ? "A moment from CodeRumble 3.0" : ""}
        aria-hidden={copy === 2 || undefined}
        width={1600}
        height={901}
        sizes="(max-width: 840px) 190px, 23vw"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export default function PastMemories() {
  return (
    // isolate keeps the texture's multiply inside this section — without it the
    // blend reaches back to whatever the page painted underneath.
    <section
      id="memories" className="relative isolate w-full overflow-hidden bg-[#d9d5c7] pt-[6.94%] pb-[3.966%]">
      {/* The paper. In Figma this sheet sits above the (then still empty) photo
          slots, but multiply over a black placeholder is a no-op, so there is
          no evidence the grain was meant to fall across the photographs
          themselves — and over real images it would flatten them. It goes
          behind the content instead, where it only does what it visibly does in
          the design: knock the flat cream back into stock.

          15%, not full strength. The exported sheet is mid-grey (mean 193 of
          255), so multiplying it whole turns the cream to concrete; Figma's own
          render of this frame composites to #d1cdbf, which is #d9d5c7 times
          0.964 — the exact factor a 15% multiply of that sheet produces. The
          grain that survives is faint by design, a tooth in the stock rather
          than a visible overlay. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/paper-texture.jpg')] bg-cover bg-center opacity-15 mix-blend-multiply"
      />

      {/* Figma has these as two separate text nodes 61.36px apart at a 40px
          type size — a 1.534em advance. Setting that as the line-height would
          put the same 0.706em of half-leading above the first line and below
          the last, pushing the block 21px taller than the design's and
          carrying everything under it down with it. So the line box keeps
          Figma's own 0.828 and the advance is made up by the gap between the
          two lines, which leaves the block exactly 94.48px tall. */}
      <h2 className="ml-[7.588%] font-plex-mono font-medium leading-[0.828] text-[#060606] text-[clamp(1rem,2.778vw,40px)]">
        <span className="block">The legacy Continues</span>
        <span className="mt-[0.706em] block">Take a look CR 3.0</span>
      </h2>

      {/* The same punch card as the hero strip, dark-on-cream and cropped to its
          bottom two rows. PUNCH_ROWS is stored card-side up, so rendering rows
          0 and 1 under a 180deg rotation puts row 1 on top and row 0 below it —
          which is the pair the design frame exposes.

          The design lays these 40 columns across 1387px inside a 1311px frame,
          clipping the two leftmost dots; fitting the columns to the frame
          instead costs ~5% of pitch and gains a strip that stays on its own
          grid at every width.

          The offsets around it are measured to the dots, not to that frame.
          Figma's frame is 87px tall but only carries dots over the lower 73.6
          of them — it is the bottom of a taller strip pushed up until two rows
          show — so spacing to the frame would leave a 13px hole above the
          first row that is not in the design. */}
      <DotGrid
        rows={PUNCH_ROWS.slice(0, 2)}
        columnCount={PUNCH_COLUMN_COUNT}
        columnGap="0.74vw"
        rowGap="1.73vw"
        color="#060606"
        className="mt-[4.842%] ml-[6.366%] w-[91.042%] rotate-180"
      />

      {/* Two identical runs of the nine photos. Each tile carries its gutter as
          a right margin rather than the row carrying a flex gap: with a gap the
          track is 18 tiles and 17 gutters, so half of it lands mid-gutter and
          the loop visibly jumps. Folding the gutter into the tile makes every
          step exactly one tile wide, and -50% is exactly one run. */}
      <div className="memories-viewport mt-[6.253%] w-full overflow-hidden">
        <div className="memories-marquee flex w-max">
          {PHOTOS.map((name) => (
            <PhotoTile key={name} name={name} copy={1} />
          ))}
          {PHOTOS.map((name) => (
            <PhotoTile key={`${name}-loop`} name={name} copy={2} />
          ))}
        </div>
      </div>
    </section>
  )
}
