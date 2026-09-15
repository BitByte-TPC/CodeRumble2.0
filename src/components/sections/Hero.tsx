import Image from "next/image"
import heroPlate from "@/assets/hero-bg.png"
import HeroBottomBar from "@/components/sections/HeroBottomBar"

export default function Hero() {
  // The frame is the whole plate: sprocket holes down both edges,
  // CODE and RUMBLE both punched, the nav inside the card at the top. Matching
  // the plate's own ratio is what shows all of it — there is no crop left to
  // anchor, so object-position does not matter at desktop widths.
  //
  // Both ratios come from the imported asset rather than from numbers typed
  // beside it, so re-cropping the file re-shapes the frame on its own and the
  // two can never disagree. The import also gives the plate a content-hashed
  // URL: editing the pixels changes the URL, so no browser or CDN can serve a
  // stale copy of an older crop — which is exactly what happened when it lived
  // at a fixed /hero-bg.png.
  //
  // The plate is the original artwork with its top 103 rows cropped off, which
  // is where the printed "SOMETHING LEGENDARY IS LOADING" line sat (rows
  // 77-102). It had to go from the file rather than from the frame: the nav is
  // sticky and the plate is not, so any band left in the artwork slid out from
  // behind the pill as soon as the page scrolled. Every surviving row is
  // bit-identical to the original.
  //
  // The svh floor is the one case where a crop comes back. Below about 840px
  // the floor is taller than the ratio, so cover has to overflow the frame
  // somewhere; the image keeps the plate's ratio itself, so it overflows
  // sideways from the centre rather than going tall, and the card stays whole
  // top to bottom. svh rather than vh so the mobile URL bar doesn't resize it
  // mid-scroll.
  //
  // grid-rows-[100%] pins the single row to the section's own height. Left
  // auto, the row takes its size from the image's natural height instead, and
  // h-full then resolves against that rather than against the frame.
  return (
    <section
      id="top"
      className="grid grid-rows-[100%] w-full min-h-[42svh] overflow-hidden"
      style={{ aspectRatio: `${heroPlate.width} / ${heroPlate.height}` }}
    >
      <Image
        src={heroPlate}
        alt="CODE RUMBLE punched into a computer punch card"
        priority
        sizes="100vw"
        className="col-start-1 row-start-1 h-full w-auto min-w-full max-w-none justify-self-center object-cover object-center"
        style={{ aspectRatio: `${heroPlate.width} / ${heroPlate.height}` }}
      />

      {/* The hero content frame is 1253 x 414 on the 1440 page: the wordmark
          and the 4.0 sit top-aligned on one row, the bar 50px under the taller
          of them. Two columns rather than two rows, because the 4.0's column is
          sized `auto` — it takes the 456 the design gives it and ends flush at
          1253, and the wordmark's 1fr absorbs the slack, which is what puts the
          202 of air between the two without anyone measuring it. content-end
          packs the rows to the bottom of the cropped frame. */}
      <div className="col-start-1 row-start-1 grid grid-cols-[1fr_auto] content-end items-start gap-x-[2%] sm:gap-x-[4%] gap-y-[3.4722vw] px-[6.5%] pb-[5.417%]">
        {/* The gap between the wordmark and the 4.0 is whatever the row has
            left over, so it holds the design's proportion at every width — and
            at 320px that proportion reads as a hole. Below sm the wordmark
            takes a larger share of the width, which closes it. */}
        <p className="whitespace-nowrap font-plex-mono font-bold text-[#f85a19] leading-[0.828] text-[clamp(1.75rem,13.6vw,165.173px)] sm:text-[clamp(1.75rem,11.4703vw,165.173px)]">
          <span className="block">code</span>
          <span className="block">rumble</span>
        </p>

        {/* Figma measures this box at 456 and ends it flush on the content
            edge. CSS gets 402.7 from the advances, because letter-spacing is
            added after the final glyph too and Figma's box stops at the last
            one. The margin hands that single trailing space back, which both
            squares the box with the design and stops the 0 hanging past the
            margin the wordmark keeps on the left. In em, so it tracks the type
            rather than a width. */}
        <p className="mr-[0.17em] whitespace-nowrap font-plex-mono font-bold text-[#f85a19] leading-[0.6366] tracking-[-0.17em] text-[clamp(3rem,21.6785vw,312.17px)]">
          4.0
        </p>

        <HeroBottomBar />
      </div>
    </section>
  )
}
