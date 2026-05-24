import React from 'react'
import { FaLightbulb, FaBolt, FaHandshake } from 'react-icons/fa'

export default function About(){
  return (
    <section className="bg-blue py-25  lg:px-[52px]" id="about">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-[72px] items-center lg:grid-cols-2">
          <div>
            <div className="text-[10.5px] font-extrabold uppercase tracking-[2px] text-lime/65 mb-[14px]">About The GenZ HR</div>
            <h2 className="font-serif text-[clamp(34px,4vw,52px)] text-white leading-[1.12] mb-4">We're Not Just Consultants.<br/>We're Your <em className="not-italic text-lime">Partners.</em></h2>
            <p className="text-[15.5px] leading-[1.8] text-white/50 mb-[22px]">The GenZ HR exists to supercharge and empower SMEs, early-stage startups, and ambitious professionals with strategic, adaptable, and cost-effective consulting. We combine a fresh, generational perspective with hard-earned expertise to deliver solutions tailored to your unique challenges — across HR, career, recruitment, and beyond.</p>
            <p className="text-[15.5px] leading-[1.8] text-white/50 mb-0">We also run Nigeria's largest HR career community — 106,000+ professionals across four owned channels. That community is not just an audience. It is a talent marketplace, a media platform, and a professional development ecosystem we leverage for every client we work with.</p>
            <div className="flex flex-col gap-[14px] mt-7">
              <div className="flex gap-[14px] items-start p-[18px] bg-white/4 rounded-[10px] border border-white/7 hover:border-lime/28 transition-colors duration-200">
                <div className="text-2xl flex-shrink-0 mt-[2px] text-white"><FaLightbulb /></div>
                <div><div className="text-[14px] font-extrabold text-white mb-[3px]">Community-Backed Everything</div><div className="text-[12.5px] leading-[1.6] text-white/40">106k HR professionals follow us. Every service is amplified by a community that trusts us — making recruitment faster, employer branding more powerful, and career coaching more credible.</div></div>
              </div>
              <div className="flex gap-[14px] items-start p-[18px] bg-white/4 rounded-[10px] border border-white/7 hover:border-lime/28 transition-colors duration-200">
                <div className="text-2xl flex-shrink-0 mt-[2px] text-white"><FaBolt /></div>
                <div><div className="text-[14px] font-extrabold text-white mb-[3px]">Fully Remote, Always On</div><div className="text-[12.5px] leading-[1.6] text-white/40">Enterprise-grade HR and consulting delivered digitally. You get dedicated support without the overhead of a full-time in-house team.</div></div>
              </div>
              <div className="flex gap-[14px] items-start p-[18px] bg-white/4 rounded-[10px] border border-white/7 hover:border-lime/28 transition-colors duration-200">
                <div className="text-2xl flex-shrink-0 mt-[2px] text-white"><FaHandshake /></div>
                <div><div className="text-[14px] font-extrabold text-white mb-[3px]">Long-Term Partnership</div><div className="text-[12.5px] leading-[1.6] text-white/40">We don't solve problems and disappear. We grow alongside our clients — from first hire to fully mature people function, from fresh graduate to corner office.</div></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
            <div className="col-span-1 md:col-span-2 p-6 rounded-[14px] bg-lime/7 border border-lime/18 text-center">
              <div className="font-serif text-4xl text-lime leading-[1] mb-[5px]">106k</div>
              <div className="text-[11px] font-bold text-white/35 uppercase tracking-[.9px]">Community Members Across 4 Channels</div>
            </div>
            <div className="p-6 rounded-[14px] bg-white/4 border border-white/8 text-center">
              <div className="font-serif text-4xl text-lime leading-[1] mb-[5px]">100+</div>
              <div className="text-[11px] font-bold text-white/35 uppercase tracking-[.9px]">Clients Served Across Africa</div>
            </div>
            <div className="p-6 rounded-[14px] bg-white/4 border border-white/8 text-center">
              <div className="font-serif text-4xl text-lime leading-[1] mb-[5px]">6+</div>
              <div className="text-[11px] font-bold text-white/35 uppercase tracking-[.9px]">Consulting Domains</div>
            </div>
            <div className="p-6 rounded-[14px] bg-white/4 border border-white/8 text-center">
              <div className="font-serif text-4xl text-lime leading-[1] mb-[5px]">Full</div>
              <div className="text-[11px] font-bold text-white/35 uppercase tracking-[.9px]">Remote Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
