'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageProvider, useLanguage } from '@/lib/language-context'
import { Globe, Sparkles, Search, Palette, Mail, ArrowRight, Layers } from 'lucide-react'
import type { ProjectAnalysis } from '@/lib/project-data'

// Analysis views
import { DiagnosisView } from './diagnosis-view'
import { VisualProposalView } from './visual-proposal-view'
import { StructureView } from './structure-view'

// ─── Constants ────────────────────────────────────────────────────────────────

type AnalysisView = 'grid' | 'diagnosis' | 'visualProposal' | 'structure'

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

// ─── Hook: detect mobile ──────────────────────────────────────────────────────

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
  analysisView, project,
  onDiagnosis, onVisual, onStructure,
}: {
  analysisView: AnalysisView
  project: ProjectAnalysis
  onDiagnosis: () => void
  onVisual: () => void
  onStructure: () => void
}) {
  const { language, setLanguage, t } = useLanguage()
  const { colors } = project
  const isMobile = useIsMobile()

  const links = [
    { key: 'diagnosis', label: t('diagnosis'), active: analysisView === 'diagnosis', onClick: onDiagnosis },
    { key: 'visual', label: t('visualProposal'), active: analysisView === 'visualProposal', onClick: onVisual },
    { key: 'structure', label: t('structure'), active: analysisView === 'structure', onClick: onStructure },
  ]

  return (
    <motion.div
      className="flex shrink-0 items-center justify-between rounded-2xl px-4"
      style={{
        backgroundColor: colors.backgroundBlock,
        border: `1px solid ${colors.border}`,
        minHeight: isMobile ? 44 : 48,
      }}
    >
      {/* Logo — linkeable */}
      <a
        href="https://mysite.oroz.construction"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <img src="/logo-placeholder.svg" width={isMobile ? 80 : 100} height={isMobile ? 26 : 33} alt="MY.SITE" />
      </a>

      {/* Nav links — hidden on mobile */}
      {!isMobile && (
        <nav className="flex items-center gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key="analysis-links"
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
                    style={{ color: active ? colors.text : '#8C8C8C', fontWeight: active ? 600 : 500 }}
                  >
                    {label}
                  </span>
                  <span
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: 4, height: 4,
                      backgroundColor: colors.accent,
                      opacity: active ? 1 : 0,
                      transform: active ? 'scale(1)' : 'scale(0)',
                    }}
                  />
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </nav>
      )}

      {/* Language toggle */}
      <div className="flex items-center gap-2">
        <Globe size={isMobile ? 14 : 18} color={colors.accent} />
        <div className="flex items-center gap-1 font-sans" style={{ fontSize: isMobile ? '0.7rem' : '0.8rem' }}>
          <button
            onClick={() => setLanguage('en')}
            style={{ color: language === 'en' ? colors.text : '#C4C4C4', fontWeight: language === 'en' ? 600 : 400 }}
            className="transition-colors duration-150"
          >
            EN
          </button>
          <span style={{ color: '#C4C4C4' }}>/</span>
          <button
            onClick={() => setLanguage('es')}
            style={{ color: language === 'es' ? colors.text : '#C4C4C4', fontWeight: language === 'es' ? 600 : 400 }}
            className="transition-colors duration-150"
          >
            ES
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Analysis grid blocks ─────────────────────────────────────────────────────

