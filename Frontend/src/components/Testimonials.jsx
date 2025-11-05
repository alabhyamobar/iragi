import React from 'react'

const Testimonials = ({ id, refProp }) => {
  return (
    <section id={id} ref={refProp} className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-gray-100 rounded-lg">
            <p className="text-gray-700 mb-4">"Iragi Renovations transformed our home beautifully!"</p>
            <p className="font-semibold">- John Doe</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <p className="text-gray-700 mb-4">"Professional service and amazing results."</p>
            <p className="font-semibold">- Jane Smith</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

