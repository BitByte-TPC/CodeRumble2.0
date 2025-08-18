function Prize() {
  return (
    <>
      {/* This year's prizes section */}
      <div className="w-full flex items-center justify-center mt-20 sm:mt-28 xl:mt-[12rem]">
        <div className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800/30 via-gray-700/40 to-gray-800/30 rounded-full border border-gray-600/50 backdrop-blur-sm">
          <div className="relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-400 animate-pulse"
            >
              <path
                d="M6 10V8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8V10M5 10H19C19.5523 10 20 10.4477 20 11V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V11C4 10.4477 4.44772 10 5 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="15"
                r="1"
                fill="currentColor"
                className="animate-ping"
              />
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          </div>
          <span className="text-white/80 text-xl md:text-2xl lg:text-3xl font-medium">
            This year&apos;s prizes will be revealed soon!
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-4 xs:gap-0 justify-center mx-auto mt-8">
        <div className="flex flex-col 2k:gap-8">
          <div>
            <h1 className="text-[2rem] md:text-[3.5rem] lg:text-[5vw] 2k:text-9xl font-extrabold text-center w-full">
              See Past Prizes!
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center w-full text-center">
            <p className="text-xs md:text-xl text-[#FFFFFF80]  mt-8  md:font-bold">
              A Prize pool of
            </p>
            <p className=" text-[1.25rem] md:text-[1.6rem] xl:text-[2.5rem] mb-[5rem] lg:mb-8 font-bold leading-relaxed">
              Rs. 16,000
            </p>
          </div>
        </div>

        <div className="relative scale-[1.28]  sm:scale-[1] sm:w-[90%] lg:w-[70%] flex flex-col items-center justify-center ">
          <img
            src="https://res.cloudinary.com/dtg1mnp9u/image/upload/v1728220934/prize_zj030k.webp"
            alt="Prizes"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  )
}

export default Prize