function IdentidadBlock({ project }: { project: ProjectAnalysis }) {
  const { keywords, colors } = project
  const isMobile = useIsMobile()
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
      style={{ padding: isMobile ? 20 : 24, backgroundColor: colors.backgroundBlock, border: `1px solid ${colors.border}` }}
      whileHover={{ scale: 1.01, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Sparkles className="absolute" style={{ right: 14, top: 14 }} size={18} color={colors.accent} />
      <div
        className="flex flex-col"
        style={{
          gap: isMobile ? 2 : 4,
        }}
      >
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
              animate={{ color: highlightedIndex === index ? colors.accent : colors.text }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              my.
            </motion.span>
            <motion.span
              className="font-sans font-medium"
              style={{ fontSize: isMobile ? '1.4rem' : '2.2rem', lineHeight: 1.1 }}
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
  icon: Icon, title, subtitle, project, onClick, highlighted = false,
}: {
  icon: React.ComponentType<{ size?: number; color?: string }>
  title: string
  subtitle: string
  project: ProjectAnalysis
  onClick: () => void
  highlighted?: boolean
}) {
  const { colors } = project
  const isMobile = useIsMobile()

  const bg = highlighted ? colors.accent : colors.backgroundBlock
  const textColor = highlighted ? colors.textLight : colors.text
  const subColor = highlighted ? `${colors.textLight}CC` : colors.textSecondary
  const iconColor = highlighted ? colors.textLight : colors.accent
  const borderStyle = highlighted ? 'none' : `1px solid ${colors.border}`

  return (
    <motion.div
      className="relative flex h-full w-full cursor-pointer items-center gap-2 rounded-2xl"
      style={{
        backgroundColor: bg,
        border: borderStyle,
        padding: isMobile ? 20 : 16,
      }}
      onClick={onClick}
      whileHover={{ scale: 1.015 }}
      transition={highlighted ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3, ease: 'easeOut' }}
      animate={highlighted ? {
        boxShadow: [
          `0 0 0px ${colors.accent}00`,
          `0 0 20px ${colors.accent}40`,
          `0 0 0px ${colors.accent}00`,
        ],
      } : {}}
    >
      <div className="absolute" style={{ right: isMobile ? 12 : 16, top: isMobile ? 12 : 16 }}>
        <Icon size={isMobile ? 16 : 20} color={iconColor} />
      </div>
      <div className="flex flex-1 flex-col">
        <span className="font-sans font-semibold" style={{ fontSize: isMobile ? '1rem' : '1.3rem', color: textColor }}>{title}</span>
        <span className="font-sans" style={{ fontSize: isMobile ? '0.65rem' : '0.75rem', color: subColor }}>{subtitle}</span>
      </div>
      <ArrowRight size={isMobile ? 16 : 20} color={iconColor} />
    </motion.div>
  )
}

function AnalysisLogoBlock({ project }: { project: ProjectAnalysis }) {
  const { colors } = project
  const isMobile = useIsMobile()
  return (
    <motion.div
      className="flex h-full w-full items-center justify-center rounded-2xl"
      style={{ backgroundColor: colors.backgroundBlock, border: `1px solid ${colors.border}`, padding: 16 }}
      whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {project.logoUrl ? (
        <img src={project.logoUrl} alt={project.clientName} style={{ maxHeight: isMobile ? 48 : 120, maxWidth: '80%', objectFit: 'contain' }} />
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
  const isMobile = useIsMobile()
  return (
    <motion.div
      className="relative flex h-full w-full flex-col justify-center rounded-2xl"
      style={{ backgroundColor: colors.backgroundBlock, border: `1px solid ${colors.border}`, padding: isMobile ? 20 : 16 }}
      whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Mail className="absolute" style={{ right: 14, top: 14 }} size={18} color={colors.accent} />
      <div className="flex flex-col gap-0.5">
        <p className="font-sans" style={{ fontSize: '0.85rem', fontWeight: 500, color: colors.text }}>Carlos Orozco</p>
        <p className="font-sans" style={{ fontSize: '0.75rem', color: colors.textSecondary }}>{t('creativeDirector')}</p>
        <p className="font-sans" style={{ fontSize: '0.8rem', color: colors.textSecondary, marginTop: 6 }}>612 219 2946</p>
        <p className="font-sans" style={{ fontSize: '0.8rem', color: colors.textSecondary }}>my.site@oroz.construction</p>
      </div>
    </motion.div>
  )
}

// ─── Analysis Grid — Desktop ──────────────────────────────────────────────────

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

      {/* Right col: Diagnóstico + Propuesta Visual */}
      <div className="grid grid-rows-2" style={{ gap: 8 }}>
        <motion.div className="h-full" custom={1} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <AnalysisNavBlock icon={Search} title={t('diagnosis')} subtitle={t('digitalPresence')} project={project} onClick={onDiagnosis} />
        </motion.div>
        <motion.div className="h-full" custom={2} variants={blockVariants} initial="hidden" animate="visible" exit="exit">
          <AnalysisNavBlock icon={Palette} title={t('visualProposal')} subtitle={t('howItFeels')} project={project} onClick={onVisual} highlighted />
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

// ─── Analysis Grid — Mobile ───────────────────────────────────────────────────

function AnalysisGridMobile({
  project, onDiagnosis, onVisual, onStructure,
}: {
  project: ProjectAnalysis
  onDiagnosis: () => void
  onVisual: () => void
  onStructure: () => void
}) {
  const { t } = useLanguage()

  // Mobile order: Identidad, Visión Creativa (highlighted), Diagnóstico, Estructura, Logo, Contacto
  const blocks = [
    {
      key: 'identidad',
      height: 'auto',
      el: <IdentidadBlock project={project} />,
    },
    {
      key: 'visual',
      height: 'auto',
      el: <AnalysisNavBlock icon={Palette} title={t('visualProposal')} subtitle={t('howItFeels')} project={project} onClick={onVisual} highlighted />,
    },
    {
      key: 'diagnosis',
      height: 'auto',
      el: <AnalysisNavBlock icon={Search} title={t('diagnosis')} subtitle={t('digitalPresence')} project={project} onClick={onDiagnosis} />,
    },
    {
      key: 'logo',
      height: 80,
      el: <AnalysisLogoBlock project={project} />,
    },
    {
      key: 'structure',
      height: 'auto',
      el: <AnalysisNavBlock icon={Layers} title={t('structure')} subtitle={t('sitemapGoals')} project={project} onClick={onStructure} />,
    },
    {
      key: 'contact',
      height: 'auto',
      el: <AnalysisContactBlock project={project} />,
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
          style={{ height: typeof height === 'number' ? height : undefined, minHeight: typeof height === 'string' ? 72 : undefined }}
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

// ─── Expanded view wrapper (mobile fullscreen) ────────────────────────────────

function ExpandedView({
  children, isMobile,
}: {
  children: React.ReactNode
  isMobile: boolean
}) {
  if (isMobile) {
    return (
      <div style={{
        position: 'fixed', inset: 0, zIndex: 50,
        overflowY: 'auto', overflowX: 'hidden',
      }}>
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
        backgroundColor: project.colors.background,
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
        {/* Navbar — always visible, not inside AnimatePresence */}
        <ProjectNavbar
          analysisView={analysisView}
          project={project}
          onDiagnosis={() => setAnalysisView('diagnosis')}
          onVisual={() => setAnalysisView('visualProposal')}
          onStructure={() => setAnalysisView('structure')}
        />

        {/* Content */}
        {isMobile ? (
          // ── MOBILE: no relative container, direct render ──
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
                <div style={{ backgroundColor: project.colors.background, minHeight: '100vh', padding: '12px' }}>
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
          // ── DESKTOP: relative container with AnimatePresence ──
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
