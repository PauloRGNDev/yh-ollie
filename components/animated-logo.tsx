"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function AnimatedLogo() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      <Image
        src="/assets/logo-yh.png"
        alt="YHollie Logo"
        width={120}
        height={40}
        className={`transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        priority
      />
      {isLoaded && <div className="absolute inset-0 animate-shimmer opacity-30 pointer-events-none" />}
    </div>
  )
}
