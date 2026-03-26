'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { motion, AnimatePresence } from 'framer-motion'
import CortezaSite from '@/components/portfolio-sites/corteza-site'
import ClinicaBesSite from '@/components/portfolio-sites/clinica-bes-site'
import BahiaCapitalSite from '@/components/portfolio-sites/bahia-capital-site'
import GranoSite from '@/components/portfolio-sites/grano-site'
import TopoSite from '@/components/portfolio-sites/topo-site'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

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

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  id: number
  name: string
  domain: string
  labelKey: string
  subtitleKey: string
  bg: string
  border?: string
  nameFont: string
  nameColor: string
  labelColor: string
  swatches: string[]
  mockupBg: string
  accentColor: string
  glowColor: string
}

// ─── Projects ─────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 1,
    name: 'TOPO',
    domain: 'topo-studio.com',
    labelKey: 'topoLabel',
    subtitleKey: 'topoSubtitle',
    bg: '#1A1A1A',
    nameFont: 'font-sans font-bold',
    nameColor: '#C8F000',
    labelColor: 'rgba(200, 240, 0, 0.6)',
    swatches: ['#C8F000', '#1A1A1A', '#FFFFFF'],
    mockupBg: '#2A2A2A',
    accentColor: '#C8F000',
    glowColor: 'rgba(200,240,0,0.15)',
  },
  {
    id: 2,
    name: 'Bahía Capital',
    domain: 'bahiacapital.mx',
    labelKey: 'bahiaLabel',
    subtitleKey: 'bahiaSubtitle',
    bg: '#FAFAF8',
    border: '1px solid #E8E3D6',
    nameFont: 'font-serif font-medium italic',
    nameColor: '#B8A88A',
    labelColor: 'rgba(184, 168, 138, 0.6)',
    swatches: ['#B8A88A', '#FAFAF8', '#2D2D2D'],
    mockupBg: '#F0EDE6',
    accentColor: '#B8A88A',
    glowColor: 'rgba(184,168,138,0.15)',
  },
  {
    id: 3,
    name: 'Clínica Bes',
    domain: 'clinicabes.com',
    labelKey: 'clinicaLabel',
    subtitleKey: 'clinicaSubtitle',
    bg: '#FFFFFF',
    border: '1px solid #E8E9EC',
    nameFont: 'font-sans font-medium',
    nameColor: '#84B59F',
    labelColor: 'rgba(132, 181, 159, 0.6)',
    swatches: ['#84B59F', '#FFFFFF', '#2D2D2D'],
    mockupBg: '#F5F9F7',
    accentColor: '#84B59F',
    glowColor: 'rgba(132,181,159,0.15)',
  },
  {
    id: 4,
    name: 'Corteza',
    domain: 'corteza-restaurant.com',
    labelKey: 'cortezaLabel',
    subtitleKey: 'cortezaSubtitle',
    bg: '#1C1714',
    nameFont: 'font-serif font-light italic',
    nameColor: '#C89B60',
    labelColor: 'rgba(200, 155, 96, 0.6)',
    swatches: ['#C89B60', '#1C1714', '#F5E6D0'],
    mockupBg: '#2A2218',
    accentColor: '#C89B60',
    glowColor: 'rgba(200,155,96,0.15)',
  },
  {
    id: 5,
    name: 'Grano',
    domain: 'grano.lapaz.mx',
    labelKey: 'granoLabel',
    subtitleKey: 'granoSubtitle',
    bg: '#FAF6F1',
    border: '1px solid #E8DDD0',
    nameFont: 'font-sans font-extrabold uppercase',
    nameColor: '#C67C4E',
    labelColor: 'rgba(198, 124, 78, 0.6)',
    swatches: ['#C67C4E', '#FAF6F1', '#2C1810'],
    mockupBg: '#F3ECE2',
    accentColor: '#C67C4E',
    glowColor: 'rgba(198,124,78,0.15)',
  },
]

// ─── Placeholder ──────────────────────────────────────────────────────────────

