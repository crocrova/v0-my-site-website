'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import type { ProjectAnalysis } from '@/lib/project-data'
import { useLanguage } from '@/lib/language-context'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

type VisualTab = 'palette' | 'typography' | 'mood' | 'elements'

const UI = {
  bgBlock: '#F5F6F8',
  accent: '#4DE8D8',
  text: '#2D2D2D',
  textSecondary: '#8C8C8C',
  border: '#E8E8E8',
  textLight: '#FFFFFF',
}

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

function isLight(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  return (0.299 * r + 0.587 * g + 0.114 * b) > 0.5
}

// ─── Palette ──────────────────────────────────────────────────────────────────

function PaletteContent({ project }: { project: ProjectAnalysis }) {
  const { visualProposal } = project
  const { t } = useLanguage()
  const isMobile = useIsMobile()
  return (
    <div className="flex h-full flex-col">
      <p className="font-serif mb-6" style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: 400, color: UI.text }}>
        {t('paletteTitle')}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
        {visualProposal.palette.map((color, index) => {
          const light = isLight(color.hex)
          const textCol = light ? '#2D2D2D' : '#FFFFFF'
          const textFade = light ? 'rgba(45,45,45,0.45)' : 'rgba(255,255,255,0.45)'
          return (
            <motion.div
              key={color.hex}
              style={{
                backgroundColor: color.hex,
                borderRadius: 16,
                padding: 20,
                height: 140,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.06, ease: EASE }}
            >
              {/* Top right: number watermark */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <span
                  className="font-sans"
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: textCol,
                    opacity: 0.3,
                    lineHeight: 1,
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              {/* Bottom left: info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span className="font-sans" style={{ fontSize: '0.9rem', fontWeight: 600, color: textCol, lineHeight: 1.2 }}>
                  {color.name}
                </span>
                <span className="font-mono" style={{ fontSize: '0.65rem', fontWeight: 400, color: textFade, letterSpacing: '0.5px' }}>
                  {color.hex}
                </span>
                <span className="font-sans" style={{ fontSize: '0.6rem', fontWeight: 400, color: textFade, lineHeight: 1.4 }}>
                  {color.role}
                </span>
                <span className="font-serif italic" style={{ fontSize: '0.6rem', fontWeight: 400, color: textFade, lineHeight: 1.4 }}>
                  {color.emotion}
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Typography ───────────────────────────────────────────────────────────────

function TypographyContent({ project }: { project: ProjectAnalysis }) {
  const { colors, visualProposal } = project
  const { typography } = visualProposal
  const { t } = useLanguage()
  const isMobile = useIsMobile()

  useEffect(() => {
    const families = [typography.heading, typography.body, typography.accent].filter(Boolean)
    const query = families.map(f => `family=${encodeURIComponent(f!)}:ital,wght@0,300;0,400;0,700;1,300;1,400`).join('&')
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = `https://fonts.googleapis.com/css2?${query}&display=swap`
    document.head.appendChild(link)
    return () => { if (document.head.contains(link)) document.head.removeChild(link) }
  }, [typography.heading, typography.body, typography.accent])

  const cardStyle: React.CSSProperties = {
    backgroundColor: UI.bgBlock,
    border: `1px solid ${UI.border}`,
    borderRadius: 16,
    padding: isMobile ? 16 : 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  }

  const cards = [
    {
      label: t('typHeadlines'),
      font: typography.heading,
      nameSize: isMobile ? '1.8rem' : '2.5rem',
      specimenFont: `'${typography.heading}', serif`,
      explanation: t('typHeadlinesDesc'),
    },
    {
      label: t('typBody'),
      font: typography.body,
      nameSize: isMobile ? '1.2rem' : '1.5rem',
      specimenFont: `'${typography.body}', sans-serif`,
      explanation: t('typBodyDesc'),
    },
    ...(typography.accent ? [{
      label: t('typAccent'),
      font: typography.accent,
      nameSize: isMobile ? '1.2rem' : '1.5rem',
      specimenFont: `'${typography.accent}', monospace`,
      explanation: t('typAccentDesc'),
    }] : []),
  ]

  return (
    <div className="flex h-full flex-col">
      <p className="font-serif mb-6" style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: 400, color: UI.text }}>
        {t('typographyTitle')}
      </p>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 12 : 16, flex: 1 }}>
        {cards.map((card) => (
          <div key={card.label} style={cardStyle}>
            <p className="font-sans font-semibold uppercase" style={{ fontSize: '0.6rem', color: UI.accent, letterSpacing: '2px' }}>
              {card.label}
            </p>
            <p style={{ fontFamily: card.specimenFont, fontSize: card.nameSize, color: colors.text, lineHeight: 1.1 }}>
              {card.font}
            </p>
            <p style={{ fontFamily: card.specimenFont, fontSize: '1.2rem', color: colors.textSecondary }}>
              Aa Bb Cc 1 2 3
            </p>
            <p className="font-sans mt-auto" style={{ fontSize: '0.65rem', color: UI.textSecondary, lineHeight: 1.6, fontWeight: 300 }}>
              {card.explanation}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Mood ─────────────────────────────────────────────────────────────────────

function MoodContent({ project }: { project: ProjectAnalysis }) {
  const { colors, visualProposal } = project
  const { mood } = visualProposal
  const { t } = useLanguage()
  const isMobile = useIsMobile()
  return (
    <div className="flex h-full flex-col items-center justify-center" style={{ paddingBottom: isMobile ? 24 : 0 }}>
      <div className="flex flex-col items-center gap-4">
        {mood.words.map((word, i) => (
          <div key={word} className="flex flex-col items-center">
            <motion.p
              className="font-serif italic"
              style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 300, color: colors.accent }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: EASE }}
            >
              {word}
            </motion.p>
            {i < mood.words.length - 1 && (
              <div style={{ width: 1, height: 24, backgroundColor: UI.border, marginTop: 6 }} />
            )}
          </div>
        ))}
      </div>
      <motion.p
        className="font-sans text-center mt-8"
        style={{ fontSize: isMobile ? '0.8rem' : '0.88rem', fontWeight: 300, color: UI.text, maxWidth: 480, lineHeight: 1.75 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
      >
        {mood.description}
      </motion.p>
      <motion.p
        className="font-sans text-center mt-4"
        style={{ fontSize: '0.68rem', color: UI.textSecondary, maxWidth: 440, lineHeight: 1.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65, ease: EASE }}
      >
        <span style={{ color: UI.border }}>{t('moodReference')}</span>
        {mood.reference}
      </motion.p>
    </div>
  )
}

// ─── Elements ─────────────────────────────────────────────────────────────────

function FadeDemo({ accentColor }: { accentColor: string }) {
  const [vis, setVis] = useState(true)
  useEffect(() => {
    const timer = setInterval(() => setVis(v => !v), 2200)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="flex items-center justify-center" style={{ height: 60 }}>
      <AnimatePresence mode="wait">
        {vis && (
          <motion.p
            key="fade"
            className="font-serif italic"
            style={{ fontSize: '1.1rem', color: accentColor }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            Behind the Mirror
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

function ElementsContent({ project }: { project: ProjectAnalysis }) {
  const { colors, visualProposal } = project
  const { proposedElements, webType } = visualProposal
  const bg = colors.backgroundDark
  const { t } = useLanguage()
  const isMobile = useIsMobile()

  const quadrantStyle: React.CSSProperties = {
    backgroundColor: bg,
    borderRadius: 12,
    padding: isMobile ? 14 : 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  }

  return (
    <div className="flex h-full flex-col">
      <p className="font-serif mb-4" style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: 400, color: UI.text }}>
        {t('elementsTitle')}
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gridTemplateRows: isMobile ? 'auto' : '1fr 1fr',
        gap: 12,
        flex: 1,
      }}>
        {/* 1 — Botones */}
        <div style={quadrantStyle}>
          <p className="font-sans uppercase tracking-widest" style={{ fontSize: '0.5rem', color: colors.textSecondary }}>
            {t('elemButtons')}
          </p>
          <div className="flex items-center justify-center flex-1 gap-4">
            <motion.button
              whileHover={{ boxShadow: `0 0 24px ${colors.accent}55` }}
              style={{
                border: `1px solid ${colors.accent}`, backgroundColor: 'transparent',
                color: colors.textLight, padding: '10px 20px', borderRadius: 4,
                letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.65rem',
                fontFamily: 'var(--font-jakarta)', cursor: 'pointer', transition: 'box-shadow 0.3s',
              }}
            >
              Reserve Now
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: colors.accent }}
              style={{
                backgroundColor: `${colors.accent}22`, border: `1px solid ${colors.accent}44`,
                color: colors.accent, padding: '10px 20px', borderRadius: 4,
                letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.65rem',
                fontFamily: 'var(--font-jakarta)', cursor: 'pointer', transition: 'background-color 0.3s',
              }}
            >
              View Menu
            </motion.button>
          </div>
          <p className="font-sans" style={{ fontSize: '0.55rem', color: colors.textSecondary, lineHeight: 1.5 }}>
            {proposedElements.buttons}
          </p>
        </div>

        {/* 2 — Iluminación */}
        <div style={{ ...quadrantStyle, position: 'relative', overflow: 'hidden' }}>
          <p className="font-sans uppercase tracking-widest" style={{ fontSize: '0.5rem', color: colors.textSecondary, position: 'relative', zIndex: 1 }}>
            {t('elemLighting')}
          </p>
          <div style={{
            position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
            width: 200, height: 200,
            background: `radial-gradient(circle, ${colors.accent}35 0%, transparent 65%)`,
            pointerEvents: 'none',
          }} />
          <div className="flex items-center justify-center flex-1" style={{ position: 'relative', zIndex: 1 }}>
            <p className="font-serif italic text-center" style={{ fontSize: '1.3rem', color: colors.textLight, lineHeight: 1.3 }}>
              Behind the<br />Mirror
            </p>
          </div>
          <p className="font-sans" style={{ fontSize: '0.55rem', color: colors.textSecondary, lineHeight: 1.5, position: 'relative', zIndex: 1 }}>
            {proposedElements.lighting}
          </p>
        </div>

        {/* 3 — Animaciones */}
        <div style={quadrantStyle}>
          <p className="font-sans uppercase tracking-widest" style={{ fontSize: '0.5rem', color: colors.textSecondary }}>
            {t('elemAnimations')}
          </p>
          <div className="flex-1 flex items-center justify-center">
            <FadeDemo accentColor={colors.accent} />
          </div>
          <p className="font-sans" style={{ fontSize: '0.55rem', color: colors.textSecondary, lineHeight: 1.5 }}>
            {proposedElements.animations}
          </p>
        </div>

        {/* 4 — Tipo de web */}
        <div style={quadrantStyle}>
          <p className="font-sans uppercase tracking-widest" style={{ fontSize: '0.5rem', color: colors.textSecondary }}>
            {t('elemSiteType')}
          </p>
          <div className="flex flex-col items-center justify-center flex-1 gap-3">
            <span className="font-sans font-bold" style={{
              backgroundColor: colors.accent, color: colors.backgroundDark,
              padding: '8px 20px', borderRadius: 4, fontSize: '0.7rem',
              letterSpacing: '1px', textTransform: 'uppercase',
            }}>
              {webType}
            </span>
            <div className="flex flex-col items-center gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} style={{
                  width: 48, height: 12,
                  backgroundColor: i === 0 ? `${colors.accent}60` : `${colors.accent}20`,
                  borderRadius: 3, border: `1px solid ${colors.accent}30`,
                }} />
              ))}
              <p className="font-sans" style={{ fontSize: '0.5rem', color: colors.textSecondary, marginTop: 4 }}>
                {t('elemSectionNote')}
              </p>
            </div>
          </div>
          <p className="font-sans" style={{ fontSize: '0.55rem', color: colors.textSecondary, lineHeight: 1.5 }}>
            {proposedElements.layout}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

