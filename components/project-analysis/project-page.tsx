'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageProvider, useLanguage } from '@/lib/language-context'
import { Globe, Sparkles, Search, Palette, ArrowRight, Layers, ExternalLink, Loader2 } from 'lucide-react'
import type { ProjectAnalysis } from '@/lib/project-data'
import { DiagnosisView } from './diagnosis-view'
import { VisualProposalView } from './visual-proposal-view'
import { StructureView } from './structure-view'

// MY.SITE home colors — used throughout, NOT client brand colors
const HOME = {
  bg: '#FFFFFF',
  block: '#F5F6F8',
  accent: '#4DE8D8',
  text: '#2D2D2D',
  textSecondary: '#8C8C8C',
  textLight: '#C4C4C4',
}

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const blockVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.3, delay: i * 0.06, ease: EASE },
  }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.25 } },
}

const viewVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

type AnalysisView = 'grid' | 'visualProposal' | 'diagnosis' | 'structure'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function ProjectNavbar({
  analysisView,
  onVisual,
  onDiagnosis,
  onStructure,
}: {
  analysisView: AnalysisView
  onVisual: () => void
  onDiagnosis: () => void
  onStructure: () => void
}) {
  const { language, setLanguage, t } = useLanguage()
  const isMobile = useIsMobile()

  return (
    <motion.div
      className="flex shrink-0 items-center justify-between rounded-2xl px-4"
      style={{ backgroundColor: HOME.block, minHeight: isMobile ? 44 : 48 }}
    >
      {/* Logo */}
      <a href="https://mysite.oroz.construction" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <img src="/logo-placeholder.svg" width={isMobile ? 70 : 100} height={isMobile ? 23 : 33} alt="MY.SITE" />
      </a>

      {/* Nav links — desktop only */}
      {!isMobile && (
        <nav className="flex items-center gap-6">
          {[
            { key: 'visualProposal', label: t('visualProposal'), active: analysisView === 'visualProposal', onClick: onVisual },
            { key: 'diagnosis', label: t('diagnosis'), active: analysisView === 'diagnosis', onClick: onDiagnosis },
            { key: 'structure', label: t('structure'), active: analysisView === 'structure', onClick: onStructure },
          ].map(({ key, label, active, onClick }) => (
            <button key={key} onClick={onClick} className="relative flex flex-col items-center gap-0.5 pb-1">
              <span
                className="font-sans text-[0.85rem] transition-colors duration-200"
                style={{ color: active ? HOME.text : HOME.textSecondary, fontWeight: active ? 600 : 500 }}
              >
                {label}
              </span>
              <span
                className="rounded-full transition-all duration-200"
                style={{ width: 4, height: 4, backgroundColor: HOME.accent, opacity: active ? 1 : 0 }}
              />
            </button>
          ))}
        </nav>
      )}

      {/* Language toggle */}
      <div className="flex items-center gap-2">
        <Globe size={isMobile ? 14 : 18} color={HOME.accent} />
        <div className="flex items-center gap-1 font-sans" style={{ fontSize: isMobile ? '0.7rem' : '0.8rem' }}>
          <button
            onClick={() => setLanguage('en')}
            style={{ color: language === 'en' ? HOME.text : HOME.textLight, fontWeight: language === 'en' ? 600 : 400 }}
          >
            EN
          </button>
          <span style={{ color: HOME.textLight }}>/</span>
          <button
            onClick={() => setLanguage('es')}
            style={{ color: language === 'es' ? HOME.text : HOME.textLight, fontWeight: language === 'es' ? 600 : 400 }}
          >
            ES
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Identidad Block (Hero) ────────────────────────────────────────────────────

function IdentidadBlock({ project }: { project: ProjectAnalysis }) {
  const { keywords } = project
  const isMobile = useIsMobile()
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setHighlightedIndex(0), keywords.length * 60 + 400)
    return () => clearTimeout(timer)
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
      style={{ padding: isMobile ? 20 : 24, backgroundColor: HOME.block }}
      whileHover={{ scale: 1.01, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Sparkles className="absolute" style={{ right: 14, top: 14 }} size={18} color={HOME.accent} />
      <div className="flex flex-col" style={{ gap: isMobile ? 2 : 4 }}>
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
              style={{ fontSize: isMobile ? '1.4rem' : '2.2rem', lineHeight: 1.1 }}
              animate={{ color: highlightedIndex === index ? HOME.accent : HOME.text }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              my.
            </motion.span>
            <motion.span
              className="font-sans font-medium"
              style={{ fontSize: isMobile ? '1.4rem' : '2.2rem', lineHeight: 1.1 }}
              animate={{ color: highlightedIndex === index ? HOME.accent : HOME.text }}
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

// ─── Analysis Nav Block ───────────────────────────────────────────────────────

function AnalysisNavBlock({
  icon: Icon,
  title,
  subtitle,
  onClick,
}: {
  icon: React.ComponentType<{ size?: number; color?: string }>
  title: string
  subtitle: string
  onClick: () => void
}) {
  const isMobile = useIsMobile()

  return (
    <motion.div
      className="relative flex h-full w-full cursor-pointer items-center gap-2 rounded-2xl"
      style={{
        backgroundColor: HOME.block,
        padding: isMobile ? 20 : 16,
      }}
      onClick={onClick}
      whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="absolute" style={{ right: isMobile ? 12 : 16, top: isMobile ? 12 : 16 }}>
        <Icon size={isMobile ? 16 : 20} color={HOME.accent} />
      </div>
      <div className="flex flex-1 flex-col">
        <span className="font-sans font-semibold" style={{ fontSize: isMobile ? '1rem' : '1.3rem', color: HOME.text }}>
          {title}
        </span>
        <span className="font-sans" style={{ fontSize: isMobile ? '0.65rem' : '0.75rem', color: HOME.textSecondary }}>
          {subtitle}
        </span>
      </div>
      <ArrowRight size={isMobile ? 16 : 20} color={HOME.accent} />
    </motion.div>
  )
}

// ─── Logo Block ───────────────────────────────────────────────────────────────

function AnalysisLogoBlock({ project }: { project: ProjectAnalysis }) {
  const isMobile = useIsMobile()
  return (
    <motion.div
      className="flex h-full w-full items-center justify-center rounded-2xl"
      style={{ backgroundColor: HOME.block, padding: 16 }}
      whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {project.logoUrl ? (
        <img
          src={project.logoUrl}
          alt={project.clientName}
          style={{ maxHeight: isMobile ? 48 : 120, maxWidth: '80%', objectFit: 'contain' }}
        />
      ) : (
        <span className="font-serif italic font-light" style={{ fontSize: '1.5rem', color: HOME.textSecondary }}>
          {project.clientName}
        </span>
      )}
    </motion.div>
  )
}

// ─── CTA Block ────────────────────────────────────────────────────────────────

function CTABlock({ project }: { project: ProjectAnalysis }) {
  const isMobile = useIsMobile()
  const isUnlocked = project.preview?.isUnlocked ?? false
  const clientName = project.clientName.toLowerCase().replace(/\s+/g, '')

  if (isUnlocked) {
    return (
      <motion.div
        className="flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-2xl"
        style={{ backgroundColor: '#2D2D2D', padding: isMobile ? 20 : 16 }}
        onClick={() => {
          const url = (project.preview as { isUnlocked: boolean; url?: string }).url
          if (url) window.open(url, '_blank')
        }}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <span className="font-sans font-semibold" style={{ fontSize: isMobile ? '1rem' : '1.1rem', color: '#FFFFFF' }}>
          Ir a my.{clientName}
        </span>
        <ExternalLink size={isMobile ? 16 : 18} color={HOME.accent} />
      </motion.div>
    )
  }

  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl"
      style={{ backgroundColor: '#2D2D2D', padding: isMobile ? 20 : 16 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      >
        <Loader2 size={isMobile ? 20 : 24} color={HOME.accent} />
      </motion.div>
      <span className="font-sans text-center" style={{ fontSize: isMobile ? '0.75rem' : '0.82rem', color: '#FFFFFF', fontWeight: 500 }}>
        Tu sitio web se está construyendo
      </span>
    </motion.div>
  )
}

// ─── Desktop Grid ─────────────────────────────────────────────────────────────

function AnalysisGridDesktop({
  project, onDiagnosis, onVisual, onStructure,
}: {
  project: ProjectAnalysis
  onDiagnosis: () => void
  onVisual: () => void
  onStructure: () => void
}) {
  const { t } = useLanguage()
  return (
    <motion.div
      key="analysis-grid-desktop"
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

      {/* Right col: Propuesta Visual + Diagnóstico stacked */}
      <div className="grid grid-rows-2" style={{ gap: 8 }}>
        <motion.div className="h-full" custom={1} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <AnalysisNavBlock icon={Palette} title={t('visualProposal')} subtitle={t('howItFeels')} onClick={onVisual} />
        </motion.div>
        <motion.div className="h-full" custom={2} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <AnalysisNavBlock icon={Search} title={t('diagnosis')} subtitle={t('digitalPresence')} onClick={onDiagnosis} />
        </motion.div>
      </div>

      {/* Row 2: Logo | CTA | Estructura */}
      <div className="col-span-2 grid grid-cols-3" style={{ gap: 8 }}>
        <motion.div className="h-full" custom={3} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <AnalysisLogoBlock project={project} />
        </motion.div>
        <motion.div className="h-full" custom={4} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <CTABlock project={project} />
        </motion.div>
        <motion.div className="h-full" custom={5} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <AnalysisNavBlock icon={Layers} title={t('structure')} subtitle={t('sitemapGoals')} onClick={onStructure} />
        </motion.div>
      </div>
    </motion.div>
  )
}

// ─── Mobile Grid ──────────────────────────────────────────────────────────────

function AnalysisGridMobile({
  project, onDiagnosis, onVisual, onStructure,
}: {
  project: ProjectAnalysis
  onDiagnosis: () => void
  onVisual: () => void
  onStructure: () => void
}) {
  const { t } = useLanguage()

  const blocks = [
    {
      key: 'identidad',
      height: undefined as number | undefined,
      el: <IdentidadBlock project={project} />,
    },
    {
      key: 'visual',
      height: undefined as number | undefined,
      el: <AnalysisNavBlock icon={Palette} title={t('visualProposal')} subtitle={t('howItFeels')} onClick={onVisual} />,
    },
    {
      key: 'diagnosis',
      height: undefined as number | undefined,
      el: <AnalysisNavBlock icon={Search} title={t('diagnosis')} subtitle={t('digitalPresence')} onClick={onDiagnosis} />,
    },
    {
      key: 'structure',
      height: undefined as number | undefined,
      el: <AnalysisNavBlock icon={Layers} title={t('structure')} subtitle={t('sitemapGoals')} onClick={onStructure} />,
    },
    {
      key: 'cta',
      height: 88 as number | undefined,
      el: <CTABlock project={project} />,
    },
    {
      key: 'logo',
      height: 80 as number | undefined,
      el: <AnalysisLogoBlock project={project} />,
    },
  ]

  return (
    <motion.div
      key="analysis-grid-mobile"
      style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 24 }}
      variants={viewVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {blocks.map(({ key, height, el }, i) => (
        <motion.div
          key={key}
          style={{ height: height !== undefined ? height : undefined, minHeight: height === undefined ? 72 : undefined }}
          custom={i}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {el}
        </motion.div>
      ))}
    </motion.div>
  )
}

// ─── Expanded view wrapper ────────────────────────────────────────────────────

function ExpandedView({ children, isMobile }: { children: React.ReactNode; isMobile: boolean }) {
  if (isMobile) {
    return (
      <div style={{ position: 'fixed', inset: 0, zIndex: 50, overflowY: 'auto', overflowX: 'hidden', backgroundColor: HOME.bg }}>
        {children}
      </div>
    )
  }
  return (
    <motion.div
      className="absolute inset-0"
      variants={viewVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

// ─── Inner component ──────────────────────────────────────────────────────────

function ProjectPageInner({ project }: { project: ProjectAnalysis }) {
  const [analysisView, setAnalysisView] = useState<AnalysisView>('grid')
  const isMobile = useIsMobile()

  const isExpanded = analysisView !== 'grid'

  return (
    <div
      style={{
        backgroundColor: HOME.bg,
        minHeight: '100vh',
        height: isMobile ? 'auto' : '100vh',
        overflow: isMobile ? 'visible' : 'hidden',
        padding: '12px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? 12 : 8,
          height: isMobile ? 'auto' : '100%',
        }}
      >
        {/* Navbar — always visible */}
        <ProjectNavbar
          analysisView={analysisView}
          onDiagnosis={() => setAnalysisView('diagnosis')}
          onVisual={() => setAnalysisView('visualProposal')}
          onStructure={() => setAnalysisView('structure')}
        />

        {/* Content */}
        {isMobile ? (
          <>
            {analysisView === 'grid' && (
              <AnalysisGridMobile
                project={project}
                onDiagnosis={() => setAnalysisView('diagnosis')}
                onVisual={() => setAnalysisView('visualProposal')}
                onStructure={() => setAnalysisView('structure')}
              />
            )}
            {isExpanded && (
              <ExpandedView isMobile>
                <div style={{ backgroundColor: HOME.bg, minHeight: '100vh', padding: '12px' }}>
                  {analysisView === 'diagnosis' && (
                    <DiagnosisView project={project} onBack={() => setAnalysisView('grid')} />
                  )}
                  {analysisView === 'visualProposal' && (
                    <VisualProposalView project={project} onBack={() => setAnalysisView('grid')} />
                  )}
                  {analysisView === 'structure' && (
                    <StructureView project={project} onBack={() => setAnalysisView('grid')} />
                  )}
                </div>
              </ExpandedView>
            )}
          </>
        ) : (
          <div className="relative flex-1" style={{ minHeight: 0 }}>
            <AnimatePresence mode="wait">
              {analysisView === 'grid' && (
                <AnalysisGridDesktop
                  key="analysis-grid"
                  project={project}
                  onDiagnosis={() => setAnalysisView('diagnosis')}
                  onVisual={() => setAnalysisView('visualProposal')}
                  onStructure={() => setAnalysisView('structure')}
                />
              )}
              {analysisView === 'diagnosis' && (
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
              {analysisView === 'visualProposal' && (
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
              {analysisView === 'structure' && (
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
        )}
      </div>
    </div>
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
