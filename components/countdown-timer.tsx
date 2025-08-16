"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

function getNextIndependenceDay(): Date {
  const now = new Date()
  const year = now.getFullYear()
  let target = new Date(year, 7, 15, 0, 0, 0)
  if (now.getTime() > target.getTime()) {
    target = new Date(year + 1, 7, 15, 0, 0, 0)
  }
  return target
}

function getTimeRemaining() {
  const targetDate = getNextIndependenceDay()
  const now = new Date()
  const totalMs = Math.max(0, targetDate.getTime() - now.getTime())
  const totalSec = Math.floor(totalMs / 1000)

  const days = Math.floor(totalSec / 86400)
  const hours = Math.floor((totalSec % 86400) / 3600)
  const minutes = Math.floor((totalSec % 3600) / 60)
  const seconds = totalSec % 60

  return { total: totalMs, days, hours, minutes, seconds }
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => setTimeLeft(getTimeRemaining()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {units.map((unit) => (
        <Card key={unit.label} className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 text-center">
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-foreground font-semibold text-lg">{unit.label}</div>
        </Card>
      ))}
    </div>
  )
}
