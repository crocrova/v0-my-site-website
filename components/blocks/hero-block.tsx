'use client'

import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

const businessNames = [
  { prefix: 'my.', name: 'site' },
  { prefix: 'my.', name: 'restaurant' },
  { prefix: 'my.', name: 'company' },
  { prefix: 'my.', name: 'coffee' },
  { prefix: 'my.', name: 'clinic' },
  { prefix: 'my.', name: 'salon' },
  { prefix: 'my.', name: 'hotel' },
  { prefix: 'my.', name: 'studio' },
  { prefix: 'my.', name: 'store' },
  { prefix: 'my.', name: 'office' },
]

export function HeroBlock() {
  const [loadedItems, setLoadedItems] = useState<number[]>([])
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const displayNames = isMobile ? businessNames.slice(0, 5) : businessNames

  useEffect(() => {
    // Sequential fade-in animation
    displayNames.forEach((_, index) => {
      setTimeout(() => {
        setLoadedItems(prev => [...prev, index])
      }, index * 80)
    })

    // Start highlight cycling after all items loaded
    const totalLoadTime = displayNames.length * 80 + 400
    const highlightTimeout = setTimeout(() => {
      setHighlightedIndex(0)
    }, totalLoadTime)

    return () => clearTimeout(highlightTimeout)
  }, [displayNames.length])

  useEffect(() => {
    if (highlightedIndex === null) return

    const interval = setInterval(() => {
      setHighlightedIndex(prev => 
        prev === null ? 0 : (prev + 1) % displayNames.length
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [highlightedIndex, displayNames.length])

  return (
    <div className="bento-block relative h-full w-full rounded-2xl bg-[#F5F6F8] p-6 md:p-8">
      <Sparkles 
        className="absolute right-4 top-4 md:right-6 md:top-6" 
        size={20} 
        color="#4DE8D8" 
      />
      
      <div className="flex h-full flex-col justify-center gap-1 md:gap-2">
        {displayNames.map((item, index) => (
          <div
            key={index}
            className="hero-name flex items-baseline"
            style={{
              animationDelay: `${index * 80}ms`,
              opacity: loadedItems.includes(index) ? 1 : 0,
            }}
          >
            <span 
              className="font-serif text-[1.4rem] font-light italic md:text-[2.8rem]"
              style={{ 
                color: highlightedIndex === index ? '#4DE8D8' : '#2D2D2D',
                transition: 'color 200ms ease-in-out'
              }}
            >
              {item.prefix}
            </span>
            <span 
              className="font-sans text-[1.4rem] font-medium md:text-[2.8rem]"
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
