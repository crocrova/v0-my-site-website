'use client'

import { useState } from 'react'
import { ArrowLeft, Monitor, Smartphone, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface PortfolioViewProps {
  onBack: () => void
}

const projects = [
  {
    id: 'topo',
    name: 'TOPO',
    industry: { en: 'Restaurant', es: 'Restaurante' },
    colors: ['#1A1A1A', '#D4A574', '#F5F0EB'],
    url: 'topo.mx'
  },
  {
    id: 'bahia-capital',
    name: 'Bahía Capital',
    industry: { en: 'Real Estate', es: 'Bienes Raíces' },
    colors: ['#0A2540', '#4DE8D8', '#FFFFFF'],
    url: 'bahiacapital.mx'
  },
  {
    id: 'clinica-bes',
    name: 'Clínica Bes',
    industry: { en: 'Health Clinic', es: 'Clínica de Salud' },
    colors: ['#2D5A4A', '#A8D5BA', '#FFFFFF'],
    url: 'clinicabes.com'
  },
  {
    id: 'corteza',
    name: 'Corteza',
    industry: { en: 'Coffee Shop', es: 'Cafetería' },
    colors: ['#3D2B1F', '#C4A77D', '#FAF7F2'],
    url: 'corteza.cafe'
  },
  {
    id: 'castillo',
    name: 'Castillo & Asociados',
    industry: { en: 'Law Firm', es: 'Bufete Legal' },
    colors: ['#1C2331', '#B8860B', '#FFFFFF'],
    url: 'castillolaw.mx'
  },
]

export function PortfolioView({ onBack }: PortfolioViewProps) {
  const { language, t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'web' | 'mobile'>('web')
  
  const selected = projects.find(p => p.id === selectedProject)
  const otherProjects = projects.filter(p => p.id !== selectedProject)

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#F5F6F8]">
      {/* Header */}
      <div 
        className="flex shrink-0 items-center justify-between border-b border-[#E8E9EC]"
        style={{ padding: '12px 16px' }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-sans text-[0.8rem] font-medium text-[#8C8C8C] transition-colors hover:text-[#2D2D2D]"
        >
          <ArrowLeft size={16} />
          {t('back')}
        </button>
        <h2 className="font-sans text-[0.9rem] font-semibold text-[#2D2D2D]">
          {t('portfolio')}
        </h2>
        <div style={{ width: '60px' }} />
      </div>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        {!selectedProject ? (
          /* Grid View - 3 columns x 2 rows */
          <div 
            className="grid flex-1 grid-cols-3 grid-rows-2"
            style={{ gap: '8px', padding: '8px' }}
          >
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className="group relative flex flex-col justify-end overflow-hidden rounded-xl bg-white transition-all hover:shadow-md"
                style={{ 
                  padding: '12px',
                  opacity: 0,
                  animationName: 'fadeInScale',
                  animationDuration: '300ms',
                  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  animationFillMode: 'forwards',
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Placeholder for screenshot */}
                <div 
                  id={`project-thumb-${project.id}`}
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"
                />
                
                {/* Project info */}
                <div className="relative z-10">
                  <h3 className="font-sans text-[0.85rem] font-semibold text-[#2D2D2D]">
                    {project.name}
                  </h3>
                  <p className="font-sans text-[0.7rem] text-[#8C8C8C]">
                    {project.industry[language]}
                  </p>
                  {/* Color swatches */}
                  <div className="mt-2 flex gap-1">
                    {project.colors.map((color, i) => (
                      <div
                        key={i}
                        className="rounded-full border border-black/10"
                        style={{ 
                          width: '10px', 
                          height: '10px', 
                          backgroundColor: color 
                        }}
                      />
                    ))}
                  </div>
                </div>
              </button>
            ))}
            
            {/* Empty 6th cell */}
            <div className="rounded-xl bg-[#ECEEF0]" />
          </div>
        ) : (
          /* Detail View - Left sidebar + Right preview */
          <div className="flex flex-1 overflow-hidden">
            {/* Left sidebar - 20% width */}
            <div 
              className="flex shrink-0 flex-col border-r border-[#E8E9EC] bg-white"
              style={{ width: '20%', padding: '8px' }}
            >
              {otherProjects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-[#F5F6F8]"
                  style={{
                    opacity: 0,
                    animationName: 'fadeInScale',
                    animationDuration: '200ms',
                    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    animationFillMode: 'forwards',
                    animationDelay: `${index * 30}ms`,
                  }}
                >
                  <div>
                    <p className="font-sans text-[0.75rem] font-medium text-[#2D2D2D]">
                      {project.name}
                    </p>
                    <p className="font-sans text-[0.6rem] text-[#8C8C8C]">
                      {project.industry[language]}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right preview - 80% width */}
            <div 
              className="flex flex-1 flex-col overflow-hidden"
              style={{ padding: '16px' }}
            >
              {selected && (
                <>
                  {/* Project header */}
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-sans text-[1.1rem] font-semibold text-[#2D2D2D]">
                        {selected.name}
                      </h3>
                      <p className="font-sans text-[0.75rem] text-[#8C8C8C]">
                        {selected.industry[language]}
                      </p>
                      {/* Color palette */}
                      <div className="mt-2 flex gap-1.5">
                        {selected.colors.map((color, i) => (
                          <div
                            key={i}
                            className="rounded border border-black/10"
                            style={{ 
                              width: '20px', 
                              height: '20px', 
                              backgroundColor: color 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* View toggle + Visit link */}
                    <div className="flex items-center gap-3">
                      <div className="flex rounded-lg bg-[#E8E9EC] p-1">
                        <button
                          onClick={() => setViewMode('web')}
                          className={`rounded-md px-2 py-1 transition-colors ${
                            viewMode === 'web' 
                              ? 'bg-white text-[#2D2D2D] shadow-sm' 
                              : 'text-[#8C8C8C]'
                          }`}
                        >
                          <Monitor size={14} />
                        </button>
                        <button
                          onClick={() => setViewMode('mobile')}
                          className={`rounded-md px-2 py-1 transition-colors ${
                            viewMode === 'mobile' 
                              ? 'bg-white text-[#2D2D2D] shadow-sm' 
                              : 'text-[#8C8C8C]'
                          }`}
                        >
                          <Smartphone size={14} />
                        </button>
                      </div>
                      
                      <a
                        href={`https://${selected.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-sans text-[0.7rem] font-medium text-[#4DE8D8] transition-colors hover:text-[#3BCFBF]"
                      >
                        {t('visitSite')}
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Preview frame */}
                  <div className="flex flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#E8E9EC]">
                    {viewMode === 'web' ? (
                      /* Browser frame */
                      <div 
                        className="flex h-full w-full flex-col overflow-hidden rounded-lg bg-white shadow-lg"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                      >
                        {/* Browser chrome */}
                        <div className="flex shrink-0 items-center gap-2 border-b border-[#E8E9EC] bg-[#F5F6F8] px-3 py-2">
                          <div className="flex gap-1.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                            <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                            <div className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
                          </div>
                          <div className="ml-2 flex-1 rounded bg-white px-3 py-1">
                            <span className="font-mono text-[0.65rem] text-[#8C8C8C]">
                              {selected.url}
                            </span>
                          </div>
                        </div>
                        {/* Iframe placeholder */}
                        <div 
                          id={`preview-web-${selected.id}`}
                          className="flex flex-1 items-center justify-center bg-[#FAFAFA]"
                        >
                          <span className="font-sans text-[0.8rem] text-[#C4C4C4]">
                            {t('webPreview')}
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Phone frame */
                      <div 
                        className="flex flex-col overflow-hidden rounded-[32px] bg-[#1A1A1A] shadow-xl"
                        style={{ width: '280px', height: '100%', maxHeight: '560px', padding: '8px' }}
                      >
                        {/* Notch */}
                        <div className="mx-auto mb-2 h-5 w-24 rounded-full bg-[#2D2D2D]" />
                        {/* Screen */}
                        <div 
                          id={`preview-mobile-${selected.id}`}
                          className="flex flex-1 items-center justify-center overflow-hidden rounded-[24px] bg-white"
                        >
                          <span className="font-sans text-[0.8rem] text-[#C4C4C4]">
                            {t('mobilePreview')}
                          </span>
                        </div>
                        {/* Home indicator */}
                        <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-[#2D2D2D]" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
