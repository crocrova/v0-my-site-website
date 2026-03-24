'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageProvider, useLanguage } from '@/lib/language-context'
import {
  Globe, Sparkles, Search, Palette, Mail, ArrowRight,
  Layers, MousePointer2,
} from 'lucide-react'
import type { ProjectAnalysis } from '@/lib/project-data'

// Home original blocks
import { HeroBlock } from '@/components/blocks/hero-block'
import { PortfolioBlock } from '@/components/blocks/portfolio-block'
import { PlansBlock } from '@/components/blocks/plans-block'
import { LogoBlock as HomeLogo } from '@/components/blocks/logo-block'
import { InfoBlock } from '@/components/blocks/info-block'

// Home original views
import { PortfolioView } from '@/components/views/portfolio-view'
import { PlansView } from '@/components/views/plans-view'
import { ContactView } from '@/components/views/contact-view'

// Analysis views
import { DiagnosisView } from './diagnosis-view'
import { VisualProposalView } from './visual-proposal-view'
import { StructureView } from './structure-view'

// ─── Constants ────────────────────────────────────────────────────────────────

type PagePhase = 'home' | 'analysis'
type HomeView = 'home' | 'portfolio' | 'plans' | 'contact'
type AnalysisView = 'grid' | 'diagnosis' | 'visualProposal' | 'structure'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]
const CYAN = '#4DE8D8'

const blockVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.06, ease: EASE },
  }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.25 } },
}

const viewVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.1 } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.25 } },
}

// ─── Unified Navbar ───────────────────────────────────────────────────────────

interface NavbarProps {
  pagePhase: PagePhase
  homeView: HomeView
  analysisView: AnalysisView
  project: ProjectAnalysis
  onPortfolio: () => void
  onPlans: () => void
  onContact: () => void
  onDiagnosis: () => void
  onVisual: () => void
  onStructure: () => void
}

