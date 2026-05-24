import React from 'react'
import { FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "GenZ HR stepped in when we were scaling fast with no HR structure. Within 3 months they had policies, payroll, and a recruitment process running — all remotely. Incredibly professional and genuinely understood our context.",
    name: "Adaeze Okonkwo",
    role: "CEO · Fintech Startup, Lagos",
    av: "pa-a"
  },
  {
    text: "Their career consulting completely changed my trajectory. I'd been stuck at the same level for 2 years. Within 4 months of working with them I had a new role at a better company with a 40% salary increase.",
    name: "Taiwo Fashola",
    role: "Head of Product · Tech Company, Abuja",
    av: "pa-b"
  },
  {
    text: "We ran one WhatsApp job blast for a role we'd been struggling to fill for 6 weeks. 140 qualified applications in 48 hours. We've since signed a monthly retainer. Nothing else comes close.",
    name: "Nnamdi Kalu",
    role: "COO · E-commerce Company, Lagos",
    av: "pa-c"
  },
  {
    text: "The GenZ HR team completely transformed our onboarding process. Our new hire retention went up by 65% in just 6 months. They're truly partners in growth.",
    name: "Zainab Abdullahi",
    role: "HR Director · Retail Brand, Kano",
    av: "pa-a"
  },
  {
    text: "As a startup founder, I didn't have time to handle HR. GenZ HR became our outsourced HR team — professional, reliable, and always available when we needed them.",
    name: "Dapo Ogunleye",
    role: "Founder · SaaS Startup, Ibadan",
    av: "pa-b"
  }
]

const TestimonialsColumn = ({ className, testimonials, duration = 10 }) => {
  return (
    <div className={className} style={{ overflow: 'hidden' }}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        className="flex flex-col gap-3 pb-3"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, name, role, av }, i) => (
              <div
                key={i}
                className="p-8 rounded-[24px] border border-white/8 shadow-[0_10px_40px_rgba(0,0,0,0.15)] max-w-[320px] w-full bg-white/5"
              >
                <div className="flex items-center gap-1 mb-4 text-lime text-[13px]">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>
                <div className="font-serif text-[16px] italic text-white leading-[1.65] mb-5">
                  "{text}"
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-[13px] text-white ${av === 'pa-a' ? 'bg-gradient-to-br from-blue to-sky' : av === 'pa-b' ? 'bg-gradient-to-br from-[#1B4D3E] to-[#2A7A5E]' : 'bg-gradient-to-br from-[#5A1B6B] to-purple'}`}>
                    {name.charAt(0)}{name.split(' ')[1]?.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-white text-[14px]">{name}</div>
                    <div className="text-white/30 text-[11px]">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}

export default function Proof() {
  return (
    <section className="bg-blue py-25 px-4 lg:px-[52px]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
        <div className="text-[10.5px] font-extrabold uppercase tracking-[2px] text-lime/55 mb-[14px]">Client Stories</div>
        <h2 className="font-serif text-[clamp(34px,4vw,52px)] text-white leading-[1.12] mb-4 max-w-[580px] mx-auto">What Our Clients<br/><em className="not-italic text-lime">Say About Working With Us.</em></h2>
        <div className="grid grid-cols-1 gap-4 mt-[52px] h-[520px] overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          <TestimonialsColumn testimonials={testimonials} duration={25} />
          <TestimonialsColumn testimonials={[...testimonials].reverse()} duration={30} className="hidden md:block" />
          <TestimonialsColumn testimonials={[...testimonials].sort(() => Math.random() - 0.5)} duration={35} className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
