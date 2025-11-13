import React from 'react'
import { motion } from 'framer-motion'

const Menu = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-rich-black text-white relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://static.wixstatic.com/media/11062b_0d0f1f9ac51a404b86916cfba22bdb83~mv2.jpg/v1/fill/w_1334,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Morning%20Coffee.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black/80 via-rich-black/70 to-rich-black/80"></div>
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
              Our Menu
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 leading-tight">
              Explore<br />
              <span className="italic text-soft-gold">Our Menu</span>
            </h1>
            <p className="text-warm-cream/90 text-lg md:text-xl leading-relaxed mb-12">
              Fresh food made daily. Specialty coffee roasted in-house.<br />
              View our full menu and order directly through Flipdish.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://noas.order.direct/order"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-soft-gold text-rich-black px-12 py-4 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 min-w-[250px] font-medium"
              >
                View Full Menu on Flipdish →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
              Menu<br />
              <span className="italic text-coffee-brown">Highlights</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-5xl">☕</span>
              </div>
              <h3 className="text-xl font-display text-rich-black mb-2">Specialty Coffee</h3>
              <p className="text-rich-black/70 text-sm">
                Roasted in-house, brewed to perfection
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-5xl">🥪</span>
              </div>
              <h3 className="text-xl font-display text-rich-black mb-2">Fresh Sandwiches</h3>
              <p className="text-rich-black/70 text-sm">
                Made daily with premium ingredients
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-5xl">🥗</span>
              </div>
              <h3 className="text-xl font-display text-rich-black mb-2">Signature Salads</h3>
              <p className="text-rich-black/70 text-sm">
                Balanced, fresh and flavorful
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-5xl">🥐</span>
              </div>
              <h3 className="text-xl font-display text-rich-black mb-2">Pastries & More</h3>
              <p className="text-rich-black/70 text-sm">
                Breakfast treats and snacks
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
              Ready to<br />
              <span className="italic text-coffee-brown">Order?</span>
            </h2>
            <p className="text-rich-black/70 text-lg mb-8">
              Browse our full menu, customize your order, and collect from your nearest noa's Café.
            </p>
            <a
              href="https://noas.order.direct/order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-coffee-brown text-white px-12 py-4 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
            >
              Order Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Menu
