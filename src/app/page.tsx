"use client"
import About from "@/components/sections/About"
import Main from "@/components/sections/Main"
import Footer from "@/components/layout/Footer"
import Prizes from "@/components/Prizes"
import Lenis from "lenis"
import { useEffect } from "react"
import PageBeetles from '@/components/PageBeetles'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })
  return (
    <div>
      <section id="home" className="min-h-screen">
        <Main />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="prizes" className="min-h-screen">
        <Prizes />
      </section>
      <section id="contact" className="">
        <Footer />
      </section>
    </div>
  )
}
