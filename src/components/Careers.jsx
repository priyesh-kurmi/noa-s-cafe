import React from 'react'

const Careers = () => {
  return (
    <section id="careers" className="py-24 bg-rich-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-coffee-brown rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-soft-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-6 inline-block">
            Join Our Team
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8 leading-tight">
            A Perfect Coffee Starts<br />
            <span className="italic text-soft-gold">with an Extraordinary Barista</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-warm-cream/90 mb-6">
            If you master the art of coffee,
          </p>
          
          <p className="text-xl md:text-2xl text-warm-cream/90 mb-12">
            we have an opening for you.
          </p>

          <a
            href="https://www.noas.uk/jobs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-soft-gold text-rich-black px-12 py-4 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300 font-medium"
          >
            Be Our Artist
          </a>
        </div>
      </div>
    </section>
  )
}

export default Careers
