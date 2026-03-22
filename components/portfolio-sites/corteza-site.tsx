"use client"

import { useState, useEffect, useRef, createContext, useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"

const CompactCtx = createContext(false)
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MapPin,
  Clock,
  Users,
} from "lucide-react"

// ─── Constants ────────────────────────────────────────────────────────────────

const TOTAL_SCREENS = 6
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const C = {
  bg: "#0A0806",
  bgAlt: "#12100D",
  text: "#F5E6D0",
  accent: "#C89B60",
  accentHover: "#D4A96A",
  textSec: "#8B7355",
  textTer: "#5C4A36",
  line: "rgba(200, 155, 96, 0.15)",
  overlay: "rgba(10, 8, 6, 0.7)",
  card: "rgba(200, 155, 96, 0.05)",
  cardBorder: "rgba(200, 155, 96, 0.1)",
}

const F = {
  cormorant: { fontFamily: "var(--font-cormorant), Georgia, serif" },
  jakarta: { fontFamily: "var(--font-jakarta), sans-serif" },
  mono: { fontFamily: "var(--font-space-mono), monospace" },
}

// ─── Screen Variants ──────────────────────────────────────────────────────────

const screenVariants = {
  enter: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(8px)",
  },
  center: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      opacity: { duration: 0.6, ease: EASE },
      scale: { duration: 0.6, ease: EASE },
      filter: { duration: 0.6, ease: EASE },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)",
    transition: {
      opacity: { duration: 0.4, ease: EASE },
      scale: { duration: 0.4, ease: EASE },
      filter: { duration: 0.4, ease: EASE },
    },
  },
}

// ─── Screen 1: Cinematic Entry ────────────────────────────────────────────────

