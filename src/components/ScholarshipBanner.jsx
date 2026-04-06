import { useState } from 'react'
import { motion } from 'framer-motion'

const PERKS = [
  { icon: <><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></>, label: 'Up to 90% Fee Waiver' },
  { icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>, label: 'Merit-Based Selection' },
  { icon: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></>, label: 'All Courses Eligible' },
]

export default function ScholarshipBanner() {
  const [hovered, setHovered] = useState(false)

  return (
    <section id="scholarship" className="relative py-20 px-6 overflow-hidden bg-hero-bg">

      {/* Subtle animated grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Soft glow orbs */}
      <motion.div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,112,21,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="custom-container relative z-10 flex flex-col items-center text-center">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
          <span className="font-poppins text-[11px] font-bold tracking-[2px] uppercase text-white/90">
            Free Scholarship Test
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-poppins text-[clamp(28px,4vw,46px)] font-extrabold text-white leading-[1.15] max-w-[640px] mb-4"
        >
          Real Talent Deserves{' '}
          <span className="relative inline-block">
            Real Scholarship
            <motion.span
              className="absolute left-0 -bottom-1 h-[3px] bg-orange rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/70 text-[15px] mb-10 max-w-[480px] leading-relaxed"
        >
          Take our free scholarship test and unlock up to 90% tuition fee waiver based on your performance.
        </motion.p>

        {/* Perks row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {PERKS.map((p) => (
            <div key={p.label} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2">
              <svg className="w-[14px] h-[14px] text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {p.icon}
              </svg>
              <span className="font-poppins text-[12.5px] font-semibold text-white/90">{p.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="#hero"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2.5 font-poppins font-semibold bg-white text-blue text-[15px] py-4 px-9 rounded-full no-underline"
            style={{ boxShadow: hovered ? '0 12px 36px rgba(0,0,0,0.2)' : '0 4px 16px rgba(0,0,0,0.12)', transition: 'box-shadow 0.25s' }}
          >
            Apply for Free Scholarship Test
            <motion.svg
              viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-white/40 text-[12px] mt-5 font-medium"
        >
          No registration fee · Results within 48 hours · Open to all students
        </motion.p>

      </div>
    </section>
  )
}
