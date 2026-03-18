'use client'

import { useState } from 'react'
import { ArrowLeft, Phone, Mail, Building2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

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
    <div className="grid h-full grid-cols-[1fr_2fr_1fr] gap-3">
      {/* Left spacer with back button */}
      <div className="flex flex-col gap-3">
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
        <div 
          className="flex-1 rounded-2xl bg-[#F5F6F8]"
          style={{
            opacity: 0,
            animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
            animationDelay: '60ms',
          }}
        />
      </div>

      {/* Center form */}
      <div 
        className="flex flex-col rounded-2xl bg-[#F5F6F8] p-6"
        style={{
          opacity: 0,
          animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          animationDelay: '120ms',
        }}
      >
        <form onSubmit={handleSubmit} className="flex h-full flex-col">
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
              className="flex-1 bg-transparent font-mono text-[1.3rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
            />
          </div>

          {/* Other fields */}
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-[#E8E9EC] pb-3">
              <Phone size={18} color="#4DE8D8" />
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t('phonePlaceholder')}
                className="border-none bg-transparent font-sans text-[1rem] shadow-none focus-visible:ring-0"
              />
            </div>

            <div className="flex items-center gap-3 border-b border-[#E8E9EC] pb-3">
              <Mail size={18} color="#4DE8D8" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                className="border-none bg-transparent font-sans text-[1rem] shadow-none focus-visible:ring-0"
              />
            </div>

            <div className="flex items-center gap-3 border-b border-[#E8E9EC] pb-3">
              <Building2 size={18} color="#4DE8D8" />
              <Input
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                placeholder={t('businessTypePlaceholder')}
                className="border-none bg-transparent font-sans text-[1rem] shadow-none focus-visible:ring-0"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-auto">
            <Button
              type="submit"
              className="w-full rounded-xl bg-[#4DE8D8] py-5 font-sans text-[1rem] font-medium text-white transition-colors hover:bg-[#3BCFBF]"
            >
              {t('start')}
            </Button>
          </div>
        </form>
      </div>

      {/* Right spacer */}
      <div className="flex flex-col gap-3">
        <div 
          className="flex-1 rounded-2xl bg-[#F5F6F8]"
          style={{
            opacity: 0,
            animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
            animationDelay: '180ms',
          }}
        />
        <div 
          className="flex items-center justify-center rounded-2xl bg-[#F5F6F8] p-4"
          style={{
            opacity: 0,
            animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
            animationDelay: '240ms',
          }}
        >
          <img 
            id="site-logo" 
            src="/logo-placeholder.svg" 
            width={100} 
            height={33} 
            alt="MY.SITE" 
          />
        </div>
      </div>

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
