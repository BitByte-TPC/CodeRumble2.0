"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import cr3Logo from "@/assets/cr3.0.svg"

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact us" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [clickedItem, setClickedItem] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false) // New state for mobile detection

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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed for your 'md'
    };

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize);
    handleScroll()
    handleResize(); // Initial check
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize);
    }
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
      {/* Cursor following bulge effect - Only show if not mobile */}
      {!isMobile && isHovering && ( // Conditionally render
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
                className={`relative font-mabry px-6 py-2 text-lg font-extrabold transition-all duration-300 rounded-full ${
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
            {/* Mobile menu button code */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile menu code */}
    </motion.nav>
  )
}
