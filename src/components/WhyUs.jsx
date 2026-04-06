import { useState } from 'react'
import { motion } from 'framer-motion'

const FEATURES = [
  {
    title: 'Smart Classrooms',
    desc: 'Learn in tech-enabled classrooms with digital boards and interactive sessions.',
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>,
    stat: '100%',
    statLabel: 'Digital Boards',
  },
  {
    title: '8 Hours Doubt Support',
    desc: 'Get your doubts resolved by expert faculty at the centre, every day.',
    icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
    stat: '8 hrs',
    statLabel: 'Daily Support',
  },
  {
    title: 'Expert Faculty',
    desc: 'Learn from experienced educators trusted for Board & competitive exam prep.',
    icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>,
    stat: '15+',
    statLabel: 'Yrs Experience',
  },
  {
    title: 'Small Batch Sizes',
    desc: 'Limited students per batch ensuring personalised attention and interaction.',
    icon: <><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></>,
    stat: '≤20',
    statLabel: 'Per Batch',
  },
  {
    title: 'Regular Tests & Analysis',
    desc: 'Comprehensive test series, DPPs and quizzes to track and boost performance.',
    icon: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>,
    stat: '500+',
    statLabel: 'Tests Conducted',
  },
  {
    title: 'Recorded Lectures',
    desc: 'Access recorded classes, video solutions, and practice anywhere, anytime.',
    icon: <><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></>,
    stat: '1000+',
    statLabel: 'Video Lessons',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function WhyUs() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="why-us" className="section bg-gray-bg overflow-hidden">
      {/* Heading */}
      <motion.div
        className="custom-container text-center mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-tag orange">WHY STUDENTS CHOOSE US</p>
        <h2 className="section-title">
          Discover What Makes Us <span className="accent">Different</span>
        </h2>
        <p className="section-sub">
          Everything you need to excel — under one roof, with the right people.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="custom-container grid grid-cols-1 md:grid-cols-3 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            variants={cardVariants}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ y: -5, transition: { duration: 0.22 } }}
            className="relative bg-white rounded-md py-7 px-6 border border-gray-100 overflow-hidden"
            style={{
              boxShadow: hovered === i
                ? '0 12px 36px rgba(43,64,216,0.10)'
                : '0 2px 12px rgba(0,0,0,0.05)',
              transition: 'box-shadow 0.25s',
            }}
          >
            {/* Top accent line — blue only, sweeps in on scroll */}
            <motion.div
              className="absolute top-0 left-0 h-[2px] bg-blue rounded-t-md"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: 'easeOut' }}
            />

            {/* Icon + Stat */}
            <div className="flex items-start justify-between mb-5">
              <motion.div
                className="w-[48px] h-[48px] rounded-xl bg-[#eff2ff] flex items-center justify-center"
                animate={hovered === i ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.25 }}
              >
                <svg
                  className="w-[22px] h-[22px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#2b40d8"
                >
                  {f.icon}
                </svg>
              </motion.div>

              <div className="text-right">
                <div className="font-poppins font-extrabold text-[20px] leading-none text-dark">
                  {f.stat}
                </div>
                <div className="text-[11px] text-text-muted font-medium mt-0.5">{f.statLabel}</div>
              </div>
            </div>

            <h4 className="font-poppins text-[16px] font-bold mb-1.5 text-dark">{f.title}</h4>
            <p className="text-[13.5px] text-text-muted leading-[1.65]">{f.desc}</p>

            {/* Hover arrow */}
            <motion.div
              className="flex items-center gap-1 mt-4 text-[12.5px] font-semibold font-poppins text-blue"
              initial={{ opacity: 0, x: -4 }}
              animate={hovered === i ? { opacity: 1, x: 0 } : { opacity: 0, x: -4 }}
              transition={{ duration: 0.18 }}
            >
              Learn more
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
