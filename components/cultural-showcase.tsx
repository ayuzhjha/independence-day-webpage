"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const culturalElements = [
  {
    title: "Classical Dance: Bharatanatyam",
    description: "A 2000-year-old dance form from Tamil Nadu, known for its grace and expression.",
    image: "/bharatanatyam-dancer.png",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Music: Sitar & Classical Ragas",
    description: "Soulful melodies that represent the depth and harmony of Indian culture.",
    image: "/indian-classical-sitar.png",
    color: "from-green-500 to-blue-500",
  },
  {
    title: "Festival: Diwali",
    description: "The festival of lights, symbolizing the victory of light over darkness.",
    image: "/diwali-celebration.png",
    color: "from-purple-500 to-pink-500",
  },
]

export default function CulturalShowcase() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-foreground mb-16">🎭 Cultural Heritage 🎭</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {culturalElements.map((element, index) => (
          <Card key={index} className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image src={element.image} alt={element.title} fill className="object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{element.title}</h3>
            <p className="text-foreground/80 mb-6">{element.description}</p>
            <div className={`flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors cursor-pointer`}>
              <span>Learn more</span>
            </div>
            <div className="mt-4">
              <Button className={`w-full bg-gradient-to-r ${element.color} hover:opacity-90 text-white font-semibold`}>
                Explore
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
