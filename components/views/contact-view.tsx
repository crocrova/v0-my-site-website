'use client'

import { useState } from 'react'
import { ArrowLeft, Phone, Mail, Building2, Send } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface ContactViewProps {
  onBack: () => void
}

export function ContactView({ onBack }: ContactViewProps) {
  const [businessName, setBusinessName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [businessType, setBusinessType] = useState('')
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ businessName, phone, email, businessType })
  }

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
          {t('contact')}
        </h2>
        <div style={{ width: '60px' }} />
      </div>

      {/* Form Content */}
      <div className="flex flex-1 items-center justify-center" style={{ padding: '16px' }}>
        <form 
          onSubmit={handleSubmit} 
          className="flex w-full max-w-md flex-col rounded-xl bg-white shadow-sm"
          style={{ padding: '24px' }}
        >
          {/* Business Name - prominent */}
          <div className="flex items-baseline gap-2 border-b border-[#E8E9EC] pb-4">
            <span className="font-serif text-[1.5rem] font-light italic text-[#2D2D2D]">
              my.
            </span>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="business"
              autoFocus
              className="flex-1 bg-transparent font-mono text-[1.2rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
            />
          </div>

          {/* Other fields */}
          <div className="mt-5 flex flex-col gap-4">
            <div className="flex items-center gap-3 rounded-lg bg-[#F5F6F8] px-3 py-2.5">
              <Phone size={18} className="text-[#4DE8D8]" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t('phonePlaceholder')}
                className="flex-1 bg-transparent font-sans text-[0.9rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-[#F5F6F8] px-3 py-2.5">
              <Mail size={18} className="text-[#4DE8D8]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                className="flex-1 bg-transparent font-sans text-[0.9rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-[#F5F6F8] px-3 py-2.5">
              <Building2 size={18} className="text-[#4DE8D8]" />
              <input
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                placeholder={t('businessTypePlaceholder')}
                className="flex-1 bg-transparent font-sans text-[0.9rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#4DE8D8] py-3 font-sans text-[0.9rem] font-medium text-white transition-colors hover:bg-[#3BCFBF]"
          >
            {t('start')}
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  )
}
