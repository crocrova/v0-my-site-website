'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Loader2 } from 'lucide-react'
import type { ProjectAnalysis } from '@/lib/project-data'
import { useLanguage } from '@/lib/language-context'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

type VisualTab = 'palette' | 'typography' | 'mood' | 'elements' | 'preview'

// Tabs are rendered dynamically with t() in the component

// ─── Palette ──────────────────────────────────────────────────────────────────

function PaletteContent({ project }: { project: ProjectAnalysis }) {
  const { colors, visualProposal } = project
  const { t } = useLanguage()
  return (
    <div className="flex h-full flex-col">
      <p className="font-serif mb-6" style={{ fontSize: '1.5rem', fontWeight: 400, color: colors.text }}>
        {t('paletteTitle')}
      </p>
      <div className="flex flex-wrap gap-3 flex-1 content-start">
        {visualProposal.palette.map((color) => (
          <div
            key={color.hex}
            style={{
              backgroundColor: colors.backgroundBlock,
              border: `1px solid ${colors.border}`,
              borderRadius: 16,
              padding: 20,
              width: 'calc(50% - 6px)',
              minWidth: 140,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: 56,
                height: 56,
                backgroundColor: color.hex,
                border: `1px solid ${colors.border}`,
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                flexShrink: 0,
              }}
            />
            <div className="flex flex-col gap-1">
              <p className="font-sans font-medium" style={{ fontSize: '0.8rem', color: colors.text, lineHeight: 1.2 }}>
                {color.name}
              </p>
              <p className="font-mono" style={{ fontSize: '0.6rem', color: colors.textSecondary, letterSpacing: '0.5px' }}>
                {color.hex}
              </p>
              <p className="font-sans" style={{ fontSize: '0.55rem', color: colors.textSecondary, lineHeight: 1.4 }}>
                {color.role}
              </p>
              <p className="font-serif italic" style={{ fontSize: '0.6rem', color: colors.accent, lineHeight: 1.4 }}>
                {color.emotion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Typography ───────────────────────────────────────────────────────────────

function TypographyContent({ project }: { project: ProjectAnalysis }) {
  const { colors, visualProposal } = project
  const { typography } = visualProposal
  const { t } = useLanguage()

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
    backgroundColor: colors.backgroundBlock,
    border: `1px solid ${colors.border}`,
    borderRadius: 16,
    padding: 24,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  }

  const cards = [
    {
      label: t('typHeadlines'),
      font: typography.heading,
      nameSize: '2.5rem',
      specimenFont: `'${typography.heading}', serif`,
      explanation: t('typHeadlinesDesc'),
    },
    {
      label: t('typBody'),
      font: typography.body,
      nameSize: '1.5rem',
      specimenFont: `'${typography.body}', sans-serif`,
      explanation: t('typBodyDesc'),
    },
    ...(typography.accent ? [{
      label: t('typAccent'),
      font: typography.accent,
      nameSize: '1.5rem',
      specimenFont: `'${typography.accent}', monospace`,
      explanation: t('typAccentDesc'),
    }] : []),
  ]

  return (
    <div className="flex h-full flex-col">
      <p className="font-serif mb-6" style={{ fontSize: '1.5rem', fontWeight: 400, color: colors.text }}>
        {t('typographyTitle')}
      </p>
      <div className="flex gap-4 flex-1">
        {cards.map((card) => (
          <div key={card.label} style={cardStyle}>
            <p
              className="font-sans font-semibold uppercase"
              style={{ fontSize: '0.6rem', color: colors.accent, letterSpacing: '2px' }}
            >
              {card.label}
            </p>
            <p style={{ fontFamily: card.specimenFont, fontSize: card.nameSize, color: colors.text, lineHeight: 1.1 }}>
              {card.font}
            </p>
            <p style={{ fontFamily: card.specimenFont, fontSize: '1.2rem', color: colors.textSecondary }}>
              Aa Bb Cc 1 2 3
            </p>
            <p className="font-sans mt-auto" style={{ fontSize: '0.65rem', color: colors.textSecondary, lineHeight: 1.6, fontWeight: 300 }}>
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
  return (
    <div className="flex h-full flex-col items-center justify-center">
      {/* Words */}
      <div className="flex flex-col items-center gap-6">
        {mood.words.map((word, i) => (
          <div key={word} className="flex flex-col items-center">
            <motion.p
              className="font-serif italic"
              style={{ fontSize: '3rem', fontWeight: 300, color: colors.accent }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: EASE }}
            >
              {word}
            </motion.p>
            {i < mood.words.length - 1 && (
              <div style={{ width: 1, height: 32, backgroundColor: colors.border, marginTop: 8 }} />
            )}
          </div>
        ))}
      </div>
      {/* Description */}
      <motion.p
        className="font-sans text-center mt-10"
        style={{ fontSize: '0.88rem', fontWeight: 300, color: colors.text, maxWidth: 500, lineHeight: 1.75 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
      >
        {mood.description}
      </motion.p>
      {/* Reference */}
      <motion.p
        className="font-sans text-center mt-4"
        style={{ fontSize: '0.68rem', color: colors.textSecondary, maxWidth: 440, lineHeight: 1.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65, ease: EASE }}
      >
        <span style={{ color: colors.border }}>{t('moodReference')}</span>
        {mood.reference}
      </motion.p>
    </div>
  )
}

// ─── Elements ─────────────────────────────────────────────────────────────────

function FadeDemo({ accentColor }: { accentColor: string }) {
  const [vis, setVis] = useState(true)
  useEffect(() => {
    const t = setInterval(() => setVis(v => !v), 2200)
    return () => clearInterval(t)
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

  const quadrantStyle: React.CSSProperties = {
    backgroundColor: bg,
    borderRadius: 12,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    flex: 1,
    minWidth: 0,
  }

  return (
    <div className="flex h-full flex-col">
      <p className="font-serif mb-6" style={{ fontSize: '1.5rem', fontWeight: 400, color: colors.text }}>
        {t('elementsTitle')}
      </p>
      <div className="flex-1 grid grid-cols-2 grid-rows-2" style={{ gap: 12 }}>
        {/* 1 — Botones */}
        <div style={quadrantStyle}>
          <p className="font-sans uppercase tracking-widest" style={{ fontSize: '0.5rem', color: colors.textSecondary }}>
            {t('elemButtons')}
          </p>
          <div className="flex items-center justify-center flex-1 gap-4">
            <motion.button
              whileHover={{ boxShadow: `0 0 24px ${colors.accent}55` }}
              style={{
                border: `1px solid ${colors.accent}`,
                backgroundColor: 'transparent',
                color: colors.textLight,
                padding: '10px 20px',
                borderRadius: 4,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-jakarta)',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s',
              }}
            >
              Reserve Now
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: colors.accent }}
              style={{
                backgroundColor: `${colors.accent}22`,
                border: `1px solid ${colors.accent}44`,
                color: colors.accent,
                padding: '10px 20px',
                borderRadius: 4,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-jakarta)',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
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
          {/* Spotlight */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 200,
            height: 200,
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
            <span
              className="font-sans font-bold"
              style={{
                backgroundColor: colors.accent,
                color: colors.backgroundDark,
                padding: '8px 20px',
                borderRadius: 4,
                fontSize: '0.7rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              {webType}
            </span>
            {/* Mini scroll diagram */}
            <div className="flex flex-col items-center gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 48,
                    height: 12,
                    backgroundColor: i === 0 ? `${colors.accent}60` : `${colors.accent}20`,
                    borderRadius: 3,
                    border: `1px solid ${colors.accent}30`,
                  }}
                />
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

// ─── Preview ──────────────────────────────────────────────────────────────────

function PreviewContent({ project }: { project: ProjectAnalysis }) {
  const { colors, preview } = project
  const { t } = useLanguage()
  const domain = `${project.clientName}.com`
  return (
    <div className="flex h-full flex-col">
      <p className="font-serif mb-4" style={{ fontSize: '1.5rem', fontWeight: 400, color: colors.text }}>
        {t('previewTitle')}
      </p>
      <div
        className="flex-1 flex flex-col rounded-xl overflow-hidden"
        style={{ border: `1px solid ${colors.border}`, boxShadow: '0 8px 32px rgba(0,0,0,0.08)', minHeight: 0 }}
      >
        {/* Browser chrome */}
        <div style={{
          height: 32,
          flexShrink: 0,
          backgroundColor: '#EDEFF2',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          gap: 5,
          borderBottom: '1px solid #E0E2E7',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#28C840' }} />
          <div style={{
            flex: 1, margin: '0 8px', backgroundColor: '#F5F6F8', borderRadius: 4,
            padding: '2px 10px', fontSize: '0.48rem', fontFamily: 'var(--font-jakarta)',
            color: '#9CA3AF', textAlign: 'center',
          }}>
            {domain}
          </div>
        </div>
        {/* Screen */}
        <div
          className="flex-1 flex flex-col items-center justify-center gap-4"
          style={{ backgroundColor: colors.backgroundDark, minHeight: 0 }}
        >
          {preview.isUnlocked ? (
            <p className="font-sans" style={{ color: colors.textSecondary, fontSize: '0.8rem' }}>
              {t('previewAvailable')}
            </p>
          ) : (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              >
                <Loader2 size={40} color={colors.accent} />
              </motion.div>
              <p className="font-sans font-medium" style={{ fontSize: '1rem', color: colors.textLight }}>
                {t('previewInDev')}
              </p>
              <p className="font-sans text-center" style={{ fontSize: '0.7rem', color: colors.textSecondary, maxWidth: 280, lineHeight: 1.65 }}>
                {t('previewBuilding')}
              </p>
              <p className="font-sans text-center" style={{ fontSize: '0.6rem', color: `${colors.textSecondary}99`, maxWidth: 260, lineHeight: 1.65 }}>
                {t('previewAccess')}
              </p>
            </>
          )}
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
  const { colors } = project
  const { t } = useLanguage()

  const TABS: { id: VisualTab; label: string }[] = [
    { id: 'palette', label: t('tabPalette') },
    { id: 'typography', label: t('tabTypography') },
    { id: 'mood', label: t('tabMood') },
    { id: 'elements', label: t('tabElements') },
    { id: 'preview', label: t('tabPreview') },
  ]

  const blockBg = colors.backgroundBlock
  const blockBorder = colors.border

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
                backgroundColor: blockBg,
                border: `1px solid ${blockBorder}`,
                borderLeft: isActive ? `3px solid ${colors.accent}` : `3px solid transparent`,
                padding: '0 16px',
                minHeight: 0,
              }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06, ease: EASE }}
              onClick={() => setSelectedTab(tab.id)}
              whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}
            >
              <span
                className="font-sans"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? colors.text : colors.textSecondary,
                }}
              >
                {tab.label}
              </span>
            </motion.div>
          )
        })}
        {/* Volver */}
        <motion.div
          className="cursor-pointer rounded-2xl flex items-center justify-center gap-2"
          style={{ backgroundColor: blockBg, border: `1px solid ${blockBorder}`, minHeight: 48 }}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: TABS.length * 0.06, ease: EASE }}
          onClick={onBack}
          whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}
        >
          <ArrowLeft size={14} color={colors.textSecondary} />
          <span className="font-sans font-medium" style={{ fontSize: '0.72rem', color: colors.textSecondary }}>
            {t('back')}
          </span>
        </motion.div>
      </div>

      {/* Right panel */}
      <motion.div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: blockBg, border: `1px solid ${blockBorder}`, padding: 28, height: '100%', minHeight: 0 }}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1, ease: EASE }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab === 'palette' && <PaletteContent project={project} />}
            {selectedTab === 'typography' && <TypographyContent project={project} />}
            {selectedTab === 'mood' && <MoodContent project={project} />}
            {selectedTab === 'elements' && <ElementsContent project={project} />}
            {selectedTab === 'preview' && <PreviewContent project={project} />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
