'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Clock, Phone, MessageCircle, ChevronDown } from 'lucide-react'

// Brand colors — NOT MY.SITE colors
const C = {
  darkGreen: '#1A3D12',
  green: '#4D7A38',
  teal: '#6CB8A8',
  cream: '#F4ECE1',
  dark: '#2D1F14',
  matcha: '#8AB87A',
  white: '#FFFFFF',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

const menuCategories = [
  {
    icon: '☕',
    title: 'Café & Calientes',
    items: ['Americano $40', 'Latte Vainilla $90', 'Cappuccino Irlandés $90', 'Matcha Green Tea $110', 'Chai $90'],
    badge: null,
  },
  {
    icon: '🧋',
    title: 'Frappes',
    items: ['Colucci (choco & menta) $105', 'Milky Way $110', 'Snicker $110', 'Mazapán $100', 'Taro $115', '+ 10 sabores más'],
    badge: '2×1 domingos',
  },
  {
    icon: '🧇',
    title: 'Waffles & Hotcakes',
    items: ['Waffle Original $120', 'Waffle con Fruta $170', 'Waffle Mañanero $190', 'Hotcakes de Día $165', 'Hotcakes Monkey $145'],
    badge: null,
  },
  {
    icon: '🌮',
    title: 'Tacos de Guisado',
    items: ['Todos los días 7am – 10pm', 'Desayuno, comida y cena', 'La estrella del menú', '#coluccicafecomoentucasa'],
    badge: 'Todo el día',
  },
  {
    icon: '🥐',
    title: 'Croissantería',
    items: ['Croissant de Almendra $65', 'Relleno de Chocolate $55', 'Rol de Canela $50', 'Caña de Crema $45', 'Croissant Jamón y Queso $50'],
    badge: null,
  },
  {
    icon: '🥤',
    title: 'Malteadas & Smoothies',
    items: ['Fresa Refrescante $70', 'Mango Refrescante $65', 'Mango con Chile $60', 'Piña, Albahaca & Jengibre $65', 'Limonada Natural $50'],
    badge: null,
  },
]

export default function ColucciWeb() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: C.cream, color: C.dark, overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Inter:wght@400;500;600&family=Caveat:wght@600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        a { text-decoration: none; }
      `}</style>

      {/* ── NAVBAR ─────────────────────────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(16px, 5vw, 52px)',
        height: 56,
        backgroundColor: 'rgba(26, 61, 18, 0.93)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}>
        <span style={{
          fontFamily: "'Nunito', sans-serif", fontWeight: 800,
          fontSize: '1rem', color: C.white, letterSpacing: '-0.02em',
        }}>
          Colucci Café
        </span>
        <div style={{ display: 'flex', gap: 'clamp(14px, 3vw, 28px)' }}>
          {[
            { label: 'Menú', href: '#menu' },
            { label: 'Nosotros', href: '#nosotros' },
            { label: 'Ubicación', href: '#ubicacion' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 500,
                fontSize: 'clamp(0.72rem, 1.2vw, 0.82rem)',
                color: 'rgba(255,255,255,0.72)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = C.white)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        backgroundColor: C.darkGreen,
        padding: 'clamp(88px, 12vw, 128px) clamp(16px, 5vw, 64px) clamp(48px, 8vw, 80px)',
        position: 'relative', overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: '40vw', height: '40vw', maxWidth: 480, maxHeight: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(77,122,56,0.22) 0%, transparent 70%)',
            top: '-8%', right: '-4%',
          }} />
          <div style={{
            position: 'absolute', width: '30vw', height: '30vw', maxWidth: 360, maxHeight: 360,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(108,184,168,0.12) 0%, transparent 70%)',
            bottom: '12%', left: '3%',
          }} />
          <div style={{
            position: 'absolute', width: '20vw', height: '20vw', maxWidth: 240, maxHeight: 240,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(138,184,122,0.1) 0%, transparent 70%)',
            top: '20%', left: '8%',
          }} />
        </div>

        {/* Mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(14px, 2.5vw, 24px)', position: 'relative', zIndex: 1 }}
        >
          <Image
            src="/images/proyectos/colucci/logo.png"
            alt="Colucci Café"
            width={130}
            height={130}
            style={{
              objectFit: 'contain',
              filter: 'invert(1)',
              width: 'clamp(72px, 14vw, 130px)',
              height: 'auto',
            }}
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
          style={{
            fontFamily: "'Nunito', sans-serif", fontWeight: 800,
            fontSize: 'clamp(0.65rem, 1.2vw, 0.82rem)',
            color: C.teal, letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: 'clamp(8px, 1.5vw, 14px)',
            position: 'relative', zIndex: 1,
          }}
        >
          Plaza Casa Blanca · Cabo San Lucas
        </motion.p>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          style={{
            fontFamily: "'Caveat', cursive", fontWeight: 700,
            fontSize: 'clamp(2.5rem, 7.5vw, 5.8rem)',
            color: C.white, lineHeight: 1.08,
            maxWidth: 720, marginBottom: 'clamp(12px, 2vw, 20px)',
            position: 'relative', zIndex: 1,
          }}
        >
          Tu café de todos los días,<br />como en casa.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 400,
            fontSize: 'clamp(0.88rem, 1.8vw, 1.05rem)',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 520, lineHeight: 1.7,
            marginBottom: 'clamp(24px, 4vw, 38px)',
            position: 'relative', zIndex: 1,
          }}
        >
          Café, matcha 2×1, tacos de guisado todo el día y un espacio donde siempre te sientes bienvenido. Abrimos a las 7am, seis días a la semana.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center',
            position: 'relative', zIndex: 1,
          }}
        >
          <a
            href="#menu"
            style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 700,
              fontSize: 'clamp(0.82rem, 1.5vw, 0.95rem)',
              padding: 'clamp(11px, 1.5vw, 14px) clamp(22px, 3.5vw, 34px)',
              backgroundColor: C.white, color: C.darkGreen,
              borderRadius: 9999, display: 'inline-flex', alignItems: 'center', gap: 8,
              boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)'; }}
          >
            Ver menú
          </a>
          <a
            href="#ubicacion"
            style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 600,
              fontSize: 'clamp(0.82rem, 1.5vw, 0.95rem)',
              padding: 'clamp(11px, 1.5vw, 14px) clamp(22px, 3.5vw, 34px)',
              backgroundColor: 'transparent', color: C.white,
              border: '1.5px solid rgba(255,255,255,0.38)',
              borderRadius: 9999, display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'transform 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.38)'; }}
          >
            Cómo llegar
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={22} color={C.white} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── MENÚ HIGHLIGHTS ────────────────────────────────────────── */}
      <section id="menu" style={{
        padding: 'clamp(52px, 9vw, 100px) clamp(16px, 5vw, 64px)',
        backgroundColor: C.cream,
      }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ maxWidth: 1100, margin: '0 auto' }}
        >
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 52px)' }}>
            <motion.p
              variants={fadeUp}
              custom={0}
              style={{
                fontFamily: "'Nunito', sans-serif", fontWeight: 800,
                fontSize: 'clamp(0.65rem, 1.1vw, 0.78rem)',
                color: C.green, letterSpacing: '0.2em', textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              Menú completo
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              style={{
                fontFamily: "'Nunito', sans-serif", fontWeight: 900,
                fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)',
                color: C.dark, lineHeight: 1.1, marginBottom: 8,
              }}
            >
              ¿Qué te provoca hoy?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              style={{
                fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.85rem, 1.5vw, 0.98rem)',
                color: 'rgba(45,31,20,0.55)', lineHeight: 1.6,
              }}
            >
              Desayunos, café de especialidad, frappes y tacos de guisado. Todo desde las 7am.
            </motion.p>
          </div>

          {/* Cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(240px, 28vw, 310px), 1fr))',
            gap: 'clamp(12px, 2vw, 18px)',
          }}>
            {menuCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                custom={i + 3}
                style={{
                  backgroundColor: C.white,
                  borderRadius: 18,
                  padding: 'clamp(18px, 2.5vw, 26px)',
                  boxShadow: '0 2px 14px rgba(45,31,20,0.055)',
                  border: '1px solid rgba(45,31,20,0.055)',
                  position: 'relative', overflow: 'hidden',
                }}
                whileHover={{ scale: 1.025, boxShadow: '0 8px 32px rgba(45,31,20,0.1)' }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                {/* Badge */}
                {cat.badge && (
                  <span style={{
                    position: 'absolute', top: 14, right: 14,
                    backgroundColor: cat.badge.includes('2×1') ? C.matcha : C.teal,
                    color: C.white,
                    fontFamily: "'Nunito', sans-serif", fontWeight: 800,
                    fontSize: '0.6rem', letterSpacing: '0.05em',
                    padding: '3px 9px', borderRadius: 9999,
                    textTransform: 'uppercase',
                  }}>
                    {cat.badge}
                  </span>
                )}
                <div style={{ fontSize: 'clamp(1.5rem, 3vw, 1.9rem)', marginBottom: 10 }}>{cat.icon}</div>
                <h3 style={{
                  fontFamily: "'Nunito', sans-serif", fontWeight: 800,
                  fontSize: 'clamp(0.98rem, 1.8vw, 1.12rem)',
                  color: C.dark, marginBottom: 10,
                }}>
                  {cat.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {cat.items.map(item => (
                    <li key={item} style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(0.75rem, 1.2vw, 0.82rem)',
                      color: 'rgba(45,31,20,0.58)', lineHeight: 1.4,
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── COMO EN CASA ───────────────────────────────────────────── */}
      <section id="nosotros" style={{
        padding: 'clamp(60px, 10vw, 112px) clamp(16px, 5vw, 64px)',
        backgroundColor: C.green,
        textAlign: 'center',
      }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 700, margin: '0 auto' }}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: 20 }}
          >
            🏡
          </motion.div>
          <motion.blockquote
            variants={fadeUp}
            custom={1}
            style={{
              fontFamily: "'Caveat', cursive", fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3.4rem)',
              color: C.white, lineHeight: 1.15,
              marginBottom: 24, fontStyle: 'normal',
            }}
          >
            "Líquido color tierra<br />que sabe a cielo."
          </motion.blockquote>
          <motion.p
            variants={fadeUp}
            custom={2}
            style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 'clamp(0.88rem, 1.7vw, 1.04rem)',
              color: 'rgba(255,255,255,0.82)', lineHeight: 1.72,
              marginBottom: 40,
            }}
          >
            Somos el café de barrio de Plaza Casa Blanca. El lugar donde desayunas, trabajas, te reúnes y te quedas más de lo que planeabas. Con café de calidad, tacos de guisado todo el día y un espacio que se siente como tu casa.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            custom={3}
            style={{
              display: 'flex', gap: 'clamp(24px, 5vw, 48px)',
              justifyContent: 'center', flexWrap: 'wrap',
            }}
          >
            {[
              { num: '4.5★', label: 'Rating en Facebook' },
              { num: '460+', label: 'Recomendaciones' },
              { num: '7am', label: 'Abrimos cada día' },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Nunito', sans-serif", fontWeight: 900,
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: C.white,
                }}>
                  {stat.num}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.72rem, 1.2vw, 0.8rem)',
                  color: 'rgba(255,255,255,0.65)', marginTop: 2,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── UBICACIÓN & HORARIOS ───────────────────────────────────── */}
      <section id="ubicacion" style={{
        padding: 'clamp(60px, 10vw, 112px) clamp(16px, 5vw, 64px)',
        backgroundColor: C.cream,
      }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            style={{
              fontFamily: "'Nunito', sans-serif", fontWeight: 900,
              fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
              color: C.dark, marginBottom: 10,
            }}
          >
            Ven a vernos
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.86rem, 1.6vw, 0.98rem)',
              color: 'rgba(45,31,20,0.55)', lineHeight: 1.65,
              marginBottom: 36,
            }}
          >
            Estamos en Plaza Casa Blanca, a un lado de Compartamos Banco.<br />Lunes a sábado de 7am a 10pm.
          </motion.p>

          {/* Info card */}
          <motion.div
            variants={fadeUp}
            custom={2}
            style={{
              backgroundColor: C.white, borderRadius: 20,
              padding: 'clamp(22px, 4vw, 34px)',
              boxShadow: '0 2px 20px rgba(45,31,20,0.07)',
              border: '1px solid rgba(45,31,20,0.055)',
              marginBottom: 24,
              textAlign: 'left',
            }}
          >
            {[
              {
                icon: <MapPin size={18} color={C.green} />,
                text: 'Plaza Casa Blanca local 8, Carretera a Todos los Santos km 6, Brisas del Pacífico, Cabo San Lucas, B.C.S.',
              },
              {
                icon: <Clock size={18} color={C.green} />,
                text: 'Lunes a sábado: 7:00 AM – 10:00 PM',
              },
              {
                icon: <Phone size={18} color={C.green} />,
                text: '+52 624 172 5848',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: 'clamp(10px, 1.5vw, 13px) 0',
                  borderBottom: i < 2 ? '1px solid rgba(45,31,20,0.06)' : 'none',
                }}
              >
                <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.82rem, 1.4vw, 0.9rem)',
                  color: C.dark, lineHeight: 1.55,
                }}>
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div variants={fadeUp} custom={3}>
            <a
              href="https://wa.me/526241725848?text=Hola%20Colucci%20Caf%C3%A9!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20promociones."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                backgroundColor: '#25D366', color: C.white,
                fontFamily: "'Nunito', sans-serif", fontWeight: 700,
                fontSize: 'clamp(0.88rem, 1.6vw, 1rem)',
                padding: 'clamp(13px, 2vw, 16px) clamp(26px, 4.5vw, 42px)',
                borderRadius: 9999,
                boxShadow: '0 4px 22px rgba(37,211,102,0.28)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 30px rgba(37,211,102,0.38)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 22px rgba(37,211,102,0.28)'; }}
            >
              <MessageCircle size={18} />
              Escríbenos por WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer style={{
        backgroundColor: C.darkGreen,
        padding: 'clamp(20px, 3vw, 28px) clamp(16px, 5vw, 52px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image
            src="/images/proyectos/colucci/logo.png"
            alt="Colucci"
            width={26}
            height={26}
            style={{ objectFit: 'contain', filter: 'invert(1)', opacity: 0.65 }}
          />
          <span style={{
            fontFamily: "'Nunito', sans-serif", fontWeight: 700,
            fontSize: 'clamp(0.72rem, 1.2vw, 0.82rem)',
            color: 'rgba(255,255,255,0.55)',
          }}>
            Colucci Café · Plaza Casa Blanca · Cabo San Lucas
          </span>
        </div>
        <a
          href="https://mysite.oroz.construction"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 400,
            fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.04em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
        >
          Propuesta por MY.SITE
        </a>
      </footer>
    </div>
  )
}
