'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LanguageProvider } from '@/lib/language-context'
import { Navbar } from '@/components/navbar'
import { HeroBlock } from '@/components/blocks/hero-block'
import { PortfolioBlock } from '@/components/blocks/portfolio-block'
import { PlansBlock } from '@/components/blocks/plans-block'
import { LogoBlock } from '@/components/blocks/logo-block'
import { ContactBlock } from '@/components/blocks/contact-block'
import { InfoBlock } from '@/components/blocks/info-block'
import { PortfolioView } from '@/components/views/portfolio-view'
import { PlansView } from '@/components/views/plans-view'
import { ContactView } from '@/components/views/contact-view'
import { MobileMenu } from '@/components/mobile-menu'

type View = 'home' | 'portfolio' | 'plans' | 'contact'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

// Variants for each bento block (stagger on entry)
const blockVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.06, ease: EASE },
  }),
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.25 },
  },
}

// Wrapper for the whole view (controls coordinated entry/exit)
const viewVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.1 },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.25 },
  },
}

function HomeView({
  onPortfolio,
  onPlans,
  onContact,
}: {
  onPortfolio: () => void
  onPlans: () => void
  onContact: () => void
}) {
  return (
    <motion.div
      key="home"
      className="absolute inset-0 grid grid-cols-[2fr_1fr] grid-rows-[7fr_3fr]"
      style={{ gap: '8px' }}
      variants={viewVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Row 1 — Hero (spans full left col) */}
      <motion.div
        className="h-full"
        custom={0}
        variants={blockVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <HeroBlock />
      </motion.div>

      {/* Row 1 — Right col: Portfolio + Plans stacked */}
      <div className="grid grid-rows-2" style={{ gap: '8px' }}>
        <motion.div
          className="h-full"
          custom={1}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <PortfolioBlock onClick={onPortfolio} />
        </motion.div>
        <motion.div
          className="h-full"
          custom={2}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <PlansBlock onClick={onPlans} />
        </motion.div>
      </div>

      {/* Row 2 — 3 bottom blocks */}
      <div className="col-span-2 grid grid-cols-3" style={{ gap: '8px' }}>
        <motion.div
          className="h-full"
          custom={3}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <LogoBlock />
        </motion.div>
        <motion.div
          className="h-full"
          custom={4}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ContactBlock onClick={onContact} />
        </motion.div>
        <motion.div
          className="h-full"
          custom={5}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <InfoBlock />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('home')

  return (
    <LanguageProvider>
      <main className="h-screen w-screen overflow-hidden bg-white p-3">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>

        {/* Desktop Layout */}
        <div className="hidden h-full w-full flex-col gap-2 md:flex">
          {/* Navbar — always static, never animated */}
          <Navbar
            currentView={currentView}
            onPortfolioClick={() => setCurrentView('portfolio')}
            onPlansClick={() => setCurrentView('plans')}
            onContactClick={() => setCurrentView('contact')}
          />

          {/* Content area */}
          <div className="relative flex-1">
            <AnimatePresence mode="wait">
              {currentView === 'home' && (
                <HomeView
                  key="home"
                  onPortfolio={() => setCurrentView('portfolio')}
                  onPlans={() => setCurrentView('plans')}
                  onContact={() => setCurrentView('contact')}
                />
              )}

              {currentView === 'portfolio' && (
                <motion.div
                  key="portfolio"
                  className="absolute inset-0"
                  variants={viewVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <PortfolioView onBack={() => setCurrentView('home')} />
                </motion.div>
              )}

              {currentView === 'plans' && (
                <motion.div
                  key="plans"
                  className="absolute inset-0"
                  variants={viewVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <PlansView
                    onBack={() => setCurrentView('home')}
                    onContact={() => setCurrentView('contact')}
                  />
                </motion.div>
              )}

              {currentView === 'contact' && (
                <motion.div
                  key="contact"
                  className="absolute inset-0"
                  variants={viewVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <ContactView onBack={() => setCurrentView('home')} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </LanguageProvider>
  )
}
