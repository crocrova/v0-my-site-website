'use client'

import { useState, useEffect } from 'react'
import {
  Menu, Globe, ArrowLeft, Phone, Mail, Building2,
  CheckCircle, ArrowRight, Sparkles, Send, MousePointer2,
} from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { motion, AnimatePresence } from 'framer-motion'
import TopoSite from '@/components/portfolio-sites/topo-site'
import BahiaCapitalSite from '@/components/portfolio-sites/bahia-capital-site'
import ClinicaBesSite from '@/components/portfolio-sites/clinica-bes-site'
import CortezaSite from '@/components/portfolio-sites/corteza-site'
import GranoSite from '@/components/portfolio-sites/grano-site'
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

const businessNames = [
  { prefix: 'my.', name: 'site' },
  { prefix: 'my.', name: 'restaurant' },
  { prefix: 'my.', name: 'company' },
  { prefix: 'my.', name: 'coffee' },
  { prefix: 'my.', name: 'clinic' },
  { prefix: 'my.', name: 'hotel' },
  { prefix: 'my.', name: 'studio' },
]

const projects = [
  {
    id: 1, name: 'TOPO', labelKey: 'topoLabel', subtitleKey: 'topoSubtitle',
    bg: '#1A1A1A', nameFont: 'font-sans font-bold', nameColor: '#C8F000',
    labelColor: 'rgba(200, 240, 0, 0.6)', swatches: ['#C8F000', '#1A1A1A', '#FFFFFF'], mockupBg: '#2A2A2A',
  },
  {
    id: 2, name: 'Bahía Capital', labelKey: 'bahiaLabel', subtitleKey: 'bahiaSubtitle',
    bg: '#FAFAF8', border: '1px solid #E8E3D6', nameFont: 'font-serif font-medium italic',
    nameColor: '#B8A88A', labelColor: 'rgba(184, 168, 138, 0.6)', swatches: ['#B8A88A', '#FAFAF8', '#2D2D2D'], mockupBg: '#F0EDE6',
  },
  {
    id: 3, name: 'Clínica Bes', labelKey: 'clinicaLabel', subtitleKey: 'clinicaSubtitle',
    bg: '#FFFFFF', border: '1px solid #E8E9EC', nameFont: 'font-sans font-medium',
    nameColor: '#84B59F', labelColor: 'rgba(132, 181, 159, 0.6)', swatches: ['#84B59F', '#FFFFFF', '#2D2D2D'], mockupBg: '#F5F9F7',
  },
  {
    id: 4, name: 'Corteza', labelKey: 'cortezaLabel', subtitleKey: 'cortezaSubtitle',
    bg: '#1C1714', nameFont: 'font-serif font-light italic',
    nameColor: '#C89B60', labelColor: 'rgba(200, 155, 96, 0.6)', swatches: ['#C89B60', '#1C1714', '#F5E6D0'], mockupBg: '#2A2218',
  },
  {
    id: 5, name: 'Grano', labelKey: 'granoLabel', subtitleKey: 'granoSubtitle',
    bg: '#FAF6F1', border: '1px solid #E8DDD0', nameFont: 'font-sans font-extrabold uppercase',
    nameColor: '#C67C4E', labelColor: 'rgba(198, 124, 78, 0.6)', swatches: ['#C67C4E', '#FAF6F1', '#2C1810'], mockupBg: '#F3ECE2',
  },
]

const SITE_MAP: Record<number, React.ComponentType> = {
  1: TopoSite,
  2: BahiaCapitalSite,
  3: ClinicaBesSite,
  4: CortezaSite,
  5: GranoSite,
}

const plans = [
  {
    id: 'standard', titleKey: 'standard', descKey: 'standardDesc',
    features: ['standardFeature1', 'standardFeature2', 'standardFeature3', 'standardFeature4'],
  },
  {
    id: 'pro', titleKey: 'pro', descKey: 'proDesc',
    features: ['proFeature1', 'proFeature2', 'proFeature3', 'proFeature4'],
  },
  {
    id: 'enterprise', titleKey: 'enterprise', descKey: 'enterpriseDesc',
    features: ['enterpriseFeature1', 'enterpriseFeature2', 'enterpriseFeature3', 'enterpriseFeature4'],
  },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDialog, setActiveDialog] = useState<'portfolio' | 'plans' | 'contact' | null>(null)
  const [portfolioSelectedId, setPortfolioSelectedId] = useState(projects[0].id)
  const [contactPhase, setContactPhase] = useState<1 | 2>(1)
  const [businessName, setBusinessName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [message, setMessage] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const totalStagger = businessNames.length * 60 + 400
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setHighlightedIndex(prev => (prev + 1) % businessNames.length)
      }, 2000)
      return () => clearInterval(interval)
    }, totalStagger)
    return () => clearTimeout(startTimer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ businessName, phone, email, businessType, message })
    setActiveDialog(null)
  }

  const openDialog = (dialog: 'portfolio' | 'plans' | 'contact') => {
    setContactPhase(1)
    setBusinessName('')
    setActiveDialog(dialog)
    setIsOpen(false)
  }

  return (
    <div className="flex h-screen flex-col gap-3 overflow-y-auto pb-6" style={{ padding: '12px' }}>
      {/* Mobile Header */}
      <div className="flex h-11 shrink-0 items-center justify-between rounded-2xl bg-[#F5F6F8] px-4">
        <img src="/logo-placeholder.svg" width={70} height={23} alt="MY.SITE" />

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="rounded-xl bg-white p-2">
              <Menu size={20} color="#2D2D2D" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[260px] bg-white p-0" aria-describedby={undefined}>
            <SheetHeader className="border-b border-[#E8E9EC] p-4">
              <SheetTitle className="text-left font-sans text-[0.9rem] font-semibold text-[#2D2D2D]">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col p-4">
              {[
                { label: t('portfolio'), dialog: 'portfolio' as const },
                { label: t('plans'), dialog: 'plans' as const },
                { label: t('contact'), dialog: 'contact' as const },
              ].map(({ label, dialog }) => (
                <button
                  key={dialog}
                  onClick={() => openDialog(dialog)}
                  className="border-b border-[#E8E9EC] py-3 text-left font-sans text-[0.9rem] font-medium text-[#2D2D2D]"
                >
                  {label}
                </button>
              ))}

              {/* Language toggle */}
              <div className="mt-5 flex items-center gap-3">
                <Globe size={16} color="#4DE8D8" />
                <div className="flex items-center gap-2 font-sans text-[0.85rem]">
                  <button
                    onClick={() => setLanguage('en')}
                    style={{ color: language === 'en' ? '#2D2D2D' : '#C4C4C4', fontWeight: language === 'en' ? 600 : 400 }}
                  >
                    EN
                  </button>
                  <span style={{ color: '#C4C4C4' }}>/</span>
                  <button
                    onClick={() => setLanguage('es')}
                    style={{ color: language === 'es' ? '#2D2D2D' : '#C4C4C4', fontWeight: language === 'es' ? 600 : 400 }}
                  >
                    ES
                  </button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Hero Block */}
      <div className="relative rounded-2xl bg-[#F5F6F8] p-5">
        <Sparkles className="absolute right-4 top-4" size={16} color="#4DE8D8" />
        <div className="flex flex-col" style={{ gap: '2px' }}>
          {businessNames.map((item, index) => (
            <motion.div key={index} className="flex items-baseline">
              <motion.span
                className="font-serif font-light italic"
                style={{ fontSize: '1.4rem' }}
                animate={{ color: highlightedIndex === index ? '#4DE8D8' : '#2D2D2D' }}
                transition={{ duration: 0.2 }}
              >
                {item.prefix}
              </motion.span>
              <motion.span
                className="font-sans font-medium"
                style={{ fontSize: '1.4rem' }}
                animate={{ color: highlightedIndex === index ? '#4DE8D8' : '#2D2D2D' }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Portfolio Block */}
      <motion.div
        className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#F5F6F8] p-5"
        onClick={() => openDialog('portfolio')}
        whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <span className="font-sans text-[1rem] font-semibold text-[#2D2D2D]">{t('portfolio')}</span>
        <ArrowRight size={18} color="#4DE8D8" />
      </motion.div>

      {/* Plans Block */}
      <motion.div
        className="flex cursor-pointer items-center justify-between rounded-2xl bg-[#F5F6F8] p-5"
        onClick={() => openDialog('plans')}
        whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div>
          <span className="font-sans text-[1rem] font-semibold text-[#2D2D2D]">{t('plans')}</span>
          <div className="mt-1 flex flex-col gap-0.5">
            {['standard', 'pro', 'enterprise'].map(p => (
              <span key={p} className="font-sans text-[0.8rem] text-[#8C8C8C]">{t(p)}</span>
            ))}
          </div>
        </div>
        <ArrowRight size={18} color="#4DE8D8" />
      </motion.div>

      {/* Contact Block */}
      <motion.div
        className="relative flex cursor-pointer flex-col rounded-2xl bg-[#F5F6F8] p-5"
        onClick={() => openDialog('contact')}
        whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <MousePointer2 className="absolute right-4 top-4" size={18} color="#4DE8D8" />
        <div className="flex items-baseline gap-1">
          <span className="font-serif text-[1.3rem] font-light italic text-[#2D2D2D]">my.</span>
          <span className="font-mono text-[1rem] text-[#C4C4C4]">business</span>
        </div>
        <p className="mt-1 font-sans text-[0.75rem] text-[#C4C4C4]">{t('tellUsYourBusiness')}</p>
      </motion.div>

      {/* Logo Block */}
      <div className="flex items-center justify-center rounded-2xl bg-[#F5F6F8] py-6">
        <img src="/logo-placeholder.svg" width={100} height={33} alt="MY.SITE" />
      </div>

      {/* Info Block */}
      <div className="rounded-2xl bg-[#F5F6F8] p-5">
        <p className="font-sans text-[0.85rem] font-medium text-[#2D2D2D]">Carlos Orozco</p>
        <p className="font-sans text-[0.75rem] text-[#8C8C8C]">{t('creativeDirector')}</p>
        <div className="mt-2 flex flex-col gap-0.5">
          <p className="font-sans text-[0.8rem] text-[#8C8C8C]">612 219 2946</p>
          <p className="font-sans text-[0.8rem] text-[#8C8C8C]">my.site@oroz.construction</p>
        </div>
        <button
          onClick={() => openDialog('contact')}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-sans text-[0.8rem] font-medium text-white"
          style={{ backgroundColor: '#4DE8D8' }}
        >
          <Send size={14} />
          {t('contactUs')}
        </button>
      </div>

      {/* ─── Portfolio Dialog ─── */}
      <Dialog open={activeDialog === 'portfolio'} onOpenChange={(open) => !open && setActiveDialog(null)}>
        <DialogContent
          className="fixed bottom-0 left-0 right-0 top-auto z-50 w-full max-w-full max-h-[90vh] translate-x-0 translate-y-0 overflow-y-auto rounded-t-2xl rounded-b-none border-0 bg-white p-0 shadow-lg"
          aria-describedby={undefined}
        >
          <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between border-b border-[#E8E9EC] bg-white p-4">
            <button
              onClick={() => setActiveDialog(null)}
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

          {/* Horizontal scrollable tabs */}
          <div
            style={{ display: 'flex', overflowX: 'auto', gap: 8, padding: '12px 16px 4px', scrollbarWidth: 'none' } as React.CSSProperties}
          >
            {projects.map(p => (
              <button
                key={p.id}
                onClick={() => setPortfolioSelectedId(p.id)}
                style={{
                  padding: '6px 14px', borderRadius: 20, border: 'none', cursor: 'pointer', flexShrink: 0,
                  backgroundColor: p.id === portfolioSelectedId ? '#2D2D2D' : '#F5F6F8',
                  color: p.id === portfolioSelectedId ? '#FFFFFF' : '#8C8C8C',
                  fontFamily: 'var(--font-jakarta)', fontSize: '0.78rem',
                  fontWeight: p.id === portfolioSelectedId ? 600 : 400,
                  transition: 'all 180ms',
                }}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Selected project content */}
          {projects.filter(p => p.id === portfolioSelectedId).map(project => (
              <div
                key={project.id}
                style={{ padding: '16px 16px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                {/* Project name + swatches */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <p className={project.nameFont} style={{ color: project.nameColor, fontSize: '1.1rem' }}>
                    {project.name}
                  </p>
                  <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                    {project.swatches.map((color, i) => (
                      <div key={i} style={{
                        width: 9, height: 9, borderRadius: '50%', backgroundColor: color,
                        border: color === '#FFFFFF' || color === '#FAFAF8' ? '1px solid #E8E9EC' : undefined,
                      }} />
                    ))}
                  </div>
                </div>
                <p className="font-sans" style={{ color: project.labelColor, fontSize: '0.65rem', marginTop: -4 }}>
                  {t(project.labelKey)}
                </p>

                {/* Web mockup */}
                <div style={{
                  width: '100%', height: 380, borderRadius: 12, overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  display: 'flex', flexDirection: 'column',
                  border: '1px solid #E0E2E7',
                }}>
                  {/* Browser chrome */}
                  <div style={{
                    height: 28, flexShrink: 0, backgroundColor: '#EDEFF2',
                    display: 'flex', alignItems: 'center', padding: '0 10px', gap: 5,
                    borderBottom: '1px solid #E0E2E7',
                  }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                    <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                    <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#28C840' }} />
                    <div style={{
                      flex: 1, margin: '0 8px', backgroundColor: '#F5F6F8', borderRadius: 4,
                      padding: '2px 10px', fontSize: '0.42rem', fontFamily: 'var(--font-jakarta)',
                      color: '#9CA3AF', textAlign: 'center',
                    }}>
                      my.{project.name.toLowerCase().replace(/\s+/g, '')}.com
                    </div>
                  </div>
                  {/* Screen — real site component, scrollable via zoom (affects layout, scroll is 1:1) */}
                  {(() => {
                    const SiteComponent = SITE_MAP[project.id]
                    return SiteComponent ? (
                      <div style={{
                        flex: 1, overflow: 'auto',
                        backgroundColor: project.mockupBg,
                        WebkitOverflowScrolling: 'touch',
                      } as React.CSSProperties}>
                        <div style={{ zoom: 0.286, width: 1200 }}>
                          <SiteComponent />
                        </div>
                      </div>
                    ) : null
                  })()}
                </div>

                {/* Disclaimer */}
                <p style={{ textAlign: 'center', fontSize: '0.55rem', fontFamily: 'var(--font-jakarta)', color: '#C8C8C8' }}>
                  {t('portfolioDisclaimer')}
                </p>
              </div>
            ))}
        </DialogContent>
      </Dialog>

      {/* ─── Plans Dialog ─── */}
      <Dialog open={activeDialog === 'plans'} onOpenChange={(open) => { if (!open && activeDialog === 'plans') setActiveDialog(null) }}>
        <DialogContent
          className="fixed bottom-0 left-0 right-0 top-auto z-50 w-full max-w-full max-h-[90vh] translate-x-0 translate-y-0 overflow-y-auto rounded-t-2xl rounded-b-none border-0 bg-white p-0 shadow-lg"
          aria-describedby={undefined}
        >
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
            {plans.map((plan) => (
              <div key={plan.id} className="flex flex-col rounded-2xl border border-[#E8E9EC] bg-white p-4">
                <h3 className="font-sans text-[1.1rem] font-semibold text-[#2D2D2D]">{t(plan.titleKey)}</h3>
                <p className="mt-1 font-sans text-[0.8rem] leading-relaxed text-[#8C8C8C]">{t(plan.descKey)}</p>
                <div className="mt-3 flex flex-col gap-1.5">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={14} color="#4DE8D8" className="shrink-0" />
                      <span className="font-sans text-[0.75rem] text-[#2D2D2D]">{t(feature)}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => openDialog('contact')}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-sans text-[0.85rem] font-medium text-white"
                  style={{ backgroundColor: '#4DE8D8' }}
                >
                  <Send size={14} />
                  {t('contactUs')}
                </button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* ─── Contact Dialog ─── */}
      <Dialog open={activeDialog === 'contact'} onOpenChange={(open) => { if (!open && activeDialog === 'contact') setActiveDialog(null) }}>
        <DialogContent
          className="fixed bottom-0 left-0 right-0 top-auto z-50 w-full max-w-full max-h-[90vh] translate-x-0 translate-y-0 overflow-y-auto rounded-t-2xl rounded-b-none border-0 bg-white p-0 shadow-lg"
          aria-describedby={undefined}
        >
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
            <AnimatePresence mode="wait">
              {contactPhase === 1 ? (
                <motion.div
                  key="phase1"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex items-baseline gap-2 border-b border-[#E8E9EC] pb-3">
                    <span className="font-serif text-[1.5rem] font-light italic text-[#2D2D2D]">my.</span>
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && businessName.trim() && setContactPhase(2)}
                      placeholder="business"
                      autoFocus
                      className="flex-1 bg-transparent font-mono text-[1.2rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                    />
                  </div>
                  <p className="font-sans text-[0.75rem] text-[#C4C4C4]">{t('tellUsYourBusiness')}</p>
                  <button
                    onClick={() => businessName.trim() && setContactPhase(2)}
                    className="mt-2 flex w-full items-center justify-center rounded-xl py-4 font-sans text-[1rem] font-semibold text-white"
                    style={{ backgroundColor: '#4DE8D8' }}
                  >
                    {t('start')}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="phase2"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  {/* Locked name */}
                  <div className="flex items-baseline gap-1 rounded-2xl bg-[#F5F6F8] px-4 py-3">
                    <span className="font-serif text-[1.2rem] font-light italic text-[#2D2D2D]">my.</span>
                    <span className="font-mono text-[1rem] text-[#2D2D2D]">{businessName}</span>
                  </div>
                  {[
                    { icon: <Phone size={16} color="#4DE8D8" />, value: phone, setter: setPhone, placeholder: t('phonePlaceholder'), type: 'tel' },
                    { icon: <Mail size={16} color="#4DE8D8" />, value: email, setter: setEmail, placeholder: t('emailPlaceholder'), type: 'email' },
                    { icon: <Building2 size={16} color="#4DE8D8" />, value: businessType, setter: setBusinessType, placeholder: t('businessTypePlaceholder'), type: 'text' },
                  ].map(({ icon, value, setter, placeholder, type }, i) => (
                    <div key={i} className="flex items-center gap-3 border-b border-[#E8E9EC] pb-2">
                      {icon}
                      <input
                        type={type}
                        value={value}
                        onChange={(e) => setter(e.target.value)}
                        placeholder={placeholder}
                        className="w-full bg-transparent font-sans text-[0.9rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                      />
                    </div>
                  ))}
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('messagePlaceholder')}
                    className="rounded-xl border border-[#E8E9EC] bg-[#F5F6F8] p-3 font-sans text-[0.9rem] text-[#2D2D2D] placeholder:text-[#C4C4C4] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl py-4 font-sans text-[0.9rem] font-semibold text-white"
                    style={{ backgroundColor: '#4DE8D8' }}
                  >
                    <Send size={16} />
                    {t('send')}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
