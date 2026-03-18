'use client'

import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

const businessNames = [
  { prefix: 'my.', name: 'site' },
  { prefix: 'my.', name: 'restaurant' },
  { prefix: 'my.', name: 'company' },
  { prefix: 'my.', name: 'coffee' },
  { prefix: 'my.', name: 'clinic' },
  { prefix: 'my.', name: 'hotel' },
  { prefix: 'my.', name: 'studio' },
]

export function HeroBlock() {
  const [loadedItems, setLoadedItems] = useState<number[]>([])
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  useEffect(() => {
    // Sequential fade-in animation with 60ms stagger
    businessNames.forEach((_, index) => {
      setTimeout(() => {
        setLoadedItems(prev => [...prev, index])
      }, index * 60)
    })

    // Start highlight cycling after all items loaded
    const totalLoadTime = businessNames.length * 60 + 300
    const highlightTimeout = setTimeout(() => {
      setHighlightedIndex(0)
    }, totalLoadTime)

    return () => clearTimeout(highlightTimeout)
  }, [])

  useEffect(() => {
    if (highlightedIndex === null) return

    // Cycle every 2 seconds
    const interval = setInterval(() => {
      setHighlightedIndex(prev => 
        prev === null ? 0 : (prev + 1) % businessNames.length
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [highlightedIndex])

  return (
    <div className="bento-block relative flex h-full w-full flex-col justify-center rounded-2xl bg-[#F5F6F8] px-6 py-4 md:px-8 md:py-6">
      <Sparkles 
        className="absolute right-4 top-4 md:right-6 md:top-6" 
        size={20} 
        color="#4DE8D8" 
      />
      
      <div className="flex flex-col gap-0.5 md:gap-1">
        {businessNames.map((item, index) => (
          <div
            key={index}
            className="hero-name flex items-baseline"
            style={{
              animationDelay: `${index * 60}ms`,
              opacity: loadedItems.includes(index) ? 1 : 0,
              transition: 'opacity 200ms ease-out',
            }}
          >
            <span 
              className="font-serif text-[1.3rem] font-light italic md:text-[2.2rem]"
              style={{ 
                color: highlightedIndex === index ? '#4DE8D8' : '#2D2D2D',
                transition: 'color 200ms ease-in-out'
              }}
            >
              {item.prefix}
            </span>
            <span 
              className="font-sans text-[1.3rem] font-medium md:text-[2.2rem]"
              style={{ 
                color: highlightedIndex === index ? '#4DE8D8' : '#2D2D2D',
                transition: 'color 200ms ease-in-out'
              }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
