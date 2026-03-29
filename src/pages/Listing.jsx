import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Listing = ({ onNavigate }) => {
  const products = useSelector((state) => state.products.items)

  return (
    <div className="pt-48 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32 space-y-10 max-w-4xl"
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#4F8CFF]">THE COLLECTIONS</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#111111] leading-none">The Archive.</h1>
          <p className="text-2xl text-[#111111]/40 leading-relaxed font-medium">
            Our permanent collection of essential objects, curated for their longevity and silent aesthetic power.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Listing
