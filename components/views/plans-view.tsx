'use client'

import { ArrowLeft, CheckCircle, Send } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const plans = [
  {
    id: 'standard',
    titleKey: 'standard',
    descKey: 'standardDesc',
    features: ['standardFeature1', 'standardFeature2', 'standardFeature3', 'standardFeature4'],
  },
  {
    id: 'pro',
    titleKey: 'pro',
    descKey: 'proDesc',
    features: ['proFeature1', 'proFeature2', 'proFeature3', 'proFeature4'],
  },
  {
    id: 'enterprise',
    titleKey: 'enterprise',
    descKey: 'enterpriseDesc',
    features: ['enterpriseFeature1', 'enterpriseFeature2', 'enterpriseFeature3', 'enterpriseFeature4'],
  },
]

const blockVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.06, ease: EASE },
  }),
}

interface PlansViewProps {
  onBack: () => void
  onContact: () => void
}

export function PlansView({ onBack, onContact }: PlansViewProps) {
  const { t } = useLanguage()

  return (
    <div className="flex h-full w-full flex-col" style={{ gap: '8px' }}>
      {/* Top row — info blocks */}
      <div className="grid flex-1 grid-cols-3" style={{ gap: '8px' }}>
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            className="flex flex-col rounded-2xl bg-[#F5F6F8] p-5"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={blockVariants}
            whileHover={{
              scale: 1.015,
              boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
            }}
          >
            <h3
              className="font-sans font-semibold text-[#2D2D2D]"
              style={{ fontSize: '1.2rem' }}
            >
              {t(plan.titleKey)}
            </h3>
            <p
              className="mt-1.5 font-sans leading-relaxed text-[#8C8C8C]"
              style={{ fontSize: '0.8rem' }}
            >
              {t(plan.descKey)}
            </p>

            <div className="mt-4 flex flex-col gap-2">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={14} color="#4DE8D8" className="shrink-0" />
                  <span
                    className="font-sans text-[#2D2D2D]"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {t(feature)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom row — contact blocks */}
      <div className="grid grid-cols-3" style={{ gap: '8px', height: '72px' }}>
        {plans.map((plan, index) => (
          <motion.div
            key={`contact-${plan.id}`}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#F5F6F8]"
            custom={index + 3}
            initial="hidden"
            animate="visible"
            variants={blockVariants}
            onClick={onContact}
            whileHover={{
              scale: 1.015,
              backgroundColor: '#EDEEF1',
              boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Send size={16} color="#4DE8D8" />
            <span
              className="font-sans font-medium text-[#2D2D2D]"
              style={{ fontSize: '0.9rem' }}
            >
              {t('contactUs')}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Back row */}
      <motion.div
        className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#F5F6F8]"
        style={{ height: '48px' }}
        custom={6}
        initial="hidden"
        animate="visible"
        variants={blockVariants}
        onClick={onBack}
        whileHover={{
          scale: 1.008,
          backgroundColor: '#EDEEF1',
          boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <ArrowLeft size={18} color="#8C8C8C" />
        <span
          className="font-sans font-medium text-[#8C8C8C]"
          style={{ fontSize: '0.9rem' }}
        >
          {t('home')}
        </span>
      </motion.div>
    </div>
  )
}
