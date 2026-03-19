'use client'

import { useState, useEffect } from 'react'
import { Menu, Globe, ArrowLeft, ArrowRight, Phone, Mail, Building2, Check, Sparkles, MapPin, Send } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

// Hero names for mobile - only 5
const businessNames = [
  { prefix: 'my.', name: 'site' },
  { prefix: 'my.', name: 'restaurant' },
  { prefix: 'my.', name: 'company' },
  { prefix: 'my.', name: 'coffee' },
  { prefix: 'my.', name: 'clinic' },
]

// Projects data
const projects = [
  {
    id: 'topo',
    name: 'TOPO',
    industry: { en: 'Restaurant', es: 'Restaurante' },
    colors: ['#1A1A1A', '#D4A574', '#F5F0EB'],
  },
  {
    id: 'bahia-capital',
    name: 'Bahía Capital',
    industry: { en: 'Real Estate', es: 'Bienes Raíces' },
    colors: ['#0A2540', '#4DE8D8', '#FFFFFF'],
  },
  {
    id: 'clinica-bes',
    name: 'Clínica Bes',
    industry: { en: 'Health Clinic', es: 'Clínica de Salud' },
    colors: ['#2D5A4A', '#A8D5BA', '#FFFFFF'],
  },
  {
    id: 'corteza',
    name: 'Corteza',
    industry: { en: 'Coffee Shop', es: 'Cafetería' },
    colors: ['#3D2B1F', '#C4A77D', '#FAF7F2'],
  },
  {
    id: 'castillo',
    name: 'Castillo & Asociados',
    industry: { en: 'Law Firm', es: 'Bufete Legal' },
    colors: ['#1C2331', '#B8860B', '#FFFFFF'],
  },
]

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

type DialogType = 'portfolio' | 'plans' | 'contact' | null

