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
    es: 'Referencia visual · Los proyectos de clientes permanecen privados' 
  },
  
  // Project labels
  topoLabel: { en: 'Photogrammetry · Los Cabos', es: 'Fotogrametría · Los Cabos' },
  bahiaLabel: { en: 'Real Estate · La Paz', es: 'Bienes Raíces · La Paz' },
  clinicaLabel: { en: 'Dental Clinic · La Paz', es: 'Clínica Dental · La Paz' },
  cortezaLabel: { en: 'Fine Dining · La Paz', es: 'Alta Cocina · La Paz' },
  castilloLabel: { en: 'Law Firm · La Paz', es: 'Despacho Legal · La Paz' },
  
  // Project subtitles for detail
  topoSubtitle: { en: 'Technical Photogrammetry · Los Cabos', es: 'Fotogrametría Técnica · Los Cabos' },
  bahiaSubtitle: { en: 'Luxury Real Estate · La Paz', es: 'Bienes Raíces de Lujo · La Paz' },
  clinicaSubtitle: { en: 'Aesthetic Dental · La Paz', es: 'Dental Estética · La Paz' },
  cortezaSubtitle: { en: 'Fine Dining · La Paz', es: 'Alta Cocina · La Paz' },
  castilloSubtitle: { en: 'Law Firm · La Paz / Los Cabos', es: 'Despacho Legal · La Paz / Los Cabos' },
  
  // Plans
  starter: { en: 'Starter', es: 'Starter' },
  standard: { en: 'Standard', es: 'Standard' },
  pro: { en: 'Pro', es: 'Pro' },
  starterDesc: { 
    en: 'One powerful landing page. Perfect for businesses starting their digital presence.', 
    es: 'Una landing page profesional. Ideal para negocios que inician su presencia digital.' 
  },
  standardDesc: { 
    en: 'Up to 5 pages. For growing businesses that need a complete website.', 
    es: 'Hasta 5 páginas. Para negocios en crecimiento que necesitan un sitio completo.' 
  },
  proDesc: { 
    en: 'Up to 12 pages. Full digital experience for established brands.', 
    es: 'Hasta 12 páginas. Experiencia digital completa para marcas establecidas.' 
  },
  requestAnalysis: { en: 'Request Analysis', es: 'Solicitar Análisis' },
  
  // Plan features
  starterFeature1: { en: 'Custom responsive design', es: 'Diseño responsive personalizado' },
  starterFeature2: { en: 'SEO optimization', es: 'Optimización SEO' },
  starterFeature3: { en: 'Contact form integration', es: 'Integración de formulario de contacto' },
  starterFeature4: { en: 'Mobile-first approach', es: 'Enfoque mobile-first' },
  
  standardFeature1: { en: 'Everything in Starter', es: 'Todo lo de Starter' },
  standardFeature2: { en: 'Up to 5 unique pages', es: 'Hasta 5 páginas únicas' },
  standardFeature3: { en: 'Blog or news section', es: 'Sección de blog o noticias' },
  standardFeature4: { en: 'Analytics integration', es: 'Integración de analytics' },
  
  proFeature1: { en: 'Everything in Standard', es: 'Todo lo de Standard' },
  proFeature2: { en: 'Up to 12 unique pages', es: 'Hasta 12 páginas únicas' },
  proFeature3: { en: 'E-commerce capabilities', es: 'Capacidades de e-commerce' },
  proFeature4: { en: 'Priority support', es: 'Soporte prioritario' },
  
  // Contact
  tellUsYourBusiness: { en: 'Tell us your name', es: 'Cuéntanos de tu negocio' },
  phonePlaceholder: { en: '+52...', es: '+52...' },
  emailPlaceholder: { en: 'email', es: 'correo' },
  businessTypePlaceholder: { en: 'restaurant, clinic, hotel...', es: 'restaurante, clínica, hotel...' },
  start: { en: 'Start', es: 'Empezar' },
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
