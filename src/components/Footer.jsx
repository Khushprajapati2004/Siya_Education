import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const QUICK_LINKS = [
  ['Home', '#hero'],
  ['Why Choose Us', '#why-us'],
  ['Courses', '#courses'],
  ['Results', '#results'],
  ['FAQs', '#faq'],
  ['Scholarship Test', '#scholarship'],
]

const CONTACT = [
  {
    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />,
    text: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
    text: 'Siyaeducationzone@gmail.com',
    href: 'mailto:Siyaeducationzone@gmail.com',
  },
  {
    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
    text: 'SF-6.7.8, Sarthak Fortune Mall, Near Randesan Rd, Kudasan, Gandhinagar, Gujarat 382426',
    href: 'https://maps.google.com',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const colVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null)

  return (
    <footer className="bg-dark text-white overflow-hidden">

      {/* Main content */}
      <motion.div
        className="max-w-[1280px] mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.4fr] gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >

        {/* Brand col */}
        <motion.div variants={colVariants} className="md:col-span-full lg:col-auto">
          <img src={logo} alt="Siya Education" className="h-14 w-auto object-contain mb-4 brightness-0 invert" />
          <p className="text-[13.5px] text-white/55 leading-[1.75] max-w-[300px] mb-6">
            Trusted coaching institute for Std 10–12, JEE &amp; NEET preparation with a proven track record of academic excellence.
          </p>

          {/* Divider stat row */}
          <div className="flex items-center gap-6 pt-5 border-t border-white/10">
            {[['1200+', 'Students'], ['98%', 'Success Rate'], ['6+', 'Years']].map(([val, label]) => (
              <div key={label}>
                <div className="font-poppins font-extrabold text-[18px] text-white leading-none">{val}</div>
                <div className="text-[11px] text-white/40 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div variants={colVariants}>
          <h6 className="font-poppins text-[11px] font-bold tracking-[2px] uppercase text-white/40 mb-5">Quick Links</h6>
          <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
            {QUICK_LINKS.map(([label, href], i) => (
              <li key={href}>
                <a
                  href={href}
                  onMouseEnter={() => setHoveredLink(i)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="no-underline flex items-center gap-2 text-[13.5px] text-white/60 transition-colors duration-200 hover:text-white group"
                >
                  <motion.span
                    animate={{ x: hoveredLink === i ? 4 : 0, opacity: hoveredLink === i ? 1 : 0 }}
                    transition={{ duration: 0.18 }}
                    className="text-blue"
                  >
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </motion.span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={colVariants}>
          <h6 className="font-poppins text-[11px] font-bold tracking-[2px] uppercase text-white/40 mb-5">Contact Us</h6>
          <ul className="list-none flex flex-col gap-4 m-0 p-0">
            {CONTACT.map(({ icon, text, href }, i) => (
              <li key={i}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="no-underline flex items-start gap-3 text-[13.5px] text-white/60 transition-colors duration-200 hover:text-white group"
                >
                  <span className="mt-[2px] shrink-0 w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-200 group-hover:bg-blue/20 group-hover:border-blue/30">
                    <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {icon}
                    </svg>
                  </span>
                  <span className="leading-[1.6]">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-white/35 m-0">© 2025 Siya Education. All rights reserved.</p>
          <a
            href="#hero"
            className="no-underline inline-flex items-center gap-1.5 text-[12.5px] text-white/35 hover:text-white/70 transition-colors duration-200"
          >
            Back to top
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />
            </svg>
          </a>
        </div>
      </motion.div>

    </footer>
  )
}
