import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurCoffee from './pages/OurCoffee'
import Menu from './pages/Menu'
import Catering from './pages/Catering'
import Locations from './pages/Locations'
import Jobs from './pages/Jobs'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-coffee" element={<OurCoffee />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
