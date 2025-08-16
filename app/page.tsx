"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import AnimatedFlag from "@/components/animated-flag"
import PatrioticQuotes from "@/components/patriotic-quotes"
import FireworksDisplay from "@/components/fireworks-display"
import HeroSection from "@/components/hero-section"
import TimelineSection from "@/components/timeline-section"
import CulturalShowcase from "@/components/cultural-showcase"
import PhotoGallery from "@/components/photo-gallery"
import CountdownTimer from "@/components/countdown-timer"
import AudioPlayer from "@/components/audio-player"

const navItems = [
  { label: "Home", id: "home" },
  { label: "Countdown", id: "countdown" },
  { label: "Flag", id: "flag" },
  { label: "Timeline", id: "timeline" },
  { label: "Gallery", id: "gallery" },
  { label: "Culture", id: "culture" },
  { label: "Stats", id: "stats" },
  { label: "Games", id: "games" },
]

export default function IndependenceDayPage() {
  const [fireworksActive, setFireworksActive] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    setTimeout(() => {
      const sections = document.querySelectorAll(".scroll-section")
      sections.forEach((section, index) => {
        observer.observe(section)
        if (index <= 2) {
          section.classList.add("visible")
        }
      })
    }, 500)

    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-section")
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section) => {
        const element = section as HTMLElement
        const sectionTop = element.offsetTop
        const sectionHeight = element.offsetHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const id = element.id
          const idx = navItems.findIndex((n) => n.id === id)
          if (idx !== -1) setCurrentSection(idx)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const triggerFireworks = () => {
    setFireworksActive(true)
    setTimeout(() => setFireworksActive(false), 5000)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF9933] via-white to-[#138808] bg-fixed overflow-hidden relative">
      {/* Fireworks Background */}
      <FireworksDisplay active={fireworksActive} />

      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20 w-[95%] max-w-3xl">
        <div className="flex items-center justify-between gap-3">
          <button
            className="md:hidden px-3 py-2 rounded-md text-white/80 hover:text-white hover:bg-white/10"
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            ☰ Menu
          </button>
          <div className="hidden md:flex gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentSection === index
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        {navOpen && (
          <div className="mt-2 flex flex-col md:hidden gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                  setNavOpen(false)
                }}
                className={`px-4 py-2 rounded-lg text-sm text-left font-medium transition-all duration-300 ${
                  currentSection === index
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="scroll-section min-h-screen relative visible">
        <HeroSection onFireworks={triggerFireworks} />
      </section>

      {/* Countdown Timer Section */}
      <section id="countdown" className="scroll-section py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 animate-pulse">
            🎉 Next Independence Day 🎉
          </h2>
          <CountdownTimer />
        </div>
      </section>

      {/* Interactive Flag & Audio Section */}
      <section id="flag" className="scroll-section py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <AnimatedFlag />
            </div>
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-orange-500/20 to-green-500/20 backdrop-blur-lg border border-white/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">🎵 National Anthem</h3>
                <AudioPlayer />
              </Card>
              <Card className="p-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20">
                <PatrioticQuotes />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="scroll-section py-20 px-4 relative z-10">
        <TimelineSection />
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="scroll-section py-20 px-4 relative z-10">
        <PhotoGallery />
      </section>

      {/* Cultural Showcase */}
      <section id="culture" className="scroll-section py-20 px-4 relative z-10">
        <CulturalShowcase />
      </section>

      {/* Statistics Section */}
      <section id="stats" className="scroll-section py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-foreground mb-16">🇮🇳 India by Numbers 🇮🇳</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1.4B+", label: "Population", icon: "👥", color: "from-orange-500 to-red-500" },
              { number: "28", label: "States", icon: "🏛️", color: "from-green-500 to-blue-500" },
              { number: "78", label: "Years Free", icon: "🗓️", color: "from-purple-500 to-pink-500" },
              { number: "22", label: "Languages", icon: "🗣️", color: "from-yellow-500 to-orange-500" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 text-center transform hover:scale-110 transition-all duration-500 hover:shadow-2xl"
              >
                <div
                  className={`text-6xl mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-bold animate-pulse`}
                >
                  {stat.number}
                </div>
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-foreground font-semibold text-lg">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Games Section */}
      <section id="games" className="scroll-section py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-foreground mb-16">🎮 Interactive Games 🎮</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg border border-white/20 text-center hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Flag Quiz</h3>
              <p className="text-foreground/80 mb-6">Test your knowledge about Indian states and their flags!</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full">
                Play Now
              </Button>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg border border-white/20 text-center hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4">🧩</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Monument Puzzle</h3>
              <p className="text-foreground/80 mb-6">Solve puzzles featuring famous Indian monuments!</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
                Start Puzzle
              </Button>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-white/20 text-center hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Music Memory</h3>
              <p className="text-foreground/80 mb-6">Match traditional Indian instruments and sounds!</p>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full">
                Listen & Play
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-4 mt-20 border-t border-white/20 bg-gradient-to-r from-orange-900/50 to-green-900/50 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-8xl mb-8 animate-bounce">🇮🇳</div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
            JAI HIND • JAI BHARAT
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Celebrating 78 glorious years of independence, unity in diversity, and the indomitable spirit of India. From
            the Himalayas to the Indian Ocean, we stand united as one nation, one people, one dream.
          </p>
          <div className="flex justify-center gap-8 mb-8">
            {["🏛️", "🕉️", "☪️", "✝️", "☸️", "🔯"].map((symbol, index) => (
              <span key={index} className="text-4xl hover:scale-150 transition-transform duration-300 cursor-pointer">
                {symbol}
              </span>
            ))}
          </div>
          <div className="text-foreground/60">
            <p className="mb-2">Created with ❤️ for the Code Tiranga Challenge</p>
            <p>Honoring our freedom fighters, celebrating our heritage, building our future</p>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-2xl sparkle" style={{ animationDelay: `${i * 0.2}s` }}>
                {i % 2 === 0 ? "⭐" : "✨"}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
