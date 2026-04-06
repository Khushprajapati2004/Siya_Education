import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ITEMS = [
  '🎓 Admissions Open for JEE / NEET 2026 Batch',
  '🆓 Free Demo Class This Sunday — Register Now',
  '🏆 Limited Seats Available — Enroll Early',
  '💰 Early Bird Discount — Up to 90% Scholarship',
  '📞 Call Us: +91 98765 43210',
  '✅ New Batch Starting 1st of Next Month',
]

// Duplicate for seamless infinite scroll
const TRACK = [...ITEMS, ...ITEMS]

export default function AnnouncementTicker() {
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="bg-[#1a2db5] overflow-hidden"
        >
          <div
            className="relative flex items-center h-9 overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Left label */}
            <div className="shrink-0 flex items-center gap-2 bg-orange text-white font-poppins font-bold text-[11px] tracking-[1.5px] uppercase px-4 h-full z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live
            </div>

            {/* Scrolling track */}
            <div className="flex-1 overflow-hidden relative">
              {/* Left fade */}
              <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#1a2db5] to-transparent z-10 pointer-events-none" />
              {/* Right fade */}
              <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#1a2db5] to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex items-center gap-0 whitespace-nowrap"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: 'linear',
                  ...(paused ? { playState: 'paused' } : {}),
                }}
                style={{ animationPlayState: paused ? 'paused' : 'running' }}
              >
                {TRACK.map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-3 text-white/90 text-[12.5px] font-medium px-6">
                    {item}
                    <span className="text-white/30 text-[10px]">◆</span>
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setVisible(false)}
              className="shrink-0 flex items-center justify-center w-9 h-full text-white/50 hover:text-white hover:bg-white/10 transition-colors duration-200 border-l border-white/10"
              aria-label="Close announcement"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
