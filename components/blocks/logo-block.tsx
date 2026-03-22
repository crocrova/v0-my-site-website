'use client'

import { motion } from 'framer-motion'

export function LogoBlock() {
  return (
    <motion.div
      className="flex h-full w-full items-center justify-center rounded-2xl bg-[#F5F6F8] p-4"
      whileHover={{
        scale: 1.015,
        boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <img
        id="site-logo"
        src="/logo-placeholder.svg"
        width={120}
        height={40}
        alt="MY.SITE"
      />
    </motion.div>
  )
}
