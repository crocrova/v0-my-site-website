'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Zap, Globe,
  DoorOpen, BookOpen, Wine, Sparkles, MapPin, Calendar, Circle,
} from 'lucide-react'
import type { ProjectAnalysis } from '@/lib/project-data'
import { useLanguage } from '@/lib/language-context'

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

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const UI = {
  bgBlock: '#F5F6F8',
  bgDark: '#2D2D2D',
  accent: '#4DE8D8',
  text: '#2D2D2D',
  textSecondary: '#8C8C8C',
  textLight: '#FFFFFF',
  border: '#E8E8E8',
}

type StructureTab = 'sitemap' | 'objectives' | 'features' | 'advantage' | 'competitors'

// Lucide icon map for sitemap
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  DoorOpen, BookOpen, Wine, Sparkles, MapPin, Calendar,
}

// ─── Sitemap ──────────────────────────────────────────────────────────────────

const SECTION_BADGES: Record<string, string> = {
  Drinks: 'Acceso por QR',
  Reserve: 'Integración WhatsApp',
}

function SitemapContent({ project }: { project: ProjectAnalysis }) {
  const { structureProposal } = project
  const { t } = useLanguage()
  const isMobile = useIsMobile()
  const sitemap = structureProposal.sitemap

  const root = sitemap[0]
  const row1 = sitemap.slice(1, 4)
  const row2 = sitemap.slice(4, 6)
  const LINE = 1.5

  const SitemapCard = ({ section }: { section: typeof sitemap[0] }) => {
    const Icon = ICON_MAP[section.icon] || Circle
    const badge = SECTION_BADGES[section.name]
    return (
      <div
        style={{
          backgroundColor: UI.bgBlock,
          border: `1px solid ${UI.border}`,
          borderRadius: 10,
          padding: '10px 12px',
          width: '100%',
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <Icon size={13} color={UI.accent} />
          <p className="font-sans font-semibold" style={{ fontSize: '0.72rem', color: UI.text }}>
            {section.name}
          </p>
          {badge && (
            <span
              className="font-sans"
              style={{
                fontSize: '0.48rem',
                backgroundColor: `${UI.accent}18`,
                color: UI.accent,
                borderRadius: 6,
                padding: '1px 6px',
                marginLeft: 'auto',
                whiteSpace: 'nowrap',
              }}
            >
              {badge}
            </span>
          )}
        </div>
        <p className="font-sans" style={{ fontSize: '0.57rem', color: UI.textSecondary, lineHeight: 1.4, fontWeight: 300 }}>
          {section.description}
        </p>
      </div>
    )
  }

  // Mobile: simple vertical list
  if (isMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <p className="font-serif mb-4" style={{ fontSize: '1.2rem', fontWeight: 400, color: UI.text }}>
          {t('sitemapTitle')}
        </p>
        {sitemap.map((section, i) => (
          <div key={section.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <SitemapCard section={section} />
            {i < sitemap.length - 1 && (
              <div style={{ width: LINE, height: 12, backgroundColor: UI.border, marginLeft: 16 }} />
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col">
      <p className="font-serif mb-4" style={{ fontSize: '1.5rem', fontWeight: 400, color: UI.text }}>
        {t('sitemapTitle')}
      </p>

      <div className="flex-1 flex flex-col items-center" style={{ gap: 0, overflow: 'hidden' }}>

        {/* Root node */}
        <div style={{ width: '55%' }}>
          {root && <SitemapCard section={root} />}
        </div>

        {/* Root → Row 1 connector */}
        <div style={{ width: LINE, height: 14, backgroundColor: UI.border, flexShrink: 0 }} />

        {/* Row 1 */}
        {row1.length > 0 && (
          <div className="w-full relative" style={{ flexShrink: 0 }}>
            <div style={{
              position: 'absolute', top: 0,
              left: `${100 / (2 * row1.length)}%`,
              right: `${100 / (2 * row1.length)}%`,
              height: LINE, backgroundColor: UI.border,
            }} />
            <div className="flex" style={{ gap: 8 }}>
              {row1.map((section) => (
                <div key={section.name} className="flex flex-col items-center" style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ width: LINE, height: 14, backgroundColor: UI.border, flexShrink: 0 }} />
                  <SitemapCard section={section} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Row 1 → Row 2 connector */}
        {row2.length > 0 && (
          <>
            <div style={{ width: LINE, height: 14, backgroundColor: UI.border, flexShrink: 0 }} />
            <div style={{ width: '68%', position: 'relative', flexShrink: 0 }}>
              <div style={{
                position: 'absolute', top: 0,
                left: `${100 / (2 * row2.length)}%`,
                right: `${100 / (2 * row2.length)}%`,
                height: LINE, backgroundColor: UI.border,
              }} />
              <div className="flex" style={{ gap: 8 }}>
                {row2.map((section) => (
                  <div key={section.name} className="flex flex-col items-center" style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ width: LINE, height: 14, backgroundColor: UI.border, flexShrink: 0 }} />
                    <SitemapCard section={section} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

// ─── Objectives ───────────────────────────────────────────────────────────────

function ObjectivesContent({ project }: { project: ProjectAnalysis }) {
  const { structureProposal } = project
  const { t } = useLanguage()
  return (
    <div className="flex h-full flex-col">
      <p className="font-serif mb-5" style={{ fontSize: '1.5rem', fontWeight: 400, color: UI.text }}>
        {t('objectivesTitle')}
      </p>
      <div className="flex flex-col gap-3 flex-1 overflow-auto">
        {structureProposal.objectives.map((obj, i) => {
          const parts = obj.split(' — ')
          const text = parts[0] ?? obj
          const context = parts[1] ?? ''
          const num = String(i + 1).padStart(2, '0')
          return (
            <motion.div
              key={i}
              className="flex items-start gap-4 rounded-xl p-4"
              style={{ backgroundColor: UI.bgBlock, border: `1px solid ${UI.border}` }}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: EASE }}
            >
              <p className="font-serif font-medium shrink-0" style={{ fontSize: '1.4rem', color: UI.accent, lineHeight: 1 }}>
                {num}
              </p>
              <div>
                <p className="font-sans" style={{ fontSize: '0.78rem', color: UI.text, fontWeight: 500, lineHeight: 1.4 }}>
                  {text}
                </p>
                {context && (
                  <p className="font-sans mt-1" style={{ fontSize: '0.62rem', color: UI.textSecondary, lineHeight: 1.5, fontWeight: 300 }}>
                    {context}
                  </p>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Special Features ─────────────────────────────────────────────────────────

function FeaturesContent({ project }: { project: ProjectAnalysis }) {
  const { structureProposal } = project
  const { t } = useLanguage()
  return (
    <div className="flex h-full flex-col">
      <p className="font-serif mb-5" style={{ fontSize: '1.5rem', fontWeight: 400, color: UI.text }}>
        {t('featuresTitle')}
      </p>
      <div className="flex flex-col gap-3 flex-1">
        {structureProposal.specialFeatures.map((feat, i) => {
          const parts = feat.split(' — ')
          const title = parts[0] ?? feat
          const desc = parts[1] ?? ''
          return (
            <motion.div
              key={i}
              className="flex items-start gap-3 rounded-xl p-4"
              style={{ backgroundColor: UI.bgDark, border: `1px solid ${UI.accent}30` }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: EASE }}
            >
              <Zap size={16} color={UI.accent} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-sans font-semibold" style={{ fontSize: '0.8rem', color: UI.textLight, lineHeight: 1.4 }}>
                  {title}
                </p>
                {desc && (
                  <p className="font-sans mt-1" style={{ fontSize: '0.65rem', color: `${UI.textLight}B3`, lineHeight: 1.5, fontWeight: 300 }}>
                    {desc}
                  </p>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Advantage ────────────────────────────────────────────────────────────────

function AdvantageContent({ project }: { project: ProjectAnalysis }) {
  const { structureProposal } = project
  const { t } = useLanguage()
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <p className="font-sans uppercase tracking-widest mb-8" style={{ fontSize: '0.55rem', color: UI.textSecondary }}>
        {t('advantageLabel')}
      </p>
      <motion.p
        className="font-serif italic text-center"
        style={{ fontSize: '1.25rem', fontWeight: 400, color: UI.text, maxWidth: 520, lineHeight: 1.75 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {structureProposal.mainAdvantage}
      </motion.p>
      <div style={{ width: 48, height: 1, backgroundColor: UI.accent, marginTop: 32 }} />
    </div>
  )
}

// ─── Competitors ──────────────────────────────────────────────────────────────

function CompetitorsContent({ project }: { project: ProjectAnalysis }) {
  const { structureProposal } = project
  const { t } = useLanguage()
  return (
    <div className="flex h-full flex-col">
      <p className="font-serif mb-5" style={{ fontSize: '1.5rem', fontWeight: 400, color: UI.text }}>
        {t('competitorsTitle')}
      </p>
      <div className="flex flex-col gap-4 flex-1">
        {structureProposal.competitors.map((c, i) => (
          <motion.div
            key={c.name}
            className="rounded-xl p-4"
            style={{ backgroundColor: `${UI.accent}08`, border: `1px solid ${UI.border}` }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: i * 0.07, ease: EASE }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-sans font-semibold" style={{ fontSize: '0.85rem', color: UI.text }}>
                {c.name}
              </p>
              <div className="flex items-center gap-2">
                <Globe size={12} color={c.hasWebsite ? '#84B59F' : '#F87171'} />
                <p className="font-sans font-medium" style={{ fontSize: '0.7rem', color: UI.accent }}>
                  {c.digitalScore}/10
                </p>
              </div>
            </div>
            {/* Score bar */}
            <div className="rounded-full overflow-hidden mb-3" style={{ height: 4, backgroundColor: UI.border }}>
              <motion.div
                className="rounded-full h-full"
                style={{ backgroundColor: UI.accent }}
                initial={{ width: 0 }}
                animate={{ width: `${c.digitalScore * 10}%` }}
                transition={{ duration: 0.6, delay: i * 0.07 + 0.2, ease: EASE }}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="font-sans" style={{ fontSize: '0.58rem', color: UI.textSecondary }}>{t('competitorStrength')}</p>
                <p className="font-sans" style={{ fontSize: '0.65rem', color: UI.text, marginTop: 2, lineHeight: 1.4 }}>{c.betterThan}</p>
              </div>
              <div>
                <p className="font-sans" style={{ fontSize: '0.58rem', color: UI.accent }}>{t('competitorOpportunity')}</p>
                <p className="font-sans" style={{ fontSize: '0.65rem', color: UI.text, marginTop: 2, lineHeight: 1.4 }}>{c.worseThan}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

interface StructureViewProps {
  project: ProjectAnalysis
  onBack: () => void
}

export function StructureView({ project, onBack }: StructureViewProps) {
  const [selectedTab, setSelectedTab] = useState<StructureTab>('sitemap')
  const { t } = useLanguage()
  const isMobile = useIsMobile()

  const TABS: { id: StructureTab; label: string }[] = [
    { id: 'sitemap', label: t('tabSitemap') },
    { id: 'objectives', label: t('tabObjectives') },
    { id: 'features', label: t('tabFeatures') },
    { id: 'advantage', label: t('tabAdvantage') },
    { id: 'competitors', label: t('tabCompetitors') },
  ]

  const tabContent = (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedTab}
        style={{ ...(isMobile ? {} : { height: '100%', overflow: 'auto' }) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {selectedTab === 'sitemap' && <SitemapContent project={project} />}
        {selectedTab === 'objectives' && <ObjectivesContent project={project} />}
        {selectedTab === 'features' && <FeaturesContent project={project} />}
        {selectedTab === 'advantage' && <AdvantageContent project={project} />}
        {selectedTab === 'competitors' && <CompetitorsContent project={project} />}
      </motion.div>
    </AnimatePresence>
  )

  // ── Mobile: horizontal tabs ──────────────────────────────────────────────────
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
                  padding: '8px 16px', borderRadius: 20, border: isActive ? 'none' : `1px solid ${UI.border}`,
                  cursor: 'pointer',
                  backgroundColor: isActive ? UI.accent : UI.bgBlock,
                  color: isActive ? '#FFFFFF' : UI.textSecondary,
                  fontSize: '0.7rem', fontFamily: 'var(--font-jakarta)', fontWeight: isActive ? 600 : 400,
                  whiteSpace: 'nowrap', flexShrink: 0,
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
        className="rounded-2xl overflow-hidden"
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
