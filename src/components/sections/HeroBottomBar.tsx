import type { CSSProperties } from "react"
import Image from "next/image"
import unstopLogo from "@/assets/unstop-logo.png"
import { SOCIAL_LINKS } from "@/components/socialLinks"

// Frame 159 in the Figma hero: a 1253 x 90 bar on the 1440 page, so every
// length below is figma_px / 1440 written as a vw, the way the rest of the
// poster is measured. The bar is the full content width — 1253 is exactly the
// 6.5% side padding the hero already carries — and the icons stop 10px short of
// its right edge.
//
// Nothing here is positioned by a measured left/top: the button leads, the
// unstop lockup sits 38px after it, and the tray is pushed to the far end by an
// auto margin.

const REGISTER_URL =
  "https://unstop.com/p/coderumble-40-the-programming-club-tpc-1746239"
const REGISTER_LABEL = "Register"
const PUNCH_STEP_MS = 28

// 94px of side padding and 116px of label make the button's own 304; 22px of
// padding-block inside a 67.3px box leaves the 23.3px Figma gives the label.
// The floor is a touch target and only engages under ~940px, where 4.67vw would
// put the button under 44px.
const CTA_HEIGHT = "h-[max(4.6736vw,44px)]"
const CTA_PAD_X = "px-[6.5278vw]"
const CTA_RADIUS = "rounded-[1.3889vw]"

// 90px tiles on a 35px gutter.
const TILE = "w-[max(6.25vw,24px)]"

export default function HeroBottomBar() {
  return (
    // One wrapping row of three rather than two nested groups. On the 1440
    // frame all three fit and it reads exactly as Frame 159 does. At 320px they
    // want ~295px against 275px of room, so rather than cram — which wrapped
    // "Powered by" onto two lines and ran the mark into the Instagram tile —
    // the lockup drops to a line of its own and the two things you can actually
    // press keep the top line. The order utilities do that without touching DOM
    // order, so the tab order stays button, lockup, tray.
    <div className="col-span-2 flex flex-wrap items-center gap-y-[3.5vw] pr-[0.6944vw] sm:flex-nowrap sm:gap-y-0">
      {/* One hole per character of the label, punched left to right on hover or
          focus — the keypunch vocabulary the social tiles carry at one column
          each. */}
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`punch-cta order-1 flex ${CTA_HEIGHT} ${CTA_PAD_X} ${CTA_RADIUS} shrink-0 items-center justify-center bg-[#060606] shadow-[2vw_1.6vw_11.4vw_0_rgba(0,0,0,0.45)]`}
        style={{ fontSize: "clamp(0.9rem, 1.6667vw, 24px)" }}
      >
        <span className="font-plex-mono font-medium leading-[0.828] text-[#e4e2dc]">
          {REGISTER_LABEL}
        </span>

        <span aria-hidden="true" className="punch-row">
          {Array.from(REGISTER_LABEL, (_, i) => (
            <span
              key={i}
              className="punch-hole"
              style={{ "--punch-delay": `${i * PUNCH_STEP_MS}ms` } as CSSProperties}
            />
          ))}
        </span>
      </a>

      {/* "Powered by" and the mark are one lockup, so the wordmark is the
          image's alt rather than a separate string — a reader that meets both
          would otherwise hear "unstop" twice. */}
      <p className="order-3 flex w-full items-center gap-[0.5556vw] whitespace-nowrap font-plex-mono font-semibold tracking-[-0.04em] text-[#060606] text-[max(1.4297vw,11px)] sm:order-2 sm:ml-[2.6389vw] sm:w-auto">
        Powered by
        <Image
          src={unstopLogo}
          alt="unstop"
          className="w-[max(5.6019vw,44px)] shrink-0"
        />
      </p>

      {/* The tile is already named by its aria-label, so the icon inside it is
          decorative — an alt would have a screen reader say the network twice. */}
      <div className="order-2 ml-auto flex items-center gap-[2.4306vw] sm:order-3">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`punch-tab ${TILE} rounded-[0.3vw]`}
          >
            <Image src={social.icon} alt="" className="h-full w-full" />
          </a>
        ))}
      </div>
    </div>
  )
}
