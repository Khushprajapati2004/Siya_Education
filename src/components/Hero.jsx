import { useState } from 'react'
import { motion } from 'framer-motion'
import herobg from '../assets/herobg.png'

/* ── HeroForm (kept for HeroModal) ─────────────────────────── */
export function HeroForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', cls: '', city: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', phone: '', cls: '', city: '' })
    }, 4000)
  }

  return (
    <div className="bg-white rounded-lg py-9 px-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)] w-full">
      <h3 className="font-poppins text-[20px] font-bold text-dark text-center mb-1">Get Free Counselling + Scholarship Info</h3>
      <p className="text-center text-[13px] text-text-muted mb-6">🎓 Up to 90% Scholarship — Limited Seats!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="hf-name" className="block text-[13px] font-semibold text-dark mb-1.5">Full Name *</label>
          <input id="hf-name" type="text" placeholder="Student's full name" required className="w-full py-3 px-4 text-[14px] border-[1.5px] border-[#e5e7eb] rounded-sm outline-none bg-[#f9fafb] text-dark transition-colors duration-200 placeholder:text-[#9ca3af] focus:border-blue focus:bg-white appearance-none" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
        </div>
        <div className="mb-4">
          <label htmlFor="hf-phone" className="block text-[13px] font-semibold text-dark mb-1.5">Phone Number *</label>
          <input id="hf-phone" type="tel" placeholder="+91 98765 43210" required className="w-full py-3 px-4 text-[14px] border-[1.5px] border-[#e5e7eb] rounded-sm outline-none bg-[#f9fafb] text-dark transition-colors duration-200 placeholder:text-[#9ca3af] focus:border-blue focus:bg-white appearance-none" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
        </div>
        <div className="mb-4">
          <label htmlFor="hf-cls" className="block text-[13px] font-semibold text-dark mb-1.5">Class *</label>
          <div className="relative after:content-['▾'] after:absolute after:right-3.5 after:top-1/2 after:-translate-y-1/2 after:text-[#9ca3af] after:pointer-events-none after:text-[14px]">
            <select id="hf-cls" required className="w-full py-3 px-4 text-[14px] border-[1.5px] border-[#e5e7eb] rounded-sm outline-none bg-[#f9fafb] text-dark transition-colors duration-200 focus:border-blue focus:bg-white appearance-none" value={form.cls} onChange={e => setForm(f => ({ ...f, cls: e.target.value }))}>
              <option value="" disabled>Select class</option>
              <option>Class 10</option><option>Class 11</option><option>Class 12</option>
            </select>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="hf-city" className="block text-[13px] font-semibold text-dark mb-1.5">City</label>
          <input id="hf-city" type="text" placeholder="Your city" className="w-full py-3 px-4 text-[14px] border-[1.5px] border-[#e5e7eb] rounded-sm outline-none bg-[#f9fafb] text-dark transition-colors duration-200 placeholder:text-[#9ca3af] focus:border-blue focus:bg-white appearance-none" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} />
        </div>
        <button type="submit" className={`btn btn-full ${submitted ? '!bg-[#16a34a]' : 'btn-orange'}`} disabled={submitted}>
          {submitted ? "✅ Submitted! We'll call you soon." : 'Register Now →'}
        </button>
        <p className="text-center text-[12px] text-text-muted mt-3">By submitting, you agree to our Terms &amp; Privacy Policy.</p>
      </form>
    </div>
  )
}

/* ── Data ───────────────────────────────────────────────────── */
const STATS = [
  { num: '95%+',  label: 'Avg. Score' },
  { num: '500+',  label: 'Selections' },
  { num: '₹2Cr+', label: 'Scholarships' },
  { num: '6+',    label: 'Years' },
]

const BADGES = [
  'Board · JEE · NEET',
  '8 hrs Doubt Support',
  'Expert Faculty',
]

/* ── Hero ───────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section id="hero" className="bg-hero-bg relative overflow-hidden flex items-center min-h-[620px] py-20 px-6">

      {/* Background blobs */}
      <motion.div
        className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[8%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,112,21,0.15) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-[15%] left-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(100,130,255,0.12) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-[1180px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-14 items-center relative z-10">

        {/* LEFT */}
        <div>

          {/* Admission badge */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[12.5px] font-semibold mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
            Admissions Open 2025–26
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-poppins text-[clamp(38px,5.5vw,64px)] font-extrabold text-white leading-[1.08] mb-5"
          >
            Your Path to<br />
            <span className="text-orange relative inline-block">
              Academic
              <motion.span
                className="absolute left-0 -bottom-1 h-[3px] bg-orange/50 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.7, delay: 0.8 }}
              />
            </span>
            <br />Excellence
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/75 text-[16px] leading-[1.75] mb-8 max-w-[460px]"
          >
            Trusted coaching for Classes 10–12 with personalised attention, expert faculty,
            and a proven record in Board, JEE &amp; NEET exams.
          </motion.p>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="flex flex-wrap gap-2.5 mb-9"
          >
            {BADGES.map((b) => (
              <div key={b} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3.5 py-1.5">
                <svg className="w-[13px] h-[13px] text-white/80 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[12px] font-semibold text-white/85">{b}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <motion.a
              href="#courses"
              whileHover={{ y: -2, boxShadow: '0 10px 30px rgba(249,112,21,0.4)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="btn btn-orange"
            >
              Explore Courses
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
            <motion.a
              href="tel:+919876543210"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 font-poppins font-semibold text-[14px] text-white border border-white/30 px-6 py-[13px] rounded-full no-underline hover:bg-white/10 transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              Call Now
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 }}
            className="flex items-center border-t border-white/10 pt-7"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className={`flex-1 text-center ${i !== 0 ? 'border-l border-white/10' : ''}`}>
                <div className="font-poppins font-extrabold text-[22px] text-white leading-none">{s.num}</div>
                <div className="text-[11px] text-white/50 mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative flex items-end justify-center lg:justify-end"
        >
          {/* Organic blob behind image — matches reference */}
          <motion.div
            className="absolute bottom-[22%] left-1/8 -translate-x-1/2 w-[88%] h-[78%] pointer-events-none z-0"
            animate={{ scale: [1, 1.03, 1], rotate: [0, 2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: 'rgba(255,255,255,0.13)',
              borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
              filter: 'blur(0px)',
            }}
          />
          

          <motion.img
            src={herobg}
            alt="Students at Siya Education"
            className="relative z-10 w-full max-w-[400px] lg:max-w-none object-contain select-none"
            style={{ filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.18))' }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Floating badge — scholarship */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute top-[10%] -left-2 lg:left-0 bg-white rounded-md px-4 py-3 shadow-custom z-20"
          >
            <div className="font-poppins font-extrabold text-[18px] text-blue leading-none">90%</div>
            <div className="text-[11px] text-text-muted font-medium mt-0.5">Scholarship Available</div>
          </motion.div>

          {/* Floating badge — seats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="absolute bottom-[14%] -right-2 lg:right-0 bg-white rounded-md px-4 py-3 shadow-custom z-20"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
              <span className="font-poppins font-semibold text-[12px] text-dark">Seats Filling Fast</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
