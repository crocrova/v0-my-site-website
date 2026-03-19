'use client'

import { Layers } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface PlansBlockProps {
  onClick: () => void
}

export function PlansBlock({ onClick }: PlansBlockProps) {
  const { t } = useLanguage()

  return (
    <div 
      className="bento-block block-cursor flex h-full w-full flex-col justify-between rounded-2xl bg-[#F5F6F8] p-4"
      onClick={onClick}
    >
      <Layers size={20} color="#4DE8D8" />
      
      <div>
        <span className="font-sans text-[1.3rem] font-semibold text-[#2D2D2D]">
          {t('plans')}
        </span>
        
        <div className="mt-2 flex flex-col gap-0.5">
          <span className="font-sans text-[0.85rem] text-[#8C8C8C]">{t('starter')}</span>
          <span className="font-sans text-[0.85rem] text-[#8C8C8C]">{t('standard')}</span>
          <span className="font-sans text-[0.85rem] text-[#8C8C8C]">{t('pro')}</span>
        </div>
      </div>
    </div>
  )
}
