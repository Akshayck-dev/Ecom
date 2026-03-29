import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../store/cartSlice'
import Button from '../components/Button'
import Input from '../components/Input'
import { Trash2, ShoppingBag, ArrowRight, Lock } from 'lucide-react'

const Cart = ({ onNavigate, setShowCheckout }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  return (
    <div className="pt-32 pb-64 min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="mb-24 space-y-6"
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[56px] md:text-8xl font-bold tracking-[-0.05em] text-[#111111]"
          >
            Your Selection.
          </motion.h1>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-lg md:text-xl text-[#111111]/60 font-medium max-w-xl leading-relaxed italic"
          >
            Review your curated pieces before we prepare them for their journey to your home.
          </motion.p>
        </motion.div>

        {cart.items.length === 0 ? (
          <div className="py-24 text-center space-y-8 bg-[#F5F5F7] rounded-3xl">
            <p className="text-2xl font-bold">Your selection is empty.</p>
            <Button onClick={() => onNavigate('listing')} variant="primary">CONTINUE SHOPPING</Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Items List */}
            <div className="flex-1 space-y-6">
              <AnimatePresence>
                {cart.items.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex gap-8 p-8 bg-white border border-[#111111]/5 rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="w-48 h-48 bg-[#F5F5F7] rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/30">{item.category}</p>
                            <h3 className="text-[22px] font-bold tracking-tight text-[#111111] leading-tight">{item.name}</h3>
                          </div>
                          <p className="text-[20px] font-bold text-[#111111]">${item.price}.00</p>
                        </div>
                        <p className="text-[14px] text-[#111111]/40 font-medium leading-relaxed max-w-sm line-clamp-2 italic">
                          Precision-engineered for the modern sanctuary. Archival quality materials.
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 px-4 py-2 bg-[#F5F5F7]/50 rounded-xl border border-[#111111]/5">
                          <button onClick={() => dispatch(cartActions.removeItemFromCart(item.id))} className="text-lg font-light hover:text-[#4F8CFF]">-</button>
                          <span className="text-[14px] font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => dispatch(cartActions.addItemToCart(item))} className="text-lg font-light hover:text-[#4F8CFF]">+</button>
                        </div>
                        <button 
                          onClick={() => dispatch(cartActions.removeItemFromCart(item.id))}
                          className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF4F4F]/60 hover:text-[#FF4F4F] transition-colors flex items-center gap-2"
                        >
                          <Trash2 size={14} /> REMOVE
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:w-[400px]">
              <div className="bg-[#F5F5F7]/50 p-12 rounded-[2.5rem] border border-[#111111]/5 space-y-12 sticky top-32">
                <h2 className="text-[28px] font-bold tracking-[-0.02em]">Order Summary</h2>
                
                <div className="space-y-6">
                  <div className="flex justify-between text-[14px] font-bold uppercase tracking-widest text-[#111111]/20">
                    <span>Subtotal</span>
                    <span className="text-[#111111] font-bold">${cart.totalAmount}.00</span>
                  </div>
                  <div className="flex justify-between text-[14px] font-bold uppercase tracking-widest text-[#111111]/20">
                    <span>Standard Shipping</span>
                    <span className="text-[#111111] font-bold">$0.00</span>
                  </div>
                  <div className="flex justify-between text-[14px] font-bold uppercase tracking-widest text-[#111111]/20">
                    <span>Estimated Tax</span>
                    <span className="text-[#111111] font-bold">${(cart.totalAmount * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#111111]/5 space-y-10">
                  <div className="space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/20">Total Amount</p>
                    <p className="text-[48px] font-bold tracking-tighter text-[#111111] leading-none">
                      ${(cart.totalAmount * 1.08).toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <Button 
                      onClick={() => setShowCheckout(true)}
                      variant="primary" 
                      size="lg" 
                      className="w-full bg-[#4F8CFF] text-white shadow-xl shadow-[#4F8CFF]/20"
                    >
                      Proceed to Checkout
                    </Button>
                    <p className="text-[10px] text-center font-bold uppercase tracking-[0.3em] text-[#111111]/20">
                      Secure SSL Encryption Active
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-10">
                  <div className="flex items-center gap-4 text-[#111111]/40">
                    <Truck size={18} strokeWidth={1.5} />
                    <p className="text-[12px] font-medium leading-none">Free worldwide shipping on all orders</p>
                  </div>
                  <div className="flex items-center gap-4 text-[#111111]/40">
                    <RotateCcw size={18} strokeWidth={1.5} />
                    <p className="text-[12px] font-medium leading-none">30-day effortless returns policy</p>
                  </div>
                </div>
                
                <button className="w-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#4F8CFF] flex items-center justify-center gap-2 border-t border-[#111111]/5 pt-8">
                  📍 ADD A PROMO CODE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Checkout Modal Trigger (handled in App.jsx or locally) */}
    </div>
  )
}

export default Cart
