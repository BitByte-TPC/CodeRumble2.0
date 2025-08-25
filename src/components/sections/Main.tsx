import coderumble_white from "@/assets/coderumble_white.svg"
import tpc_logo from "@/assets/tpc_logo.svg"
import three from "@/assets/three.svg"
import instagram from "@/assets/instagram.svg"
import x from "@/assets/x.svg"
import linkedin from "@/assets/linkedin.svg"
import Image from "next/image"
import PageBeetles from "@/components/PageBeetles"
import Link from "next/link"

export default function Main() {
  return (
    <div
      className="min-h-[92vh] relative flex flex-col justify-center items-center"
      id="home"
    >
      <PageBeetles pageType="main" beetleCount={3} />

      <div className="gap-10 w-[70%] flex justify-center h-44 mb-14">
        <Image
          className="w-[80%]"
          src={coderumble_white}
          alt="Coderumble"
          priority
        />
        <div className="flex w-[20%] flex-col h-full justify-between px-5">
          <div className="bg-white h-7 w-full"></div>
          <Image
            className="self-center"
            src={three}
            alt="Coderumble"
            priority
          />
          <div className="bg-white h-7 w-full"></div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full flex flex-col items-center">
        <div className="mb-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSebjJtySWg-EUSD_Hio5OBF-EYOVWA0BatjSxaAzjUnzzj7mg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-mabry rounded-full text-4xl bg-blue-600 text-lime-400 border-4 border-lime-400 px-12 py-4 hover:bg-blue-700 transition-colors  cursor-pointer">
              Register!
            </button>
          </a>
        </div>

        <div className="w-full grid grid-cols-3 items-center h-fit px-18 py-5">
          <div className="flex justify-start">
            <Image src={tpc_logo} alt="TPC Logo" className="h-16" />
          </div>

          <div className="text-white text-center">
            <div className="text-2xl font-bold flex justify-center">
              <span className="bg-secondary/20 py-1 px-6 border border-secondary/50 rounded-full">
                21 / 09 / 2025
              </span>
            </div>
          </div>

          <div className="text-white flex justify-end pr-2">
            <div className="text-lg font-bold flex gap-3">
              <Link
                href="https://www.instagram.com/bitbyte.tpc?igsh=OTYxbGxvb21oNzVr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={instagram}
                  alt="Instagram Logo"
                  className="size-16"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/79614131/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} alt="LinkedIn Logo" className="size-16" />
              </Link>
              <Link
                href="https://x.com/BitByte_IIITDMJ?t=wLD0SM3ZSwEwsl2V48ctWg&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={x} alt="X Logo" className="size-16" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
