'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

interface Project {
  id: number
  name: string
  labelKey: string
  subtitleKey: string
  bg: string
  border?: string
  nameFont: string
  nameColor: string
  labelColor: string
  swatches: string[]
  mockupBg: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'TOPO',
    labelKey: 'topoLabel',
    subtitleKey: 'topoSubtitle',
    bg: '#1A1A1A',
    nameFont: 'font-sans font-bold',
    nameColor: '#C8F000',
    labelColor: 'rgba(200, 240, 0, 0.6)',
    swatches: ['#C8F000', '#1A1A1A', '#FFFFFF'],
    mockupBg: '#2A2A2A',
  },
  {
    id: 2,
    name: 'Bahía Capital',
    labelKey: 'bahiaLabel',
    subtitleKey: 'bahiaSubtitle',
    bg: '#FAFAF8',
    border: '1px solid #E8E3D6',
    nameFont: 'font-serif font-medium italic',
    nameColor: '#B8A88A',
    labelColor: 'rgba(184, 168, 138, 0.6)',
    swatches: ['#B8A88A', '#FAFAF8', '#2D2D2D'],
    mockupBg: '#F0EDE6',
  },
  {
    id: 3,
    name: 'Clínica Bes',
    labelKey: 'clinicaLabel',
    subtitleKey: 'clinicaSubtitle',
    bg: '#FFFFFF',
    border: '1px solid #E8E9EC',
    nameFont: 'font-sans font-medium',
    nameColor: '#84B59F',
    labelColor: 'rgba(132, 181, 159, 0.6)',
    swatches: ['#84B59F', '#FFFFFF', '#2D2D2D'],
    mockupBg: '#F5F9F7',
  },
  {
    id: 4,
    name: 'Corteza',
    labelKey: 'cortezaLabel',
    subtitleKey: 'cortezaSubtitle',
    bg: '#1C1714',
    nameFont: 'font-serif font-light italic',
    nameColor: '#C89B60',
    labelColor: 'rgba(200, 155, 96, 0.6)',
    swatches: ['#C89B60', '#1C1714', '#F5E6D0'],
    mockupBg: '#2A2218',
  },
  {
    id: 5,
    name: 'Castillo & Asociados',
    labelKey: 'castilloLabel',
    subtitleKey: 'castilloSubtitle',
    bg: '#F8F9FC',
    border: '1px solid #D4D8E8',
    nameFont: 'font-sans font-semibold',
    nameColor: '#1E2761',
    labelColor: 'rgba(30, 39, 97, 0.6)',
    swatches: ['#1E2761', '#F8F9FC', '#B8A88A'],
    mockupBg: '#ECEEF5',
  },
]

interface PortfolioViewProps {
  onBack: () => void
}

