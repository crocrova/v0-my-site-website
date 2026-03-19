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
  
  // Plans - renamed
  planStandard: { en: 'Standard', es: 'Standard' },
  planPro: { en: 'Pro', es: 'Pro' },
  planEnterprise: { en: 'Enterprise', es: 'Enterprise' },
  
  planStandardDesc: { 
    en: 'A professional landing page. Ideal for businesses starting their digital presence.', 
    es: 'Una landing page profesional. Ideal para negocios que inician su presencia digital.' 
  },
  planProDesc: { 
    en: 'Up to 5 pages. For growing businesses that need a complete website.', 
    es: 'Hasta 5 páginas. Para negocios en crecimiento que necesitan un sitio completo.' 
  },
  planEnterpriseDesc: { 
    en: 'Up to 12 pages. Complete digital experience for established brands.', 
    es: 'Hasta 12 páginas. Experiencia digital completa para marcas establecidas.' 
  },
  
  // Plan features
  featureResponsive: { en: 'Responsive design', es: 'Diseño responsive' },
  featureSEO: { en: 'SEO optimization', es: 'Optimización SEO' },
  featureContact: { en: 'Contact form', es: 'Formulario de contacto' },
  featureMobileFirst: { en: 'Mobile-first', es: 'Mobile-first' },
  
  featureAllStandard: { en: 'Everything in Standard', es: 'Todo lo de Standard' },
  featureFivePages: { en: 'Up to 5 pages', es: 'Hasta 5 páginas' },
  featureBlog: { en: 'Blog or news', es: 'Blog o noticias' },
  featureAnalytics: { en: 'Analytics', es: 'Analytics' },
  
  featureAllPro: { en: 'Everything in Pro', es: 'Todo lo de Pro' },
  featureTwelvePages: { en: 'Up to 12 pages', es: 'Hasta 12 páginas' },
  featureEcommerce: { en: 'E-commerce', es: 'E-commerce' },
  featurePrioritySupport: { en: 'Priority support', es: 'Soporte prioritario' },
  
  contactUs: { en: 'Contact us', es: 'Contáctanos' },
  
  // Contact
  tellUsYourBusiness: { en: 'Tell us your business name', es: 'Cuéntanos el nombre de tu negocio' },
  phonePlaceholder: { en: '+52...', es: '+52...' },
  emailPlaceholder: { en: 'email', es: 'correo' },
  businessTypePlaceholder: { en: 'restaurant, clinic, hotel...', es: 'restaurante, clínica, hotel...' },
  messagePlaceholder: { en: 'Additional message (optional)', es: 'Mensaje adicional (opcional)' },
  start: { en: 'Start', es: 'Empezar' },
  send: { en: 'Send', es: 'Enviar' },
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
