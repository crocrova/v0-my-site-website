'use client'

import { ArrowLeft, Check } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const plans = [
  {
    id: 'starter',
    titleKey: 'starter',
    price: '$499',
    features: ['starterFeature1', 'starterFeature2', 'starterFeature3'],
  },
  {
    id: 'standard',
    titleKey: 'standard',
    price: '$999',
    popular: true,
    features: ['standardFeature1', 'standardFeature2', 'standardFeature3', 'standardFeature4'],
  },
  {
    id: 'pro',
    titleKey: 'pro',
    price: '$1,999',
    features: ['proFeature1', 'proFeature2', 'proFeature3', 'proFeature4', 'proFeature5'],
  },
]

interface PlansViewProps {
  onBack: () => void
  onRequestAnalysis: () => void
}

export function PlansView({ onBack, onRequestAnalysis }: PlansViewProps) {
  const { t } = useLanguage()

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#F5F6F8]">
      {/* Header */}
      <div 
        className="flex shrink-0 items-center justify-between border-b border-[#E8E9EC]"
        style={{ padding: '12px 16px' }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-sans text-[0.8rem] font-medium text-[#8C8C8C] transition-colors hover:text-[#2D2D2D]"
        >
          <ArrowLeft size={16} />
          {t('back')}
        </button>
        <h2 className="font-sans text-[0.9rem] font-semibold text-[#2D2D2D]">
          {t('plans')}
        </h2>
        <div style={{ width: '60px' }} />
      </div>

      {/* Plans Grid */}
      <div 
        className="grid flex-1 grid-cols-3"
        style={{ gap: '8px', padding: '8px' }}
      >
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            className={`flex flex-col rounded-xl bg-white ${plan.popular ? 'ring-2 ring-[#4DE8D8]' : ''}`}
            style={{ 
              padding: '20px',
              opacity: 0,
              animationName: 'fadeInScale',
              animationDuration: '300ms',
              animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              animationFillMode: 'forwards',
              animationDelay: `${index * 50}ms`,
            }}
          >
            {/* Popular badge */}
            {plan.popular && (
              <span className="mb-2 w-fit rounded-full bg-[#4DE8D8] px-2 py-0.5 font-sans text-[0.6rem] font-medium text-white">
                {t('popular')}
              </span>
            )}
            
            {/* Title & Price */}
            <h3 className="font-sans text-[1rem] font-semibold text-[#2D2D2D]">
              {t(plan.titleKey)}
            </h3>
            <p className="mt-1 font-sans text-[1.5rem] font-bold text-[#2D2D2D]">
              {plan.price}
            </p>
            
            {/* Features */}
            <div className="mt-4 flex flex-1 flex-col gap-2">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check size={14} className="mt-0.5 shrink-0 text-[#4DE8D8]" />
                  <span className="font-sans text-[0.75rem] text-[#8C8C8C]">
                    {t(feature)}
                  </span>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <button
              onClick={onRequestAnalysis}
              className={`mt-4 w-full rounded-lg py-2.5 font-sans text-[0.8rem] font-medium transition-colors ${
                plan.popular 
                  ? 'bg-[#4DE8D8] text-white hover:bg-[#3BCFBF]' 
                  : 'bg-[#F5F6F8] text-[#2D2D2D] hover:bg-[#ECEEF0]'
              }`}
            >
              {t('getStarted')}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
