'use client'

import { MousePointer2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface ContactBlockProps {
  onClick: () => void
}

export function ContactBlock({ onClick }: ContactBlockProps) {
  const { t } = useLanguage()

  return (
    <div 
      id="contact-block"
      className="bento-block block-cursor flex h-full w-full flex-col rounded-2xl bg-[#F5F6F8] p-4"
      onClick={onClick}
    >
      <MousePointer2 size={20} color="#4DE8D8" />
      
      <div className="mt-auto flex items-baseline gap-1">
        <span className="font-serif text-[1.4rem] font-light italic text-[#2D2D2D]">
          my.
        </span>
        <span className="font-mono text-[1.1rem] text-[#C4C4C4]">
          ________
        </span>
      </div>
      <p className="mt-1 font-sans text-[0.7rem] text-[#C4C4C4]">
        {t('tellUsYourBusiness')}
      </p>
    </div>
  )
}
