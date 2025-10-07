"use client"

import { useEffect } from "react"

export function BookLoader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background">
      <div className="book-container">
        <div className="book">
          {/* Book spine */}
          <div className="book-spine" />

          {/* Left cover */}
          <div className="book-cover book-cover-left">
            <div className="book-cover-inner">
              <div className="book-title">
                <div className="text-center">
                  <div className="font-serif text-2xl font-bold text-background/80">CV</div>
                  <div className="mt-2 font-serif text-sm text-background/60">Curriculum Vitae</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right cover */}
          <div className="book-cover book-cover-right">
            <div className="book-cover-inner" />
          </div>

          {/* Pages */}
          <div className="book-pages">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="book-page" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <p className="animate-pulse font-serif text-base text-foreground sm:text-lg">Opening your story...</p>
      </div>
    </div>
  )
}
