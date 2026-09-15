// Frame 134: a 1201 x 109 pill on the 1440 page, 34 down from the top, so the
// lengths are figma_px / 1440 written as vw like the rest of the poster. Figma
// draws it over the top of the hero plate; here it is the page's own header and
// sticks, so the 34 becomes the gap it keeps from the top of the viewport.
//
// Every length inside the pill is the Figma number times 0.85, which trades a
// little of the design's weight for a header that sits lighter over the plate
// without changing any of its proportions: 109 tall becomes ~93. The width is
// the one number left at full size, since the span is what makes it read as a
// bar. The height is still not set — the padding-block around the mark makes
// it, which is what keeps the pill in proportion as the type scales.
//
// Below sm the pill drops to a compact scale. It is not a taste call: at 320px
// the mark and the four links need 263.6 against 239.6 of content room, so the
// pill's own overflow-clip was cutting "Contact" in half. The vw terms are
// unchanged — only the floors that were holding the type up on small screens.
//
// The four links are one row flushed right. Figma draws them inside a fixed
// 581.965-wide frame set to justify-end, which is a canvas artifact rather than
// a constraint: the pill's own justify-between already puts the mark at one end
// and the links at the other.
const LINKS = [
  { label: "About", href: "#about" },
  { label: "Memories", href: "#memories" },
  { label: "Prizes", href: "#prizes" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  return (
    // A zero-height sticky strip with the pill overflowing it: the design floats
    // the pill over the plate, so the header must not take a row of its own and
    // push the hero down. flex rather than block so the pill's own top margin
    // cannot collapse out through a box with no height of its own, and so the
    // centring is the strip's job rather than auto margins — which stop
    // centring against the viewport once a sticky element detaches.
    //
    // items-start is load-bearing: a flex container stretches its items by
    // default, and against a zero-height strip that collapsed the pill to its
    // padding and dropped the mark's 37px out of the height entirely.
    <div className="sticky top-0 z-50 flex h-0 w-full items-start justify-center">
      <nav className="mt-[2.3611vw] flex w-[83.403vw] items-center justify-between overflow-clip rounded-[max(1.9008vw,12px)] bg-[#ededed] px-[max(1.8889vw,10px)] py-[max(2.125vw,9px)] sm:rounded-[max(1.9008vw,14px)] sm:px-[max(1.8889vw,12px)] sm:py-[max(2.125vw,12px)] shadow-[0_0.4vw_1.6vw_0_rgba(0,0,0,0.18)]">
        {/* The mark is set, not drawn: Figma exports it as five vector glyphs
            120 wide, which is IBM Plex Mono's 0.6em advance at 40px — the face
            the rest of the poster already uses. As type it takes the hover
            colour and the capitals, which an exported SVG could do neither of.
            The size is the same 0.85 of the design as everything else in the
            pill: 3 characters' worth of advance (5 x 0.6em) makes the width, so
            the font size is the logo's width over three. The leading is the
            design's own 37-over-40, which keeps the line box the height the
            exported frame had and so leaves the pill exactly as tall as it was.

            The spacing is not the font's default. Scanning the exported glyphs
            column by column, Figma sets the letters ~6px apart at 40px but the
            dot only 2.4px from its neighbours; plain monospace gives the dot a
            full cell and leaves it floating 8.9px clear on both sides. So the
            dot is pulled in 0.16em a side and the tracking opened 0.064em to
            put the air back between the letters — which also lands the mark on
            the design's width exactly, since 5 x (0.6 + 0.064) - 0.32 = 3em. */}
        <a
          href="#top"
          className="shrink-0 font-plex-mono font-bold leading-[0.925] tracking-[0.064em] text-[#454545] text-[max(2.3611vw,13px)] sm:text-[max(2.3611vw,18.67px)] transition-colors duration-150 hover:text-[#f85a19] focus-visible:text-[#f85a19]"
        >
          CR4<span className="mx-[-0.16em]">.</span>0
        </a>

        <ul className="flex items-center gap-[max(1.6528vw,9px)] sm:gap-[max(1.6528vw,7px)]">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block p-[0.5903vw] px-[2px] sm:px-[0.5903vw] font-plex-mono font-medium leading-[0.828] whitespace-nowrap text-[#060606] text-[max(1.0625vw,8.5px)] sm:text-[max(1.0625vw,11px)] transition-colors duration-150 hover:text-[#f85a19] focus-visible:text-[#f85a19]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
