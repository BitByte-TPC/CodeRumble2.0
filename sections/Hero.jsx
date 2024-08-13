"use client";
import { HeroFooter, Lumi, Navbar } from "../components";

const Hero = () => (
  <>
    <Navbar />
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div
          style={{
            backgroundImage: "url(./header.svg)",
            backgroundSize: "contain", // 'contain' will scale the image to fit within the container without cropping
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%", // Adjust this to cover more area
            width: "100%", // Adjust this to cover more area
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <Lumi />
          </div>
        </div>
        <button
          onClick={() =>
            (window.location.href = "https://code-rumble.devfolio.co/overview")
          }
          className="md:hidden bg-[#1A1A1A] px-8 py-3 rounded-full text-white font-bold hover:bg-[#282828] hover:scale-105 transition-transform duration-300"
        >
          Register Now
        </button>
      </div>
      <HeroFooter />
    </div>
  </>
);

export default Hero;
