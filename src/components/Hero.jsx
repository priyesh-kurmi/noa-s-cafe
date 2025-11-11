import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://static.wixstatic.com/media/525754_b3f0a4250f8640e392995c6f49c77826~mv2.png/v1/fill/w_1414,h_594,al_c,q_90,enc_avif,quality_auto/525754_b3f0a4250f8640e392995c6f49c77826~mv2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/70 via-rich-black/50 to-rich-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium">
            Premium Corporate Coffee
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-8 leading-tight">
          Corporate Coffee<br />
          <span className="italic text-soft-gold">with a Smile</span>
        </h1>
        
        <p className="text-lg md:text-xl text-warm-cream/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Exceptional hospitality services for SMEs to global Forbes 500 organisations.
          Where quality meets dedication.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.noas.uk/locations"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-rich-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-warm-cream transition-all duration-300 min-w-[200px]"
          >
            Find a Location
          </a>
          <a
            href="https://noas.order.direct/order"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-white hover:text-rich-black transition-all duration-300 min-w-[200px]"
          >
            Order Now
          </a>
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
  )
}

export default Hero
