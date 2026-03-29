import React from 'react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../store/cartSlice'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import { MessageCircle, Shield, Truck, RotateCcw } from 'lucide-react'

const ProductDetail = ({ productId, onNavigate }) => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.items)
  const product = products.find(p => p.id === productId) || products[0]
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(product))
  }

  const whatsappOrder = () => {
    const text = `Hello Atelier, I'd like to order the "${product.name}" ($${product.price}).`
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="pt-48 pb-64 min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <button 
          onClick={() => onNavigate('listing')}
          className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/30 hover:text-[#4F8CFF] transition-all duration-500 mb-24"
        >
          <div className="w-8 h-[1px] bg-[#111111]/10 group-hover:w-16 group-hover:bg-[#4F8CFF] transition-all duration-700" />
          BACK TO ARCHIVE
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 mb-48">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -60, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-[#F5F5F7] shadow-premium-lg group">
              <motion.img 
                src={product.image} 
                alt={product.name} 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center space-y-16"
          >
            <div className="space-y-6">
              <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#4F8CFF] block">
                {product.category} — ARCHIVAL NO. {product.id}
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#111111] leading-[0.9]">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-[#111111]">${product.price}</p>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-[#111111]/40 leading-relaxed font-medium italic">
                A masterpiece of minimal design, vetted for its silent aesthetic power and generational longevity. Crafted from the finest sustainably sourced materials.
              </p>
              
              <div className="pt-8 space-y-8">
                <Button 
                  onClick={addToCartHandler}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  ADD TO ARCHIVE
                </Button>
                
                <Button 
                  onClick={whatsappOrder}
                  variant="outline"
                  size="md"
                  className="w-full flex items-center justify-center gap-4"
                >
                  <MessageCircle size={18} />
                  WHATSAPP ORDER
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-12 border-t border-[#111111]/5">
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#111111]/20">MATERIAL</p>
                <p className="text-[14px] font-bold text-[#111111]">Artisanal Glass</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#111111]/20">ORIGIN</p>
                <p className="text-[14px] font-bold text-[#111111]">Kyoto, Japan</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <section className="space-y-32">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#111111]">You may also like.</h2>
            <button 
              onClick={() => onNavigate('listing')}
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#4F8CFF] group flex items-center gap-4 transition-all duration-500"
            >
              VIEW ALL COLLECTIONS
              <div className="w-12 h-[1px] bg-[#4F8CFF]/30 group-hover:w-24 transition-all duration-700" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} onNavigate={onNavigate} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail
