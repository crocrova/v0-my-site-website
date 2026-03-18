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
    <div className="flex h-full w-full flex-col gap-3">
      {selectedProject === null ? (
        // Initial 3x2 grid
        <div className="grid h-full grid-cols-3 grid-rows-2 gap-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bento-block block-cursor flex flex-col justify-between rounded-2xl p-4"
              style={{
                backgroundColor: project.bg,
                border: project.border,
                opacity: 0,
                animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                animationDelay: `${index * 60}ms`,
              }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div>
                <p 
                  className={`${project.nameFont} text-[1.1rem]`}
                  style={{ color: project.nameColor }}
                >
                  {project.name}
                </p>
                <div className="mt-2 flex gap-1.5">
                  {project.swatches.map((color, i) => (
                    <div 
                      key={i}
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: color, border: color === '#FFFFFF' ? '1px solid #E8E9EC' : undefined }}
                    />
                  ))}
                </div>
              </div>
              <p 
                className="font-sans text-[0.7rem]"
                style={{ color: project.labelColor }}
              >
                {t(project.labelKey)}
              </p>
            </div>
          ))}
          
          {/* Home button */}
          <div
            className="bento-block block-cursor flex items-center justify-center gap-2 rounded-2xl bg-[#F5F6F8] p-4"
            style={{
              opacity: 0,
              animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
              animationDelay: `${5 * 60}ms`,
            }}
            onClick={onBack}
          >
            <ArrowLeft size={20} color="#8C8C8C" />
            <span className="font-sans text-[0.9rem] font-medium text-[#8C8C8C]">
              {t('home')}
            </span>
          </div>
        </div>
      ) : (
        // Selected project view: left column + detail panel
        <div className="grid h-full grid-cols-[1fr_3fr] gap-3">
          {/* Left column - remaining projects + home */}
          <div className="flex flex-col gap-3">
            {remainingProjects.map((project, index) => (
              <div
                key={project.id}
                className="bento-block block-cursor flex flex-1 flex-col justify-between rounded-2xl p-3"
                style={{
                  backgroundColor: project.bg,
                  border: project.border,
                  opacity: 0,
                  animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${index * 60}ms`,
                }}
                onClick={() => {
                  setSelectedProject(project.id)
                  setViewMode('web')
                }}
              >
                <p 
                  className={`${project.nameFont} text-[0.9rem]`}
                  style={{ color: project.nameColor }}
                >
                  {project.name}
                </p>
                <p 
                  className="font-sans text-[0.6rem]"
                  style={{ color: project.labelColor }}
                >
                  {t(project.labelKey)}
                </p>
              </div>
            ))}
            
            {/* Home button */}
            <div
              className="bento-block block-cursor flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#F5F6F8] p-3"
              style={{
                opacity: 0,
                animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                animationDelay: `${4 * 60}ms`,
              }}
              onClick={onBack}
            >
              <ArrowLeft size={18} color="#8C8C8C" />
              <span className="font-sans text-[0.8rem] font-medium text-[#8C8C8C]">
                {t('home')}
              </span>
            </div>
          </div>

          {/* Right panel - detail */}
          {selectedProjectData && (
            <div 
              className="flex flex-col rounded-2xl bg-[#F5F6F8] p-6"
              style={{
                opacity: 0,
                animation: `fadeInScale 400ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                animationDelay: '100ms',
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 
                    className={`${selectedProjectData.nameFont} text-[2rem]`}
                    style={{ color: selectedProjectData.nameColor }}
                  >
                    {selectedProjectData.name}
                  </h2>
                  <p className="mt-1 font-sans text-[0.9rem] text-[#8C8C8C]">
                    {t(selectedProjectData.subtitleKey)}
                  </p>
                </div>
                <img 
                  id="site-logo-portfolio" 
                  src="/logo-placeholder.svg" 
                  width={80} 
                  height={27} 
                  alt="MY.SITE" 
                />
              </div>

              {/* Palette */}
              <div className="mt-4 flex items-center gap-4">
                {selectedProjectData.swatches.map((color, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div 
                      className="h-5 w-5 rounded-full"
                      style={{ backgroundColor: color, border: color === '#FFFFFF' ? '1px solid #E8E9EC' : undefined }}
                    />
                    <span className="font-mono text-[0.7rem] text-[#8C8C8C]">
                      {color}
                    </span>
                  </div>
                ))}
              </div>

              {/* Toggle */}
              <div className="mt-4 flex gap-2">
                <Button
                  variant="ghost"
                  className={`rounded-lg px-4 py-2 font-sans text-[0.85rem] ${
                    viewMode === 'web' 
                      ? 'bg-white font-semibold text-[#2D2D2D]' 
                      : 'text-[#C4C4C4]'
                  }`}
                  onClick={() => setViewMode('web')}
                >
                  {t('web')}
                </Button>
                <Button
                  variant="ghost"
                  className={`rounded-lg px-4 py-2 font-sans text-[0.85rem] ${
                    viewMode === 'mobile' 
                      ? 'bg-white font-semibold text-[#2D2D2D]' 
                      : 'text-[#C4C4C4]'
                  }`}
                  onClick={() => setViewMode('mobile')}
                >
                  {t('mobile')}
                </Button>
              </div>

              {/* Mockup area */}
              <div className="mt-4 flex flex-1 items-center justify-center">
                {viewMode === 'web' ? (
                  <div 
                    id={`portfolio-${selectedProjectData.id}-web`}
                    className="w-full rounded-xl border border-[#E8E9EC]"
                    style={{ 
                      backgroundColor: selectedProjectData.mockupBg,
                      aspectRatio: '16/10',
                    }}
                  />
                ) : (
                  <div 
                    id={`portfolio-${selectedProjectData.id}-mobile`}
                    className="rounded-xl border border-[#E8E9EC]"
                    style={{ 
                      backgroundColor: selectedProjectData.mockupBg,
                      width: '35%',
                      aspectRatio: '9/19',
                    }}
                  />
                )}
              </div>

              {/* Disclaimer */}
              <p className="mt-4 text-center font-serif text-[0.75rem] italic text-[#C4C4C4]">
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
