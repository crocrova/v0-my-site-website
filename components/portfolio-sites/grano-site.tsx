'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronRight, ChevronLeft, MapPin, Clock, Instagram } from 'lucide-react'

// ─── Palette ──────────────────────────────────────────────────────────────────
const bgColor       = '#FAF6F1'
const bgDark        = '#2C1810'
const accent        = '#C67C4E'
const accentLight   = '#D4A574'
const textColor     = '#1a1008'
const muted         = '#8B7058'
const cream         = '#F3ECE2'
const white         = '#FFFEFA'

// ─── Data ─────────────────────────────────────────────────────────────────────
const HORARIO = [
  { day: 'Lun–Vie',  hours: '07–21' },
  { day: 'Sábado',   hours: '08–21' },
  { day: 'Domingo',  hours: '09–19' },
]

const FAVORITOS = [
  { name: 'Flat White',          desc: 'Leche oat, doble espresso',        price: '$75' },
  { name: 'Cold Brew Naranja',   desc: 'Macerado 18h, toque cítrico',       price: '$85' },
  { name: 'Pan de Masa Madre',   desc: 'Horneado cada mañana',              price: '$45' },
  { name: 'Cortado Arábica',     desc: 'Origen Oaxaca, tostado medio',      price: '$65' },
  { name: 'Matcha Latte',        desc: 'Ceremonial, leche de avena',        price: '$90' },
]

const REVIEWS = [
  { name: 'Andrea M.',  text: 'El mejor café de La Paz. El ambiente es increíble y el cold brew es adictivo.' },
  { name: 'Carlos R.',  text: 'Café de especialidad de verdad. El flat white con oat milk está perfectamente balanceado.' },
  { name: 'Sofía L.',   text: 'El pan de masa madre con el cortado es mi desayuno favorito de la semana sin duda.' },
  { name: 'Diego V.',   text: 'Finalmente un lugar donde saben de café. Los granos son de altísima calidad.' },
]

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <div style={{
      height: 40,
      minHeight: 40,
      background: bgDark,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
      flexShrink: 0,
    }}>
      {/* Left: brand */}
      <span style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800,
        fontSize: '0.95rem',
        color: white,
        letterSpacing: '0.04em',
      }}>
        GRANO
      </span>

      {/* Center: nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {['Menú', 'Nosotros', 'Visítanos'].map((link, i, arr) => (
          <span key={link} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.6rem',
              fontWeight: 400,
              color: 'rgba(255,254,250,0.65)',
              cursor: 'pointer',
            }}>
              {link}
            </span>
            {i < arr.length - 1 && (
              <span style={{ fontSize: '0.6rem', color: 'rgba(255,254,250,0.3)' }}>·</span>
            )}
          </span>
        ))}
      </div>

      {/* Right: city */}
      <span style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '0.5rem',
        color: 'rgba(139,112,88,0.8)',
        letterSpacing: '0.05em',
      }}>
        La Paz, BCS
      </span>
    </div>
  )
}

