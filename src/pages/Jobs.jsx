import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Jobs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_JOBS_TEMPLATE_ID',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          user_email: formData.email,
          phone: formData.phone,
          location: formData.location,
          to_email: 'operations@noas.uk'
        },
        'YOUR_PUBLIC_KEY'
      )
      
      // Clear form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
      })
      setSubmitStatus('success')
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const locations = [
    'Slough',
    'Reading',
    "Gerrard's Cross",
    'Bracknell',
    'Marlow',
    'Spaces - Liverpool Street Station',
    'Spaces - London, Cannon Street',
    'Regus - Heathrow, Stockley Park, The Square',
  ]

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-16 bg-rich-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-brown rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-6 inline-block">
              Join Our Team
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 leading-tight">
              Work With<br />
              <span className="italic text-soft-gold">noa's</span>
            </h1>
            <p className="text-warm-cream/90 text-lg md:text-xl leading-relaxed">
              Be part of something special. Join our growing team and help us deliver exceptional coffee and service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: Content */}
              <div>
                <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                  Current Openings
                </span>
                <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
                  Join the<br />
                  <span className="italic text-coffee-brown">Ark</span>
                </h2>

                <p className="text-rich-black/80 leading-relaxed mb-6">
                  At noa's Café we are always looking for interesting and hard working people to join the Ark! We are currently on the lookout for:
                </p>

                <div className="bg-warm-cream p-6 mb-6">
                  <h3 className="text-xl font-display text-rich-black mb-3 flex items-center gap-2">
                    <span className="text-coffee-brown">☕</span> Self-Employed Baristas
                  </h3>
                  <p className="text-rich-black/70 text-sm mb-3">
                    We're hiring in the following areas:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                    {locations.map((location, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-coffee-brown mt-0.5">•</span>
                        <span className="text-rich-black/80">{location}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-soft-gold/10 border-l-4 border-soft-gold p-4 mb-6">
                  <p className="text-rich-black/80 text-sm leading-relaxed">
                    <strong>Internal Growth:</strong> All our management or supervisor positions are filled internally by training and investing in the future of our associates!
                  </p>
                </div>

                <p className="text-rich-black/80 text-sm leading-relaxed">
                  If interested, please send your CV to <a href="mailto:operations@noas.uk" className="text-coffee-brown hover:underline font-medium">operations@noas.uk</a> or fill out the form to express your interest.
                </p>
              </div>

              {/* Right: Form */}
              <div>
                <div className="bg-warm-cream p-8 lg:p-10 sticky top-24">
                  <h3 className="text-2xl md:text-3xl font-display text-rich-black mb-6">
                    Express Your <span className="italic text-coffee-brown">Interest</span>
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44"
                        className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                        Preferred Location *
                      </label>
                      <select
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors bg-white"
                      >
                        <option value="">Select a location</option>
                        {locations.map((location, index) => (
                          <option key={index} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Success Message */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-500 text-green-700 px-4 py-3 rounded">
                        <p className="font-semibold">Application submitted successfully!</p>
                        <p className="text-sm">We'll review your application and get back to you soon.</p>
                      </div>
                    )}

                    {/* Error Message */}
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-500 text-red-700 px-4 py-3 rounded">
                        <p className="font-semibold">Oops! Something went wrong.</p>
                        <p className="text-sm">Please try again or contact us directly at operations@noas.uk</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-coffee-brown text-white px-8 py-3.5 text-sm uppercase tracking-wider hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Jobs
