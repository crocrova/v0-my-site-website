'use client'

import { Globe } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface NavbarProps {
  onPortfolioClick: () => void
  onPlansClick: () => void
  onContactClick: () => void
}

export function Navbar({ onPortfolioClick, onPlansClick, onContactClick }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex h-12 shrink-0 items-center justify-between rounded-2xl bg-[#F5F6F8] px-5">
      {/* Logo */}
      <img 
        id="site-logo-nav" 
        src="/logo-placeholder.svg" 
        width={100} 
        height={33} 
        alt="MY.SITE" 
      />

      {/* Navigation links */}
      <nav className="flex items-center gap-6">
        <button
          onClick={onPortfolioClick}
          className="font-sans text-[0.85rem] font-medium text-[#8C8C8C] transition-colors hover:text-[#2D2D2D]"
        >
          {t('portfolio')}
        </button>
        <button
          onClick={onPlansClick}
          className="font-sans text-[0.85rem] font-medium text-[#8C8C8C] transition-colors hover:text-[#2D2D2D]"
        >
          {t('plans')}
        </button>
        <button
          onClick={onContactClick}
          className="font-sans text-[0.85rem] font-medium text-[#8C8C8C] transition-colors hover:text-[#2D2D2D]"
        >
          {t('contact')}
        </button>
      </nav>

      {/* Language toggle */}
      <div className="flex items-center gap-2">
        <Globe size={18} color="#4DE8D8" />
        <div className="flex items-center gap-1 font-sans text-[0.8rem]">
          <button
            onClick={() => setLanguage('en')}
            className={`transition-colors ${
              language === 'en' 
                ? 'font-semibold text-[#2D2D2D]' 
                : 'text-[#C4C4C4] hover:text-[#8C8C8C]'
            }`}
          >
            EN
          </button>
          <span className="text-[#C4C4C4]">/</span>
          <button
            onClick={() => setLanguage('es')}
            className={`transition-colors ${
              language === 'es' 
                ? 'font-semibold text-[#2D2D2D]' 
                : 'text-[#C4C4C4] hover:text-[#8C8C8C]'
            }`}
          >
            ES
          </button>
        </div>
      </div>
    </div>
  )
}
