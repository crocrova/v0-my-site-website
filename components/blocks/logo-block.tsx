'use client'

import { MapPin } from 'lucide-react'

export function LogoBlock() {
  return (
    <div className="bento-block flex h-full w-full flex-col justify-between rounded-2xl bg-[#F5F6F8] p-6">
      <img 
        id="site-logo" 
        src="/logo-placeholder.svg" 
        width={120} 
        height={40} 
        alt="MY.SITE" 
      />
      
      <div>
        <div className="flex items-center gap-2">
          <MapPin size={16} color="#4DE8D8" />
          <span className="font-sans text-[0.8rem] text-[#8C8C8C]">
            San José del Cabo · Cabo San Lucas
          </span>
        </div>
        <p className="mt-2 font-sans text-[0.7rem] text-[#C4C4C4]">
          by OROZ.CONSTRUCTION
        </p>
      </div>
    </div>
  )
}
