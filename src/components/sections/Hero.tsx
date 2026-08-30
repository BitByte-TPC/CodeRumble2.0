import Image from "next/image"
import RegistrationCountdown from "@/components/RegistrationCountdown"
import instagramIcon from "@/assets/instagram-icon.png"
import linkedinIcon from "@/assets/linkedin-icon.png"
import xIcon from "@/assets/x-icon.png"

export default function Hero() {
  // The frame is the bottom 683px of the 1440x1143 plate — the punched CODE
  // line and the tagline above it are cropped away, leaving RUMBLE and the
  // ghosted 4.0. object-bottom is what does the cropping: the ratio here is
  // wider than the image's, so cover overflows it vertically and anchoring the
  // bottom edge takes the excess off the top, exactly the 40% we want gone.
  // The svh floor still applies on phones, where that ratio alone would leave
  // a 185px letterbox — svh rather than vh so the mobile URL bar doesn't
  // resize it mid-scroll. It came down from 68 to 42 with the crop: the floor
  // is what forces the frame narrower than the plate, and every point of it
  // buys zoom, so 68 left the punched RUMBLE magnified ~2.9x and reading as
  // loose dots. 42 holds it near 1.8x, still legible as a card, and leaves
  // room to spare for the type it has to carry.
  //
  // grid-rows-[100%] pins the single row to the section's own height. Left
  // auto, the row takes its size from the image's natural height instead, so
  // h-full resolved against a 1016px row rather than the 607px frame: cover
  // had nothing to crop, and the overlay bottom-aligned itself to a row that
  // overflowed the section.
  //
  // The crop lives on the image element, not on the frame, so that it survives
  // the svh floor. Carrying the cropped ratio itself, the element matches the
  // frame exactly at desktop widths and grows wider than it once the floor
  // takes over on a phone — overflowing sideways from the centre rather than
  // going tall and letting the CODE line back into view.
  return (
    <section className="grid grid-rows-[100%] w-full aspect-[1440/683] min-h-[42svh] overflow-hidden">
      <Image
        src="/hero-bg.png"
        alt="Code Rumble 4.0 — something legendary is loading"
        width={1440}
        height={1143}
        priority
        className="col-start-1 row-start-1 aspect-[1440/683] h-full w-auto min-w-full max-w-none justify-self-center object-cover object-bottom"
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
