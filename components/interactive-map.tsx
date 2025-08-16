"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const states = [
  { name: "Maharashtra", capital: "Mumbai", specialty: "Bollywood, Gateway of India" },
  { name: "Delhi", capital: "New Delhi", specialty: "Red Fort, India Gate" },
  { name: "Punjab", capital: "Chandigarh", specialty: "Golden Temple, Bhangra" },
  { name: "Karnataka", capital: "Bengaluru", specialty: "Mysore Palace, IT Hub" },
]

export default function InteractiveMap() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-foreground mb-16">🗺️ Explore India 🗺️</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 lg:col-span-2">
          <div className="h-96 bg-gradient-to-br from-orange-500/20 to-green-500/20 border border-white/20 rounded-lg flex items-center justify-center">
            <div className="text-foreground text-xl font-semibold">Interactive Map</div>
          </div>
          <p className="text-foreground/60 mt-2">Click states to explore</p>
        </Card>
        <Card className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20">
          <h3 className="text-2xl font-bold text-foreground mb-6">States & Union Territories</h3>
          <div className="space-y-4">
            {states.map((state) => (
              <div key={state.name} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="font-semibold text-foreground">{state.name}</div>
                <p className="text-foreground/80 text-sm">Capital: {state.capital}</p>
                <p className="text-foreground/60 text-sm mt-2 animate-fade-in">Famous for: {state.specialty}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
