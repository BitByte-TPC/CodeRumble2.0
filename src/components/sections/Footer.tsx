import Image from "next/image"
import campusMap from "@/assets/campus-map.jpg"
import tornPaper from "@/assets/footer-torn-paper.svg"
import tpcLogo from "@/assets/tpc-footer-logo-dark.svg"
import { SOCIAL_LINKS } from "@/components/socialLinks"

// Frame 149 is 1468px wide, so every design offset below is figma_px / 1468
// written as a vw. vw rather than % because the paper splits into columns and
// cards: a percentage re-resolves against whichever box it lands in, while the
// design's numbers are all measured off the one page width. The max() floors
// are what the stacked layout under lg runs on — above lg the vw term always
// wins, so the desktop rendering stays the measured one.

const CONTACTS = [
  {
    name: "Saket Shah",
    phone: "+91 75064 12176",
    email: "24bec114@iiitdmj.ac.in",
  },
  {
    name: "Mahi Agarwal",
    phone: "+91 95997 28468",
    email: "24bec066@iiitdmj.ac.in",
  },
]

// The map plate links out to the campus. This is the documented Maps URL form
// (`search/?api=1&query=`), which resolves the same on the web app and in the
// native app on both mobile platforms, and it hands Google the institute's
// name rather than a hard-coded place id or a pair of coordinates — the name is
// the part that stays correct if Google re-indexes the location.
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "PDPM Indian Institute of Information Technology, Design and Manufacturing, Jabalpur",
  )

// 22.582px on the 1468 frame. Names, phone numbers, e-mails and the address
// card's heading all sit on this one step.
const BODY = "text-[max(1.5383vw,15px)]"

