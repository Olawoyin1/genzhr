import React, { useState } from 'react'
import { FaBullhorn, FaDollarSign, FaUsers, FaChartLine, FaEnvelope, FaComments, FaBriefcase, FaMobileAlt, FaBuilding, FaStar, FaChartBar, FaMapMarkerAlt, FaGraduationCap, FaCoins, FaFire } from 'react-icons/fa'

export default function Media(){
  const [tab, setTab] = useState('b2b')
  return (
    <section className="bg-ink py-25 lg:px-[52px]" id="media">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="text-[10.5px] font-extrabold uppercase tracking-[2px] text-lime/60 mb-[14px]">Media, Community &amp; Audience Access</div>
        <h2 className="font-serif text-[clamp(32px,3.8vw,50px)] text-white leading-[1.1] mb-[14px]">106,000 professionals.<br/><em className="not-italic text-lime">Ready for your brand.</em></h2>
        <p className="text-[15px] leading-[1.8] text-white/45 max-w-[560px] mb-12">The GenZ HR is Nigeria's largest HR and career community — fully owned, fully opted-in, algorithm-free. Brands, recruiters, and employers pay to access our audience because there is no comparable channel in Nigeria for this demographic.</p>
        <div className="flex gap-[7px] mb-9 flex-wrap">
          <button className={`px-[18px] flex items-center gap-2 py-[9px] rounded-full text-[12.5px] font-bold cursor-pointer transition-all duration-180 border-[1.5px] ${tab==='b2b' ? 'bg-lime text-ink border-lime' : 'bg-transparent text-white/45 border-white/10 hover:border-white/30 hover:text-white/80'}`} onClick={()=>setTab('b2b')}><FaBullhorn /> Brand &amp; Sponsor Packages</button>
          <button className={`px-[18px] py-[9px] flex items-center gap-2 rounded-full text-[12.5px] font-bold cursor-pointer transition-all duration-180 border-[1.5px] ${tab==='rates' ? 'bg-lime text-ink border-lime' : 'bg-transparent text-white/45 border-white/10 hover:border-white/30 hover:text-white/80'}`} onClick={()=>setTab('rates')}><FaDollarSign /> Rate Card</button>
          <button className={`px-[18px] py-[9px] rounded-full text-[12.5px] font-bold cursor-pointer transition-all  flex items-center gap-2 duration-180 border-[1.5px] ${tab==='audience' ? 'bg-lime text-ink border-lime' : 'bg-transparent text-white/45 border-white/10 hover:border-white/30 hover:text-white/80'}`} onClick={()=>setTab('audience')}><FaUsers /> Audience Profile</button>
          <button className={`px-[18px] py-[9px]  flex items-center gap-2 rounded-full text-[12.5px] font-bold cursor-pointer transition-all duration-180 border-[1.5px] ${tab==='roadmap' ? 'bg-lime text-ink border-lime' : 'bg-transparent text-white/45 border-white/10 hover:border-white/30 hover:text-white/80'}`} onClick={()=>setTab('roadmap')}><FaChartLine /> Monetization Roadmap</button>
        </div>

        {tab==='b2b' && (
          <div className="animate-up">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-[22px] bg-white/4 border-[1.5px] border-white/8 rounded-[14px] hover:border-lime/22 hover:-translate-y-[3px] transition-all duration-220">
                <div className="text-2xl text-white mb-[10px]"><FaEnvelope /></div>
                <div className="text-[13.5px] font-extrabold text-white mb-[5px]">Newsletter Dedicated Send</div>
                <div className="text-[12px] leading-[1.65] text-white mb-[10px]">Your brand owns an entire edition sent to 26,000 opted-in subscribers. 44% open rate. Editorial copy written by our team, you approve before send.</div>
                <span className="text-[12px] font-bold text-lime bg-lime/10 px-[10px] py-[3px] rounded-full inline-block">₦200,000 per send</span>
              </div>
              <div className="p-[22px] bg-white/ border-[1.5px] border-white/8 rounded-[14px] hover:border-lime/22 hover:-translate-y-[3px] transition-all duration-220">
                <div className="text-2xl text-white mb-[10px]"><FaComments /></div>
                <div className="text-[13.5px] font-extrabold text-white mb-[5px]">WhatsApp Community Broadcast</div>
                <div className="text-[12px] leading-[1.65] text-white mb-[10px]">Direct sponsored message to 26,000 active community members. 85% open rate — the highest engagement of any digital channel in Nigeria.</div>
                <span className="text-[12px] font-bold text-lime bg-lime/10 px-[10px] py-[3px] rounded-full inline-block">₦300,000 per broadcast</span>
              </div>
              <div className="p-[22px] bg-white/4 border-[1.5px] border-white/8 rounded-[14px] hover:border-lime/22 hover:-translate-y-[3px] transition-all duration-220">
                <div className="text-2xl  text-white mb-[10px]"><FaBriefcase /></div>
                <div className="text-[13.5px] font-extrabold text-white mb-[5px]">Job Listing Blast</div>
                <div className="text-[12px] leading-[1.65] text-white mb-[10px]">Your open role sent directly to 26,000 active job seekers via WhatsApp. 50–200 applications arrive within 48 hours.</div>
                <span className="text-[12px] font-bold text-lime bg-lime/10 px-[10px] py-[3px] rounded-full inline-block">₦50,000 per listing</span>
              </div>
              <div className="p-[22px] bg-white/4 border-[1.5px] border-white/8 rounded-[14px] hover:border-lime/22 hover:-translate-y-[3px] transition-all duration-220">
                <div className="text-2xl  text-white mb-[10px]"><FaMobileAlt /></div>
                <div className="text-[13.5px] font-extrabold text-white mb-[5px]">Social Media Campaign</div>
                <div className="text-[12px] leading-[1.65] text-white mb-[10px]">Branded posts, stories, and reels across our 30,000-follower social media presence. 3-post or full-campaign packages available.</div>
                <span className="text-[12px] font-bold text-lime bg-lime/10 px-[10px] py-[3px] rounded-full inline-block">₦120,000 — 3 posts</span>
              </div>
              <div className="p-[22px] bg-white/4 border-[1.5px] border-white/8 rounded-[14px] hover:border-lime/22 hover:-translate-y-[3px] transition-all duration-220">
                <div className="text-2xl  text-white mb-[10px]"><FaBuilding /></div>
                <div className="text-[13.5px] font-extrabold text-white mb-[5px]">Company Spotlight Feature</div>
                <div className="text-[12px] leading-[1.65] text-white mb-[10px]">Editorial deep-dive on your company — culture, values, benefits, open roles. Distributed across all our channels. The definitive employer branding product.</div>
                <span className="text-[12px] font-bold text-lime bg-lime/10 px-[10px] py-[3px] rounded-full inline-block">₦400,000 per feature</span>
              </div>
              <div className="p-[22px] bg-white/4 border-[1.5px] border-white/8 rounded-[14px] hover:border-lime/22 hover:-translate-y-[3px] transition-all duration-220">
                <div className="text-2xl  text-white mb-[10px]"><FaStar /></div>
                <div className="text-[13.5px] font-extrabold text-white mb-[5px]">Monthly Brand Partner</div>
                <div className="text-[12px] leading-[1.65] text-white mb-[10px]">Category-exclusive presence across all channels for a full month. Newsletter, WhatsApp, social, events — your brand woven into everything we publish.</div>
                <span className="text-[12px] font-bold text-lime bg-lime/10 px-[10px] py-[3px] rounded-full inline-block">₦1,200,000/month</span>
              </div>
            </div>
          </div>
        )}

        {tab==='rates' && (
          <div className="animate-up">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-[9px] px-[14px] text-[10.5px] font-bold uppercase tracking-[.7px] text-white/35 border-b border-white/8 bg-white/3">Placement</th>
                  <th className="text-left p-[9px] px-[14px] text-[10.5px] font-bold uppercase tracking-[.7px] text-white/35 border-b border-white/8 bg-white/3">Channel</th>
                  <th className="text-left p-[9px] px-[14px] text-[10.5px] font-bold uppercase tracking-[.7px] text-white/35 border-b border-white/8 bg-white/3">Est. Reach</th>
                  <th className="text-left p-[9px] px-[14px] text-[10.5px] font-bold uppercase tracking-[.7px] text-white/35 border-b border-white/8 bg-white/3">Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-white/3">
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><strong>Dedicated newsletter send</strong></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><span className="inline-block text-[10px] font-bold px-[8px] py-[2px] rounded-full mx-[2px] my-[2px] bg-mint/15 text-mint">Newsletter</span></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65">~11,440 opens</td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-lime font-bold whitespace-nowrap">₦200,000</td>
                </tr>
                <tr className="hover:bg-white/3">
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><strong>Newsletter header placement</strong></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><span className="inline-block text-[10px] font-bold px-[8px] py-[2px] rounded-full mx-[2px] my-[2px] bg-mint/15 text-mint">Newsletter</span></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65">~11,440 opens</td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-lime font-bold whitespace-nowrap">₦85,000</td>
                </tr>
                <tr className="hover:bg-white/3">
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><strong>Newsletter mid-body (native)</strong></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><span className="inline-block text-[10px] font-bold px-[8px] py-[2px] rounded-full mx-[2px] my-[2px] bg-mint/15 text-mint">Newsletter</span></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65">~9,200 reach</td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-lime font-bold whitespace-nowrap">₦55,000</td>
                </tr>
                <tr className="hover:bg-white/3">
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><strong>Newsletter footer listing</strong></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><span className="inline-block text-[10px] font-bold px-[8px] py-[2px] rounded-full mx-[2px] my-[2px] bg-mint/15 text-mint">Newsletter</span></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65">~7,000 reach</td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-lime font-bold whitespace-nowrap">₦25,000</td>
                </tr>
                <tr className="hover:bg-white/3">
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><strong>WhatsApp sponsored broadcast</strong></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><span className="inline-block text-[10px] font-bold px-[8px] py-[2px] rounded-full mx-[2px] my-[2px] bg-mint/15 text-mint">WhatsApp</span></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65">~22,100 members</td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-lime font-bold whitespace-nowrap">₦300,000</td>
                </tr>
                <tr className="hover:bg-white/3">
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><strong>WhatsApp job listing blast</strong></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><span className="inline-block text-[10px] font-bold px-[8px] py-[2px] rounded-full mx-[2px] my-[2px] bg-mint/15 text-mint">WhatsApp</span></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65">~22,100 members</td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-lime font-bold whitespace-nowrap">₦50,000</td>
                </tr>
                <tr className="hover:bg-white/3">
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><strong>Social media campaign (3 posts)</strong></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><span className="inline-block text-[10px] font-bold px-[8px] py-[2px] rounded-full mx-[2px] my-[2px] bg-[rgba(233,30,140,.1)] text-[#E91E8C]">Social</span></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65">~30,000 followers</td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-lime font-bold whitespace-nowrap">₦120,000</td>
                </tr>
                <tr className="hover:bg-white/3">
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><strong>Founder personal endorsement post</strong></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><span className="inline-block text-[10px] font-bold px-[8px] py-[2px] rounded-full mx-[2px] my-[2px] bg-[rgba(233,30,140,.1)] text-[#E91E8C]">Founder</span></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65">24,000 followers</td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-lime font-bold whitespace-nowrap">₦250,000</td>
                </tr>
                <tr className="hover:bg-white/3">
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><strong>Company spotlight (all channels)</strong></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><span className="inline-block text-[10px] font-bold px-[8px] py-[2px] rounded-full mx-[2px] my-[2px] bg-white/8 text-white/55">All channels</span></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65">Full audience</td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-lime font-bold whitespace-nowrap">₦400,000</td>
                </tr>
                <tr className="hover:bg-white/3">
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><strong>Virtual event title sponsor</strong></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><span className="inline-block text-[10px] font-bold px-[8px] py-[2px] rounded-full mx-[2px] my-[2px] bg-white/8 text-white/55">All channels</span></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65">Full audience</td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-lime font-bold whitespace-nowrap">₦350,000</td>
                </tr>
                <tr className="hover:bg-white/3">
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><strong>Monthly brand partner (category exclusive)</strong></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65"><span className="inline-block text-[10px] font-bold px-[8px] py-[2px] rounded-full mx-[2px] my-[2px] bg-white/8 text-white/55">All channels</span></td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-white/65">Full audience monthly</td>
                  <td className="p-[11px] px-[14px] border-b border-white/5 text-[13px] align-top leading-[1.5] text-lime font-bold whitespace-nowrap">₦1,200,000/mo</td>
                </tr>
                <tr className="hover:bg-white/3">
                  <td className="p-[11px] px-[14px] text-[13px] align-top leading-[1.5] text-white/65"><strong>Annual media partner</strong></td>
                  <td className="p-[11px] px-[14px] text-[13px] align-top leading-[1.5] text-white/65"><span className="inline-block text-[10px] font-bold px-[8px] py-[2px] rounded-full mx-[2px] my-[2px] bg-white/8 text-white/55">All channels</span></td>
                  <td className="p-[11px] px-[14px] text-[13px] align-top leading-[1.5] text-white/65">Full year</td>
                  <td className="p-[11px] px-[14px] text-[13px] align-top leading-[1.5] text-lime font-bold whitespace-nowrap">₦5,000,000/yr</td>
                </tr>
              </tbody>
            </table>
            <p className="text-[15px] leading-[1.8] text-white/45 mt-6">All placements include editorial copy written by our team (sponsor approves), post-campaign performance report, and a named account manager. Contact partnerships@thegenzhr.com for custom packages.</p>
          </div>
        )}

        {tab==='audience' && (
          <div className="animate-up">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-[22px] bg-white/4 border-[1.5px] border-white/8 rounded-[14px] hover:border-lime/22 hover:-translate-y-[3px] transition-all duration-220">
                <div className="text-2xl mb-[10px]"><FaChartBar /></div>
                <div className="text-[13.5px] font-extrabold text-white mb-[5px]">Age Distribution</div>
                <div className="text-[12px] leading-[1.65] text-white">72% are 22–31 — the peak career-building and financial decision-making demographic in Nigeria.</div>
              </div>
              <div className="p-[22px] bg-white/4 border-[1.5px] border-white/8 rounded-[14px] hover:border-lime/22 hover:-translate-y-[3px] transition-all duration-220">
                <div className="text-2xl mb-[10px]"><FaBriefcase /></div>
                <div className="text-[13.5px] font-extrabold text-white mb-[5px]">Career Stage</div>
                <div className="text-[12px] leading-[1.65] text-white">41% are actively job-seeking right now — the highest-intent moment for product adoption and service conversion.</div>
              </div>
              <div className="p-[22px] bg-white/4 border-[1.5px] border-white/8 rounded-[14px] hover:border-lime/22 hover:-translate-y-[3px] transition-all duration-220">
                <div className="text-2xl mb-[10px]"><FaMapMarkerAlt /></div>
                <div className="text-[13.5px] font-extrabold text-white mb-[5px]">Location</div>
                <div className="text-[12px] leading-[1.65] text-white">79% are in Nigeria's top 3 commercial cities — ideal for brands with digital or physical presence in Lagos, Abuja, and Port Harcourt.</div>
              </div>
              <div className="p-[22px] bg-white/4 border-[1.5px] border-white/8 rounded-[14px] hover:border-lime/22 hover:-translate-y-[3px] transition-all duration-220">
                <div className="text-2xl mb-[10px]"><FaGraduationCap /></div>
                <div className="text-[13.5px] font-extrabold text-white mb-[5px]">Education</div>
                <div className="text-[12px] leading-[1.65] text-white">80% hold at minimum a bachelor's degree — a highly educated audience with above-average purchasing power.</div>
              </div>
              <div className="p-[22px] bg-white/4 border-[1.5px] border-white/8 rounded-[14px] hover:border-lime/22 hover:-translate-y-[3px] transition-all duration-220">
                <div className="text-2xl mb-[10px]"><FaCoins /></div>
                <div className="text-[13.5px] font-extrabold text-white mb-[5px]">Income &amp; Purchasing Power</div>
                <div className="text-[12px] leading-[1.65] text-white">76% are earning or about to — at the financial inflection point where banking, insurance, and investment products convert at peak rates.</div>
              </div>
              <div className="p-[22px] bg-white/4 border-[1.5px] border-white/8 rounded-[14px] hover:border-lime/22 hover:-translate-y-[3px] transition-all duration-220">
                <div className="text-2xl mb-[10px]"><FaFire /></div>
                <div className="text-[13.5px] font-extrabold text-white mb-[5px]">Why Brands Choose Us</div>
                <div className="text-[12px] leading-[1.65] text-white">Our engagement rates are 3–5× industry average. This is not reach — it is a relationship. When we recommend something, our audience acts.</div>
              </div>
            </div>
          </div>
        )}

        {tab==='roadmap' && (
          <div className="animate-up">
            <p className="text-[15px] leading-[1.8] text-white/45 mb-6">Our 12-month business monetization roadmap — building from immediate revenue streams to large-scale recurring income, systematically and sustainably.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px]">
              <div className="p-5 rounded-[12px] border border-white/8">
                <div className="text-[10px] font-bold uppercase tracking-[1px] text-white/35 mb-[5px]">Month 1-2 · Foundation</div>
                <div className="text-[14px] font-extrabold text-white mb-[3px]">Start Earning Now</div>
                <div className="text-[13px] font-bold text-mint mb-[12px]">₦500k-1.5M/mo</div>
                <ul className="list-none flex flex-col gap-[5px]">
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>CV rewrite flash sales</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>5 founding coaching clients</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>First newsletter sponsorship</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Media kit + B2B outreach</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Paystack payment links live</li>
                </ul>
              </div>
              <div className="p-5 rounded-[12px] border border-white/8">
                <div className="text-[10px] font-bold uppercase tracking-[1px] text-white/35 mb-[5px]">Month 3-4 · Products</div>
                <div className="text-[14px] font-extrabold text-white mb-[3px]">Build Passive Income</div>
                <div className="text-[13px] font-bold text-mint mb-[12px]">₦1.5M-3.5M/mo</div>
                <ul className="list-none flex flex-col gap-[5px]">
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Job Search Accelerator course</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Paid WhatsApp membership tier</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Virtual career workshop (200 seats)</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>First B2B job listing client</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Monthly salary briefing</li>
                </ul>
              </div>
              <div className="p-5 rounded-[12px] border border-white/8">
                <div className="text-[10px] font-bold uppercase tracking-[1px] text-white/35 mb-[5px]">Month 5-8 · B2B Engine</div>
                <div className="text-[14px] font-extrabold text-white mb-[3px]">Scale the Business</div>
                <div className="text-[13px] font-bold text-mint mb-[12px]">₦4M-8M/mo</div>
                <ul className="list-none flex flex-col gap-[5px]">
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>3 employer branding clients</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Top Employers annual ranking</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>First fractional HR retainer</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Physical career fair + sponsors</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Paid workforce intelligence report</li>
                </ul>
              </div>
              <div className="p-5 rounded-[12px] border border-white/8">
                <div className="text-[10px] font-bold uppercase tracking-[1px] text-white/35 mb-[5px]">Month 9-12 · Compounding</div>
                <div className="text-[14px] font-extrabold text-white mb-[3px]">Build Recurring Revenue</div>
                <div className="text-[13px] font-bold text-mint mb-[12px]">₦8M-20M/mo</div>
                <ul className="list-none flex flex-col gap-[5px]">
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Annual media partnerships</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Curriculum licensing to universities</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Graduate salary survey product</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>Expand to 5 Nigerian cities</li>
                  <li className="text-[11.5px] text-white/45 flex gap-[6px] leading-[1.4]"><span className="flex-shrink-0 text-white/25">→</span>National talent placement service</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-lime/8 border border-lime/2 rounded-[12px] px-6 py-5">
              <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-lime mb-[6px]">12-Month Revenue Potential</div>
              <div className="font-serif text-[32px] text-white">₦60M - ₦250M+</div>
              <div className="text-[13px] text-white/45 mt-1">Conservative estimate · depends on execution pace and stream prioritisation</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