function SitePlaceholder({ project }: { project: Project }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: project.mockupBg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
    >
      <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: project.accentColor, opacity: 0.12 }} />
      <span style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontSize: '0.55rem', color: project.accentColor, opacity: 0.35, letterSpacing: '2px', textTransform: 'uppercase' }}>
        {project.name}
      </span>
    </div>
  )
}

// ─── Grid Block ───────────────────────────────────────────────────────────────

function GridBlock({
  project,
  index,
  onClick,
  t,
}: {
  project: Project
  index: number
  onClick: () => void
  t: (key: string) => string
}) {
  const blockRef = useRef<HTMLDivElement>(null)
  const [blockWidth, setBlockWidth] = useState(300)
  const [isHovered, setIsHovered] = useState(false)
  const SiteComponent = SITE_MAP[project.id]

  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setBlockWidth(e.contentRect.width))
    if (blockRef.current) ro.observe(blockRef.current)
    return () => ro.disconnect()
  }, [])

  const scale = blockWidth / 1200

  return (
    <motion.div
      ref={blockRef}
      className="cursor-pointer rounded-2xl"
      style={{
        backgroundColor: project.bg,
        border: project.border,
        position: 'relative',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: EASE }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.015 }}
    >
      {/* Mini-site preview */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          opacity: isHovered ? 0.6 : 0.4,
          transition: 'opacity 300ms',
          zIndex: 0,
        }}
      >
        <div
          style={{
            width: 1200,
            height: 800,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          <SiteComponent />
        </div>
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to top, ${project.bg}F0 30%, ${project.bg}99 55%, transparent 80%)`,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Glow halo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${project.glowColor} 0%, transparent 70%)`,
          opacity: isHovered ? 0.6 : 0,
          transition: 'opacity 400ms',
          pointerEvents: 'none',
          zIndex: 2,
          borderRadius: 16,
        }}
      />

      {/* Content at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          zIndex: 3,
        }}
      >
        <p className={project.nameFont} style={{ color: project.nameColor, fontSize: '1rem' }}>
          {project.name}
        </p>
        <div className="mt-1.5 flex gap-1.5">
          {project.swatches.map((color, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: 10,
                height: 10,
                backgroundColor: color,
                border:
                  color === '#FFFFFF' || color === '#FAFAF8' ? '1px solid #E8E9EC' : undefined,
              }}
            />
          ))}
        </div>
        <p className="font-sans" style={{ color: project.labelColor, fontSize: '0.65rem' }}>
          {t(project.labelKey)}
        </p>
      </div>
    </motion.div>
  )
}

// ─── Web Mockup ───────────────────────────────────────────────────────────────
// Fills 100% of its container. Browser chrome 32px, screen takes the rest.

// Map project id → mini-site component
const SITE_MAP: Record<number, React.ComponentType> = {
  1: TopoSite,
  2: BahiaCapitalSite,
  3: ClinicaBesSite,
  4: CortezaSite,
  5: GranoSite,
}

function SiteContent({ project }: { project: Project }) {
  const SiteComponent = SITE_MAP[project.id]
  if (SiteComponent) return <SiteComponent />
  return <SitePlaceholder project={project} />
}

function WebMockup({ project }: { project: Project }) {

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        border: '1px solid #E0E2E7',
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          height: '32px',
          flexShrink: 0,
          backgroundColor: '#EDEFF2',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          gap: '5px',
          borderBottom: '1px solid #E0E2E7',
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FF5F57', flexShrink: 0 }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FFBD2E', flexShrink: 0 }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#28C840', flexShrink: 0 }} />
        <div
          style={{
            flex: 1,
            margin: '0 8px',
            backgroundColor: '#F5F6F8',
            borderRadius: '4px',
            padding: '2px 10px',
            fontSize: '0.48rem',
            fontFamily: 'var(--font-jakarta), sans-serif',
            color: '#9CA3AF',
            textAlign: 'center',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {project.domain}
        </div>
      </div>

      {/* Site content — fills remaining height */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', backgroundColor: project.mockupBg }}>
        <SiteContent project={project} />
      </div>
    </div>
  )
}

