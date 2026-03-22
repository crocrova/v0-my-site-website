'use client'

import { Briefcase, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { motion } from 'framer-motion'

interface PortfolioBlockProps {
  onClick: () => void
}

export function PortfolioBlock({ onClick }: PortfolioBlockProps) {
  const { t } = useLanguage()

  return (
    <motion.div
      className="relative flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#F5F6F8] p-4"
      onClick={onClick}
      whileHover={{
        scale: 1.015,
        boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Icon top-right */}
      <Briefcase
        className="absolute"
        style={{ right: '16px', top: '16px' }}
        size={20}
        color="#4DE8D8"
      />

      <span className="font-sans text-[1.3rem] font-semibold text-[#2D2D2D]">
        {t('portfolio')}
      </span>
      <ArrowRight size={20} color="#4DE8D8" />
    </motion.div>
  )
}
