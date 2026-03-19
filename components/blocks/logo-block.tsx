'use client'

export function LogoBlock() {
  return (
    <div className="bento-block flex h-full w-full items-center justify-center rounded-2xl bg-[#F5F6F8] p-4">
      <img 
        id="site-logo" 
        src="/logo-placeholder.svg" 
        width={120} 
        height={40} 
        alt="MY.SITE" 
      />
    </div>
  )
}