// ─── Mobile Mockup ────────────────────────────────────────────────────────────
// iPhone-style frame: 180×390px shell, content at 393×852 scaled to ~0.418

function MobileMockup({ project }: { project: Project }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'calc(100% - 60px)',
      }}
    >
      {/* iPhone Frame */}
      <div
        style={{
          width: 180,
          height: 390,
          backgroundColor: '#1A1A1A',
          borderRadius: 32,
          boxShadow: '0 20px 60px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.1)',
          position: 'relative',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 60,
            height: 18,
            backgroundColor: '#000000',
            borderRadius: 12,
            zIndex: 10,
          }}
        />

        {/* Screen — absolute with explicit px anchors so overflow:hidden clips reliably */}
        <div
          style={{
            position: 'absolute',
            top: 8,
            left: 8,
            right: 8,
            bottom: 8,
            borderRadius: 24,
            overflow: 'hidden',
            backgroundColor: project.mockupBg,
          }}
        >
          {/* Mini site at real iPhone width, scaled to fit */}
          <div
            style={{
              width: 393,
              height: 852,
              transform: 'scale(0.418)',
              transformOrigin: 'top left',
              flexShrink: 0,
            }}
          >
            <SiteContent project={project} />
          </div>
        </div>

        {/* Home Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 6,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 60,
            height: 3,
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: 2,
            zIndex: 10,
          }}
        />
      </div>
    </div>
  )
}

// ─── Mobile Layout ────────────────────────────────────────────────────────────

function PortfolioViewMobile({ onBack }: { onBack: () => void }) {
  const [selectedId, setSelectedId] = useState(projects[0].id)
  const [viewMode, setViewMode] = useState<'web' | 'mobile'>('mobile')
  const { t } = useLanguage()
  const selected = projects.find(p => p.id === selectedId)!

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 32 }}>
      {/* Back */}
      <button
        onClick={onBack}
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-jakarta)', fontSize: '0.85rem',
          color: '#8C8C8C', padding: '4px 0',
        }}
      >
        <ArrowLeft size={16} color="#8C8C8C" />
        {t('home')}
      </button>

      {/* Horizontal scrollable tabs */}
      <div style={{ display: 'flex', overflowX: 'auto', gap: 8, scrollbarWidth: 'none' } as React.CSSProperties}>
        {projects.map(p => (
          <button
            key={p.id}
            onClick={() => setSelectedId(p.id)}
            style={{
              padding: '6px 14px', borderRadius: 20, border: 'none', cursor: 'pointer', flexShrink: 0,
              backgroundColor: p.id === selectedId ? '#2D2D2D' : '#F5F6F8',
              color: p.id === selectedId ? '#FFFFFF' : '#8C8C8C',
              fontFamily: 'var(--font-jakarta)', fontSize: '0.78rem',
              fontWeight: p.id === selectedId ? 600 : 400,
              transition: 'all 180ms',
            }}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Mockup */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedId}-${viewMode}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            height: viewMode === 'mobile' ? 430 : 300,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
        >
          {viewMode === 'web' ? (
            <div style={{ width: '100%', height: '100%' }}>
              <WebMockup project={selected} />
            </div>
          ) : (
            <MobileMockup project={selected} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Web/Mobile toggle */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', gap: 2, backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: 7, padding: 2 }}>
          {(['web', 'mobile'] as const).map(mode => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              style={{
                padding: '4px 16px', borderRadius: 5, border: 'none', cursor: 'pointer',
                fontSize: '0.75rem', fontFamily: 'var(--font-jakarta)',
                fontWeight: viewMode === mode ? 600 : 400,
                color: viewMode === mode ? '#2D2D2D' : '#A8A8A8',
                backgroundColor: viewMode === mode ? '#FFFFFF' : 'transparent',
                boxShadow: viewMode === mode ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 180ms',
              }}
            >
              {t(mode)}
            </button>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p style={{ textAlign: 'center', fontSize: '0.55rem', fontFamily: 'var(--font-jakarta)', color: '#C8C8C8' }}>
        {t('portfolioDisclaimer')}
      </p>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface PortfolioViewProps {
  onBack: () => void
}

export function PortfolioView({ onBack }: PortfolioViewProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'web' | 'mobile'>('web')
  const [narrow, setNarrow] = useState(false)
  const { t } = useLanguage()
  const isMobile = useIsMobile()

  // Responsive: track window width
  useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (isMobile) return <PortfolioViewMobile onBack={onBack} />

  const selectedProjectData = selectedProject !== null
    ? projects.find(p => p.id === selectedProject)
    : null

  const remainingProjects = selectedProject !== null
    ? projects.filter(p => p.id !== selectedProject)
    : projects

  const handleSelectProject = (id: number) => {
    setSelectedProject(id)
    setViewMode('web')
  }

  return (
    <div className="flex h-full w-full flex-col" style={{ gap: '8px' }}>
      <AnimatePresence mode="wait">

        {selectedProject === null ? (
          /* ── GRID 3×2 ── */
          <motion.div
            key="grid"
            className="grid flex-1 grid-cols-3 grid-rows-2"
            style={{ gap: '8px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.25 } }}
          >
            {projects.map((project, index) => (
              <GridBlock
                key={project.id}
                project={project}
                index={index}
                onClick={() => handleSelectProject(project.id)}
                t={t}
              />
            ))}

            {/* Home — 6th cell */}
            <motion.div
              className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#F5F6F8]"
              style={{ padding: '16px' }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 5 * 0.06, ease: EASE }}
              onClick={onBack}
              whileHover={{ scale: 1.015, backgroundColor: '#EDEEF1', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
            >
              <ArrowLeft size={18} color="#8C8C8C" />
              <span className="font-sans font-medium text-[#8C8C8C]" style={{ fontSize: '0.9rem' }}>
                {t('home')}
              </span>
            </motion.div>
          </motion.div>

        ) : (
          /* ── SELECTED VIEW ── */
          <motion.div
            key="selected"
            className="flex-1"
            style={{
              display: 'grid',
              // On narrow screens collapse to single column
              gridTemplateColumns: narrow ? '1fr' : '20% 1fr',
              gap: '8px',
              // Ensure the grid itself doesn't overflow
              minHeight: 0,
              height: '100%',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.25 } }}
          >
            {/* ── Left column — hidden on narrow ── */}
            {!narrow && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  // Critical: constrain height so items shrink to fit
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                {remainingProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="cursor-pointer rounded-2xl"
                    style={{
                      backgroundColor: project.bg,
                      border: project.border,
                      padding: '8px 10px',
                      // flex-1 + minHeight:0 = each item takes equal share without overflowing
                      flex: 1,
                      minHeight: 0,
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06, ease: EASE }}
                    onClick={() => handleSelectProject(project.id)}
                    whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
                  >
                    <p
                      className={project.nameFont}
                      style={{ color: project.nameColor, fontSize: '0.72rem', lineHeight: 1.2 }}
                    >
                      {project.name}
                    </p>
                    <p
                      className="font-sans"
                      style={{ color: project.labelColor, fontSize: '0.5rem', marginTop: '2px' }}
                    >
                      {t(project.labelKey)}
                    </p>
                  </motion.div>
                ))}

                {/* Home */}
                <motion.div
                  className="cursor-pointer rounded-2xl bg-[#F5F6F8]"
                  style={{
                    padding: '8px 10px',
                    flex: 1,
                    minHeight: 0,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 4 * 0.06, ease: EASE }}
                  onClick={onBack}
                  whileHover={{ scale: 1.015, backgroundColor: '#EDEEF1', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
                >
                  <ArrowLeft size={12} color="#8C8C8C" />
                  <span className="font-sans font-medium text-[#8C8C8C]" style={{ fontSize: '0.65rem' }}>
                    {t('home')}
                  </span>
                </motion.div>
              </div>
            )}

            {/* ── Right panel ── */}
            <AnimatePresence mode="wait">
              {selectedProjectData && (
                <motion.div
                  key={selectedProjectData.id}
                  className="rounded-2xl bg-[#F5F6F8]"
                  style={{
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    // Must have explicit height for children to use height: 100%
                    height: '100%',
                    minHeight: 0,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.3, delay: 0.15, ease: EASE }}
                >
                  {/* ── Compact info bar ── */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      flexShrink: 0,
                      height: '32px',
                    }}
                  >
                    <span
                      className={selectedProjectData.nameFont}
                      style={{ color: selectedProjectData.nameColor, fontSize: '1rem', lineHeight: 1, flexShrink: 0 }}
                    >
                      {selectedProjectData.name}
                    </span>
                    <span style={{ color: '#D0D0D0', flexShrink: 0 }}>·</span>
                    <span
                      className="font-sans"
                      style={{ color: '#8C8C8C', fontSize: '0.65rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }}
                    >
                      {t(selectedProjectData.subtitleKey)}
                    </span>

                    <div style={{ flex: 1 }} />

                    {/* Swatches */}
                    <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexShrink: 0 }}>
                      {selectedProjectData.swatches.map((color, i) => (
                        <div
                          key={i}
                          style={{
                            width: 9, height: 9,
                            borderRadius: '50%',
                            backgroundColor: color,
                            border: ['#FFFFFF', '#FAFAF8', '#F8F9FC'].includes(color) ? '1px solid #E8E9EC' : undefined,
                            flexShrink: 0,
                          }}
                        />
                      ))}
                    </div>

                    <div style={{ width: 1, height: 14, backgroundColor: '#E0E2E7', flexShrink: 0 }} />

                    {/* Toggle */}
                    <div
                      style={{
                        display: 'flex',
                        gap: 2,
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        borderRadius: 7,
                        padding: 2,
                        flexShrink: 0,
                      }}
                    >
                      {(['web', 'mobile'] as const).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setViewMode(mode)}
                          style={{
                            padding: '2px 10px',
                            borderRadius: 5,
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.62rem',
                            fontFamily: 'var(--font-jakarta), sans-serif',
                            fontWeight: viewMode === mode ? 600 : 400,
                            color: viewMode === mode ? '#2D2D2D' : '#A8A8A8',
                            backgroundColor: viewMode === mode ? '#FFFFFF' : 'transparent',
                            boxShadow: viewMode === mode ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                            transition: 'all 180ms',
                          }}
                        >
                          {t(mode)}
                        </button>
                      ))}
                    </div>

                    {/* Back button on narrow screens */}
                    {narrow && (
                      <button
                        onClick={onBack}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          padding: '3px 10px',
                          borderRadius: 6,
                          border: '1px solid #E0E2E7',
                          backgroundColor: 'transparent',
                          cursor: 'pointer',
                          fontSize: '0.62rem',
                          fontFamily: 'var(--font-jakarta), sans-serif',
                          color: '#8C8C8C',
                          flexShrink: 0,
                        }}
                      >
                        <ArrowLeft size={10} color="#8C8C8C" />
                        {t('home')}
                      </button>
                    )}
                  </div>

                  {/* ── Mockup area — takes all remaining vertical space ── */}
                  <div
                    style={{
                      flex: 1,
                      minHeight: 0,
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {viewMode === 'web' ? (
                        <motion.div
                          key="web"
                          style={{ width: '100%', height: '100%' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <WebMockup project={selectedProjectData} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="mobile"
                          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <MobileMockup project={selectedProjectData} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* ── Disclaimer ── */}
                  <p
                    style={{
                      textAlign: 'center',
                      fontSize: '0.55rem',
                      fontFamily: 'var(--font-jakarta), sans-serif',
                      color: '#C8C8C8',
                      flexShrink: 0,
                    }}
                  >
                    {t('portfolioDisclaimer')}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}
