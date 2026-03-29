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
    <div className="pt-32 pb-64 min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/20 mb-12">
          <span className="cursor-pointer hover:text-[#111111]" onClick={() => onNavigate('home')}>Home</span>
          <span>»</span>
          <span className="cursor-pointer hover:text-[#111111]" onClick={() => onNavigate('listing')}>Collections</span>
          <span>»</span>
          <span className="text-[#111111]/40">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 mb-48">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#F5F5F7] shadow-premium-lg group relative">
              <motion.img 
                src={product.image} 
                alt={product.name} 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-8 left-8">
                <span className="bg-[#4F8CFF] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">New</span>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl bg-[#F5F5F7] overflow-hidden cursor-pointer hover:opacity-70 transition-opacity">
                  <img src={product.image} alt="" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-start space-y-12"
          >
            <div className="space-y-6 pt-12">
              <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#4F8CFF] block">
                SUMMER COLLECTION 2024
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-[-0.05em] text-[#111111] leading-[0.9]">
                {product.name}
              </h1>
              <p className="text-4xl font-bold text-[#111111] tracking-tighter">${product.price}.00</p>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">Description</p>
                <p className="text-[14px] text-[#111111]/60 leading-relaxed font-medium">
                  {product.description}. Features a relaxed silhouette, dropped shoulders, and mother-of-pearl buttons. Each piece is pre-washed for a signature soft feel from the very first wear.
                </p>
              </div>

              {/* Selectors */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">Color: <span className="text-[#111111]">Bone White</span></p>
                  <div className="flex gap-4">
                    {['#FFFFFF', '#E5E1DA', '#111111', '#F1F1F6'].map((c, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border ${i === 1 ? 'border-[#4F8CFF] ring-2 ring-[#4F8CFF]/20' : 'border-[#111111]/10'} cursor-pointer p-0.5 transition-all`}>
                        <div className="w-full h-full rounded-full" style={{ backgroundColor: c }} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">Select Size</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {['XS', 'S', 'M', 'L'].map((s) => (
                      <button key={s} className="h-12 flex items-center justify-center rounded-xl border border-[#111111]/5 text-[12px] font-bold hover:border-[#4F8CFF] hover:text-[#4F8CFF] transition-all">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">Quantity</p>
                  <div className="w-32 h-12 flex items-center justify-between px-4 rounded-xl border border-[#111111]/5 bg-[#F5F5F7]/30">
                    <button className="text-xl font-light hover:text-[#4F8CFF] transition-colors">-</button>
                    <span className="text-[14px] font-bold">1</span>
                    <button className="text-xl font-light hover:text-[#4F8CFF] transition-colors">+</button>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 flex flex-col gap-4">
                <Button 
                  onClick={whatsappOrder}
                  variant="primary"
                  size="lg"
                  className="w-full flex items-center justify-center gap-4 bg-[#4F8CFF] text-white shadow-xl shadow-[#4F8CFF]/20"
                >
                  <MessageCircle size={20} />
                  BUY VIA WHATSAPP
                </Button>
                <button 
                  onClick={addToCartHandler}
                  className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#111111]/40 hover:text-[#111111] transition-colors"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Essentials */}
        <section className="mt-64 space-y-24">
          <div className="flex justify-between items-end border-b border-[#111111]/5 pb-8">
            <h2 className="text-[32px] font-bold tracking-tight text-[#111111]">Related Essentials</h2>
            <button className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/20 hover:text-[#111111] transition-all">View Collection</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
