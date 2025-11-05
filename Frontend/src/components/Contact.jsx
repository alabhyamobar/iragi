import React from 'react'

const Contact = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input id="name" type="text" className="w-full border rounded px-3 py-2" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input id="email" type="email" className="w-full border rounded px-3 py-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea id="message" rows={5} className="w-full border rounded px-3 py-2" placeholder="How can we help?" />
          </div>
          <button type="submit" className="w-full bg-red-700 text-white rounded py-2 hover:bg-red-800 transition-colors">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact


