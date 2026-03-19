'use client'

import { MapPin } from 'lucide-react'

export function LogoBlock() {
  return (
    <div 
      className="bento-block flex h-full w-full flex-col justify-between rounded-2xl bg-[#F5F6F8]"
      style={{ padding: '16px' }}
    >
      {/* Logo placeholder */}
      <div 
        id="logo-placeholder"
        className="flex h-10 w-24 items-center justify-center rounded bg-[#E8E9EC]"
      >
        <span className="font-sans text-[0.7rem] font-medium text-[#8C8C8C]">LOGO</span>
      </div>
      
      {/* Location info */}
      <div>
        <div className="flex items-center gap-1.5">
          <MapPin size={14} className="text-[#4DE8D8]" />
          <span className="font-sans text-[0.75rem] text-[#8C8C8C]">
            Los Cabos, MX
          </span>
        </div>
        <p className="mt-1 font-sans text-[0.65rem] text-[#C4C4C4]">
          by OROZ.CONSTRUCTION
        </p>
      </div>
    </div>
  )
}
