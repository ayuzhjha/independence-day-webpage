"use client"

import AshokaChakra from "./ashoka-chakra"

export default function AnimatedFlag() {
  return (
    <div className="relative w-80 h-52 md:w-96 md:h-64 mx-auto flag-wave shadow-2xl rounded-lg overflow-hidden border-4 border-foreground/20">
      {/* Saffron stripe */}
      <div className="w-full h-1/3" style={{ backgroundColor: "#FF9933" }} />

      {/* White stripe with centered Chakra */}
      <div className="w-full h-1/3 flex items-center justify-center" style={{ backgroundColor: "#FFFFFF" }}>
        <AshokaChakra />
      </div>

      {/* Green stripe */}
      <div className="w-full h-1/3" style={{ backgroundColor: "#138808" }} />

      {/* Flag pole effect */}
      <div className="absolute -left-2 top-0 w-2 h-full bg-gradient-to-b from-amber-800 to-amber-900 rounded-l-lg shadow-lg" />
    </div>
  )
}
