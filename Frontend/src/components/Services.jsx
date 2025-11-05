import React from 'react'

const Services = ({ id, refProp }) => {
  return (
    <section id={id} ref={refProp} className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Kitchen Renovation</h3>
            <p className="text-gray-600">Transform your kitchen into a modern space</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Bathroom Remodel</h3>
            <p className="text-gray-600">Create luxurious bathroom spaces</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Interior Design</h3>
            <p className="text-gray-600">Complete interior design solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

