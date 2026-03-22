"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useInView, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import {
  Sparkles,
  Shield,
  Star,
  Heart,
  Zap,
  Award,
  MapPin,
  Phone,
  Clock,
  Mail,
  ArrowLeftRight,
} from "lucide-react"

// ─── Design tokens ────────────────────────────────────────────────────────────

const C = {
  bg: "#FFFFFF",
  bgAlt: "#F8FAF9",
  bgTer: "#EDF5F0",
  text: "#2D3B35",
  textSec: "#6B8078",
  textTer: "#A3B5AD",
  accent: "#84B59F",
  accentHover: "#6FA089",
  accentLight: "#C5DDD2",
  border: "#E2EBE7",
  cardShadow: "0 4px 20px rgba(45,59,53,0.06)",
}

const F = {
  cormorant: { fontFamily: "var(--font-cormorant), Georgia, serif" },
  jakarta: { fontFamily: "var(--font-jakarta), sans-serif" },
  mono: { fontFamily: "var(--font-space-mono), monospace" },
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ─── Shared animation variants ────────────────────────────────────────────────

const fadeUp = (delay = 0, y = 24) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay, ease: EASE },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, delay, ease: EASE },
})

// ─── Section label pattern ─────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      {...fadeUp(0, 12)}
      style={{
        ...F.jakarta,
        fontSize: "0.52rem",
        color: C.textTer,
        letterSpacing: "3px",
        textTransform: "uppercase",
        marginBottom: "6px",
      }}
    >
      {children}
    </motion.p>
  )
}

function SectionTitle({ children, color = C.text }: { children: React.ReactNode; color?: string }) {
  return (
    <motion.h2
      {...fadeUp(0.1, 20)}
      style={{
        ...F.cormorant,
        fontSize: "1.8rem",
        fontWeight: 400,
        color,
        margin: "0 0 10px",
        lineHeight: 1.1,
      }}
    >
      {children}
    </motion.h2>
  )
}

function AccentLine() {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 40 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
      style={{ height: 2, backgroundColor: C.accent, marginBottom: "20px" }}
    />
  )
}

// ─── Stat Counter ─────────────────────────────────────────────────────────────

function StatCounter({
  target,
  prefix = "",
  suffix = "",
  label,
  delay = 0,
}: {
  target: number
  prefix?: string
  suffix?: string
  label: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1400
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
  }, [isInView, target])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      style={{ textAlign: "center", flex: 1, padding: "0 16px" }}
    >
      <div
        style={{
          ...F.cormorant,
          fontSize: "1.8rem",
          fontWeight: 500,
          color: C.accent,
          lineHeight: 1,
          marginBottom: "6px",
        }}
      >
        {prefix}{count}{suffix}
      </div>
      <div
        style={{
          ...F.jakarta,
          fontSize: "0.52rem",
          color: C.textSec,
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </motion.div>
  )
}

