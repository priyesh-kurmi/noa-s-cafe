import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-visible bg-rich-black">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        ></div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-bold">
              Fresh Food. Specialty Coffee. Made Daily.
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-rich-black mb-8 leading-tight font-bold">
            Roasted In-House.<br />
            <span className="italic text-coffee-brown">Prepared Fresh Every Morning.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-rich-black mb-12 max-w-3xl mx-auto leading-relaxed font-semibold">
            Served across 8+ locations for the modern working day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://noas.order.direct/order"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coffee-brown text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 min-w-[200px] font-medium shadow-xl"
            >
              Order Now
            </a>
            <Link
              to="/locations"
              className="border-2 border-coffee-brown text-coffee-brown bg-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-coffee-brown hover:text-white transition-all duration-300 min-w-[200px] font-medium shadow-xl"
            >
              Find a NOA'S Café
            </Link>
            <Link
              to="/catering"
              className="border-2 border-rich-black text-white bg-rich-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-white hover:text-rich-black hover:border-rich-black transition-all duration-300 min-w-[200px] font-medium shadow-xl"
            >
              Corporate Catering
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Coffee Image - Between Hero and Next Section */}
      <div className="relative">
        <div 
          className="absolute right-0 z-20 w-3/4 md:w-3/5 lg:w-1/2 animate-slide-in-right"
          style={{
            top: '50%',
          }}
        >
          <img 
            src="/images/coffee.png" 
            alt="Coffee" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Section 1 - Our Coffee */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                Premium Specialty Coffee
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-rich-black mb-6">
                Specialty Coffee,<br />
                <span className="italic text-coffee-brown">Roasted by NOA'S</span>
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
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/11062b_989b50976b7f4f6c87b8579f5f4e1104~mv2.jpg/v1/fill/w_1334,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Black%20Coffee.jpg"
                alt="Specialty Coffee"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Fresh Food Made Daily */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/11062b_0d0f1f9ac51a404b86916cfba22bdb83~mv2.jpg/v1/fill/w_1334,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Morning%20Coffee.jpg"
                alt="Fresh Food"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
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
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Corporate Catering */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
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
          </div>
          <div className="relative h-96 overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/11062b_95f01f725e214f99b28844dc1dc1164d~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_95f01f725e214f99b28844dc1dc1164d~mv2.jpg"
              alt="Corporate Catering"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Section 4 - Sustainability */}
      <section className="py-24 bg-rich-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-coffee-brown rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-6 inline-block">
              Our Commitment
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8 leading-tight">
              Responsibility in<br />
              <span className="italic text-soft-gold">Every Cup</span>
            </h2>
            <p className="text-warm-cream/90 text-lg leading-relaxed">
              We're committed to clean practices at every level — fully recyclable coffee packaging, fresh food prepared daily, smart menu engineering to minimise waste and ethical sourcing that supports farmers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 - Locations Preview */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
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
          </div>
        </div>
      </section>

      {/* Section 6 - About NOA'S */}
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