function Screen1() {
  const isCompact = useContext(CompactCtx)
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <img
        src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1400&q=90"
        alt="Fine dining table"
        loading="eager"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(10,8,6,0.4) 0%, rgba(10,8,6,0.7) 50%, rgba(10,8,6,0.9) 100%)",
        }}
      />

      {/* Lamp effect — conic spotlight falling on title */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0.5 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          top: "-10%",
          left: 0,
          right: 0,
          margin: "0 auto",
          width: "40%",
          height: "70%",
          background:
            "conic-gradient(from 90deg at 50% 0%, transparent 0deg, rgba(200,155,96,0.06) 120deg, rgba(200,155,96,0.12) 180deg, rgba(200,155,96,0.06) 240deg, transparent 360deg)",
          filter: "blur(40px)",
          zIndex: 1,
          pointerEvents: "none",
          transformOrigin: "top center",
        }}
      />

      {/* Decorative giant watermark C */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        style={{
          position: "absolute",
          top: "10%",
          left: "8%",
          ...F.cormorant,
          fontSize: "8rem",
          fontWeight: 300,
          color: C.text,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        C
      </motion.div>

      {/* Center content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          style={{
            ...F.cormorant,
            fontSize: isCompact ? "4.5rem" : "3.5rem",
            fontWeight: 300,
            fontStyle: "italic",
            color: C.text,
            letterSpacing: "6px",
            textAlign: "center",
            margin: 0,
          }}
        >
          Corteza
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 50 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          style={{ height: "1px", backgroundColor: C.accent, margin: "20px auto" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
          style={{
            ...F.jakarta,
            fontSize: "0.7rem",
            fontWeight: 400,
            color: C.accent,
            letterSpacing: "5px",
            textTransform: "uppercase",
            textAlign: "center",
            margin: 0,
          }}
        >
          Cocina de Autor
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1, ease: EASE }}
          style={{
            ...F.jakarta,
            fontSize: "0.6rem",
            fontWeight: 400,
            color: C.textTer,
            letterSpacing: "3px",
            textAlign: "center",
            margin: "8px 0 0",
          }}
        >
          La Paz, B.C.S.
        </motion.p>
      </div>

      {/* Bottom chevron */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={18} color="rgba(200, 155, 96, 0.5)" />
        </motion.div>
      </div>
    </div>
  )
}

// ─── Screen 2: Philosophy ─────────────────────────────────────────────────────

function Screen2() {
  const isCompact = useContext(CompactCtx)
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=90"
        alt="Chef preparing food"
        loading="eager"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(10,8,6,0.65) 0%, rgba(10,8,6,0.88) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 40px 40px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "420px", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
            style={{
              ...F.cormorant,
              fontSize: "5rem",
              fontWeight: 300,
              color: C.accent,
              lineHeight: 0.5,
              marginBottom: "20px",
              userSelect: "none",
            }}
          >
            "
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: EASE }}
            style={{
              ...F.cormorant,
              fontSize: isCompact ? "1.3rem" : "1.05rem",
              fontWeight: 400,
              fontStyle: "italic",
              color: C.text,
              lineHeight: 2,
              letterSpacing: "0.5px",
              margin: 0,
            }}
          >
            Cada platillo nace de la tierra y el mar de Baja California Sur. Honramos lo local,
            lo estacional, lo que la naturaleza nos ofrece cada mañana.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div
              style={{
                width: "30px",
                height: "1px",
                backgroundColor: C.accent,
                margin: "20px auto",
              }}
            />
            <p
              style={{
                ...F.jakarta,
                fontSize: "0.65rem",
                fontWeight: 400,
                color: C.textSec,
                letterSpacing: "3px",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              — Chef Alejandra Ruiz
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// ─── Screen 3: Tasting Menu ───────────────────────────────────────────────────

const MENU_ITEMS = [
  { num: "01", name: "Almeja Chocolata", desc: "pepino de mar · limón real · cilantro" },
  { num: "02", name: "Aguachile de Camarón", desc: "habanero · mango · jícama" },
  { num: "03", name: "Machaca de Marlín", desc: "tortilla de harina · frijol puerco" },
  { num: "04", name: "Costilla de Res 12h", desc: "dátil · chile ancho · piloncillo" },
  { num: "05", name: "Pulpo al Pastor", desc: "piña asada · achiote · cebolla morada" },
  { num: "06", name: "Pitahaya", desc: "mousse de pitahaya · galleta de sal · miel local" },
  { num: "07", name: "Café de Olla", desc: "canela · piloncillo · petit fours de dátil" },
]

function MenuCard({ item, index }: { item: (typeof MENU_ITEMS)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(200, 155, 96, 0.08)" : "rgba(200, 155, 96, 0.03)",
        border: "1px solid rgba(200, 155, 96, 0.08)",
        borderRadius: "6px",
        padding: "9px 11px",
        transition: "background 300ms",
        cursor: "default",
      }}
    >
      <div style={{ ...F.mono, fontSize: "0.5rem", color: C.accent, opacity: 0.5, marginBottom: "2px" }}>
        {item.num}
      </div>
      <div style={{ ...F.cormorant, fontSize: "0.82rem", fontWeight: 400, color: C.text, marginBottom: "2px" }}>
        {item.name}
      </div>
      <div style={{ ...F.jakarta, fontSize: "0.52rem", fontWeight: 400, color: C.textSec }}>
        {item.desc}
      </div>
    </motion.div>
  )
}

function Screen3() {
  const isCompact = useContext(CompactCtx)
  const left = MENU_ITEMS.slice(0, 4)
  const right = MENU_ITEMS.slice(4)

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "56px 20px 18px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ textAlign: "center", marginBottom: "14px", flexShrink: 0 }}
      >
        <div style={{ ...F.cormorant, fontSize: "1.8rem", fontWeight: 300, fontStyle: "italic", color: C.text, letterSpacing: "3px" }}>
          Menú
        </div>
        <div style={{ ...F.cormorant, fontSize: "0.9rem", fontWeight: 300, fontStyle: "italic", color: C.textSec, letterSpacing: "2px" }}>
          Degustación
        </div>
        <div style={{ ...F.mono, fontSize: "0.5rem", color: C.accent, letterSpacing: "4px", textTransform: "uppercase", marginTop: "5px" }}>
          7 Tiempos
        </div>
        <div style={{ width: "28px", height: "1px", background: C.accent, margin: "10px auto 0" }} />
      </motion.div>

      {/* Two-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isCompact ? "1fr" : "1fr 1px 1fr",
          gap: isCompact ? "6px 0" : "0 12px",
          width: "100%",
          maxWidth: isCompact ? "100%" : "500px",
          flex: 1,
          minHeight: 0,
          alignContent: "start",
        }}
      >
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
          {left.map((item, i) => (
            <MenuCard key={item.num} item={item} index={i} />
          ))}
        </div>

        {/* Vertical separator */}
        <div style={{ background: "rgba(200, 155, 96, 0.08)", alignSelf: "stretch" }} />

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
          {right.map((item, i) => (
            <MenuCard key={item.num} item={item} index={i + 0.5} />
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          ...F.jakarta,
          fontSize: "0.48rem",
          color: C.textTer,
          textAlign: "center",
          marginTop: "10px",
          flexShrink: 0,
        }}
      >
        Menú sujeto a disponibilidad estacional
      </motion.p>
    </div>
  )
}

// ─── Screen 4: Chef Specialties ───────────────────────────────────────────────

const SPECIALTIES = [
  {
    img: "https://images.unsplash.com/photo-1535140728325-a4d3707eee61?w=600&q=90",
    title: "Almeja Chocolata",
    sub: "Nuestro plato insignia",
  },
  {
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=90",
    title: "Costilla 12 Horas",
    sub: "Cocción lenta, sabor intenso",
  },
  {
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=90",
    title: "Pulpo al Pastor",
    sub: "Tradición reinventada",
  },
]

function SpecialtyCard({ item, index }: { item: (typeof SPECIALTIES)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: EASE }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(0,0,0,0.4)" }}
      style={{
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid rgba(200, 155, 96, 0.1)",
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        cursor: "default",
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        loading="eager"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(10,8,6,0.92) 0%, transparent 55%)",
        }}
      />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px" }}>
        <div style={{ ...F.cormorant, fontSize: "0.9rem", fontWeight: 400, color: C.text }}>
          {item.title}
        </div>
        <div style={{ ...F.jakarta, fontSize: "0.52rem", color: C.textSec, marginTop: "3px" }}>
          {item.sub}
        </div>
      </div>
    </motion.div>
  )
}

