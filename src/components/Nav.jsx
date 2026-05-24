import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="nav" className={`fixed top-0 left-0 right-0 z-[200] px-4 py-4 md:px-8 lg:px-12 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline transition-transform hover:scale-[1.02]">
          <img src="/logo.png" alt="The GenZ HR" className="h-10 md:h-11" />
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a href="#services" className={`text-sm font-medium transition-colors duration-200 relative group no-underline ${scrolled ? 'text-slate-700 hover:text-sky' : 'text-white hover:text-lime'}`}>
              Services
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${scrolled ? 'bg-sky' : 'bg-lime'}`}></span>
            </a>
            <a href="#career" className={`text-sm font-medium transition-colors duration-200 relative group no-underline ${scrolled ? 'text-slate-700 hover:text-sky' : 'text-white hover:text-lime'}`}>
              Career
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${scrolled ? 'bg-sky' : 'bg-lime'}`}></span>
            </a>
            <a href="#packages" className={`text-sm font-medium transition-colors duration-200 relative group no-underline ${scrolled ? 'text-slate-700 hover:text-sky' : 'text-white hover:text-lime'}`}>
              HR Packages
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${scrolled ? 'bg-sky' : 'bg-lime'}`}></span>
            </a>
            <a href="#recruitment" className={`text-sm font-medium transition-colors duration-200 relative group no-underline ${scrolled ? 'text-slate-700 hover:text-sky' : 'text-white hover:text-lime'}`}>
              Recruitment
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${scrolled ? 'bg-sky' : 'bg-lime'}`}></span>
            </a>
            <a href="#media" className={`text-sm font-medium transition-colors duration-200 relative group no-underline ${scrolled ? 'text-slate-700 hover:text-sky' : 'text-white hover:text-lime'}`}>
              Media &amp; Ads
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${scrolled ? 'bg-sky' : 'bg-lime'}`}></span>
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="tel:+2348168545860" className={`hidden lg:flex items-center gap-2 text-sm font-medium transition-colors duration-200 no-underline ${scrolled ? 'text-slate-700 hover:text-sky' : 'text-white hover:text-lime'}`}>
              +234 816 854 5860
            </a>
            <a href="mailto:contact@thegenzhr.com" className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 no-underline ${scrolled ? 'bg-sky text-white hover:bg-blue shadow-lg shadow-sky/30' : 'bg-lime text-ink hover:bg-lime-d shadow-lg shadow-lime/30'}`}>
              Get a Proposal →
            </a>
          </div>
        </div>

        <button 
          className={`md:hidden text-2xl focus:outline-none ${scrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 mx-4 animate-up">
          <div className="flex flex-col gap-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-sky transition-colors duration-200 no-underline">Services</a>
            <a href="#career" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-sky transition-colors duration-200 no-underline">Career</a>
            <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-sky transition-colors duration-200 no-underline">HR Packages</a>
            <a href="#recruitment" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-sky transition-colors duration-200 no-underline">Recruitment</a>
            <a href="#media" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-sky transition-colors duration-200 no-underline">Media &amp; Ads</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-sky transition-colors duration-200 no-underline">Contact</a>
            
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a href="tel:+2348168545860" onClick={() => setMobileMenuOpen(false)} className="text-center text-base font-medium text-slate-700 border border-slate-200 rounded-xl py-2.5 hover:border-sky hover:text-sky transition-colors duration-200 no-underline">
                +234 816 854 5860
              </a>
              <a href="mailto:contact@thegenzhr.com" onClick={() => setMobileMenuOpen(false)} className="text-center text-base font-semibold bg-sky text-white rounded-xl py-2.5 hover:bg-blue transition-all duration-200 no-underline">
                Get a Proposal →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
