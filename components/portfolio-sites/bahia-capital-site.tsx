"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import {
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Globe,
  Star,
  TrendingUp,
  Award,
  Sun,
  Plane,
  Search,
  Shield,
  Key,
} from "lucide-react"

// ─── Design tokens ────────────────────────────────────────────────────────────

const C = {
  bg: "#FAFAF8",
  bgAlt: "#F5F0E8",
  bgTer: "#FFFEFA",
  text: "#2C2924",
  textSec: "#8B8070",
  textTer: "#B8A88A",
  accent: "#B8A88A",
  accentHover: "#A0926E",
  accentLight: "#D4C5A9",
  border: "#E8E3D6",
  dark: "#2C2924",
}

const F = {
  cormorant: { fontFamily: "var(--font-cormorant), Georgia, serif" },
  jakarta: { fontFamily: "var(--font-jakarta), sans-serif" },
  mono: { fontFamily: "var(--font-space-mono), monospace" },
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ─── Nav links ────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Propiedades", section: "propiedades" },
  { label: "Nosotros", section: "nosotros" },
  { label: "Inversión", section: "inversion" },
  { label: "Contacto", section: "contacto" },
]

// ─── Stat Counter ─────────────────────────────────────────────────────────────

function StatCounter({
  value,
  suffix = "",
  label,
  icon: Icon,
  delay = 0,
  isString = false,
}: {
  value: string | number
  suffix?: string
  label: string
  icon: React.ElementType
  delay?: number
  isString?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView || isString) return
    const target = typeof value === "number" ? value : parseFloat(value as string)
    const duration = 1500
    const steps = 60
    const increment = target / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [isInView, value, isString])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      style={{ flex: 1, textAlign: "center", padding: "0 12px", minWidth: 0 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: delay + 0.1 }}
        style={{ marginBottom: 10 }}
      >
        <Icon size={18} color={C.accent} />
      </motion.div>
      <div
        style={{
          ...F.cormorant,
          fontSize: "2.2rem",
          fontWeight: 500,
          color: C.accent,
          lineHeight: 1,
          marginBottom: 6,
        }}
      >
        {isString ? value : count}{suffix}
      </div>
      <div
        style={{
          ...F.jakarta,
          fontSize: "0.55rem",
          color: "#D4C5A9",
          letterSpacing: "0.5px",
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
    </motion.div>
  )
}

// ─── Property Card ────────────────────────────────────────────────────────────

function PropertyCard({
  name,
  location,
  specs,
  price,
  img,
  index,
}: {
  name: string
  location: string
  specs: string
  price: string
  img: string
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        minWidth: 0,
        background: "#FFFFFF",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 20px 60px rgba(44,41,36,0.14)"
          : "0 4px 24px rgba(44,41,36,0.06)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "box-shadow 500ms, transform 500ms cubic-bezier(0.16,1,0.3,1)",
        cursor: "default",
      }}
    >
      {/* Image with parallax */}
      <div
        ref={cardRef}
        style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}
      >
        <motion.img
          src={img}
          alt={name}
          loading="eager"
          style={{
            y: imgY,
            width: "100%",
            height: "120%",
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 600ms cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "rgba(184,168,138,0.9)",
            color: C.bgTer,
            borderRadius: 8,
            padding: "3px 8px",
            ...F.jakarta,
            fontSize: "0.5rem",
            fontWeight: 500,
            letterSpacing: "0.5px",
          }}
        >
          Exclusiva
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "14px 16px 16px" }}>
        <div
          style={{
            ...F.cormorant,
            fontSize: "0.9rem",
            fontWeight: 500,
            color: C.text,
            marginBottom: 4,
          }}
        >
          {name}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            marginBottom: 6,
          }}
        >
          <MapPin size={12} color={C.textSec} />
          <span style={{ ...F.jakarta, fontSize: "0.62rem", color: C.textSec }}>
            {location}
          </span>
        </div>
        <div style={{ ...F.jakarta, fontSize: "0.6rem", color: C.textSec, marginBottom: 8 }}>
          {specs}
        </div>
        <div style={{ ...F.mono, fontSize: "0.75rem", color: C.accent }}>
          {price}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({
  icon: Icon,
  name,
  desc,
  index,
}: {
  icon: React.ElementType
  name: string
  desc: string
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.bgTer,
        border: `1px solid ${hovered ? C.accent : C.border}`,
        borderRadius: 14,
        padding: 20,
        transition: "all 300ms cubic-bezier(0.16,1,0.3,1)",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: hovered ? C.accent : C.bgAlt,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 12,
          transition: "background 300ms",
          flexShrink: 0,
        }}
      >
        <Icon size={18} color={hovered ? C.bgTer : C.accent} style={{ transition: "color 300ms" }} />
      </div>
      <div
        style={{ ...F.jakarta, fontSize: "0.8rem", fontWeight: 500, color: C.text, marginBottom: 6 }}
      >
        {name}
      </div>
      <div style={{ ...F.jakarta, fontSize: "0.63rem", fontWeight: 300, color: C.textSec, lineHeight: 1.55 }}>
        {desc}
      </div>
    </motion.div>
  )
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────

