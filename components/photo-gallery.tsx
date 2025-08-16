"use client"

import Image from "next/image"
import { useState } from "react"
import { Card } from "@/components/ui/card"

const images = [
  { src: "/taj-mahal-sunset.png", alt: "Taj Mahal at Sunset", location: "Agra, Uttar Pradesh" },
  { src: "/red-fort-delhi.png", alt: "Red Fort in Delhi", location: "Delhi" },
  { src: "/golden-temple-amritsar.png", alt: "Golden Temple in Amritsar", location: "Amritsar, Punjab" },
  { src: "/gateway-of-india-mumbai.png", alt: "Gateway of India", location: "Mumbai, Maharashtra" },
  { src: "/mysore-palace.png", alt: "Mysore Palace", location: "Mysuru, Karnataka" },
]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-foreground mb-16">📸 Incredible India Gallery 📸</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Card
            key={index}
            className="relative overflow-hidden group cursor-pointer bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">{image.alt}</h3>
              <p className="text-sm text-foreground/80">{image.location}</p>
            </div>
          </Card>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 text-foreground">
              <h3 className="text-2xl font-bold">{images[selectedImage].alt}</h3>
              <p className="text-lg text-foreground/80">{images[selectedImage].location}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-foreground text-4xl hover:text-red-400 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
