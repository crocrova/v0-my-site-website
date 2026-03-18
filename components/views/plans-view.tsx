'use client'

import { ArrowLeft, CheckCircle, Zap, Target, Award } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

const plans = [
  {
    id: 'starter',
    titleKey: 'starter',
    descKey: 'starterDesc',
    icon: Zap,
    features: ['starterFeature1', 'starterFeature2', 'starterFeature3', 'starterFeature4'],
  },
  {
    id: 'standard',
    titleKey: 'standard',
    descKey: 'standardDesc',
    icon: Target,
    features: ['standardFeature1', 'standardFeature2', 'standardFeature3', 'standardFeature4'],
  },
  {
    id: 'pro',
    titleKey: 'pro',
    descKey: 'proDesc',
    icon: Award,
    features: ['proFeature1', 'proFeature2', 'proFeature3', 'proFeature4'],
  },
]

interface PlansViewProps {
  onBack: () => void
  onRequestAnalysis: () => void
}

export function PlansView({ onBack, onRequestAnalysis }: PlansViewProps) {
  const { t } = useLanguage()

  return (
    <div className="grid h-full grid-cols-4 gap-3">
      {/* Back button */}
      <div
        className="bento-block block-cursor flex items-center justify-center gap-2 rounded-2xl bg-[#F5F6F8] p-4"
        style={{
          opacity: 0,
          animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
        }}
        onClick={onBack}
      >
        <ArrowLeft size={20} color="#8C8C8C" />
        <span className="font-sans text-[0.9rem] font-medium text-[#8C8C8C]">
          {t('home')}
        </span>
      </div>

      {/* Plan cards */}
      {plans.map((plan, index) => {
        const Icon = plan.icon
        return (
          <div
            key={plan.id}
            className="bento-block flex flex-col rounded-2xl border border-[#E8E9EC] bg-white p-5"
            style={{
              opacity: 0,
              animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
              animationDelay: `${(index + 1) * 60}ms`,
            }}
          >
            <Icon size={28} color="#4DE8D8" />
            <h3 className="mt-3 font-sans text-[1.3rem] font-semibold text-[#2D2D2D]">
              {t(plan.titleKey)}
            </h3>
            <p className="mt-2 font-sans text-[0.8rem] leading-relaxed text-[#8C8C8C]">
              {t(plan.descKey)}
            </p>
            
            <div className="mt-4 flex flex-1 flex-col gap-2">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={16} color="#4DE8D8" />
                  <span className="font-sans text-[0.75rem] text-[#2D2D2D]">
                    {t(feature)}
                  </span>
                </div>
              ))}
            </div>
            
            <Button
              onClick={onRequestAnalysis}
              className="mt-4 w-full rounded-xl bg-[#4DE8D8] py-2.5 font-sans text-[0.85rem] font-medium text-white transition-colors hover:bg-[#3BCFBF]"
            >
              {t('requestAnalysis')}
            </Button>
          </div>
        )
      })}

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}
