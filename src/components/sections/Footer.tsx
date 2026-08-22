import Image from "next/image"
import tornPaper from "@/assets/footer-torn-paper.svg"
import tpcLogo from "@/assets/tpc-footer-logo.png"

export default function Footer() {
  return (
    <div className="w-full overflow-hidden bg-[#060606]">
      <Image
        src="/orange-dot-grid.svg"
        alt=""
        aria-hidden="true"
        width={1530}
        height={407}
        className="relative h-auto w-full mt-[20px] top-20"
      />

      <section className="relative -mt-[20%] grid w-full aspect-[1440/366]">
        <Image
          src={tornPaper}
          alt=""
          aria-hidden="true"
          className="col-start-1 row-start-1 h-full w-full object-fill"
        />

        <div className="col-start-1 row-start-1 flex flex-col">
          <div className="flex flex-1 items-center justify-center pt-[8%]">
            <p
              className="text-center font-plex-mono font-bold text-black"
              style={{ fontSize: "clamp(1.25rem, 2.778vw, 40px)" }}
            >
              {"All It Takes Is "}
              <span className="text-[#f85a19]">One</span>
              {" Punch."}
            </p>
          </div>

          <div className="flex items-center gap-[0.8%] px-[4.3%] pb-[4%]">
            <Image src={tpcLogo} alt="The Programming Club logo" className="h-auto w-[3.8%]" />
            <p
              className="font-plex-mono font-bold text-[#f85a19] leading-tight"
              style={{ fontSize: "clamp(0.55rem, 0.75vw, 10.76px)" }}
            >
              Prepared by
              <br />
              The Programming Club of IIITDMJ
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
