import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    'Fully recyclable packaging',
    'Fresh food made daily',
    'Smart, low-waste menu engineering',
    'Consistency across 8+ locations',
    'Direct trade sourcing',
    'Ethical farming support',
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
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 leading-tight">
              Built for Busy Workplaces.<br />
              <span className="italic text-soft-gold">Driven by Real Values.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1 - Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
                  Where It All<br />
                  <span className="italic text-coffee-brown">Began</span>
                </h2>
                <p className="text-rich-black/70 text-lg leading-relaxed mb-6">
                  noa's began with a simple idea: bring better coffee and fresh, honest food to the spaces where people work, think and connect.
                </p>
                <p className="text-rich-black/70 text-lg leading-relaxed">
                  Today, we roast our own specialty coffee, run multiple cafés across London and the South East, and provide trusted corporate catering solutions for teams of all sizes.
                </p>
              </div>
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/1ef8a6c287794628a4eb7dcb299ea8de.jpg/v1/fill/w_1334,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Woman%20Enjoying%20her%20Drink.jpg"
                  alt="noa's Story"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Our Values */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                What We Stand For
              </span>
              <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
                Our<br />
                <span className="italic text-coffee-brown">Values</span>
              </h2>
              <p className="text-rich-black/70 text-lg max-w-3xl mx-auto">
                We combine clean corporate structure with genuine human hospitality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 flex items-center gap-4 hover:shadow-md transition-shadow duration-300"
                >
                  <svg
                    className="w-6 h-6 text-coffee-brown flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-rich-black/80">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Our Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="https://static.wixstatic.com/media/11062b_95f01f725e214f99b28844dc1dc1164d~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_95f01f725e214f99b28844dc1dc1164d~mv2.jpg"
                  alt="Our Approach"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                  How We Work
                </span>
                <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
                  Our<br />
                  <span className="italic text-coffee-brown">Approach</span>
                </h2>
                <p className="text-rich-black/70 text-lg leading-relaxed">
                  We operate with clarity, speed and reliability. Every product — from a wrap to a latte — is made fresh, consistent and crafted with intention. We understand the pace of modern workplaces, and we fit seamlessly into that rhythm.
                </p>
              </div>
            </div>
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

      {/* Section 4 - Our Mission */}
      <section className="py-24 bg-coffee-brown text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-6 inline-block">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8 leading-tight">
              Exceptional Coffee.<br />
              <span className="italic text-soft-gold">Sustainable Impact.</span>
            </h2>
            <p className="text-warm-cream/90 text-lg leading-relaxed mb-8">
              To deliver consistent quality, exceptional coffee and fresh daily food to workspaces across the UK — while supporting sustainable farming and ethical sourcing worldwide.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-soft-gold text-rich-black px-12 py-4 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-display text-coffee-brown mb-4">
                  8+
                </div>
                <p className="text-rich-black/70 text-lg uppercase tracking-wider">
                  Locations
                </p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-display text-coffee-brown mb-4">
                  100%
                </div>
                <p className="text-rich-black/70 text-lg uppercase tracking-wider">
                  Recyclable Packaging
                </p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-display text-coffee-brown mb-4">
                  3
                </div>
                <p className="text-rich-black/70 text-lg uppercase tracking-wider">
                  Coffee Origins
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
