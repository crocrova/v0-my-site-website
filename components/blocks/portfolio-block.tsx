'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface PortfolioBlockProps {
  onClick: () => void
}

export function PortfolioBlock({ onClick }: PortfolioBlockProps) {
  const { t } = useLanguage()

  return (
    <div 
      className="bento-block block-cursor flex h-full w-full items-center justify-center gap-2 rounded-2xl bg-[#F5F6F8] p-4"
      onClick={onClick}
    >
      <span className="font-sans text-[1.3rem] font-semibold text-[#2D2D2D]">
        {t('portfolio')}
      </span>
      <ArrowRight size={20} color="#4DE8D8" />
    </div>
  )
}
