import type { CSSProperties } from "react"
import Image from "next/image"
import instagramIcon from "@/assets/instagram-icon.png"
import linkedinIcon from "@/assets/linkedin-icon.png"
import xIcon from "@/assets/x-icon.png"

const REGISTER_URL = "https://forms.gle/C39bK8woRXQ7SyxF8"
const REGISTER_LABEL = "Register"
const PUNCH_STEP_MS = 28

export default function Hero() {
  // The hero keeps the design's ratio wherever there's room for it and falls
  // back to a viewport-height floor on phones, where that ratio would leave a
  // 297px letterbox. Whichever is taller wins, so the height never jumps — svh
  // rather than vh so the mobile URL bar doesn't resize it mid-scroll.
  return (
    <section className="grid w-full aspect-[1440/1142.33] min-h-[68svh]">
      <Image
        src="/hero-bg.png"
        alt="Code Rumble 4.0 — something legendary is loading"
        width={1440}
        height={1143}
        priority
        className="col-start-1 row-start-1 h-full w-full object-cover"
      />

      <div className="col-start-1 row-start-1 flex flex-col justify-end gap-[3%] px-[6.5%] pb-[7%]">
        <div className="flex items-start justify-between gap-[4%]">
          <p
            className="whitespace-nowrap font-plex-mono font-bold text-[#f85a19] leading-[0.828] text-[clamp(1.75rem,11.4703vw,165.173px)]"
          >
            <span className="block">code</span>
            <span className="block">rumble</span>
          </p>

          <p
            className="whitespace-nowrap font-plex-mono font-bold text-[#f85a19] leading-[0.6366] tracking-[-0.17em] text-[clamp(3rem,21.6785vw,312.17px)]"
          >
            4.0
          </p>
        </div>

        <div className="flex items-center justify-between">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="punch-cta flex items-center justify-center rounded-[1.39vw] bg-[#060606] px-[3vw] shadow-[2vw_1.6vw_11.4vw_0_rgba(0,0,0,0.45)]"
            style={{ fontSize: "clamp(0.9rem, 1.6667vw, 24px)" }}
          >
            <span className="font-plex-mono font-medium text-[#e4e2dc]">
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

          <div className="flex gap-[2vw]">
            <a
              href="https://www.instagram.com/bitbyte.tpc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="punch-tab w-[max(6.3vw,24px)] rounded-[0.3vw]"
            >
              <Image src={instagramIcon} alt="Instagram" className="h-full w-full" />
            </a>
            <a
              href="https://www.linkedin.com/company/79614131/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="punch-tab w-[max(6.3vw,24px)] rounded-[0.3vw]"
            >
              <Image src={linkedinIcon} alt="LinkedIn" className="h-full w-full" />
            </a>
            <a
              href="https://x.com/BitByte_IIITDMJ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="punch-tab w-[max(6.3vw,24px)] rounded-[0.3vw]"
            >
              <Image src={xIcon} alt="X" className="h-full w-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
