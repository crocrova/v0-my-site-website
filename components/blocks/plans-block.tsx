'use client'

import { Layers } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { motion } from 'framer-motion'

interface PlansBlockProps {
  onClick: () => void
}

export function PlansBlock({ onClick }: PlansBlockProps) {
  const { t } = useLanguage()

  return (
    <motion.div
      className="relative flex h-full w-full cursor-pointer flex-col justify-center rounded-2xl bg-[#F5F6F8] p-4"
      onClick={onClick}
      whileHover={{
        scale: 1.015,
        boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Icon top-right */}
      <Layers
        className="absolute"
        style={{ right: '16px', top: '16px' }}
        size={20}
        color="#4DE8D8"
      />

      <span className="font-sans text-[1.3rem] font-semibold text-[#2D2D2D]">
        {t('plans')}
      </span>

      <div className="mt-2 flex flex-col gap-0.5">
        <span className="font-sans text-[0.85rem] text-[#8C8C8C]">{t('standard')}</span>
        <span className="font-sans text-[0.85rem] text-[#8C8C8C]">{t('pro')}</span>
        <span className="font-sans text-[0.85rem] text-[#8C8C8C]">{t('enterprise')}</span>
      </div>
    </motion.div>
  )
}
