'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Eye, TrendingUp, MessageCircle, ChevronDown, ChevronUp,
  ExternalLink, CheckCircle, AlertTriangle, Star, Shield, Trash2,
} from 'lucide-react'
import { prospects, type Prospect } from '@/lib/prospects-data'

// ─── Types ────────────────────────────────────────────────────────────────────

type Estado = 'no_llamado' | 'llamado' | 'interesado' | 'seguimiento' | 'no_interesado' | 'tachado'
type Filtro = 'todos' | 'pendientes' | 'interesados' | 'seguimiento'

interface ProspectState {
  estado: Estado
  notas: string
  fecha: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getStorageKey(orden: number) {
  return `panel-prospect-${orden}`
}

function loadState(orden: number): ProspectState {
  if (typeof window === 'undefined') return { estado: 'no_llamado', notas: '', fecha: '' }
  try {
    const raw = localStorage.getItem(getStorageKey(orden))
    if (raw) return JSON.parse(raw)
  } catch {}
  return { estado: 'no_llamado', notas: '', fecha: '' }
}

function saveState(orden: number, state: ProspectState) {
  try {
    localStorage.setItem(getStorageKey(orden), JSON.stringify(state))
  } catch {}
}

function mapsUrl(p: Prospect) {
  if (p.google_maps && p.google_maps.startsWith('http')) return p.google_maps
  return `https://www.google.com/maps/search/${encodeURIComponent(p.nombre + ' ' + p.ciudad + ' BCS')}`
}

function borderColor(estado: Estado) {
  switch (estado) {
    case 'llamado': return '#FFC107'
    case 'interesado': return '#4CAF50'
    case 'seguimiento': return '#2196F3'
    case 'no_interesado': return '#F44336'
    default: return '#E8E8E8'
  }
}

function webBadgeStyle(status: string): React.CSSProperties {
  const s = status.toUpperCase()
  if (s.includes('NO TIENE')) return { background: '#FFEBEE', color: '#C62828' }
  if (s.includes('SOLO REDES')) return { background: '#FFF3E0', color: '#E65100' }
  if (s.includes('MUY BÁSICA') || s.includes('DESACTUALIZADA') || s.includes('BASICA')) return { background: '#FFF8E1', color: '#F57F17' }
  return { background: '#E8F5E9', color: '#2E7D32' }
}

function fitBadge(fit: string): { text: string; bg: string; color: string } {
  if (fit === 'alto') return { text: '🟢 Alta', bg: '#E8F5E9', color: '#2E7D32' }
  if (fit === 'medio') return { text: '🟡 Media', bg: '#FFF8E1', color: '#F57F17' }
  return { text: '🔴 Baja', bg: '#FFEBEE', color: '#C62828' }
}

// ─── Sorting ──────────────────────────────────────────────────────────────────

function sortProspects(list: Prospect[], states: Map<number, ProspectState>) {
  const getEstado = (p: Prospect) => states.get(p.prioridad_manana_orden)?.estado ?? 'no_llamado'

  const withNota = list.filter(p => p.horario_nota && getEstado(p) !== 'tachado' && getEstado(p) !== 'no_interesado')
    .sort((a, b) => a.prioridad_manana_orden - b.prioridad_manana_orden)

  const noNota = list.filter(p => !p.horario_nota && getEstado(p) !== 'tachado' && getEstado(p) !== 'no_interesado')

  const fitOrder: Record<string, number> = { alto: 0, medio: 1, bajo: 2 }
  const mainSorted = noNota.sort((a, b) => {
    const fa = fitOrder[a.fit_llamada_manana] ?? 3
    const fb = fitOrder[b.fit_llamada_manana] ?? 3
    if (fa !== fb) return fa - fb
    if (a.horario_grupo !== b.horario_grupo) return a.horario_grupo - b.horario_grupo
    return a.prioridad_manana_orden - b.prioridad_manana_orden
  })

  const noInteresado = list.filter(p => getEstado(p) === 'no_interesado')
    .sort((a, b) => a.prioridad_manana_orden - b.prioridad_manana_orden)

  return [...withNota, ...mainSorted, ...noInteresado]
}

// ─── Prospect Card ────────────────────────────────────────────────────────────

function ProspectCard({
  prospect,
  pState,
  onStateChange,
}: {
  prospect: Prospect
  pState: ProspectState
  onStateChange: (orden: number, next: Partial<ProspectState>) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(true)
  const notesRef = useRef<HTMLTextAreaElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const { estado, notas } = pState
  const fit = fitBadge(prospect.fit_llamada_manana)

  const handleAction = useCallback((next: Estado) => {
    if (next === 'tachado') {
      setVisible(false)
      setTimeout(() => {
        onStateChange(prospect.prioridad_manana_orden, { estado: 'tachado', fecha: new Date().toISOString() })
      }, 300)
      return
    }
    const newEstado: Estado = estado === next ? 'no_llamado' : next
    onStateChange(prospect.prioridad_manana_orden, { estado: newEstado, fecha: new Date().toISOString() })
  }, [estado, prospect.prioridad_manana_orden, onStateChange])

  const handleNotes = useCallback((val: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      onStateChange(prospect.prioridad_manana_orden, { notas: val })
    }, 500)
  }, [prospect.prioridad_manana_orden, onStateChange])

