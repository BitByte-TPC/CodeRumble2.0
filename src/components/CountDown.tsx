"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function msToParts(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000))
  const days = Math.floor(total / 86400)
  const hours = Math.floor((total % 86400) / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60
  return { days, hours, minutes, seconds }
}

export default function Countdown({ targetMs }: { targetMs?: number }) {
  const defaultTarget = Date.now() + 10 * 24 * 60 * 60 * 1000 // 10 days from now
  const target = targetMs ?? defaultTarget
  const [remaining, setRemaining] = useState<number>(Math.max(0, target - Date.now()))

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, target - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  const { days, hours, minutes, seconds } = msToParts(remaining)

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      aria-live="polite"
      className="font-cocogoose bg-[#0F0F0F]/70 border border-[#BCFF06]/25 rounded-full px-3 py-2 flex items-center gap-3 text-white"
    >
      <div className="flex items-center gap-2">
        <div className="text-xs opacity-70 text-center">DAYS</div>
        <div className="text-lg md:text-2xl font-extrabold">{days}</div>
      </div>
      <div className="opacity-50">:</div>
      <div className="flex items-center gap-2">
        <div className="text-xs opacity-70 text-center">HRS</div>
        <div className="text-lg md:text-2xl font-extrabold">{String(hours).padStart(2, "0")}</div>
      </div>
      <div className="opacity-50">:</div>
      <div className="flex items-center gap-2">
        <div className="text-xs opacity-70 text-center">MIN</div>
        <div className="text-lg md:text-2xl font-extrabold">{String(minutes).padStart(2, "0")}</div>
      </div>
      <div className="opacity-50">:</div>
      <div className="flex items-center gap-2 pr-1">
        <div className="text-xs opacity-70 text-center">SEC</div>
        <div className="text-lg md:text-2xl font-extrabold">{String(seconds).padStart(2, "0")}</div>
      </div>
    </motion.div>
  )
}