export function MobileMenu() {
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDialog, setActiveDialog] = useState<DialogType>(null)
  const [loadedItems, setLoadedItems] = useState<number[]>([])
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  // Contact form state
  const [businessName, setBusinessName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [businessType, setBusinessType] = useState('')

  useEffect(() => {
    businessNames.forEach((_, index) => {
      setTimeout(() => {
        setLoadedItems(prev => [...prev, index])
      }, index * 60)
    })

    const totalLoadTime = businessNames.length * 60 + 300
    const highlightTimeout = setTimeout(() => {
      setHighlightedIndex(0)
    }, totalLoadTime)

    return () => clearTimeout(highlightTimeout)
  }, [])

  useEffect(() => {
    if (highlightedIndex === null) return

    const interval = setInterval(() => {
      setHighlightedIndex(prev => 
        prev === null ? 0 : (prev + 1) % businessNames.length
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [highlightedIndex])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ businessName, phone, email, businessType })
  }

  return (
    <div className="flex h-full flex-col" style={{ gap: '6px' }}>
      {/* Mobile Header */}
      <div 
        className="flex shrink-0 items-center justify-between rounded-xl bg-[#F5F6F8]"
        style={{ height: '44px', padding: '0 12px' }}
      >
        {/* Logo placeholder */}
        <div className="flex h-6 w-16 items-center justify-center rounded bg-[#E8E9EC]">
          <span className="font-sans text-[0.5rem] font-medium text-[#8C8C8C]">LOGO</span>
        </div>

        {/* Right side: Language + Menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="flex items-center gap-1 rounded-md px-2 py-1"
          >
            <Globe size={14} className="text-[#4DE8D8]" />
            <span className="font-sans text-[0.7rem] font-medium text-[#2D2D2D]">
              {language.toUpperCase()}
            </span>
          </button>
          
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button className="rounded-md p-1.5 transition-colors hover:bg-[#E8E9EC]">
                <Menu size={18} className="text-[#2D2D2D]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-white p-0" aria-describedby={undefined}>
              <SheetHeader className="border-b border-[#E8E9EC] p-4">
                <SheetTitle className="font-sans text-[0.9rem] font-semibold text-[#2D2D2D]">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-3" style={{ gap: '6px' }}>
                <button
                  onClick={() => { setActiveDialog('portfolio'); setMenuOpen(false) }}
                  className="flex items-center justify-between rounded-lg bg-[#F5F6F8] p-3 text-left"
                >
                  <span className="font-sans text-[0.85rem] font-medium text-[#2D2D2D]">
                    {t('portfolio')}
                  </span>
                  <ArrowRight size={16} className="text-[#8C8C8C]" />
                </button>
                <button
                  onClick={() => { setActiveDialog('plans'); setMenuOpen(false) }}
                  className="flex items-center justify-between rounded-lg bg-[#F5F6F8] p-3 text-left"
                >
                  <span className="font-sans text-[0.85rem] font-medium text-[#2D2D2D]">
                    {t('plans')}
                  </span>
                  <ArrowRight size={16} className="text-[#8C8C8C]" />
                </button>
                <button
                  onClick={() => { setActiveDialog('contact'); setMenuOpen(false) }}
                  className="flex items-center justify-between rounded-lg bg-[#F5F6F8] p-3 text-left"
                >
                  <span className="font-sans text-[0.85rem] font-medium text-[#2D2D2D]">
                    {t('contact')}
                  </span>
                  <ArrowRight size={16} className="text-[#8C8C8C]" />
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto" style={{ paddingBottom: '16px' }}>
        <div className="flex flex-col" style={{ gap: '6px' }}>
          {/* Hero Block */}
          <div 
            className="relative flex flex-col justify-center rounded-xl bg-[#F5F6F8]"
            style={{ padding: '16px', minHeight: '180px' }}
          >
            <Sparkles 
              className="absolute"
              style={{ right: '12px', top: '12px' }}
              size={16} 
              color="#4DE8D8" 
            />
            
            <div className="flex flex-col" style={{ gap: '2px' }}>
              {businessNames.map((item, index) => (
                <div
                  key={index}
                  className="flex items-baseline"
                  style={{
                    opacity: loadedItems.includes(index) ? 1 : 0,
                    transition: 'opacity 200ms ease-out',
                  }}
                >
                  <span 
                    className="font-serif font-light italic"
                    style={{ 
                      fontSize: '1.3rem',
                      color: highlightedIndex === index ? '#4DE8D8' : '#2D2D2D',
                      transition: 'color 200ms ease-in-out'
                    }}
                  >
                    {item.prefix}
                  </span>
                  <span 
                    className="font-sans font-medium"
                    style={{ 
                      fontSize: '1.3rem',
                      color: highlightedIndex === index ? '#4DE8D8' : '#2D2D2D',
                      transition: 'color 200ms ease-in-out'
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Block Grid: Portfolio + Plans */}
          <div className="grid grid-cols-2" style={{ gap: '6px' }}>
            <button
              onClick={() => setActiveDialog('portfolio')}
              className="flex items-center justify-between rounded-xl bg-[#F5F6F8] text-left"
              style={{ padding: '14px' }}
            >
              <span className="font-sans text-[0.85rem] font-semibold text-[#2D2D2D]">
                {t('portfolio')}
              </span>
              <ArrowRight size={16} className="text-[#8C8C8C]" />
            </button>
            <button
              onClick={() => setActiveDialog('plans')}
              className="flex items-center justify-between rounded-xl bg-[#F5F6F8] text-left"
              style={{ padding: '14px' }}
            >
              <span className="font-sans text-[0.85rem] font-semibold text-[#2D2D2D]">
                {t('plans')}
              </span>
              <ArrowRight size={16} className="text-[#8C8C8C]" />
            </button>
          </div>

          {/* Contact Block */}
          <button
            onClick={() => setActiveDialog('contact')}
            className="flex items-center justify-between rounded-xl bg-[#F5F6F8] text-left"
            style={{ padding: '14px' }}
          >
            <span className="font-sans text-[0.85rem] font-semibold text-[#2D2D2D]">
              {t('contact')}
            </span>
            <ArrowRight size={16} className="text-[#8C8C8C]" />
          </button>

          {/* Logo Block */}
          <div 
            className="flex flex-col justify-between rounded-xl bg-[#F5F6F8]"
            style={{ padding: '14px' }}
          >
            <div className="flex h-8 w-20 items-center justify-center rounded bg-[#E8E9EC]">
              <span className="font-sans text-[0.55rem] font-medium text-[#8C8C8C]">LOGO</span>
            </div>
            <div className="mt-3">
              <div className="flex items-center gap-1.5">
                <MapPin size={12} className="text-[#4DE8D8]" />
                <span className="font-sans text-[0.7rem] text-[#8C8C8C]">
                  Los Cabos, MX
                </span>
              </div>
              <p className="mt-1 font-sans text-[0.6rem] text-[#C4C4C4]">
                by OROZ.CONSTRUCTION
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Dialog */}
      <Dialog open={activeDialog === 'portfolio'} onOpenChange={(open) => !open && setActiveDialog(null)}>
        <DialogContent 
          className="fixed inset-x-0 bottom-0 top-auto h-[85vh] max-w-full translate-y-0 overflow-hidden rounded-t-2xl border-0 p-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom" 
          aria-describedby={undefined}
        >
          <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between border-b border-[#E8E9EC] bg-white p-3">
            <button 
              onClick={() => { setActiveDialog(null); setExpandedProject(null) }}
              className="flex items-center gap-2 font-sans text-[0.8rem] font-medium text-[#8C8C8C]"
            >
              <ArrowLeft size={16} />
              {t('back')}
            </button>
            <DialogTitle className="font-sans text-[0.85rem] font-semibold text-[#2D2D2D]">
              {t('portfolio')}
            </DialogTitle>
            <div style={{ width: '50px' }} />
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto p-3">
            <div className="flex flex-col" style={{ gap: '8px' }}>
              {projects.map((project) => (
                <div key={project.id}>
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="flex w-full items-center justify-between rounded-xl bg-[#F5F6F8] text-left"
                    style={{ padding: '14px' }}
                  >
                    <div>
                      <p className="font-sans text-[0.85rem] font-semibold text-[#2D2D2D]">
                        {project.name}
                      </p>
                      <p className="font-sans text-[0.7rem] text-[#8C8C8C]">
                        {project.industry[language]}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {project.colors.map((color, i) => (
                          <div
                            key={i}
                            className="rounded-full border border-black/10"
                            style={{ width: '10px', height: '10px', backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <ArrowRight 
                        size={16} 
                        className={`text-[#8C8C8C] transition-transform ${expandedProject === project.id ? 'rotate-90' : ''}`} 
                      />
                    </div>
                  </button>
                  
                  {/* Expanded content */}
                  {expandedProject === project.id && (
                    <div 
                      className="mt-2 overflow-hidden rounded-xl bg-white"
                      style={{ 
                        padding: '12px',
                        animation: 'slideDown 200ms ease-out',
                      }}
                    >
                      <div 
                        id={`mobile-preview-${project.id}`}
                        className="flex aspect-[4/3] items-center justify-center rounded-lg bg-[#F5F6F8]"
                      >
                        <span className="font-sans text-[0.75rem] text-[#C4C4C4]">
                          {t('webPreview')}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Plans Dialog */}
      <Dialog open={activeDialog === 'plans'} onOpenChange={(open) => !open && setActiveDialog(null)}>
        <DialogContent 
          className="fixed inset-x-0 bottom-0 top-auto h-[85vh] max-w-full translate-y-0 overflow-hidden rounded-t-2xl border-0 p-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom" 
          aria-describedby={undefined}
        >
          <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between border-b border-[#E8E9EC] bg-white p-3">
            <button 
              onClick={() => setActiveDialog(null)}
              className="flex items-center gap-2 font-sans text-[0.8rem] font-medium text-[#8C8C8C]"
            >
              <ArrowLeft size={16} />
              {t('back')}
            </button>
            <DialogTitle className="font-sans text-[0.85rem] font-semibold text-[#2D2D2D]">
              {t('plans')}
            </DialogTitle>
            <div style={{ width: '50px' }} />
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto p-3">
            <div className="flex flex-col" style={{ gap: '10px' }}>
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`flex flex-col rounded-xl bg-white ${plan.popular ? 'ring-2 ring-[#4DE8D8]' : 'border border-[#E8E9EC]'}`}
                  style={{ padding: '16px' }}
                >
                  {plan.popular && (
                    <span className="mb-2 w-fit rounded-full bg-[#4DE8D8] px-2 py-0.5 font-sans text-[0.55rem] font-medium text-white">
                      {t('popular')}
                    </span>
                  )}
                  <h3 className="font-sans text-[0.95rem] font-semibold text-[#2D2D2D]">
                    {t(plan.titleKey)}
                  </h3>
                  <p className="mt-1 font-sans text-[1.3rem] font-bold text-[#2D2D2D]">
                    {plan.price}
                  </p>
                  
                  <div className="mt-3 flex flex-col gap-2">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check size={14} className="mt-0.5 shrink-0 text-[#4DE8D8]" />
                        <span className="font-sans text-[0.7rem] text-[#8C8C8C]">
                          {t(feature)}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setActiveDialog('contact')}
                    className={`mt-4 w-full rounded-lg py-2.5 font-sans text-[0.75rem] font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-[#4DE8D8] text-white' 
                        : 'bg-[#F5F6F8] text-[#2D2D2D]'
                    }`}
                  >
                    {t('getStarted')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Dialog */}
      <Dialog open={activeDialog === 'contact'} onOpenChange={(open) => !open && setActiveDialog(null)}>
        <DialogContent 
          className="fixed inset-x-0 bottom-0 top-auto h-[85vh] max-w-full translate-y-0 overflow-hidden rounded-t-2xl border-0 p-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom" 
          aria-describedby={undefined}
        >
          <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between border-b border-[#E8E9EC] bg-white p-3">
            <button 
              onClick={() => setActiveDialog(null)}
              className="flex items-center gap-2 font-sans text-[0.8rem] font-medium text-[#8C8C8C]"
            >
              <ArrowLeft size={16} />
              {t('back')}
            </button>
            <DialogTitle className="font-sans text-[0.85rem] font-semibold text-[#2D2D2D]">
              {t('contact')}
            </DialogTitle>
            <div style={{ width: '50px' }} />
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto p-4">
            <form onSubmit={handleSubmit} className="flex flex-col">
              {/* Business Name */}
              <div className="flex items-baseline gap-2 border-b border-[#E8E9EC] pb-3">
                <span className="font-serif text-[1.3rem] font-light italic text-[#2D2D2D]">
                  my.
                </span>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="business"
                  autoFocus
                  className="flex-1 bg-transparent font-mono text-[1.1rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                />
              </div>

              {/* Other fields */}
              <div className="mt-5 flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-lg bg-[#F5F6F8] px-3 py-2.5">
                  <Phone size={16} className="text-[#4DE8D8]" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t('phonePlaceholder')}
                    className="flex-1 bg-transparent font-sans text-[0.85rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-[#F5F6F8] px-3 py-2.5">
                  <Mail size={16} className="text-[#4DE8D8]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('emailPlaceholder')}
                    className="flex-1 bg-transparent font-sans text-[0.85rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-[#F5F6F8] px-3 py-2.5">
                  <Building2 size={16} className="text-[#4DE8D8]" />
                  <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder={t('businessTypePlaceholder')}
                    className="flex-1 bg-transparent font-sans text-[0.85rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#4DE8D8] py-3 font-sans text-[0.85rem] font-medium text-white"
              >
                {t('start')}
                <Send size={16} />
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 300px;
          }
        }
      `}</style>
    </div>
  )
}
