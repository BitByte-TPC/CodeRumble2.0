"use client"

import { useState, useEffect, useRef } from "react"
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
  targetPosition?: BeetlePosition
  rotation: number
  isFlying: boolean
  isWandering: boolean
  velocity: { x: number; y: number }
  lastMovementTime: number
  wingFlapPhase: number
}

interface PageBeetlesProps {
  pageType: "main" | "about"
  beetleCount?: number
}

const PageBeetles = ({ pageType, beetleCount = 2 }: PageBeetlesProps) => {
  const getInitialPositions = (): Beetle[] => {
    if (pageType === "main") {
      return [
        {
          id: 1,
          position: { x: 15, y: 20 },
          rotation: Math.random() * 360,
          isFlying: false,
          isWandering: false,
          velocity: { x: 0, y: 0 },
          lastMovementTime: Date.now(),
          wingFlapPhase: 0
        },
        {
          id: 2,
          position: { x: 75, y: 30 },
          rotation: Math.random() * 360,
          isFlying: false,
          isWandering: false,
          velocity: { x: 0, y: 0 },
          lastMovementTime: Date.now(),
          wingFlapPhase: Math.PI / 2
        }
      ]
    } else {
      return [
        {
          id: 1,
          position: { x: 10, y: 15 },
          rotation: Math.random() * 360,
          isFlying: false,
          isWandering: false,
          velocity: { x: 0, y: 0 },
          lastMovementTime: Date.now(),
          wingFlapPhase: 0
        },
        {
          id: 2,
          position: { x: 80, y: 25 },
          rotation: Math.random() * 360,
          isFlying: false,
          isWandering: false,
          velocity: { x: 0, y: 0 },
          lastMovementTime: Date.now(),
          wingFlapPhase: Math.PI / 2
        },
        {
          id: 3,
          position: { x: 60, y: 80 },
          rotation: Math.random() * 360,
          isFlying: false,
          isWandering: false,
          velocity: { x: 0, y: 0 },
          lastMovementTime: Date.now(),
          wingFlapPhase: Math.PI
        },
      ]
    }
  }

  const [beetles, setBeetles] = useState<Beetle[]>(getInitialPositions())
  const animationFrameRef = useRef<number>()
  const wanderIntervalRef = useRef<NodeJS.Timeout>()

  // Calculate rotation angle based on movement direction
  const calculateRotation = (from: BeetlePosition, to: BeetlePosition): number => {
    const dx = to.x - from.x
    const dy = to.y - from.y
    // Calculate angle in degrees (0° is pointing right, positive is clockwise)
    // Adjust by -90 to make 0° point upward (beetle's natural orientation)
    return (Math.atan2(dy, dx) * 180) / Math.PI + 90
  }

  // Get a panic escape position (away from click point)
  const getEscapePosition = (currentPos: BeetlePosition, clickPos?: BeetlePosition): BeetlePosition => {
    // Calculate direction away from click (or random if no click position)
    const escapeAngle = clickPos
      ? Math.atan2(currentPos.y - clickPos.y, currentPos.x - clickPos.x)
      : Math.random() * Math.PI * 2

    // Escape distance between 25-40% of container
    const escapeDistance = 25 + Math.random() * 15

    // Calculate new position
    let newX = currentPos.x + Math.cos(escapeAngle) * escapeDistance
    let newY = currentPos.y + Math.sin(escapeAngle) * escapeDistance

    // Add some randomness to make it feel more natural
    newX += (Math.random() - 0.5) * 10
    newY += (Math.random() - 0.5) * 10

    // Keep within bounds with some margin
    newX = Math.max(5, Math.min(95, newX))
    newY = Math.max(5, Math.min(95, newY))

    return { x: newX, y: newY }
  }

  // Get a small wandering position nearby
  const getWanderPosition = (currentPos: BeetlePosition): BeetlePosition => {
    // Small movement radius (3-8% of container)
    const wanderDistance = 3 + Math.random() * 5
    const wanderAngle = Math.random() * Math.PI * 2

    let newX = currentPos.x + Math.cos(wanderAngle) * wanderDistance
    let newY = currentPos.y + Math.sin(wanderAngle) * wanderDistance

    // Keep within bounds
    newX = Math.max(5, Math.min(95, newX))
    newY = Math.max(5, Math.min(95, newY))

    return { x: newX, y: newY }
  }

  // Handle beetle click - panic escape behavior
  const handleBeetleClick = (beetleId: number, event?: React.MouseEvent) => {
    setBeetles((prevBeetles) =>
      prevBeetles.map((beetle) => {
        if (beetle.id === beetleId && !beetle.isFlying) {
          // Get click position relative to container if available
          const clickPos = event ? {
            x: (event.clientX / window.innerWidth) * 100,
            y: (event.clientY / window.innerHeight) * 100
          } : undefined

          const escapePosition = getEscapePosition(beetle.position, clickPos)
          const newRotation = calculateRotation(beetle.position, escapePosition)

          // Calculate velocity for the escape
          const dx = escapePosition.x - beetle.position.x
          const dy = escapePosition.y - beetle.position.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Set landing timeout
          setTimeout(() => {
            setBeetles((prev) =>
              prev.map((b) =>
                b.id === beetleId
                  ? {
                    ...b,
                    isFlying: false,
                    targetPosition: undefined,
                    velocity: { x: 0, y: 0 },
                    lastMovementTime: Date.now()
                  }
                  : b
              )
            )
          }, 5000) // Increased flight duration to match slower speed

          return {
            ...beetle,
            targetPosition: escapePosition,
            rotation: newRotation,
            isFlying: true,
            isWandering: false,
            velocity: { x: dx / distance * 0.8, y: dy / distance * 0.8 }, // Decreased speed
            lastMovementTime: Date.now()
          }
        }
        return beetle
      })
    )
  }

  // Smooth animation for beetles including wing flapping and idle movements
  useEffect(() => {
    const animate = () => {
      setBeetles((prevBeetles) =>
        prevBeetles.map((beetle) => {
          const updatedBeetle = { ...beetle }

          // Update wing flap phase for all beetles
          updatedBeetle.wingFlapPhase += beetle.isFlying ? 0.6 : beetle.isWandering ? 0.3 : 0.1

          // Add subtle idle movements for stationary beetles
          if (!beetle.isFlying && !beetle.isWandering) {
            // Small body wobble
            const wobbleAmount = Math.sin(Date.now() / 1000 + beetle.id) * 2
            const turnAmount = Math.sin(Date.now() / 2000 + beetle.id * 2) * 3
            updatedBeetle.rotation = beetle.rotation + wobbleAmount + turnAmount
          }

          return updatedBeetle
        })
      )
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Random wandering behavior
  useEffect(() => {
    wanderIntervalRef.current = setInterval(() => {
      setBeetles((prevBeetles) => {
        const updatedBeetles = [...prevBeetles]

        // Each beetle has a chance to start wandering
        updatedBeetles.forEach((beetle, index) => {
          const timeSinceLastMove = Date.now() - beetle.lastMovementTime

          // Only wander if not flying and hasn't moved recently
          if (!beetle.isFlying && !beetle.isWandering && timeSinceLastMove > 3000) {
            if (Math.random() > 0.6) { // 40% chance to wander
              const wanderPosition = getWanderPosition(beetle.position)
              const newRotation = calculateRotation(beetle.position, wanderPosition)

              updatedBeetles[index] = {
                ...beetle,
                targetPosition: wanderPosition,
                rotation: newRotation,
                isWandering: true,
                lastMovementTime: Date.now()
              }

              // Stop wandering after movement
              setTimeout(() => {
                setBeetles((prev) =>
                  prev.map((b) =>
                    b.id === beetle.id
                      ? {
                        ...b,
                        isWandering: false,
                        targetPosition: undefined,
                        position: b.targetPosition || b.position
                      }
                      : b
                  )
                )
              }, 4000) // Match the new wandering duration
            }
          }
        })

        return updatedBeetles
      })
    }, 2000) // Check every 2 seconds

    return () => {
      if (wanderIntervalRef.current) {
        clearInterval(wanderIntervalRef.current)
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-100">
      {beetles.map((beetle) => (
        <motion.div
          key={beetle.id}
          className="absolute cursor-pointer pointer-events-auto"
          style={{
            left: `${beetle.position.x}%`,
            top: `${beetle.position.y}%`,
          }}
          animate={{
            left: beetle.targetPosition ? `${beetle.targetPosition.x}%` : `${beetle.position.x}%`,
            top: beetle.targetPosition ? `${beetle.targetPosition.y}%` : `${beetle.position.y}%`,
            rotate: beetle.rotation,
          }}
          transition={{
            left: {
              duration: beetle.isFlying ? 5 : beetle.isWandering ? 4 : 0.3, // Increased duration for wandering
              type: beetle.isFlying ? "spring" : "tween",
              stiffness: beetle.isFlying ? 30 : 200,
              damping: beetle.isFlying ? 25 : 30,
              ease: beetle.isWandering ? "easeInOut" : undefined
            },
            top: {
              duration: beetle.isFlying ? 5 : beetle.isWandering ? 4 : 0.3, // Increased duration for wandering
              type: beetle.isFlying ? "spring" : "tween",
              stiffness: beetle.isFlying ? 30 : 200,
              damping: beetle.isFlying ? 25 : 30,
              ease: beetle.isWandering ? "easeInOut" : undefined
            },
            rotate: {
              duration: beetle.isFlying ? 0.8 : beetle.isWandering ? 1.5 : 0.5,
              type: "spring",
              stiffness: beetle.isFlying ? 80 : 100,
              damping: 20,
            }
          }}
          onClick={(e) => handleBeetleClick(beetle.id, e)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onAnimationComplete={() => {
            if (beetle.targetPosition && !beetle.isFlying) {
              setBeetles(prev => prev.map(b =>
                b.id === beetle.id
                  ? { ...b, position: beetle.targetPosition!, targetPosition: undefined }
                  : b
              ))
            }
          }}
        >
          {/* Beetle with rotation and scaling effects */}
          <div className="relative" style={{ transform: "translate(-50%, -50%)" }}>
            {/* Shadow */}
            <motion.div
              className="absolute w-12 h-12 bg-black/15 rounded-full blur-lg"
              style={{
                left: "50%",
                bottom: beetle.isFlying ? "-20px" : "-5px",
                transform: "translateX(-50%)",
              }}
              animate={{
                scale: beetle.isFlying ? [0.8, 1.2, 0.8] : 1,
                opacity: beetle.isFlying ? [0.1, 0.05, 0.1] : 0.15,
              }}
              transition={{
                duration: 2,
                repeat: beetle.isFlying ? Infinity : 0,
              }}
            />

            {/* Wing flapping effect for all states */}
            <motion.div
              animate={{
                y: beetle.isFlying
                  ? [-3, -12, -3]
                  : beetle.isWandering
                    ? [-1, -3, -1]
                    : [0, -0.5, 0],
                // Removed scale animation here to keep size consistent
                rotateY: Math.sin(beetle.wingFlapPhase) * (beetle.isFlying ? 15 : beetle.isWandering ? 8 : 3)
              }}
              transition={{
                y: {
                  duration: beetle.isFlying ? 0.4 : beetle.isWandering ? 0.8 : 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                // Removed scale transition here
                rotateY: {
                  duration: 0.1,
                  ease: "linear"
                }
              }}
            >
              <Image
                src={beetle.isFlying ? bugGif : bugGif}
                alt={beetle.isFlying ? "Flying Beetle" : "Static Beetle"}
                width={180} // Fixed width
                height={180} // Fixed height
                className={beetle.isFlying ? "drop-shadow-xl" : "drop-shadow-md"}
                style={{
                  objectFit: "contain",
                  filter: beetle.isFlying
                    ? "brightness(1.1) contrast(1.1)"
                    : beetle.isWandering
                      ? "brightness(1.05)"
                      : "brightness(1)",
                  transition: "all 0.5s ease"
                }}
                unoptimized={beetle.isFlying}
              />
            </motion.div>

            {/* Panic glow effect when flying */}
            {beetle.isFlying && (
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, #B1EA0B 0%, transparent 30%)`,
                  filter: "blur(16px)"
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.2, 0.6],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
              />
            )}

            {/* Motion blur trail when escaping */}
            {beetle.isFlying && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`trail-${beetle.id}-${i}`}
                    className="absolute rounded-full bg-black/10"
                    style={{
                      left: "50%",
                      top: "50%",
                      width: `${60 - i * 10}px`,
                      height: `${60 - i * 10}px`,
                      transform: "translate(-50%, -50%)"
                    }}
                    animate={{
                      x: -beetle.velocity.x * (5 + i * 3),
                      y: -beetle.velocity.y * (5 + i * 3),
                      opacity: [0.3 - i * 0.07, 0],
                      scale: [1, 0.7],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.05,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Interactive tooltip */}
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900/90 to-gray-800/90 text-white rounded-lg px-2 py-1 text-xs font-medium opacity-0 pointer-events-none shadow-lg whitespace-nowrap z-10"
              whileHover={{ opacity: 1, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {beetle.isFlying ? "Ahhh! 😱" : beetle.isWandering ? "Just strolling... 🚶" : "Click me! 👆"}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900/90"></div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default PageBeetles
