import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'What classes do you offer coaching for?',
    a: 'We offer coaching for Class 10, 11, and 12 covering Board exams, JEE (Main & Advanced), and NEET preparation. Our programs are designed to build strong conceptual foundations from Class 10 itself.',
  },
  {
    q: 'What are the batch timings available?',
    a: 'We have multiple batches throughout the day — morning (7 AM – 10 AM), afternoon (12 PM – 3 PM), and evening (5 PM – 8 PM). Weekend batches are also available for students who prefer them.',
  },
  {
    q: 'How can I apply for a scholarship?',
    a: 'You can apply for our merit-based scholarship by appearing in our Free Scholarship Test held every month. Students scoring above 70% can avail scholarships ranging from 20% to 90% on tuition fees.',
  },
  {
    q: 'Do you provide study materials?',
    a: 'Yes, we provide comprehensive printed study materials, DPP (Daily Practice Problems) sheets, and digital access to recorded lectures and solution videos for all enrolled students.',
  },
  {
    q: 'How do you track student progress?',
    a: 'We conduct weekly tests and provide detailed performance analytics after each test. Parents receive monthly progress reports, and regular parent-teacher meetings are held to discuss improvements.',
  },
  {
    q: 'What is the batch size?',
    a: 'We maintain a maximum of 25–30 students per batch to ensure every student receives personalised attention. This small batch structure is one of our core differentiators.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="section bg-gray-bg overflow-hidden">
      <div className="custom-container">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="section-title">Frequently Asked <span className="accent">Questions</span></h2>
          <p className="section-sub">Everything you need to know before joining us.</p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          className="max-w-[720px] mx-auto flex flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-md overflow-hidden"
                style={{
                  border: isOpen ? '1.5px solid #2b40d8' : '1.5px solid #e5e7eb',
                  boxShadow: isOpen ? '0 4px 24px rgba(43,64,216,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 py-5 px-6 text-left cursor-pointer bg-transparent border-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    {/* Number badge */}
                    <span
                      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-poppins text-[12px] font-bold transition-colors duration-25"
                      style={{
                        backgroundColor: isOpen ? '#2b40d8' : '#f0f0f5',
                        color: isOpen ? '#fff' : '#6b7280',
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="font-poppins text-[14.5px] font-semibold text-dark leading-snug">
                      {f.q}
                    </span>
                  </div>

                  {/* Chevron */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <svg
                      viewBox="0 0 24 24" width="18" height="18" fill="none"
                      stroke={isOpen ? '#2b40d8' : '#9ca3af'}
                      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pl-[68px]">
                        <div className="w-full h-px bg-gray-100 mb-4" />
                        <p className="text-[13.5px] text-text-muted leading-[1.75]">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-text-muted text-[14px] mb-4">Still have questions?</p>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 font-poppins font-semibold text-[14px] text-blue border border-blue px-6 py-3 rounded-full no-underline transition-all duration-250 hover:bg-blue hover:text-white"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            Call Us Directly
          </a>
        </motion.div>

      </div>
    </section>
  )
}
