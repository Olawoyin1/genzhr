import React from 'react'
import { FaUsers, FaBriefcase, FaBullseye, FaSearch, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen bg-blue py-[130px]  pb-[100px] relative overflow-hidden flex justify-center lg:px-[52px]" id="home">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(26,107,255,.22)_0%,transparent_60%),radial-gradient(ellipse_40%_50%_at_10%_80%,rgba(200,241,53,.06)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-[.035] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:52px_52px]"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 items-center w-full px-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-0 relative z-[2]">
        <div>
          <div className="inline-flex items-center gap-2 bg-lime/12 border-[1.5px] border-lime/22 rounded px-[14px] py-[6px] mb-7 text-[11px] font-extrabold tracking-[2px] uppercase text-lime animate-up">
            <span className="w-[7px] h-[7px] bg-lime rounded-full animate-blink"></span>Nigeria's Premier Career &amp; HR Community
          </div>
          <h1 className="font-serif text-[clamp(44px,5.5vw,76px)] leading-[1.01] text-white mb-6 tracking-[-1px] animate-up delay-[80ms]">Your Partner in<br/><em className="not-italic text-lime">Growth, People,</em><br/>&amp; Business Success.</h1>
          <p className="text-[17px] leading-[1.8] text-white max-w-[500px] mb-10 animate-up delay-[160ms]"><strong className="text-white/82">The GenZ HR</strong> supercharges SMEs, professionals, and organisations with strategic consulting across HR, career development, recruitment, media, and beyond — with a community of <strong className="text-white/82">106,000+ professionals</strong> behind every service.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap animate-up delay-[220ms]">
            <a href="#packages" className="bg-lime text-ink px-9 py-[15px] rounded-[7px] text-[14.5px] font-extrabold no-underline hover:bg-lime-d hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(200,241,53,.28)] transition-all duration-250 border-2 border-lime w-full sm:w-auto text-center">See Our Packages →</a>
            <a href="#services" className="bg-transparent text-white/65 px-9 py-[15px] rounded-[7px] text-[14.5px] font-bold no-underline hover:border-white/45 hover:text-white transition-all duration-250 border-2 border-white/16 w-full sm:w-auto text-center">Explore Services</a>
          </div>
          <div className="flex gap-11 mt-14 pt-9 border-t border-white/9 flex-wrap animate-up delay-[300ms]">
            <div><div className="font-serif text-4xl text-white leading-[1]">106<span className="text-lime">k+</span></div><div className="text-[10.5px] font-bold text-white/30 uppercase tracking-[1px] mt-1">Community Reach</div></div>
            <div><div className="font-serif text-4xl text-white leading-[1]">100<span className="text-lime">+</span></div><div className="text-[10.5px] font-bold text-white/30 uppercase tracking-[1px] mt-1">Clients Served</div></div>
            <div><div className="font-serif text-4xl text-white leading-[1]">6</div><div className="text-[10.5px] font-bold text-white/30 uppercase tracking-[1px] mt-1">Service Areas</div></div>
            <div><div className="font-serif text-4xl text-white leading-[1]">4</div><div className="text-[10.5px] font-bold text-white/30 uppercase tracking-[1px] mt-1">Owned Channels</div></div>
          </div>
        </div>
        <div className="relative z-[2] animate-up delay-[200ms]">
          <div className="absolute -bottom-[14px] -right-[14px] bg-lime rounded-3xl px-[18px] py-[14px] shadow-[0_14px_36px_rgba(200,241,53,.25)] z-[3]">
            <div className="font-serif text-2xl text-ink leading-[1]">106k</div>
            <div className="text-[9px] font-extrabold text-ink/50 mt-[2px] uppercase tracking-[.8px]">Audience &amp;<br/>Growing</div>
          </div>
          <div className="bg-white/5 border-[1.5px] border-white/10 rounded-[18px] p-8 backdrop-blur-md">
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-white/35 mb-[18px]">Everything We Do</div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-[10px] hover:bg-white/6 hover:border-white/10 transition-all duration-180 border-[1.5px] border-transparent cursor-default">
              <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center text-lg flex-shrink-0 bg-lime/12"><FaUsers /></div>
              <div><div className="text-[13px] font-bold text-white/80">HR Management &amp; Advisory</div><div className="text-[11px] text-white/28 mt-[2px]">Your outsourced HR team</div></div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-[10px] hover:bg-white/6 hover:border-white/10 transition-all duration-180 border-[1.5px] border-transparent cursor-default">
              <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center text-lg flex-shrink-0 bg-sky/10"><FaBriefcase /></div>
              <div><div className="text-[13px] font-bold text-white/80">Business Consulting</div><div className="text-[11px] text-white/28 mt-[2px]">Strategy, finance, legal, ops</div></div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-[10px] hover:bg-white/6 hover:border-white/10 transition-all duration-180 border-[1.5px] border-transparent cursor-default">
              <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center text-lg flex-shrink-0 bg-mint/10"><FaBullseye /></div>
              <div><div className="text-[13px] font-bold text-white/80">Career Consulting</div><div className="text-[11px] text-white/28 mt-[2px]">For every stage of your career</div></div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-[10px] hover:bg-white/6 hover:border-white/10 transition-all duration-180 border-[1.5px] border-transparent cursor-default">
              <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center text-lg flex-shrink-0 bg-purple/10"><FaSearch /></div>
              <div><div className="text-[13px] font-bold text-white/80">Talent Recruitment</div><div className="text-[11px] text-white/28 mt-[2px]">End-to-end hiring support</div></div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-[10px] bg-lime/7 border-lime/20 transition-all duration-180 border-[1.5px] cursor-default">
              <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center text-lg flex-shrink-0 bg-lime/15"><FaGlobeAmericas /></div>
              <div><div className="text-[13px] font-bold text-white">Media &amp; Sponsorships</div><div className="text-[11px] text-white/28 mt-[2px]">106k audience for brands</div></div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-[10px] hover:bg-white/6 hover:border-white/10 transition-all duration-180 border-[1.5px] border-transparent cursor-default">
              <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center text-lg flex-shrink-0 bg-orange/10"><FaShieldAlt /></div>
              <div><div className="text-[13px] font-bold text-white/80">Legal &amp; Tax Advisory</div><div className="text-[11px] text-white/28 mt-[2px]">Stay compliant, stay ahead</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
