import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Coffee', path: '/our-coffee' },
    { name: 'Menu', path: '/menu' },
    { name: 'Catering', path: '/catering' },
    { name: 'Allergens', path: '/allergens' },
    { name: 'Locations', path: '/locations' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header
      className={`fixed left-0 right-0 z-50 bg-white shadow-md py-4 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Noa's Café" 
              className="h-8 lg:h-9 w-auto"
            />
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm uppercase tracking-wider transition-colors duration-200 py-2 group ${
                  location.pathname === link.path
                    ? 'text-coffee-brown font-medium'
                    : 'text-rich-black hover:text-coffee-brown'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-coffee-brown transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://noas.order.direct/order"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-coffee-brown text-white px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-opacity-90 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Order Now
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-coffee-brown"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-coffee-brown/20 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm uppercase tracking-wider py-2 transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-coffee-brown font-medium border-l-4 border-coffee-brown pl-3'
                      : 'text-rich-black hover:text-coffee-brown hover:pl-2'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://noas.order.direct/order"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden bg-coffee-brown text-white px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 text-center mt-2"
              >
                Order Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
