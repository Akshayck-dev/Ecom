import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cartSlice'
import Button from '../components/Button'

const ProductCard = ({ product, onNavigate }) => {
  const dispatch = useDispatch()

  const addToCartHandler = (e) => {
    e.stopPropagation()
    dispatch(cartActions.addItemToCart(product))
  }

  return (
    <motion.div 
      onClick={() => onNavigate('detail', product.id)}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
      className="group cursor-pointer space-y-8"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#F5F5F7] shadow-premium-sm group-hover:shadow-premium-lg transition-all duration-700">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          initial={{ scale: 1 }}
          whileHover={{ 
            scale: 1.12,
            filter: "brightness(1.05)",
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-gradient-to-t from-black/20 to-transparent">
          <Button 
            variant="outline"
            size="sm"
            className="w-full bg-white/90 backdrop-blur-md border-none !text-[#111111]"
          >
            VIEW ARCHIVE
          </Button>
        </div>
      </div>
      
      <div className="space-y-3 px-2">
        <div className="flex justify-between items-start">
          <h3 className="text-[18px] font-bold tracking-tight text-[#111111] leading-tight">
            {product.name}
          </h3>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#4F8CFF]">
            ${product.price}
          </span>
        </div>
        <p className="text-[14px] font-medium text-[#111111]/30 italic leading-relaxed">
          {product.category} — Archival Quality
        </p>
      </div>
    </motion.div>
  )
}

export default ProductCard
