import React from 'react'

const About = ({ id, refProp }) => {
  return (
    <section id={id} ref={refProp} className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">About Us</h2>
        <p className="text-lg md:text-xl text-gray-700">
          We are passionate about bringing your renovation dreams to life with quality craftsmanship and exceptional service.
        </p>
      </div>
    </section>
  )
}

export default About

