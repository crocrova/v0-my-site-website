'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  portfolio: { en: 'Portfolio', es: 'Portafolio' },
  plans: { en: 'Plans', es: 'Planes' },
  contact: { en: 'Contact', es: 'Contacto' },
  home: { en: 'Home', es: 'Inicio' },
  back: { en: 'Back', es: 'Volver' },

  // Portfolio
  web: { en: 'Web', es: 'Web' },
  mobile: { en: 'Mobile', es: 'Móvil' },
  portfolioDisclaimer: {
    en: 'Visual reference · Client projects remain private',
    es: 'Referencia visual · Los proyectos de clientes son privados',
  },

  // Project labels
  topoLabel: { en: 'Photogrammetry · Los Cabos', es: 'Fotogrametría · Los Cabos' },
  bahiaLabel: { en: 'Real Estate · La Paz', es: 'Bienes Raíces · La Paz' },
  clinicaLabel: { en: 'Dental Clinic · La Paz', es: 'Clínica Dental · La Paz' },
  cortezaLabel: { en: 'Fine Dining · La Paz', es: 'Alta Cocina · La Paz' },
  granoLabel: { en: 'Specialty Coffee · La Paz', es: 'Café de Especialidad · La Paz' },

  // Project subtitles for detail
  topoSubtitle: { en: 'Technical Photogrammetry · Los Cabos', es: 'Fotogrametría Técnica · Los Cabos' },
  bahiaSubtitle: { en: 'Luxury Real Estate · La Paz', es: 'Bienes Raíces de Lujo · La Paz' },
  clinicaSubtitle: { en: 'Aesthetic Dental · La Paz', es: 'Dental Estética · La Paz' },
  cortezaSubtitle: { en: 'Fine Dining · La Paz', es: 'Alta Cocina · La Paz' },
  granoSubtitle: { en: 'Specialty Coffee · La Paz', es: 'Café de Especialidad · La Paz' },

  // Plans (renamed: Standard, Pro, Enterprise)
  standard: { en: 'Standard', es: 'Standard' },
  pro: { en: 'Pro', es: 'Pro' },
  enterprise: { en: 'Enterprise', es: 'Enterprise' },

  standardDesc: {
    en: 'A professional landing page.',
    es: 'Una landing page profesional.',
  },
  proDesc: {
    en: 'Up to 5 pages for growing businesses.',
    es: 'Hasta 5 páginas para negocios en crecimiento.',
  },
  enterpriseDesc: {
    en: 'Up to 12 pages. Complete digital experience.',
    es: 'Hasta 12 páginas. Experiencia digital completa.',
  },

  // Plan features — Standard
  standardFeature1: { en: 'Responsive design', es: 'Diseño responsive' },
  standardFeature2: { en: 'SEO optimization', es: 'Optimización SEO' },
  standardFeature3: { en: 'Contact form', es: 'Formulario de contacto' },
  standardFeature4: { en: 'Mobile-first', es: 'Mobile-first' },

  // Plan features — Pro
  proFeature1: { en: 'Everything in Standard', es: 'Todo lo de Standard' },
  proFeature2: { en: 'Up to 5 pages', es: 'Hasta 5 páginas' },
  proFeature3: { en: 'Blog or news section', es: 'Blog o noticias' },
  proFeature4: { en: 'Analytics', es: 'Analytics' },

  // Plan features — Enterprise
  enterpriseFeature1: { en: 'Everything in Pro', es: 'Todo lo de Pro' },
  enterpriseFeature2: { en: 'Up to 12 pages', es: 'Hasta 12 páginas' },
  enterpriseFeature3: { en: 'E-commerce', es: 'E-commerce' },
  enterpriseFeature4: { en: 'Priority support', es: 'Soporte prioritario' },

  // Contact actions
  contactUs: { en: 'Contact us', es: 'Contáctanos' },
  start: { en: 'Start', es: 'Empezar' },
  send: { en: 'Send', es: 'Enviar' },

  // Contact form
  tellUsYourBusiness: { en: 'Tell us your business name', es: 'Cuéntanos el nombre de tu negocio' },
  phonePlaceholder: { en: '+52...', es: '+52...' },
  emailPlaceholder: { en: 'email', es: 'correo' },
  businessTypePlaceholder: { en: 'restaurant, clinic, hotel...', es: 'restaurante, clínica, hotel...' },
  messagePlaceholder: { en: 'Optional message...', es: 'Mensaje opcional...' },

  // Info block
  creativeDirector: { en: 'Creative Director', es: 'Director Creativo' },

  // Legacy keys kept for compatibility
  requestAnalysis: { en: 'Contact us', es: 'Contáctanos' },

  // Project analysis — navbar
  diagnosis: { en: 'Diagnosis', es: 'Diagnóstico' },
  visualProposal: { en: 'Visual Proposal', es: 'Propuesta Visual' },
  structure: { en: 'Structure', es: 'Estructura' },

  // Project analysis — grid blocks
  digitalPresence: { en: 'Current digital presence', es: 'Presencia digital actual' },
  howItFeels: { en: 'How it feels · How it looks', es: 'Cómo se siente · Cómo se ve' },
  sitemapGoals: { en: 'Sitemap · Goals · Advantage', es: 'Sitemap · Objetivos · Ventaja' },
  tapToDiscover: { en: 'Tap to discover', es: 'Toca para descubrir' },

  // Project analysis — diagnosis view
  diagAddress: { en: 'Address', es: 'Dirección' },
  diagPhone: { en: 'Phone', es: 'Teléfono' },
  diagHours: { en: 'Hours', es: 'Horarios' },
  diagGoogleMaps: { en: 'Google Maps', es: 'Google Maps' },
  diagRating: { en: 'Google Rating', es: 'Rating Google' },
  diagReviews: { en: 'reviews', es: 'reseñas' },
  diagFollowers: { en: 'Followers', es: 'Seguidores' },
  diagQuality: { en: 'Quality', es: 'Calidad' },
  diagFacebook: { en: 'Facebook', es: 'Facebook' },
  diagCustomerSay: { en: 'What your customers say', es: 'Lo que dicen tus clientes' },
  diagWebPresence: { en: 'Web Presence', es: 'Presencia Web' },
  diagNoWebsite: { en: 'No web presence', es: 'Sin presencia web' },
  diagOpportunity: { en: 'Clear opportunity for digital differentiation', es: 'Oportunidad clara de diferenciación digital' },

  // Project analysis — visual proposal view
  paletteTitle: { en: 'Color Palette', es: 'Paleta de Color' },
  typographyTitle: { en: 'Type System', es: 'Sistema Tipográfico' },
  elementsTitle: { en: 'Proposed Visual Elements', es: 'Elementos Visuales Propuestos' },
  previewTitle: { en: 'Web Preview', es: 'Preview Web' },
  tabPalette: { en: 'Palette', es: 'Paleta' },
  tabTypography: { en: 'Typography', es: 'Tipografía' },
  tabMood: { en: 'Mood', es: 'Mood' },
  tabElements: { en: 'Elements', es: 'Elementos' },
  tabPreview: { en: 'Preview', es: 'Preview Web' },
  typHeadlines: { en: 'HEADLINES', es: 'TITULARES' },
  typBody: { en: 'BODY', es: 'CUERPO' },
  typAccent: { en: 'ACCENT', es: 'ACENTO' },
  typHeadlinesDesc: { en: 'Used in titles, section names and featured elements. Conveys elegance and editorial authority.', es: 'Se utiliza en títulos, nombres de secciones y elementos destacados. Transmite elegancia y autoridad editorial.' },
  typBodyDesc: { en: 'Used in paragraphs, descriptions, buttons and navigation. Prioritizes readability and visual clarity.', es: 'Se utiliza en párrafos, descripciones, botones y navegación. Prioriza legibilidad y limpieza visual.' },
  typAccentDesc: { en: 'Used in emphasis elements, labels and technical details. Adds typographic contrast.', es: 'Se utiliza en elementos de énfasis, etiquetas y detalles técnicos. Añade contraste tipográfico.' },
  elemButtons: { en: 'Buttons', es: 'Botones' },
  elemLighting: { en: 'Lighting', es: 'Iluminación' },
  elemAnimations: { en: 'Animations', es: 'Animaciones' },
  elemSiteType: { en: 'Site type', es: 'Tipo de sitio' },
  elemSectionNote: { en: 'each section = 100vh', es: 'cada sección = 100vh' },
  moodReference: { en: 'Reference: ', es: 'Referencia: ' },
  previewInDev: { en: 'In development', es: 'En desarrollo' },
  previewBuilding: { en: 'Your personalized site is being built.', es: 'Tu sitio personalizado se está construyendo.' },
  previewAccess: { en: 'You will receive access for review when the project starts.', es: 'Recibirás acceso para revisión al iniciar el proyecto.' },
  previewAvailable: { en: 'Site available', es: 'Sitio disponible' },

  // Project analysis — structure view
  tabSitemap: { en: 'Sitemap', es: 'Sitemap' },
  tabObjectives: { en: 'Objectives', es: 'Objetivos' },
  tabFeatures: { en: 'Differentiators', es: 'Diferenciadores' },
  tabAdvantage: { en: 'Your Advantage', es: 'Tu Ventaja' },
  tabCompetitors: { en: 'Competition', es: 'Competencia' },
  sitemapTitle: { en: 'Site Architecture', es: 'Arquitectura del Sitio' },
  objectivesTitle: { en: 'Digital Impact', es: 'Impacto Digital' },
  featuresTitle: { en: 'Differentiators', es: 'Diferenciadores' },
  advantageLabel: { en: 'Your Strength', es: 'Tu Fortaleza' },
  competitorsTitle: { en: 'Competitive Landscape', es: 'Panorama Competitivo' },
  competitorStrength: { en: 'Their digital strength:', es: 'Su fortaleza digital:' },
  competitorOpportunity: { en: 'Your opportunity:', es: 'Tu oportunidad:' },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
