import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FILTERS = ['All', 'JEE', 'NEET', 'Board']

const STUDENTS = [
  { avatar: '👩‍🎓', name: 'Priya Sharma',  exam: 'JEE Advanced 2024', rank: 'AIR 156',   category: 'JEE',   quote: 'The faculty here made JEE feel achievable.' },
  { avatar: '👨‍🎓', name: 'Arjun Patel',   exam: 'NEET 2024',         rank: 'AIR 89',    category: 'NEET',  quote: 'Daily doubt sessions were a game changer.' },
  { avatar: '👩‍🎓', name: 'Sneha Verma',   exam: 'Board Exams 2024',  rank: '99.2%',     category: 'Board', quote: 'Small batches meant I never felt lost.' },
  { avatar: '👨‍🎓', name: 'Rohan Mehta',   exam: 'JEE Main 2024',     rank: '99.8 %ile', category: 'JEE',   quote: 'Test series here is better than any app.' },
  { avatar: '👩‍🎓', name: 'Ananya Singh',  exam: 'NEET 2024',         rank: 'AIR 312',   category: 'NEET',  quote: 'Recorded lectures helped me revise anytime.' },
  { avatar: '👨‍🎓', name: 'Karan Gupta',   exam: 'Board Exams 2024',  rank: '98.8%',     category: 'Board', quote: 'Best decision I made for my board prep.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -16, scale: 0.96, transition: { duration: 0.22 } },
}

export default function Results() {
  const [active, setActive] = useState('All')
  const [flipped, setFlipped] = useState(null)

  const filtered = active === 'All' ? STUDENTS : STUDENTS.filter(s => s.category === active)

  return (
    <section id="results" className="section bg-white relative overflow-hidden">
      <div className="custom-container relative z-10">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">OUR RESULTS</p>
          <h2 className="section-title">
            From Classroom to <span className="accent">National Ranks</span>
          </h2>
          <p className="section-sub">
            Our students consistently achieve top ranks in board and competitive exams across India.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => { setActive(f); setFlipped(null) }}
              className="relative font-poppins font-semibold text-[13px] px-5 py-2 rounded-full border transition-all duration-250 cursor-pointer"
              style={{
                borderColor: active === f ? '#2b40d8' : '#e5e7eb',
                color: active === f ? '#fff' : '#6b7280',
                backgroundColor: active === f ? '#2b40d8' : '#fff',
              }}
            >
              {active === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-blue -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                />
              )}
              {f}
            </button>
          ))}
        </motion.div>

        {/* Student cards */}
        <motion.div layout className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => (
              <motion.div
                key={s.name}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setFlipped(flipped === s.name ? null : s.name)}
                className="relative cursor-pointer"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  animate={{ rotateY: flipped === s.name ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{ transformStyle: 'preserve-3d', position: 'relative', minHeight: 216 }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 bg-white rounded-md p-7 flex flex-col items-center text-center border border-gray-100 overflow-hidden"
                    style={{ backfaceVisibility: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
                  >
                    {/* top accent */}
                    <motion.div
                      className="absolute top-0 left-0 h-[2px] bg-blue rounded-t-md"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, ease: 'easeOut' }}
                    />

                    <div className="relative mb-4">
                      <div className="text-5xl">{s.avatar}</div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white bg-blue flex items-center justify-center text-[9px] text-white font-bold">
                        ✓
                      </div>
                    </div>

                    <h3 className="font-poppins text-[15px] font-bold text-dark mb-0.5">{s.name}</h3>
                    <p className="text-[12px] text-text-muted mb-4 font-medium">{s.exam}</p>

                    <div className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-[12.5px] font-bold text-white bg-blue">
                      🏆 {s.rank}
                    </div>

                    <p className="text-[11px] text-text-muted mt-4 italic">Tap to see quote →</p>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-md p-7 flex flex-col items-center justify-center text-center bg-[#f5f7ff] border border-blue/10"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <svg className="w-7 h-7 mb-3 text-blue opacity-20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="font-poppins text-[14.5px] font-semibold text-dark leading-relaxed mb-4">
                      "{s.quote}"
                    </p>
                    <span className="font-poppins font-bold text-[12.5px] text-dark">{s.name}</span>
                    <span className="text-[11px] text-text-muted mt-0.5">{s.exam}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom quote */}
        <motion.p
          className="text-center text-text-muted text-[13.5px] italic mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          "We believe every student has the potential to be a topper with the right guidance."
        </motion.p>

      </div>
    </section>
  )
}
