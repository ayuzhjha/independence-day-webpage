"use client"

import { useEffect, useState } from "react"

interface FireworkProps {
  active: boolean
}

export default function FireworksDisplay({ active }: FireworkProps) {
  const [fireworks, setFireworks] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    if (active) {
      const newFireworks = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 60 + 20,
        delay: Math.random() * 2,
      }))
      setFireworks(newFireworks)

      setTimeout(() => setFireworks([]), 3000)
    }
  }, [active])

  if (!active) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
            animationDelay: `${firework.delay}s`,
          }}
        >
          {/* Main firework burst */}
          <div className="relative">
            <div className="w-4 h-4 bg-primary rounded-full firework"></div>
            <div
              className="w-3 h-3 bg-secondary rounded-full firework absolute top-0.5 left-0.5"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-yellow-400 rounded-full firework absolute top-1 left-1"
              style={{ animationDelay: "0.2s" }}
            ></div>

            {/* Sparkles around the firework */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full sparkle"
                style={{
                  top: `${Math.sin((i * 60 * Math.PI) / 180) * 20 + 8}px`,
                  left: `${Math.cos((i * 60 * Math.PI) / 180) * 20 + 8}px`,
                  animationDelay: `${0.3 + i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
