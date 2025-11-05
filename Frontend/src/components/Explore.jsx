import React from 'react'
import Services from './Services'

const Explore = () => {
  return (
    <main className="flex flex-col">
      <section className="w-full min-h-[40vh] flex items-center justify-center bg-gray-100">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold mb-2">Explore</h1>
          <p className="text-gray-700">Discover our offerings and craftsmanship.</p>
        </div>
      </section>
      <Services />
    </main>
  )
}

export default Explore


