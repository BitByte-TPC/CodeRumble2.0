function Prize() {
  return (
    <>
      <div className="flex flex-col items-center w-full gap-4 xs:gap-0 justify-center mx-auto mt-20 sm:mt-28 xl:mt-[12rem]">
        <div className="flex flex-col 2k:gap-8"> 
          <div>
            <h1 className="text-[2rem] md:text-[3.5rem] lg:text-[5vw] 2k:text-9xl font-extrabold text-center w-full">
              Exciting Prizes!
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
  );
}

export default Prize;
