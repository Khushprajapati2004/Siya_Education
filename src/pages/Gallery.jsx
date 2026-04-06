import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnnouncementTicker from '../components/AnnouncementTicker'

const TABS = ['All', 'Photos', 'Videos']
const CATEGORY_FILTERS = ['All', 'Classroom', 'Results', 'Events']

// Real Unsplash education photos + YouTube video IDs
const GALLERY_ITEMS = [
  {
    id: 1, type: 'photo', category: 'Classroom', aspect: 'tall',
    title: 'JEE Morning Batch', desc: 'Students focused during early morning JEE session',
    color: '#2b40d8',
    img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80',
  },
  {
    id: 2, type: 'photo', category: 'Results', aspect: 'wide',
    title: 'Top Scorers 2024', desc: 'Our JEE rankers celebrating their success',
    color: '#f97015',
    img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=700&q=80',
  },
  {
    id: 3, type: 'video', category: 'Events', aspect: 'normal',
    title: 'JEE Preparation Strategy', desc: 'Complete roadmap by our senior faculty',
    color: '#2b40d8',
    videoId: 'VkXjGe6IQII',
    thumb: 'https://img.youtube.com/vi/VkXjGe6IQII/hqdefault.jpg',
  },
  {
    id: 4, type: 'photo', category: 'Classroom', aspect: 'normal',
    title: 'NEET Biology Lab', desc: 'Hands-on biology practical session',
    color: '#2e9c6e',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80',
  },
  {
    id: 5, type: 'video', category: 'Events', aspect: 'wide',
    title: 'NEET Preparation Tips', desc: 'Complete NEET strategy by expert mentors',
    color: '#2e9c6e',
    videoId: 'wYkEMDivFEA',
    thumb: 'https://img.youtube.com/vi/wYkEMDivFEA/hqdefault.jpg',
  },
  {
    id: 6, type: 'photo', category: 'Results', aspect: 'normal',
    title: 'Board Exam Toppers', desc: '95%+ scorers in CBSE & GSEB boards',
    color: '#2b40d8',
    img: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80',
  },
  {
    id: 7, type: 'photo', category: 'Classroom', aspect: 'tall',
    title: 'Physics Workshop', desc: 'Mechanics experiment in the lab',
    color: '#f97015',
    img: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=600&q=80',
  },
  {
    id: 8, type: 'video', category: 'Events', aspect: 'normal',
    title: 'Study Motivation', desc: 'Inspirational talk for JEE & NEET aspirants',
    color: '#f97015',
    videoId: 'W29RM1EMdMk',
    thumb: 'https://img.youtube.com/vi/W29RM1EMdMk/hqdefault.jpg',
  },
  {
    id: 9, type: 'photo', category: 'Classroom', aspect: 'wide',
    title: 'Doubt Clearing Session', desc: 'One-on-one mentoring with faculty',
    color: '#2b40d8',
    img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=700&q=80',
  },
  {
    id: 10, type: 'photo', category: 'Results', aspect: 'normal',
    title: 'NEET Qualifiers 2024', desc: 'Medical entrance achievers felicitation',
    color: '#2e9c6e',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
  },
  {
    id: 11, type: 'video', category: 'Events', aspect: 'normal',
    title: 'Board Exam Tips', desc: 'Score 95%+ with these proven strategies',
    color: '#2b40d8',
    videoId: 'ukLnPbIffxE',
    thumb: 'https://img.youtube.com/vi/ukLnPbIffxE/hqdefault.jpg',
  },
  {
    id: 12, type: 'photo', category: 'Classroom', aspect: 'normal',
    title: 'Chemistry Lab Session', desc: 'Organic chemistry practical in progress',
    color: '#f97015',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
  },
  {
    id: 13, type: 'photo', category: 'Events', aspect: 'wide',
    title: 'Annual Prize Distribution', desc: 'Celebrating our achievers on stage',
    color: '#2b40d8',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&q=80',
  },
  {
    id: 14, type: 'photo', category: 'Classroom', aspect: 'normal',
    title: 'Maths Problem Solving', desc: 'Advanced calculus batch in action',
    color: '#2b40d8',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
  },
  {
    id: 15, type: 'video', category: 'Events', aspect: 'normal',
    title: 'How to Study Effectively', desc: 'Proven techniques for competitive exams',
    color: '#2e9c6e',
    videoId: 'p60rN9JEapg',
    thumb: 'https://img.youtube.com/vi/p60rN9JEapg/hqdefault.jpg',
  },
]

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All')
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = GALLERY_ITEMS.filter(item => {
    const tabMatch = activeTab === 'All' || (activeTab === 'Photos' && item.type === 'photo') || (activeTab === 'Videos' && item.type === 'video')
    const catMatch = activeCategory === 'All' || item.category === activeCategory
    return tabMatch && catMatch
  })

  return (
    <>
      <AnnouncementTicker />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#2b40d8] via-[#1e2f9e] to-[#0f1654] py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #f97015 0%, transparent 50%), radial-gradient(circle at 80% 20%, #fff 0%, transparent 40%)' }} />
        <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            <span className="text-white/90 text-[13px] font-medium">Our Memories</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-poppins text-[36px] sm:text-[52px] font-extrabold text-white mb-4 leading-tight">
            Gallery
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/70 text-[15px] sm:text-[17px] max-w-[520px] mx-auto">
            Moments from classrooms, events, and celebrations that define our journey.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Type Tabs */}
          <div className="relative flex items-center bg-gray-100 rounded-full p-1 gap-1">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-5 py-2 rounded-full text-[13px] font-semibold transition-colors z-10"
                style={{ color: activeTab === tab ? '#fff' : '#6b7280' }}
              >
                {activeTab === tab && (
                  <motion.div layoutId="tab-pill" className="absolute inset-0 rounded-full bg-[#2b40d8]" style={{ zIndex: -1 }} transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                )}
                {tab}
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 rounded-full text-[12.5px] font-semibold border-2 transition-all"
                style={{
                  borderColor: activeCategory === cat ? '#f97015' : '#e5e7eb',
                  backgroundColor: activeCategory === cat ? '#f97015' : 'transparent',
                  color: activeCategory === cat ? '#fff' : '#6b7280'
                }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-[1280px] mx-auto px-6 py-12 sm:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.06, type: 'spring', stiffness: 300, damping: 25 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setLightbox(item)}
                className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
              >
                <div
                  className="relative w-full flex flex-col justify-end"
                  style={{ height: item.aspect === 'tall' ? '340px' : item.aspect === 'wide' ? '220px' : '270px' }}
                >
                  {/* Real image or video thumbnail */}
                  <img
                    src={item.type === 'video' ? item.thumb : item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback gradient if image fails */}
                  <div className="absolute inset-0 hidden items-center justify-center" style={{ background: `linear-gradient(135deg, ${item.color}cc, ${item.color}44)` }}>
                    <span className="text-white/40 text-5xl">{item.type === 'video' ? '▶' : '🖼'}</span>
                  </div>

                  {/* Video play icon */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center shadow-xl"
                      >
                        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                          <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                      </motion.div>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

                  {/* Zoom icon on hover */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-4 h-4">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                  </div>

                  {/* Type badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white backdrop-blur-sm border border-white/20" style={{ backgroundColor: item.type === 'video' ? 'rgba(249,112,21,0.85)' : 'rgba(43,64,216,0.85)' }}>
                      {item.type === 'video' ? '▶ Video' : '📷 Photo'}
                    </span>
                  </div>

                  {/* Info overlay */}
                  <div className="relative p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <span className="text-[11px] font-semibold text-white/70 uppercase tracking-wider">{item.category}</span>
                    <h3 className="font-poppins text-[15px] font-bold text-white mt-0.5">{item.title}</h3>
                    <p className="text-[12px] text-white/70 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-text-muted font-medium">No items found for this filter.</p>
          </motion.div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[300]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[301] p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="pointer-events-auto w-full max-w-[760px] rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Media area */}
                {lightbox.type === 'photo' ? (
                  <div className="relative w-full bg-black flex items-center justify-center" style={{ maxHeight: '480px', minHeight: '280px' }}>
                    <img
                      src={lightbox.img}
                      alt={lightbox.title}
                      className="w-full object-contain"
                      style={{ maxHeight: '480px' }}
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentNode.style.background = `linear-gradient(135deg, ${lightbox.color}99, ${lightbox.color}33)`
                      }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full bg-black" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${lightbox.videoId}?autoplay=1&rel=0`}
                      title={lightbox.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                {/* Info bar */}
                <div className="bg-white p-5 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: lightbox.color }}>{lightbox.category}</span>
                    <h3 className="font-poppins text-[18px] font-extrabold text-dark mt-1">{lightbox.title}</h3>
                    <p className="text-[13px] text-text-muted mt-1">{lightbox.desc}</p>
                  </div>
                  <button onClick={() => setLightbox(null)} className="shrink-0 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-5 h-5 text-dark">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
