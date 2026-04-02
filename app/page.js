import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import ServiceCards from './components/ServiceCards'
import About        from './components/About'
import Services     from './components/Services'
import TechSlider   from './components/TechSlider'
import ContactForm  from './components/ContactForm'
import Footer       from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServiceCards />
      <About />
      <Services />
      <TechSlider />
      <ContactForm />
      <Footer />
    </main>
  )
}
