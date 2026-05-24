import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="bg-ink py-16 px-4 pb-9 flex justify-center lg:px-[52px] lg:py-16 lg:pb-9">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-14 mb-13 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-14">
          <div>
            <div className="flex items-center gap-[10px]">
              <img src="/logo.png" alt="The GenZ HR" className="h-10" />
            </div>
            <p className="text-[13.5px] leading-[1.75] text-white mt-[14px] max-w-[270px]">Nigeria's premier HR and career consulting community. 106,000+ professionals. Four owned channels. One trusted voice. Your partner in growth and success.</p>
          </div>
          <div>
            <h4 className="text-[10px] font-extrabold uppercase tracking-[2px]  text-white mb-[18px]">Services</h4>
            <a href="#services" className="block text-[13.5px] text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">HR Management</a>
            <a href="#services" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">Business Consulting</a>
            <a href="#career" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">Career Consulting</a>
            <a href="#recruitment" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">Talent Recruitment</a>
            <a href="#services" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">Legal &amp; Tax Advisory</a>
            <a href="#media" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">Media &amp; Sponsorships</a>
          </div>
          <div>
            <h4 className="text-[10px] font-extrabold uppercase tracking-[2px]  text-white mb-[18px]">HR Packages</h4>
            <a href="#packages" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">Bronze — Essential</a>
            <a href="#packages" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">Silver — Strategic</a>
            <a href="#packages" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">Gold — Embedded</a>
            <a href="#packages" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">Platinum — Complete</a>
          </div>
          <div>
            <h4 className="text-[10px] font-extrabold uppercase tracking-[2px]  text-white mb-[18px]">Contact</h4>
            <a href="mailto:contact@thegenzhr.com" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">contact@thegenzhr.com</a>
            <a href="mailto:partnerships@thegenzhr.com" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">partnerships@thegenzhr.com</a>
            <a href="tel:+2348168545860" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">+234 816 854 5860</a>
            <a href="https://thegenzhr.substack.com" target="_blank" rel="noopener noreferrer" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">Newsletter (Substack)</a>
            <a href="#" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">LinkedIn</a>
            <a href="#" className="block text-[13.5px]  text-white no-underline mb-[9px] hover:text-lime transition-colors duration-180">Instagram · @thegenzhr</a>
          </div>
        </div>
        <div className="border-t border-white/7 pt-7 flex justify-between items-center flex-wrap gap-[10px] text-[11.5px]  text-white">
          <span>© 2025 The GenZ HR. All rights reserved.</span>
          <span className='flex items-center gap-2'><FaMapMarkerAlt /> Built for Africa's next generation of professionals. </span>
        </div>
      </div>
    </footer>
  )
}