function ProjectNavbar({
  pagePhase, homeView, analysisView, project,
  onPortfolio, onPlans, onContact,
  onDiagnosis, onVisual, onStructure,
}: NavbarProps) {
  const { language, setLanguage, t } = useLanguage()
  const accent = pagePhase === 'home' ? CYAN : project.colors.accent
  const navBg = pagePhase === 'home' ? '#F5F6F8' : project.colors.backgroundBlock

  const homeLinks = [
    { key: 'portfolio', label: t('portfolio'), active: homeView === 'portfolio', onClick: onPortfolio },
    { key: 'plans', label: t('plans'), active: homeView === 'plans', onClick: onPlans },
    { key: 'contact', label: t('contact'), active: homeView === 'contact', onClick: onContact },
  ]
  const analysisLinks = [
    { key: 'diagnosis', label: t('diagnosis'), active: analysisView === 'diagnosis', onClick: onDiagnosis },
    { key: 'visual', label: t('visualProposal'), active: analysisView === 'visualProposal', onClick: onVisual },
    { key: 'structure', label: t('structure'), active: analysisView === 'structure', onClick: onStructure },
  ]
  const links = pagePhase === 'home' ? homeLinks : analysisLinks
  const textColor = pagePhase === 'home' ? '#2D2D2D' : project.colors.text

  return (
    <motion.div
      className="flex h-12 shrink-0 items-center justify-between rounded-2xl px-5"
      animate={{ backgroundColor: navBg }}
      transition={{ duration: 0.4 }}
      style={{ minHeight: 48 }}
    >
      <img src="/logo-placeholder.svg" width={100} height={33} alt="MY.SITE" />

      <nav className="flex items-center gap-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={pagePhase}
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(({ key, label, active, onClick }) => (
              <button
                key={key}
                onClick={onClick}
                className="relative flex flex-col items-center gap-0.5 pb-1"
              >
                <span
                  className="font-sans text-[0.85rem] transition-colors duration-200"
                  style={{ color: active ? textColor : '#8C8C8C', fontWeight: active ? 600 : 500 }}
                >
                  {label}
                </span>
                <span
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: 4, height: 4,
                    backgroundColor: accent,
                    opacity: active ? 1 : 0,
                    transform: active ? 'scale(1)' : 'scale(0)',
                  }}
                />
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </nav>

      <div className="flex items-center gap-2">
        <Globe size={18} color={accent} />
        <div className="flex items-center gap-1 font-sans text-[0.8rem]">
          <button
            onClick={() => setLanguage('en')}
            style={{ color: language === 'en' ? textColor : '#C4C4C4', fontWeight: language === 'en' ? 600 : 400 }}
            className="transition-colors duration-150"
          >
            EN
          </button>
          <span style={{ color: '#C4C4C4' }}>/</span>
          <button
            onClick={() => setLanguage('es')}
            style={{ color: language === 'es' ? textColor : '#C4C4C4', fontWeight: language === 'es' ? 600 : 400 }}
            className="transition-colors duration-150"
          >
            ES
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Branded Block 5 (home phase) ─────────────────────────────────────────────

function BrandedContactBlock({ project, onClick }: { project: ProjectAnalysis; onClick: () => void }) {
  const { colors } = project
  const { t } = useLanguage()
  return (
    <motion.div
      className="relative flex h-full w-full cursor-pointer flex-col rounded-2xl p-4"
      style={{
        backgroundColor: colors.backgroundBlock,
        border: `1px solid ${colors.border}`,
        boxShadow: `0 0 30px ${colors.accent}26`,
      }}
      onClick={onClick}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 0 40px ${colors.accent}40`,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <MousePointer2
        className="absolute"
        style={{ right: 16, top: 16 }}
        size={20}
        color={colors.accent}
      />
      <div className="mt-auto flex items-baseline gap-0">
        <span
          className="font-serif font-light italic"
          style={{ fontSize: '1.5rem', color: colors.text }}
        >
          my.
        </span>
        <span
          className="font-sans font-semibold"
          style={{ fontSize: '1.5rem', color: colors.accent }}
        >
          {project.clientName}
        </span>
      </div>
      <p className="mt-1 font-sans" style={{ fontSize: '0.65rem', color: colors.textSecondary, fontWeight: 300 }}>
        {t('tapToDiscover')}
      </p>
    </motion.div>
  )
}

// ─── Home Grid (phase = 'home') ───────────────────────────────────────────────

function HomeGrid({
  project,
  onPortfolio,
  onPlans,
  onContact,
  onEnterAnalysis,
}: {
  project: ProjectAnalysis
  onPortfolio: () => void
  onPlans: () => void
  onContact: () => void
  onEnterAnalysis: () => void
}) {
  return (
    <motion.div
      key="home-grid"
      className="absolute inset-0 grid grid-cols-[2fr_1fr] grid-rows-[7fr_3fr]"
      style={{ gap: 8 }}
      variants={viewVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Hero */}
      <motion.div className="h-full" custom={0} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
        <HeroBlock />
      </motion.div>

      {/* Right col: Portfolio + Plans */}
      <div className="grid grid-rows-2" style={{ gap: 8 }}>
        <motion.div className="h-full" custom={1} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <PortfolioBlock onClick={onPortfolio} />
        </motion.div>
        <motion.div className="h-full" custom={2} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <PlansBlock onClick={onPlans} />
        </motion.div>
      </div>

      {/* Row 2: Logo | BrandedBlock | Info */}
      <div className="col-span-2 grid grid-cols-3" style={{ gap: 8 }}>
        <motion.div className="h-full" custom={3} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <HomeLogo />
        </motion.div>
        <motion.div className="h-full" custom={4} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <BrandedContactBlock project={project} onClick={onEnterAnalysis} />
        </motion.div>
        <motion.div className="h-full" custom={5} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <InfoBlock />
        </motion.div>
      </div>
    </motion.div>
  )
}

// ─── Analysis Grid blocks ─────────────────────────────────────────────────────

function IdentidadBlock({ project }: { project: ProjectAnalysis }) {
  const { keywords, colors } = project
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setHighlightedIndex(0), keywords.length * 60 + 400)
    return () => clearTimeout(t)
  }, [keywords.length])

  useEffect(() => {
    if (highlightedIndex === null) return
    const interval = setInterval(() => {
      setHighlightedIndex(prev => (prev === null ? 0 : (prev + 1) % keywords.length))
    }, 2000)
    return () => clearInterval(interval)
  }, [highlightedIndex, keywords.length])

  return (
    <motion.div
      className="relative flex h-full w-full flex-col justify-center rounded-2xl"
      style={{ padding: 24, backgroundColor: colors.backgroundBlock, border: `1px solid ${colors.border}` }}
      whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Sparkles className="absolute" style={{ right: 16, top: 16 }} size={20} color={colors.accent} />
      <div className="flex flex-col" style={{ gap: 4 }}>
        {keywords.map((keyword, index) => (
          <motion.div
            key={index}
            className="flex items-baseline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: EASE }}
          >
            <motion.span
              className="font-serif font-light italic"
              style={{ fontSize: '2.2rem', lineHeight: 1.1 }}
              animate={{ color: highlightedIndex === index ? colors.accent : colors.text }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              my.
            </motion.span>
            <motion.span
              className="font-sans font-medium"
              style={{ fontSize: '2.2rem', lineHeight: 1.1 }}
              animate={{ color: highlightedIndex === index ? colors.accent : colors.text }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {keyword}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function AnalysisNavBlock({
  icon: Icon, title, subtitle, project, onClick,
}: {
  icon: React.ComponentType<{ size?: number; color?: string }>
  title: string
  subtitle: string
  project: ProjectAnalysis
  onClick: () => void
}) {
  const { colors } = project
  return (
    <motion.div
      className="relative flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-2xl p-4"
      style={{ backgroundColor: colors.backgroundBlock, border: `1px solid ${colors.border}` }}
      onClick={onClick}
      whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="absolute" style={{ right: 16, top: 16 }}>
        <Icon size={20} color={colors.accent} />
      </div>
      <div className="flex flex-col">
        <span className="font-sans font-semibold" style={{ fontSize: '1.3rem', color: colors.text }}>{title}</span>
        <span className="font-sans" style={{ fontSize: '0.75rem', color: colors.textSecondary }}>{subtitle}</span>
      </div>
      <ArrowRight size={20} color={colors.accent} />
    </motion.div>
  )
}

function AnalysisLogoBlock({ project }: { project: ProjectAnalysis }) {
  const { colors } = project
  return (
    <motion.div
      className="flex h-full w-full items-center justify-center rounded-2xl p-4"
      style={{ backgroundColor: colors.backgroundBlock, border: `1px solid ${colors.border}` }}
      whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {project.logoUrl ? (
        <img src={project.logoUrl} alt={project.clientName} style={{ maxHeight: 120, maxWidth: '80%', objectFit: 'contain' }} />
      ) : (
        <span className="font-serif italic font-light" style={{ fontSize: '1.5rem', color: colors.textSecondary }}>
          {project.clientName}
        </span>
      )}
    </motion.div>
  )
}

function AnalysisContactBlock({ project }: { project: ProjectAnalysis }) {
  const { colors } = project
  const { t } = useLanguage()
  return (
    <motion.div
      className="relative flex h-full w-full flex-col justify-center rounded-2xl p-4"
      style={{ backgroundColor: colors.backgroundBlock, border: `1px solid ${colors.border}` }}
      whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Mail className="absolute" style={{ right: 16, top: 16 }} size={20} color={colors.accent} />
      <div className="flex flex-col gap-0.5">
        <p className="font-sans" style={{ fontSize: '0.85rem', fontWeight: 500, color: colors.text }}>Carlos Orozco</p>
        <p className="font-sans" style={{ fontSize: '0.75rem', color: colors.textSecondary }}>{t('creativeDirector')}</p>
        <p className="font-sans" style={{ fontSize: '0.8rem', color: colors.textSecondary, marginTop: 6 }}>612 219 2946</p>
        <p className="font-sans" style={{ fontSize: '0.8rem', color: colors.textSecondary }}>my.site@oroz.construction</p>
      </div>
    </motion.div>
  )
}

// ─── Analysis Grid (phase = 'analysis') ──────────────────────────────────────

function AnalysisGrid({
  project,
  onDiagnosis,
  onVisual,
  onStructure,
}: {
  project: ProjectAnalysis
  onDiagnosis: () => void
  onVisual: () => void
  onStructure: () => void
}) {
  const { t } = useLanguage()
  return (
    <motion.div
      key="analysis-grid"
      className="absolute inset-0 grid grid-cols-[2fr_1fr] grid-rows-[7fr_3fr]"
      style={{ gap: 8 }}
      variants={viewVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Identidad */}
      <motion.div className="h-full" custom={0} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
        <IdentidadBlock project={project} />
      </motion.div>

      {/* Right col: Diagnóstico + Propuesta Visual */}
      <div className="grid grid-rows-2" style={{ gap: 8 }}>
        <motion.div className="h-full" custom={1} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <AnalysisNavBlock icon={Search} title={t('diagnosis')} subtitle={t('digitalPresence')} project={project} onClick={onDiagnosis} />
        </motion.div>
        <motion.div className="h-full" custom={2} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <AnalysisNavBlock icon={Palette} title={t('visualProposal')} subtitle={t('howItFeels')} project={project} onClick={onVisual} />
        </motion.div>
      </div>

      {/* Row 2: Logo | Estructura | Contacto */}
      <div className="col-span-2 grid grid-cols-3" style={{ gap: 8 }}>
        <motion.div className="h-full" custom={3} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <AnalysisLogoBlock project={project} />
        </motion.div>
        <motion.div className="h-full" custom={4} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <AnalysisNavBlock icon={Layers} title={t('structure')} subtitle={t('sitemapGoals')} project={project} onClick={onStructure} />
        </motion.div>
        <motion.div className="h-full" custom={5} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <AnalysisContactBlock project={project} />
        </motion.div>
      </div>
    </motion.div>
  )
}

// ─── Inner component (inside LanguageProvider) ────────────────────────────────

function ProjectPageInner({ project }: { project: ProjectAnalysis }) {
  const [pagePhase, setPagePhase] = useState<PagePhase>('home')
  const [homeView, setHomeView] = useState<HomeView>('home')
  const [analysisView, setAnalysisView] = useState<AnalysisView>('grid')

  const handleEnterAnalysis = () => {
    setAnalysisView('grid')
    setPagePhase('analysis')
  }

  return (
    <motion.main
      className="h-screen w-screen overflow-hidden p-3"
      initial={{ backgroundColor: '#FFFFFF' }}
      animate={{ backgroundColor: pagePhase === 'home' ? '#FFFFFF' : project.colors.background }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex h-full w-full flex-col gap-2">
        {/* Navbar — always visible, never inside AnimatePresence */}
        <ProjectNavbar
          pagePhase={pagePhase}
          homeView={homeView}
          analysisView={analysisView}
          project={project}
          onPortfolio={() => setHomeView('portfolio')}
          onPlans={() => setHomeView('plans')}
          onContact={() => setHomeView('contact')}
          onDiagnosis={() => setAnalysisView('diagnosis')}
          onVisual={() => setAnalysisView('visualProposal')}
          onStructure={() => setAnalysisView('structure')}
        />

        {/* Content */}
        <div className="relative flex-1">
          <AnimatePresence mode="wait">

            {/* ── HOME PHASE ── */}

            {pagePhase === 'home' && homeView === 'home' && (
              <HomeGrid
                key="home-grid"
                project={project}
                onPortfolio={() => setHomeView('portfolio')}
                onPlans={() => setHomeView('plans')}
                onContact={() => setHomeView('contact')}
                onEnterAnalysis={handleEnterAnalysis}
              />
            )}

            {pagePhase === 'home' && homeView === 'portfolio' && (
              <motion.div
                key="home-portfolio"
                className="absolute inset-0"
                variants={viewVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <PortfolioView onBack={() => setHomeView('home')} />
              </motion.div>
            )}

            {pagePhase === 'home' && homeView === 'plans' && (
              <motion.div
                key="home-plans"
                className="absolute inset-0"
                variants={viewVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <PlansView
                  onBack={() => setHomeView('home')}
                  onContact={() => setHomeView('contact')}
                />
              </motion.div>
            )}

            {pagePhase === 'home' && homeView === 'contact' && (
              <motion.div
                key="home-contact"
                className="absolute inset-0"
                variants={viewVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ContactView onBack={() => setHomeView('home')} />
              </motion.div>
            )}

            {/* ── ANALYSIS PHASE ── */}

            {pagePhase === 'analysis' && analysisView === 'grid' && (
              <AnalysisGrid
                key="analysis-grid"
                project={project}
                onDiagnosis={() => setAnalysisView('diagnosis')}
                onVisual={() => setAnalysisView('visualProposal')}
                onStructure={() => setAnalysisView('structure')}
              />
            )}

            {pagePhase === 'analysis' && analysisView === 'diagnosis' && (
              <motion.div
                key="analysis-diagnosis"
                className="absolute inset-0"
                variants={viewVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <DiagnosisView project={project} onBack={() => setAnalysisView('grid')} />
              </motion.div>
            )}

            {pagePhase === 'analysis' && analysisView === 'visualProposal' && (
              <motion.div
                key="analysis-visual"
                className="absolute inset-0"
                variants={viewVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <VisualProposalView project={project} onBack={() => setAnalysisView('grid')} />
              </motion.div>
            )}

            {pagePhase === 'analysis' && analysisView === 'structure' && (
              <motion.div
                key="analysis-structure"
                className="absolute inset-0"
                variants={viewVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <StructureView project={project} onBack={() => setAnalysisView('grid')} />
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </motion.main>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function ProjectPage({ project }: { project: ProjectAnalysis }) {
  return (
    <LanguageProvider>
      <ProjectPageInner project={project} />
    </LanguageProvider>
  )
}