function Screen4() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: C.bgAlt,
        display: "flex",
        flexDirection: "column",
        padding: "56px 5% 20px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ marginBottom: "16px", flexShrink: 0 }}
      >
        <div
          style={{
            ...F.jakarta,
            fontSize: "0.52rem",
            color: C.accent,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Especialidades
        </div>
        <div style={{ ...F.cormorant, fontSize: "1.8rem", fontWeight: 300, fontStyle: "italic", color: C.text }}>
          del Chef
        </div>
      </motion.div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flex: 1,
          minHeight: 0,
        }}
      >
        {SPECIALTIES.map((s, i) => (
          <SpecialtyCard key={s.title} item={s} index={i} />
        ))}
      </div>
    </div>
  )
}

// ─── Screen 5: The Space ──────────────────────────────────────────────────────

function Screen5() {
  const isCompact = useContext(CompactCtx)
  const iconSize = isCompact ? 10 : 13
  const details = [
    { icon: <MapPin size={iconSize} color={C.accent} />, text: "Malecón de La Paz, B.C.S." },
    { icon: <Clock size={iconSize} color={C.accent} />, text: "Miércoles — Domingo · 18:00 — 23:00" },
    { icon: <Users size={iconSize} color={C.accent} />, text: "32 lugares · Solo con reservación" },
  ]

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=90"
        alt="Restaurant interior"
        loading="eager"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(10,8,6,0.92) 0%, rgba(10,8,6,0.5) 50%, rgba(10,8,6,0.72) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          padding: "60px 0 24px 8%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "58%" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div
              style={{
                ...F.jakarta,
                fontSize: "0.52rem",
                color: C.accent,
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              El
            </div>
            <div
              style={{
                ...F.cormorant,
                fontSize: "2.5rem",
                fontWeight: 300,
                fontStyle: "italic",
                color: C.text,
                letterSpacing: "2px",
              }}
            >
              Espacio
            </div>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 30 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            style={{ height: "1px", background: C.accent, margin: "14px 0" }}
          />

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            style={{
              ...F.jakarta,
              fontSize: "0.72rem",
              fontWeight: 400,
              color: C.text,
              lineHeight: 1.8,
              maxWidth: "320px",
              opacity: 0.9,
              margin: 0,
            }}
          >
            Un salón íntimo donde cada mesa tiene vista al malecón de La Paz.
            32 lugares. Sin prisas. Sin ruido. Solo la experiencia.
          </motion.p>

          <div style={{ display: "flex", flexDirection: "column", gap: "11px", marginTop: "22px" }}>
            {details.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease: EASE }}
                style={{ display: "flex", alignItems: "center", gap: "8px", overflow: "hidden" }}
              >
                {d.icon}
                <span style={{ ...F.jakarta, fontSize: isCompact ? "0.5rem" : "0.72rem", fontWeight: 400, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {d.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Screen 6: Reservation ────────────────────────────────────────────────────

function ReserveButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.82 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(135deg, #D4A96A 0%, #E0B97A 100%)"
          : "linear-gradient(135deg, #C89B60 0%, #D4A96A 100%)",
        border: "none",
        borderRadius: "3px",
        padding: "12px 0",
        width: "100%",
        marginTop: "20px",
        ...F.jakarta,
        fontSize: "0.72rem",
        fontWeight: 400,
        color: C.bg,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        cursor: "pointer",
        transform: hovered ? "scale(1.01)" : "scale(1)",
        boxShadow: hovered ? "0 4px 20px rgba(200,155,96,0.28)" : "none",
        transition: "all 300ms",
      }}
    >
      Confirmar Reservación
    </motion.button>
  )
}

const PERSONAS = [2, 3, 4, 5, 6, 7, 8]

function Screen6() {
  const baseInputStyle: React.CSSProperties = {
    border: "none",
    borderBottom: "1px solid rgba(200, 155, 96, 0.2)",
    background: "transparent",
    color: C.text,
    ...F.jakarta,
    fontSize: "0.78rem",
    fontWeight: 400,
    padding: "10px 0",
    width: "100%",
    outline: "none",
    colorScheme: "dark",
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: C.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px 24px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "100%", maxWidth: "340px" }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ textAlign: "center" }}
        >
          <div
            style={{
              ...F.cormorant,
              fontSize: "2.2rem",
              fontWeight: 300,
              fontStyle: "italic",
              color: C.text,
              letterSpacing: "2px",
            }}
          >
            Reservar
          </div>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ height: "1px", background: C.accent, margin: "12px auto" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{
            ...F.jakarta,
            fontSize: "0.68rem",
            color: C.textSec,
            letterSpacing: "1px",
            textAlign: "center",
            margin: "0 0 22px",
          }}
        >
          Una experiencia para recordar
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Nombre */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <input
              type="text"
              placeholder="Nombre"
              style={{ ...baseInputStyle }}
              onFocus={(e) => (e.target.style.borderBottomColor = C.accent)}
              onBlur={(e) => (e.target.style.borderBottomColor = "rgba(200, 155, 96, 0.2)")}
            />
          </motion.div>

          {/* Fecha */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div style={{ ...F.jakarta, fontSize: "0.52rem", color: C.textTer, marginBottom: "4px" }}>
              Fecha
            </div>
            <input
              type="date"
              style={{ ...baseInputStyle }}
              onFocus={(e) => (e.target.style.borderBottomColor = C.accent)}
              onBlur={(e) => (e.target.style.borderBottomColor = "rgba(200, 155, 96, 0.2)")}
            />
          </motion.div>

          {/* Personas */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <select
              style={{
                ...baseInputStyle,
                cursor: "pointer",
                appearance: "none",
                WebkitAppearance: "none",
              }}
              onFocus={(e) => (e.target.style.borderBottomColor = C.accent)}
              onBlur={(e) => (e.target.style.borderBottomColor = "rgba(200, 155, 96, 0.2)")}
            >
              {PERSONAS.map((n) => (
                <option key={n} value={n} style={{ background: C.bg, color: C.text }}>
                  {n} personas
                </option>
              ))}
            </select>
          </motion.div>

          {/* Teléfono */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <input
              type="tel"
              placeholder="+52..."
              style={{ ...baseInputStyle }}
              onFocus={(e) => (e.target.style.borderBottomColor = C.accent)}
              onBlur={(e) => (e.target.style.borderBottomColor = "rgba(200, 155, 96, 0.2)")}
            />
          </motion.div>
        </div>

        <ReserveButton />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.92 }}
          style={{
            ...F.jakarta,
            fontSize: "0.58rem",
            color: C.textTer,
            textAlign: "center",
            marginTop: "14px",
          }}
        >
          WhatsApp: 612 XXX XXXX
        </motion.p>
      </div>
    </div>
  )
}

