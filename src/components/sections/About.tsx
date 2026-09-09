import Image from "next/image"
import TypewriterText from "@/components/TypewriterText"

const ABOUT_COPY =
  "CodeRumble is the ultimate event for programmers to experience the exhilarating world of competitive programming. As a mock ICPC Regional Contest, we bring you a stimulating challenge that will push your coding skills to the limit. Unlock your problem-solving potential, tackle challenging algorithms, and rise to the top!"

export default function About() {
  // Three columns split the row wherever there is width for them, sharing it
  // 1.15 / 0.7 / 1.15: the question mark is a single glyph and only ever fills
  // about half of an equal third, so the width it was holding empty goes to the
  // two type blocks instead. The three still come out the same height, which is
  // what lines them up; the mark keeps its own size, since that follows the row.
  //
  // That last part is what sets the breakpoint at lg rather than md. The copy
  // is 322 characters, so its block height grows as the square of its type
  // size over the column width; the headline's grows linearly. They track each
  // other only while the copy can keep shrinking with the viewport, and it
  // stops at a 12px floor around 960px — below that the column is ~200px, the
  // copy needs 13 lines, and no headline that fits the same column can reach
  // it. So under lg the copy drops to a full-width second row (where it also
  // reads at a sane line length) and the headline and question mark, which do
  // stay level, take the first row between them.
  return (
    <section className="w-full bg-[#060606] px-[5.07%] py-[11%] lg:py-[5.5%]">
      <div className="grid grid-cols-2 items-center justify-items-center gap-x-[4vw] gap-y-[9vw] lg:grid-cols-[1.15fr_0.7fr_1.15fr] lg:gap-x-[3vw] lg:gap-y-0">
        <div className="font-plex-mono">
          <p className="font-semibold text-[#e4e2dc] text-[min(5.2vw,44px)] lg:text-[clamp(1.25rem,4vw,58px)]">
            what_is
          </p>
          <p className="mt-[0.12em] font-bold text-[#f85a19] leading-[0.828] text-[min(10.4vw,88px)] lg:text-[clamp(2.5rem,8vw,116px)]">
            <span className="block">code</span>
            <span className="block">rumble</span>
          </p>
        </div>

        {/* Sized off the row rather than the viewport: stretching it to the row
            is what keeps it level with the type beside it at every width, and
            it hugs the start of its column so it reads as part of the headline
            rather than as a third, floating element.

            h-0 is load-bearing, not a typo. An auto grid row takes its size
            from its items, and a bare h-full leaves this one contributing its
            intrinsic 207px — which becomes a floor the row cannot go under, so
            on a phone the mark ends up towering over the headline it is meant
            to match. Zeroing the specified height takes it out of that
            calculation; min-h-full then fills whatever the row turned out to
            be, and width follows from the aspect ratio. max-w caps it if a tall
            row would otherwise push it past its column.

            Decorative: "what_is code rumble" already says it, so an alt would
            only make a screen reader read the question twice. */}
        <Image
          src="/qm.svg"
          alt=""
          width={134}
          height={207}
          className="h-0 min-h-full w-auto max-w-full self-stretch justify-self-start object-contain"
        />

        <TypewriterText
          text={ABOUT_COPY}
          className="col-span-2 max-w-[52ch] font-plex-mono font-semibold leading-[1.5] text-[#e4e2dc] text-[clamp(13px,3.7vw,19px)] lg:col-span-1 lg:max-w-[46ch] lg:font-bold lg:tracking-[0.03em] lg:text-[clamp(12px,1.28vw,20px)]"
        />
      </div>
    </section>
  )
}
