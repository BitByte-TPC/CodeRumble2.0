"use client"
import Image from "next/image"

export default function Sponsors() {
  const sponsors = [
    {
      name: "Sponsor: AlgoZenith",
      type: "Sponsor",
      logo: "/sponsors/algozenith.png",
    },
    {
      name: "Food Partner: Haji Basheer",
      type: "Food Partner",
      logo: "/sponsors/basheer.png",
    },
    {
      name: "Food Partner: Daluram",
      type: "Food Partner",
      logo: "/sponsors/daluram.png",
    },
    {
      name: "Food Partner: ONNI Pizza",
      type: "Food Partner",
      logo: "/sponsors/pizza.png",
    },
  ]

  return (
    <div
      className="min-h-screen flex justify-center py-10 md:py-20 px-4 relative overflow-hidden"
      id="sponsors"
    >
      <div className="w-full md:w-[80%] flex flex-col gap-10 md:gap-20 items-center">
        {/* Title */}
        <div className="flex flex-col gap-6 md:gap-8 w-full">
          <h1 className="text-white font-cocogoose text-3xl md:text-[44px] text-center mb-8">
            Our Amazing Sponsors and Partners
          </h1>
          <p className="font-mabry text-white text-lg md:text-xl text-center px-4 md:px-10 opacity-90">
            We are grateful to our sponsors and partners who make CodeRumble
            possible!
          </p>
        </div>

        {/* Sponsors Section */}
        <div className="w-full flex flex-col gap-8 md:gap-12">
          <div className="text-center">
            <h2 className="text-white font-cocogoose text-2xl md:text-3xl mb-6">
              Sponsors
            </h2>
            <div className="flex justify-center">
              {sponsors
                .filter((sponsor) => sponsor.type === "Sponsor")
                .map((sponsor, index) => (
                  <div
                    key={sponsor.name}
                    className="mx-4 h-[200px] md:h-[300px] lg:h-[400px] w-full relative"
                  >
                    <div
                      key={sponsor.name}
                      className={`absolute floating-sponsor floating-sponsor-${
                        index + 1
                      }`}
                      style={{
                        left: index === 0 ? "50%" : index === 1 ? "50%" : "80%",
                        top: index === 0 ? "50%" : index === 1 ? "75%" : "40%",
                        transform: "translate(-50%, -50%)",
                        animationDelay: `${(index + 1) * 0.5}s`,
                      }}
                    >
                      <div className="hover:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center gap-3">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44 flex items-center justify-center">
                          <Image
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            width={176}
                            height={176}
                            className="max-w-full max-h-full object-contain rounded-lg"
                          />
                        </div>
                        <p className="font-mabry text-white text-sm md:text-base font-medium text-center border rounded-full p-2 px-4 bg-secondary/80">
                          {sponsor.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Food Partners Section */}
          <div className="text-center">
            <h2 className="text-white font-cocogoose text-2xl md:text-3xl mb-6">
              Food Partners
            </h2>
            <div className="relative w-full max-w-4xl min-h-[350px] md:min-h-[400px] mx-auto">
              {sponsors
                .filter((sponsor) => sponsor.type === "Food Partner")
                .map((sponsor, index) => (
                  <div
                    key={sponsor.name}
                    className={`absolute floating-sponsor floating-sponsor-${
                      index + 2
                    }`}
                    style={{
                      left: index === 0 ? "20%" : index === 1 ? "50%" : "80%",
                      top: index === 0 ? "45%" : index === 1 ? "75%" : "40%",
                      transform: "translate(-50%, -50%)",
                      animationDelay: `${(index + 1) * 0.5}s`,
                    }}
                  >
                    <div className="hover:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3 md:p-4 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center gap-2">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-40 xl:h-40 flex items-center justify-center">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          width={160}
                          height={160}
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      </div>
                      <p className="font-mabry text-white text-xs sm:text-sm md:text-base font-medium text-center whitespace-nowrap border rounded-full p-1 px-2 bg-primary/80">
                        {sponsor.name}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Thank you message */}
        <div className="text-center">
          <p className="font-mabry text-white/80 text-base md:text-lg">
            Thank you for supporting the coding community!
          </p>
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
        }

        @keyframes floatReverse {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(20px);
          }
        }

        @keyframes floatSlow {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-15px) rotate(5deg);
          }
        }

        .floating-sponsor {
          animation-duration: 3s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .floating-sponsor-1 {
          animation-name: float;
        }

        .floating-sponsor-2 {
          animation-name: floatReverse;
          animation-duration: 4s;
        }

        .floating-sponsor-3 {
          animation-name: floatSlow;
          animation-duration: 5s;
        }

        .floating-sponsor-4 {
          animation-name: float;
          animation-duration: 3.5s;
        }

        @media (max-width: 768px) {
          .floating-sponsor {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            margin: 1rem auto;
            display: block;
          }
        }
      `}</style>
    </div>
  )
}
