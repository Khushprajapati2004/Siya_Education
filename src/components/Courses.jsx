import { useState } from 'react'
import { motion } from 'framer-motion'

const COURSES = [
  {
    tag: 'Class 10',
    title: 'Board Excellence',
    desc: 'Master every subject with board-focused preparation and consistent practice.',
    features: ['All Subjects Coverage', 'Board-Focused Preparation', 'Weekly Tests & DPPs', 'Doubt Support'],
    popular: false,
    cta: 'Enquire Now',
  },
  {
    tag: 'Class 11',
    title: 'JEE / NEET Foundation',
    desc: 'Build a rock-solid foundation for competitive exams while staying board-ready.',
    features: ['Physics, Chemistry, Maths / Bio', 'Competitive + Board Aligned', 'Expert Faculty', 'Regular Mock Tests'],
    popular: true,
    cta: 'Enquire Now',
  },
  {
    tag: 'Class 12',
    title: 'JEE / NEET Intensive',
    desc: 'Full-throttle preparation for boards and top competitive exams with personal mentoring.',
    features: ['Complete Syllabus Coverage', 'Boards + Competitive Oriented', 'Daily Practice Problems', 'Personal Mentoring'],
    popular: false,
    cta: 'Enquire Now',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function CheckIcon() {
  return (
    <span className="w-[18px] h-[18px] rounded-full bg-[#eff2ff] flex items-center justify-center shrink-0">
      <svg viewBox="0 0 12 12" fill="none" stroke="#2b40d8" strokeWidth="2.5" strokeLinecap="round" className="w-[10px] h-[10px]">
        <polyline points="1.5 6 4.5 9 10.5 3" />
      </svg>
    </span>
  )
}

export default function Courses() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="courses" className="section bg-gray-bg overflow-hidden">
      <div className="custom-container">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-tag orange">COURSES OFFERED</p>
          <h2 className="section-title">Programs for Every Stage</h2>
          <p className="section-sub">
            Comprehensive coaching designed to build strong foundations and achieve top results.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {COURSES.map((c, i) => (
            <motion.div
              key={c.title}
              variants={cardVariants}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="relative flex flex-col bg-white rounded-md overflow-hidden"
              style={{
                border: c.popular ? '2px solid #2b40d8' : '1px solid #e5e7eb',
                boxShadow: hovered === i
                  ? '0 16px 40px rgba(43,64,216,0.12)'
                  : c.popular
                  ? '0 4px 24px rgba(43,64,216,0.08)'
                  : '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'box-shadow 0.25s',
              }}
            >
              {/* Popular badge */}
              {c.popular && (
                <div className="bg-blue text-white text-center py-2.5 font-poppins text-[11px] font-bold tracking-[1.5px] uppercase">
                  Most Popular
                </div>
              )}

              {/* Animated top line for non-popular */}
              {!c.popular && (
                <motion.div
                  className="absolute top-0 left-0 h-[2px] bg-blue"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                />
              )}

              <div className="flex flex-col flex-1 p-7">
                {/* Tag + Title */}
                <div className="mb-5">
                  <span className="inline-block font-poppins text-[11px] font-bold tracking-[1.5px] uppercase text-blue bg-[#eff2ff] px-3 py-1 rounded-full mb-3">
                    {c.tag}
                  </span>
                  <h4 className="font-poppins text-[19px] font-extrabold text-dark leading-tight mb-2">
                    {c.title}
                  </h4>
                  <p className="text-[13.5px] text-text-muted leading-relaxed">{c.desc}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 mb-5" />

                {/* Features */}
                <p className="text-[10.5px] font-bold uppercase tracking-[1.5px] text-text-muted mb-3">
                  What's Included
                </p>
                <ul className="list-none flex flex-col gap-2.5 p-0 m-0 mb-7 flex-1">
                  {c.features.map(f => (
                    <motion.li
                      key={f}
                      className="flex items-center gap-2.5 text-[13.5px] text-dark"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
                    >
                      <CheckIcon />
                      {f}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#hero"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="no-underline w-full flex items-center justify-center gap-2 font-poppins font-semibold text-[14px] py-3.5 rounded-sm transition-all duration-250"
                  style={{
                    backgroundColor: c.popular ? '#2b40d8' : 'transparent',
                    color: c.popular ? '#fff' : '#2b40d8',
                    border: c.popular ? 'none' : '1.5px solid #2b40d8',
                  }}
                >
                  {c.cta}
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
