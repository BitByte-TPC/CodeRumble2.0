import { HeroFooter, Lumi, Navbar } from "../components";

const Hero = () => (
  <>
    <Navbar />
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <Lumi />
          <button className="md:hidden bg-[#1A1A1A] px-8 py-3 rounded-full text-white font-bold">
            Register Now
          </button>
        </div>
      </div>
      <HeroFooter />
    </div>
  </>
);

export default Hero;
