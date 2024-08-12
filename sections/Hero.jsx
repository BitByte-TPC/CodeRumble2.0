"use client"
import { HeroFooter, Lumi, Navbar } from "../components";

const Hero = () => (
  <>
    <Navbar />
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <Lumi />
          <button
            onClick={() =>
              (window.location.href =
                "https://code-rumble.devfolio.co/overview")
            }
            className="md:hidden bg-[#1A1A1A] px-8 py-3 rounded-full text-white font-bold hover:bg-[#282828] hover:scale-105 transition-transform duration-300"
          >
            Register Now
          </button>
        </div>
      </div>
      <HeroFooter />
    </div>
  </>
);

export default Hero;
