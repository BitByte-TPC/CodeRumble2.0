"use client"
import About from '@/components/sections/About'
import Main from '@/components/sections/Main'
import Footer from '@/components/layout/Footer'
import Lenis from 'lenis';
import { useEffect } from 'react';


export default function Home() {
  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  })
  return (
    <div>
      <section id="home" className="min-h-screen">
        <Main />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="contact" className="min-h-screen">
        <Footer />
      </section>
    </div>
  );
}