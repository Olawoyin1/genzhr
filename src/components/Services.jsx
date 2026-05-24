import React from 'react'
import { FaUsers, FaBriefcase, FaBullseye, FaSearch, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa'

export default function Services(){
  return (
    <section className="py-25  lg:px-[52px]" id="services">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-[52px] items-center mb-15 lg:grid-cols-2">
          <div>
            <div className="text-[10.5px] font-extrabold uppercase tracking-[2px] text-sky mb-[14px]">What We Do</div>
            <h2 className="font-serif text-[clamp(34px,4vw,52px)] text-ink leading-[1.12] mb-4">Six Service Areas.<br/><em className="not-italic text-sky">One Trusted Partner.</em></h2>
            <p className="text-[16px] leading-[1.8] text-muted max-w-[560px]">We don't just solve one problem. We build systems and support that grow with you — from your first hire to your 100th, from early career to leadership, from brand launch to national scale.</p>
          </div>
          <div>
            <p className="text-[14px] text-muted leading-[1.8] max-w-[380px]">Every service is designed to be flexible, scalable, and delivered by a team that truly understands the Nigerian and African context.</p>
            <a href="mailto:contact@thegenzhr.com" className="bg-blue text-white px-[34px] py-[15px] rounded-[7px] text-[13.5px] font-extrabold no-underline hover:bg-sky hover:-translate-y-[2px] transition-all duration-200 inline-block border-2 border-blue mt-7">Tell Us What You Need →</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          <div className="p-8 px-[26px] rounded-[16px] bg-off border-2 border-transparent hover:border-border hover:-translate-y-[5px] hover:shadow-[0_18px_48px_rgba(12,17,23,.07)] transition-all duration-320 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-lime scale-x-0 origin-left transition-transform duration-320 group-hover:scale-x-100"></div>
            <div className="w-12 h-12 rounded-[12px] flex items-center justify-center text-2xl mb-[18px] bg-lime/12"><FaUsers /></div>
            <div className="text-[17px] font-extrabold text-ink mb-[9px]">HR Management & Advisory</div>
            <div className="text-[13px] leading-[1.75] text-muted">Your outsourced HR team — people operations, compliance, payroll, policies, employee relations, and strategic workforce planning.</div>
            <div className="flex flex-wrap gap-[5px] mt-[14px]">
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Policies</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Payroll</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Compliance</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Employee Relations</span>
            </div>
          </div>
          <div className="p-8 px-[26px] rounded-[16px] bg-off border-2 border-transparent hover:border-border hover:-translate-y-[5px] hover:shadow-[0_18px_48px_rgba(12,17,23,.07)] transition-all duration-320 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-sky scale-x-0 origin-left transition-transform duration-320 group-hover:scale-x-100"></div>
            <div className="w-12 h-12 rounded-[12px] flex items-center justify-center text-2xl mb-[18px] bg-sky/10"><FaBriefcase /></div>
            <div className="text-[17px] font-extrabold text-ink mb-[9px]">Business Consulting</div>
            <div className="text-[13px] leading-[1.75] text-muted">Strategy, finance, legal operations, and organisational design to help your business scale with structure and confidence.</div>
            <div className="flex flex-wrap gap-[5px] mt-[14px]">
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Strategy</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Ops Design</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Legal</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Finance</span>
            </div>
          </div>
          <div className="p-8 px-[26px] rounded-[16px] bg-off border-2 border-transparent hover:border-border hover:-translate-y-[5px] hover:shadow-[0_18px_48px_rgba(12,17,23,.07)] transition-all duration-320 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-mint scale-x-0 origin-left transition-transform duration-320 group-hover:scale-x-100"></div>
            <div className="w-12 h-12 rounded-[12px] flex items-center justify-center text-2xl mb-[18px] bg-mint/10"><FaBullseye /></div>
            <div className="text-[17px] font-extrabold text-ink mb-[9px]">Career Consulting</div>
            <div className="text-[13px] leading-[1.75] text-muted">Coaching, CV rewrites, LinkedIn optimisation, interview prep, and promotion strategy for every stage of your career.</div>
            <div className="flex flex-wrap gap-[5px] mt-[14px]">
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">CV Rewrite</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Interview Prep</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">LinkedIn</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Coaching</span>
            </div>
          </div>
          <div className="p-8 px-[26px] rounded-[16px] bg-off border-2 border-transparent hover:border-border hover:-translate-y-[5px] hover:shadow-[0_18px_48px_rgba(12,17,23,.07)] transition-all duration-320 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-purple scale-x-0 origin-left transition-transform duration-320 group-hover:scale-x-100"></div>
            <div className="w-12 h-12 rounded-[12px] flex items-center justify-center text-2xl mb-[18px] bg-purple/10"><FaSearch /></div>
            <div className="text-[17px] font-extrabold text-ink mb-[9px]">Talent Recruitment</div>
            <div className="text-[13px] leading-[1.75] text-muted">End-to-end hiring support, from job brief to first day — backed by a 26,000-person job-seeker community.</div>
            <div className="flex flex-wrap gap-[5px] mt-[14px]">
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Sourcing</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Screening</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Onboarding</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Guarantee</span>
            </div>
          </div>
          <div className="p-8 px-[26px] rounded-[16px] bg-off border-2 border-transparent hover:border-border hover:-translate-y-[5px] hover:shadow-[0_18px_48px_rgba(12,17,23,.07)] transition-all duration-320 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange scale-x-0 origin-left transition-transform duration-320 group-hover:scale-x-100"></div>
            <div className="w-12 h-12 rounded-[12px] flex items-center justify-center text-2xl mb-[18px] bg-orange/10"><FaGlobeAmericas /></div>
            <div className="text-[17px] font-extrabold text-ink mb-[9px]">Media & Sponsorships</div>
            <div className="text-[13px] leading-[1.75] text-muted">Reach 106,000+ professionals across our newsletter, WhatsApp community, and social channels — with bespoke campaigns.</div>
            <div className="flex flex-wrap gap-[5px] mt-[14px]">
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Newsletter</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">WhatsApp</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Social</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Events</span>
            </div>
          </div>
          <div className="p-8 px-[26px] rounded-[16px] bg-off border-2 border-transparent hover:border-border hover:-translate-y-[5px] hover:shadow-[0_18px_48px_rgba(12,17,23,.07)] transition-all duration-320 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-red scale-x-0 origin-left transition-transform duration-320 group-hover:scale-x-100"></div>
            <div className="w-12 h-12 rounded-[12px] flex items-center justify-center text-2xl mb-[18px] bg-red/10"><FaShieldAlt /></div>
            <div className="text-[17px] font-extrabold text-ink mb-[9px]">Legal & Tax Advisory</div>
            <div className="text-[13px] leading-[1.75] text-muted">Stay compliant, stay ahead — employment law, contracts, tax guidance, and regulatory support for SMEs and startups.</div>
            <div className="flex flex-wrap gap-[5px] mt-[14px]">
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Contracts</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Compliance</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Tax</span>
              <span className="text-[10px] font-bold bg-white text-muted px-[9px] py-[3px] rounded-full border border-border">Regulatory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