interface VisualProposalViewProps {
  project: ProjectAnalysis
  onBack: () => void
}

export function VisualProposalView({ project, onBack }: VisualProposalViewProps) {
  const [selectedTab, setSelectedTab] = useState<VisualTab>('palette')
  const { t } = useLanguage()
  const isMobile = useIsMobile()

  const TABS: { id: VisualTab; label: string }[] = [
    { id: 'palette', label: t('tabPalette') },
    { id: 'typography', label: t('tabTypography') },
    { id: 'mood', label: t('tabMood') },
    { id: 'elements', label: t('tabElements') },
  ]

  const tabContent = (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedTab}
        className="h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{ ...(isMobile ? { paddingBottom: 24 } : {}) }}
      >
        {selectedTab === 'palette' && <PaletteContent project={project} />}
        {selectedTab === 'typography' && <TypographyContent project={project} />}
        {selectedTab === 'mood' && <MoodContent project={project} />}
        {selectedTab === 'elements' && <ElementsContent project={project} />}
      </motion.div>
    </AnimatePresence>
  )

  // ── Mobile: horizontal tabs scrollable ──────────────────────────────────────
  if (isMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, paddingBottom: 80 }}>
        {/* Back button fixed */}
        <button
          onClick={onBack}
          style={{
            position: 'fixed', top: 16, left: 16, zIndex: 60,
            display: 'flex', alignItems: 'center', gap: 6,
            backgroundColor: UI.bgBlock, border: `1px solid ${UI.border}`,
            borderRadius: 20, padding: '8px 14px',
            cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          }}
        >
          <ArrowLeft size={14} color={UI.textSecondary} />
          <span className="font-sans font-medium" style={{ fontSize: '0.75rem', color: UI.textSecondary }}>
            {t('back')}
          </span>
        </button>

        {/* Spacer */}
        <div style={{ height: 60 }} />

        {/* Horizontal tabs */}
        <div style={{
          display: 'flex', gap: 8, overflowX: 'auto', padding: '4px 0 12px',
          scrollbarWidth: 'none',
        }}>
          {TABS.map(tab => {
            const isActive = selectedTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                style={{
                  padding: '8px 16px', borderRadius: 20, cursor: 'pointer',
                  backgroundColor: isActive ? UI.accent : UI.bgBlock,
                  color: isActive ? '#FFFFFF' : UI.textSecondary,
                  fontSize: '0.7rem', fontFamily: 'var(--font-jakarta)', fontWeight: isActive ? 600 : 400,
                  whiteSpace: 'nowrap', flexShrink: 0,
                  border: isActive ? 'none' : `1px solid ${UI.border}`,
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div style={{ minHeight: 300 }}>{tabContent}</div>
      </div>
    )
  }

  // ── Desktop: left tabs + right panel ────────────────────────────────────────
  return (
    <div className="grid h-full w-full" style={{ gridTemplateColumns: '20% 1fr', gap: 8 }}>
      {/* Left column */}
      <div className="flex flex-col" style={{ gap: 8, height: '100%' }}>
        {TABS.map((tab, i) => {
          const isActive = selectedTab === tab.id
          return (
            <motion.div
              key={tab.id}
              className="cursor-pointer rounded-2xl flex items-center flex-1"
              style={{
                backgroundColor: UI.bgBlock,
                border: `1px solid ${UI.border}`,
                borderLeft: isActive ? `3px solid ${UI.accent}` : `3px solid transparent`,
                padding: '0 16px',
                minHeight: 0,
              }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06, ease: EASE }}
              onClick={() => setSelectedTab(tab.id)}
              whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}
            >
              <span className="font-sans" style={{
                fontSize: '0.75rem', fontWeight: isActive ? 600 : 400,
                color: isActive ? UI.text : UI.textSecondary,
              }}>
                {tab.label}
              </span>
            </motion.div>
          )
        })}
        {/* Volver */}
        <motion.div
          className="cursor-pointer rounded-2xl flex items-center justify-center gap-2"
          style={{ backgroundColor: UI.bgBlock, border: `1px solid ${UI.border}`, minHeight: 48 }}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: TABS.length * 0.06, ease: EASE }}
          onClick={onBack}
          whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}
        >
          <ArrowLeft size={14} color={UI.textSecondary} />
          <span className="font-sans font-medium" style={{ fontSize: '0.72rem', color: UI.textSecondary }}>
            {t('back')}
          </span>
        </motion.div>
      </div>

      {/* Right panel */}
      <motion.div
        className="rounded-2xl overflow-auto"
        style={{ backgroundColor: UI.bgBlock, border: `1px solid ${UI.border}`, padding: 28, height: '100%', minHeight: 0 }}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1, ease: EASE }}
      >
        {tabContent}
      </motion.div>
    </div>
  )
}
