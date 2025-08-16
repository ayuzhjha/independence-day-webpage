"use client"

export default function AshokaChakra() {
  const blue = "#000080"
  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24">
      {/* Outer circle */}
      <div className="absolute inset-0 rounded-full border-2 chakra-rotate" style={{ borderColor: blue }}>
        {/* 24 spokes */}
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 bg-current top-1/2 left-1/2 origin-bottom"
            style={{
              height: "50%",
              transform: `translate(-50%, -100%) rotate(${i * 15}deg)`,
              backgroundColor: blue,
            }}
          />
        ))}

        {/* Center circle */}
        <div
          className="absolute top-1/2 left-1/2 w-3.5 h-3.5 md:w-4.5 md:h-4.5 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: blue }}
        />
      </div>
    </div>
  )
}