  if (!visible || estado === 'tachado') return null

  const isNoInteresado = estado === 'no_interesado'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: isNoInteresado ? 0.4 : 1, y: 0 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
      transition={{ duration: 0.2 }}
      style={{
        background: 'white',
        border: '1px solid #E8E8E8',
        borderLeft: `3px solid ${borderColor(estado)}`,
        borderRadius: 12,
        marginBottom: 8,
        overflow: 'hidden',
      }}
    >
      {/* Horario banner */}
      {prospect.horario_nota && (
        <div style={{
          background: '#FFF8E1',
          padding: '6px 16px',
          fontSize: '0.7rem',
          fontWeight: 500,
          color: '#F57F17',
          fontFamily: 'var(--font-jakarta)',
        }}>
          {prospect.horario_nota}
        </div>
      )}

      <div style={{ padding: '14px 16px' }}>
        {/* Row 1 — Name + fit */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <span style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 600, fontSize: '1rem', color: '#2D2D2D' }}>
            {prospect.nombre}
          </span>
          <span style={{
            background: fit.bg, color: fit.color,
            padding: '2px 8px', borderRadius: 10,
            fontSize: '0.6rem', fontFamily: 'var(--font-jakarta)', whiteSpace: 'nowrap',
          }}>
            {fit.text}
          </span>
        </div>

        {/* Row 2 — Info */}
        <div style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.75rem', color: '#8C8C8C', marginBottom: 6 }}>
          {prospect.nicho} · {prospect.ciudad} · ⭐{prospect.rating} · {prospect.resenas} reseñas
        </div>

        {/* Row 3 — Phone + web badge + maps */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
          <a
            href={`tel:${prospect.telefono}`}
            style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 500, fontSize: '0.8rem', color: '#2D2D2D', textDecoration: 'none' }}
          >
            📞 {prospect.telefono}
          </a>
          <span style={{
            ...webBadgeStyle(prospect.web_status),
            fontSize: '0.6rem', padding: '2px 8px', borderRadius: 8,
            fontFamily: 'var(--font-jakarta)',
          }}>
            {prospect.web_status}
          </span>
          <a href={mapsUrl(prospect)} target="_blank" rel="noopener noreferrer" style={{ color: '#8C8C8C', display: 'flex' }}>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Row 4 — Contact */}
        <div style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.7rem', color: '#8C8C8C', fontStyle: 'italic', marginBottom: 8 }}>
          👤 {prospect.contacto_probable}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #F0F0F0', margin: '8px 0' }} />

        {/* Row 5 — Observacion */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 6 }}>
          <Eye size={14} color="#2D2D2D" style={{ flexShrink: 0, marginTop: 2 }} />
          <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.8rem', color: '#2D2D2D', lineHeight: 1.4 }}>
            {prospect.observacion_clave}
          </span>
        </div>

        {/* Row 6 — Beneficio */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 6 }}>
          <TrendingUp size={14} color="#4CAF50" style={{ flexShrink: 0, marginTop: 2 }} />
          <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.8rem', color: '#2D2D2D', fontWeight: 500, lineHeight: 1.4 }}>
            {prospect.beneficio_principal}
          </span>
        </div>

        {/* Row 7 — CTA */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 8 }}>
          <MessageCircle size={14} color="#2196F3" style={{ flexShrink: 0, marginTop: 2 }} />
          <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.75rem', color: '#666', lineHeight: 1.4 }}>
            {prospect.cta_sugerido}
          </span>
        </div>

        {/* Collapsible */}
        <button
          onClick={() => setExpanded(e => !e)}
          style={{
            display: 'flex', alignItems: 'center', gap: 4,
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '2px 0', marginBottom: 4,
          }}
        >
          {expanded ? <ChevronUp size={14} color="#8C8C8C" /> : <ChevronDown size={14} color="#8C8C8C" />}
          <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.7rem', color: '#8C8C8C' }}>Más detalles</span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {prospect.fortalezas.length > 0 && (
                  <div>
                    <div style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.65rem', color: '#8C8C8C', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Fortalezas</div>
                    {prospect.fortalezas.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, marginBottom: 2 }}>
                        <CheckCircle size={13} color="#4CAF50" style={{ flexShrink: 0, marginTop: 1 }} />
                        <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.72rem', color: '#444' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                )}
                {prospect.problemas.length > 0 && (
                  <div>
                    <div style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.65rem', color: '#8C8C8C', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Problemas</div>
                    {prospect.problemas.map((p, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, marginBottom: 2 }}>
                        <AlertTriangle size={13} color="#FF9800" style={{ flexShrink: 0, marginTop: 1 }} />
                        <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.72rem', color: '#444' }}>{p}</span>
                      </div>
                    ))}
                  </div>
                )}
                {prospect.beneficios.length > 0 && (
                  <div>
                    <div style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.65rem', color: '#8C8C8C', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Beneficios</div>
                    {prospect.beneficios.map((b, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, marginBottom: 2 }}>
                        <Star size={13} color="#FFC107" style={{ flexShrink: 0, marginTop: 1 }} />
                        <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.72rem', color: '#444' }}>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
                {prospect.objecion_probable && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
                    <Shield size={13} color="#666" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.72rem', color: '#666', fontStyle: 'italic' }}>
                      <strong>Objeción:</strong> {prospect.objecion_probable}
                    </span>
                  </div>
                )}
                {prospect.respuesta_breve && (
                  <div style={{ paddingLeft: 18 }}>
                    <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.7rem', color: '#666' }}>
                      <strong>Respuesta:</strong> {prospect.respuesta_breve}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <hr style={{ border: 'none', borderTop: '1px solid #F0F0F0', margin: '10px 0 8px' }} />

        {/* Notes */}
        <textarea
          ref={notesRef}
          defaultValue={notas}
          placeholder="Notas rápidas..."
          onChange={e => handleNotes(e.target.value)}
          rows={1}
          style={{
            width: '100%', border: '1px solid #E8E8E8', borderRadius: 8,
            padding: '7px 10px', fontSize: '0.75rem', fontFamily: 'var(--font-jakarta)',
            resize: 'vertical', outline: 'none', color: '#2D2D2D',
            boxSizing: 'border-box', marginBottom: 8,
          }}
        />

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {(
            [
              { label: '✅ Interesado', est: 'interesado' as Estado, bg: '#E8F5E9', color: '#2E7D32', hover: '#C8E6C9' },
              { label: '📞 Seguimiento', est: 'seguimiento' as Estado, bg: '#E3F2FD', color: '#1565C0', hover: '#BBDEFB' },
              { label: '❌ No interesó', est: 'no_interesado' as Estado, bg: '#FFEBEE', color: '#C62828', hover: '#FFCDD2' },
            ] as const
          ).map(btn => (
            <button
              key={btn.est}
              onClick={() => handleAction(btn.est)}
              style={{
                background: estado === btn.est ? btn.hover : btn.bg,
                color: btn.color,
                border: 'none', borderRadius: 8, padding: '6px 12px',
                fontSize: '0.65rem', fontWeight: 500, cursor: 'pointer',
                fontFamily: 'var(--font-jakarta)', transition: 'background 150ms',
              }}
              onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = btn.hover }}
              onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = estado === btn.est ? btn.hover : btn.bg }}
            >
              {btn.label}
            </button>
          ))}
          <button
            onClick={() => handleAction('tachado')}
            style={{
              background: '#F5F5F5', color: '#999',
              border: 'none', borderRadius: 8, padding: '6px 10px',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              transition: 'background 150ms',
            }}
            onMouseEnter={e => { (e.target as HTMLElement).closest('button')!.style.background = '#E0E0E0' }}
            onMouseLeave={e => { (e.target as HTMLElement).closest('button')!.style.background = '#F5F5F5' }}
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Separator ────────────────────────────────────────────────────────────────

