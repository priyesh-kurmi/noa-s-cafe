import React from 'react'

const OrderSection = () => {
  const images = [
    {
      src: 'https://static.wixstatic.com/media/11062b_989b50976b7f4f6c87b8579f5f4e1104~mv2.jpg/v1/fill/w_1334,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Black%20Coffee.jpg',
      alt: 'Black Coffee'
    },
    {
      src: 'https://static.wixstatic.com/media/11062b_0d0f1f9ac51a404b86916cfba22bdb83~mv2.jpg/v1/fill/w_1334,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Morning%20Coffee.jpg',
      alt: 'Morning Coffee'
    },
    {
      src: 'https://static.wixstatic.com/media/1ef8a6c287794628a4eb7dcb299ea8de.jpg/v1/fill/w_1334,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Woman%20Enjoying%20her%20Drink.jpg',
      alt: 'Woman Enjoying her Drink'
    }
  ]

  return (
    <section id="order" className="py-24 bg-warm-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-rich-black mb-6">
            Beat the Rush
          </h2>
          <p className="text-lg md:text-xl text-rich-black/70 max-w-3xl mx-auto">
            Order for collection at a Noa's Café near you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-coffee-brown/0 group-hover:bg-coffee-brown/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://noas.order.direct/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-coffee-brown text-white px-12 py-4 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default OrderSection
