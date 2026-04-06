import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const COURSES = [
  {
    id: 'jee',
    title: 'JEE Coaching',
    subtitle: 'Best for Engineering Entrance',
    color: '#2b40d8',
    bg: '#eff2ff',
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  },
  {
    id: 'neet',
    title: 'NEET Coaching',
    subtitle: 'Medical Entrance Preparation',
    color: '#2e9c6e',
    bg: '#edfaf4',
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  },
  {
    id: 'boards',
    title: 'Board Classes',
    subtitle: 'Class 10th / 12th तैयारी',
    color: '#f97015',
    bg: '#fff4ec',
    icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>
  },
]

const STEPS = ['Select Course', 'Fill Details', 'Confirmation']

export default function CourseSelectionModal({ isOpen, onClose = () => {} }) {
  const [step, setStep] = useState(1)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    mode: 'Offline',
    currentClass: '',
    targetYear: '',
    schoolName: '',
    studyLevel: '',
    pcbLevel: '',
    previousAttempt: '',
    batchTiming: '',
    boardType: '',
    subjects: []
  })

  const course = COURSES.find(c => c.id === selectedCourse) ?? null
  const courseColor = course?.color ?? '#2b40d8'
  const courseBg = course?.bg ?? '#eff2ff'
  const courseTitle = course?.title ?? ''

  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') return
    const originalOverflow = document.body.style.overflow
    const originalOverflowX = document.body.style.overflowX
    document.body.style.overflow = 'hidden'
    document.body.style.overflowX = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.overflowX = originalOverflowX
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && step > 1 && !course) {
      setStep(1)
    }
  }, [isOpen, step, course])

  const resetForm = () => ({
    fullName: '',
    phone: '',
    email: '',
    mode: 'Offline',
    currentClass: '',
    targetYear: '',
    schoolName: '',
    studyLevel: '',
    pcbLevel: '',
    previousAttempt: '',
    batchTiming: '',
    boardType: '',
    subjects: []
  })

  const handleSelect = (courseId) => {
    setSelectedCourse(courseId)
    setStep(2)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { course: selectedCourse, ...formData })
    setStep(3)
  }

  const handleClose = () => {
    setStep(1)
    setSelectedCourse(null)
    setFormData(resetForm())
    onClose()
  }

  const toggleSubject = (subject) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />
          <div className="fixed inset-0 flex items-start sm:items-center justify-center z-[201] p-4 sm:p-6 pointer-events-none overflow-y-auto overflow-x-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="course-selection-modal-title"
              className="bg-white rounded-[28px] shadow-[0_30px_70px_rgba(15,23,42,0.18)] w-full max-w-[95vw] sm:max-w-[700px] md:max-w-[820px] max-h-[calc(100vh-2rem)] overflow-hidden pointer-events-auto flex flex-col"
            >
              <div className="relative bg-gradient-to-br from-[#2b40d8] via-[#1e2f9e] to-[#0f1654] px-6 sm:px-8 py-6 text-white">
                <motion.h2 
                  key={step}
                  id="course-selection-modal-title"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-poppins text-[20px] sm:text-[24px] font-extrabold mb-4"
                >
                  {step === 1 && '🎓 Select Your Course'}
                  {step === 2 && '📝 Enrollment Form'}
                  {step === 3 && '🎉 Thank You!'}
                </motion.h2>

                <div className="flex items-center gap-1 sm:gap-2">
                  {STEPS.map((label, i) => {
                    const stepNum = i + 1
                    const isActive = step === stepNum
                    const isCompleted = step > stepNum
                    return (
                      <div key={label} className="flex items-center flex-1">
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-1">
                          <motion.div
                            animate={{
                              scale: isActive ? [1, 1.1, 1] : 1,
                              backgroundColor: isCompleted ? '#fff' : isActive ? '#f97015' : 'rgba(255,255,255,0.15)'
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[11px] sm:text-[12px] font-bold shrink-0"
                            style={{ color: isCompleted ? '#2b40d8' : '#fff' }}
                          >
                            {isCompleted ? '✓' : stepNum}
                          </motion.div>
                          <span className="text-[10px] sm:text-[11px] font-medium text-white/90 hidden sm:inline truncate">{label}</span>
                        </div>
                        {i < STEPS.length - 1 && (
                          <div className="h-[2px] flex-1 mx-1 sm:mx-2 bg-white/15 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-white rounded-full" 
                              initial={{ width: '0%' }}
                              animate={{ width: isCompleted ? '100%' : '0%' }}
                              transition={{ duration: 0.5, ease: 'easeInOut' }}
                            />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                <button 
                  onClick={handleClose} 
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 hover:rotate-90 flex items-center justify-center transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 sm:p-7">
                {/* Step 1: Course Selection */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-4">
                    {COURSES.map((c, i) => (
                      <motion.div
                        key={c.id}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
                        whileHover={{ scale: 1.02, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-[24px] border-2 cursor-pointer transition-all duration-300 hover:shadow-xl"
                        style={{
                          borderColor: selectedCourse === c.id ? c.color : '#e5e7eb',
                          backgroundColor: selectedCourse === c.id ? c.bg : '#fff'
                        }}
                        onClick={() => handleSelect(c.id)}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: c.bg }}
                        />
                        <motion.div 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="relative shrink-0 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg" 
                          style={{ backgroundColor: c.color }}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                            {c.icon}
                          </svg>
                        </motion.div>
                        <div className="relative flex-1 min-w-0">
                          <h3 className="font-poppins text-[17px] sm:text-[19px] font-bold text-dark mb-1">{c.title}</h3>
                          <p className="text-[13px] sm:text-[14px] font-medium" style={{ color: c.color }}>{c.subtitle}</p>
                        </div>
                        <motion.button 
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative shrink-0 font-poppins font-semibold text-[13px] sm:text-[14px] px-6 py-2.5 rounded-full text-white shadow-lg flex items-center gap-2 self-end sm:self-center" 
                          style={{ backgroundColor: c.color }}
                        >
                          Select
                          <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                          </motion.svg>
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Step 2: Form */}
                {step === 2 && course && (
                  <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="space-y-4">
                    <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="p-4 rounded-xl border-2 flex items-center gap-3" style={{ backgroundColor: courseBg, borderColor: courseColor }}>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'white', color: courseColor }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-text-muted">Selected Course</p>
                        <p className="text-[14px] font-bold" style={{ color: courseColor }}>{courseTitle}</p>
                      </div>
                    </motion.div>

                    <div>
                      <label className="block text-[13px] font-semibold text-dark mb-2">Full Name *</label>
                      <input type="text" placeholder="Enter student's full name" required className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.fullName} onChange={e => handleInputChange('fullName', e.target.value)} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-semibold text-dark mb-2">Phone Number *</label>
                        <input type="tel" placeholder="+91 98765 43210" required className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} />
                      </div>
                      <div>
                        <label className="block text-[13px] font-semibold text-dark mb-2">Email (Optional)</label>
                        <input type="email" placeholder="your@email.com" className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-semibold text-dark mb-2.5">Preferred Mode *</label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Online', 'Offline'].map(m => (
                          <label key={m} className="cursor-pointer">
                            <input type="radio" name="mode" value={m} checked={formData.mode === m} onChange={e => handleInputChange('mode', e.target.value)} className="peer sr-only" />
                            <div className="py-3 text-center text-[13px] font-semibold border-2 rounded-lg transition-all peer-checked:border-blue peer-checked:bg-blue peer-checked:text-white peer-checked:shadow-lg border-gray-200 text-text-muted hover:border-gray-300">
                              {m === 'Online' ? '💻 ' : '🏫 '}{m}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="border-t-2 border-dashed border-gray-200 my-5" />

                    {/* JEE Specific Fields */}
                    {selectedCourse === 'jee' && (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[13px] font-semibold text-dark mb-2">Current Class *</label>
                            <select required className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.currentClass} onChange={e => handleInputChange('currentClass', e.target.value)}>
                              <option value="">Select Class</option>
                              <option>11th</option>
                              <option>12th</option>
                              <option>Dropper</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[13px] font-semibold text-dark mb-2">Target Exam Year *</label>
                            <select required className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.targetYear} onChange={e => handleInputChange('targetYear', e.target.value)}>
                              <option value="">Select Year</option>
                              <option>2026</option>
                              <option>2027</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-dark mb-2">School Name</label>
                          <input type="text" placeholder="Your school name" className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.schoolName} onChange={e => handleInputChange('schoolName', e.target.value)} />
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-dark mb-2.5">Study Level</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                              <label key={level} className="cursor-pointer">
                                <input type="radio" name="studyLevel" value={level} checked={formData.studyLevel === level} onChange={e => handleInputChange('studyLevel', e.target.value)} className="peer sr-only" />
                                <div className="py-2.5 text-center text-[12px] font-semibold border-2 rounded-lg transition-all peer-checked:border-blue peer-checked:bg-blue peer-checked:text-white peer-checked:shadow-lg border-gray-200 text-text-muted hover:border-gray-300">{level}</div>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-dark mb-2">Preferred Batch Timing *</label>
                          <select required className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.batchTiming} onChange={e => handleInputChange('batchTiming', e.target.value)}>
                            <option value="">Select Timing</option>
                            <option>Morning (7-10 AM)</option>
                            <option>Afternoon (12-3 PM)</option>
                            <option>Evening (5-8 PM)</option>
                          </select>
                        </div>
                      </>
                    )}

                    {/* NEET Specific Fields */}
                    {selectedCourse === 'neet' && (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[13px] font-semibold text-dark mb-2">Current Class *</label>
                            <select required className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.currentClass} onChange={e => handleInputChange('currentClass', e.target.value)}>
                              <option value="">Select Class</option>
                              <option>11th</option>
                              <option>12th</option>
                              <option>Dropper</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[13px] font-semibold text-dark mb-2">Target Exam Year *</label>
                            <select required className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.targetYear} onChange={e => handleInputChange('targetYear', e.target.value)}>
                              <option value="">Select Year</option>
                              <option>2026</option>
                              <option>2027</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-dark mb-2.5">PCB Level</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {['Weak', 'Average', 'Strong'].map(level => (
                              <label key={level} className="cursor-pointer">
                                <input type="radio" name="pcbLevel" value={level} checked={formData.pcbLevel === level} onChange={e => handleInputChange('pcbLevel', e.target.value)} className="peer sr-only" />
                                <div className="py-2.5 text-center text-[12px] font-semibold border-2 rounded-lg transition-all peer-checked:border-green peer-checked:bg-green peer-checked:text-white peer-checked:shadow-lg border-gray-200 text-text-muted hover:border-gray-300">{level}</div>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-dark mb-2.5">Previous Attempt?</label>
                          <div className="grid grid-cols-2 gap-3">
                            {['Yes', 'No'].map(opt => (
                              <label key={opt} className="cursor-pointer">
                                <input type="radio" name="previousAttempt" value={opt} checked={formData.previousAttempt === opt} onChange={e => handleInputChange('previousAttempt', e.target.value)} className="peer sr-only" />
                                <div className="py-3 text-center text-[13px] font-semibold border-2 rounded-lg transition-all peer-checked:border-green peer-checked:bg-green peer-checked:text-white peer-checked:shadow-lg border-gray-200 text-text-muted hover:border-gray-300">{opt}</div>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-dark mb-2">Preferred Batch Timing *</label>
                          <select required className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.batchTiming} onChange={e => handleInputChange('batchTiming', e.target.value)}>
                            <option value="">Select Timing</option>
                            <option>Morning (7-10 AM)</option>
                            <option>Afternoon (12-3 PM)</option>
                            <option>Evening (5-8 PM)</option>
                          </select>
                        </div>
                      </>
                    )}

                    {/* Boards Specific Fields */}
                    {selectedCourse === 'boards' && (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[13px] font-semibold text-dark mb-2">Current Class *</label>
                            <select required className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.currentClass} onChange={e => handleInputChange('currentClass', e.target.value)}>
                              <option value="">Select Class</option>
                              <option>10th</option>
                              <option>12th</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[13px] font-semibold text-dark mb-2">Board Type</label>
                            <select className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.boardType} onChange={e => handleInputChange('boardType', e.target.value)}>
                              <option value="">Select Board</option>
                              <option>CBSE</option>
                              <option>GSEB</option>
                              <option>ICSE</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-dark mb-2.5">Select Subjects *</label>
                          <div className="flex flex-wrap gap-2">
                            {['Maths', 'Science', 'English', 'Social', 'Hindi'].map(sub => (
                              <label key={sub} className="cursor-pointer">
                                <input type="checkbox" checked={formData.subjects.includes(sub)} onChange={() => toggleSubject(sub)} className="peer sr-only" />
                                <div className="py-2.5 px-4 text-[12.5px] font-semibold border-2 rounded-lg transition-all peer-checked:border-orange peer-checked:bg-orange peer-checked:text-white peer-checked:shadow-lg border-gray-200 text-text-muted hover:border-gray-300">{sub}</div>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-dark mb-2">Preferred Batch Timing *</label>
                          <select required className="w-full py-3 px-4 text-[14px] border-2 border-gray-200 rounded-lg outline-none bg-white transition-all focus:border-blue focus:shadow-[0_0_0_3px_rgba(43,64,216,0.1)]" value={formData.batchTiming} onChange={e => handleInputChange('batchTiming', e.target.value)}>
                            <option value="">Select Timing</option>
                            <option>Morning (7-10 AM)</option>
                            <option>Afternoon (12-3 PM)</option>
                            <option>Evening (5-8 PM)</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="flex gap-3 pt-5">
                      <motion.button type="button" onClick={() => setStep(1)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 py-3.5 rounded-lg border-2 border-gray-300 font-poppins font-semibold text-[14px] text-text-muted hover:border-gray-400 hover:bg-gray-50 transition-all">← Back</motion.button>
                      <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 py-3.5 rounded-lg font-poppins font-semibold text-[14px] text-white shadow-lg" style={{ backgroundColor: courseColor }}>Submit Enrollment →</motion.button>
                    </div>
                  </motion.form>
                )}

                {/* Step 3: Thank You */}
                {step === 3 && course && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6 sm:py-10">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ backgroundColor: courseBg }}>
                      <motion.svg initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewBox="0 0 24 24" width="44" height="44" fill="none" stroke={courseColor} strokeWidth="2.5" strokeLinecap="round">
                        <motion.polyline points="20 6 9 17 4 12"/>
                      </motion.svg>
                    </motion.div>

                    <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-poppins text-[24px] sm:text-[28px] font-extrabold text-dark mb-3">
                      Enrollment Submitted! 🎉
                    </motion.h3>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-[14px] sm:text-[15px] text-text-muted mb-2">
                      Thank you for choosing <span className="font-bold" style={{ color: courseColor }}>{courseTitle}</span>
                    </motion.p>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-[13px] text-text-muted mb-8">
                      Our team will contact you within 24 hours.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 sm:p-6 mb-6 text-left border border-gray-200">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: courseColor }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-4 h-4">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                          </svg>
                        </div>
                        <p className="text-[13px] font-bold text-dark">What happens next?</p>
                      </div>
                      <ul className="space-y-3 text-[12.5px] text-text-muted">
                        <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: courseBg, color: courseColor }}>
                            <span className="text-[11px] font-bold">1</span>
                          </div>
                          <span><span className="font-semibold text-dark">Verification call</span> from our admission team</span>
                        </motion.li>
                        <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: courseBg, color: courseColor }}>
                            <span className="text-[11px] font-bold">2</span>
                          </div>
                          <span><span className="font-semibold text-dark">Free demo class</span> scheduling & orientation</span>
                        </motion.li>
                        <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: courseBg, color: courseColor }}>
                            <span className="text-[11px] font-bold">3</span>
                          </div>
                          <span><span className="font-semibold text-dark">Batch allocation</span> & study material delivery</span>
                        </motion.li>
                      </ul>
                    </motion.div>

                    <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleClose} className="w-full py-3.5 rounded-lg font-poppins font-semibold text-[15px] text-white shadow-lg" style={{ backgroundColor: courseColor }}>
                      Done ✓
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
