const Navbar = () => (
    <nav className="py-8 absolute inset-0 ">
        <div className="relative" />
        <div className="md:w-full md:max-w-none container mx-auto flex flex-wrap justify-between items-center gap-4 md:gap-8 px-2 md:px-6">
            <div className="flex flex-row text-sm items-center font-medium text-white">
                <img className="w-20 2k:w-28 h-auto" src="./tpcLogoWhite.png" alt="TPC Logo" />
                <div className="px-4 flex flex-col">
                    <p className="text-xs md:text-base 2k:text-lg">Prepared by</p>
                    <p className="text-xs md:text-base 2k:text-lg">The Programming Club of IIITDMJ</p>
                </div>
            </div>
            <button className="hidden md:flex bg-[#1A1A1A] md:px-10 md:py-4 2k:px-12 2k:py-5 rounded-full text-white font-bold text-lg 2k:text-xl">
                Register Now
            </button>
        </div>
    </nav>
);
export default Navbar;