// ─── Internal Navbar ──────────────────────────────────────────────────────────

function InternalNavbar({
  currentScreen,
  onReserve,
}: {
  currentScreen: number
  onReserve: () => void
}) {
  const [btnHovered, setBtnHovered] = useState(false)
  const showBlur = currentScreen !== 0

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 18px",
        backdropFilter: showBlur ? "blur(12px)" : "none",
        WebkitBackdropFilter: showBlur ? "blur(12px)" : "none",
        background: showBlur ? "rgba(10,8,6,0.3)" : "transparent",
        transition: "all 400ms",
      }}
    >
      <span
        style={{
          ...F.cormorant,
          fontSize: "1rem",
          fontWeight: 300,
          fontStyle: "italic",
          color: C.accent,
          letterSpacing: "2px",
          userSelect: "none",
        }}
      >
        Corteza
      </span>

      <button
        onClick={onReserve}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          ...F.jakarta,
          fontSize: "0.68rem",
          fontWeight: 400,
          color: C.accent,
          border: "1px solid rgba(200,155,96,0.3)",
          padding: "5px 14px",
          borderRadius: "20px",
          background: btnHovered ? "rgba(200,155,96,0.1)" : "transparent",
          cursor: "pointer",
          transition: "background 300ms",
          letterSpacing: "0.5px",
        }}
      >
        Reservar
      </button>
    </div>
  )
}