// The full-bleed rules run 78.98 → 1333.31; the short ones stop at the address
// card's left edge and drop to 10% black. Both are 2px in the design and stay
// 2px here — a hairline is not type, it does not want to scale with the page.
function Rule({ short = false }: { short?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={
        short
          ? "h-[2px] w-full bg-black/10 lg:w-[34.79vw]"
          : "h-[2px] w-full bg-[#060606] lg:ml-[5.38vw] lg:w-[85.44vw]"
      }
    />
  )
}

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-[#060606]">
      <Image
        src="/orange-dot-grid.svg"
        alt=""
        aria-hidden="true"
        width={1530}
        height={407}
        className="relative h-auto w-full mt-[1.39vw] top-[5.56vw]"
      />

      {/* flow-root, not decoration: without a block formatting context the
          paper's own top margin collapses up through this section and drags the
          whole footer down by its own offset. */}
      <section className="relative mt-[-20%] flow-root w-full font-plex-mono">
        {/* The tear is squashed to 1468/357, the proportion Figma gives it,
            which puts the lowest point of the torn edge at 9.7% of the page
            width. The paper starts half a percent under that and paints over
            the rest of this image, so the two beiges meet inside the artwork
            rather than at a seam that could show black. */}
        <div className="absolute inset-x-0 top-0 aspect-1468/357">
          <Image
            src={tornPaper}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-fill"
          />
        </div>

        <div className="relative mt-[10.2%] bg-[#e3dfdb] px-[7vw] pt-[max(7.01vw,44px)] pb-[max(5.7vw,40px)] lg:px-0">
          {/* The two lines of the wordmark are set on the design's own 82.8%
              leading — 144.33px type on a 119.5px advance, which is what makes
              the 520 x 238 box in Figma. 4.0 is a separate node and keeps the
              tighter 63.66%; its single line only ever uses that number as
              half-leading, and the difference between the two is exactly the
              ~30px by which the design starts 4.0 above "code". */}
          <div className="flex items-start justify-between font-bold leading-[0.6366] text-[#060606] lg:pl-[8.32vw] lg:pr-[13.09vw]">
            <p className="text-[9.832vw] leading-[0.828]">
              <span className="block">code</span>
              <span className="block">rumble</span>
            </p>
            <p className="text-[18.582vw] tracking-[-0.17em]">4.0</p>
          </div>

          <div className="mt-[max(6.93vw,32px)]">
            <Rule />
          </div>

          {/* The cards sit 37px higher than the CONTACT US heading they sit
              beside, so the two columns each carry their own top offset off
              this row rather than being aligned to each other. */}
          <div className="mt-[max(3.2vw,28px)] flex flex-col gap-[max(6vw,32px)] lg:flex-row lg:items-start lg:gap-0">
            <div className="lg:w-[40.17vw] lg:shrink-0">
              <h2 className="font-bold leading-[0.6366] text-[#ea5518] text-[max(3.136vw,22px)] lg:ml-[9.58vw]">
                CONTACT US
              </h2>

              <div className="mt-[max(2.82vw,20px)] flex flex-col gap-[max(2.9vw,20px)] lg:ml-[5.38vw]">
                {CONTACTS.map((contact, i) => (
                  <div key={contact.name} className="flex flex-col gap-[max(2.6vw,18px)]">
                    {/* 30.54px of line advance on a 22.582px face — the block
                        is set solid at 1.352 and the three lines fall where
                        the design puts them. */}
                    <div className={`leading-[1.352] ${BODY} lg:ml-[3.93vw]`}>
                      <p className="font-bold text-[#060606]">{contact.name}</p>
                      <p className="font-medium text-[#ea5518]">
                        <a
                          href={`tel:${contact.phone.replace(/\s/g, "")}`}
                          className="hover:underline"
                        >
                          {contact.phone}
                        </a>
                      </p>
                      <p className="font-medium text-[#ea5518]">
                        <a href={`mailto:${contact.email}`} className="hover:underline">
                          {contact.email}
                        </a>
                      </p>
                    </div>
                    {/* The rule under the last contact is the one that closes
                        the list, and the full-bleed rule below already does
                        that job. */}
                    {i < CONTACTS.length - 1 && <Rule short />}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[max(4vw,20px)] sm:flex-row sm:items-start sm:gap-[1.11vw] lg:mt-[2.54vw] lg:shrink-0">
              <div className="rounded-[max(1.36vw,12px)] border border-[#f85a19] bg-[#f3f3f3] pt-[max(1.9074vw,20px)] pr-[max(1.3038vw,14px)] pb-[max(1.7486vw,18px)] pl-[max(1.7486vw,18px)] text-[#060606] sm:w-[45%] lg:w-[22.07vw] lg:min-h-[18.53vw]">
                <p className={`font-bold leading-none ${BODY}`}>Address</p>
                <p className="mt-[1.17em] font-medium leading-[1.35] text-[max(0.9537vw,12px)]">
                  Pandit Dwarka Prasad Mishra Indian Institute of Information
                  Technology, Design and Manufacturing,
                </p>
                <p className="mt-[1.2em] leading-[1.35] text-[max(0.9537vw,12px)]">
                  Dumna Airport Road, P.O.: Khamaria, Jabalpur - 482005, Madhya
                  Pradesh, India
                </p>
              </div>

              {/* The map is a 777.68 × 486.93 plate cropped down to a 426 × 272
                  window, so the image is oversized inside the card and pulled
                  up and left by the same fractions Figma offsets it by. */}
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open IIITDM Jabalpur in Google Maps (opens in a new tab)"
                className="relative block aspect-[426/272] overflow-hidden rounded-[max(1.36vw,12px)] bg-[#ea5518] outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#f85a19] sm:flex-1 lg:w-[29.02vw] lg:flex-none"
              >
                <Image
                  src={campusMap}
                  alt=""
                  aria-hidden="true"
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="absolute left-[-34.14%] top-[-42.71%] h-[179.02%] w-[182.55%] max-w-none object-cover"
                />
              </a>
            </div>
          </div>

          <div className="mt-[max(3.26vw,28px)]">
            <Rule />
          </div>

          <div className="mt-[max(1.41vw,24px)] flex flex-col items-center gap-[max(5vw,24px)] sm:flex-row sm:justify-between lg:pl-[9.31vw] lg:pr-[9.16vw]">
            <div className="flex items-center gap-[max(0.868vw,6px)]">
              <Image
                src={tpcLogo}
                alt="The Programming Club logo"
                className="h-auto w-[max(5.953vw,44px)]"
              />
              <p className="font-bold leading-normal text-[#060606] text-[max(1.1677vw,10px)]">
                Prepared by
                <br />
                The Programming Club of IIITDMJ
              </p>
            </div>

            <div className="flex gap-[max(1.81vw,14px)]">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="punch-tab w-[max(4.64vw,34px)] rounded-[0.3vw]"
                >
                  <Image src={social.icon} alt="" className="h-full w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
