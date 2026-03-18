'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ArrowLeft, Shield } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Badge } from '@/components/ui/badge'

interface PortfolioProject {
  id: string
  name: string
  subtitleKey: string
  industryKey: string
  logoStyle: string
  cardStyle: {
    bg: string
    padding: string
    border?: string
    titleFont: string
    titleColor: string
    subtitleColor: string
    badgeStyle: string
    imageBg: string
    logoFont: string
    logoColor: string
  }
}

const projects: PortfolioProject[] = [
  {
    id: 'portfolio-1',
    name: 'TOPO',
    subtitleKey: 'topoSubtitle',
    industryKey: 'surveying',
    logoStyle: 'TOPO',
    cardStyle: {
      bg: '#1A1A1A',
      padding: '48px',
      titleFont: 'font-sans font-bold',
      titleColor: '#FFFFFF',
      subtitleColor: '#C8F000',
      badgeStyle: 'bg-[#C8F000] text-[#1A1A1A] border-transparent',
      imageBg: '#2A2A2A',
      logoFont: 'font-sans font-extrabold',
      logoColor: '#C8F000',
    }
  },
  {
    id: 'portfolio-2',
    name: 'Bahía Capital',
    subtitleKey: 'bahiaSubtitle',
    industryKey: 'realEstate',
    logoStyle: 'Bahía Capital',
    cardStyle: {
      bg: '#FAFAF8',
      padding: '48px',
      border: '1px solid #E8E3D6',
      titleFont: 'font-serif font-medium',
      titleColor: '#2D2D2D',
      subtitleColor: '#B8A88A',
      badgeStyle: 'bg-transparent border border-[#B8A88A] text-[#B8A88A]',
      imageBg: '#F0EDE6',
      logoFont: 'font-serif font-semibold italic',
      logoColor: '#B8A88A',
    }
  },
  {
    id: 'portfolio-3',
    name: 'Clínica Bes',
    subtitleKey: 'clinicaSubtitle',
    industryKey: 'healthcare',
    logoStyle: 'Clínica Bes',
    cardStyle: {
      bg: '#FFFFFF',
      padding: '48px',
      border: '1px solid #E8E9EC',
      titleFont: 'font-sans font-semibold',
      titleColor: '#2D2D2D',
      subtitleColor: '#84B59F',
      badgeStyle: 'bg-[#EDF5F0] text-[#84B59F] border-transparent',
      imageBg: '#F5F9F7',
      logoFont: 'font-sans font-medium',
      logoColor: '#84B59F',
    }
  },
  {
    id: 'portfolio-4',
    name: 'Corteza',
    subtitleKey: 'cortezaSubtitle',
    industryKey: 'restaurant',
    logoStyle: 'Corteza',
    cardStyle: {
      bg: '#1C1714',
      padding: '48px',
      titleFont: 'font-serif font-light italic',
      titleColor: '#F5E6D0',
      subtitleColor: '#C89B60',
      badgeStyle: 'bg-[rgba(200,155,96,0.15)] text-[#C89B60] border-transparent',
      imageBg: '#2A2218',
      logoFont: 'font-serif italic',
      logoColor: '#C89B60',
    }
  },
  {
    id: 'portfolio-5',
    name: 'Castillo & Asociados',
    subtitleKey: 'castilloSubtitle',
    industryKey: 'legal',
    logoStyle: 'Castillo & Asociados',
    cardStyle: {
      bg: '#F8F9FC',
      padding: '48px',
      border: '1px solid #D4D8E8',
      titleFont: 'font-sans font-bold',
      titleColor: '#1E2761',
      subtitleColor: '#8890A8',
      badgeStyle: 'bg-[#1E2761] text-white border-transparent',
      imageBg: '#ECEEF5',
      logoFont: 'font-sans font-semibold',
      logoColor: '#1E2761',
    }
  },
]

export function PortfolioBlock() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [visibleCards, setVisibleCards] = useState<string[]>([])
  const { t } = useLanguage()
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!isExpanded) {
      setVisibleCards([])
      return
    }

    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, projects[index].id])
              }, index * 150)
              observer.disconnect()
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(ref)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [isExpanded])

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isExpanded])

  return (
    <>
      <div 
        className="bento-block block-cursor flex h-full w-full flex-col items-center justify-center rounded-2xl bg-[#F5F6F8] p-6"
        onClick={() => setIsExpanded(true)}
      >
        <div className="flex items-center gap-2">
          <span className="font-sans text-[1.5rem] font-semibold text-[#2D2D2D]">
            {t('portfolio')}
          </span>
          <ArrowRight size={20} color="#4DE8D8" />
        </div>
        <span className="mt-1 font-sans text-[0.85rem] text-[#8C8C8C]">
          {t('referenceProjects')}
        </span>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-white"
          style={{
            animation: 'fadeIn 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}
        >
          {/* Top Bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#E8E9EC] bg-white px-4 py-4 md:px-8">
            <button 
              onClick={() => setIsExpanded(false)}
              className="flex items-center gap-2 font-sans font-medium text-[#2D2D2D] transition-opacity hover:opacity-70"
            >
              <ArrowLeft size={20} />
              {t('back')}
            </button>
            <img 
              id="site-logo-portfolio" 
              src="/logo-placeholder.svg" 
              width={100} 
              height={33} 
              alt="MY.SITE" 
            />
          </div>

          {/* Portfolio Cards */}
          <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
            <div className="flex flex-col gap-12">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => { cardRefs.current[index] = el }}
                  className={`portfolio-card overflow-hidden rounded-[20px] ${visibleCards.includes(project.id) ? 'visible' : ''}`}
                  style={{
                    backgroundColor: project.cardStyle.bg,
                    border: project.cardStyle.border,
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="p-6 md:p-12">
                    <h3 
                      className={`${project.cardStyle.titleFont} text-[2rem] md:text-[2.5rem]`}
                      style={{ color: project.cardStyle.titleColor }}
                    >
                      {project.name}
                    </h3>
                    <p 
                      className="mt-2 font-sans text-[1rem]"
                      style={{ color: project.cardStyle.subtitleColor }}
                    >
                      {t(project.subtitleKey)}
                    </p>
                    <Badge className={`mt-4 ${project.cardStyle.badgeStyle}`}>
                      {t(project.industryKey)}
                    </Badge>
                    
                    {/* Image Placeholder */}
                    <div 
                      id={project.id}
                      className="mt-8 h-[250px] w-full rounded-xl md:h-[400px]"
                      style={{ backgroundColor: project.cardStyle.imageBg }}
                    />
                    
                    {/* Logo */}
                    <p 
                      className={`mt-6 ${project.cardStyle.logoFont} text-[1.2rem]`}
                      style={{ color: project.cardStyle.logoColor }}
                    >
                      {project.logoStyle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-12 flex items-start gap-3">
              <Shield size={18} color="#8C8C8C" className="mt-1 shrink-0" />
              <p className="font-serif text-[1rem] italic text-[#8C8C8C]">
                {t('portfolioDisclaimer')}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-12 flex flex-col items-center gap-2 border-t border-[#E8E9EC] pt-8">
              <img 
                id="site-logo-portfolio-footer" 
                src="/logo-placeholder.svg" 
                width={80} 
                height={27} 
                alt="MY.SITE" 
              />
              <span className="font-sans text-[0.75rem] text-[#8C8C8C]">
                by OROZ.CONSTRUCTION
              </span>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
