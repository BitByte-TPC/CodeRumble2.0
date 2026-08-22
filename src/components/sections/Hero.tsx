import Image from "next/image"
import instagramIcon from "@/assets/instagram-icon.png"
import linkedinIcon from "@/assets/linkedin-icon.png"
import xIcon from "@/assets/x-icon.png"

export default function Hero() {
  return (
    <section className="grid w-full aspect-[1440/1142.33]">
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
            className="whitespace-nowrap font-plex-mono font-bold text-[#f85a19] leading-[0.828]"
            style={{ fontSize: "clamp(1.75rem, 11.4703vw, 165.173px)" }}
          >
            <span className="block">code</span>
            <span className="block">rumble</span>
          </p>

          <p
            className="whitespace-nowrap font-plex-mono font-bold text-[#f85a19] leading-[0.6366] tracking-[-0.17em]"
            style={{ fontSize: "clamp(3rem, 21.6785vw, 312.17px)" }}
          >
            4.0
          </p>
        </div>

        <div className="flex items-center justify-between">
          <a
            href="#register"
            className="flex items-center justify-center rounded-[1.39vw] bg-[#060606] px-[3vw] py-[1.6vw] shadow-[2vw_1.6vw_11.4vw_0_rgba(0,0,0,0.45)] transition-transform hover:scale-[1.03]"
          >
            <span
              className="font-plex-mono font-medium text-[#e4e2dc]"
              style={{ fontSize: "clamp(0.9rem, 1.6667vw, 24px)" }}
            >
              Register
            </span>
          </a>

          <div className="flex gap-[2vw]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-[6.3vw] overflow-hidden rounded-[0.3vw]"
            >
              <Image src={instagramIcon} alt="Instagram" className="h-full w-full" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-[6.3vw] overflow-hidden rounded-[0.3vw]"
            >
              <Image src={linkedinIcon} alt="LinkedIn" className="h-full w-full" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="w-[6.3vw] overflow-hidden rounded-[0.3vw]"
            >
              <Image src={xIcon} alt="X" className="h-full w-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
