import Image from "next/image"
import RegistrationCountdown from "@/components/RegistrationCountdown"
import instagramIcon from "@/assets/instagram-icon.png"
import linkedinIcon from "@/assets/linkedin-icon.png"
import xIcon from "@/assets/x-icon.png"

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
          <RegistrationCountdown />

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