function GroupSeparator({ label }: { label: string }) {
  return (
    <div style={{
      fontFamily: 'var(--font-jakarta)', fontWeight: 600, fontSize: '0.7rem',
      color: '#8C8C8C', padding: '12px 0 4px',
    }}>
      {label}
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function PanelPage() {
  const [states, setStates] = useState<Map<number, ProspectState>>(new Map())
  const [filtro, setFiltro] = useState<Filtro>('todos')
  const [showTachados, setShowTachados] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Load all states from localStorage on mount
  useEffect(() => {
    const map = new Map<number, ProspectState>()
    prospects.forEach(p => {
      map.set(p.prioridad_manana_orden, loadState(p.prioridad_manana_orden))
    })
    setStates(map)
    setMounted(true)
  }, [])

  const handleStateChange = useCallback((orden: number, next: Partial<ProspectState>) => {
    setStates(prev => {
      const current = prev.get(orden) ?? { estado: 'no_llamado', notas: '', fecha: '' }
      const updated = { ...current, ...next }
      saveState(orden, updated)
      const newMap = new Map(prev)
      newMap.set(orden, updated)
      return newMap
    })
  }, [])

  const getEstado = (p: Prospect): Estado => states.get(p.prioridad_manana_orden)?.estado ?? 'no_llamado'

  // Stats
  const altoCount = prospects.filter(p => p.fit_llamada_manana === 'alto' && getEstado(p) !== 'tachado').length
  const medioCount = prospects.filter(p => p.fit_llamada_manana === 'medio' && getEstado(p) !== 'tachado').length
  const bajoCount = prospects.filter(p => p.fit_llamada_manana === 'bajo' && getEstado(p) !== 'tachado').length
  const interesadosCount = prospects.filter(p => getEstado(p) === 'interesado').length
  const llamadosCount = prospects.filter(p => {
    const e = getEstado(p)
    return e !== 'no_llamado' && e !== 'tachado'
  }).length
  const tachadosCount = prospects.filter(p => getEstado(p) === 'tachado').length

  // Filtered list
  const filteredProspects = prospects.filter(p => {
    const e = getEstado(p)
    if (e === 'tachado') return false
    if (filtro === 'pendientes') return e === 'no_llamado'
    if (filtro === 'interesados') return e === 'interesado'
    if (filtro === 'seguimiento') return e === 'seguimiento'
    return true
  })

  const sorted = sortProspects(filteredProspects, states)
  const tachadosList = prospects.filter(p => getEstado(p) === 'tachado')

  // Build render list with separators
  type RenderItem =
    | { type: 'separator'; key: string; label: string }
    | { type: 'card'; key: string; prospect: Prospect }

  const renderItems: RenderItem[] = []
  let lastGroupKey = ''

  const withNota = sorted.filter(p => p.horario_nota)
  const withoutNota = sorted.filter(p => !p.horario_nota && getEstado(p) !== 'no_interesado')
  const noInteresadoList = sorted.filter(p => getEstado(p) === 'no_interesado')

  if (withNota.length > 0) {
    renderItems.push({ type: 'separator', key: 'sep-pendientes', label: '⚠️ PENDIENTES' })
    withNota.forEach(p => renderItems.push({ type: 'card', key: `card-${p.prioridad_manana_orden}`, prospect: p }))
  }

  withoutNota.forEach(p => {
    const groupKey = `${p.fit_llamada_manana}-${p.horario_grupo}`
    if (groupKey !== lastGroupKey) {
      renderItems.push({ type: 'separator', key: `sep-${groupKey}`, label: p.horario_label })
      lastGroupKey = groupKey
    }
    renderItems.push({ type: 'card', key: `card-${p.prioridad_manana_orden}`, prospect: p })
  })

  if (noInteresadoList.length > 0) {
    renderItems.push({ type: 'separator', key: 'sep-no-interes', label: '❌ NO INTERESADOS' })
    noInteresadoList.forEach(p => renderItems.push({ type: 'card', key: `card-${p.prioridad_manana_orden}`, prospect: p }))
  }

  const filters: { id: Filtro; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'pendientes', label: 'Pendientes' },
    { id: 'interesados', label: 'Interesados' },
    { id: 'seguimiento', label: 'Seguimiento' },
  ]

  if (!mounted) return null

  return (
    <div style={{ background: '#FAFAFA', minHeight: '100vh', fontFamily: 'var(--font-jakarta)' }}>
      {/* Sticky header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'white', borderBottom: '1px solid #E5E5E5',
      }}>
        <div style={{
          maxWidth: 700, margin: '0 auto', padding: '10px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 8,
        }}>
          <span style={{ fontWeight: 600, fontSize: '0.85rem', color: '#2D2D2D' }}>
            MY.SITE — Llamadas
          </span>
          <span style={{ fontWeight: 400, fontSize: '0.75rem', color: '#8C8C8C' }}>
            {llamadosCount}/70 llamados
          </span>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFiltro(f.id)}
                style={{
                  background: filtro === f.id ? '#2D2D2D' : '#F0F0F0',
                  color: filtro === f.id ? 'white' : '#8C8C8C',
                  border: 'none', borderRadius: 20, padding: '4px 10px',
                  fontSize: '0.65rem', cursor: 'pointer', fontFamily: 'var(--font-jakarta)',
                  fontWeight: 500, transition: 'background 150ms',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          maxWidth: 700, margin: '0 auto', padding: '6px 20px 8px',
          borderTop: '1px solid #F5F5F5',
          fontSize: '0.7rem', color: '#8C8C8C',
          display: 'flex', gap: 16, flexWrap: 'wrap',
        }}>
          <span>🟢 Alto: {altoCount}</span>
          <span>🟡 Medio: {medioCount}</span>
          <span>🔴 Bajo: {bajoCount}</span>
          <span>✅ Interesados: {interesadosCount}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '16px 20px' }}>
        <AnimatePresence>
          {renderItems.map(item => {
            if (item.type === 'separator') {
              return <GroupSeparator key={item.key} label={item.label} />
            }
            const ps = states.get(item.prospect.prioridad_manana_orden) ?? { estado: 'no_llamado', notas: '', fecha: '' }
            return (
              <ProspectCard
                key={item.key}
                prospect={item.prospect}
                pState={ps}
                onStateChange={handleStateChange}
              />
            )
          })}
        </AnimatePresence>

        {/* Tachados toggle */}
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <button
            onClick={() => setShowTachados(s => !s)}
            style={{
              background: '#F0F0F0', color: '#8C8C8C',
              border: 'none', borderRadius: 8, padding: '8px 16px',
              fontSize: '0.65rem', cursor: 'pointer', fontFamily: 'var(--font-jakarta)',
            }}
          >
            {showTachados ? 'Ocultar tachados' : `Ver tachados (${tachadosCount})`}
          </button>
        </div>

        <AnimatePresence>
          {showTachados && tachadosList.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ marginTop: 16 }}
            >
              <div style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.7rem', color: '#8C8C8C', padding: '8px 0 4px', fontWeight: 600 }}>
                🗑️ TACHADOS
              </div>
              {tachadosList.map(p => (
                <div
                  key={p.prioridad_manana_orden}
                  style={{
                    background: 'white', border: '1px solid #E8E8E8', borderRadius: 10,
                    padding: '10px 14px', marginBottom: 6, opacity: 0.5,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-jakarta)', fontSize: '0.8rem', color: '#2D2D2D' }}>
                    {p.nombre}
                  </span>
                  <button
                    onClick={() => handleStateChange(p.prioridad_manana_orden, { estado: 'no_llamado', fecha: '' })}
                    style={{
                      background: '#F0F0F0', color: '#666',
                      border: 'none', borderRadius: 6, padding: '4px 10px',
                      fontSize: '0.62rem', cursor: 'pointer', fontFamily: 'var(--font-jakarta)',
                    }}
                  >
                    Restaurar
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ height: 40 }} />
      </div>
    </div>
  )
}
