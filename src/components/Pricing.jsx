import React from 'react'

export default function Pricing(){
  return (
    <section className="bg-off py-25 px-[52px]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-[14px]"><div className="inline-block text-[10.5px] font-extrabold uppercase tracking-[2px] text-sky">HR Package Overview</div></div>
        <h2 className="font-serif text-[clamp(34px,4vw,52px)] text-ink leading-[1.12] mb-4 text-center">Find Your Perfect<br/><em className="not-italic text-sky">HR Partnership Level.</em></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px] mt-12">
          <div className="bg-white rounded-[16px] p-7 px-[22px] border-2 border-transparent hover:border-border hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(12,17,23,.07)] transition-all duration-280 relative">
            <div className="text-[10px] font-extrabold uppercase tracking-[1.5px] mb-[10px] text-sky">Bronze</div><div className="font-serif text-[26px] text-ink mb-[3px]">Essential</div><div className="text-[11.5px] text-muted mb-6">HR Foundations · Monthly</div>
            <div className="flex flex-col gap-[7px] mb-6">
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>HR Audit + Advisory (5hrs/wk)</div>
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>Payroll &amp; Compliance</div>
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>Labour Law Advisory</div>
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>2 Recruitments per quarter</div>
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>Employee Handbook</div>
            </div>
            <a href="mailto:contact@thegenzhr.com" className="w-full px-3 py-[11px] rounded-[7px] text-[12.5px] font-extrabold cursor-pointer border-2 transition-all duration-180 text-center block no-underline bg-transparent text-ink border-border hover:border-sky hover:text-sky">Get a Quote</a>
          </div>
          <div className="bg-white rounded-[16px] p-7 px-[22px] border-2 border-transparent hover:border-border hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(12,17,23,.07)] transition-all duration-280 relative">
            <div className="text-[10px] font-extrabold uppercase tracking-[1.5px] mb-[10px] text-sky">Silver</div><div className="font-serif text-[26px] text-ink mb-[3px]">Strategic</div><div className="text-[11.5px] text-muted mb-6">HR Strategy · Monthly</div>
            <div className="flex flex-col gap-[7px] mb-6">
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>Everything in Bronze</div>
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>10hrs/wk + Account Manager</div>
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>Performance Management System</div>
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>4 Recruitments per quarter</div>
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>Comp &amp; Benefits Strategy</div>
            </div>
            <a href="mailto:contact@thegenzhr.com" className="w-full px-3 py-[11px] rounded-[7px] text-[12.5px] font-extrabold cursor-pointer border-2 transition-all duration-180 text-center block no-underline bg-transparent text-ink border-border hover:border-sky hover:text-sky">Get a Quote</a>
          </div>
          <div className="bg-blue rounded-[16px] p-7 px-[22px] border-2 border-blue hover:-translate-y-[4px] transition-all duration-280 relative">
            <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 bg-lime text-ink text-[9.5px] font-extrabold uppercase tracking-[1px] px-[13px] py-[3px] rounded-full whitespace-nowrap">Most Popular</div>
            <div className="text-[10px] font-extrabold uppercase tracking-[1.5px] mb-[10px] text-lime/65">Gold</div><div className="font-serif text-[26px] text-white mb-[3px]">Embedded</div><div className="text-[11.5px] text-white/30 mb-6">Full HR Lead · Monthly</div>
            <div className="flex flex-col gap-[7px] mb-6">
              <div className="text-[12px] text-white flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-lime">✓</span>Everything in Silver</div>
              <div className="text-[12px] text-white flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-lime">✓</span>Unlimited HR Advisory</div>
              <div className="text-[12px] text-white flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-lime">✓</span>5 Recruitments per quarter</div>
              <div className="text-[12px] text-white flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-lime">✓</span>Executive Coaching (quarterly)</div>
              <div className="text-[12px] text-white flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-lime">✓</span>Sit-in HR Professional</div>
            </div>
            <a href="mailto:contact@thegenzhr.com" className="w-full px-3 py-[11px] rounded-[7px] text-[12.5px] font-extrabold cursor-pointer border-2 transition-all duration-180 text-center block no-underline bg-lime text-ink border-lime hover:bg-lime-d">Get a Quote</a>
          </div>
          <div className="bg-white rounded-[16px] p-7 px-[22px] border-2 border-transparent hover:border-border hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(12,17,23,.07)] transition-all duration-280 relative">
            <div className="text-[10px] font-extrabold uppercase tracking-[1.5px] mb-[10px] text-sky">Platinum</div><div className="font-serif text-[26px] text-ink mb-[3px]">Complete</div><div className="text-[11.5px] text-muted mb-6">Full-Service · Monthly</div>
            <div className="flex flex-col gap-[7px] mb-6">
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>Everything in Gold</div>
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>7 Recruitments per quarter</div>
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>Monthly Coaching + Training</div>
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>Org Restructuring Support</div>
              <div className="text-[12px] text-muted flex gap-[7px]"><span className="flex-shrink-0 font-extrabold text-sky">✓</span>Outplacement Services</div>
            </div>
            <a href="mailto:contact@thegenzhr.com" className="w-full px-3 py-[11px] rounded-[7px] text-[12.5px] font-extrabold cursor-pointer border-2 transition-all duration-180 text-center block no-underline bg-transparent text-ink border-border hover:border-sky hover:text-sky">Get a Quote</a>
          </div>
        </div>
        <p className="text-center text-[13px] text-muted mt-6">All packages are subscription-based and fully remote. Pricing tailored to your team size and requirements. <strong className="text-ink">Contact us for a tailored proposal within 48 hours.</strong></p>
      </div>
    </section>
  )
}
