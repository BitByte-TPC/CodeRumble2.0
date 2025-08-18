import React from "react"
import { Carousel } from "@/components"

function Gallery() {
  return (
    <>
      <div className="flex flex-col items-center w-full gap-8 xs:gap-20 justify-center mx-auto my-20 sm:my-28 xl:mt-0 xl:mb-[8rem]">
        <div className="flex flex-col items-center">
          <h1 className="text-[2rem] md:text-[3.5rem] lg:text-[5vw] 2k:text-9xl font-extrabold text-center w-full mb-2">
            Gallery
          </h1>
          <p className="text-[0.7rem] md:text-[1rem] mt-1">
            (CODE RUMBLE 2.0 - 2024)
          </p>
        </div>
        <Carousel />
      </div>
    </>
  )
}

export default Gallery
