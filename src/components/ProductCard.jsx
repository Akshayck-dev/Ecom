import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cartSlice'
import Button from '../components/Button'

const ProductCard = ({ product, onNavigate }) => {
  const dispatch = useDispatch()
  const [added, setAdded] = React.useState(false)
 
  const addToCartHandler = (e) => {
    e.stopPropagation()
    dispatch(cartActions.addItemToCart(product))
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <motion.div 
      onClick={() => onNavigate('detail', product.id)}
      whileHover={{ 
        y: -12,
        scale: 1.04,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
      className="group cursor-pointer space-y-8"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#F5F5F7] shadow-luxury-sm group-hover:shadow-luxury-lg transition-all duration-700">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          initial={{ scale: 1 }}
          whileHover={{ 
            scale: 1.15,
            filter: "brightness(1.05)",
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-gradient-to-t from-black/40 to-transparent flex flex-col gap-2">
          <Button 
            onClick={addToCartHandler}
            variant="primary"
            size="sm"
            className={`w-full border-none transition-all duration-300 ${added ? 'bg-emerald-500 scale-105' : 'bg-[#4F8CFF] text-white'}`}
          >
            {added ? 'ADDED ✓' : 'QUICK ADD'}
          </Button>
          <Button 
            onClick={() => onNavigate('detail', product.id)}
            variant="outline"
            size="sm"
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 !text-white"
          >
            DETAILS
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
