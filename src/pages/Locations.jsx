import React from 'react'
import { motion } from 'framer-motion'

const Locations = () => {
  const locations = [
    {
      name: 'Liverpool Street',
      address: 'Central London',
    },
    {
      name: 'Farringdon',
      address: 'Central London',
    },
    {
      name: 'Stockley Park',
      address: 'West London',
    },
    {
      name: 'Bracknell',
      address: 'Berkshire',
    },
    {
      name: 'Theale',
      address: 'Berkshire',
    },
    {
      name: 'Slough Bath Road',
      address: 'Berkshire',
    },
    {
      name: 'Gerrards Cross',
      address: 'Buckinghamshire',
    },
    {
      name: 'Marlow',
      address: 'Buckinghamshire',
    },
    {
      name: 'Waterside',
      address: 'Berkshire',
    },
  ]

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
              Find Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 leading-tight">
              Across London &<br />
              <span className="italic text-soft-gold">the South East</span>
            </h1>
            <p className="text-warm-cream/90 text-lg md:text-xl leading-relaxed">
              Our cafés operate inside corporate and co-working spaces, bringing fresh food and craft coffee to the heart of busy workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-warm-cream p-8 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <span className="text-4xl font-display text-coffee-brown/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display text-rich-black mb-3 group-hover:text-coffee-brown transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-rich-black/70">
                    {location.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-coffee-brown text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Visit Us<br />
              <span className="italic text-soft-gold">Today</span>
            </h2>
            <p className="text-warm-cream/90 text-lg mb-8">
              Stop by your nearest noa's Café or order ahead for collection.
            </p>
            <a
              href="https://noas.order.direct/order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-soft-gold text-rich-black px-12 py-4 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 font-medium"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Locations
