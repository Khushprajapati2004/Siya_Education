import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HeroForm } from './Hero'

export default function HeroModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenHeroModal')
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('hasSeenHeroModal', 'true')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-[520px]"
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              transition: { 
                type: 'spring',
                damping: 20,
                stiffness: 100,
                duration: 0.6
              }
            }}
            exit={{ y: '100vh', opacity: 0 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 md:-right-12 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors border-none cursor-pointer focus:outline-none z-10"
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <HeroForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
