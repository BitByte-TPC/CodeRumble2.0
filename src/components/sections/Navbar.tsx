"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import cr3Logo from "@/assets/cr3.0.svg"

const navItems = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "contact", label: "contact us" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [clickedItem, setClickedItem] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    setClickedItem(sectionId)

    // Remove the bulge effect after animation
    setTimeout(() => setClickedItem(null), 800)

    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "contact"]
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop - 150) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      ref={navRef}
      className="fixed top-4 left-0 right-0 z-50 px-4 bg-[#4159F5]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Cursor following bulge effect */}
      {isHovering && (
        <motion.div
          className="absolute bg-[#5066FF]/30 rounded-full pointer-events-none z-0"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.8,
            x: mousePosition.x - 100,
            y: mousePosition.y - 40,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 40,
            opacity: { duration: 0.15 },
          }}
          style={{
            width: 200,
            height: 80,
            filter: "blur(20px)",
          }}
        />
      )}

      {/* Main navbar container with tape design */}
      <div className="relative">
        {/* Main navbar - clean rectangular design */}
        <div className="h-12 relative">
          {/* Wavy bottom edge using CSS */}
          <div
            className="absolute bottom-0 left-0 w-full h-1 bg-[#4159F5]"
            style={{
              clipPath:
                "polygon(0% 0%, 10% 100%, 20% 0%, 30% 100%, 40% 0%, 50% 100%, 60% 0%, 70% 100%, 80% 0%, 90% 100%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>

        {/* Logo - bigger size to create bulging effect */}
        <motion.div
          className="absolute -top-3 left-6 lg:left-12"
          whileHover={{ scale: 1.1, rotateZ: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="cursor-pointer relative z-10 p-2">
            <Image
              src={cr3Logo}
              alt="CR 3.0 Logo"
              width={56}
              height={56}
              className="w-14 h-14"
            />
          </div>
        </motion.div>

        {/* Navigation items container */}
        <div className="absolute inset-0 flex items-center justify-end pr-6 lg:pr-12 z-20">
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-2 text-lg font-bold transition-all duration-300 rounded-full ${
                  activeSection === item.id
                    ? "text-[#BCFF06]"
                    : "text-white hover:text-[#BCFF06]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{item.label}</span>

                {/* Active indicator pill */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-[-8] bg-[#4159F5] rounded-[20%] -z-10"
                    layoutId="activePill"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                {/* Click bulge effect - outward bulging */}
                {clickedItem === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-[#5066FF]/20 rounded-full border-2 border-[#BCFF06]/30"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    exit={{ scale: 1, opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                )}

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-full -z-20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex justify-center items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="absolute h-0.5 w-6 bg-white transform origin-center"
                  style={{ top: "6px", left: "0px" }}
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="absolute h-0.5 w-6 bg-white"
                  style={{ top: "12px", left: "0px" }}
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="absolute h-0.5 w-6 bg-white transform origin-center"
                  style={{ top: "18px", left: "0px" }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 bg-[#4159F5]/95 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-6 py-4 rounded-xl text-lg font-bold transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-[#2A3BCC] text-[#BCFF06] shadow-lg"
                      : "text-white hover:bg-white/10 hover:text-[#BCFF06]"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
