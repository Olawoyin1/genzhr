import React from 'react'

export default function CTA(){
  return (
    <section className="bg-lime py-[110px] px-[52px] text-center relative overflow-hidden">
      <div className="absolute -bottom-[50px] left-1/2 -translate-x-1/2 font-serif text-[220px] text-ink/5 whitespace-nowrap tracking-[-8px] pointer-events-none">GROW</div>
      <h2 className="font-serif text-[clamp(34px,4vw,52px)] text-ink leading-[1.12] mb-[14px] text-center relative">Ready to Build Something<br/><em className="not-italic text-sky">Great Together?</em></h2>
      <p className="text-[16px] leading-[1.8] text-ink/58 max-w-[560px] mx-auto mb-10 text-center relative">Whether you need HR support, career guidance, a recruitment partner, or access to 106,000 professionals — we're ready to work with you.</p>
      <div className="relative flex flex-wrap justify-center gap-3">
        <a href="mailto:contact@thegenzhr.com" className="bg-ink text-white px-10 py-4 rounded-[7px] text-[14.5px] font-extrabold no-underline hover:bg-blue hover:border-blue hover:-translate-y-[2px] transition-all duration-220 border-2 border-ink inline-block">Email Us Today →</a>
        <a href="mailto:partnerships@thegenzhr.com" className="bg-transparent text-ink/55 px-10 py-4 rounded-[7px] text-[14.5px] font-bold no-underline hover:border-ink hover:text-ink transition-all duration-220 border-2 border-ink inline-block">Partnership Enquiries</a>
        <a href="tel:+2348168545860" className="bg-transparent text-ink/55 px-10 py-4 rounded-[7px] text-[14.5px] font-bold no-underline hover:border-ink hover:text-ink transition-all duration-220 border-2 border-ink inline-block">+234 816 854 5860</a>
      </div>
    </section>
  )
}
