import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Our Coffee', path: '/our-coffee' },
    { name: 'Menu', path: '/menu' },
    { name: 'Catering', path: '/catering' },
    { name: 'Locations', path: '/locations' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="bg-warm-cream py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/">
              <h3 className="text-4xl font-logo font-extrabold lowercase text-coffee-brown mb-4">
                noa's
              </h3>
            </Link>
            <p className="text-rich-black/70 leading-relaxed">
              Fresh food. Specialty coffee. Made daily.<br />
              Roasted in-house. Served across 8+ locations.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider font-medium text-rich-black mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-rich-black/70 hover:text-coffee-brown transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider font-medium text-rich-black mb-4">
              Get in Touch
            </h4>
            <p className="text-rich-black/70 mb-4">
              Ready to elevate your corporate coffee experience?
            </p>
            <Link
              to="/contact"
              className="inline-block bg-coffee-brown text-white px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-coffee-brown/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-rich-black/60 text-sm">
              © {currentYear} NOA'S Café. All rights reserved.
            </p>
            <p className="text-rich-black/60 text-sm">
              Crafted with excellence and dedication
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
