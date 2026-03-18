'use client'

import { useState, useEffect } from 'react'
import { Menu, Globe, ArrowLeft, Phone, Mail, Building2, CheckCircle, Zap, Target, Award, Sparkles, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
    id: 1,
    name: 'TOPO',
    labelKey: 'topoLabel',
    subtitleKey: 'topoSubtitle',
    bg: '#1A1A1A',
    nameFont: 'font-sans font-bold',
    nameColor: '#C8F000',
    labelColor: 'rgba(200, 240, 0, 0.6)',
    swatches: ['#C8F000', '#1A1A1A', '#FFFFFF'],
    mockupBg: '#2A2A2A',
  },
  {
    id: 2,
    name: 'Bahía Capital',
    labelKey: 'bahiaLabel',
    subtitleKey: 'bahiaSubtitle',
    bg: '#FAFAF8',
    border: '1px solid #E8E3D6',
    nameFont: 'font-serif font-medium italic',
    nameColor: '#B8A88A',
    labelColor: 'rgba(184, 168, 138, 0.6)',
    swatches: ['#B8A88A', '#FAFAF8', '#2D2D2D'],
    mockupBg: '#F0EDE6',
  },
  {
    id: 3,
    name: 'Clínica Bes',
    labelKey: 'clinicaLabel',
    subtitleKey: 'clinicaSubtitle',
    bg: '#FFFFFF',
    border: '1px solid #E8E9EC',
    nameFont: 'font-sans font-medium',
    nameColor: '#84B59F',
    labelColor: 'rgba(132, 181, 159, 0.6)',
    swatches: ['#84B59F', '#FFFFFF', '#2D2D2D'],
    mockupBg: '#F5F9F7',
  },
  {
    id: 4,
    name: 'Corteza',
    labelKey: 'cortezaLabel',
    subtitleKey: 'cortezaSubtitle',
    bg: '#1C1714',
    nameFont: 'font-serif font-light italic',
    nameColor: '#C89B60',
    labelColor: 'rgba(200, 155, 96, 0.6)',
    swatches: ['#C89B60', '#1C1714', '#F5E6D0'],
    mockupBg: '#2A2218',
  },
  {
    id: 5,
    name: 'Castillo & Asociados',
    labelKey: 'castilloLabel',
    subtitleKey: 'castilloSubtitle',
    bg: '#F8F9FC',
    border: '1px solid #D4D8E8',
    nameFont: 'font-sans font-semibold',
    nameColor: '#1E2761',
    labelColor: 'rgba(30, 39, 97, 0.6)',
    swatches: ['#1E2761', '#F8F9FC', '#B8A88A'],
    mockupBg: '#ECEEF5',
  },
]

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

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDialog, setActiveDialog] = useState<'portfolio' | 'plans' | 'contact' | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'web' | 'mobile'>('web')
  const [businessName, setBusinessName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const { language, setLanguage, t } = useLanguage()

  // Cycle highlight for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex(prev => (prev + 1) % businessNames.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ businessName, phone, email, businessType })
    setActiveDialog(null)
  }

  const selectedProject = expandedProject ? projects.find(p => p.id === expandedProject) : null

  return (
    <div className="flex min-h-screen flex-col gap-3 overflow-y-auto pb-6">
      {/* Mobile Header - 44px */}
      <div className="flex h-11 shrink-0 items-center justify-between rounded-2xl bg-[#F5F6F8] px-4">
        <img 
          src="/logo-placeholder.svg" 
          width={70} 
          height={23} 
          alt="MY.SITE" 
        />
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="rounded-xl bg-white p-2">
              <Menu size={20} color="#2D2D2D" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[260px] bg-white p-0">
            <SheetHeader className="border-b border-[#E8E9EC] p-4">
              <SheetTitle className="text-left font-sans text-[0.9rem] font-semibold text-[#2D2D2D]">
                Menu
              </SheetTitle>
            </SheetHeader>
            
            <div className="flex flex-col p-4">
              <button
                onClick={() => {
                  setActiveDialog('portfolio')
                  setIsOpen(false)
                }}
                className="border-b border-[#E8E9EC] py-3 text-left font-sans text-[0.9rem] font-medium text-[#2D2D2D]"
              >
                {t('portfolio')}
              </button>
              <button
                onClick={() => {
                  setActiveDialog('plans')
                  setIsOpen(false)
                }}
                className="border-b border-[#E8E9EC] py-3 text-left font-sans text-[0.9rem] font-medium text-[#2D2D2D]"
              >
                {t('plans')}
              </button>
              <button
                onClick={() => {
                  setActiveDialog('contact')
                  setIsOpen(false)
                }}
                className="border-b border-[#E8E9EC] py-3 text-left font-sans text-[0.9rem] font-medium text-[#2D2D2D]"
              >
                {t('contact')}
              </button>
              
              {/* Language toggle */}
              <div className="mt-5 flex items-center gap-3">
                <Globe size={16} color="#4DE8D8" />
                <div className="flex items-center gap-2 font-sans text-[0.85rem]">
                  <button
                    onClick={() => setLanguage('en')}
                    className={language === 'en' ? 'font-semibold text-[#2D2D2D]' : 'text-[#C4C4C4]'}
                  >
                    EN
                  </button>
                  <span className="text-[#C4C4C4]">/</span>
                  <button
                    onClick={() => setLanguage('es')}
                    className={language === 'es' ? 'font-semibold text-[#2D2D2D]' : 'text-[#C4C4C4]'}
                  >
                    ES
                  </button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Hero Block - Mobile (5 names, 1.2rem) */}
      <div className="relative rounded-2xl bg-[#F5F6F8] p-5">
        {/* Only Sparkles icon */}
        <Sparkles 
          className="absolute right-4 top-4" 
          size={16} 
          color="#4DE8D8" 
        />
        <div className="flex flex-col gap-0.5">
          {businessNames.map((item, index) => (
            <div key={index} className="flex items-baseline">
              <span 
                className="font-serif font-light italic transition-colors duration-200"
                style={{ fontSize: '1.2rem', color: highlightedIndex === index ? '#4DE8D8' : '#2D2D2D' }}
              >
                {item.prefix}
              </span>
              <span 
                className="font-sans font-medium transition-colors duration-200"
                style={{ fontSize: '1.2rem', color: highlightedIndex === index ? '#4DE8D8' : '#2D2D2D' }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Block - Compact */}
      <div 
        className="flex items-center justify-between rounded-2xl bg-[#F5F6F8] p-5"
        onClick={() => setActiveDialog('portfolio')}
      >
        <span className="font-sans text-[1rem] font-semibold text-[#2D2D2D]">
          {t('portfolio')}
        </span>
        <ArrowRight size={18} color="#8C8C8C" />
      </div>

      {/* Plans Block - Compact */}
      <div 
        className="flex items-center justify-between rounded-2xl bg-[#F5F6F8] p-5"
        onClick={() => setActiveDialog('plans')}
      >
        <span className="font-sans text-[1rem] font-semibold text-[#2D2D2D]">
          {t('plans')}
        </span>
        <ArrowRight size={18} color="#8C8C8C" />
      </div>

      {/* Contact Block - Compact */}
      <div 
        className="flex items-center justify-between rounded-2xl bg-[#F5F6F8] p-5"
        onClick={() => setActiveDialog('contact')}
      >
        <div className="flex items-baseline gap-1">
          <span className="font-serif text-[1.1rem] font-light italic text-[#2D2D2D]">
            my.
          </span>
          <span className="font-mono text-[0.9rem] text-[#C4C4C4]">
            ____
          </span>
        </div>
        <ArrowRight size={18} color="#8C8C8C" />
      </div>

      {/* Portfolio Dialog - slides up from bottom */}
      <Dialog open={activeDialog === 'portfolio'} onOpenChange={(open) => !open && setActiveDialog(null)}>
        <DialogContent className="fixed inset-x-0 bottom-0 top-auto h-[90vh] max-w-full translate-y-0 overflow-y-auto rounded-t-2xl p-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom">
          <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between border-b border-[#E8E9EC] bg-white p-4">
            <button 
              onClick={() => {
                setExpandedProject(null)
                setActiveDialog(null)
              }}
              className="flex items-center gap-2 font-sans text-[0.85rem] font-medium text-[#8C8C8C]"
            >
              <ArrowLeft size={16} />
              {t('back')}
            </button>
            <DialogTitle className="font-sans text-[0.9rem] font-semibold text-[#2D2D2D]">
              {t('portfolio')}
            </DialogTitle>
            <div className="w-14" />
          </DialogHeader>
          
          <div className="flex flex-col gap-3 p-4">
            {projects.map((project) => (
              <div key={project.id}>
                <div
                  className="rounded-2xl p-4 transition-all duration-300"
                  style={{
                    backgroundColor: project.bg,
                    border: project.border,
                  }}
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  <p 
                    className={`${project.nameFont}`}
                    style={{ color: project.nameColor, fontSize: '1rem' }}
                  >
                    {project.name}
                  </p>
                  <div className="mt-1.5 flex gap-1">
                    {project.swatches.map((color, i) => (
                      <div 
                        key={i}
                        className="rounded-full"
                        style={{ 
                          width: '10px', 
                          height: '10px',
                          backgroundColor: color, 
                          border: color === '#FFFFFF' ? '1px solid #E8E9EC' : undefined 
                        }}
                      />
                    ))}
                  </div>
                  <p 
                    className="mt-1.5 font-sans"
                    style={{ color: project.labelColor, fontSize: '0.65rem' }}
                  >
                    {t(project.labelKey)}
                  </p>
                </div>
                
                {/* Expanded detail - pushes others down */}
                <div 
                  className="overflow-hidden transition-all duration-300"
                  style={{ 
                    maxHeight: expandedProject === project.id ? '500px' : '0',
                    opacity: expandedProject === project.id ? 1 : 0,
                  }}
                >
                  <div className="mt-2 rounded-2xl bg-[#F5F6F8] p-4">
                    <p className="font-sans text-[0.8rem] text-[#8C8C8C]">
                      {t(project.subtitleKey)}
                    </p>
                    
                    <div className="mt-2 flex items-center gap-2">
                      {project.swatches.map((color, i) => (
                        <div key={i} className="flex flex-col items-center gap-0.5">
                          <div 
                            className="rounded-full"
                            style={{ 
                              width: '12px', 
                              height: '12px',
                              backgroundColor: color, 
                              border: color === '#FFFFFF' ? '1px solid #E8E9EC' : undefined 
                            }}
                          />
                          <span className="font-mono text-[#8C8C8C]" style={{ fontSize: '0.5rem' }}>
                            {color}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-2 flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`text-[0.75rem] ${viewMode === 'web' ? 'bg-white font-semibold text-[#2D2D2D]' : 'text-[#C4C4C4]'}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          setViewMode('web')
                        }}
                      >
                        {t('web')}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`text-[0.75rem] ${viewMode === 'mobile' ? 'bg-white font-semibold text-[#2D2D2D]' : 'text-[#C4C4C4]'}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          setViewMode('mobile')
                        }}
                      >
                        {t('mobile')}
                      </Button>
                    </div>
                    
                    <div className="mt-2 flex justify-center">
                      {viewMode === 'web' ? (
                        <div 
                          id={`portfolio-${project.id}-web-mobile`}
                          className="relative w-full overflow-hidden rounded-xl border border-[#E8E9EC]"
                          style={{ 
                            backgroundColor: project.mockupBg,
                            aspectRatio: '16/10',
                          }}
                        >
                          {/* Browser chrome */}
                          <div 
                            className="absolute top-0 left-0 right-0 flex items-center border-b border-[#E8E9EC] bg-[#F5F6F8]"
                            style={{ 
                              height: '20px', 
                              padding: '0 8px',
                              borderRadius: '12px 12px 0 0',
                              gap: '4px',
                            }}
                          >
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#28C840' }} />
                          </div>
                        </div>
                      ) : (
                        <div 
                          id={`portfolio-${project.id}-mobile-mobile`}
                          className="relative overflow-hidden"
                          style={{ 
                            backgroundColor: project.mockupBg,
                            width: '120px',
                            aspectRatio: '9/19',
                            borderRadius: '16px',
                            border: '2px solid #2D2D2D',
                          }}
                        >
                          {/* Phone notch */}
                          <div 
                            className="absolute top-0 left-0 right-0 flex items-center justify-center"
                            style={{ 
                              height: '16px', 
                              backgroundColor: project.mockupBg,
                            }}
                          >
                            <div style={{ width: '30px', height: '3px', borderRadius: '2px', backgroundColor: '#E8E9EC' }} />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <p className="mt-2 text-center font-serif text-[0.6rem] italic text-[#C4C4C4]">
                      {t('portfolioDisclaimer')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Plans Dialog */}
      <Dialog open={activeDialog === 'plans'} onOpenChange={(open) => !open && setActiveDialog(null)}>
        <DialogContent className="fixed inset-x-0 bottom-0 top-auto h-[90vh] max-w-full translate-y-0 overflow-y-auto rounded-t-2xl p-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom">
          <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between border-b border-[#E8E9EC] bg-white p-4">
            <button 
              onClick={() => setActiveDialog(null)}
              className="flex items-center gap-2 font-sans text-[0.85rem] font-medium text-[#8C8C8C]"
            >
              <ArrowLeft size={16} />
              {t('back')}
            </button>
            <DialogTitle className="font-sans text-[0.9rem] font-semibold text-[#2D2D2D]">
              {t('plans')}
            </DialogTitle>
            <div className="w-14" />
          </DialogHeader>
          
          <div className="flex flex-col gap-3 p-4">
            {plans.map((plan) => {
              const Icon = plan.icon
              return (
                <div
                  key={plan.id}
                  className="flex flex-col rounded-2xl border border-[#E8E9EC] bg-white p-4"
                >
                  <Icon size={24} color="#4DE8D8" />
                  <h3 className="mt-2 font-sans text-[1.1rem] font-semibold text-[#2D2D2D]">
                    {t(plan.titleKey)}
                  </h3>
                  <p className="mt-1 font-sans text-[0.8rem] leading-relaxed text-[#8C8C8C]">
                    {t(plan.descKey)}
                  </p>
                  
                  <div className="mt-3 flex flex-col gap-1.5">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle size={14} color="#4DE8D8" />
                        <span className="font-sans text-[0.75rem] text-[#2D2D2D]">
                          {t(feature)}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => setActiveDialog('contact')}
                    className="mt-3 w-full rounded-xl bg-[#4DE8D8] py-2 font-sans text-[0.85rem] font-medium text-white hover:bg-[#3BCFBF]"
                  >
                    {t('requestAnalysis')}
                  </Button>
                </div>
              )
            })}
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Dialog */}
      <Dialog open={activeDialog === 'contact'} onOpenChange={(open) => !open && setActiveDialog(null)}>
        <DialogContent className="fixed inset-x-0 bottom-0 top-auto h-[90vh] max-w-full translate-y-0 overflow-y-auto rounded-t-2xl p-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom">
          <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between border-b border-[#E8E9EC] bg-white p-4">
            <button 
              onClick={() => setActiveDialog(null)}
              className="flex items-center gap-2 font-sans text-[0.85rem] font-medium text-[#8C8C8C]"
            >
              <ArrowLeft size={16} />
              {t('back')}
            </button>
            <DialogTitle className="font-sans text-[0.9rem] font-semibold text-[#2D2D2D]">
              {t('contact')}
            </DialogTitle>
            <div className="w-14" />
          </DialogHeader>
          
          <div className="p-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

              <div className="flex items-center gap-2 border-b border-[#E8E9EC] pb-2">
                <Phone size={16} color="#4DE8D8" />
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('phonePlaceholder')}
                  className="border-none bg-transparent font-sans text-[0.9rem] shadow-none focus-visible:ring-0"
                />
              </div>

              <div className="flex items-center gap-2 border-b border-[#E8E9EC] pb-2">
                <Mail size={16} color="#4DE8D8" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('emailPlaceholder')}
                  className="border-none bg-transparent font-sans text-[0.9rem] shadow-none focus-visible:ring-0"
                />
              </div>

              <div className="flex items-center gap-2 border-b border-[#E8E9EC] pb-2">
                <Building2 size={16} color="#4DE8D8" />
                <Input
                  type="text"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  placeholder={t('businessTypePlaceholder')}
                  className="border-none bg-transparent font-sans text-[0.9rem] shadow-none focus-visible:ring-0"
                />
              </div>

              <Button
                type="submit"
                className="mt-4 w-full rounded-xl bg-[#4DE8D8] py-4 font-sans text-[0.9rem] font-medium text-white hover:bg-[#3BCFBF]"
              >
                {t('start')}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
