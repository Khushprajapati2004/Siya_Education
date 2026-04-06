import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import CourseSelectionModal from './CourseSelectionModal'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    setActiveDropdown(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Faculty', href: '#faculty' },
    {
      label: 'Courses',
      href: '#courses',
      dropdown: [
        { label: 'JEE Coaching', href: '#jee' },
        { label: 'NEET Coaching', href: '#neet' },
        { label: 'Board Classes', href: '#board' },
        { label: 'Foundation Courses', href: '#foundation' },
      ]
    },
    { label: 'Excellence', href: '#excellence' },
    { label: 'Gallery', href: '/gallery', isPage: true },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <nav className={`sticky top-0 z-[100] backdrop-blur-[12px] px-6 transition-all duration-300 ${scrolled ? 'bg-white border-b border-black/5 shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'bg-transparent border-b border-transparent'}`}>
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-16">

          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link to="/" className="flex items-center no-underline">
              <img src={logo} alt="Siya Education" className="h-14 w-auto object-contain" />
            </Link>
          </motion.div>

          {/* Links */}
          <motion.ul
            className="hidden md:flex items-center gap-8 list-none m-0 p-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {NAV_LINKS.map((link) => (
              <motion.li
                key={link.label}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                {link.isPage ? (
                  <Link
                    to={link.href}
                    className="no-underline text-[15px] font-medium transition-colors duration-200 hover:text-blue flex items-center gap-1.5 py-4"
                    style={{ color: location.pathname === link.href ? '#2b40d8' : '' }}
                  >
                    {link.label}
                    {location.pathname === link.href && (
                      <motion.div layoutId="nav-active" className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue rounded-full" />
                    )}
                  </Link>
                ) : (
                  <a
                    className="no-underline text-dark text-[15px] font-medium transition-colors duration-200 hover:text-blue flex items-center gap-1.5 py-4"
                    href={link.href}
                  >
                    {link.label}
                    {link.dropdown && (
                      <svg viewBox="0 0 24 24" width="14" height="14" className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180 text-blue' : 'text-text-muted'}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </a>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute left-0 top-[100%] min-w-[200px] bg-white border border-gray-100 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.1)] py-2"
                      >
                        {link.dropdown.map(d => (
                          <a
                            key={d.label}
                            href={d.href}
                            className="block px-5 py-2.5 text-[14px] font-medium text-dark no-underline hover:bg-[#f0f0ff] hover:text-blue transition-colors"
                          >
                            {d.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.li>
            ))}
          </motion.ul>

          {/* Actions - Slide from right */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <button onClick={() => setModalOpen(true)} className="hidden md:flex items-center gap-2 bg-orange text-white px-[22px] py-[10px] rounded-full font-poppins font-semibold text-[14px] transition-all duration-250 hover:bg-orange-dark hover:-translate-y-[1px] cursor-pointer border-none">
              Enroll Now
            </button>
            <a href="tel:+919876543210" className="hidden md:flex items-center gap-2 bg-blue text-white px-[22px] py-[10px] rounded-full font-poppins font-semibold text-[14px] no-underline transition-all duration-250 hover:bg-blue-deep hover:-translate-y-[1px]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
              Call Now
            </a>

            <button
              className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-none border-none p-1"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(o => !o)}
            >
              <span className={`block w-6 h-[2px] bg-dark rounded transition-all duration-300 ${menuOpen ? '' : ''}`}></span>
              <span className={`block w-6 h-[2px] bg-dark rounded transition-all duration-300 ${menuOpen ? '' : ''}`}></span>
              <span className={`block w-6 h-[2px] bg-dark rounded transition-all duration-300 ${menuOpen ? '' : ''}`}></span>
            </button>
          </motion.div>

        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 max-h-[calc(100vh-64px)] overflow-y-auto bg-white border-b border-[#e5e7eb] py-5 px-6 z-[99] flex flex-col gap-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] animate-[slideDown_0.2s_ease]">
          {NAV_LINKS.map(item => (
            <div key={item.label} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              {item.isPage ? (
                <Link to={item.href} className="flex items-center justify-between font-poppins font-semibold text-base no-underline" style={{ color: location.pathname === item.href ? '#2b40d8' : '#111' }} onClick={closeMenu}>
                  {item.label}
                </Link>
              ) : (
                <a href={item.href} className="flex items-center justify-between font-poppins font-semibold text-base text-dark no-underline" onClick={item.dropdown ? (e) => { e.preventDefault(); setActiveDropdown(activeDropdown === item.label ? null : item.label) } : closeMenu}>
                  {item.label}
                  {item.dropdown && (
                    <svg viewBox="0 0 24 24" width="16" height="16" className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-blue' : 'text-text-muted'}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </a>
              )}
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden flex flex-col gap-2 mt-2 ml-4"
                    >
                      {item.dropdown.map(d => (
                        <a
                          key={d.label}
                          href={d.href}
                          className="font-medium text-[14px] text-text-muted no-underline py-1"
                          onClick={closeMenu}
                        >
                          {d.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <button onClick={() => { setModalOpen(true); closeMenu() }} className="!bg-orange !text-white px-5 py-3 rounded-full text-center font-poppins font-semibold text-base transition-transform active:scale-[0.98] cursor-pointer border-none w-full">🚀 Enroll Now</button>
            <a href="tel:+919876543210" className="!bg-blue !text-white px-5 py-3 rounded-full text-center font-poppins font-semibold text-base no-underline transition-transform active:scale-[0.98]" onClick={closeMenu}>📞 Call Now</a>
          </div>
        </div>
      )}

      {/* Course Selection Modal */}
      <CourseSelectionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
