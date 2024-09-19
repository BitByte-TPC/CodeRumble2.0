"use client";
import Image from "next/image";
const Navbar = () => (
  <nav className="pt-8 absolute inset-x-0 top-0 z-50">
    <div
      className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md"
      style={{
        maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 70%, transparent 100%)",
      }}
    ></div>
    <div className="relative md:w-full md:max-w-none container mx-auto flex flex-wrap justify-between items-center gap-4 md:gap-8 px-2 md:px-6">
      <div className="flex flex-row text-sm items-center font-medium text-white">
        <Image src="./tpclogo.svg" alt="TPC Logo" width={50} height={50} />
        <div className="px-4 flex flex-col">
          <p className="text-xs md:text-base 2k:text-lg">Prepared by</p>
          <p className="text-xs md:text-base 2k:text-lg">
            The Programming Club of IIITDMJ
          </p>
        </div>
      </div>
      <button
        onClick={() =>
          (window.location.href = " https://discord.gg/8Qu8dsYfCS")
        }
        className="hidden md:flex bg-[#1A1A1A] md:px-10 md:py-4 2k:px-12 2k:py-5 rounded-full text-white font-bold text-lg 2k:text-xl hover:bg-[#282828] hover:scale-105 transition-transform duration-300"
      >
        Join Discord!
      </button>
    </div>
  </nav>
);

export default Navbar;
