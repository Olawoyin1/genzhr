import React, { useState } from 'react'
import { FaAward, FaStar, FaRegStar, FaGem } from 'react-icons/fa'

export default function Packages(){
  const [pkg, setPkg] = useState('bronze')

  return (
    <section className="py-25 px-4 lg:px-[52px]" id="packages">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-9">
          <div className="text-[10.5px] font-extrabold uppercase tracking-[2px] text-sky mb-[14px]">HR Management Packages</div>
          <h2 className="font-serif text-[clamp(34px,4vw,52px)] text-ink leading-[1.12] mb-4">Choose Your Level of<br/><em className="not-italic text-sky">HR Partnership.</em></h2>
          <p className="text-[16px] leading-[1.8] text-muted max-w-[560px]">Subscription-based, remote, and designed for African SMEs and startups. From essential HR foundations to a fully embedded people function.</p>
        </div>
        <div className="flex gap-[7px] mb-11 flex-wrap">
          <button className={`px-5 py-[9px] rounded-full text-[13px] font-bold cursor-pointer transition-all duration-180 border-2 ${pkg==='bronze' ? 'bg-blue text-white border-blue' : 'bg-white text-muted border-border hover:border-sky hover:text-sky'}`} onClick={()=>setPkg('bronze')}><FaAward /> Bronze — Essential</button>
          <button className={`px-5 py-[9px] rounded-full text-[13px] font-bold cursor-pointer transition-all duration-180 border-2 ${pkg==='silver' ? 'bg-blue text-white border-blue' : 'bg-white text-muted border-border hover:border-sky hover:text-sky'}`} onClick={()=>setPkg('silver')}><FaStar /> Silver — Strategic</button>
          <button className={`px-5 py-[9px] rounded-full text-[13px] font-bold cursor-pointer transition-all duration-180 border-2 ${pkg==='gold' ? 'bg-blue text-white border-blue' : 'bg-white text-muted border-border hover:border-sky hover:text-sky'}`} onClick={()=>setPkg('gold')}><FaRegStar /> Gold — Embedded</button>
          <button className={`px-5 py-[9px] rounded-full text-[13px] font-bold cursor-pointer transition-all duration-180 border-2 ${pkg==='platinum' ? 'bg-blue text-white border-blue' : 'bg-white text-muted border-border hover:border-sky hover:text-sky'}`} onClick={()=>setPkg('platinum')}><FaGem /> Platinum — Complete</button>
        </div>

        <div className="relative">
          {pkg==='bronze' && (
            <div className="grid grid-cols-1 gap-9 animate-up lg:grid-cols-[2fr_1.2fr]">
              <div className="bg-off rounded-[18px] p-10">
                <div className="flex items-center gap-[14px] mb-7 flex-wrap">
                  <span className="px-[14px] py-[5px] rounded-full text-[11px] font-extrabold uppercase tracking-[1px] bg-[rgba(180,100,20,.1)] text-[#B46414]"><FaAward /> Bronze</span>
                  <div><div className="font-serif text-[28px] text-ink leading-[1.1]">Essential HR Foundations</div><div className="text-[12.5px] text-muted mb-6 mt-1">Monthly · Best for very early-stage startups</div></div>
                </div>
                <p className="text-[13.5px] leading-[1.75] text-muted mb-6">Everything you need to get your HR house in order — from audit to compliance, payroll to onboarding. A complete HR foundation for lean teams building fast.</p>
                <div className="flex flex-col gap-[9px]">
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>HR Audit — evaluate current practices and identify risks</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>HR Advisory — 5 hours/week of dedicated expert support</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>HR Compliance Management — taxes, pensions, insurance, statutory requirements</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Payroll Management — error-free monthly salary disbursement</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Labour Law Advisory — all HR documents reviewed and aligned</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Medical Insurance Management (HMO)</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Policy Development — tailored Employee Handbook</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Recruitment Process Management — 2 hires per quarter</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Employee Onboarding — seamless new hire integration</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Document Review — offer letters, contracts, employment records</div>
                </div>
              </div>
              <div className="flex flex-col gap-[14px]">
                <div className="bg-blue rounded-[14px] p-7 text-center">
                  <div className="font-serif text-2xl text-white mb-2">Start with Bronze</div>
                  <p className="text-[12.5px] text-white/45 mb-5 leading-[1.6]">Get your HR foundations right from day one.</p>
                  <a href="mailto:contact@thegenzhr.com" className="bg-lime text-ink px-9 py-[13px] rounded-[7px] text-[14.5px] font-extrabold no-underline hover:bg-lime-d hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(200,241,53,.28)] transition-all duration-250 border-2 border-lime block text-center">Request Proposal →</a>
                </div>
                <div className="bg-off rounded-[12px] p-[22px]">
                  <div className="text-[13px] font-extrabold text-ink mb-3">Also Included</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted mb-[9px]"><span className="text-sky font-bold flex-shrink-0">→</span>Fully remote delivery</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted mb-[9px]"><span className="text-sky font-bold flex-shrink-0">→</span>Dedicated WhatsApp support line</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted mb-[9px]"><span className="text-sky font-bold flex-shrink-0">→</span>Monthly HR report to leadership</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted"><span className="text-sky font-bold flex-shrink-0">→</span>Scalable — upgrade anytime</div>
                </div>
              </div>
            </div>
          )}

          {pkg==='silver' && (
            <div className="grid grid-cols-1 gap-9 animate-up lg:grid-cols-[2fr_1.2fr]">
              <div className="bg-off rounded-[18px] p-10">
                <div className="flex items-center gap-[14px] mb-7 flex-wrap">
                  <span className="px-[14px] py-[5px] rounded-full text-[11px] font-extrabold uppercase tracking-[1px] bg-[rgba(100,110,130,.1)] text-[#606878]"><FaStar /> Silver</span>
                  <div><div className="font-serif text-[28px] text-ink leading-[1.1]">Strategic HR Partner</div><div className="text-[12.5px] text-muted mb-6 mt-1">Monthly · Best for growing teams of 10–40</div></div>
                </div>
                <p className="text-[13.5px] leading-[1.75] text-muted mb-6">Everything in Bronze, plus dedicated strategy support, performance management, and expanded advisory. For businesses that are scaling and need HR to lead from the front.</p>
                <div className="flex flex-col gap-[9px]">
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Everything in Bronze</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Dedicated HR Advisory — 10 hours/week</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>HR Strategy Development and Review</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Performance Management System Design — KPIs, reviews, appraisals</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Recruitment Process Management — 4 hires per quarter</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Organisational Plan Review — annual and biannual</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Policy Development — up to 3 policies per quarter</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Dedicated Account Manager — one point of contact</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>KPI Facilitation for Employees</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Employee Compensation and Benefits Strategy</div>
                </div>
              </div>
              <div className="flex flex-col gap-[14px]">
                <div className="bg-blue rounded-[14px] p-7 text-center">
                  <div className="font-serif text-2xl text-white mb-2">Upgrade to Silver</div>
                  <p className="text-[12.5px] text-white/45 mb-5 leading-[1.6]">HR that actively drives your business strategy.</p>
                  <a href="mailto:contact@thegenzhr.com" className="bg-lime text-ink px-9 py-[13px] rounded-[7px] text-[14.5px] font-extrabold no-underline hover:bg-lime-d hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(200,241,53,.28)] transition-all duration-250 border-2 border-lime block text-center">Request Proposal →</a>
                </div>
                <div className="bg-off rounded-[12px] p-[22px]">
                  <div className="text-[13px] font-extrabold text-ink mb-3">Added in Silver</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted mb-[9px]"><span className="text-sky font-bold flex-shrink-0">→</span>Dedicated Account Manager</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted mb-[9px]"><span className="text-sky font-bold flex-shrink-0">→</span>HR Strategy documentation</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted mb-[9px]"><span className="text-sky font-bold flex-shrink-0">→</span>Performance framework design</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted"><span className="text-sky font-bold flex-shrink-0">→</span>Comp &amp; benefits advisory</div>
                </div>
              </div>
            </div>
          )}

          {pkg==='gold' && (
            <div className="grid grid-cols-1 gap-9 animate-up lg:grid-cols-[2fr_1.2fr]">
              <div className="bg-off rounded-[18px] p-10">
                <div className="flex items-center gap-[14px] mb-7 flex-wrap">
                  <span className="px-[14px] py-[5px] rounded-full text-[11px] font-extrabold uppercase tracking-[1px] bg-[rgba(212,160,23,.1)] text-[#B8860B]"><FaRegStar /> Gold</span>
                  <div><div className="font-serif text-[28px] text-ink leading-[1.1]">Embedded HR Leadership</div><div className="text-[12.5px] text-muted mb-6 mt-1">Monthly · Best for teams of 40–100</div></div>
                </div>
                <p className="text-[13.5px] leading-[1.75] text-muted mb-6">Everything in Silver plus unlimited advisory, a dedicated on-site HR professional, executive coaching, and a fully managed people function.</p>
                <div className="flex flex-col gap-[9px]">
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Everything in Silver</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Unlimited HR Advisory — any question, any time</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Recruitment — up to 5 per quarter</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Policy Development — up to 4 policies per quarter</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Executive Coaching — 1 session every 3 months</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Strategy Planning Facilitation — 1 annual session</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Quarterly Organisational Plan Review</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Probation Period Review</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Dedicated Sit-in HR Professional</div>
                </div>
              </div>
              <div className="flex flex-col gap-[14px]">
                <div className="bg-gradient-to-br from-blue to-blue-m rounded-[14px] p-7 text-center">
                  <div className="font-serif text-2xl text-white mb-2">Go Gold</div>
                  <p className="text-[12.5px] text-white/45 mb-5 leading-[1.6]">Our most popular package for companies serious about people as a competitive advantage.</p>
                  <a href="mailto:contact@thegenzhr.com" className="bg-lime text-ink px-9 py-[13px] rounded-[7px] text-[14.5px] font-extrabold no-underline hover:bg-lime-d hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(200,241,53,.28)] transition-all duration-250 border-2 border-lime block text-center">Get a Quote →</a>
                </div>
                <div className="bg-off rounded-[12px] p-[22px]">
                  <div className="text-[13px] font-extrabold text-ink mb-3">Gold Only Features</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted mb-[9px]"><span className="text-sky font-bold flex-shrink-0">→</span>Unlimited advisory access</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted mb-[9px]"><span className="text-sky font-bold flex-shrink-0">→</span>Sit-in HR professional</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted mb-[9px]"><span className="text-sky font-bold flex-shrink-0">→</span>Executive coaching included</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted"><span className="text-sky font-bold flex-shrink-0">→</span>Annual strategy session</div>
                </div>
              </div>
            </div>
          )}

          {pkg==='platinum' && (
            <div className="grid grid-cols-1 gap-9 animate-up lg:grid-cols-[2fr_1.2fr]">
              <div className="bg-off rounded-[18px] p-10">
                <div className="flex items-center gap-[14px] mb-7 flex-wrap">
                  <span className="px-[14px] py-[5px] rounded-full text-[11px] font-extrabold uppercase tracking-[1px] bg-[rgba(100,60,200,.1)] text-[#6428C0]"><FaGem /> Platinum</span>
                  <div><div className="font-serif text-[28px] text-ink leading-[1.1]">Full-Service People Partner</div><div className="text-[12.5px] text-muted mb-6 mt-1">Monthly · For scaling organisations 100+</div></div>
                </div>
                <p className="text-[13.5px] leading-[1.75] text-muted mb-6">Everything in Gold plus comprehensive engagement management, soft skills training, organisational restructuring, monthly coaching, and end-to-end performance management.</p>
                <div className="flex flex-col gap-[9px]">
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Everything in Gold</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Employee Engagement Management — events, pulse surveys, forums (biannually)</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Strategic Planning Facilitation — 2 annual sessions</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Recruitment — up to 7 cycles per quarter</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Policy Development — up to 6 policies per quarter</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Outplacement Services — exit management &amp; career transition support</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Monthly Coaching — leadership development for 1 manager/month</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Full Performance Management — goal-setting, mid-year and annual reviews</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Monthly Soft Skills Training for all employees</div>
                  <div className="flex gap-[9px] text-[13px] text-muted leading-[1.5]"><span className="text-sky font-extrabold flex-shrink-0 mt-[1px]">✓</span>Organisational Restructuring — grade structure, pay bands, job evaluations</div>
                </div>
              </div>
              <div className="flex flex-col gap-[14px]">
                <div className="bg-gradient-to-br from-[#3A1060] to-purple rounded-[14px] p-7 text-center">
                  <div className="font-serif text-2xl text-white mb-2">Go Platinum</div>
                  <p className="text-[12.5px] text-white/45 mb-5 leading-[1.6]">HR as a true engine of growth. Let's build it together.</p>
                  <a href="mailto:contact@thegenzhr.com" className="bg-lime text-ink px-9 py-[13px] rounded-[7px] text-[14.5px] font-extrabold no-underline hover:bg-lime-d hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(200,241,53,.28)] transition-all duration-250 border-2 border-lime block text-center">Talk to Us →</a>
                </div>
                <div className="bg-off rounded-[12px] p-[22px]">
                  <div className="text-[13px] font-extrabold text-ink mb-3">Platinum Only</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted mb-[9px]"><span className="text-sky font-bold flex-shrink-0">→</span>Monthly coaching &amp; training</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted mb-[9px]"><span className="text-sky font-bold flex-shrink-0">→</span>Full org restructuring support</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted mb-[9px]"><span className="text-sky font-bold flex-shrink-0">→</span>Outplacement services</div>
                  <div className="flex gap-[9px] text-[12.5px] text-muted"><span className="text-sky font-bold flex-shrink-0">→</span>7 recruitments per quarter</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
