const Hero = () => (
    <div className="flex justify-center" style={{margin:'6vh 0', padding:"2vh"}}>
        <div
            className="mx-auto flex flex-col items-center"
        >
            <img src="./heroLogo.png" className="" alt="code rumble" width="750" />
            <button className="md:hidden flex bg-[#1A1A1A] px-8 py-2 md:px-10 md:py-4 rounded-full text-white font-bold text-xs md:text-sm">Register Now</button>
        </div>
    </div>
)

export default Hero;