function TestimonialCard({
  text,
  name,
  detail,
  index,
}: {
  text: string
  name: string
  detail: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.18, ease: EASE }}
      style={{
        flex: 1,
        minWidth: 0,
        background: C.bgTer,
        borderRadius: 16,
        padding: 24,
        boxShadow: "0 4px 20px rgba(44,41,36,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: 3 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} fill={C.accent} color={C.accent} />
        ))}
      </div>
      <div
        style={{
          ...F.cormorant,
          fontSize: "3rem",
          color: C.accent,
          opacity: 0.15,
          lineHeight: 0.6,
          flexShrink: 0,
        }}
      >
        "
      </div>
      <p
        style={{
          ...F.jakarta,
          fontSize: "0.72rem",
          fontWeight: 300,
          color: C.text,
          fontStyle: "italic",
          lineHeight: 1.7,
          margin: 0,
          flex: 1,
        }}
      >
        {text}
      </p>
      <div style={{ width: 20, height: 1, backgroundColor: C.border }} />
      <div>
        <div style={{ ...F.jakarta, fontSize: "0.7rem", fontWeight: 500, color: C.text }}>
          {name}
        </div>
        <div style={{ ...F.jakarta, fontSize: "0.6rem", fontWeight: 300, color: C.accent, marginTop: 2 }}>
          {detail}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({
  activeSection,
  scrollTo,
  scrolled,
}: {
  activeSection: string
  scrollTo: (id: string) => void
  scrolled: boolean
}) {
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        background: "rgba(250,250,248,0.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(232,227,214,0.5)" : "1px solid transparent",
        transition: "border-color 300ms",
      }}
    >
      {/* Brand */}
      <div
        style={{
          ...F.cormorant,
          fontSize: "1rem",
          fontWeight: 500,
          fontStyle: "italic",
          color: C.accent,
          letterSpacing: "1px",
          cursor: "default",
        }}
      >
        Bahía Capital
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.section}
            label={link.label}
            active={activeSection === link.section}
            onClick={() => scrollTo(link.section)}
          />
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => scrollTo("contacto")}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          ...F.jakarta,
          fontSize: "0.6rem",
          fontWeight: 500,
          color: btnHovered ? C.bgTer : C.accent,
          background: btnHovered ? C.accent : "transparent",
          border: `1px solid ${C.accent}`,
          borderRadius: 20,
          padding: "5px 14px",
          cursor: "pointer",
          transition: "all 220ms",
        }}
      >
        Explorar
      </button>
    </div>
  )
}

