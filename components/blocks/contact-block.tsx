'use client'

import { useState, useEffect } from 'react'
import { MousePointer2, Phone, Mail, Building2, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function ContactBlock() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [businessName, setBusinessName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [fieldsVisible, setFieldsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden'
      // Stagger field animations
      setTimeout(() => setFieldsVisible(true), 200)
    } else {
      document.body.style.overflow = ''
      setFieldsVisible(false)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isExpanded])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ businessName, phone, email, businessType })
    alert(t('start') + '!')
  }

  return (
    <>
      <div 
        id="contact-block"
        className="bento-block block-cursor flex h-full w-full flex-col rounded-2xl bg-[#F5F6F8] p-6"
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        <MousePointer2 size={22} color="#4DE8D8" />
        
        <div className="mt-4 flex flex-1 flex-col justify-center">
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-[1.5rem] font-light italic text-[#2D2D2D]">
              my.
            </span>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="business"
              className="flex-1 border-b border-[#E8E9EC] bg-transparent font-mono text-[1.2rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:border-[#4DE8D8] focus:outline-none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <p className="mt-3 font-sans text-[0.75rem] text-[#C4C4C4]">
            {t('tellUsYourBusiness')}
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

          {/* Contact Form */}
          <div className="mx-auto max-w-lg px-4 py-8 md:px-8 md:py-16">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Business Name */}
              <div 
                className="flex items-baseline gap-2 border-b border-[#E8E9EC] pb-4"
                style={{
                  opacity: 1,
                }}
              >
                <span className="font-serif text-[2rem] font-light italic text-[#2D2D2D]">
                  my.
                </span>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="business"
                  autoFocus
                  className="flex-1 bg-transparent font-mono text-[1.5rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div 
                className="flex items-center gap-3 border-b border-[#E8E9EC] pb-4"
                style={{
                  opacity: fieldsVisible ? 1 : 0,
                  transform: fieldsVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '0ms',
                }}
              >
                <Phone size={20} color="#4DE8D8" />
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('phonePlaceholder')}
                  className="border-none bg-transparent font-sans text-[1.1rem] shadow-none focus-visible:ring-0"
                />
              </div>

              {/* Email */}
              <div 
                className="flex items-center gap-3 border-b border-[#E8E9EC] pb-4"
                style={{
                  opacity: fieldsVisible ? 1 : 0,
                  transform: fieldsVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '100ms',
                }}
              >
                <Mail size={20} color="#4DE8D8" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('emailPlaceholder')}
                  className="border-none bg-transparent font-sans text-[1.1rem] shadow-none focus-visible:ring-0"
                />
              </div>

              {/* Business Type */}
              <div 
                className="flex items-center gap-3 border-b border-[#E8E9EC] pb-4"
                style={{
                  opacity: fieldsVisible ? 1 : 0,
                  transform: fieldsVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '200ms',
                }}
              >
                <Building2 size={20} color="#4DE8D8" />
                <Input
                  type="text"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  placeholder={t('businessTypePlaceholder')}
                  className="border-none bg-transparent font-sans text-[1.1rem] shadow-none focus-visible:ring-0"
                />
              </div>

              {/* Submit Button */}
              <div
                style={{
                  opacity: fieldsVisible ? 1 : 0,
                  transform: fieldsVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '300ms',
                }}
              >
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-[#4DE8D8] px-8 py-6 font-sans text-[1.1rem] font-medium text-white transition-colors hover:bg-[#3BCFBF]"
                >
                  {t('start')}
                </Button>
              </div>
            </form>
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
      `}</style>
    </>
  )
}
