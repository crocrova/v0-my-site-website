'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { DottedSurface } from '@/components/ui/dotted-surface'
import { MovingBorder, MovingBorderButton } from '@/components/ui/moving-border'

// ─── Palette ──────────────────────────────────────────────────────────────────
const C = {
  bg: '#0D0D0D',
  bgAlt: '#1A1A1A',
  accent: '#C8F000',
  text: '#F0F0F0',
  muted: '#555555',
  border: 'rgba(200,240,0,0.12)',
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const METRICS = [
  { value: 650, unit: 'ha', label: 'ÁREA MAPEADA', suffix: '+' },
  { value: 2.1, unit: 'cm', label: 'PRECISIÓN GSD', prefix: '±' },
  { value: 72, unit: 'h', label: 'ENTREGA' },
]

const SERVICES = [
  {
    n: '01',
    title: 'ORTOMOSAICO + DTM/DSM',
    desc: 'Modelos digitales de terreno con precisión centimétrica. Ortomosaicos georreferenciados, curvas de nivel y análisis de pendientes.',
    tags: ['GEOTIFF', 'LAS/LAZ', 'DWG'],
  },
  {
    n: '02',
    title: 'VOLUMETRÍA',
    desc: 'Control de movimiento de tierras para obra activa. Cálculo de volúmenes de corte y relleno, comparativas temporales.',
    tags: ['M³', 'COMPARATIVA', 'CIVIL 3D'],
  },
  {
    n: '03',
    title: 'AUDITORÍA DE ACTIVOS',
    desc: 'Inventario aéreo de maquinaria y materiales en obra activa. Entregable en 24 horas, documentación geolocalizada.',
    tags: ['24H', 'GEOLOCALIZADO', 'PDF'],
  },
]

const PROJECTS = [
  {
    area: '611',
    unit: 'ha',
    tag: 'ORTOMOSAICO',
    title: 'EXPANSIÓN URBANA SJC',
    client: 'Inmobiliaria · San José del Cabo',
    desc: 'Identificación de invasiones y curvas de nivel para planeación de expansión urbana.',
    img: '/images/topo/project-1.jpg',
  },
  {
    area: '20',
    unit: 'ha',
    tag: 'DSM',
    title: 'ZONA IMSS LOS CABOS',
    client: 'Desarrollador · San José del Cabo',
    desc: 'Lotificación y análisis de acceso para nuevo hospital IMSS. Modelo de superficie.',
    img: '/images/topo/project-2.jpg',
  },
  {
    area: '15',
    unit: 'ha',
    tag: 'MODELO 3D',
    title: 'CANTARES MACROLOTES',
    client: 'Desarrollador · San José del Cabo',
    desc: 'Lotificación de macrolotes para desarrollos habitacionales con análisis topográfico completo.',
    img: '/images/topo/project-3.jpg',
  },
]

// ─── CountUp Hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1400, active = false, isDecimal = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(isDecimal ? Math.round(target * ease * 10) / 10 : Math.round(target * ease))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration, isDecimal])
  return count
}

