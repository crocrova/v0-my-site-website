export interface ProjectAnalysis {
  slug: string
  clientName: string

  // Paleta completa del cliente
  colors: {
    background: string       // fondo de página ej: #F5ECE1
    backgroundBlock: string  // fondo de bloques ej: #FAF6F0
    backgroundDark: string   // para bloques oscuros ej: #111018
    text: string             // texto principal ej: #2C2924
    textSecondary: string    // texto secundario ej: #8B8070
    textLight: string        // texto claro sobre fondo oscuro ej: #F5ECE1
    accent: string           // acento primario ej: #C8A26A
    accentHover: string      // acento hover ej: #B8925A
    accentSecondary: string  // acento secundario ej: #F2C58A
    border: string           // bordes ej: #E8E3D6
  }

  keywords: string[] // 7 keywords, la primera es el nombre del cliente

  diagnosis: {
    rating: string
    reviewCount: string
    location: string
    address: string
    phone: string
    hours: string
    instagram: string
    instagramFollowers: string
    instagramQuality: string
    website: string
    websiteNotes: string[]
    positiveQuotes: string[]
    negativePoints: string[]
    clientKeywords: string[]
    googleMaps: string
    facebook: string
    otherPlatforms: string[]
  }

  visualProposal: {
    palette: { name: string; hex: string; role: string; emotion: string }[]
    typography: { heading: string; body: string; accent?: string; description: string }
    mood: { words: string[]; description: string; reference: string }
    proposedElements: {
      buttons: string
      lighting: string
      animations: string
      layout: string
    }
    webType: string
  }

  logoUrl: string

  structureProposal: {
    sitemap: { name: string; description: string; icon: string }[]
    objectives: string[]
    specialFeatures: string[]
    mainAdvantage: string
    competitors: {
      name: string
      hasWebsite: boolean
      digitalScore: number
      betterThan: string
      worseThan: string
    }[]
  }

  preview: {
    isUnlocked: boolean
    siteComponentName?: string
  }
}

