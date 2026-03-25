'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ArrowLeft, AlertTriangle, Globe } from 'lucide-react'
import type { ProjectAnalysis } from '@/lib/project-data'
import { useLanguage } from '@/lib/language-context'

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

const blockIn = (i: number) => ({
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: i * 0.06, ease: EASE } },
})

interface DiagnosisViewProps {
  project: ProjectAnalysis
  onBack: () => void
}

export function DiagnosisView({ project, onBack }: DiagnosisViewProps) {
  const { diagnosis, colors } = project
  const { t } = useLanguage()
  const isMobile = useIsMobile()

  const blockStyle = {
    backgroundColor: colors.backgroundBlock,
    border: `1px solid ${colors.border}`,
    borderRadius: 16,
    padding: isMobile ? 14 : 20,
  }

  // ── Mobile layout: single column stack ──────────────────────────────────────
  if (isMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingBottom: 80 }}>

        {/* Back button — floating fixed */}
        <button
          onClick={onBack}
          style={{
            position: 'fixed', top: 16, left: 16, zIndex: 60,
            display: 'flex', alignItems: 'center', gap: 6,
            backgroundColor: colors.backgroundBlock,
            border: `1px solid ${colors.border}`,
            borderRadius: 20, padding: '8px 14px',
            cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          }}
        >
          <ArrowLeft size={14} color={colors.textSecondary} />
          <span className="font-sans font-medium" style={{ fontSize: '0.75rem', color: colors.textSecondary }}>
            {t('back')}
          </span>
        </button>

        {/* Spacer for fixed button */}
        <div style={{ height: 52 }} />

        {/* Info General */}
        <motion.div style={blockStyle} {...blockIn(0)}>
          <p className="font-sans font-semibold" style={{ fontSize: '1rem', color: colors.text }}>{project.clientName}</p>
          <p className="font-sans mt-0.5" style={{ fontSize: '0.7rem', color: colors.textSecondary }}>{diagnosis.location}</p>
          <div className="mt-3 flex flex-col gap-3">
            {[
              { icon: MapPin, label: t('diagAddress'), value: diagnosis.address },
              { icon: Phone, label: t('diagPhone'), value: diagnosis.phone },
              { icon: Clock, label: t('diagHours'), value: diagnosis.hours },
              { icon: Globe, label: t('diagGoogleMaps'), value: diagnosis.googleMaps },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-2">
                <Icon size={13} color={colors.accent} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans font-medium" style={{ fontSize: '0.68rem', color: colors.text }}>{label}</p>
                  <p className="font-sans mt-0.5" style={{ fontSize: '0.65rem', color: colors.textSecondary }}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Rating + Instagram in a row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {/* Rating */}
          <motion.div style={blockStyle} {...blockIn(1)}>
            <p className="font-sans font-medium uppercase tracking-wide" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>
              {t('diagRating')}
            </p>
            <p className="font-serif mt-2" style={{ fontSize: '2.5rem', fontWeight: 500, color: colors.accent, lineHeight: 1 }}>
              {diagnosis.rating}
            </p>
            <div className="mt-1 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: colors.accent, fontSize: '0.65rem' }}>★</span>
              ))}
            </div>
            <p className="font-sans mt-1" style={{ fontSize: '0.65rem', color: colors.textSecondary }}>
              {diagnosis.reviewCount} {t('diagReviews')}
            </p>
            {diagnosis.clientKeywords.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {diagnosis.clientKeywords.map((kw) => (
                  <span key={kw} className="rounded-full px-2 py-0.5 font-sans"
                    style={{ fontSize: '0.5rem', backgroundColor: `${colors.accent}18`, color: colors.accent }}>
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Instagram */}
          <motion.div style={blockStyle} {...blockIn(2)}>
            <p className="font-sans font-medium uppercase tracking-wide" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>
              Instagram
            </p>
            <p className="font-sans font-semibold mt-2" style={{ fontSize: '0.85rem', color: colors.accent }}>
              {diagnosis.instagram}
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <div>
                <p className="font-sans" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>{t('diagFollowers')}</p>
                <p className="font-sans font-medium" style={{ fontSize: '0.85rem', color: colors.text }}>{diagnosis.instagramFollowers}</p>
              </div>
              <div>
                <p className="font-sans" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>{t('diagQuality')}</p>
                <p className="font-sans font-medium" style={{ fontSize: '0.85rem', color: colors.accent }}>{diagnosis.instagramQuality}</p>
              </div>
              <div>
                <p className="font-sans" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>{t('diagFacebook')}</p>
                <p className="font-sans" style={{ fontSize: '0.7rem', color: colors.textSecondary }}>{diagnosis.facebook}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lo que dicen */}
        <motion.div style={blockStyle} {...blockIn(3)}>
          <p className="font-sans font-medium uppercase tracking-wide mb-3" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>
            {t('diagCustomerSay')}
          </p>
          <div className="flex flex-col gap-2">
            {diagnosis.positiveQuotes.map((quote, i) => (
              <p key={i} className="font-serif italic" style={{ fontSize: '0.78rem', lineHeight: 1.5, color: colors.text }}>
                "{quote}"
              </p>
            ))}
          </div>
          {diagnosis.negativePoints.length > 0 && (
            <div className="mt-4 flex flex-col gap-1.5">
              {diagnosis.negativePoints.map((point, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <AlertTriangle size={11} color={colors.border} className="mt-0.5 shrink-0" />
                  <p className="font-sans" style={{ fontSize: '0.63rem', color: colors.textSecondary }}>{point}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Presencia Web */}
        <motion.div style={blockStyle} {...blockIn(4)}>
          <p className="font-sans font-medium uppercase tracking-wide mb-3" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>
            {t('diagWebPresence')}
          </p>
          {diagnosis.websiteNotes.length === 0 ? (
            <div>
              <p className="font-sans font-semibold" style={{ fontSize: '0.9rem', color: colors.accent }}>
                {t('diagNoWebsite')}
              </p>
              <p className="font-sans mt-2 leading-relaxed" style={{ fontSize: '0.7rem', color: colors.textSecondary }}>
                {t('diagOpportunity')}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              {diagnosis.websiteNotes.map((note, i) => (
                <p key={i} className="font-sans" style={{ fontSize: '0.68rem', color: colors.text }}>· {note}</p>
              ))}
            </div>
          )}
        </motion.div>

      </div>
    )
  }

  // ── Desktop layout: 3×2 bento grid ──────────────────────────────────────────
  return (
    <div
      className="grid h-full w-full"
      style={{ gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 8 }}
    >
      {/* ROW 1 COL 1 — Info General */}
      <motion.div style={blockStyle} {...blockIn(0)}
        whileHover={{ scale: 1.008, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <p className="font-sans font-semibold" style={{ fontSize: '1.1rem', color: colors.text }}>
          {project.clientName}
        </p>
        <p className="font-sans mt-0.5" style={{ fontSize: '0.7rem', color: colors.textSecondary }}>
          {diagnosis.location}
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {[
            { icon: MapPin, label: t('diagAddress'), value: diagnosis.address },
            { icon: Phone, label: t('diagPhone'), value: diagnosis.phone },
            { icon: Clock, label: t('diagHours'), value: diagnosis.hours },
            { icon: Globe, label: t('diagGoogleMaps'), value: diagnosis.googleMaps },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-2">
              <Icon size={13} color={colors.accent} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-sans font-medium" style={{ fontSize: '0.68rem', color: colors.text }}>{label}</p>
                <p className="font-sans mt-0.5" style={{ fontSize: '0.65rem', color: colors.textSecondary }}>{value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ROW 1 COL 2 — Rating */}
      <motion.div style={blockStyle} {...blockIn(1)}
        whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <p className="font-sans font-medium uppercase tracking-wide" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>
          {t('diagRating')}
        </p>
        <p className="font-serif mt-2" style={{ fontSize: '3rem', fontWeight: 500, color: colors.accent, lineHeight: 1 }}>
          {diagnosis.rating}
        </p>
        <div className="mt-1 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ color: colors.accent, fontSize: '0.75rem' }}>★</span>
          ))}
        </div>
        <p className="font-sans mt-1" style={{ fontSize: '0.65rem', color: colors.textSecondary }}>
          {diagnosis.reviewCount} {t('diagReviews')}
        </p>
        {diagnosis.clientKeywords.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1">
            {diagnosis.clientKeywords.map((kw) => (
              <span key={kw} className="rounded-full px-3 py-0.5 font-sans"
                style={{ fontSize: '0.55rem', backgroundColor: `${colors.accent}18`, color: colors.accent }}>
                {kw}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* ROW 1 COL 3 — Instagram */}
      <motion.div style={blockStyle} {...blockIn(2)}
        whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <p className="font-sans font-medium uppercase tracking-wide" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>
          Instagram
        </p>
        <p className="font-sans font-semibold mt-2" style={{ fontSize: '0.95rem', color: colors.accent }}>
          {diagnosis.instagram}
        </p>
        <div className="mt-4 flex flex-col gap-2.5">
          <div>
            <p className="font-sans" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>{t('diagFollowers')}</p>
            <p className="font-sans font-medium" style={{ fontSize: '0.85rem', color: colors.text }}>{diagnosis.instagramFollowers}</p>
          </div>
          <div>
            <p className="font-sans" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>{t('diagQuality')}</p>
            <p className="font-sans font-medium" style={{ fontSize: '0.85rem', color: colors.accent }}>{diagnosis.instagramQuality}</p>
          </div>
          <div>
            <p className="font-sans" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>{t('diagFacebook')}</p>
            <p className="font-sans" style={{ fontSize: '0.7rem', color: colors.textSecondary }}>{diagnosis.facebook}</p>
          </div>
        </div>
      </motion.div>

      {/* ROW 2 COL 1 — Lo que dicen */}
      <motion.div style={blockStyle} {...blockIn(3)}
        whileHover={{ scale: 1.008, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <p className="font-sans font-medium uppercase tracking-wide mb-3" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>
          {t('diagCustomerSay')}
        </p>
        <div className="flex flex-col gap-2">
          {diagnosis.positiveQuotes.map((quote, i) => (
            <p key={i} className="font-serif italic" style={{ fontSize: '0.78rem', lineHeight: 1.5, color: colors.text }}>
              "{quote}"
            </p>
          ))}
        </div>
        {diagnosis.negativePoints.length > 0 && (
          <div className="mt-4 flex flex-col gap-1.5">
            {diagnosis.negativePoints.map((point, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <AlertTriangle size={11} color={colors.border} className="mt-0.5 shrink-0" />
                <p className="font-sans" style={{ fontSize: '0.63rem', color: colors.textSecondary }}>{point}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* ROW 2 COL 2 — Presencia Web */}
      <motion.div style={blockStyle} {...blockIn(4)}
        whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <p className="font-sans font-medium uppercase tracking-wide mb-3" style={{ fontSize: '0.6rem', color: colors.textSecondary }}>
          {t('diagWebPresence')}
        </p>
        {diagnosis.websiteNotes.length === 0 ? (
          <div>
            <p className="font-sans font-semibold" style={{ fontSize: '0.9rem', color: colors.accent }}>
              {t('diagNoWebsite')}
            </p>
            <p className="font-sans mt-2 leading-relaxed" style={{ fontSize: '0.7rem', color: colors.textSecondary }}>
              {t('diagOpportunity')}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-1.5">
            {diagnosis.websiteNotes.map((note, i) => (
              <p key={i} className="font-sans" style={{ fontSize: '0.68rem', color: colors.text }}>· {note}</p>
            ))}
          </div>
        )}
      </motion.div>

      {/* ROW 2 COL 3 — Volver */}
      <motion.div
        className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl"
        style={{ backgroundColor: colors.backgroundBlock, border: `1px solid ${colors.border}` }}
        {...blockIn(5)}
        onClick={onBack}
        whileHover={{ scale: 1.015, boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <ArrowLeft size={16} color={colors.textSecondary} />
        <span className="font-sans font-medium" style={{ fontSize: '0.85rem', color: colors.textSecondary }}>
          {t('back')}
        </span>
      </motion.div>
    </div>
  )
}
