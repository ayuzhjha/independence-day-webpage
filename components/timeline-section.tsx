"use client"

import { Card } from "@/components/ui/card"

const events = [
  { year: 1857, description: "First War of Independence" },
  { year: 1905, description: "Partition of Bengal and Swadeshi Movement" },
  { year: 1919, description: "Jallianwala Bagh Massacre" },
  { year: 1930, description: "Dandi March led by Mahatma Gandhi" },
  { year: 1942, description: "Quit India Movement" },
  { year: 1947, description: "Independence of India" },
]

export default function TimelineSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-foreground mb-16">🕰️ Journey to Freedom 🕰️</h2>
      <div className="space-y-8">
        {events.map((event, index) => (
          <Card
            key={index}
            className="p-8 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:shadow-xl transition-shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="md:col-span-1">
                <h3 className="text-2xl font-bold text-foreground">{event.year}</h3>
              </div>
              <div className="md:col-span-3">
                <p className="text-foreground/80 text-lg">{event.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