function NavLink({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...F.jakarta,
        fontSize: "0.65rem",
        fontWeight: 400,
        color: active ? C.accent : hovered ? C.text : C.textSec,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: 0,
        transition: "color 200ms",
      }}
    >
      {label}
    </button>
  )
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null)
  const [btnHovered, setBtnHovered] = useState(false)

  const inputStyle = (name: string): React.CSSProperties => ({
    ...F.jakarta,
    fontSize: "0.7rem",
    fontWeight: 400,
    color: C.text,
    background: C.bgTer,
    border: `1px solid ${focused === name ? C.accent : C.border}`,
    borderRadius: 10,
    padding: "10px 14px",
    width: "100%",
    outline: "none",
    boxShadow: focused === name ? `0 0 0 3px rgba(184,168,138,0.12)` : "none",
    transition: "all 220ms",
    boxSizing: "border-box" as const,
    caretColor: C.accent,
  })

  const selectStyle = (name: string): React.CSSProperties => ({
    ...inputStyle(name),
    cursor: "pointer",
    appearance: "none" as const,
    WebkitAppearance: "none" as const,
  })

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {[
        { key: "nombre", type: "text", placeholder: "Nombre" },
        { key: "email", type: "email", placeholder: "Email" },
        { key: "telefono", type: "tel", placeholder: "Teléfono" },
      ].map(({ key, type, placeholder }) => (
        <input
          key={key}
          type={type}
          placeholder={placeholder}
          style={inputStyle(key)}
          onFocus={() => setFocused(key)}
          onBlur={() => setFocused(null)}
        />
      ))}
      <select
        style={selectStyle("tipo")}
        onFocus={() => setFocused("tipo")}
        onBlur={() => setFocused(null)}
      >
        <option value="">¿Qué buscas?</option>
        {["Casa", "Departamento", "Terreno", "Inversión"].map((v) => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>
      <select
        style={selectStyle("presupuesto")}
        onFocus={() => setFocused("presupuesto")}
        onBlur={() => setFocused(null)}
      >
        <option value="">Presupuesto</option>
        {["$300K - $500K", "$500K - $800K", "$800K - $1.2M", "$1.2M+"].map((v) => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>
      <button
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          ...F.jakarta,
          fontSize: "0.72rem",
          fontWeight: 500,
          color: C.bgTer,
          background: btnHovered ? C.accentHover : C.accent,
          border: "none",
          borderRadius: 10,
          padding: "13px 0",
          width: "100%",
          cursor: "pointer",
          letterSpacing: "0.5px",
          transform: btnHovered ? "translateY(-1px)" : "translateY(0)",
          boxShadow: btnHovered ? "0 6px 24px rgba(184,168,138,0.3)" : "none",
          transition: "all 220ms",
        }}
      >
        Solicitar Asesoría
      </button>
    </div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection({ sectionRef, isCompact = false }: { sectionRef: React.RefObject<HTMLElement | null>; isCompact?: boolean }) {
  const imgContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: imgContainerRef,
    offset: ["start start", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const [chevronBounce, setChevronBounce] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setChevronBounce((v) => !v), 900)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100%",
        minHeight: 280,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Parallax image */}
      <div
        ref={imgContainerRef}
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
        }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=90"
          alt="Villa de lujo"
          loading="eager"
          style={{
            y: imgY,
            width: "100%",
            height: "130%",
            objectFit: "cover",
            objectPosition: "center",
            position: "absolute",
            top: "-15%",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(250,250,248,0) 0%, rgba(250,250,248,0.3) 40%, rgba(250,250,248,0.95) 85%, rgba(250,250,248,1) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: 0,
          right: 0,
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: 6 }}>
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{ ...F.cormorant, fontSize: isCompact ? "3rem" : "4rem", fontWeight: 300, color: C.text, letterSpacing: "3px" }}
          >
            Bahía
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{ ...F.cormorant, fontSize: isCompact ? "3rem" : "4rem", fontWeight: 500, fontStyle: "italic", color: C.accent }}
          >
            Capital
          </motion.span>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          style={{ width: 50, height: 1.5, backgroundColor: C.accent, margin: "12px auto 14px" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          style={{
            ...F.jakarta,
            fontSize: "0.8rem",
            fontWeight: 300,
            color: C.textSec,
            letterSpacing: "1px",
            margin: 0,
          }}
        >
          Propiedades de lujo en La Paz, Baja California Sur
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{
            marginTop: 16,
            transform: chevronBounce ? "translateY(3px)" : "translateY(0)",
            transition: "transform 450ms cubic-bezier(0.34,1.56,0.64,1)",
            display: "inline-block",
          }}
        >
          <ChevronDown size={20} color={C.accent} />
        </motion.div>
      </div>
    </section>
  )
}