// ─── Dots Indicator ───────────────────────────────────────────────────────────

function DotsIndicator({
  current,
  total,
  onDotClick,
}: {
  current: number
  total: number
  onDotClick: (i: number) => void
}) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "12px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: "7px",
        zIndex: 50,
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onDotClick(i)}
          animate={{
            width: i === current ? 20 : 8,
            height: 8,
            backgroundColor: i === current ? C.accent : "rgba(200, 155, 96, 0.25)",
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 30 }}
          style={{
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            padding: 0,
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  )
}

// ─── Navigation Arrows ────────────────────────────────────────────────────────

function NavArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right"
  onClick: () => void
  disabled: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const isLeft = direction === "left"

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        [isLeft ? "left" : "right"]: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 6,
        background: "transparent",
        border: "none",
        cursor: disabled ? "default" : "pointer",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        opacity: disabled ? 0 : hovered ? 0.9 : 0.5,
        pointerEvents: disabled ? "none" : "auto",
        transition: "opacity 200ms",
        color: C.accent,
      }}
    >
      {isLeft ? <ChevronLeft size={28} color="currentColor" /> : <ChevronRight size={28} color="currentColor" />}
    </button>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

const SCREENS = [Screen1, Screen2, Screen3, Screen4, Screen5, Screen6]

export default function CortezaSite({ className }: { className?: string }) {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [direction, setDirection] = useState(1)
  const touchStartX = useRef<number | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      setIsCompact(entries[0].contentRect.width < 500)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const navigate = (next: number) => {
    if (next < 0 || next >= TOTAL_SCREENS) return
    setDirection(next > currentScreen ? 1 : -1)
    setCurrentScreen(next)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") navigate(currentScreen + 1)
      if (e.key === "ArrowLeft") navigate(currentScreen - 1)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [currentScreen])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (delta > 50) navigate(currentScreen - 1)
    else if (delta < -50) navigate(currentScreen + 1)
  }

  const CurrentScreen = SCREENS[currentScreen]

  return (
    <CompactCtx.Provider value={isCompact}>
    <div
      ref={rootRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: C.bg,
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Internal navbar — always on top */}
      <InternalNavbar currentScreen={currentScreen} onReserve={() => navigate(5)} />

      {/* Screen content with cinematic transitions */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentScreen}
          custom={direction}
          variants={screenVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ position: "absolute", inset: 0 }}
        >
          <CurrentScreen />
        </motion.div>
      </AnimatePresence>

      {/* Invisible click zones — left half = prev, right half = next */}
      <div
        onClick={() => navigate(currentScreen - 1)}
        style={{
          position: "absolute",
          top: "60px",
          left: 0,
          width: "50%",
          height: "calc(100% - 80px)",
          zIndex: 5,
          cursor: currentScreen > 0 ? "pointer" : "default",
          background: "transparent",
        }}
      />
      <div
        onClick={() => navigate(currentScreen + 1)}
        style={{
          position: "absolute",
          top: "60px",
          right: 0,
          width: "50%",
          height: "calc(100% - 80px)",
          zIndex: 5,
          cursor: currentScreen < TOTAL_SCREENS - 1 ? "pointer" : "default",
          background: "transparent",
        }}
      />

      {/* Navigation UI */}
      <DotsIndicator current={currentScreen} total={TOTAL_SCREENS} onDotClick={navigate} />
      <NavArrow
        direction="left"
        onClick={() => navigate(currentScreen - 1)}
        disabled={currentScreen === 0}
      />
      <NavArrow
        direction="right"
        onClick={() => navigate(currentScreen + 1)}
        disabled={currentScreen === TOTAL_SCREENS - 1}
      />
    </div>
    </CompactCtx.Provider>
  )
}