// ─── MetricCard ───────────────────────────────────────────────────────────────
function MetricCard({
  value,
  unit,
  label,
  prefix,
  suffix,
  delay,
  isCompact,
}: {
  value: number
  unit: string
  label: string
  prefix?: string
  suffix?: string
  delay: number
  isCompact: boolean
}) {
  const [active, setActive] = useState(false)
  const isDecimal = !Number.isInteger(value)
  const count = useCountUp(value, 1400, active, isDecimal)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onViewportEnter={() => setActive(true)}
      style={{
        background: 'rgba(26,26,26,0.9)',
        border: `1px solid ${C.border}`,
        padding: isCompact ? '16px 14px' : '20px 18px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: 6,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-space-mono), monospace',
          fontSize: 9,
          color: C.muted,
          letterSpacing: '0.12em',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-space-mono), monospace',
          fontSize: isCompact ? 28 : 36,
          color: C.accent,
          lineHeight: 1,
          display: 'flex',
          alignItems: 'baseline',
          gap: 4,
        }}
      >
        <span>
          {prefix}
          {isDecimal ? count.toFixed(1) : count}
          {suffix}
        </span>
        <span style={{ fontSize: isCompact ? 14 : 16 }}>{unit}</span>
      </div>
    </motion.div>
  )
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────
function ProjectCard({
  p,
  i,
  isCompact,
}: {
  p: (typeof PROJECTS)[number]
  i: number
  isCompact: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.bgAlt,
        border: `1px solid ${hovered ? C.accent : '#222222'}`,
        borderLeft: `3px solid ${hovered ? C.accent : '#222222'}`,
        borderRadius: 6,
        overflow: 'hidden',
        flex: isCompact ? 'none' : 1,
        minWidth: 0,
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.4)' : 'none',
        transition: 'border-color 200ms, border-left-color 200ms, box-shadow 200ms',
      }}
    >
      {/* Image */}
      <div style={{ height: 160, position: 'relative', overflow: 'hidden' }}>
        <img
          src={p.img}
          alt={p.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        {/* Badge */}
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            background: C.accent,
            color: C.bg,
            fontFamily: 'var(--font-space-mono), monospace',
            fontSize: '0.45rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            padding: '3px 8px',
            borderRadius: 3,
          }}
        >
          {p.tag}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '14px 16px' }}>
        <div
          style={{
            fontFamily: 'var(--font-space-mono), monospace',
            fontSize: '0.6rem',
            fontWeight: 300,
            color: C.muted,
            marginBottom: 4,
          }}
        >
          {p.client}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-space-mono), monospace',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: C.text,
            marginBottom: 6,
          }}
        >
          {p.title}
        </div>
        <div
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '0.55rem',
            fontWeight: 300,
            color: C.muted,
            lineHeight: 1.5,
            marginBottom: 10,
          }}
        >
          {p.desc}
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
          <span
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '1.1rem',
              fontWeight: 400,
              color: hovered ? '#D4FF1A' : C.accent,
              transition: 'color 200ms',
            }}
          >
            {p.area}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '0.6rem',
              color: C.muted,
            }}
          >
            {p.unit}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ─── ServiceCard ──────────────────────────────────────────────────────────────
