'use client'

import { Globe } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

type View = 'home' | 'portfolio' | 'plans' | 'contact'

interface NavbarProps {
  currentView: View
  onPortfolioClick: () => void
  onPlansClick: () => void
  onContactClick: () => void
}

const navLinks: { key: string; view: View; labelKey: string }[] = [
  { key: 'portfolio', view: 'portfolio', labelKey: 'portfolio' },
  { key: 'plans', view: 'plans', labelKey: 'plans' },
  { key: 'contact', view: 'contact', labelKey: 'contact' },
]

export function Navbar({ currentView, onPortfolioClick, onPlansClick, onContactClick }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage()

  const handlers: Record<string, () => void> = {
    portfolio: onPortfolioClick,
    plans: onPlansClick,
    contact: onContactClick,
  }

  return (
    <div
      className="flex h-12 shrink-0 items-center justify-between rounded-2xl bg-[#F5F6F8] px-5"
      style={{ minHeight: '48px' }}
    >
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
        {navLinks.map(({ key, view, labelKey }) => {
          const isActive = currentView === view
          return (
            <button
              key={key}
              onClick={handlers[key]}
              className="relative flex flex-col items-center gap-0.5 pb-1"
            >
              <span
                className="font-sans text-[0.85rem] transition-colors duration-200"
                style={{
                  color: isActive ? '#2D2D2D' : '#8C8C8C',
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {t(labelKey)}
              </span>
              {/* Active dot indicator */}
              <span
                className="rounded-full transition-all duration-200"
                style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#4DE8D8',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'scale(1)' : 'scale(0)',
                }}
              />
            </button>
          )
        })}
      </nav>

      {/* Language toggle */}
      <div className="flex items-center gap-2">
        <Globe size={18} color="#4DE8D8" />
        <div className="flex items-center gap-1 font-sans text-[0.8rem]">
          <button
            onClick={() => setLanguage('en')}
            className="transition-colors duration-150"
            style={{
              color: language === 'en' ? '#2D2D2D' : '#C4C4C4',
              fontWeight: language === 'en' ? 600 : 400,
            }}
          >
            EN
          </button>
          <span style={{ color: '#C4C4C4' }}>/</span>
          <button
            onClick={() => setLanguage('es')}
            className="transition-colors duration-150"
            style={{
              color: language === 'es' ? '#2D2D2D' : '#C4C4C4',
              fontWeight: language === 'es' ? 600 : 400,
            }}
          >
            ES
          </button>
        </div>
      </div>
    </div>
  )
}
