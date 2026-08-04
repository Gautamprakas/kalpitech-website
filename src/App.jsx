import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceAreas from './components/ServiceAreas'
import Stats from './components/Stats'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceAreas />
        <Stats />
        <Services />
        <Process />
        <Projects />
        <Pricing />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
