const Navbar = () => (
    <nav className="py-8 relative inset-0 ">
        <div className="relative" />
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 md:gap-8 px-4 md:px-8">
            <div className="flex flex-row text-sm items-center font-medium text-white">
                <img className="w-20 h-auto" src="./tpcLogoWhite.png" alt="TPC Logo" />
                <div className="px-4 flex flex-col">
                    <p className="text-xs md:text-sm">Prepared by</p>
                    <p className="text-xs md:text-sm">The Programming Club of IIITDMJ</p>
                </div>
            </div>
            <button className="hidden md:flex bg-[#1A1A1A] px-8 py-2 md:px-10 md:py-4 rounded-full text-white font-bold text-xs md:text-sm">
                Register Now
            </button>
        </div>
    </nav>
);
export default Navbar;