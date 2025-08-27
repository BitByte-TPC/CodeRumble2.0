"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import bugGif from "@/assets/bug.gif"
import beetleSvg from "@/assets/beetle.svg"

interface BeetlePosition {
  x: number // Percentage of container width
  y: number // Percentage of container height
}

interface Beetle {
  id: number
  position: BeetlePosition
  isFlying: boolean
}

interface PageBeetlesProps {
  pageType: "main" | "about"
  beetleCount?: number
}

const PageBeetles = ({ pageType, beetleCount = 3 }: PageBeetlesProps) => {
  const getInitialPositions = (): Beetle[] => {
    if (pageType === "main") {
      return [
        { id: 1, position: { x: 15, y: 20 }, isFlying: false }, // Top left area
        { id: 2, position: { x: 75, y: 30 }, isFlying: false }, // Top right area
        { id: 3, position: { x: 45, y: 70 }, isFlying: false }, // Bottom center
      ]
    } else {
      return [
        { id: 1, position: { x: 10, y: 15 }, isFlying: false }, // Top left
        { id: 2, position: { x: 80, y: 25 }, isFlying: false }, // Top right
        { id: 3, position: { x: 60, y: 80 }, isFlying: false }, // Bottom right
      ]
    }
  }

  const [beetles, setBeetles] = useState<Beetle[]>(getInitialPositions())

  // Predefined positions for each page type (percentage-based)
  const getFlyPositions = (): BeetlePosition[] => {
    if (pageType === "main") {
      return [
        { x: 10, y: 20 },
        { x: 25, y: 15 },
        { x: 40, y: 25 },
        { x: 60, y: 18 },
        { x: 75, y: 30 },
        { x: 85, y: 25 },
        { x: 20, y: 45 },
        { x: 50, y: 40 },
        { x: 70, y: 50 },
        { x: 15, y: 65 },
        { x: 45, y: 70 },
        { x: 80, y: 75 },
        { x: 30, y: 85 },
        { x: 65, y: 80 },
        { x: 90, y: 60 },
      ]
    } else {
      return [
        { x: 5, y: 10 },
        { x: 20, y: 20 },
        { x: 40, y: 15 },
        { x: 65, y: 25 },
        { x: 85, y: 30 },
        { x: 15, y: 40 },
        { x: 35, y: 45 },
        { x: 55, y: 50 },
        { x: 75, y: 55 },
        { x: 25, y: 65 },
        { x: 50, y: 70 },
        { x: 80, y: 75 },
        { x: 10, y: 85 },
        { x: 60, y: 90 },
        { x: 90, y: 80 },
      ]
    }
  }

  const flyPositions = getFlyPositions()

  const handleBeetleClick = (beetleId: number) => {
    setBeetles((prevBeetles) =>
      prevBeetles.map((beetle) => {
        if (beetle.id === beetleId && !beetle.isFlying) {
          const currentPos = beetle.position
          let newPosition

          do {
            newPosition =
              flyPositions[Math.floor(Math.random() * flyPositions.length)]
          } while (
            newPosition.x === currentPos.x &&
            newPosition.y === currentPos.y
          )

          setTimeout(() => {
            setBeetles((prev) =>
              prev.map((b) =>
                b.id === beetleId ? { ...b, isFlying: false } : b
              )
            )
          }, 2000)

          return { ...beetle, position: newPosition, isFlying: true }
        }
        return beetle
      })
    )
  }

  // Auto-fly beetles occasionally
  useEffect(() => {
    const autoFlyInterval = setInterval(() => {
      const randomBeetleId = Math.floor(Math.random() * beetleCount) + 1
      const randomBeetle = beetles.find(
        (beetle) => beetle.id === randomBeetleId
      )

      if (randomBeetle && !randomBeetle.isFlying && Math.random() > 0.8) {
        handleBeetleClick(randomBeetleId)
      }
    }, 7000)

    return () => clearInterval(autoFlyInterval)
  }, [beetles, beetleCount])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-100">
      {beetles.map((beetle) => (
        <motion.div
          key={beetle.id}
          className="absolute cursor-pointer pointer-events-auto"
          style={{
            left: `${beetle.position.x}%`,
            top: `${beetle.position.y}%`,
            transform: "translate(-50%, -50%)", // Center the beetle on the position
          }}
          animate={{
            left: `${beetle.position.x}%`,
            top: `${beetle.position.y}%`,
          }}
          transition={{
            duration: beetle.isFlying ? 2.5 : 0.3,
            type: "spring",
            stiffness: beetle.isFlying ? 60 : 300,
            damping: beetle.isFlying ? 25 : 30,
          }}
          onClick={() => handleBeetleClick(beetle.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Beetle with consistent sizing */}
          <div className="relative">
            <Image
              src={beetle.isFlying ? bugGif : beetleSvg}
              alt={beetle.isFlying ? "Flying Beetle" : "Static Beetle"}
              width={100}
              height={100}
              className={
                beetle.isFlying
                  ? "scale-[250%] rotate-45 duration-500"
                  : "w-25 h-25"
              }
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain", // Maintain aspect ratio within fixed dimensions
              }}
              unoptimized={beetle.isFlying}
            />

            {/* Flying indicator */}
            {beetle.isFlying && (
              <motion.div
                className="absolute -inset-2 border-2 border-[#BCFF06] rounded-full opacity-60"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.2, 0.6],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />
            )}

            {/* Tooltip */}
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white rounded-lg px-2 py-1 text-xs font-bold opacity-0 pointer-events-none shadow-lg whitespace-nowrap"
              whileHover={{ opacity: 1, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {beetle.isFlying ? "Flying! 🪲" : "Click me! 🪲"}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </motion.div>

            {/* Flying trail */}
            {beetle.isFlying && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`trail-${beetle.id}-${i}`}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor:
                        beetle.id === 1
                          ? "#BCFF06"
                          : beetle.id === 2
                          ? "#4159F5"
                          : "#FF6B6B",
                      left: "50%",
                      top: "50%",
                    }}
                    animate={{
                      x: [0, -10 - i * 5, -20 - i * 8],
                      y: [
                        0,
                        Math.sin(Date.now() / 300 + i + beetle.id) * 2,
                        -3 - i * 1.5,
                      ],
                      opacity: [0.8, 0.4, 0],
                      scale: [1, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default PageBeetles