// ─── Services grid ────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: Sparkles, name: "Blanqueamiento Dental", desc: "Resultados visibles desde la primera sesión con tecnología LED de última generación." },
  { icon: Shield, name: "Carillas de Porcelana", desc: "Diseño digital de sonrisa para un resultado natural y personalizado." },
  { icon: Star, name: "Implantes Dentales", desc: "Titanio de grado médico con integración ósea garantizada." },
  { icon: Heart, name: "Ortodoncia Invisible", desc: "Alineadores transparentes diseñados con tecnología 3D." },
  { icon: Zap, name: "Limpieza Profunda", desc: "Ultrasonido y pulido profesional para una salud bucal completa." },
  { icon: Award, name: "Diseño de Sonrisa", desc: "Planificación digital completa para tu sonrisa ideal." },
]

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.bg,
        border: `1px solid ${hovered ? C.accent : C.border}`,
        borderRadius: 14,
        padding: "18px 16px",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 12px 40px rgba(132,181,159,0.14)` : C.cardShadow,
        transition: "all 280ms cubic-bezier(0.16,1,0.3,1)",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: C.bgTer,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Icon size={17} color={C.accent} />
      </div>
      <div style={{ ...F.jakarta, fontSize: "0.78rem", fontWeight: 500, color: C.text, marginBottom: 5 }}>
        {service.name}
      </div>
      <div style={{ ...F.jakarta, fontSize: "0.62rem", color: C.textSec, lineHeight: 1.5 }}>
        {service.desc}
      </div>
    </motion.div>
  )
}

// ─── Team card ────────────────────────────────────────────────────────────────

const TEAM = [
  {
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=90",
    name: "Dra. Valentina Ríos",
    specialty: "Especialista en Estética Dental",
    bio: "UAG · 12 años de experiencia",
  },
  {
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=90",

    name: "Dr. Emilio Cota",
    specialty: "Implantología y Cirugía",
    bio: "UNAM · 8 años de experiencia",
  },
  {
    img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&q=90",
    name: "Dra. María Luisa Beltrán",
    specialty: "Ortodoncia y Ortopedia",
    bio: "UABC · 10 años de experiencia",
  },
]

function TeamCard({ member, index }: { member: (typeof TEAM)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.bg,
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: hovered ? "0 16px 40px rgba(45,59,53,0.12)" : C.cardShadow,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 280ms cubic-bezier(0.16,1,0.3,1)",
        flex: 1,
        minWidth: 0,
        cursor: "default",
      }}
    >
      <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
        <img
          src={member.img}
          alt={member.name}
          loading="eager"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
      </div>
      <div style={{ padding: "14px 14px 16px" }}>
        <div style={{ ...F.jakarta, fontSize: "0.78rem", fontWeight: 500, color: C.text, marginBottom: 3 }}>
          {member.name}
        </div>
        <div style={{ ...F.jakarta, fontSize: "0.62rem", color: C.accent, marginBottom: 4 }}>
          {member.specialty}
        </div>
        <div style={{ ...F.jakarta, fontSize: "0.58rem", color: C.textSec }}>
          {member.bio}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Before/after card ────────────────────────────────────────────────────────

const SMILES = [
  { img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=90", label: "Blanqueamiento Dental" },
  { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=90", label: "Carillas de Porcelana" },
  { img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=90", label: "Diseño de Sonrisa" },
]

function SmileCard({ item, index }: { item: (typeof SMILES)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: EASE }}
      style={{ flex: 1, minWidth: 0 }}
    >
      <div
        style={{
          borderRadius: 14,
          overflow: "hidden",
          border: `1px solid ${C.border}`,
          position: "relative",
        }}
      >
        {/* Decorative before/after split */}
        <div style={{ position: "relative", aspectRatio: "4/3" }}>
          <img
            src={item.img}
            alt={item.label}
            loading="eager"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {/* Overlay left half darker */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "50%",
              background: "rgba(45,59,53,0.25)",
            }}
          />
          {/* Vertical divider */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 2,
              backgroundColor: C.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                backgroundColor: C.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              <ArrowLeftRight size={10} color="#fff" />
            </div>
          </div>
          {/* Before / After labels */}
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              ...F.jakarta,
              fontSize: "0.45rem",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Antes
          </div>
          <div
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              ...F.jakarta,
              fontSize: "0.45rem",
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Después
          </div>
        </div>
      </div>
      <p
        style={{
          ...F.jakarta,
          fontSize: "0.62rem",
          color: C.text,
          textAlign: "center",
          marginTop: 8,
          fontWeight: 400,
        }}
      >
        {item.label}
      </p>
    </motion.div>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    text: "Tenía miedo al dentista toda mi vida. En Clínica Bes me hicieron sentir segura desde el primer momento. Mi sonrisa cambió completamente.",
    name: "Laura M.",
    treatment: "Carillas de Porcelana",
    dir: -1,
  },
  {
    text: "Profesionalismo total. El diseño digital de mi sonrisa me permitió ver el resultado antes de empezar. Quedé mejor de lo que imaginé.",
    name: "Roberto C.",
    treatment: "Diseño de Sonrisa",
    dir: 0,
  },
  {
    text: "Viajé desde Cabo San Lucas solo por la reputación de la Dra. Ríos. Valió cada kilómetro. Servicio de primer mundo.",
    name: "Ana P.",
    treatment: "Blanqueamiento + Carillas",
    dir: 1,
  },
]

function TestimonialCard({ item, index }: { item: (typeof TESTIMONIALS)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: item.dir * 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: EASE }}
      style={{
        background: C.bg,
        borderRadius: 14,
        padding: "18px 18px 16px",
        boxShadow: "0 4px 16px rgba(132,181,159,0.08)",
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div style={{ ...F.cormorant, fontSize: "2rem", color: C.accent, opacity: 0.25, lineHeight: 0.8 }}>
        "
      </div>
      <p
        style={{
          ...F.jakarta,
          fontSize: "0.65rem",
          color: C.textSec,
          lineHeight: 1.65,
          fontStyle: "italic",
          margin: 0,
          flex: 1,
        }}
      >
        {item.text}
      </p>
      <div style={{ width: 20, height: 1, backgroundColor: C.border }} />
      <div>
        <div style={{ ...F.jakarta, fontSize: "0.7rem", fontWeight: 500, color: C.text }}>
          {item.name}
        </div>
        <div style={{ ...F.jakarta, fontSize: "0.58rem", color: C.accent, marginTop: 2 }}>
          {item.treatment}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Contact form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null)

  const inputStyle = (name: string): React.CSSProperties => ({
    ...F.jakarta,
    fontSize: "0.72rem",
    color: C.text,
    background: C.bgAlt,
    border: `1px solid ${focused === name ? C.accent : C.border}`,
    borderRadius: 10,
    padding: "10px 13px",
    width: "100%",
    outline: "none",
    boxShadow: focused === name ? `0 0 0 3px rgba(132,181,159,0.12)` : "none",
    transition: "all 220ms",
    boxSizing: "border-box" as const,
    caretColor: C.accent,
  })

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {["nombre", "telefono", "email"].map((f, i) => (
        <motion.input
          key={f}
          {...(fadeIn(0.3 + i * 0.08) as any)}
          type={f === "email" ? "email" : f === "telefono" ? "tel" : "text"}
          placeholder={f === "nombre" ? "Nombre completo" : f === "telefono" ? "Teléfono" : "Email"}
          style={inputStyle(f)}
          onFocus={() => setFocused(f)}
          onBlur={() => setFocused(null)}
        />
      ))}
      <motion.select
        {...(fadeIn(0.54) as any)}
        style={{ ...inputStyle("tratamiento"), cursor: "pointer", appearance: "none" as const, WebkitAppearance: "none" as const }}
        onFocus={() => setFocused("tratamiento")}
        onBlur={() => setFocused(null)}
      >
        <option value="">Tratamiento de interés</option>
        {SERVICES.map((s) => (
          <option key={s.name} value={s.name} style={{ background: C.bg }}>
            {s.name}
          </option>
        ))}
      </motion.select>
      <SubmitButton />
    </div>
  )
}

function SubmitButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.button
      {...(fadeIn(0.64) as any)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...F.jakarta,
        fontSize: "0.72rem",
        fontWeight: 500,
        color: "#fff",
        background: hovered ? C.accentHover : C.accent,
        border: "none",
        borderRadius: 10,
        padding: "13px 0",
        width: "100%",
        cursor: "pointer",
        letterSpacing: "0.5px",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 20px rgba(132,181,159,0.3)" : "none",
        transition: "all 220ms",
      }}
    >
      Agendar Cita
    </motion.button>
  )
}

// ─── Hero Image (parallax + blur edge) ───────────────────────────────────────

function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const imgX = useTransform(mouseX, [-1, 1], [-10, 10])
  const imgY = useTransform(mouseY, [-1, 1], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1)
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1)
  }
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        width: "55%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 0,
      }}
    >
      <motion.img
        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=90"
        alt="Consultorio Clínica Bes"
        loading="eager"
        style={{
          x: imgX,
          y: imgY,
          position: "absolute",
          top: "-10px",
          left: "-10px",
          width: "calc(100% + 20px)",
          height: "calc(100% + 20px)",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
      {/* Natural blur fade toward text side */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 120,
          height: "100%",
          background: "linear-gradient(to right, #FFFFFF 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Servicios", section: "servicios" },
  { label: "Equipo", section: "equipo" },
  { label: "Sonrisas", section: "sonrisas" },
  { label: "Contacto", section: "contacto" },
]

function Navbar({
  activeSection,
  scrollTo,
  onReserve,
}: {
  activeSection: string
  scrollTo: (id: string) => void
  onReserve: () => void
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
        background: C.accent,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Logo: tooth icon + brand name */}
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <img
          src="/images/clinica-bes/tooth.svg"
          alt=""
          style={{ height: 28, width: "auto" }}
        />
        <span
          style={{
            ...F.cormorant,
            fontWeight: 500,
            fontSize: "0.9rem",
            color: "#FFFFFF",
            letterSpacing: "0.5px",
            whiteSpace: "nowrap",
          }}
        >
          Clínica Bes
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.section}
            onClick={() => scrollTo(link.section)}
            style={{
              ...F.jakarta,
              fontSize: "0.62rem",
              fontWeight: activeSection === link.section ? 500 : 400,
              color: "#FFFFFF",
              opacity: activeSection === link.section ? 1 : 0.8,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "opacity 200ms",
            }}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* CTA — inverted: white bg, green text */}
      <button
        onClick={onReserve}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          ...F.jakarta,
          fontSize: "0.6rem",
          fontWeight: 500,
          color: C.accent,
          background: btnHovered ? "rgba(255,255,255,0.9)" : "#FFFFFF",
          border: "none",
          borderRadius: 20,
          padding: "6px 14px",
          cursor: "pointer",
          transition: "background 200ms",
        }}
      >
        Agendar Cita
      </button>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ClinicaBesSite({ className }: { className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState("hero")
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
    servicios: useRef<HTMLElement>(null),
    equipo: useRef<HTMLElement>(null),
    sonrisas: useRef<HTMLElement>(null),
    testimonios: useRef<HTMLElement>(null),
    contacto: useRef<HTMLElement>(null),
  }

  // Active section via IntersectionObserver scoped to scroll container
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    const observers: IntersectionObserver[] = []

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (!ref.current) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(key)
        },
        { root: container, threshold: 0.4 }
      )
      obs.observe(ref.current)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
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
      <Navbar
        activeSection={activeSection}
        scrollTo={scrollTo}
        onReserve={() => scrollTo("contacto")}
      />

      {/* ── SECCIÓN 1: HERO ── */}
      <section
        ref={sectionRefs.hero}
        style={{
          minHeight: "calc(100% - 44px)",
          display: "flex",
          flexDirection: isCompact ? "column" : "row",
          alignItems: "center",
          background: C.bg,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Text side */}
        <div style={{ flex: isCompact ? "none" : "0 0 50%", padding: isCompact ? "28px 20px" : "32px 24px 32px 28px", boxSizing: "border-box", position: "relative", zIndex: 1 }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{
              display: "inline-block",
              ...F.jakarta,
              fontSize: "0.52rem",
              color: C.accent,
              background: C.bgTer,
              borderRadius: 12,
              padding: "3px 9px",
              marginBottom: 14,
            }}
          >
            La Paz, B.C.S.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            style={{ ...F.cormorant, fontSize: "2.2rem", fontWeight: 400, color: C.text, margin: "0 0 4px", lineHeight: 1.1 }}
          >
            Tu sonrisa,
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            style={{ ...F.cormorant, fontSize: "2.2rem", fontWeight: 500, fontStyle: "italic", color: C.accent, margin: "0 0 14px", lineHeight: 1.1 }}
          >
            nuestra especialidad.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
            style={{ ...F.jakarta, fontSize: "0.7rem", color: C.textSec, lineHeight: 1.7, maxWidth: 340, margin: "0 0 20px" }}
          >
            Odontología estética de vanguardia en un espacio diseñado para tu
            comodidad. Tecnología de última generación con un toque humano.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.65, ease: EASE }}
            style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
          >
            <HeroButton primary onClick={() => scrollTo("contacto")}>
              Agendar Cita
            </HeroButton>
            <HeroButton primary={false} onClick={() => scrollTo("servicios")}>
              Ver Tratamientos
            </HeroButton>
          </motion.div>
        </div>

        {/* Image side — parallax + blur edge */}
        {!isCompact && <HeroImage />}
        {isCompact && (
          <div style={{ width: "100%", height: 200, position: "relative", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=90"
              alt="Consultorio Clínica Bes"
              loading="eager"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        )}
      </section>

      {/* ── SECCIÓN 2: ESTADÍSTICAS ── */}
      <section
        style={{
          background: C.bgAlt,
          padding: "32px 24px",
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", maxWidth: 680, margin: "0 auto" }}>
          <StatCounter target={2500} prefix="+" suffix="" label="Sonrisas transformadas" delay={0} />
          <div style={{ width: 1, height: 40, backgroundColor: C.border, flexShrink: 0 }} />
          <StatCounter target={15} label="Años de experiencia" delay={0.15} />
          <div style={{ width: 1, height: 40, backgroundColor: C.border, flexShrink: 0 }} />
          <StatCounter target={98} suffix="%" label="Satisfacción de pacientes" delay={0.3} />
          <div style={{ width: 1, height: 40, backgroundColor: C.border, flexShrink: 0 }} />
          <StatCounter target={24} suffix="h" label="Atención de emergencias" delay={0.45} />
        </div>
      </section>

      {/* ── SECCIÓN 3: SERVICIOS ── */}
      <section
        id="servicios"
        ref={sectionRefs.servicios}
        style={{ background: C.bg, padding: "40px 24px" }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <SectionLabel>Nuestros</SectionLabel>
          <SectionTitle>Tratamientos</SectionTitle>
          <AccentLine />
          <div style={{ display: "grid", gridTemplateColumns: isCompact ? "1fr 1fr" : "1fr 1fr 1fr", gap: 12 }}>
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.name} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 4: EQUIPO ── */}
      <section
        id="equipo"
        ref={sectionRefs.equipo}
        style={{ background: C.bgAlt, padding: "40px 24px" }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <SectionLabel>Conoce a tu</SectionLabel>
            <SectionTitle>Equipo</SectionTitle>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AccentLine />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: isCompact ? "column" : "row", gap: 14 }}>
            {TEAM.map((m, i) => (
              <TeamCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 5: GALERÍA SONRISAS ── */}
      <section
        id="sonrisas"
        ref={sectionRefs.sonrisas}
        style={{ background: C.bg, padding: "40px 24px" }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <motion.h2
              {...fadeUp(0, 20)}
              style={{ ...F.cormorant, fontSize: "1.8rem", fontWeight: 500, fontStyle: "italic", color: C.text, margin: 0 }}
            >
              Sonrisas
            </motion.h2>
            <motion.h2
              {...fadeUp(0.1, 20)}
              style={{ ...F.cormorant, fontSize: "1.8rem", fontWeight: 400, color: C.accent, margin: "0 0 18px" }}
            >
              Transformadas
            </motion.h2>
          </div>
          <div style={{ display: "flex", flexDirection: isCompact ? "column" : "row", gap: 14 }}>
            {SMILES.map((s, i) => (
              <SmileCard key={s.label} item={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 6: TESTIMONIOS ── */}
      <section
        style={{ background: C.bgTer, padding: "40px 24px" }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <SectionLabel>Lo que dicen</SectionLabel>
            <SectionTitle>Nuestros Pacientes</SectionTitle>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AccentLine />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: isCompact ? "column" : "row", gap: 14 }}>
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.name} item={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 7: CONTACTO ── */}
      <section
        id="contacto"
        ref={sectionRefs.contacto}
        style={{ background: C.bg, padding: "40px 24px" }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", gap: 28, alignItems: "flex-start" }}>
          {/* Form */}
          <div style={{ flex: "0 0 55%", minWidth: 0 }}>
            <SectionLabel>Agenda tu</SectionLabel>
            <SectionTitle>Primera Cita</SectionTitle>
            <AccentLine />
            <ContactForm />
          </div>

          {/* Info */}
          <div style={{ flex: 1, minWidth: 0, paddingTop: 8 }}>
            <motion.div
              {...fadeUp(0.2)}
              style={{
                background: C.bgAlt,
                borderRadius: 18,
                padding: "18px 16px",
                border: `1px solid ${C.border}`,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 12,
              }}
            >
              {[
                { icon: MapPin, text: "Blvd. Forjadores 2380, La Paz, B.C.S." },
                { icon: Phone, text: "612 XXX XXXX" },
                { icon: Clock, text: "Lun — Vie: 9:00 — 19:00 · Sáb: 9:00 — 14:00" },
                { icon: Mail, text: "citas@clinicabes.com" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, overflow: "hidden" }}>
                  <Icon size={isCompact ? 10 : 13} color={C.accent} style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ ...F.jakarta, fontSize: isCompact ? "0.5rem" : "0.62rem", color: C.textSec, lineHeight: 1.5, overflow: "hidden", textOverflow: "ellipsis" }}>
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              {...fadeUp(0.35)}
              style={{
                background: C.bgTer,
                borderRadius: 14,
                height: 130,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                border: `1px solid ${C.border}`,
                cursor: "pointer",
              }}
            >
              <MapPin size={isCompact ? 14 : 20} color={C.accent} opacity={0.5} />
              <span style={{ ...F.jakarta, fontSize: "0.58rem", color: C.textSec }}>
                Ver en Google Maps
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: C.text,
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <img
          src="/images/clinica-bes/logo.svg"
          alt="Clínica Bes"
          style={{ height: 22, width: "auto", borderRadius: 3, opacity: 0.85 }}
        />
        <span style={{ ...F.jakarta, fontSize: "0.55rem", color: C.textTer }}>
          © 2024 Clínica Bes · La Paz, B.C.S.
        </span>
        <div style={{ display: "flex", gap: 14 }}>
          {["Aviso de Privacidad", "Términos"].map((l) => (
            <span key={l} style={{ ...F.jakarta, fontSize: "0.52rem", color: C.textSec, cursor: "pointer" }}>
              {l}
            </span>
          ))}
        </div>
      </footer>
    </div>
  )
}

// ─── Hero button helper ────────────────────────────────────────────────────────

function HeroButton({
  primary,
  onClick,
  children,
}: {
  primary: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...F.jakarta,
        fontSize: "0.68rem",
        fontWeight: 500,
        color: primary ? "#fff" : C.text,
        background: primary ? (hovered ? C.accentHover : C.accent) : "transparent",
        border: `1px solid ${primary ? "transparent" : C.border}`,
        borderRadius: 22,
        padding: "9px 20px",
        cursor: "pointer",
        transition: "all 220ms",
        boxShadow: primary && hovered ? "0 4px 16px rgba(132,181,159,0.3)" : "none",
      }}
    >
      {children}
    </button>
  )
}
