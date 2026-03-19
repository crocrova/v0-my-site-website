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
    businessNames.forEach((_, index) => {
      setTimeout(() => {
        setLoadedItems(prev => [...prev, index])
      }, index * 60)
    })

    const totalLoadTime = businessNames.length * 60 + 300
    const highlightTimeout = setTimeout(() => {
      setHighlightedIndex(0)
    }, totalLoadTime)

    return () => clearTimeout(highlightTimeout)
  }, [])

  useEffect(() => {
    if (highlightedIndex === null) return

    const interval = setInterval(() => {
      setHighlightedIndex(prev => 
        prev === null ? 0 : (prev + 1) % businessNames.length
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [highlightedIndex])

  return (
    <div 
      className="bento-block relative flex h-full w-full flex-col justify-center rounded-2xl bg-[#F5F6F8]"
      style={{ padding: '16px' }}
    >
      {/* Sparkles icon - TOP LEFT */}
      <Sparkles 
        className="absolute"
        style={{ left: '16px', top: '16px' }}
        size={20} 
        color="#4DE8D8" 
      />
      
      <div className="flex flex-col" style={{ gap: '2px', marginTop: '24px' }}>
        {businessNames.map((item, index) => (
          <div
            key={index}
            className="hero-name flex items-baseline"
            style={{
              opacity: loadedItems.includes(index) ? 1 : 0,
              transition: 'opacity 200ms ease-out',
            }}
          >
            <span 
              className="font-serif font-light italic"
              style={{ 
                fontSize: '1.8rem',
                color: highlightedIndex === index ? '#4DE8D8' : '#2D2D2D',
                transition: 'color 200ms ease-in-out'
              }}
            >
              {item.prefix}
            </span>
            <span 
              className="font-sans font-medium"
              style={{ 
                fontSize: '1.8rem',
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
