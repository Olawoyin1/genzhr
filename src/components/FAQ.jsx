import React, { useState } from 'react'

export default function FAQ(){
  const [open, setOpen] = useState(0)
  const faqs = [
    { q: 'What types of businesses do you work with?', a: 'We primarily serve SMEs, early-stage startups, and NGOs across Nigeria and Africa. We also work with larger organisations that have existing HR teams but need specialist support for specific projects. For brands, recruiters, and employers, we offer media and sponsorship access to our 106,000-person professional community.' },
    { q: 'How does the remote HR service actually work?', a: 'All HR services are delivered fully remotely using WhatsApp, Zoom, Slack, email, and HR management platforms with a dedicated consultant and account manager.' },
    { q: 'How is pricing structured for the HR packages?', a: 'Packages are monthly subscriptions tailored based on your team size, specific scope of services, and business stage. Contact us for a tailored proposal within 48 hours.' },
    { q: 'How do media and sponsorship packages work?', a: 'Brands pay to reach our audience via newsletter placements, WhatsApp broadcasts, social campaigns, company spotlights, and event sponsorships. Editorial copy is written by us and approved by you.' },
    { q: "What's included in your recruitment guarantee?", a: 'Full-cycle recruitment has a 60-day replacement guarantee; sourcing + shortlist has a 30-day guarantee.' },
    { q: 'Who is career consulting suitable for?', a: 'Young professionals, mid-career professionals, and senior leaders seeking promotion strategy and leadership positioning.' },
    { q: 'Can I start with a lower HR package and upgrade?', a: 'Yes — upgrades are easy and typically activated within one billing cycle.' },
  ]

  return (
    <section className="bg-white py-[90px]  lg:px-[52px]" id="contact">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-[60px] items-start lg:grid-cols-2">
          <div>
            <div className="inline-block text-[10.5px] font-extrabold uppercase tracking-[2px] text-sky mb-[14px]">FAQ</div>
            <h2 className="font-serif text-[clamp(34px,4vw,52px)] text-ink leading-[1.12] mb-4">Questions We Hear<br/><em className="not-italic text-sky">Most Often.</em></h2>
            <p className="text-[14px] text-muted mt-4">Can't find your answer? Email us at <strong>contact@thegenzhr.com</strong></p>
          </div>
          <div className="mt-11">
            {faqs.map((f,i)=> (
              <div key={i} className={` ${open===i?'open':''}`}>
                <div className="flex justify-between items-center py-5 cursor-pointer text-[15px] font-bold text-ink hover:text-sky transition-colors duration-180 select-none gap-4" onClick={()=>setOpen(open===i?-1:i)}>{f.q} <span className={`w-[26px] h-[26px] rounded-full border-[1.5px] border-border flex items-center justify-center text-[15px] text-muted flex-shrink-0 transition-all duration-280 ${open===i?'bg-sky border-sky text-white rotate-45':''}`}>+</span></div>
                <div className={`overflow-hidden transition-[max-height] duration-400 text-[13.5px] leading-[1.8] text-muted ${open===i?'max-h-[300px]':'max-h-0'}`}><div className="pb-[18px]">{f.a}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
