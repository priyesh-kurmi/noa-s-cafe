import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  const galleryRef = useRef(null)
  const [isGalleryVisible, setIsGalleryVisible] = useState(false)

  // Optimized gallery - reduced from 31 to 18 best images
  const galleryImages = [
    'IMG-20251111-WA0002.jpg',
    'IMG-20251111-WA0004.jpg',
    'IMG-20251111-WA0006.jpg',
    'IMG-20251111-WA0008.jpg',
    'IMG-20251111-WA0010.jpg',
    'IMG-20251111-WA0012.jpg',
    'IMG-20251111-WA0014.jpg',
    'IMG-20251111-WA0016.jpg',
    'IMG-20251111-WA0018.jpg',
    'IMG-20251111-WA0020.jpg',
    'IMG-20251111-WA0022.jpg',
    'IMG-20251111-WA0024.jpg',
    'IMG-20251111-WA0026.jpg',
    'IMG-20251111-WA0028.jpg',
    'IMG-20251111-WA0030.jpg',
    'IMG-20251111-WA0032.jpg',
    'IMG-20251111-WA0015.jpg',
    'IMG-20251111-WA0023.jpg',
  ]

  // Split images into 3 rows
  const row1 = galleryImages.slice(0, 6)
  const row2 = galleryImages.slice(6, 12)
  const row3 = galleryImages.slice(12, 18)

  // Intersection Observer to pause animations when gallery is off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsGalleryVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (galleryRef.current) {
      observer.observe(galleryRef.current)
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current)
      }
    }
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 flex items-center justify-center bg-rich-black overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/ourcoffee2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-rich-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <span className="text-white text-lg md:text-xl uppercase tracking-[0.3em] font-bold drop-shadow-lg">
              Fresh Food. Specialty Coffee. Made Daily.
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-lg"
          >
            Served across 8+ locations for the modern working day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-50"
          >
            <a
              href="https://noas.order.direct/order"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coffee-brown text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 w-full sm:w-[240px] font-medium shadow-xl relative z-50"
            >
              Order Now
            </a>
            <Link
              to="/locations"
              className="border-2 border-coffee-brown text-coffee-brown bg-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-coffee-brown hover:text-white transition-all duration-300 w-full sm:w-[240px] font-medium shadow-xl relative z-50"
            >
              Find a noa's Café
            </Link>
            <Link
              to="/catering"
              className="border-2 border-rich-black text-white bg-rich-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-white hover:text-rich-black hover:border-rich-black transition-all duration-300 w-full sm:w-[240px] font-medium shadow-xl relative z-50"
            >
              Corporate Catering
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Our Coffee */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                Premium Specialty Coffee
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-rich-black mb-6">
                Specialty Coffee,<br />
                <span className="italic text-coffee-brown">Roasted by noa's</span>
              </h2>
              <p className="text-rich-black/70 text-lg leading-relaxed mb-8">
                Our coffee starts at origin and ends in our Surrey roastery, where we roast in small batches for unmatched consistency and flavour. Ethically sourced from Brazil, Uganda and Colombia, every bean is part of a direct trade relationship that prioritises sustainability, fair pay, and exceptional quality.
              </p>
              <Link
                to="/our-coffee"
                className="inline-block bg-coffee-brown text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
              >
                Explore Our Coffee →
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] overflow-hidden"
            >
              <img
                src="https://static.wixstatic.com/media/11062b_989b50976b7f4f6c87b8579f5f4e1104~mv2.jpg/v1/fill/w_1334,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Black%20Coffee.jpg"
                alt="Specialty Coffee"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Fresh Food Made Daily */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative h-[400px] md:h-[500px] overflow-hidden"
            >
              <img
                src="https://static.wixstatic.com/media/11062b_0d0f1f9ac51a404b86916cfba22bdb83~mv2.jpg/v1/fill/w_1334,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Morning%20Coffee.jpg"
                alt="Fresh Food"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                Made Fresh Daily
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-rich-black mb-6">
                Food Made Fresh<br />
                <span className="italic text-coffee-brown">Every Morning</span>
              </h2>
              <p className="text-rich-black/70 text-lg leading-relaxed">
                Our menu is intentionally designed for speed, freshness and balance. Wraps, salads, pastries and fruit bowls are prepared daily using smart ingredient systems to reduce waste and deliver consistent quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Corporate Catering */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                Corporate Solutions
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-rich-black mb-6">
                Where Coffee Meets<br />
                <span className="italic text-coffee-brown">Corporate</span>
              </h2>
              <p className="text-rich-black/70 text-lg leading-relaxed mb-8">
                From fresh sandwiches to premium specialty coffee, we support teams, offices and events with reliable, professionally presented catering. Whether it's a board meeting or a full office lunch, we deliver consistency, quality and speed.
              </p>
              <Link
                to="/catering"
                className="inline-block bg-coffee-brown text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
              >
                View Catering Services →
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/images/corporatehome.jpg"
                alt="Corporate Catering"
                className="w-full h-auto max-h-[600px] object-contain"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 - Locations Preview */}
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
              Find Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-rich-black mb-6">
              Across London &<br />
              <span className="italic text-coffee-brown">the South East</span>
            </h2>
            <p className="text-rich-black/70 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              From Farringdon to Stockley Park, our cafés operate inside corporate and co-working spaces, bringing fresh food and craft coffee to the heart of busy workplaces.
            </p>
            <Link
              to="/locations"
              className="inline-block bg-coffee-brown text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
            >
              View All Locations →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Customer Experience */}
      <section ref={galleryRef} className="py-24 bg-rich-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-soft-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-brown rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-6 inline-block">
              Captured Moments
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 leading-tight">
              Where Coffee Meets<br />
              <span className="italic text-soft-gold">Community</span>
            </h2>
            <p className="text-warm-cream/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-4">
              Every cup tells a story. From early morning meetings to afternoon coffee breaks, 
              our customers capture the moments that matter.
            </p>
            <p className="text-warm-cream/80 leading-relaxed max-w-2xl mx-auto italic">
              "More than just coffee — it's the daily ritual that fuels productivity, 
              sparks conversation, and creates connection."
            </p>
          </motion.div>

          {/* Gallery Grid - Optimized with conditional animation */}
          <div className="space-y-6 overflow-hidden">
            {/* Row 1 */}
            <div className="flex gap-4">
              <div className={`flex gap-4 ${isGalleryVisible ? 'animate-scroll-left' : ''}`}>
                {[...row1, ...row1].map((img, index) => (
                  <div 
                    key={`row1-${index}`} 
                    className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 overflow-hidden group cursor-pointer bg-coffee-brown/20"
                  >
                    <img
                      src={`/images/gallary/${img}`}
                      alt={`noa's Café Experience`}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-4">
              <div className={`flex gap-4 ${isGalleryVisible ? 'animate-scroll-right-slow' : ''}`}>
                {[...row2, ...row2].map((img, index) => (
                  <div 
                    key={`row2-${index}`} 
                    className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 overflow-hidden group cursor-pointer bg-coffee-brown/20"
                  >
                    <img
                      src={`/images/gallary/${img}`}
                      alt={`noa's Café Experience`}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex gap-4">
              <div className={`flex gap-4 ${isGalleryVisible ? 'animate-scroll-left-slower' : ''}`}>
                {[...row3, ...row3].map((img, index) => (
                  <div 
                    key={`row3-${index}`} 
                    className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 overflow-hidden group cursor-pointer bg-coffee-brown/20"
                  >
                    <img
                      src={`/images/gallary/${img}`}
                      alt={`noa's Café Experience`}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-warm-cream/90 text-lg mb-6">
              Share your noa's moment with us
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <span className="text-soft-gold text-sm uppercase tracking-wider">#noascafe</span>
              <span className="text-warm-cream/40">•</span>
              <span className="text-soft-gold text-sm uppercase tracking-wider">#specialtycoffee</span>
              <span className="text-warm-cream/40">•</span>
              <span className="text-soft-gold text-sm uppercase tracking-wider">#coffeecommunity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - About noa's */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="https://static.wixstatic.com/media/1ef8a6c287794628a4eb7dcb299ea8de.jpg/v1/fill/w_1334,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Woman%20Enjoying%20her%20Drink.jpg"
                  alt="NOA'S Experience"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                  Who We Are
                </span>
                <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
                  A Corporate Look.<br />
                  <span className="italic text-coffee-brown">A Human Soul.</span>
                </h2>
                <p className="text-rich-black/70 text-lg leading-relaxed mb-8">
                  We pair structured, reliable operations with warmth, community and responsible values — creating cafés that feel personal in spaces built for business.
                </p>
                <Link
                  to="/about"
                  className="inline-block border-2 border-coffee-brown text-coffee-brown px-8 py-3 text-sm uppercase tracking-wider hover:bg-coffee-brown hover:text-white transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
