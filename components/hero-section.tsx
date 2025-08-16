"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onFireworks: () => void
}

export default function HeroSection({ onFireworks }: HeroSectionProps) {
  const [currentText, setCurrentText] = useState(0)
  const heroTexts = [
    "Freedom in Mind, Faith in Words, Pride in Hearts",
    "Unity in Diversity, Strength in Brotherhood",
    "From Struggle to Glory, From Dreams to Reality",
    "Celebrating 78 Years of Independence",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-white/10 to-green-600/30">
        <div className="absolute inset-0 bg-[url('/indian-flag-particles.png')] bg-no-repeat bg-cover bg-center bg-fixed opacity-20 animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-green-400 rounded-full animate-bounce opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-transparent bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text animate-pulse mb-6 break-words">
            HAPPY INDEPENDENCE DAY
          </h1>
          <div className="flex items-center justify-center">
            <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-white font-semibold fade-in-up break-words px-2 text-stroke-soft text-contrast-shadow">
              {heroTexts[currentText]}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-4 md:gap-6 mb-12">
          <Button
            onClick={onFireworks}
            className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 rounded-full text-base sm:text-lg md:text-xl shadow-2xl transform hover:scale-105 md:hover:scale-110 transition-all duration-300 animate-pulse whitespace-normal break-words"
          >
            🎆 CELEBRATE WITH FIREWORKS 🎆
          </Button>
          <Button
            onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-12 rounded-full text-base sm:text-lg md:text-xl shadow-2xl transform hover:scale-105 md:hover:scale-110 transition-all duration-300 whitespace-normal break-words"
          >
            📚 EXPLORE HISTORY 📚
          </Button>
        </div>

        
      </div>
    </div>
  )
}
