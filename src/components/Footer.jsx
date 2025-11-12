import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Our Coffee', path: '/our-coffee' },
    { name: 'Menu', path: '/menu' },
    { name: 'Catering', path: '/catering' },
    { name: 'Locations', path: '/locations' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="bg-warm-cream py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/">
              <img 
                src="/images/logo.png" 
                alt="noa's Café" 
                className="h-10 w-auto mb-4"
              />
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
              className="inline-block bg-coffee-brown text-white px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all duration-200 mb-6"
            >
              Contact Us
            </Link>
            
            <div className="space-y-3 mt-6">
              <a
                href="mailto:operations@noas.uk"
                className="flex items-center gap-2 text-rich-black/70 hover:text-coffee-brown transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm">operations@noas.uk</span>
              </a>
              
              <a
                href="https://instagram.com/noas.cafe.tt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-rich-black/70 hover:text-coffee-brown transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm">@noas.cafe.tt</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-brown/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-rich-black/60 text-sm">
              © {currentYear} noa's Café. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/privacy-policy"
                className="text-rich-black/60 text-sm hover:text-coffee-brown transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-rich-black/40">•</span>
              <p className="text-rich-black/60 text-sm">
                Crafted with excellence and dedication
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
