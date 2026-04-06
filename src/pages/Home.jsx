import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import Results from '../components/Results'
import ScholarshipBanner from '../components/ScholarshipBanner'
import Courses from '../components/Courses'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import HeroModal from '../components/HeroModal'
import AnnouncementTicker from '../components/AnnouncementTicker'

import Announcements from '../components/Announcements'

export default function Home() {
  return (
    <>
      <AnnouncementTicker />
      <Navbar />
      <Hero />
      <HeroModal />
      <Announcements />
      <WhyUs />
      <Results />
      <ScholarshipBanner />
      <Courses />
      <FAQ />
      <Footer />
    </>
  )
}
