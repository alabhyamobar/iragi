import React, { useRef } from 'react'
import Nav from './components/Nav'
import BrushReveal from './components/BrushReveal'
import NavMobMenue from './components/NavMobMenue'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Explore from './components/Explore'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const serviceRef = useRef(null)
  const testimonialRef = useRef(null)

  return (
    <div className="w-screen  text-black overflow-x-hidden section">
      <BrushReveal/>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={(
            <main className="flex flex-col ">
              <Home id='home' refProp={homeRef} />
              <About id='about' refProp={aboutRef}  />
              <Services id='service' refProp={serviceRef} />
              <Testimonials id='testimonial' refProp={testimonialRef} />
              <Footer/>
            </main>
          )}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  )
}

export default App