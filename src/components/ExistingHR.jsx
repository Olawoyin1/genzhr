import React from 'react'
import { FaSearch, FaBuilding, FaLightbulb, FaRegLightbulb, FaGraduationCap, FaBullseye } from 'react-icons/fa'

export default function ExistingHR(){
  return (
    <section className="bg-warm py-[90px] lg:px-[52px]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-[72px] items-center lg:grid-cols-2">
        <div>
          <div className="text-[10.5px] font-extrabold uppercase tracking-[2px] text-sky mb-[14px]">Already Have an HR Team?</div>
          <h2 className="font-serif text-[clamp(34px,4vw,52px)] text-ink leading-[1.12] mb-4">We Work With<br/><em className="not-italic text-sky">Your Team,</em><br/>Not Instead of It.</h2>
          <p className="text-[16px] leading-[1.8] text-muted max-w-[560px] mb-8">If you already have an HR function but need specialist support for specific projects or strategic gaps, we plug in exactly where you need us — without disrupting what already works.</p>
          <a href="mailto:contact@thegenzhr.com" className="bg-blue text-white px-[34px] py-[15px] rounded-[7px] text-[13.5px] font-extrabold no-underline hover:bg-sky hover:-translate-y-[2px] transition-all duration-200 inline-block border-2 border-blue">Let's Talk →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
          <div className="p-[22px] bg-white rounded-[12px] border-l-4 border-sky hover:translate-x-1 hover:shadow-[0_8px_24px_rgba(26,107,255,.08)] transition-all duration-250">
            <div className="text-2xl mb-[9px]"><FaSearch /></div>
            <h4 className="text-[13.5px] font-extrabold text-ink mb-[3px]">HR Audit &amp; Gap Analysis</h4>
            <p className="text-[12px] leading-[1.6] text-muted">Deep-dive into your existing people processes to uncover risks, gaps, and strategic opportunities.</p>
          </div>
          <div className="p-[22px] bg-white rounded-[12px] border-l-4 border-sky hover:translate-x-1 hover:shadow-[0_8px_24px_rgba(26,107,255,.08)] transition-all duration-250">
            <div className="text-2xl mb-[9px]"><FaBuilding /></div>
            <h4 className="text-[13.5px] font-extrabold text-ink mb-[3px]">Organisational Restructuring</h4>
            <p className="text-[12px] leading-[1.6] text-muted">Grade structures, pay bands, and org design aligned with your growth stage and people strategy.</p>
          </div>
          <div className="p-[22px] bg-white rounded-[12px] border-l-4 border-sky hover:translate-x-1 hover:shadow-[0_8px_24px_rgba(26,107,255,.08)] transition-all duration-250">
            <div className="text-2xl mb-[9px]"><FaLightbulb /></div>
            <h4 className="text-[13.5px] font-extrabold text-ink mb-[3px]">Employee Engagement Strategy</h4>
            <p className="text-[12px] leading-[1.6] text-muted">Data-driven strategies to keep your best people engaged and reduce costly attrition.</p>
          </div>
          <div className="p-[22px] bg-white rounded-[12px] border-l-4 border-sky hover:translate-x-1 hover:shadow-[0_8px_24px_rgba(26,107,255,.08)] transition-all duration-250">
            <div className="text-2xl mb-[9px]"><FaRegLightbulb /></div>
            <h4 className="text-[13.5px] font-extrabold text-ink mb-[3px]">Competency Model Development</h4>
            <p className="text-[12px] leading-[1.6] text-muted">Clear frameworks for what excellent performance looks like at every level of your organisation.</p>
          </div>
          <div className="p-[22px] bg-white rounded-[12px] border-l-4 border-sky hover:translate-x-1 hover:shadow-[0_8px_24px_rgba(26,107,255,.08)] transition-all duration-250">
            <div className="text-2xl mb-[9px]"><FaGraduationCap /></div>
            <h4 className="text-[13.5px] font-extrabold text-ink mb-[3px]">Training &amp; Executive Coaching</h4>
            <p className="text-[12px] leading-[1.6] text-muted">Bespoke training programmes and 1:1 executive coaching for your leadership team.</p>
          </div>
          <div className="p-[22px] bg-white rounded-[12px] border-l-4 border-sky hover:translate-x-1 hover:shadow-[0_8px_24px_rgba(26,107,255,.08)] transition-all duration-250">
            <div className="text-2xl mb-[9px]"><FaBullseye /></div>
            <h4 className="text-[13.5px] font-extrabold text-ink mb-[3px]">Recruitment &amp; Personnel Outsourcing</h4>
            <p className="text-[12px] leading-[1.6] text-muted">Specialist recruitment support for high-volume or senior-level hiring your team needs backup on.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
