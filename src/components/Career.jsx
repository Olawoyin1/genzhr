import React from 'react'
import { FaMap, FaComments, FaFileAlt, FaBullseye, FaChartLine } from 'react-icons/fa'

export default function Career(){
  return (
    <section className="bg-ink py-25 relative overflow-hidden lg:px-[52px]" id="career">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_70%_at_100%_50%,rgba(26,107,255,.14)_0%,transparent_60%)]"></div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-[72px] items-start lg:grid-cols-2">
        <div>
          <div className="text-[10.5px] font-extrabold uppercase tracking-[2px] text-lime/60 mb-[14px]">Career Consulting</div>
          <h2 className="font-serif text-[clamp(34px,4vw,52px)] text-white leading-[1.12] mb-4">We Help People Build<br/>Careers They're<br/><em className="not-italic text-lime">Proud Of.</em></h2>
          <p className="text-[15px] leading-[1.8] text-white/45 mb-9">Whether you're just starting out or navigating a critical turning point — we provide clarity, a roadmap, and coaching to move with purpose. With 106,000 people in our community, we know exactly what's working in the Nigerian job market right now.</p>
          <a href="mailto:contact@thegenzhr.com" className="bg-lime text-ink px-9 py-[15px] rounded-[7px] text-[14.5px] font-extrabold no-underline hover:bg-lime-d hover:-translate-y-[2px] hover:shadow-[0_10px_32px_rgba(200,241,53,.28)] transition-all duration-250 border-2 border-lime inline-block mb-9">Book a Career Session →</a>
          <div className="flex flex-col gap-0 mt-9">
            <div className="flex gap-[18px] items-start p-[22px] border-b border-white/6 hover:bg-white/4 transition-colors duration-180 rounded-[10px]">
              <div className="font-serif text-[32px] text-lime opacity-35 flex-shrink-0 leading-[1] w-8">01</div>
              <div><div className="text-[15px] font-extrabold text-white mb-[5px]">Young Professionals &amp; Gen Z</div><div className="text-[12.5px] leading-[1.7] text-white/45">Career clarity, CV and LinkedIn optimisation, job search strategy, interview coaching, salary negotiation — everything you need to land the role and grow into it.</div></div>
            </div>
            <div className="flex gap-[18px] items-start p-[22px] border-b border-white/6 hover:bg-white/4 transition-colors duration-180 rounded-[10px]">
              <div className="font-serif text-[32px] text-lime opacity-35 flex-shrink-0 leading-[1] w-8">02</div>
              <div><div className="text-[15px] font-extrabold text-white mb-[5px]">Mid-Career Professionals</div><div className="text-[12.5px] leading-[1.7] text-white/45">Strategic repositioning, personal branding, navigating pivots, industry transitions, and finding your next step with confidence and a clear plan.</div></div>
            </div>
            <div className="flex gap-[18px] items-start p-[22px] hover:bg-white/4 transition-colors duration-180 rounded-[10px]">
              <div className="font-serif text-[32px] text-lime opacity-35 flex-shrink-0 leading-[1] w-8">03</div>
              <div><div className="text-[15px] font-extrabold text-white mb-[5px]">Senior Professionals &amp; Executives</div><div className="text-[12.5px] leading-[1.7] text-white/45">Executive positioning, promotion strategy, leadership brand development, and scaling your influence and impact at the highest levels.</div></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[14px]">
          <div className="p-[22px] bg-white/4 border-[1.5px] border-white/7 rounded-[12px] hover:border-sky/38 transition-colors duration-220">
            <div className="text-2xl mb-[10px]"><FaMap /></div>
            <h3 className="text-[14px] font-extrabold text-white mb-[5px]">Career Roadmapping</h3>
            <p className="text-[12.5px] leading-[1.6] text-white/45">A clear, personalised 12–24 month career roadmap built around your goals, strengths, and the actual realities of your industry and market.</p>
          </div>
          <div className="p-[22px] bg-white/4 border-[1.5px] border-white/7 rounded-[12px] hover:border-sky/38 transition-colors duration-220">
            <div className="text-2xl mb-[10px]"><FaComments /></div>
            <h3 className="text-[14px] font-extrabold text-white mb-[5px]">1-on-1 Coaching Sessions</h3>
            <p className="text-[12.5px] leading-[1.6] text-white/45">Dedicated sessions with an experienced career consultant who understands the Nigerian and African professional landscape — not imported career advice that doesn't fit.</p>
          </div>
          <div className="p-[22px] bg-white/4 border-[1.5px] border-white/7 rounded-[12px] hover:border-sky/38 transition-colors duration-220">
            <div className="text-2xl mb-[10px]"><FaFileAlt /></div>
            <h3 className="text-[14px] font-extrabold text-white mb-[5px]">CV, LinkedIn &amp; Portfolio Rewrite</h3>
            <p className="text-[12.5px] leading-[1.6] text-white/45">Complete overhaul of your professional documents and online presence to stand out to the right opportunities. ATS-optimised, voice-matched, recruiter-tested.</p>
          </div>
          <div className="p-[22px] bg-white/4 border-[1.5px] border-white/7 rounded-[12px] hover:border-sky/38 transition-colors duration-220">
            <div className="text-2xl mb-[10px]"><FaBullseye /></div>
            <h3 className="text-[14px] font-extrabold text-white mb-[5px]">Job Search &amp; Interview Prep</h3>
            <p className="text-[12.5px] leading-[1.6] text-white/45">Strategic job search planning, application coaching, and rigorous mock interview preparation to maximise your conversion rate from application to offer.</p>
          </div>
          <div className="p-[22px] bg-white/4 border-[1.5px] border-white/7 rounded-[12px] hover:border-sky/38 transition-colors duration-220">
            <div className="text-2xl mb-[10px]"><FaChartLine /></div>
            <h3 className="text-[14px] font-extrabold text-white mb-[5px]">Salary Negotiation Coaching</h3>
            <p className="text-[12.5px] leading-[1.6] text-white/45">Market rate research, word-for-word negotiation scripts, and post-offer support. If this session gets you ₦30k more per month, it pays back 24× in year one.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
