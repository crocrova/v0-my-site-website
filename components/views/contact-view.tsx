'use client'

import { useState } from 'react'
import { ArrowLeft, MousePointer2, Phone, Mail, Building2, Send } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const blockVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.06, ease: EASE },
  }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
}

interface ContactViewProps {
  onBack: () => void
}

export function ContactView({ onBack }: ContactViewProps) {
  const [phase, setPhase] = useState<1 | 2>(1)
  const [businessName, setBusinessName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [message, setMessage] = useState('')
  const { t } = useLanguage()

  const handleStart = () => {
    if (businessName.trim()) setPhase(2)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ businessName, phone, email, businessType, message })
  }

  return (
    <div className="flex h-full w-full flex-col" style={{ gap: '8px' }}>
      <AnimatePresence mode="wait">
        {phase === 1 ? (
          <motion.div
            key="phase1"
            className="grid flex-1 grid-cols-[2fr_1fr]"
            style={{ gap: '8px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.25 } }}
            transition={{ duration: 0.3 }}
          >
            {/* Left — my. input */}
            <motion.div
              className="relative flex flex-col justify-center rounded-2xl bg-[#F5F6F8] p-6"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={blockVariants}
              whileHover={{
                scale: 1.015,
                boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <MousePointer2
                className="absolute"
                style={{ right: '16px', top: '16px' }}
                size={20}
                color="#4DE8D8"
              />

              <div className="flex items-baseline gap-2 border-b border-[#E8E9EC] pb-3">
                <span
                  className="font-serif font-light italic text-[#2D2D2D]"
                  style={{ fontSize: '2rem' }}
                >
                  my.
                </span>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleStart()}
                  placeholder="business"
                  autoFocus
                  className="flex-1 bg-transparent font-mono text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                  style={{ fontSize: '1.5rem' }}
                />
              </div>
              <p
                className="mt-2 font-sans text-[#C4C4C4]"
                style={{ fontSize: '0.75rem' }}
              >
                {t('tellUsYourBusiness')}
              </p>
            </motion.div>

            {/* Right — Start button */}
            <motion.div
              className="flex cursor-pointer items-center justify-center rounded-2xl"
              style={{ backgroundColor: '#4DE8D8' }}
              custom={1}
              initial="hidden"
              animate="visible"
              variants={blockVariants}
              onClick={handleStart}
              whileHover={{
                scale: 1.015,
                backgroundColor: '#3BCFBF',
                boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <span
                className="font-sans font-semibold text-white"
                style={{ fontSize: '1.3rem' }}
              >
                {t('start')}
              </span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="phase2"
            className="flex flex-1 flex-col"
            style={{ gap: '8px' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {/* Locked name display */}
            <motion.div
              className="flex items-baseline gap-2 rounded-2xl bg-[#F5F6F8] px-6 py-4"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <span
                className="font-serif font-light italic text-[#2D2D2D]"
                style={{ fontSize: '1.5rem' }}
              >
                my.
              </span>
              <span
                className="font-mono text-[#2D2D2D]"
                style={{ fontSize: '1.2rem' }}
              >
                {businessName}
              </span>
            </motion.div>

            {/* Form fields row */}
            <div className="grid grid-cols-3" style={{ gap: '8px', flex: '1' }}>
              {/* Phone */}
              <motion.div
                className="flex items-center gap-3 rounded-2xl bg-[#F5F6F8] px-5"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.06, ease: EASE }}
                whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
              >
                <Phone size={16} color="#4DE8D8" className="shrink-0" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('phonePlaceholder')}
                  className="w-full bg-transparent font-sans text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                  style={{ fontSize: '0.9rem' }}
                />
              </motion.div>

              {/* Email */}
              <motion.div
                className="flex items-center gap-3 rounded-2xl bg-[#F5F6F8] px-5"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.12, ease: EASE }}
                whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
              >
                <Mail size={16} color="#4DE8D8" className="shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('emailPlaceholder')}
                  className="w-full bg-transparent font-sans text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                  style={{ fontSize: '0.9rem' }}
                />
              </motion.div>

              {/* Business type */}
              <motion.div
                className="flex items-center gap-3 rounded-2xl bg-[#F5F6F8] px-5"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.18, ease: EASE }}
                whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
              >
                <Building2 size={16} color="#4DE8D8" className="shrink-0" />
                <input
                  type="text"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  placeholder={t('businessTypePlaceholder')}
                  className="w-full bg-transparent font-sans text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                  style={{ fontSize: '0.9rem' }}
                />
              </motion.div>
            </div>

            {/* Message + Send row */}
            <div className="grid grid-cols-[2fr_1fr]" style={{ gap: '8px', height: '72px' }}>
              <motion.div
                className="flex items-center rounded-2xl bg-[#F5F6F8] px-5"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.24, ease: EASE }}
                whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('messagePlaceholder')}
                  className="w-full bg-transparent font-sans text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                  style={{ fontSize: '0.9rem' }}
                />
              </motion.div>

              <motion.button
                className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl"
                style={{ backgroundColor: '#4DE8D8' }}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
                onClick={handleSubmit}
                whileHover={{
                  scale: 1.015,
                  backgroundColor: '#3BCFBF',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                }}
              >
                <Send size={16} color="white" />
                <span
                  className="font-sans font-semibold text-white"
                  style={{ fontSize: '0.9rem' }}
                >
                  {t('send')}
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back row */}
      <motion.div
        className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#F5F6F8]"
        style={{ height: '48px' }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.36, ease: EASE }}
        onClick={onBack}
        whileHover={{
          scale: 1.008,
          backgroundColor: '#EDEEF1',
          boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
        }}
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
