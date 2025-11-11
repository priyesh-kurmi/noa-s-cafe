import React from 'react'

const Values = () => {
  const values = [
    {
      title: 'Delivery',
      description: 'Our clients often recognise Noa\'s Café for our friendly baristas, quick service, and great coffee. Over the years, we have provided hospitality for many different campaigns, working with SMEs to global Forbes 500 organisations. We believe our track record with clients comes from following our key values: Integrity, Knowledge, and Dedication to delivery.'
    },
    {
      title: 'Integrity',
      description: 'Customer satisfaction and a positive barista experience is our number one priority. Noa\'s Café is not just a coffee shop, this is a lifestyle, our obsession with doing good business the right way is matched by very few! Join us at this interesting time in our company and watch us reach the stars! Did I mention we love to talk... Message us for a coffee and a chat anytime!'
    },
    {
      title: 'Knowledge',
      description: 'Noa\'s Café is an established provider of hospitality services, where a high-quality reliable workforce and fast response time is the key to success. We go beyond coffee and croissants, to offer a fully bespoke hospitality strategy tailored individually to each client\'s needs and specifications. Our managers and baristas are dedicated to working with clients on site to maintain a top quality service.'
    }
  ]

  return (
    <section id="values" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-rich-black mb-6">
            Our Values
          </h2>
          <div className="w-24 h-1 bg-coffee-brown mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="mb-6">
                <span className="inline-block text-6xl font-display text-coffee-brown/20 mb-2">
                  0{index + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-display text-rich-black uppercase tracking-wide">
                  {value.title}
                </h3>
              </div>
              <p className="text-rich-black/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative">
          <img
            src="https://static.wixstatic.com/media/11062b_95f01f725e214f99b28844dc1dc1164d~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_95f01f725e214f99b28844dc1dc1164d~mv2.jpg"
            alt="Gourmet Coffee Stand"
            className="w-full h-96 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rich-black/50 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default Values