function ServiceCard({ s, i }: { s: (typeof SERVICES)[number]; i: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      key={s.n}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 6,
        padding: 1,
      }}
    >
      {/* Moving border glow */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: 6 }}>
        <MovingBorder duration={4000} rx="30%" ry="30%">
          <div style={{ width: 80, height: 80, background: 'radial-gradient(#C8F000 40%, transparent 60%)', opacity: 0.8 }} />
        </MovingBorder>
      </div>
      {/* Card content */}
      <div
        style={{
          position: 'relative',
          background: 'rgba(26,26,26,0.95)',
          borderRadius: 5,
          padding: '22px 18px',
          display: 'flex',
          flexDirection: 'column' as const,
          gap: 10,
          height: '100%',
          boxSizing: 'border-box' as const,
        }}
    >
      <div
        style={{
          fontFamily: 'var(--font-space-mono), monospace',
          fontSize: 9,
          color: C.accent,
          letterSpacing: '0.14em',
          background: hovered ? 'rgba(200,240,0,0.1)' : 'transparent',
          padding: hovered ? '2px 6px' : '2px 0',
          borderRadius: 2,
          alignSelf: 'flex-start',
          transition: 'background 200ms, padding 200ms',
        }}
      >
        {s.n}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-space-mono), monospace',
          fontSize: 13,
          fontWeight: 700,
          color: C.text,
          lineHeight: 1.3,
          letterSpacing: '0.04em',
        }}
      >
        {s.title}
      </div>
      <div
        style={{
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: '0.7rem',
          fontWeight: 300,
          color: C.muted,
          lineHeight: 1.65,
        }}
      >
        {s.desc}
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, marginTop: 4 }}>
        {s.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: 9,
              color: C.muted,
              border: `1px solid ${C.border}`,
              padding: '3px 8px',
              letterSpacing: '0.1em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      </div>
    </motion.div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function TopoSite() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [isCompact, setIsCompact] = useState(false)

  // ── isCompact ResizeObserver ──
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setIsCompact(entry.contentRect.width < 500)
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={rootRef}
      style={{
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        background: C.bg,
        position: 'relative',
        scrollbarWidth: 'none',
      }}
    >
      {/* Three.js animated dot background */}
      <DottedSurface />

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          height: 40,
          background: 'rgba(13,13,13,0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 20,
          paddingRight: 20,
          flexShrink: 0,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        {/* Logo */}
        <img
          src="/images/topo/logo.png"
          alt="TOPO"
          style={{
            height: 24,
            width: 'auto',
          }}
        />
        {/* Nav links + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {['Servicios', 'Proyectos', 'Contacto'].map((link) => (
            <span
              key={link}
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: '0.6rem',
                fontWeight: 400,
                color: '#999999',
                cursor: 'pointer',
                transition: 'color 200ms',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = C.accent)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#999999')}
            >
              {link}
            </span>
          ))}
          <MovingBorderButton
            borderRadius="4px"
            duration={3000}
            containerClassName="cursor-pointer"
            className="px-3 py-1 text-[0.55rem] font-medium tracking-wide bg-[#0D0D0D] border-0"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Cotizar
          </MovingBorderButton>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 1,
          height: isCompact ? 'auto' : '100%',
          display: 'flex',
          flexDirection: isCompact ? 'column' : 'row',
          minHeight: isCompact ? 'none' : '100vh',
        }}
      >
        {/* Left image side */}
        <div
          style={{
            flex: isCompact ? 'none' : '0 0 55%',
            height: isCompact ? 260 : '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/topo/hero.jpg"
            alt="TOPO Hero"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.45)',
            }}
          />
          {/* Corner label */}
          <div
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: 9,
              color: C.accent,
              letterSpacing: '0.12em',
            }}
          >
            FOTOGRAMETRÍA UAV · LOS CABOS
          </div>
          {/* Corner coords */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: 9,
              color: C.muted,
              letterSpacing: '0.1em',
            }}
          >
            {"23°03'N 109°41'W"}
          </div>
        </div>

        {/* Right info side */}
        <div
          style={{
            flex: 1,
            padding: isCompact ? '32px 20px' : '40px 36px',
            display: 'flex',
            flexDirection: 'column' as const,
            justifyContent: 'center',
            background: 'rgba(13,13,13,0.6)',
            backdropFilter: 'blur(0px)',
          }}
        >
          {/* Logo */}
          <img
            src="/images/topo/logo.png"
            alt="TOPO Logo"
            style={{
              height: '100px',
              width: '100px',
              objectFit: 'contain',
              marginBottom: 4,
            }}
          />

          {/* Byline */}
          <div
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 300,
              fontSize: '0.55rem',
              color: C.muted,
              marginTop: 4,
              marginBottom: 24,
              letterSpacing: '0.06em',
            }}
          >
            by OROZ.CONSTRUCTION
          </div>

          {/* Three lines */}
          {['TERRITORIO.', 'DATOS.', 'CERTEZA.'].map((line) => (
            <div
              key={line}
              style={{
                fontFamily: 'var(--font-space-mono), monospace',
                fontWeight: 700,
                fontSize: isCompact ? '1.1rem' : '1.4rem',
                color: C.text,
                lineHeight: 1.2,
                letterSpacing: '0.04em',
              }}
            >
              {line}
            </div>
          ))}

          {/* Description */}
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 300,
              fontSize: '0.7rem',
              color: C.muted,
              lineHeight: 1.65,
              marginTop: 16,
              marginBottom: 28,
              maxWidth: 320,
            }}
          >
            Fotogrametría técnica de precisión centimétrica para constructoras y desarrolladores en Los Cabos.
          </p>

          {/* CTA Button */}
          <MovingBorderButton
            borderRadius="4px"
            duration={3000}
            containerClassName="cursor-pointer w-fit"
            className="px-6 py-3 text-[0.6rem] font-bold tracking-widest bg-[#0D0D0D] border-0"
            style={{ fontFamily: 'var(--font-space-mono), monospace' }}
            onClick={() => {
              const el = rootRef.current
              if (!el) return
              const target = el.querySelector('#topo-contacto')
              target?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            SOLICITAR LEVANTAMIENTO
          </MovingBorderButton>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 1,
          padding: isCompact ? '32px 20px' : '48px 48px',
          background: 'rgba(13,13,13,0.85)',
          borderTop: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 12,
          }}
        >
          {METRICS.map((m, i) => (
            <MetricCard key={m.label} {...m} delay={i * 0.12} isCompact={isCompact} />
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 1,
          padding: isCompact ? '32px 20px' : '48px 48px',
          background: 'rgba(13,13,13,0.85)',
          borderTop: `1px solid ${C.border}`,
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: 9,
              color: C.accent,
              letterSpacing: '0.14em',
              marginBottom: 10,
            }}
          >
            SERVICIOS
          </div>
          <div
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontWeight: 700,
              fontSize: '1.4rem',
              color: C.text,
              letterSpacing: '0.04em',
            }}
          >
            CAPACIDADES TÉCNICAS
          </div>
        </div>

        {/* Service cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isCompact ? '1fr' : '1fr 1fr 1fr',
            gap: 12,
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.n} s={s} i={i} />
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 1,
          padding: isCompact ? '32px 20px' : '48px 48px',
          background: 'rgba(13,13,13,0.85)',
          borderTop: `1px solid ${C.border}`,
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: 9,
              color: C.accent,
              letterSpacing: '0.14em',
              marginBottom: 10,
            }}
          >
            PORTAFOLIO
          </div>
          <div
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontWeight: 700,
              fontSize: '1.4rem',
              color: C.text,
              letterSpacing: '0.04em',
            }}
          >
            PROYECTOS REALES
          </div>
        </div>

        {/* Project cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: isCompact ? 'column' : 'row',
            gap: 12,
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} isCompact={isCompact} />
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="topo-contacto"
        style={{
          position: 'relative',
          zIndex: 1,
          padding: isCompact ? '32px 20px' : '48px 48px',
          background: 'rgba(13,13,13,0.85)',
          borderTop: `1px solid ${C.border}`,
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: 9,
              color: C.accent,
              letterSpacing: '0.14em',
              marginBottom: 10,
            }}
          >
            CONTACTO
          </div>
          <div
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontWeight: 700,
              fontSize: '1.4rem',
              color: C.text,
              letterSpacing: '0.04em',
            }}
          >
            SOLICITAR LEVANTAMIENTO
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isCompact ? '1fr' : '1fr 1fr',
            gap: 24,
            maxWidth: 840,
          }}
        >
          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {[
              {
                label: 'EMAIL',
                value: 'topo@oroz.construction',
                href: 'mailto:topo@oroz.construction',
              },
              {
                label: 'WHATSAPP',
                value: '+52 624 123 4567',
                href: 'https://wa.me/5216241234567',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  background: 'rgba(26,26,26,0.9)',
                  border: `1px solid ${C.border}`,
                  padding: '16px 20px',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-space-mono), monospace',
                    fontSize: 9,
                    color: C.muted,
                    letterSpacing: '0.12em',
                    minWidth: 72,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-space-mono), monospace',
                    fontSize: 12,
                    color: C.text,
                  }}
                >
                  {item.value}
                </div>
              </a>
            ))}

            <div
              style={{
                background: 'rgba(26,26,26,0.9)',
                border: `1px solid ${C.border}`,
                padding: '20px',
                marginTop: 4,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: 9,
                  color: C.accent,
                  letterSpacing: '0.14em',
                  marginBottom: 14,
                }}
              >
                ESPECIFICACIONES
              </div>
              {[
                'GSD: ±2.1 cm/px',
                'Precisión XY: ±2 cm',
                'Entrega: 72 horas',
                "Los Cabos, BCS · 23°03'N 109°41'W",
              ].map((line) => (
                <div
                  key={line}
                  style={{
                    fontFamily: 'var(--font-space-mono), monospace',
                    fontSize: 11,
                    color: C.muted,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      background: C.accent,
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              background: 'rgba(26,26,26,0.9)',
              border: `1px solid ${C.border}`,
              padding: '28px',
              display: 'flex',
              flexDirection: 'column' as const,
              gap: 16,
            }}
          >
            {[
              { label: 'NOMBRE', type: 'text' },
              { label: 'EMPRESA', type: 'text' },
            ].map((field) => (
              <div key={field.label}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-space-mono), monospace',
                    fontSize: 9,
                    color: C.muted,
                    letterSpacing: '0.12em',
                    marginBottom: 8,
                  }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  style={{
                    width: '100%',
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                    color: C.text,
                    fontFamily: 'var(--font-space-mono), monospace',
                    fontSize: 12,
                    padding: '10px 14px',
                    outline: 'none',
                    boxSizing: 'border-box' as const,
                  }}
                />
              </div>
            ))}

            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: 9,
                  color: C.muted,
                  letterSpacing: '0.12em',
                  marginBottom: 8,
                }}
              >
                TIPO DE PROYECTO
              </label>
              <select
                style={{
                  width: '100%',
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  color: C.text,
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: 11,
                  padding: '10px 14px',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="">Seleccionar...</option>
                <option>Ortomosaico + DTM</option>
                <option>Volumetría</option>
                <option>Auditoría de Activos</option>
                <option>Otro</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: 9,
                  color: C.muted,
                  letterSpacing: '0.12em',
                  marginBottom: 8,
                }}
              >
                MENSAJE
              </label>
              <textarea
                rows={3}
                style={{
                  width: '100%',
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  color: C.text,
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontSize: 11,
                  padding: '10px 14px',
                  outline: 'none',
                  resize: 'none' as const,
                  boxSizing: 'border-box' as const,
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                background: C.accent,
                color: C.bg,
                fontFamily: 'var(--font-space-mono), monospace',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                padding: '14px',
                border: 'none',
                cursor: 'pointer',
                marginTop: 4,
              }}
            >
              ENVIAR SOLICITUD
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
