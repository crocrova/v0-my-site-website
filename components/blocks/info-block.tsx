'use client'

import { Mail } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { motion } from 'framer-motion'

export function InfoBlock() {
  const { t } = useLanguage()

  return (
    <motion.div
      className="relative flex h-full w-full flex-col justify-center rounded-2xl bg-[#F5F6F8] p-4"
      whileHover={{
        scale: 1.015,
        boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Icon top-right */}
      <Mail
        className="absolute"
        style={{ right: '16px', top: '16px' }}
        size={20}
        color="#4DE8D8"
      />

      <div className="flex flex-col gap-0.5">
        <p
          className="font-sans text-[#2D2D2D]"
          style={{ fontSize: '0.85rem', fontWeight: 500 }}
        >
          Carlos Orozco
        </p>
        <p
          className="font-sans text-[#8C8C8C]"
          style={{ fontSize: '0.75rem', fontWeight: 400 }}
        >
          {t('creativeDirector')}
        </p>
        <p
          className="font-sans text-[#8C8C8C]"
          style={{ fontSize: '0.8rem', fontWeight: 400, marginTop: '6px' }}
        >
          612 219 2946
        </p>
        <p
          className="font-sans text-[#8C8C8C]"
          style={{ fontSize: '0.8rem', fontWeight: 400 }}
        >
          my.site@oroz.construction
        </p>
      </div>
    </motion.div>
  )
}
