import React from 'react'

export default function AudBar(){
  return (
    <div className="bg-white border-b border-border px-[52px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div className="py-7 px-6 text-center border-r border-border lg:text-left lg:pl-0">
          <div className="font-serif text-[36px] text-ink leading-[1] tracking-[-1px]">106<span className="text-mint">k+</span></div>
          <div className="text-[11px] font-bold text-muted uppercase tracking-[.7px] mt-[5px]">Total Reach</div>
          <div className="text-[11px] text-muted mt-[3px] leading-[1.4]">Across 4 owned channels<br/>All organic, all opted-in</div>
        </div>
        <div className="py-7 px-6 text-center border-r border-border">
          <div className="font-serif text-[36px] text-mint leading-[1] tracking-[-1px]">26k</div>
          <div className="text-[11px] font-bold text-muted uppercase tracking-[.7px] mt-[5px]">WhatsApp Community</div>
          <div className="text-[11px] text-muted mt-[3px] leading-[1.4]">Direct inbox · no algorithm</div>
          <div className="inline-block bg-mint-l text-mint-d text-[10px] font-bold px-[9px] py-[3px] rounded-full mt-[6px]">85% open rate</div>
        </div>
        <div className="py-7 px-6 text-center border-r border-border">
          <div className="font-serif text-[36px] text-amber leading-[1] tracking-[-1px]">26k</div>
          <div className="text-[11px] font-bold text-muted uppercase tracking-[.7px] mt-[5px]">Newsletter</div>
          <div className="text-[11px] text-muted mt-[3px] leading-[1.4]">The GenZ HR Brief · weekly</div>
          <div className="inline-block bg-mint-l text-mint-d text-[10px] font-bold px-[9px] py-[3px] rounded-full mt-[6px]">44% open rate</div>
        </div>
        <div className="py-7 px-6 text-center border-r border-border">
          <div className="font-serif text-[36px] text-[#E91E8C] leading-[1] tracking-[-1px]">30k</div>
          <div className="text-[11px] font-bold text-muted uppercase tracking-[.7px] mt-[5px]">Social Media</div>
          <div className="text-[11px] text-muted mt-[3px] leading-[1.4]">Instagram, LinkedIn, TikTok, X</div>
          <div className="inline-block bg-mint-l text-mint-d text-[10px] font-bold px-[9px] py-[3px] rounded-full mt-[6px]">5.8% engagement</div>
        </div>
        <div className="py-7 px-6 text-center lg:border-r-0">
          <div className="font-serif text-[36px] text-sky leading-[1] tracking-[-1px]">24k</div>
          <div className="text-[11px] font-bold text-muted uppercase tracking-[.7px] mt-[5px]">Founder's Page</div>
          <div className="text-[11px] text-muted mt-[3px] leading-[1.4]">Personal brand · highest trust</div>
          <div className="inline-block bg-mint-l text-mint-d text-[10px] font-bold px-[9px] py-[3px] rounded-full mt-[6px]">7.2% engagement</div>
        </div>
      </div>
    </div>
  )
}
