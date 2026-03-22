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
