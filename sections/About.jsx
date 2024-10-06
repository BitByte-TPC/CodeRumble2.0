import Image from "next/image";

const About = () => (
  <div className="flex flex-col items-center w-full gap-4 xs:gap-0 justify-center mx-auto my-20 sm:my-28 xl:my-[12rem]">
    <h1 className="text-[2rem] md:text-[3.5rem] lg:text-[5vw] 2k:text-9xl font-extrabold text-center w-full">
      What is Code Rumble 2.0?
    </h1>

    <div className="relative w-full sm:w-[90%] lg:w-[70%] aspect-[25/9] max-w-[1200px]">
      <Image
        src="https://res.cloudinary.com/dtg1mnp9u/image/upload/v1728221525/grid_d62wji.svg"
        alt="Background Grid"
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        priority={true}
      />
      <div className="absolute inset-[10%] flex items-center justify-center">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-[500] text-center text-[#FFFFFF80] overflow-y-auto max-h-full">
          {/* Large screen content */}
          <span className="hidden xs:inline">
            CodeRumble is the ultimate event for aspiring programmers to
            experience the exhilarating world of competitive programming. As a
            mock ICPC Regional Contest, we bring you a stimulating challenge
            that will push your coding skills to the limit. Unlock your
            problem-solving potential, tackle challenging algorithms, and rise
            to the top! Be a part of the coding extravaganza - CodeRumble awaits
            your coding prowess!
          </span>
          {/* Small screen content */}
          <span className="xs:hidden">
            CodeRumble 2.0 is the ultimate event for aspiring programmers. Test
            your skills with competitive programming challenges and rise to the
            top in this mock ICPC contest!
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default About;
