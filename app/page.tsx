'use client'

import { LanguageProvider } from '@/lib/language-context'
import { HeroBlock } from '@/components/blocks/hero-block'
import { PortfolioBlock } from '@/components/blocks/portfolio-block'
import { PlansBlock } from '@/components/blocks/plans-block'
import { LogoBlock } from '@/components/blocks/logo-block'
import { ContactBlock } from '@/components/blocks/contact-block'
import { LanguageBlock } from '@/components/blocks/language-block'
import { MobileMenu } from '@/components/mobile-menu'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white p-3 md:h-screen md:overflow-hidden md:p-3">
        <MobileMenu />
        
        {/* Desktop Bento Grid */}
        <div className="hidden h-full w-full gap-3 md:grid md:grid-cols-[2fr_1fr] md:grid-rows-[7fr_3fr]">
          {/* Row 1 */}
          <div id="hero-block" className="row-span-1">
            <HeroBlock />
          </div>
          
          <div className="grid grid-rows-2 gap-3">
            <div id="portfolio-block">
              <PortfolioBlock />
            </div>
            <div id="plans-block">
              <PlansBlock />
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="col-span-2 grid grid-cols-[3fr_4fr_3fr] gap-3">
            <div id="logo-block">
              <LogoBlock />
            </div>
            <div id="contact-block-wrapper">
              <ContactBlock />
            </div>
            <div id="language-block">
              <LanguageBlock />
            </div>
          </div>
        </div>
        
        {/* Mobile Stack */}
        <div className="flex flex-col gap-3 md:hidden">
          <div id="hero-block-mobile" className="min-h-[400px]">
            <HeroBlock />
          </div>
          <div id="portfolio-block-mobile" className="min-h-[120px]">
            <PortfolioBlock />
          </div>
          <div id="plans-block-mobile" className="min-h-[200px]">
            <PlansBlock />
          </div>
          <div id="contact-block-mobile" className="min-h-[160px]">
            <ContactBlock />
          </div>
          <div id="logo-block-mobile" className="min-h-[120px]">
            <LogoBlock />
          </div>
          <div id="language-block-mobile" className="min-h-[100px]">
            <LanguageBlock />
          </div>
        </div>
      </main>
    </LanguageProvider>
  )
}
