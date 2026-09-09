"use client"

import { useEffect, useRef, useState } from "react"

const COLUMN_COUNT = 40
const ERASE_RADIUS_PX = 38
const REAPPEAR_MS = 450

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

// Exact dot-matrix pattern from the Figma "Group 10" punch-card strip
// (node 560:298), decoded row by row from its per-dot coordinates.
// The strip is rotated 180deg to match how it sits in the design.
const ROWS: number[][] = [
  [2, 5, 7, 11, 15, ...range(17, 39)],
  [1, 3, 6, 9, 12, 13, 16, ...range(17, 39)],
  [0, 2, 3, 5, 7, 8, 9, 11, 12, 15, 16, ...range(17, 39)],
  range(0, 39),
  range(0, 39),
]

const TOTAL_DOTS = ROWS.reduce((sum, row) => sum + row.length, 0)
const STAGGER_MS = 900 / TOTAL_DOTS

export default function PunchCardStrip() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const erasedRef = useRef<Set<number>>(new Set())
  const pointerRef = useRef<{ x: number; y: number } | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Cursor "black hole": dots within ERASE_RADIUS_PX of the pointer vanish
  // instantly, and only start fading back in once the cursor moves away —
  // that asymmetry (instant hide, animated show) is what produces the
  // trailing effect when the cursor moves quickly.
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const applyErase = () => {
      rafRef.current = null
      const pointer = pointerRef.current

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return
        const rect = dot.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const within =
          pointer !== null &&
          Math.hypot(pointer.x - cx, pointer.y - cy) < ERASE_RADIUS_PX

        const wasErased = erasedRef.current.has(i)
        if (within && !wasErased) {
          erasedRef.current.add(i)
          dot.style.transitionDelay = "0ms"
          dot.style.transitionDuration = "0ms"
          dot.style.opacity = "0"
          dot.style.transform = "scale(0)"
        } else if (!within && wasErased) {
          erasedRef.current.delete(i)
          dot.style.transitionDelay = "0ms"
          dot.style.transitionDuration = `${REAPPEAR_MS}ms`
          dot.style.opacity = "1"
          dot.style.transform = "scale(1)"
        }
      })
    }

    const scheduleUpdate = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(applyErase)
      }
    }

    const handleMove = (e: PointerEvent) => {
      pointerRef.current = { x: e.clientX, y: e.clientY }
      scheduleUpdate()
    }
    const handleLeave = () => {
      pointerRef.current = null
      scheduleUpdate()
    }

    grid.addEventListener("pointermove", handleMove)
    grid.addEventListener("pointerleave", handleLeave)
    return () => {
      grid.removeEventListener("pointermove", handleMove)
      grid.removeEventListener("pointerleave", handleLeave)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  let dotIndex = 0

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#060606] px-[5.07%] py-[3.7%]"
      aria-hidden="true"
    >
      {/* Gaps are in vw, not px: the dots are sized by what 40 columns leave
          over, so a fixed gap eats the whole row on a phone. */}
      <div ref={gridRef} className="flex rotate-180 flex-col gap-[0.97vw]">
        {ROWS.map((columns, rowI) => (
          <div
            key={rowI}
            className="grid gap-x-[0.56vw]"
            style={{ gridTemplateColumns: `repeat(${COLUMN_COUNT}, 1fr)` }}
          >
            {range(0, COLUMN_COUNT - 1).map((col) => {
              const on = columns.includes(col)
              if (!on) return <div key={col} className="aspect-square" />

              const i = dotIndex++
              const delay = visible ? (i * STAGGER_MS).toFixed(0) : "0"
              return (
                <div
                  key={col}
                  ref={(el) => {
                    dotRefs.current[i] = el
                  }}
                  className={`aspect-square rounded-full bg-[#e4e1dc] transition-[transform,opacity] ease-out ${
                    visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${delay}ms`,
                    transitionDuration: "500ms",
                  }}
                />
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
