import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Catering = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    guestCount: '',
    eventDate: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your enquiry! We will get back to you shortly.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const cateringOptions = [
    {
      title: 'Breakfast Catering',
      items: [
        'Pastries, bagels, and fruit bowls',
        'Freshly brewed specialty coffee',
        'Optional pop-up barista service',
      ],
    },
    {
      title: 'Lunch Catering',
      items: [
        'Fresh sandwiches & wraps',
        'Salads & sides',
        'Signature fruit bowls',
      ],
    },
    {
      title: 'Meetings & Events',
      items: [
        'Pop-up staffed coffee stations',
        'Branded cups, clean presentation',
        'Premium professionalism tailored to corporate spaces',
      ],
    },
  ]

  const reasons = [
    'Trusted catering partner for corporate teams',
    'Consistency across 8+ locations',
    'Specialty coffee roasted by us',
    'Fresh sandwiches/wraps made daily',
    'Signature salads and fruit bowls',
    'Breakfast pastries & bagels',
    'Staffed pop-up coffee bars on request',
    'Fully recyclable packaging',
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-6 inline-block">
              Corporate Solutions
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 leading-tight">
              Corporate Catering<br />
              <span className="italic text-soft-gold">by noa's</span>
            </h1>
            <p className="text-warm-cream/90 text-lg md:text-xl leading-relaxed">
              Fresh, reliable, consistent — designed for offices, co-working spaces, and events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                Our Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
                Why Companies<br />
                <span className="italic text-coffee-brown">Choose noa's</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <svg
                    className="w-6 h-6 text-coffee-brown flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-rich-black/80 text-lg">{reason}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-80 overflow-hidden"
            >
              <img
                src="https://static.wixstatic.com/media/11062b_95f01f725e214f99b28844dc1dc1164d~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_95f01f725e214f99b28844dc1dc1164d~mv2.jpg"
                alt="Corporate Catering"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Catering Options */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
              Catering<br />
              <span className="italic text-coffee-brown">Options</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cateringOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8"
              >
                <div className="mb-6">
                  <span className="text-5xl font-display text-coffee-brown/20">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl font-display text-rich-black mt-2">
                    {option.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {option.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-coffee-brown mt-1">•</span>
                      <span className="text-rich-black/70">{item}</span>
                    </li>
                    ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition & Allergens */}
      <section className="py-16 bg-warm-cream border-t border-b border-coffee-brown/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-display text-rich-black mb-3">
                Nutrition & <span className="italic text-coffee-brown">Allergens</span>
              </h3>
              <p className="text-rich-black/70 leading-relaxed max-w-2xl">
                We take food allergies and intolerances seriously. Full allergen information is available for every item on our menu — just ask a member of our team before ordering.
              </p>
            </div>
            <a
              href="https://www.noas.uk/_files/ugd/525754_8a780cdcf5dd45d38cf7c6dcf7f4851d.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coffee-brown text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              See Allergens
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                Get Started
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
                Request a<br />
                <span className="italic text-coffee-brown">Quote</span>
              </h2>
              <p className="text-rich-black/70 text-lg">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors"
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
                    className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="meeting">Meeting</option>
                    <option value="event">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guestCount" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                    Guest Count *
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-wider text-rich-black mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-coffee-brown/20 focus:border-coffee-brown outline-none transition-colors resize-none"
                  placeholder="Tell us more about your event..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-coffee-brown text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Catering
