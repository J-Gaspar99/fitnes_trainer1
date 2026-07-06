import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Program, { TrainingPlans } from './components/Program'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import StatsBar from './components/StatsBar'
import ValueSection from './components/ValueSection'
import CtaBanner from './components/CtaBanner'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Program />
        <About />
        <TrainingPlans />
        <HowItWorks />
        <StatsBar />
        <ValueSection />
        <CtaBanner />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
