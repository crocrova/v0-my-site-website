'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<string, Record<Language, string>> = {
  // Portfolio
  portfolio: { en: 'Portfolio', es: 'Portafolio' },
  referenceProjects: { en: '5 reference projects', es: '5 proyectos de referencia' },
  back: { en: 'Back', es: 'Volver' },
  portfolioDisclaimer: { 
    en: 'Designed as visual references. We keep our clients\' projects private.', 
    es: 'Diseñados como referencia visual. Los proyectos de nuestros clientes son privados.' 
  },
  
  // Plans
  plans: { en: 'Plans', es: 'Planes' },
  starter: { en: 'Starter', es: 'Starter' },
  standard: { en: 'Standard', es: 'Standard' },
  pro: { en: 'Pro', es: 'Pro' },
  basedOnAnalysis: { en: 'Based on your business analysis', es: 'Basado en el análisis de tu negocio' },
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
  
  // Contact
  tellUsYourBusiness: { en: 'Tell us your name', es: 'Cuéntanos de tu negocio' },
  phonePlaceholder: { en: '+52...', es: '+52...' },
  emailPlaceholder: { en: 'email', es: 'correo' },
  businessTypePlaceholder: { en: 'restaurant, clinic, hotel...', es: 'restaurante, clínica, hotel...' },
  start: { en: 'Start', es: 'Empezar' },
  
  // Portfolio subtitles
  topoSubtitle: { en: 'Technical Photogrammetry · Los Cabos', es: 'Fotogrametría Técnica · Los Cabos' },
  bahiaSubtitle: { en: 'Luxury Real Estate · La Paz', es: 'Bienes Raíces de Lujo · La Paz' },
  clinicaSubtitle: { en: 'Aesthetic Dental Clinic · La Paz', es: 'Clínica Dental Estética · La Paz' },
  cortezaSubtitle: { en: 'Fine Dining · La Paz', es: 'Alta Cocina · La Paz' },
  castilloSubtitle: { en: 'Law Firm · La Paz / Los Cabos', es: 'Despacho Legal · La Paz / Los Cabos' },
  
  // Industries
  surveying: { en: 'Surveying & Tech', es: 'Topografía & Tech' },
  realEstate: { en: 'Real Estate', es: 'Bienes Raíces' },
  healthcare: { en: 'Healthcare', es: 'Salud' },
  restaurant: { en: 'Restaurant', es: 'Restaurante' },
  legal: { en: 'Legal', es: 'Legal' },
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
