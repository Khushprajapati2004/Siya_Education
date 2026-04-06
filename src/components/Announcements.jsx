import { useState } from 'react'
import { motion } from 'framer-motion'

const CARDS = [
  {
    badge: 'Admissions Open',
    badgeColor: '#2b40d8',
    ribbon: 'HIGH PRIORITY',
    ribbonColor: '#e11d48',
    title: 'Admissions Open Now',
    desc: 'JEE / NEET 2026 batches are open. Free Demo this Sunday. Limited seats — Early Bird Discount available.',
    cta: 'Register Now',
    ctaHref: '#hero',
    accent: '#2b40d8',
    bg: '#f0f4ff',
    isNew: true,
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2b40d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    badge: 'Schedule Released',
    badgeColor: '#f97015',
    ribbon: null,
    title: 'Board Exam Schedule Released',
    desc: 'CBSE & GSEB Class 10 & 12 board exam timetable is out. Download and plan your preparation now.',
    cta: 'View Schedule',
    ctaHref: '#courses',
    accent: '#f97015',
    bg: '#fff7f0',
    isNew: false,
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f97015" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    badge: 'Top Scorer',
    badgeColor: '#2e9c6e',
    ribbon: null,
    title: 'Our Student Tops Board Exam',
    desc: 'Priya Sharma scores 99.2% in CBSE Class 12 boards. Siya Education celebrates another milestone result.',
    cta: 'See Results',
    ctaHref: '#results',
    accent: '#2e9c6e',
    bg: '#f0faf5',
    isNew: false,
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2e9c6e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/>
      </svg>
    ),
  },
  {
    badge: 'New Launch',
    badgeColor: '#7c3aed',
    ribbon: 'NEW',
    ribbonColor: '#7c3aed',
    title: 'Crash Course Launched',
    desc: 'Intensive 60-day crash course for JEE Main & Board exams. Expert faculty, daily tests, full syllabus coverage.',
    cta: 'Enroll Now',
    ctaHref: '#courses',
    accent: '#7c3aed',
    bg: '#f5f0ff',
    isNew: true,
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
}

export default function Announcements() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="announcements" className="section bg-white overflow-hidden">
      <div className="custom-container">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-tag orange">WHAT'S NEW</p>
          <h2 className="section-title">Important <span className="accent">Announcements</span></h2>
          <p className="section-sub">Stay updated with the latest news, results, and opportunities.</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              variants={cardVariants}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative rounded-md overflow-hidden border border-gray-100 flex"
              style={{
                backgroundColor: c.bg,
                boxShadow: hovered === i
                  ? `0 12px 36px ${c.accent}1a`
                  : '0 2px 10px rgba(0,0,0,0.05)',
                transition: 'box-shadow 0.25s',
              }}
            >
              {/* Left accent bar */}
              <motion.div
                className="w-1 shrink-0 rounded-l-md"
                style={{ backgroundColor: c.accent, transformOrigin: 'top' }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.09 }}
              />

              {/* Body */}
              <div className="flex items-start gap-4 px-5 py-5 flex-1">

                {/* Icon */}
                <motion.div
                  className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center"
                  style={{ boxShadow: `0 2px 10px ${c.accent}20` }}
                  animate={hovered === i ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <c.Icon />
                </motion.div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  {/* Badge + NEW pill */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span
                      className="font-poppins text-[10px] font-bold tracking-[1.5px] uppercase px-2.5 py-[3px] rounded-full text-white"
                      style={{ backgroundColor: c.badgeColor }}
                    >
                      {c.badge}
                    </span>
                    {c.isNew && (
                      <motion.span
                        className="font-poppins text-[10px] font-bold tracking-[1px] uppercase px-2 py-[3px] rounded-full text-white"
                        style={{ backgroundColor: c.accent }}
                        animate={{ opacity: [1, 0.55, 1] }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                      >
                        NEW
                      </motion.span>
                    )}
                  </div>

                  <h3 className="font-poppins text-[15px] font-extrabold text-dark leading-snug mb-1.5">
                    {c.title}
                  </h3>
                  <p className="text-[13px] text-text-muted leading-[1.65] mb-4">{c.desc}</p>

                  <motion.a
                    href={c.ctaHref}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-1.5 font-poppins font-semibold text-[13px] no-underline"
                    style={{ color: c.accent }}
                  >
                    {c.cta}
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Corner ribbon — outside the overflow:hidden body, positioned on the card */}
              {c.ribbon && (
                <div className="absolute top-0 right-0 w-[86px] h-[86px] overflow-hidden pointer-events-none rounded-tr-md">
                  <div
                    className="absolute font-poppins font-bold text-[9px] tracking-[1px] uppercase text-white text-center"
                    style={{
                      backgroundColor: c.ribbonColor,
                      width: '110px',
                      top: '16px',
                      right: '-15px',
                      transform: 'rotate(35deg)',
                      padding: '4px 0',
                    }}
                  >
                    {c.ribbon}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