export const projects: Record<string, ProjectAnalysis> = {
  fermento: {
    slug: 'fermento',
    clientName: 'fermento',
    colors: {
      background: '#F5ECE1',
      backgroundBlock: '#FAF6F0',
      backgroundDark: '#111018',
      text: '#2C2924',
      textSecondary: '#8B8070',
      textLight: '#F5ECE1',
      accent: '#C8A26A',
      accentHover: '#B8925A',
      accentSecondary: '#F2C58A',
      border: '#E8E3D6',
    },
    keywords: ['fermento', 'speakeasy', 'mixology', 'nightlife', 'artwalk', 'craft-cocktails', 'hidden-bar'],
    diagnosis: {
      rating: '4.8',
      reviewCount: '230',
      location: 'Art District, San José del Cabo',
      address: 'Centro Histórico, Gallery District',
      phone: 'No encontrado',
      hours: 'Jueves — Domingo · 19:00 — 02:00',
      instagram: '@fermento.sjd',
      instagramFollowers: '1.5K',
      instagramQuality: '8/10',
      website: 'Sin sitio web',
      websiteNotes: [],
      positiveQuotes: [
        'Ambiente increíble, lugar secreto',
        'Cocteles de autor impresionantes',
        'La mejor experiencia nocturna del Art Walk',
      ],
      negativePoints: [
        'Difícil encontrar información básica online',
        'Menú en enlaces externos (Canva)',
        'Sin presencia en Google Maps / TripAdvisor',
      ],
      clientKeywords: ['ambiente', 'secreto', 'cocteles', 'noche', 'arte'],
      googleMaps: 'Sin ficha optimizada',
      facebook: 'No encontrado',
      otherPlatforms: [],
    },
    visualProposal: {
      palette: [
        { name: 'Medianoche', hex: '#111018', role: 'Fondo principal', emotion: 'Misterio, profundidad' },
        { name: 'Ámbar', hex: '#C8A26A', role: 'Acento primario', emotion: 'Calidez, lujo discreto' },
        { name: 'Luz Cálida', hex: '#F2C58A', role: 'Acento secundario', emotion: 'Invitación, confort' },
        { name: 'Marfil', hex: '#F5ECE1', role: 'Texto y detalles', emotion: 'Elegancia, claridad' },
      ],
      typography: {
        heading: 'Playfair Display',
        body: 'Inter',
        description:
          'Serif elegante para capturar el mood speakeasy. Sans-serif limpia para legibilidad en menú digital y textos informativos.',
      },
      mood: {
        words: ['Secreto', 'Elegante', 'Inmersivo'],
        description:
          'Un sitio que se siente como cruzar la puerta del bar: oscuro, íntimo, con destellos dorados que guían al visitante a descubrir cada sección como quien explora un lugar prohibido.',
        reference:
          'Web inmersiva de una sola página, micro-animaciones suaves tipo fade, fotos a pantalla completa con overlays oscuros, muy poco texto pero cada palabra cuenta.',
      },
      proposedElements: {
        buttons:
          'Bordes dorados con efecto glow sutil al hover. Esquinas apenas redondeadas (4px). Texto uppercase con letter-spacing amplio.',
        lighting:
          'Efecto de spotlight/lamp sobre títulos. Glow dorado suave en elementos interactivos. Gradientes radiales simulando luces de bar.',
        animations:
          'Fade-in lentos y cinemáticos (800ms+). Parallax sutil en imágenes. Transiciones entre secciones tipo cortina teatral.',
        layout:
          'Scroll inmersivo vertical — cada sección ocupa 100vh. Navegación por scroll con snap. La experiencia guía al visitante como un recorrido nocturno.',
      },
      webType: 'Scroll inmersivo vertical',
    },
    logoUrl: '/images/proyectos/fermento/logo.png',
    structureProposal: {
      sitemap: [
        {
          name: 'The Door',
          description: "Hero cinematográfico con la puerta y el espejo. Tagline: 'Behind the mirror the night begins'",
          icon: 'DoorOpen',
        },
        {
          name: 'Our Story',
          description: 'Origen de Fermento. El arte de volver a disfrutar. Bar íntimo en el corazón del Art Walk.',
          icon: 'BookOpen',
        },
        {
          name: 'Drinks',
          description: 'Menú digital integrado. Cocteles por categorías. Accesible por QR desde la mesa.',
          icon: 'Wine',
        },
        {
          name: 'Nights',
          description: 'Art Walk Nights, HUSH (cheese & wine), after dinner, ediciones especiales.',
          icon: 'Sparkles',
        },
        {
          name: 'Find Us',
          description: 'Mapa del Gallery District. Cómo encontrar la puerta. Horarios.',
          icon: 'MapPin',
        },
        {
          name: 'Reserve',
          description: 'WhatsApp directo, formulario de reservación, contacto.',
          icon: 'Calendar',
        },
      ],
      objectives: [
        'Centralizar la experiencia digital — Hoy tus clientes buscan en 3 lugares distintos. Una web lo resuelve todo.',
        'Menú digital integrado con QR — Cada mesa escanea y accede a tu carta directamente en tu sitio.',
        "Posicionar en 'speakeasy San José del Cabo' — Capturar turistas que buscan experiencias exclusivas en Los Cabos.",
        'Reservaciones directas sin intermediarios — WhatsApp integrado desde el sitio, sin comisiones de terceros.',
        'Landing de eventos especiales — HUSH, Art Walk Nights y noches privadas con su propia página actualizable.',
      ],
      specialFeatures: [
        'Menú QR exclusivo — Elimina el Canva actual. Tu carta dentro de tu sitio, siempre actualizada.',
        'Landing de eventos — HUSH, Art Walk Nights y ediciones especiales con su propia página.',
        'WhatsApp Business integrado — Reservaciones directas desde el sitio, sin intermediarios ni comisiones.',
        "SEO para turistas — Optimizado para 'hidden bar Los Cabos', 'speakeasy San José del Cabo'.",
      ],
      mainAdvantage:
        'Fermento ya tiene lo más difícil de construir: una identidad de marca única y una comunidad leal. El siguiente paso natural es llevar esa experiencia al mundo digital — un sitio web que se sienta como cruzar la puerta del bar.',
      competitors: [
        {
          name: 'Sierra de la Laguna Brewery',
          hasWebsite: true,
          digitalScore: 8,
          betterThan: 'Visibilidad en Google y TripAdvisor, reseñas abundantes',
          worseThan: 'No tiene el misterio ni la exclusividad que define a Fermento',
        },
        {
          name: 'Mixology Fusion Bar',
          hasWebsite: false,
          digitalScore: 7,
          betterThan: 'Mayor volumen de reseñas, reconocimiento turístico',
          worseThan: 'Experiencia masiva — Fermento ofrece algo íntimo y curado',
        },
        {
          name: 'Simaruba Rooftop',
          hasWebsite: true,
          digitalScore: 8,
          betterThan: 'Web profesional, reservas integradas, narrativa Art District',
          worseThan: 'Es restaurante — diferente categoría. No compite en la experiencia nocturna',
        },
      ],
    },
    preview: {
      isUnlocked: false,
    },
  },
}
