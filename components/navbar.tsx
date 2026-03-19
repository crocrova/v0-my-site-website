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
    <div 
      className="flex shrink-0 items-center justify-between rounded-2xl bg-[#F5F6F8]"
      style={{ height: '48px', padding: '0 16px' }}
    >
      {/* Logo placeholder */}
      <div 
        id="navbar-logo"
        className="flex h-8 w-20 items-center justify-center rounded bg-[#E8E9EC]"
      >
        <span className="font-sans text-[0.6rem] font-medium text-[#8C8C8C]">LOGO</span>
      </div>

      {/* Navigation links */}
      <nav className="flex items-center gap-5">
        <button
          onClick={onPortfolioClick}
          className="font-sans text-[0.8rem] font-medium text-[#8C8C8C] transition-colors hover:text-[#2D2D2D]"
        >
          {t('portfolio')}
        </button>
        <button
          onClick={onPlansClick}
          className="font-sans text-[0.8rem] font-medium text-[#8C8C8C] transition-colors hover:text-[#2D2D2D]"
        >
          {t('plans')}
        </button>
        <button
          onClick={onContactClick}
          className="font-sans text-[0.8rem] font-medium text-[#8C8C8C] transition-colors hover:text-[#2D2D2D]"
        >
          {t('contact')}
        </button>
      </nav>

      {/* Language toggle */}
      <button
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        className="flex items-center gap-1.5 rounded-lg px-2 py-1 transition-colors hover:bg-[#E8E9EC]"
      >
        <Globe size={16} className="text-[#4DE8D8]" />
        <span className="font-sans text-[0.75rem] font-medium text-[#2D2D2D]">
          {language.toUpperCase()}
        </span>
      </button>
    </div>
  )
}
