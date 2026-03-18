'use client'

import { Globe } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

export function LanguageBlock() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="bento-block flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[#F5F6F8] p-6">
      <Globe size={20} color="#4DE8D8" />
      
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage('en')}
          className={`font-sans text-sm transition-all hover:bg-transparent ${
            language === 'en' 
              ? 'font-semibold text-[#2D2D2D]' 
              : 'font-normal text-[#C4C4C4] hover:text-[#8C8C8C]'
          }`}
        >
          EN
        </Button>
        <span className="text-[#E8E9EC]">|</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage('es')}
          className={`font-sans text-sm transition-all hover:bg-transparent ${
            language === 'es' 
              ? 'font-semibold text-[#2D2D2D]' 
              : 'font-normal text-[#C4C4C4] hover:text-[#8C8C8C]'
          }`}
        >
          ES
        </Button>
      </div>
    </div>
  )
}
