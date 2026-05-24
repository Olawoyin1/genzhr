import React, { useState } from 'react'
import { HiMail, HiPhone } from 'react-icons/hi'
import { HiUsers, HiBriefcase, HiBadgeCheck, HiSparkles, HiGlobeAlt, HiShieldCheck } from 'react-icons/hi'
import Header from './Header'

export default function GenZLanding() {
  const [pkg, setPkg] = useState('bronze')
  const [mediaTab, setMediaTab] = useState('b2b')
  const [openFaq, setOpenFaq] = useState(0)

  const services = [
    { title: 'HR Management & Advisory', icon: HiUsers, tags: ['Payroll','Compliance','Policy','Performance'] },
    { title: 'Business Strategy & Operations', icon: HiBriefcase, tags: ['Strategy','Operations','SOPs','Scaling'] },
    { title: 'Media, Community & Sponsorships', icon: HiGlobeAlt, tags: ['Newsletters','WhatsApp','Employer Brand','Ads'] },
    { title: 'Legal & Tax Advisory', icon: HiShieldCheck, tags: ['Labour Law','Contracts','Tax','Compliance'] },
    { title: 'Marketing & Brand Strategy', icon: HiSparkles, tags: ['GTM','Branding','Digital','Employer Brand'] },
    { title: 'Finance & Investment Advisory', icon: HiBadgeCheck, tags: ['Budgeting','Tax','Finance','Compliance'] },
  ]

  const faqs = [
    { q: 'What types of businesses do you work with?', a: 'We primarily serve SMEs, early-stage startups, and NGOs across Nigeria and Africa. We also work with larger organisations that need specialist support.' },
    { q: 'How does the remote HR service actually work?', a: 'All HR services are delivered fully remotely using WhatsApp, Zoom, Slack, email and HR management platforms with a dedicated consultant and account manager.' },
    { q: 'How is pricing structured for the HR packages?', a: 'Packages are monthly subscriptions tailored to team size and scope. Contact us for a tailored proposal within 48 hours.' },
  ]

  return (
    <div>
      <Header />

      {/* HERO */}
      <section id="home" className="bg-gradient-to-br from-sky-900 via-sky-800 to-sky-950 text-white pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-lime-200/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">Nigeria's Premier Career & HR Community</div>
              <h1 className="mt-6 text-5xl font-extrabold leading-tight">Your Partner in <em className="italic text-lime-300">Growth, People,</em> & Business Success.</h1>
              <p className="mt-6 max-w-xl text-slate-200">The GenZ HR supercharges SMEs, professionals, and organisations with strategic consulting across HR, career development, recruitment, media, and beyond — with a community of <strong>106,000+ professionals</strong> behind every service.</p>
              <div className="mt-6 flex gap-4">
                <a href="#packages" className="rounded-full bg-lime-400 px-6 py-3 font-bold text-slate-900">See Our Packages →</a>
                <a href="#services" className="rounded-full border border-white/30 px-6 py-3 text-white">Explore Services</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-8 border-t border-white/10 pt-8 text-sm text-slate-200">
                <div>
                  <div className="text-3xl font-serif">106<span className="text-lime-300">k+</span></div>
                  <div className="uppercase text-xs tracking-wide text-slate-300">Community Reach</div>
                </div>
                <div>
                  <div className="text-3xl font-serif">100<span className="text-lime-300">+</span></div>
                  <div className="uppercase text-xs tracking-wide text-slate-300">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-serif">6</div>
                  <div className="uppercase text-xs tracking-wide text-slate-300">Service Areas</div>
                </div>
                <div>
                  <div className="text-3xl font-serif">4</div>
                  <div className="uppercase text-xs tracking-wide text-slate-300">Owned Channels</div>
                </div>
              </div>
            </div>

            <aside className="relative rounded-2xl bg-white/5 p-8 backdrop-blur border border-white/10">
              <div className="absolute -right-6 top-6 rounded-xl bg-lime-300 px-4 py-3 text-slate-900 shadow">106k <div className="text-xs uppercase">Audience</div></div>
              <div className="pt-12 space-y-4">
                <div className="uppercase text-xs tracking-wider text-white/70">Everything We Do</div>
                {services.map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.title} className="flex items-start gap-4 rounded-xl bg-white/5 p-3">
                      <div className="h-12 w-12 rounded-lg bg-slate-900 text-lime-300 flex items-center justify-center"><Icon /></div>
                      <div>
                        <div className="font-semibold text-white">{s.title}</div>
                        <div className="text-sm text-white/60">{s.tags.join(' · ')}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-lime-200">
        <div className="mx-auto max-w-7xl px-6 py-3 whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee gap-8 font-bold uppercase text-xs tracking-wider">
            {['HR Management','26,000 Newsletter Subscribers','Career Consulting','26,000 WhatsApp Members','Talent Recruitment','30,000 Social Followers','Business Consulting','Media & Sponsorships','Legal & Tax Advisory','100+ Clients Across Africa'].map((t,i)=> (
              <span key={i} className="inline-flex items-center gap-3">{t} <span className="text-slate-600">✦</span></span>
            ))}
            {['HR Management','26,000 Newsletter Subscribers','Career Consulting','26,000 WhatsApp Members'].map((t,i)=> (
              <span key={`dup-${i}`} className="inline-flex items-center gap-3">{t} <span className="text-slate-600">✦</span></span>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-sm uppercase tracking-wider text-sky-600">About The GenZ HR</div>
            <h2 className="mt-3 text-3xl font-extrabold">We're Not Just Consultants. We're Your <em className="italic text-sky-600">Partners.</em></h2>
            <p className="mt-6 text-slate-600">The GenZ HR exists to supercharge and empower SMEs, early-stage startups, and ambitious professionals with strategic, adaptable, and cost-effective consulting. We combine a fresh, generational perspective with hard-earned expertise to deliver solutions tailored to your unique challenges.</p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-xl border p-4">106k <div className="text-xs text-slate-500">Community Members</div></div>
            <div className="rounded-xl border p-4">100+ <div className="text-xs text-slate-500">Clients Served</div></div>
            <div className="rounded-xl border p-4">6+ <div className="text-xs text-slate-500">Consulting Domains</div></div>
            <div className="rounded-xl border p-4">Remote <div className="text-xs text-slate-500">Delivery</div></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="text-sm uppercase tracking-wider text-sky-600">What We Do</div>
              <h2 className="mt-3 text-3xl font-extrabold">A Full Suite of Consulting <em className="italic text-sky-600">Under One Roof.</em></h2>
            </div>
            <p className="text-slate-600">We provide the full spectrum of consulting that growing businesses actually need — from people operations to legal compliance to media strategy.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s)=>{
              const Icon = s.icon
              return (
                <article key={s.title} className="rounded-xl border p-6 bg-slate-50">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white text-sky-700"><Icon /></div>
                  <h3 className="mt-4 font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{s.tags.join(' · ')}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map(t=> <span key={t} className="rounded-full border px-3 py-1 text-xs text-slate-600">{t}</span>)}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES (tabs simplified) */}
      <section id="packages" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-sm uppercase tracking-wider text-sky-600">HR Management Packages</div>
          <h2 className="mt-3 text-3xl font-extrabold">Choose Your Level of <em className="italic text-sky-600">HR Partnership.</em></h2>
          <div className="mt-6 flex gap-3">
            {['bronze','silver','gold','platinum'].map(p=> (
              <button key={p} onClick={()=>setPkg(p)} className={`rounded-full px-4 py-2 text-sm font-semibold ${pkg===p? 'bg-sky-900 text-white':'bg-white border'}`}>{p}</button>
            ))}

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border p-6 bg-white">
              <h3 className="font-extrabold">{pkg === 'gold' ? 'Gold — Embedded' : pkg === 'silver' ? 'Silver — Strategic' : pkg === 'platinum' ? 'Platinum — Complete' : 'Bronze — Essential'}</h3>
              <p className="mt-3 text-sm text-slate-600">{pkg === 'bronze' ? 'Everything you need to get your HR house in order.' : pkg === 'silver' ? 'Everything in Bronze, plus strategy and account management.' : pkg === 'gold' ? 'Embedded HR leadership and unlimited advisory.' : 'Full-service people partner.'}</p>
            </div>
            <aside className="rounded-xl border p-6 bg-slate-50">
              <h4 className="font-semibold">Request Proposal</h4>
              <a href="mailto:contact@thegenzhr.com" className="mt-4 inline-block rounded-full bg-lime-400 px-4 py-2 text-sm font-bold text-slate-900">Contact Us →</a>
            </aside>
          </div>
          </div>
        </div>
      </section>

      {/* RECRUITMENT */}
      <section id="recruitment" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-sm uppercase tracking-wider text-sky-600">Recruitment Services</div>
            <h2 className="mt-3 text-3xl font-extrabold">We Find the Right People. <em className="italic text-sky-600">Every Time.</em></h2>
            <p className="mt-4 text-slate-600">End-to-end talent acquisition backed by a 26,000-person job-seeker community.</p>
            <a href="mailto:contact@thegenzhr.com" className="mt-6 inline-block rounded-full bg-sky-900 px-6 py-3 text-white">Start a Search →</a>
          </div>
          <div>
            <div className="rounded-xl border p-6">
              <div className="font-semibold">Full-Cycle Recruitment</div>
              <div className="mt-2 text-lg font-bold text-sky-700">10% of Annual Gross Salary</div>
              <p className="mt-3 text-sm text-slate-600">We handle everything from job brief to first day — sourcing from our 26k community plus wider networks.</p>
            </div>
            <div className="mt-4 rounded-xl border p-6">
              <div className="font-semibold">Sourcing + Shortlist</div>
              <div className="mt-2 text-lg font-bold text-sky-700">₦200,000 flat per hire</div>
              <p className="mt-3 text-sm text-slate-600">We source and shortlist. You run interviews and make the final call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section id="media" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-sm uppercase tracking-wider text-sky-600">Media, Community &amp; Audience Access</div>
          <h2 className="mt-3 text-3xl font-extrabold">106,000 professionals. <em className="italic text-sky-600">Ready for your brand.</em></h2>
          <div className="mt-6 flex gap-3">
            {['b2b','rates','audience','roadmap'].map(t => (
              <button key={t} onClick={()=>setMediaTab(t)} className={`rounded-full px-4 py-2 ${mediaTab===t? 'bg-lime-300':'bg-white/10'}`}>{t}</button>
            ))}
          </div>

          <div className="mt-8">
            {mediaTab === 'b2b' && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-xl border p-6 bg-white/5">Newsletter Dedicated Send — ₦200,000</div>
                <div className="rounded-xl border p-6 bg-white/5">WhatsApp Broadcast — ₦300,000</div>
                <div className="rounded-xl border p-6 bg-white/5">Job Listing — ₦50,000</div>
              </div>
            )}
            {mediaTab === 'rates' && (
              <div className="rounded-xl border p-6 bg-white/5">Rate card summary (see original)</div>
            )}
            {mediaTab === 'audience' && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-xl border p-6">Age Distribution — 72% 22–31</div>
                <div className="rounded-xl border p-6">Career Stage — 41% actively job-seeking</div>
                <div className="rounded-xl border p-6">Location — Lagos, Abuja, Port Harcourt</div>
              </div>
            )}
            {mediaTab === 'roadmap' && (
              <div className="rounded-xl border p-6">12-month monetization roadmap (summary)</div>
            )}
          </div>
        </div>
      </section>

      {/* EXISTING HR */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8">
          <div>
            <div className="text-sm uppercase tracking-wider text-sky-600">Already Have an HR Team?</div>
            <h2 className="mt-3 text-3xl font-extrabold">We Work With <em className="italic text-sky-600">Your Team,</em> Not Instead of It.</h2>
            <p className="mt-4 text-slate-600">If you have an HR function but need specialist support, we plug in where needed without disrupting what works.</p>
            <a href="mailto:contact@thegenzhr.com" className="mt-6 inline-block rounded-full bg-sky-900 px-6 py-3 text-white">Let's Talk →</a>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border p-4">HR Audit & Gap Analysis</div>
            <div className="rounded-xl border p-4">Organisational Restructuring</div>
            <div className="rounded-xl border p-4">Engagement Strategy</div>
            <div className="rounded-xl border p-4">Competency Models</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-sky-950 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="text-sm uppercase tracking-wider text-lime-300">Client Stories</div>
          <h2 className="mt-3 text-3xl font-extrabold">What Our Clients <em className="italic text-lime-300">Say About Working With Us.</em></h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border p-6 bg-white/5">"GenZ HR stepped in when we were scaling fast..." — Adaeze</div>
            <div className="rounded-xl border p-6 bg-white/5">"Career consulting changed my trajectory..." — Taiwo</div>
            <div className="rounded-xl border p-6 bg-white/5">"140 qualified applications in 48 hours..." — Nnamdi</div>
          </div>
        </div>
      </section>

      {/* PRICING & FAQ & CTA & FOOTER (simplified) */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border p-6">Pricing overview cards (see original)</div>
            <div className="rounded-xl border p-6">
              <div className="text-sm uppercase">FAQ</div>
              {faqs.map((f,i)=> (
                <div key={i} className="mt-4">
                  <button onClick={()=>setOpenFaq(openFaq===i?-1:i)} className="w-full text-left font-semibold">{f.q}</button>
                  {openFaq===i && <p className="mt-2 text-sm text-slate-600">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-lime-300 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-extrabold">Ready to Build Something <em className="italic">Great Together?</em></h2>
          <p className="mt-4">Whether you need HR support, career guidance, a recruitment partner, or access to 106,000 professionals — we're ready to work with you.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="mailto:contact@thegenzhr.com" className="rounded-full bg-slate-900 px-6 py-3 text-white">Email Us Today →</a>
            <a href="tel:+2348168545860" className="rounded-full border px-6 py-3">+234 816 854 5860</a>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-slate-950 text-slate-200">
        <div className="mx-auto max-w-7xl px-6 text-center">© 2025 The GenZ HR. All rights reserved.</div>
      </footer>
    </div>
  )
}
