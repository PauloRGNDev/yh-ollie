"use client"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-2">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#begin">
              <img src="/assets/logo-yh-transparent.png" alt="YHollie Logo" className="h-8 w-auto" />
            </a>
            
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#beneficios"
              className="text-white/90 hover:text-white hover:drop-shadow-[0_0_8px_rgba(217,6,224,0.6)] transition-all duration-300 font-medium"
            >
              Benefícios
            </a>
            <a
              href="#portfolio"
              className="text-white/90 hover:text-white hover:drop-shadow-[0_0_8px_rgba(217,6,224,0.6)] transition-all duration-300 font-medium"
            >
              Portfólio
            </a>
            <a
              href="#depoimentos"
              className="text-white/90 hover:text-white hover:drop-shadow-[0_0_8px_rgba(217,6,224,0.6)] transition-all duration-300 font-medium"
            >
              Depoimentos
            </a>
            <a
              href="https://www.instagram.com/yhollie.ofc/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-accent text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-white/20"
            >
              Contato
            </a>
          </div>
        </nav>
      </div>
      <meta name="google-site-verification" content="T7CL74nWFFaqV2PU-x1DptlTHOhhFE6uwFZwuUEPjRY" />
    </header>
  )
}