export function PortfolioView({ onBack }: PortfolioViewProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'web' | 'mobile'>('web')
  const { t } = useLanguage()

  const selectedProjectData = selectedProject !== null 
    ? projects.find(p => p.id === selectedProject) 
    : null

  const remainingProjects = selectedProject !== null
    ? projects.filter(p => p.id !== selectedProject)
    : projects

  return (
    <div 
      className="flex h-full w-full flex-col"
      style={{ gap: '8px' }}
    >
      {selectedProject === null ? (
        // Initial 3x2 grid - fits in 100vh
        <div 
          className="grid flex-1 grid-cols-3 grid-rows-2"
          style={{ gap: '8px' }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bento-block block-cursor flex flex-col justify-between rounded-2xl"
              style={{
                backgroundColor: project.bg,
                border: project.border,
                padding: '16px',
                opacity: 0,
                animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                animationDelay: `${index * 60}ms`,
                willChange: 'transform, opacity',
              }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div>
                <p 
                  className={`${project.nameFont}`}
                  style={{ color: project.nameColor, fontSize: '0.9rem' }}
                >
                  {project.name}
                </p>
                <div className="mt-1.5 flex gap-1">
                  {project.swatches.map((color, i) => (
                    <div 
                      key={i}
                      className="rounded-full"
                      style={{ 
                        width: '8px', 
                        height: '8px',
                        backgroundColor: color, 
                        border: color === '#FFFFFF' ? '1px solid #E8E9EC' : undefined 
                      }}
                    />
                  ))}
                </div>
              </div>
              <p 
                className="font-sans"
                style={{ color: project.labelColor, fontSize: '0.6rem' }}
              >
                {t(project.labelKey)}
              </p>
            </div>
          ))}
          
          {/* Home button */}
          <div
            className="bento-block block-cursor flex items-center justify-center gap-2 rounded-2xl bg-[#F5F6F8]"
            style={{
              padding: '16px',
              opacity: 0,
              animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
              animationDelay: `${5 * 60}ms`,
              willChange: 'transform, opacity',
            }}
            onClick={onBack}
          >
            <ArrowLeft size={18} color="#8C8C8C" />
            <span className="font-sans font-medium text-[#8C8C8C]" style={{ fontSize: '0.8rem' }}>
              {t('home')}
            </span>
          </div>
        </div>
      ) : (
        // Selected project view: left column (20%) + detail panel (80%)
        <div 
          className="grid flex-1"
          style={{ 
            gridTemplateColumns: '20% 1fr',
            gap: '8px',
          }}
        >
          {/* Left column - remaining projects + home */}
          <div 
            className="flex flex-col"
            style={{ gap: '8px' }}
          >
            {remainingProjects.map((project, index) => (
              <div
                key={project.id}
                className="bento-block block-cursor flex flex-1 flex-col justify-center rounded-2xl"
                style={{
                  backgroundColor: project.bg,
                  border: project.border,
                  padding: '10px',
                  opacity: 0,
                  animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${index * 60}ms`,
                  willChange: 'transform, opacity',
                }}
                onClick={() => {
                  setSelectedProject(project.id)
                  setViewMode('web')
                }}
              >
                <p 
                  className={`${project.nameFont}`}
                  style={{ color: project.nameColor, fontSize: '0.75rem' }}
                >
                  {project.name}
                </p>
                <p 
                  className="font-sans mt-0.5"
                  style={{ color: project.labelColor, fontSize: '0.55rem' }}
                >
                  {t(project.labelKey)}
                </p>
              </div>
            ))}
            
            {/* Home button */}
            <div
              className="bento-block block-cursor flex flex-1 items-center justify-center gap-1.5 rounded-2xl bg-[#F5F6F8]"
              style={{
                padding: '10px',
                opacity: 0,
                animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                animationDelay: `${4 * 60}ms`,
                willChange: 'transform, opacity',
              }}
              onClick={onBack}
            >
              <ArrowLeft size={16} color="#8C8C8C" />
              <span className="font-sans font-medium text-[#8C8C8C]" style={{ fontSize: '0.7rem' }}>
                {t('home')}
              </span>
            </div>
          </div>

          {/* Right panel - detail */}
          {selectedProjectData && (
            <div 
              className="flex flex-col rounded-2xl bg-[#F5F6F8]"
              style={{
                padding: '16px',
                opacity: 0,
                animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                animationDelay: '100ms',
                willChange: 'transform, opacity',
              }}
            >
              {/* Header row */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 
                    className={`${selectedProjectData.nameFont}`}
                    style={{ color: selectedProjectData.nameColor, fontSize: '1.5rem' }}
                  >
                    {selectedProjectData.name}
                  </h2>
                  <p className="mt-0.5 font-sans text-[#8C8C8C]" style={{ fontSize: '0.75rem' }}>
                    {t(selectedProjectData.subtitleKey)}
                  </p>
                </div>
                <img 
                  id="site-logo-portfolio" 
                  src="/logo-placeholder.svg" 
                  width={60} 
                  height={20} 
                  alt="MY.SITE" 
                />
              </div>

              {/* Palette + Toggle row */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {selectedProjectData.swatches.map((color, i) => (
                    <div key={i} className="flex flex-col items-center gap-0.5">
                      <div 
                        className="rounded-full"
                        style={{ 
                          width: '14px', 
                          height: '14px',
                          backgroundColor: color, 
                          border: color === '#FFFFFF' ? '1px solid #E8E9EC' : undefined 
                        }}
                      />
                      <span className="font-mono text-[#8C8C8C]" style={{ fontSize: '0.55rem' }}>
                        {color}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    className={`rounded-lg px-3 py-1 font-sans ${
                      viewMode === 'web' 
                        ? 'bg-white font-semibold text-[#2D2D2D]' 
                        : 'text-[#C4C4C4]'
                    }`}
                    style={{ fontSize: '0.75rem' }}
                    onClick={() => setViewMode('web')}
                  >
                    {t('web')}
                  </Button>
                  <Button
                    variant="ghost"
                    className={`rounded-lg px-3 py-1 font-sans ${
                      viewMode === 'mobile' 
                        ? 'bg-white font-semibold text-[#2D2D2D]' 
                        : 'text-[#C4C4C4]'
                    }`}
                    style={{ fontSize: '0.75rem' }}
                    onClick={() => setViewMode('mobile')}
                  >
                    {t('mobile')}
                  </Button>
                </div>
              </div>

              {/* Mockup area - takes remaining space */}
              <div className="mt-3 flex flex-1 items-center justify-center">
                {viewMode === 'web' ? (
                  <div 
                    id={`portfolio-${selectedProjectData.id}-web`}
                    className="relative w-full overflow-hidden rounded-xl border border-[#E8E9EC]"
                    style={{ 
                      backgroundColor: selectedProjectData.mockupBg,
                      height: 'calc(100% - 40px)',
                    }}
                  >
                    {/* Browser chrome */}
                    <div 
                      className="absolute top-0 left-0 right-0 flex items-center border-b border-[#E8E9EC] bg-[#F5F6F8]"
                      style={{ 
                        height: '28px', 
                        padding: '0 12px',
                        borderRadius: '12px 12px 0 0',
                        gap: '6px',
                      }}
                    >
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5F57' }} />
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#28C840' }} />
                      <span className="ml-auto font-sans text-[#C4C4C4]" style={{ fontSize: '0.6rem' }}>
                        my-site-preview
                      </span>
                    </div>
                    {/* Live site content area */}
                    <div style={{ paddingTop: '28px', height: '100%' }}>
                      {/* Live site component will be embedded here later */}
                    </div>
                  </div>
                ) : (
                  <div 
                    id={`portfolio-${selectedProjectData.id}-mobile`}
                    className="relative overflow-hidden"
                    style={{ 
                      width: '220px',
                      height: 'calc(100% - 20px)',
                      backgroundColor: selectedProjectData.mockupBg,
                      borderRadius: '24px',
                      border: '3px solid #2D2D2D',
                    }}
                  >
                    {/* Phone notch */}
                    <div 
                      className="absolute top-0 left-0 right-0 flex items-center justify-center"
                      style={{ 
                        height: '24px', 
                        backgroundColor: selectedProjectData.mockupBg,
                      }}
                    >
                      <div style={{ width: '40px', height: '4px', borderRadius: '2px', backgroundColor: '#E8E9EC' }} />
                    </div>
                    {/* Live site content area */}
                    <div style={{ paddingTop: '24px', height: '100%' }}>
                      {/* Live site component will be embedded here later */}
                    </div>
                  </div>
                )}
              </div>

              {/* Disclaimer */}
              <p className="mt-2 text-center font-serif italic text-[#C4C4C4]" style={{ fontSize: '0.65rem' }}>
                {t('portfolioDisclaimer')}
              </p>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}
