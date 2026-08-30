"use client"

import { useEffect, useRef, useState } from "react"

// A teletype rate rather than a human one: two glyphs every 40ms reads as a
// machine printing a line, and puts the ~320-character paragraph on screen in
// about six and a half seconds — slow enough to watch it print, fast enough
// that the paragraph is finished well inside the time it takes to read it.
const TICK_MS = 40
const CHARS_PER_TICK = 2

export default function TypewriterText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  // The reveal is triggered by the paragraph reaching the viewport, once.
  // Reduced motion still waits for that moment, it just arrives at the end of
  // the line instead of typing its way there.
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(text.length)
        } else {
          setStarted(true)
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [text])

  useEffect(() => {
    if (!started || count >= text.length) return
    const id = setTimeout(
      () => setCount((n) => Math.min(n + CHARS_PER_TICK, text.length)),
      TICK_MS
    )
    return () => clearTimeout(id)
  }, [started, count, text])

  // The untyped tail stays in the flow at zero opacity, so the paragraph
  // reserves its full height from the first frame, wraps identically at every
  // stage of the reveal, and still reads as one sentence to a screen reader or
  // a crawler. The caret is an ::after on the typed run — an empty inline box,
  // not an inline-block, so it adds no line-break opportunity mid-sentence.
  return (
    <p ref={ref} className={className}>
      <span className="typewriter">{text.slice(0, count)}</span>
      <span className="opacity-0">{text.slice(count)}</span>
    </p>
  )
}
