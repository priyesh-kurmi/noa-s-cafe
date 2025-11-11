import React from 'react'

const OurCoffee = () => {
  const coffeeOrigins = [
    {
      country: 'Brazil',
      variety: 'Peaberry Natural',
      elevation: '900–1000 MASL',
      notes: ['Bright orange', 'Juicy sweetness', 'Maple syrup'],
    },
    {
      country: 'Uganda',
      variety: 'Washed Arabica',
      elevation: 'Mount Elgon, 1700–2200 MASL',
      notes: ['Strawberry jam', 'Floral citrus', 'Bright acidity'],
    },
    {
      country: 'Colombia',
      variety: 'Caturra',
      elevation: 'Tolima Region, <2000 MASL',
      notes: ['Panela sweetness', 'Apple', 'Cocoa', 'Spiced chocolate'],
      score: '87 points',
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
              Our Coffee
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display mb-8 leading-tight">
              Crafted at Origin.<br />
              <span className="italic text-soft-gold">Perfected in Our Roastery.</span>
            </h1>
            <p className="text-warm-cream/90 text-lg md:text-xl leading-relaxed">
              We roast our own specialty coffee using carefully selected beans from farms we know, trust and support.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 - Roasting Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                  Our Process
                </span>
                <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
                  Small-Batch<br />
                  <span className="italic text-coffee-brown">Precision</span>
                </h2>
                <p className="text-rich-black/70 text-lg leading-relaxed">
                  Every batch is slow-roasted in Surrey using methods that highlight origin flavour, aroma and balance. Our roasting team ensures your cup tastes as smooth and consistent in Farringdon as it does in Stockley Park.
                </p>
              </div>
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src="/images/ourcoffee1.jpg"
                  alt="Coffee Roasting"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Coffee Origins */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
              Our Beans
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-rich-black mb-6">
              Our Coffee<br />
              <span className="italic text-coffee-brown">Origins</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coffeeOrigins.map((coffee, index) => (
              <div
                key={index}
                className="bg-white p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-display text-coffee-brown mb-2">
                    {coffee.country}
                  </h3>
                  <p className="text-sm uppercase tracking-wider text-rich-black/60 mb-1">
                    {coffee.variety}
                  </p>
                  <p className="text-sm text-rich-black/50">
                    {coffee.elevation}
                  </p>
                  {coffee.score && (
                    <p className="text-sm font-medium text-soft-gold mt-2">
                      {coffee.score}
                    </p>
                  )}
                </div>
                <div className="border-t border-coffee-brown/20 pt-4">
                  <p className="text-xs uppercase tracking-wider text-rich-black/60 mb-3">
                    Tasting Notes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {coffee.notes.map((note, noteIndex) => (
                      <span
                        key={noteIndex}
                        className="text-sm text-coffee-brown bg-coffee-brown/10 px-3 py-1"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Responsible Sourcing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/images/ourcoffee2.jpg"
                  alt="Coffee Sourcing"
                  className="w-full h-[500px] object-contain"
                  loading="lazy"
                />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-4 inline-block">
                  Ethical Partnerships
                </span>
                <h2 className="text-4xl md:text-5xl font-display text-rich-black mb-6">
                  Direct Trade,<br />
                  <span className="italic text-coffee-brown">Fair Pay, Real Relationships</span>
                </h2>
                <p className="text-rich-black/70 text-lg leading-relaxed">
                  We work directly with growers — not brokers — ensuring farmers receive fair compensation and long-term partnership support. Our sourcing approach uplifts communities and strengthens sustainable agricultural practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Packaging & Environment */}
      <section className="py-24 bg-coffee-brown text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-soft-gold text-sm uppercase tracking-[0.3em] font-medium mb-6 inline-block">
              Sustainability
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-8 leading-tight">
              Fully Recyclable<br />
              <span className="italic text-soft-gold">Packaging</span>
            </h2>
            <p className="text-warm-cream/90 text-lg leading-relaxed">
              Our coffee bags are made from 100% recyclable paper — one of the most eco-conscious options available in the UK. It's simple, responsible, and aligned with our principles.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 - Why It Matters */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-coffee-brown text-sm uppercase tracking-[0.3em] font-medium mb-6 inline-block">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-rich-black mb-8 leading-tight">
              Coffee Designed for<br />
              <span className="italic text-coffee-brown">the Workplace</span>
            </h2>
            <p className="text-rich-black/70 text-lg leading-relaxed mb-8">
              We created noa's coffee to fuel productivity, creativity and focus — rich, smooth, consistent and ethically crafted. It's the taste of quality in every workday moment.
            </p>
            <a
              href="https://noas.order.direct/order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-coffee-brown text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurCoffee
