import React from 'react'
import { FaRegStar } from 'react-icons/fa'

export default function Marquee() {
  const items = [
    'HR Management','26,000 Newsletter Subscribers','Career Consulting','26,000 WhatsApp Members','Talent Recruitment','30,000 Social Followers','Business Consulting','Media & Sponsorships','Legal & Tax Advisory','100+ Clients Across Africa'
  ]
  return (
    <div className="bg-lime py-[14px] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {items.concat(items).map((t,i)=> (
          <span key={i} className="inline-flex items-center gap-[22px] px-[22px] text-[11px] font-extrabold tracking-[1.5px] uppercase text-ink">{t} <span className="text-ink/28 text-base"><FaRegStar /></span></span>
        ))}
      </div>
    </div>
  )
}
