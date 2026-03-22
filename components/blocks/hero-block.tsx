'use client'

import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const businessNames = [
  { prefix: 'my.', name: 'site' },
  { prefix: 'my.', name: 'restaurant' },
  { prefix: 'my.', name: 'company' },
  { prefix: 'my.', name: 'coffee' },
  { prefix: 'my.', name: 'clinic' },
  { prefix: 'my.', name: 'hotel' },
  { prefix: 'my.', name: 'studio' },
]

const EASE = [0.16, 1, 0.3, 1] as const

export function HeroBlock() {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  // Start highlight cycling after stagger animation completes
  useEffect(() => {
    const totalStagger = businessNames.length * 60 + 400
    const t = setTimeout(() => setHighlightedIndex(0), totalStagger)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (highlightedIndex === null) return
    const interval = setInterval(() => {
      setHighlightedIndex(prev => (prev === null ? 0 : (prev + 1) % businessNames.length))
    }, 2000)
    return () => clearInterval(interval)
  }, [highlightedIndex])

  return (
    <motion.div
      className="relative flex h-full w-full flex-col justify-center rounded-2xl bg-[#F5F6F8]"
      style={{ padding: '24px' }}
      whileHover={{
        scale: 1.015,
        boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Icon top-right */}
      <Sparkles
        className="absolute"
        style={{ right: '16px', top: '16px' }}
        size={20}
        color="#4DE8D8"
      />

      <div className="flex flex-col" style={{ gap: '4px' }}>
        {businessNames.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-baseline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.06,
              ease: EASE,
            }}
          >
            <motion.span
              className="font-serif font-light italic"
              style={{ fontSize: '2.2rem', lineHeight: 1.1 }}
              animate={{
                color: highlightedIndex === index ? '#4DE8D8' : '#2D2D2D',
              }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {item.prefix}
            </motion.span>
            <motion.span
              className="font-sans font-medium"
              style={{ fontSize: '2.2rem', lineHeight: 1.1 }}
              animate={{
                color: highlightedIndex === index ? '#4DE8D8' : '#2D2D2D',
              }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {item.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
