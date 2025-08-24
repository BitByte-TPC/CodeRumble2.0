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
      <Main/>
      <About/>
      <Footer/>
    </div>
  );
}