// ─── Quote + Parallax Image Section ──────────────────────────────────────────

function QuoteSection({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const imgRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      style={{
        display: "flex",
        minHeight: 200,
        background: C.bgAlt,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{
          flex: "0 0 45%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px 32px 40px 28px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            ...F.cormorant,
            fontSize: "4rem",
            color: C.accent,
            opacity: 0.2,
            lineHeight: 0.8,
            marginBottom: 10,
          }}
        >
          "
        </div>
        <p
          style={{
            ...F.cormorant,
            fontSize: "1.25rem",
            fontWeight: 400,
            fontStyle: "italic",
            color: C.text,
            lineHeight: 1.8,
            margin: "0 0 16px",
          }}
        >
          En Bahía Capital, cada propiedad cuenta una historia. La tuya comienza aquí.
        </p>
        <span
          style={{
            ...F.jakarta,
            fontSize: "0.6rem",
            fontWeight: 300,
            color: C.textSec,
          }}
        >
          — Fundada en La Paz, 2018
        </span>
      </motion.div>

      {/* Parallax image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        ref={imgRef}
        style={{
          flex: "0 0 55%",
          overflow: "hidden",
          borderRadius: "20px 0 0 20px",
          position: "relative",
        }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=90"
          alt="Atardecer en bahía"
          loading="eager"
          style={{
            y: imgY,
            width: "100%",
            height: "120%",
            objectFit: "cover",
            position: "absolute",
            top: "-10%",
          }}
        />
      </motion.div>
    </section>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BahiaCapitalSite({ className }: { className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      setIsCompact(entries[0].contentRect.width < 500)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    propiedades: useRef<HTMLElement>(null),
    nosotros: useRef<HTMLElement>(null),
    inversion: useRef<HTMLElement>(null),
    servicios: useRef<HTMLElement>(null),
    testimonios: useRef<HTMLElement>(null),
    contacto: useRef<HTMLElement>(null),
  }

  // Active section tracking
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    const observers: IntersectionObserver[] = []

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (!ref.current) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(key) },
        { root: container, threshold: 0.35 }
      )
      obs.observe(ref.current)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Scroll tracking for navbar border
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    const handler = () => setScrolled(container.scrollTop > 10)
    container.addEventListener("scroll", handler)
    return () => container.removeEventListener("scroll", handler)
  }, [])

  const scrollTo = useCallback((id: string) => {
    const ref = sectionRefs[id as keyof typeof sectionRefs]
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <div
      ref={scrollRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        background: C.bg,
        scrollBehavior: "smooth",
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Navbar activeSection={activeSection} scrollTo={scrollTo} scrolled={scrolled} />

      {/* ── SECCIÓN 1: HERO ── */}
      <HeroSection sectionRef={sectionRefs.hero} isCompact={isCompact} />

      {/* ── SECCIÓN 2: PROPIEDADES ── */}
      <section
        ref={sectionRefs.propiedades}
        id="propiedades"
        style={{
          padding: "40px 24px 36px",
          background: C.bg,
          boxSizing: "border-box",
          flexShrink: 0,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            ...F.jakarta,
            fontSize: "0.55rem",
            fontWeight: 300,
            color: C.accent,
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Propiedades
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          style={{
            ...F.cormorant,
            fontSize: "2rem",
            fontWeight: 400,
            color: C.text,
            margin: "0 0 24px",
          }}
        >
          Exclusivas
        </motion.h2>

        <div style={{ display: "flex", flexDirection: isCompact ? "column" : "row", gap: 14 }}>
          <PropertyCard
            index={0}
            name="Vista del Mar Residencial"
            location="El Centenario, La Paz"
            specs="4 Rec · 3 Baños · 320 m²"
            price="USD $850,000"
            img="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=90"
          />
          <PropertyCard
            index={1}
            name="Paraíso Bay Penthouse"
            location="Marina de La Paz"
            specs="3 Rec · 2 Baños · 210 m²"
            price="USD $620,000"
            img="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=90"
          />
          <PropertyCard
            index={2}
            name="Terreno Balandra Premium"
            location="Balandra, La Paz"
            specs="1,500 m² · Vista al mar"
            price="USD $450,000"
            img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=90"
          />
        </div>
      </section>

      {/* ── SECCIÓN 3: FRASE + IMAGEN ── */}
      <QuoteSection sectionRef={sectionRefs.nosotros} />

      {/* ── SECCIÓN 4: POR QUÉ INVERTIR ── */}
      <section
        ref={sectionRefs.inversion}
        id="inversion"
        style={{
          padding: "40px 24px",
          background: C.dark,
          boxSizing: "border-box",
          flexShrink: 0,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{
              ...F.jakarta,
              fontSize: "0.55rem",
              fontWeight: 300,
              color: C.accentLight,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            ¿Por qué
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            style={{
              ...F.cormorant,
              fontSize: "2.5rem",
              fontWeight: 300,
              fontStyle: "italic",
              color: C.bgTer,
              margin: 0,
            }}
          >
            La Paz?
          </motion.h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          {[
            { value: 34, suffix: "%", label: "Plusvalía anual promedio", icon: TrendingUp, isString: false },
            { value: "#1", suffix: "", label: "Mejor calidad de vida en México", icon: Award, isString: true },
            { value: 300, suffix: "", label: "Días de sol al año", icon: Sun, isString: false },
            { value: "45min", suffix: "", label: "Del aeropuerto internacional", icon: Plane, isString: true },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                minWidth: 0,
                borderRight: i < 3 ? `1px solid rgba(184,168,138,0.2)` : "none",
              }}
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                delay={i * 0.2}
                isString={stat.isString}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── SECCIÓN 5: SERVICIOS ── */}
      <section
        ref={sectionRefs.servicios}
        style={{
          padding: "40px 24px 36px",
          background: C.bg,
          boxSizing: "border-box",
          flexShrink: 0,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            ...F.cormorant,
            fontSize: "1.8rem",
            fontWeight: 400,
            color: C.text,
            margin: "0 0 24px",
          }}
        >
          Nuestros Servicios
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          {[
            { icon: Search, name: "Búsqueda Personalizada", desc: "Encontramos la propiedad perfecta según tu estilo de vida y objetivos de inversión." },
            { icon: Shield, name: "Asesoría Legal Completa", desc: "Due diligence, contratos y fideicomisos para compradores extranjeros." },
            { icon: TrendingUp, name: "Análisis de Inversión", desc: "Proyecciones de plusvalía y ROI para cada propiedad en el mercado." },
            { icon: Key, name: "Administración de Propiedades", desc: "Gestión completa de renta vacacional para maximizar tu retorno." },
          ].map((s, i) => (
            <ServiceCard key={s.name} icon={s.icon} name={s.name} desc={s.desc} index={i} />
          ))}
        </div>
      </section>

      {/* ── SECCIÓN 6: TESTIMONIOS ── */}
      <section
        ref={sectionRefs.testimonios}
        style={{
          padding: "40px 24px 36px",
          background: C.bgAlt,
          boxSizing: "border-box",
          flexShrink: 0,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            ...F.cormorant,
            fontSize: "1.8rem",
            fontWeight: 400,
            color: C.text,
            margin: "0 0 20px",
          }}
        >
          Lo que dicen nuestros clientes
        </motion.h2>

        <div style={{ display: "flex", gap: 14 }}>
          <TestimonialCard
            index={0}
            text="Comprar nuestra casa en La Paz fue la mejor decisión. El equipo de Bahía Capital nos guió en cada paso, especialmente con el fideicomiso para extranjeros."
            name="Mark & Sarah Thompson"
            detail="Compradores desde San Diego, CA"
          />
          <TestimonialCard
            index={1}
            text="La plusvalía de nuestra propiedad superó todas las expectativas. En 3 años recuperamos la inversión con renta vacacional."
            name="Carlos Méndez"
            detail="Inversionista desde CDMX"
          />
        </div>
      </section>

      {/* ── SECCIÓN 7: CONTACTO ── */}
      <section
        ref={sectionRefs.contacto}
        id="contacto"
        style={{
          padding: "40px 24px 36px",
          background: C.bg,
          boxSizing: "border-box",
          display: "flex",
          gap: 28,
          flexShrink: 0,
        }}
      >
        {/* Form side */}
        <div style={{ flex: "0 0 52%", minWidth: 0 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{
              ...F.jakarta,
              fontSize: "0.55rem",
              fontWeight: 300,
              color: C.accent,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            Descubre tu
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            style={{
              ...F.cormorant,
              fontSize: "1.8rem",
              fontWeight: 400,
              color: C.text,
              margin: "0 0 20px",
            }}
          >
            Próxima Propiedad
          </motion.h2>
          <ContactForm />
        </div>

        {/* Info side */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            style={{
              background: C.bgTer,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {[
              { icon: MapPin, text: "La Paz, Baja California Sur" },
              { icon: Phone, text: "612 XXX XXXX" },
              { icon: Mail, text: "info@bahiacapital.mx" },
              { icon: Globe, text: "bahiacapital.mx" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
                <Icon size={isCompact ? 10 : 13} color={C.accent} style={{ flexShrink: 0 }} />
                <span style={{ ...F.jakarta, fontSize: isCompact ? "0.5rem" : "0.65rem", fontWeight: 300, color: C.textSec, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            style={{
              background: C.bgAlt,
              borderRadius: 14,
              height: 140,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              border: `1px solid ${C.border}`,
            }}
          >
            <MapPin size={isCompact ? 16 : 22} color={C.accentLight} />
            <span style={{ ...F.jakarta, fontSize: "0.58rem", fontWeight: 300, color: C.accentLight }}>
              La Paz, BCS
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: C.dark,
          padding: "28px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          boxSizing: "border-box",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            ...F.cormorant,
            fontSize: "1.1rem",
            fontWeight: 500,
            fontStyle: "italic",
            color: C.accent,
          }}
        >
          Bahía Capital
        </div>
        <div style={{ ...F.jakarta, fontSize: "0.6rem", fontWeight: 300, color: C.textSec }}>
          La Paz, Baja California Sur, México
        </div>
        <div style={{ display: "flex", gap: 14, marginTop: 2 }}>
          {["Instagram", "WhatsApp", "Email"].map((link) => (
            <span
              key={link}
              style={{ ...F.jakarta, fontSize: "0.55rem", color: C.accentLight, cursor: "default" }}
            >
              {link}
            </span>
          ))}
        </div>
        <div style={{ ...F.jakarta, fontSize: "0.5rem", fontWeight: 300, color: C.textSec, marginTop: 4 }}>
          © 2024 Bahía Capital · Todos los derechos reservados
        </div>
      </footer>
    </div>
  )
}
