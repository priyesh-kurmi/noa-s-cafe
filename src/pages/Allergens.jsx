import React from 'react'
import { motion } from 'framer-motion'

const Allergens = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-rich-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-soft-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-brown rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 leading-tight">
              Nutrition &<br />
              <span className="italic text-soft-gold">Allergens</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-warm-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Allergens
