'use client'

import { MousePointer2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { motion } from 'framer-motion'

interface ContactBlockProps {
  onClick: () => void
}

export function ContactBlock({ onClick }: ContactBlockProps) {
  const { t } = useLanguage()

  return (
    <motion.div
      id="contact-block"
      className="relative flex h-full w-full cursor-pointer flex-col rounded-2xl bg-[#F5F6F8] p-4"
      onClick={onClick}
      whileHover={{
        scale: 1.015,
        boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Icon top-right */}
      <MousePointer2
        className="absolute"
        style={{ right: '16px', top: '16px' }}
        size={20}
        color="#4DE8D8"
      />

      <div className="mt-auto flex items-baseline gap-1">
        <span className="font-serif text-[1.5rem] font-light italic text-[#2D2D2D]">
          my.
        </span>
        <span
          className="font-mono text-[#C4C4C4]"
          style={{ fontSize: '1.2rem' }}
        >
          business
        </span>
      </div>
      <p className="mt-1 font-sans text-[0.75rem] text-[#C4C4C4]">
        {t('tellUsYourBusiness')}
      </p>
    </motion.div>
  )
}
