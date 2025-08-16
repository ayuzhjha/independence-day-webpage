"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(() => {})
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-foreground font-semibold">Jana Gana Mana</h4>
        <p className="text-foreground/60 text-sm">National Anthem of India</p>
      </div>
      <div className="flex items-center gap-3">
        <audio ref={audioRef} src="/janaganamana.mp3" preload="none" />
        <Button onClick={togglePlay} className={`${isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"} text-white transition-all duration-300`}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </div>
    </div>
  )
}
