import React from 'react'
import { useSelector } from 'react-redux'
import { ShoppingBag, User, Menu, Search } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = ({ onNavigate, currentView }) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-3xl border-b border-[#111111]/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <div 
          onClick={() => onNavigate('home')}
          className="text-2xl font-bold tracking-[-0.07em] cursor-pointer text-[#111111] hover:opacity-50 transition-opacity duration-500"
        >
          ATELIER<span className="italic font-normal text-[#111111]/20">.</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          {[
            { name: 'ARCHIVE', id: 'listing' },
            { name: 'ABOUT', id: 'about' },
            { name: 'FAQ', id: 'faq' },
            { name: 'CONTACT', id: 'contact' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all relative py-2 ${
                currentView === item.id 
                ? 'text-[#4F8CFF]' 
                : 'text-[#111111]/30 hover:text-[#111111]'
              }`}
            >
              {item.name}
              {currentView === item.id && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#4F8CFF]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-8">
          <button className="text-[#111111]/30 hover:text-[#111111] transition-colors">
            <Search size={20} weight="light" />
          </button>
          <button 
            onClick={() => onNavigate('cart')}
            className="hover:opacity-80 transition-opacity p-2 relative group"
          >
            <ShoppingBag size={20} className="text-[#111111]/60" />
            {cartQuantity > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-[#4F8CFF] text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white"
              >
                {cartQuantity}
              </motion.span>
            )}
          </button>
          <button className="md:hidden" aria-label="Menu">
             <Menu size={22} />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
