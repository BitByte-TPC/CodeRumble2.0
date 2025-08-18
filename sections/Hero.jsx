"use client"
import { useState, useRef } from "react"
import { HeroFooter, Lumi, Navbar } from "../components"

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef(null)

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (e) => {
    setIsHovered(true)
    handleMouseMove(e)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[100svh]">
        <div className="flex-grow flex flex-col items-center justify-center">
          <div
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dtg1mnp9u/image/upload/v1728221525/heroLogo_dvbhar.webp)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          >
            <div className="flex flex-col items-center gap-6">
              <Lumi />
            </div>
          </div>
          <button
            ref={buttonRef}
            onClick={() =>
              (window.location.href = "https://example.com/pre-register")
            }
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bg-white px-8 py-3 rounded-xl text-black font-bold transition-transform duration-300 z-50 mb-4 w-80 h-22 absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xl overflow-hidden"
            style={{
              filter: isHovered ? "blur(0.5px)" : "none",
              transition: "filter 0.3s ease",
            }}
          >
            <div className="relative z-10">Pre Register Now</div>
            {isHovered && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, 
                  transparent 0%, 
                  transparent 30%, 
                  rgba(94, 47, 124, 0.1) 50%, 
                  rgba(94, 47, 124, 0.3) 70%, 
                  rgba(94, 47, 124, 0.5) 100%)`,
                  opacity: 1,
                  transition: "opacity 0.3s ease",
                }}
              />
            )}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 120 }).map((_, i) => {
                  const row = Math.floor(i / 12)
                  const col = i % 12
                  const x = (col * 320) / 12
                  const y = (row * 88) / 10
                  const distance = Math.sqrt(
                    Math.pow(x + 13.33 - mousePos.x, 2) +
                      Math.pow(y + 4.4 - mousePos.y, 2)
                  )
                  const maxDistance = 200
                  const intensity = Math.max(0, 1 - distance / maxDistance)
                  const delay = distance / 500

                  return (
                    <div
                      key={i}
                      className="absolute border border-[#5E2F7C] border-opacity-20"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        width: "26.67px",
                        height: "8.8px",
                        opacity: intensity * 0.6,
                        transform: `scale(${0.8 + intensity * 0.4})`,
                        animation: `pixelate 0.6s ease-out ${delay}s both`,
                        backgroundColor: `rgba(229, 90, 43, ${
                          intensity * 0.2
                        })`,
                      }}
                    />
                  )
                })}
              </div>
            )}
            <style jsx>{`
              @keyframes pixelate {
                0% {
                  opacity: 0;
                  transform: scale(0.5);
                  border-width: 0px;
                }
                50% {
                  opacity: 1;
                  transform: scale(1.1);
                  border-width: 2px;
                }
                100% {
                  opacity: 0.6;
                  transform: scale(1);
                  border-width: 1px;
                }
              }
            `}</style>
          </button>
          <button
            onClick={() =>
              (window.location.href = "https://www.techgig.com/coderumble2.0")
            }
            className="md:hidden bg-[#1A1A1A] px-8 py-3 rounded-full text-white font-bold hover:bg-[#282828] hover:scale-105 transition-transform duration-300 z-50"
          >
            Register Now
          </button>
        </div>
        <div className="mt-auto mb-4">
          <HeroFooter />
        </div>
      </div>
    </>
  )
}

export default Hero