// ─── Hero Column ──────────────────────────────────────────────────────────────
function HeroColumn({ panel, setPanel }: { panel: 'main' | 'favoritos'; setPanel: (p: 'main' | 'favoritos') => void }) {
  return (
    <div style={{ flex: '0 0 50%', overflow: 'hidden', position: 'relative', borderRadius: 12 }}>
      <motion.div
        animate={{ x: panel === 'main' ? '0%' : '-50%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', width: '200%', height: '100%' }}
      >
        {/* Panel 1: Main Hero */}
        <div
          onClick={() => setPanel('favoritos')}
          style={{
            width: '50%',
            height: '100%',
            position: 'relative',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=90"
            alt="Coffee"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Dark overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(20,10,5,0.55)',
          }} />

          {/* Content */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            padding: '28px 32px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}>
            {/* Top label */}
            <div style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.5rem',
              fontWeight: 600,
              color: accentLight,
              letterSpacing: '3px',
            }}>
              CAFÉ DE ESPECIALIDAD · LA PAZ, BCS
            </div>

            {/* Middle */}
            <div>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '3.5rem',
                fontWeight: 800,
                color: white,
                letterSpacing: '6px',
                lineHeight: 1,
                marginBottom: 12,
              }}>
                GRANO
              </div>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.65rem',
                color: 'rgba(255,254,250,0.65)',
                lineHeight: 1.65,
                maxWidth: 220,
                marginBottom: 12,
              }}>
                Café de especialidad, ambiente único y repostería artesanal en el corazón de La Paz.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={10} fill={accent} color={accent} />
                  ))}
                </div>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '0.5rem',
                  color: 'rgba(255,254,250,0.5)',
                }}>
                  4.9 · Google Maps
                </span>
              </div>
            </div>

            {/* Bottom hint */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.5rem',
                color: 'rgba(212,165,116,0.6)',
              }}>
                Favoritos
              </span>
              <ChevronRight size={16} color="rgba(212,165,116,0.5)" />
            </div>
          </div>
        </div>

        {/* Panel 2: Favoritos */}
        <div style={{
          width: '50%',
          height: '100%',
          background: bgDark,
          flexShrink: 0,
          padding: '24px 28px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Top bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <button
              onClick={(e) => { e.stopPropagation(); setPanel('main') }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ChevronLeft size={16} color={accentLight} />
            </button>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.5rem',
              fontWeight: 700,
              color: accentLight,
              letterSpacing: '2px',
            }}>
              FAVORITOS
            </span>
          </div>

          {/* Items list */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
            {FAVORITOS.map((item, i) => (
              <div
                key={item.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderBottom: i < FAVORITOS.length - 1 ? '1px solid rgba(255,254,250,0.08)' : 'none',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: white,
                    marginBottom: 2,
                  }}>
                    {item.name}
                  </div>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.55rem',
                    color: '#B8A48E',
                  }}>
                    {item.desc}
                  </div>
                </div>
                <div style={{
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: '0.7rem',
                  color: accentLight,
                  flexShrink: 0,
                  marginLeft: 12,
                }}>
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Horario Block ────────────────────────────────────────────────────────────
function HorarioBlock({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{
      background: bgDark,
      borderRadius: 12,
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      ...style,
    }}>
      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '0.5rem',
        fontWeight: 700,
        color: white,
        letterSpacing: '2px',
        marginBottom: 10,
      }}>
        HORARIO
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
        {HORARIO.map(h => (
          <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.55rem',
              color: 'rgba(255,254,250,0.5)',
            }}>
              {h.day}
            </span>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.55rem',
              fontWeight: 700,
              color: white,
            }}>
              {h.hours}
            </span>
          </div>
        ))}
      </div>

      {/* Open now indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 10 }}>
        <div style={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: '#4ADE80',
          flexShrink: 0,
        }} />
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.5rem',
          color: 'rgba(74,222,128,0.9)',
        }}>
          Abierto ahora
        </span>
      </div>
    </div>
  )
}

// ─── Ubicación Block ──────────────────────────────────────────────────────────
function UbicacionBlock({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{
      background: cream,
      borderRadius: 12,
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      ...style,
    }}>
      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '0.5rem',
        fontWeight: 700,
        color: bgDark,
        letterSpacing: '2px',
        marginBottom: 10,
      }}>
        UBICACIÓN
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5, marginBottom: 4 }}>
        <MapPin size={12} color={accent} style={{ flexShrink: 0, marginTop: 1 }} />
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.6rem',
          fontWeight: 500,
          color: bgDark,
        }}>
          Calle Madero 320
        </span>
      </div>

      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '0.5rem',
        color: muted,
        marginBottom: 8,
        paddingLeft: 17,
      }}>
        Col. Centro, La Paz, BCS
      </div>

      <button style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '0.45rem',
        color: muted,
        border: '1px solid #E8DDD0',
        borderRadius: 6,
        padding: '4px 8px',
        background: 'none',
        cursor: 'pointer',
        alignSelf: 'flex-start',
        marginTop: 8,
      }}>
        VER EN MAPS →
      </button>
    </div>
  )
}

// ─── Reviews Block ────────────────────────────────────────────────────────────
function ReviewsBlock({ reviewIndex, style }: { reviewIndex: number; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: white,
      borderRadius: 12,
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      ...style,
    }}>
      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '0.5rem',
        fontWeight: 700,
        color: bgDark,
        letterSpacing: '2px',
        marginBottom: 10,
        flexShrink: 0,
      }}>
        RESEÑAS
      </div>

      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', minHeight: 0 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={reviewIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <div style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={10} fill={accent} color={accent} />
              ))}
            </div>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.62rem',
              color: bgDark,
              lineHeight: 1.6,
              fontStyle: 'italic',
              flex: 1,
              overflow: 'hidden',
              margin: 0,
            }}>
              &ldquo;{REVIEWS[reviewIndex].text}&rdquo;
            </p>
            <div style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.6rem',
              fontWeight: 600,
              color: muted,
              flexShrink: 0,
            }}>
              — {REVIEWS[reviewIndex].name}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', gap: 4, marginTop: 8, flexShrink: 0 }}>
        {REVIEWS.map((_, i) => (
          <div
            key={i}
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: i === reviewIndex ? accent : '#E8DDD0',
              transition: 'background 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Instagram Block ──────────────────────────────────────────────────────────
const INSTAGRAM_IMGS = [
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&q=80',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=200&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&q=80',
  'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=200&q=80',
]

function InstagramBlock({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{
      background: bgDark,
      borderRadius: 12,
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      ...style,
    }}>
      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: '0.5rem',
        fontWeight: 700,
        color: 'rgba(255,254,250,0.4)',
        letterSpacing: '2px',
        marginBottom: 10,
        flexShrink: 0,
      }}>
        INSTAGRAM
      </div>

      {/* 2x2 grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 4,
        flex: 1,
        minHeight: 0,
      }}>
        {INSTAGRAM_IMGS.map((src, i) => (
          <div
            key={i}
            style={{
              aspectRatio: '1',
              borderRadius: 6,
              overflow: 'hidden',
            }}
          >
            <img
              src={src}
              alt={`Instagram ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      {/* Handle */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        marginTop: 8,
        flexShrink: 0,
      }}>
        <Instagram size={12} color="rgba(255,254,250,0.5)" />
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.5rem',
          color: 'rgba(255,254,250,0.5)',
        }}>
          @grano.lapaz
        </span>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function GranoSite() {
  const [panel, setPanel] = useState<'main' | 'favoritos'>('main')
  const [reviewIndex, setReviewIndex] = useState(0)
  const [isCompact, setIsCompact] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  // ResizeObserver for compact mode
  useEffect(() => {
    const ro = new ResizeObserver(entries => {
      setIsCompact(entries[0].contentRect.width < 500)
    })
    if (rootRef.current) ro.observe(rootRef.current)
    return () => ro.disconnect()
  }, [])

  // Review carousel interval
  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex(i => (i + 1) % REVIEWS.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      ref={rootRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: bgColor,
        overflow: 'hidden',
      }}
    >
      <Navbar />

      {isCompact ? (
        /* ── Mobile / Compact layout ── */
        <div style={{
          flex: 1,
          overflowY: 'scroll',
          background: bgColor,
          scrollbarWidth: 'none',
          minHeight: 0,
        }}>
          {/* Hero */}
          <div style={{ height: 260, overflow: 'hidden', position: 'relative', margin: 6, borderRadius: 12 }}>
            <motion.div
              animate={{ x: panel === 'main' ? '0%' : '-50%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', width: '200%', height: '100%' }}
            >
              {/* Panel 1 */}
              <div
                onClick={() => setPanel('favoritos')}
                style={{ width: '50%', height: '100%', position: 'relative', cursor: 'pointer', flexShrink: 0 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=90"
                  alt="Coffee"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,10,5,0.55)' }} />
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 2,
                  padding: '20px 20px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  boxSizing: 'border-box',
                }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.5rem', fontWeight: 600, color: accentLight, letterSpacing: '2px' }}>
                    CAFÉ DE ESPECIALIDAD · LA PAZ, BCS
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '3rem', fontWeight: 800, color: white, letterSpacing: '4px', lineHeight: 1, marginBottom: 8 }}>
                      GRANO
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ display: 'flex', gap: 2 }}>
                        {[1,2,3,4,5].map(i => <Star key={i} size={10} fill={accent} color={accent} />)}
                      </div>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.5rem', color: 'rgba(255,254,250,0.5)' }}>4.9</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.5rem', color: 'rgba(212,165,116,0.6)' }}>Favoritos</span>
                    <ChevronRight size={14} color="rgba(212,165,116,0.5)" />
                  </div>
                </div>
              </div>

              {/* Panel 2 */}
              <div style={{
                width: '50%', height: '100%', background: bgDark, flexShrink: 0,
                padding: '20px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <button onClick={(e) => { e.stopPropagation(); setPanel('main') }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}>
                    <ChevronLeft size={16} color={accentLight} />
                  </button>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.5rem', fontWeight: 700, color: accentLight, letterSpacing: '2px' }}>FAVORITOS</span>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  {FAVORITOS.map((item, i) => (
                    <div key={item.name} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      paddingTop: 8, paddingBottom: 8,
                      borderBottom: i < FAVORITOS.length - 1 ? '1px solid rgba(255,254,250,0.08)' : 'none',
                    }}>
                      <div>
                        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.75rem', fontWeight: 500, color: white, marginBottom: 2 }}>{item.name}</div>
                        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.5rem', color: '#B8A48E' }}>{item.desc}</div>
                      </div>
                      <div style={{ fontFamily: "var(--font-space-mono), monospace", fontSize: '0.65rem', color: accentLight, marginLeft: 10 }}>{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Horario + Ubicacion row */}
          <div style={{ display: 'flex', gap: 6, padding: '0 6px' }}>
            <HorarioBlock style={{ flex: 1 }} />
            <UbicacionBlock style={{ flex: 1 }} />
          </div>

          {/* Reviews */}
          <div style={{ padding: '6px 6px 0' }}>
            <ReviewsBlock reviewIndex={reviewIndex} style={{ minHeight: 140 }} />
          </div>

          {/* Instagram */}
          <div style={{ padding: '6px 6px 6px' }}>
            <InstagramBlock />
          </div>
        </div>
      ) : (
        /* ── Desktop layout ── */
        <div style={{
          flex: 1,
          display: 'flex',
          gap: 6,
          padding: 6,
          minHeight: 0,
        }}>
          {/* Col 1: Hero (50%) */}
          <HeroColumn panel={panel} setPanel={setPanel} />

          {/* Col 2: 25% */}
          <div style={{ flex: '0 0 calc(25% - 4px)', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <HorarioBlock style={{ flex: '0 0 40%', minHeight: 0 }} />
            <ReviewsBlock reviewIndex={reviewIndex} style={{ flex: 1, minHeight: 0 }} />
          </div>

          {/* Col 3: 25% */}
          <div style={{ flex: '0 0 calc(25% - 4px)', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <UbicacionBlock style={{ flex: '0 0 35%', minHeight: 0 }} />
            <InstagramBlock style={{ flex: 1, minHeight: 0 }} />
          </div>
        </div>
      )}
    </div>
  )
}
