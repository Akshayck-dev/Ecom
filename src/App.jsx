import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Listing from './pages/Listing'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import CheckoutModal from './components/CheckoutModal'

function App() {
  const [view, setView] = useState({ id: 'home', params: null })
  const [showCheckout, setShowCheckout] = useState(false)

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

  const navigateHandler = (id, params = null) => {
    setView({ id, params })
  }

  const renderView = () => {
    switch (view.id) {
      case 'home':
        return <Home onNavigate={navigateHandler} />
      case 'listing':
        return <Listing onNavigate={navigateHandler} />
      case 'detail':
        return <ProductDetail productId={view.params} onNavigate={navigateHandler} />
      case 'cart':
        return <Cart onNavigate={navigateHandler} setShowCheckout={setShowCheckout} />
      case 'about':
        return <About />
      case 'faq':
        return <FAQ />
      case 'contact':
        return <Contact />
      default:
        return <Home onNavigate={navigateHandler} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={navigateHandler} currentView={view.id} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={view.id + (view.params || '')}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigateHandler} />

      {/* Global Checkout Modal */}
      <CheckoutModal isOpen={showCheckout} onClose={() => setShowCheckout(false)} />
    </div>
  )
}

export default App
