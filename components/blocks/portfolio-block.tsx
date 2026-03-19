'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface PortfolioBlockProps {
  onClick: () => void
}

export function PortfolioBlock({ onClick }: PortfolioBlockProps) {
  const { t } = useLanguage()
  
  return (
    <button
      onClick={onClick}
      className="bento-block flex h-full w-full items-center justify-between rounded-2xl bg-[#F5F6F8] text-left transition-all hover:bg-[#ECEEF0]"
      style={{ padding: '16px' }}
    >
      <span className="font-sans text-[0.95rem] font-semibold text-[#2D2D2D]">
        {t('portfolio')}
      </span>
      <ArrowRight size={18} className="text-[#8C8C8C]" />
    </button>
  )
}
