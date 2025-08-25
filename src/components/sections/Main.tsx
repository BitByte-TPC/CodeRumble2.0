import coderumble_white from "@/assets/coderumble_white.svg"
import tpc_logo from "@/assets/tpc_logo.svg"
import three from "@/assets/three.svg"
import Image from "next/image"
import PageBeetles from "@/components/PageBeetles"
import Link from "next/link"

const InstagramIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="2"
      y="2"
      width="36"
      height="36"
      rx="8"
      stroke="#BCFF06"
      strokeWidth="3.5596"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="20" r="8" stroke="#BCFF06" strokeWidth="3.5596" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="30" cy="10" r="2" fill="#BCFF06" />
  </svg>
)

const TwitterIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 5L18 20L5 35H8L19 22L28 35H35L22 18L34 5H31L21 16L12 5H5ZM9 7H11L31 33H29L9 7Z"
      fill="#BCFF06"
    />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="2"
      y="2"
      width="36"
      height="36"
      rx="4"
      stroke="#BCFF06"
      strokeWidth="3.5596"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18v12M12 12v0.01M18 30v-7a5 5 0 0 1 10 0v7"
      stroke="#BCFF06"
      strokeWidth="3.5596"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function Main() {
  return (
    <div className="min-h-[92vh] relative flex flex-col justify-center items-center" id="home">
      <PageBeetles pageType="main" beetleCount={3} />

      <div className="gap-10 w-[70%] flex justify-center h-44 mb-14 flex-col lg:flex-row items-center min-w-[300px]">
        <Image className="w-[80%]" src={coderumble_white || "/placeholder.svg"} alt="Coderumble" priority />
        <div className="flex w-[20%] flex-col h-full justify-between px-5 min-w-[100px]">
          <div className="bg-white h-5 lg:h-7 w-full"></div>
          <Image className="self-center" src={three || "/placeholder.svg"} alt="Coderumble" priority />
          <div className="bg-white h-5 lg:h-7 w-full"></div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full flex flex-col items-center">
        <div className="mb-4">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSebjJtySWg-EUSD_Hio5OBF-EYOVWA0BatjSxaAzjUnzzj7mg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-mabry rounded-full text-4xl bg-blue-600 text-lime-400 border-4 border-lime-400 px-12 py-4 hover:bg-blue-700 transition-colors  cursor-pointer">
              Register!
            </button>
          </Link>
        </div>

        <div className="text-white text-center mt-6 block lg:hidden">
          <div className="text-lg text-2xl font-bold flex justify-center">
            <span className="bg-lime-400/10 py-1 px-6 border border-lime-400/50 rounded-full text-lime-400">21 / 09 / 2025</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 items-center h-fit px-4 lg:px-18 py-0 lg:py-5">
          <div className="flex justify-start">
            <Image src={tpc_logo || "/placeholder.svg"} alt="TPC Logo" className="h-16" />
          </div>

          <div className="text-white text-center">
            <div className="text-lg lg:text-2xl font-bold flex justify-center">
              <span className="bg-lime-400/10 py-1 px-6 border border-lime-400/50 rounded-full text-lime-400 hidden lg:block">
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
                <div className="size-16 flex items-center justify-center">
                  <InstagramIcon />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/79614131/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="size-16 flex items-center justify-center">
                  <LinkedInIcon />
                </div>
              </Link>
              <Link
                href="https://x.com/BitByte_IIITDMJ?t=wLD0SM3ZSwEwsl2V48ctWg&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="size-16 flex items-center justify-center">
                  <TwitterIcon />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
