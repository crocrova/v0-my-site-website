'use client'

import { useState, useEffect } from 'react'
import { Layers, Zap, Target, Award, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

const plans = [
  {
    id: 'starter',
    titleKey: 'starter',
    descKey: 'starterDesc',
    icon: Zap,
  },
  {
    id: 'standard',
    titleKey: 'standard',
    descKey: 'standardDesc',
    icon: Target,
  },
  {
    id: 'pro',
    titleKey: 'pro',
    descKey: 'proDesc',
    icon: Award,
  },
]

export function PlansBlock() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isExpanded])

  const handleCTAClick = () => {
    setIsExpanded(false)
    // Scroll to contact or focus on contact block
    const contactBlock = document.getElementById('contact-block')
    if (contactBlock) {
      contactBlock.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div 
        className="bento-block block-cursor flex h-full w-full flex-col justify-between rounded-2xl bg-[#F5F6F8] p-6"
        onClick={() => setIsExpanded(true)}
      >
        <Layers size={22} color="#4DE8D8" />
        
        <div className="mt-4">
          <span className="font-sans text-[1.3rem] font-semibold text-[#2D2D2D]">
            {t('plans')}
          </span>
          
          <div className="mt-3 flex flex-col gap-1">
            <span className="font-sans text-[0.9rem] text-[#8C8C8C]">{t('starter')}</span>
            <span className="font-sans text-[0.9rem] text-[#8C8C8C]">{t('standard')}</span>
            <span className="font-sans text-[0.9rem] text-[#8C8C8C]">{t('pro')}</span>
          </div>
          
          <p className="mt-4 font-sans text-[0.75rem] text-[#C4C4C4]">
            {t('basedOnAnalysis')}
          </p>
        </div>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-white"
          style={{
            animation: 'fadeIn 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        >
          {/* Top Bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#E8E9EC] bg-white px-4 py-4 md:px-8">
            <button 
              onClick={() => setIsExpanded(false)}
              className="flex items-center gap-2 font-sans font-medium text-[#2D2D2D] transition-opacity hover:opacity-70"
            >
              <ArrowLeft size={20} />
              {t('back')}
            </button>
            <img 
              src="/logo-placeholder.svg" 
              width={100} 
              height={33} 
              alt="MY.SITE" 
            />
          </div>

          {/* Plans Cards */}
          <div className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-16">
            <h2 className="mb-8 text-center font-sans text-[2rem] font-semibold text-[#2D2D2D] md:text-[2.5rem]">
              {t('plans')}
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan, index) => {
                const Icon = plan.icon
                return (
                  <div
                    key={plan.id}
                    className="flex flex-col rounded-2xl border border-[#E8E9EC] bg-white p-8"
                    style={{
                      animation: `slideUp 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                      animationDelay: `${index * 100}ms`,
                      opacity: 0,
                    }}
                  >
                    <Icon size={32} color="#4DE8D8" />
                    <h3 className="mt-4 font-sans text-[1.5rem] font-semibold text-[#2D2D2D]">
                      {t(plan.titleKey)}
                    </h3>
                    <p className="mt-3 flex-1 font-sans text-[0.95rem] leading-relaxed text-[#8C8C8C]">
                      {t(plan.descKey)}
                    </p>
                    <Button
                      onClick={handleCTAClick}
                      className="mt-6 w-full rounded-xl bg-[#4DE8D8] py-3 font-sans font-medium text-white transition-colors hover:bg-[#3BCFBF]"
                    >
                      {t('requestAnalysis')}
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
