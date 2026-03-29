import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'

const Home = ({ onNavigate }) => {
  const products = useSelector((state) => state.products.items)
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="relative z-10 text-center space-y-12 px-6 max-w-5xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#4F8CFF] block"
          >
            AUTUMN / WINTER 2026
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[140px] font-bold tracking-tighter text-[#111111] leading-[0.9] flex flex-col"
          >
            <span>Curating the</span>
            <span className="italic font-normal text-[#111111]/10">Essential.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#111111]/40 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed italic"
          >
            Objects designed to elevate your daily ritual and define your modern sanctuary.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="pt-10"
          >
            <Button 
              onClick={() => onNavigate('listing')} 
              variant="primary"
              size="lg"
            >
              EXPLORE ARCHIVE
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-48 md:py-64">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-baseline gap-12 mb-32"
        >
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#111111] leading-none">The Curated Edit.</h2>
            <p className="text-[#111111]/30 font-medium italic text-xl md:text-2xl leading-relaxed">
              Hand-picked essentials for the intentional home, selected for their silent aesthetic power.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('listing')}
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#4F8CFF] group flex items-center gap-4 transition-all duration-500"
          >
            VIEW ALL COLLECTIONS
            <div className="w-12 h-[1px] bg-[#4F8CFF]/30 group-hover:w-24 transition-all duration-700" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#F5F5F7] py-48 md:py-64 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-premium-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1000" 
              alt="Archival Design" 
              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s]"
            />
          </motion.div>
          <div className="lg:col-span-5 space-y-16">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1] text-[#111111]">
                Honoring <br />craftsmanship in <br />every detail.
              </h2>
              <p className="text-[#111111]/40 leading-relaxed text-xl font-medium italic">
                We believe that objects are silent extensions of our philosophy. Every piece in our collection is vetted for archival quality.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-16 pt-12 border-t border-[#111111]/5">
              {[
                { label: 'ETHICALLY SOURCED', value: '100%' },
                { label: 'ARTISAN ATELIERS', value: '25+' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.2, duration: 1 }}
                  className="space-y-4"
                >
                  <p className="text-6xl font-bold tracking-tighter text-[#111111]">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4F8CFF]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
