import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Send email using EmailJS (reusing Jobs template)
      console.log('Attempting to send contact email with data:', {
        from_name: formData.name,
        user_email: formData.email,
        phone: formData.phone,
        location: `${formData.enquiryType} - ${formData.message}`,
      })
      
      const result = await emailjs.send(
        'service_qnv4xb2',
        'template_diit26o',  // Reusing Jobs template since both go to operations@noas.uk
        {
          from_name: formData.name,
          user_email: formData.email,
          phone: formData.phone,
          location: `[CONTACT FORM]\n\nEnquiry Type: ${formData.enquiryType}\n\nMessage:\n${formData.message}`,
        },
        'Gn3B67ifhZvRHtfkb'
      )
      
      console.log('Contact email sent successfully:', result)
      
      // Clear form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        enquiryType: '',
        message: '',
      })
      setSubmitStatus('success')
    } catch (error) {
      console.error('Error sending email:', error)
      console.error('Error details:', error.text || error.message)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-16 bg-rich-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-coffee-brown rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-soft-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-6 inline-block">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 leading-tight">
              Get in<br />
              <span className="italic text-soft-gold">Touch</span>
            </h1>
            <p className="text-warm-cream/90 text-lg md:text-xl leading-relaxed">
              For general enquiries, partnerships or catering quotes, please use the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                  Let's Connect
                </span>
                <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
                  We'd Love to<br />
                  <span className="italic text-coffee-brown">Hear From You</span>
                </h2>
                <p className="text-rich-black/70 text-lg leading-relaxed mb-8">
                  Whether you're interested in our catering services, want to learn more about our coffee, or have a general enquiry, our team is here to help.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider font-medium text-rich-black mb-2">
                      Response Time
                    </h3>
                    <p className="text-rich-black/70">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider font-medium text-rich-black mb-2">
                      Order Online
                    </h3>
                    <p className="text-rich-black/70 mb-3">
                      For immediate orders, use our online ordering system.
                    </p>
                    <a
                      href="https://noas.order.direct/order"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-coffee-brown text-white px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-200"
                    >
                      Order Now
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider font-medium text-rich-black mb-2">
                      Find a Location
                    </h3>
                    <p className="text-rich-black/70">
                      Visit us at any of our 8+ locations across London and the South East.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-warm-cream p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiryType" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                      Enquiry Type *
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="general">General</option>
                      <option value="catering">Catering</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-500 text-green-700 px-4 py-3 rounded">
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm">We'll get back to you as soon as possible.</p>
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
                    className="w-full bg-coffee-brown text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-8 bg-warm-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8">
                <div className="mb-4">
                  <span className="text-4xl">☕</span>
                </div>
                <h3 className="text-xl font-display text-rich-black mb-3">
                  Corporate Catering
                </h3>
                <p className="text-rich-black/70 mb-4">
                  Professional catering services for offices and events.
                </p>
                <a
                  href="/catering"
                  className="text-coffee-brown text-sm uppercase tracking-wider hover:underline"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white p-8">
                <div className="mb-4">
                  <span className="text-4xl">📍</span>
                </div>
                <h3 className="text-xl font-display text-rich-black mb-3">
                  Visit Us
                </h3>
                <p className="text-rich-black/70 mb-4">
                  Find your nearest noa's Café location.
                </p>
                <a
                  href="/locations"
                  className="text-coffee-brown text-sm uppercase tracking-wider hover:underline"
                >
                  View Locations →
                </a>
              </div>

              <div className="bg-white p-8">
                <div className="mb-4">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-xl font-display text-rich-black mb-3">
                  Partnerships
                </h3>
                <p className="text-rich-black/70 mb-4">
                  Interested in partnering with noa's?
                </p>
                <a
                  href="/about"
                  className="text-coffee-brown text-sm uppercase tracking-wider hover:underline"
                >
                  About Us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
