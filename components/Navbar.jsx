"use client"
import Image from "next/image"
const Navbar = () => (
  <nav className="pt-8 absolute inset-x-0 top-0 z-50">
    <div className="relative md:w-full md:max-w-none container mx-auto flex flex-wrap justify-between items-center gap-4 md:gap-8 px-2 md:px-6">
      <div className="flex flex-row text-sm items-center font-medium text-white">
        <Image
          src="https://res.cloudinary.com/dtg1mnp9u/image/upload/v1728221523/tpclogo_sewgqw.svg"
          alt="TPC Logo"
          width={50}
          height={50}
        />
        <div className="px-4 flex flex-col">
          <p className="text-xs md:text-base 2k:text-lg">Prepared by</p>
          <p className="text-xs md:text-base 2k:text-lg">
            The Programming Club of IIITDMJ
          </p>
        </div>
      </div>
      <button
        onClick={() =>
          (window.location.href = "https://forms.gle/a4WXd1AKptQoHLe89")
        }
        className="hidden md:flex bg-[#1A1A1A] md:px-10 md:py-4 2k:px-12 2k:py-5 rounded-full text-white font-bold text-lg 2k:text-xl hover:bg-[#282828] hover:scale-105 transition-transform duration-300"
      >
        Pre Register Now!
      </button>
    </div>
  </nav>
)

export default Navbar
