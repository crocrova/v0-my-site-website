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
    url?: string
  }
}

export const projects: Record<string, ProjectAnalysis> = {
  colucci: {
    slug: 'colucci',
    clientName: 'Colucci',
    colors: {
      background: '#F4ECE1',
      backgroundBlock: '#FAF6EF',
      backgroundDark: '#2D1F14',
      text: '#2D1F14',
      textSecondary: '#6B5A4E',
      textLight: '#F4ECE1',
      accent: '#4D7A38',
      accentHover: '#3D6028',
      accentSecondary: '#6CB8A8',
      border: '#E2D8CC',
    },
    keywords: ['colucci', 'coffee-house', 'brunch', 'comfort-food', 'matcha-2x1', 'neighborhood-spot', 'tacos-guisado'],
    diagnosis: {
      rating: '4.3',
      reviewCount: '460 recomendaciones en Facebook (90%)',
      location: 'Plaza Casa Blanca, Cabo San Lucas',
      address: 'Plaza Casa Blanca local 8, Carretera a Todos los Santos km 6, Brisas del Pacífico, Cabo San Lucas, B.C.S.',
      phone: '+52 624 172 5848',
      hours: 'Lunes a sábado: 7:00 AM – 10:00 PM · Domingo: No confirmado',
      instagram: '@coluccicafe',
      instagramFollowers: 'No encontrado',
      instagramQuality: '7/10',
      website: 'Sin sitio web',
      websiteNotes: [
        'No existe dominio propio',
        'Presencia solo en Uber Eats, Facebook, Instagram y directorios',
        'Sin menú digital unificado en su propia plataforma',
      ],
      positiveQuotes: [
        '"Los aromas y sabores del café dentro de una taza… en Colucci Cafe tenemos el MATCHA al 2x1"',
        '"Y tú ya probaste los tacos de guisado!!! Todos los días desde las 7am a las 10pm."',
        '"#coluccicafecomoentucasa — ambiente hogareño y cómodo"',
      ],
      negativePoints: [
        'Sin casa digital propia donde ver menú completo, promos y ubicación en un solo lugar',
        'Feed de Instagram algo heterogéneo visualmente',
        'Saturación de info de promos sin un centro claro',
      ],
      clientKeywords: ['café', 'matcha', '2x1', 'tacos de guisado', 'como en casa', 'desayuno', 'brunch'],
      googleMaps: 'Perfil completo con fotos y horarios. Rating 4.3/5',
      facebook: 'Activo — rating 4.5, 90% recomendación, 460+ reseñas. Posts regulares en 2026.',
      otherPlatforms: [
        'Uber Eats — menú completo con precios',
        'Reservándonos / Sabores Locales — ficha con descripción',
        'Booked AI — ficha con rating y horarios',
      ],
    },
    visualProposal: {
      palette: [
        { name: 'Verde Barrio', hex: '#4D7A38', role: 'Acento primario', emotion: 'Vida, frescura, identidad' },
        { name: 'Crema Casa', hex: '#F4ECE1', role: 'Fondo principal', emotion: 'Calidez, hogar, bienvenida' },
        { name: 'Café Oscuro', hex: '#2D1F14', role: 'Texto y fondos oscuros', emotion: 'Profundidad, café, seriedad cálida' },
        { name: 'Menta Fresca', hex: '#6CB8A8', role: 'Acento secundario', emotion: 'Frescura, matcha, alegría' },
        { name: 'Salmón Cálido', hex: '#D4857A', role: 'Detalle humano', emotion: 'Cercanía, calidez, artesanal' },
        { name: 'Matcha Verde', hex: '#8AB87A', role: 'Highlight de promo', emotion: 'Frescura, salud, signature' },
      ],
      typography: {
        heading: 'Nunito',
        body: 'Inter',
        accent: 'Caveat',
        description:
          'Nunito redondeada y amigable para títulos — captura el mood warm del espacio. Inter para cuerpo legible en menú y datos. Caveat handwritten para taglines y frases, como los pizarrones escritos a mano del local.',
      },
      mood: {
        words: ['Ecléctico', 'Vivo', 'Barrio'],
        description:
          'Un café con alma y carácter propio. El espacio físico es caos organizado y querible: muros verde intenso, mural pop-art, sillones barrocos y pizarrones escritos a mano. La web debe sentirse así: colorida, personal, nunca genérica.',
        reference:
          'La propuesta recoge la energía del letrero rosa del local: "Café / Líquido color tierra que sabe a cielo". Un sitio que huele a café y que hace querer ir ese mismo día.',
      },
      proposedElements: {
        buttons:
          'Fondo verde #4D7A38, texto blanco, border-radius 9999px (pill shape). Hover: escala suave 1.03 + sombra verde. Sin bordes rígidos.',
        lighting:
          'Iluminación cálida natural. Sin efectos de spotlight ni neón. Fondos crema con sombras suaves. El verde actúa como color "encendido".',
        animations:
          'Fade-in con slide-up al hacer scroll (stagger 0.08s). Hover con scale(1.03). Transiciones cálidas, directas, no cinematicas. Energía de barrio.',
        layout:
          'One-page scroll vertical de 4 secciones. Hero a pantalla completa. Menú en grid de cards. Sección concepto con texto e imagen. Cierre con ubicación y CTA WhatsApp.',
      },
      webType: 'One-page scroll corto (4 secciones)',
    },
    logoUrl: '/images/proyectos/colucci/logo.png',
    structureProposal: {
      sitemap: [
        { name: 'Inicio', description: 'Hero con tagline y CTAs principales. Primera impresión del café.', icon: 'Home' },
        { name: 'Menú', description: 'Bebidas calientes, frappes, waffles, desayunos, tacos de guisado. Menú digital completo.', icon: 'UtensilsCrossed' },
        { name: 'Promociones', description: 'Matcha 2x1, frappe del día, talleres y eventos del café.', icon: 'Tag' },
        { name: 'Sobre Colucci', description: '"Como en casa" — historia, concepto y espíritu del lugar.', icon: 'Heart' },
        { name: 'Ubicación & Horarios', description: 'Plaza Casa Blanca, mapa, horarios y cómo llegar desde Cabo.', icon: 'MapPin' },
        { name: 'Contacto', description: 'WhatsApp directo, redes sociales y pedidos a domicilio.', icon: 'MessageCircle' },
      ],
      objectives: [
        'Menú digital propio — Mostrar toda la carta sin depender de Uber Eats, siempre actualizada y con identidad de la marca.',
        'Centralizar info clave — Horarios, ubicación y promos en un solo lugar accesible en segundos.',
        'Comunicar el concepto "como en casa" — La web debe transmitir la calidez del espacio antes de que el cliente llegue.',
        'Captar búsquedas locales — SEO básico para "café Cabo San Lucas Brisas del Pacífico / Casa Blanca".',
        'Calendario de promos y eventos — Matcha 2x1, talleres y especiales del día siempre visibles y actualizables.',
      ],
      specialFeatures: [
        'Menú digital completo — Bebidas calientes, frappes, waffles, desayunos, tacos y postres con precios. Sin depender de Uber Eats.',
        'Badge 2x1 destacado — La promo de frappe aparece prominente en menú y hero, con diseño que llama a la acción.',
        'Botón WhatsApp directo — Pedidos y preguntas sin fricción, desde cualquier sección de la web.',
        'Agenda de eventos — Talleres de pintura y promos especiales actualizables desde el mismo sitio.',
      ],
      mainAdvantage:
        'Colucci ya tiene lo más difícil: una comunidad local fiel, 460+ recomendaciones, 4.3–4.5 de rating y un concepto único que ninguna cadena puede replicar. "Como en casa" no es un slogan — es lo que dicen sus clientes. Una web propia lleva ese espíritu al mundo digital y convierte a cada persona que busca "café en Cabo" en un cliente nuevo.',
      competitors: [
        {
          name: 'London Bistro & Café',
          hasWebsite: false,
          digitalScore: 8,
          betterThan: 'Contenido más aspiracional e instagrameable, enfoque en experiencia specialty',
          worseThan: 'Tu oportunidad: Colucci tiene mayor volumen de reseñas y el diferencial de tacos de guisado + café diario que London no ofrece',
        },
        {
          name: 'Starbucks Cabo San Lucas',
          hasWebsite: true,
          digitalScore: 9,
          betterThan: 'Marca global, app, programa de lealtad y presencia digital masiva',
          worseThan: 'Tu oportunidad: Colucci ofrece identidad local, tacos de guisado, matcha 2x1 y ese "como en casa" que ninguna cadena puede forzar',
        },
        {
          name: 'Cafés locales Brisas del Pacífico',
          hasWebsite: false,
          digitalScore: 6,
          betterThan: 'Algunos tienen feed de Instagram más cohesivo o se especializan en pastelería',
          worseThan: 'Tu oportunidad: Colucci los supera en reseñas (460+), visibilidad en Uber Eats y en la amplitud del menú',
        },
      ],
    },
    preview: {
      isUnlocked: true,
      siteComponentName: 'ColucciWeb',
      url: '/proyectos/colucci/web',
    },
  },
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
