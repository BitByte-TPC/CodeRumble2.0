"use client"

import { useEffect } from "react"
import Lenis from "lenis"

// Lenis drives the page's scroll for the whole app. It is started here, in the
// one client boundary the page has, so the sections below can stay server
// components.
export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = new Lenis()

    // The frame loop has to be torn down with the instance, not left running:
    // in development every hot update remounts this effect, and a loop that
    // outlives its Lenis goes on calling raf() on a destroyed instance while
    // the new one runs beside it.
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    })

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
