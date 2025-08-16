"use client"

import { useState, useEffect } from "react"

const quotes = [
  {
    text: "Freedom is not given, it is taken.",
    author: "Netaji Subhas Chandra Bose",
  },
  {
    text: "In a gentle way, you can shake the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Swaraj is my birthright and I shall have it.",
    author: "Bal Gangadhar Tilak",
  },
  {
    text: "Give me blood and I will give you freedom.",
    author: "Netaji Subhas Chandra Bose",
  },
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Freedom is never dear at any price. It is the breath of life.",
    author: "Mahatma Gandhi",
  },
]

export default function PatrioticQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length)
        setIsVisible(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-32 flex items-center justify-center">
      <div
        className={`text-center transition-all duration-500 ${
          isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
        }`}
      >
        <blockquote className="text-lg md:text-xl font-medium text-card-foreground mb-4 italic">
          "{quotes[currentQuote].text}"
        </blockquote>
        <cite className="text-primary font-semibold">— {quotes[currentQuote].author}</cite>
      </div>
    </div>
  )
}
