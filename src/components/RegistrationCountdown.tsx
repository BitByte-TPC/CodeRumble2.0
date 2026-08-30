"use client"

import { useEffect, useState } from "react"

// IST is a fixed UTC+5:30 with no DST, so both ends of the window are plain
// UTC instants: registrations open 30 Aug 2026, 6pm IST, and the clock starts
// running 26 Aug 2026, 5pm IST.
const OPENS_AT = Date.UTC(2026, 7, 31, 12, 30)
const STARTS_AT = Date.UTC(2026, 7, 26, 11, 30)
const FULL_SPAN_MS = OPENS_AT - STARTS_AT

// Clamped at both ends: the full span before the window opens, 00:00:00 once
// registrations are live. Hours run past 24 rather than rolling into days —
// the span is 97 hours, and the label asks for hh:mm:ss.
function remainingMs(now: number) {
  return Math.min(Math.max(OPENS_AT - now, 0), FULL_SPAN_MS)
}

function formatRemaining(ms: number) {
  const seconds = Math.floor(ms / 1000)
  return [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60]
    .map((part) => String(part).padStart(2, "0"))
    .join(":")
}

export default function RegistrationCountdown() {
  // Seeded with the full span so the server render and the first client render
  // agree; the real reading lands on the effect's opening tick.
  const [ms, setMs] = useState(FULL_SPAN_MS)

  useEffect(() => {
    const tick = () => setMs(remainingMs(Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  // The card, not the keypunch: same stock, radius, and shadow as the CTA it
  // replaces, but nothing here moves — it is a readout, not a control. The
  // label is ~2.5x the width of "Pre-register", so the type scales off the
  // viewport to keep it on one line beside the social tiles on a phone.
  return (
    <div
      role="timer"
      className="flex items-center justify-center rounded-[1.39vw] bg-[#060606] px-[3vw] py-[1.6vw] shadow-[2vw_1.6vw_11.4vw_0_rgba(0,0,0,0.45)]"
      style={{ fontSize: "min(2.5vw, 24px)" }}
    >
      <span className="whitespace-nowrap font-plex-mono font-medium text-[#e4e2dc]">
        Registrations Live in: {formatRemaining(ms)}
      </span>
    </div>
  )
}
