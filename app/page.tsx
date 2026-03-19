'use client'

import { useState } from 'react'
import { LanguageProvider } from '@/lib/language-context'
import { Navbar } from '@/components/navbar'
import { HeroBlock } from '@/components/blocks/hero-block'
import { PortfolioBlock } from '@/components/blocks/portfolio-block'
import { PlansBlock } from '@/components/blocks/plans-block'
import { LogoBlock } from '@/components/blocks/logo-block'
import { ContactBlock } from '@/components/blocks/contact-block'
import { PortfolioView } from '@/components/views/portfolio-view'
import { PlansView } from '@/components/views/plans-view'
import { ContactView } from '@/components/views/contact-view'
import { MobileMenu } from '@/components/mobile-menu'

type View = 'home' | 'portfolio' | 'plans' | 'contact'

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('home')

  return (
    <LanguageProvider>
      <main 
        className="h-screen w-screen overflow-hidden bg-white"
        style={{ padding: '8px' }}
      >
        {/* Mobile Menu */}
        <div className="h-full md:hidden">
          <MobileMenu />
        </div>

        {/* Desktop Layout */}
        <div className="hidden h-full w-full flex-col md:flex" style={{ gap: '8px' }}>
          {/* Navbar - always visible */}
          <Navbar 
            onPortfolioClick={() => setCurrentView('portfolio')}
            onPlansClick={() => setCurrentView('plans')}
            onContactClick={() => setCurrentView('contact')}
          />

          {/* Main Content Area */}
          <div className="relative flex-1 overflow-hidden">
            {/* Home View */}
            {currentView === 'home' && (
              <div 
                className="absolute inset-0 grid grid-cols-[2fr_1fr] grid-rows-[7fr_3fr]"
                style={{ 
                  gap: '8px',
                  animation: 'fadeInView 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
                }}
              >
                {/* Row 1 */}
                <div 
                  id="hero-block"
                  className="overflow-hidden"
                  style={{
                    opacity: 0,
                    animation: 'fadeInScale 300ms cubic-bezier(0.16, 1, 0.3, 1) 0ms forwards',
                  }}
                >
                  <HeroBlock />
                </div>
                
                <div className="grid grid-rows-2" style={{ gap: '8px' }}>
                  <div 
                    id="portfolio-block"
                    style={{
                      opacity: 0,
                      animation: 'fadeInScale 300ms cubic-bezier(0.16, 1, 0.3, 1) 50ms forwards',
                    }}
                  >
                    <PortfolioBlock onClick={() => setCurrentView('portfolio')} />
                  </div>
                  <div 
                    id="plans-block"
                    style={{
                      opacity: 0,
                      animation: 'fadeInScale 300ms cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards',
                    }}
                  >
                    <PlansBlock onClick={() => setCurrentView('plans')} />
                  </div>
                </div>
                
                {/* Row 2 */}
                <div className="col-span-2 grid grid-cols-3" style={{ gap: '8px' }}>
                  <div 
                    id="logo-block"
                    style={{
                      opacity: 0,
                      animation: 'fadeInScale 300ms cubic-bezier(0.16, 1, 0.3, 1) 150ms forwards',
                    }}
                  >
                    <LogoBlock />
                  </div>
                  <div 
                    id="contact-block-wrapper"
                    style={{
                      opacity: 0,
                      animation: 'fadeInScale 300ms cubic-bezier(0.16, 1, 0.3, 1) 200ms forwards',
                    }}
                  >
                    <ContactBlock onClick={() => setCurrentView('contact')} />
                  </div>
                  <div 
                    id="empty-block"
                    className="rounded-2xl bg-[#F5F6F8]"
                    style={{
                      opacity: 0,
                      animation: 'fadeInScale 300ms cubic-bezier(0.16, 1, 0.3, 1) 250ms forwards',
                    }}
                  />
                </div>
              </div>
            )}

            {/* Portfolio View */}
            {currentView === 'portfolio' && (
              <div 
                className="absolute inset-0"
                style={{
                  animation: 'fadeInView 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
                }}
              >
                <PortfolioView onBack={() => setCurrentView('home')} />
              </div>
            )}

            {/* Plans View */}
            {currentView === 'plans' && (
              <div 
                className="absolute inset-0"
                style={{
                  animation: 'fadeInView 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
                }}
              >
                <PlansView 
                  onBack={() => setCurrentView('home')} 
                  onRequestAnalysis={() => setCurrentView('contact')}
                />
              </div>
            )}

            {/* Contact View */}
            {currentView === 'contact' && (
              <div 
                className="absolute inset-0"
                style={{
                  animation: 'fadeInView 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
                }}
              >
                <ContactView onBack={() => setCurrentView('home')} />
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInView {
            from { opacity: 0; }
            to { opacity: 1; }
          }
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
      </main>
    </LanguageProvider>
  )
}
