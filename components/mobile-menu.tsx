'use client'

import { Menu, Briefcase, Layers, MessageSquare, Globe } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navItems = [
  { id: 'hero', labelKey: 'MY.SITE', icon: null },
  { id: 'portfolio', labelKey: 'portfolio', icon: Briefcase },
  { id: 'plans', labelKey: 'plans', icon: Layers },
  { id: 'contact', labelKey: 'Contact', icon: MessageSquare },
]

export function MobileMenu() {
  const { language, setLanguage, t } = useLanguage()

  const scrollToBlock = (id: string) => {
    const element = document.getElementById(`${id}-block`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed right-4 top-4 z-40 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-xl bg-[#F5F6F8] hover:bg-[#E8E9EC]"
          >
            <Menu size={24} color="#2D2D2D" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] bg-white">
          <SheetHeader>
            <SheetTitle className="text-left">
              <img 
                src="/logo-placeholder.svg" 
                width={100} 
                height={33} 
                alt="MY.SITE" 
              />
            </SheetTitle>
          </SheetHeader>
          
          <nav className="mt-8 flex flex-col gap-2">
            {navItems.slice(1).map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToBlock(item.id)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 font-sans text-[1rem] text-[#2D2D2D] transition-colors hover:bg-[#F5F6F8]"
                >
                  {Icon && <Icon size={20} color="#4DE8D8" />}
                  {item.labelKey === 'portfolio' || item.labelKey === 'plans' 
                    ? t(item.labelKey) 
                    : item.labelKey}
                </button>
              )
            })}
          </nav>
          
          {/* Language Toggle */}
          <div className="mt-8 flex items-center gap-2 px-4">
            <Globe size={18} color="#4DE8D8" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage('en')}
              className={`font-sans text-sm ${
                language === 'en' 
                  ? 'font-semibold text-[#2D2D2D]' 
                  : 'text-[#C4C4C4]'
              }`}
            >
              EN
            </Button>
            <span className="text-[#E8E9EC]">|</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage('es')}
              className={`font-sans text-sm ${
                language === 'es' 
                  ? 'font-semibold text-[#2D2D2D]' 
                  : 'text-[#C4C4C4]'
              }`}
            >
              ES
            </Button>
          </div>
          
          {/* Footer */}
          <div className="absolute bottom-8 left-6">
            <p className="font-sans text-[0.7rem] text-[#C4C4C4]">
              by OROZ.CONSTRUCTION
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
