import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../store/cartSlice'
import Button from '../components/Button'
import Input from '../components/Input'
import { Trash2, ShoppingBag, ArrowRight, Lock } from 'lucide-react'

const Cart = ({ onNavigate }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  return (
    <div className="pt-48 pb-64 min-h-screen bg-white text-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 space-y-6"
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#4F8CFF] block">YOUR SELECTION</span>
          <h1 className="text-6xl md:text-[100px] font-bold tracking-tighter leading-[0.85]">The Archive.</h1>
        </motion.header>

        {cart.items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-64 text-center space-y-16 bg-[#F5F5F7] rounded-[3rem] shadow-premium-sm"
          >
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto shadow-premium-md text-[#111111]/10">
              <ShoppingBag size={48} strokeWidth={1} />
            </div>
            <div className="space-y-6">
              <p className="text-3xl font-bold tracking-tight">Your archive is empty.</p>
              <p className="text-[#111111]/30 font-medium italic text-xl">Discover objects that define your modern sanctuary.</p>
            </div>
            <Button onClick={() => onNavigate('listing')} variant="outline" size="lg">
              START CURATING
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-40">
            {/* Items List */}
            <div className="lg:col-span-7 space-y-16">
              <AnimatePresence>
                {cart.items.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="flex gap-12 group pb-16 border-b border-[#111111]/5"
                  >
                    <div className="w-48 h-60 bg-[#F5F5F7] rounded-[2rem] overflow-hidden flex-shrink-0 shadow-premium-sm">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-4">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <h3 className="text-3xl font-bold tracking-tighter leading-none">{item.name}</h3>
                          <button 
                            onClick={() => dispatch(cartActions.removeItemFromCart(item.id))}
                            className="text-[#111111]/10 hover:text-[#FF4F4F] transition-all duration-500"
                          >
                            <Trash2 size={22} strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#4F8CFF]">{item.category}</p>
                        <p className="text-xl font-bold italic text-[#111111]/40">${item.price}</p>
                      </div>
                      <div className="flex items-center justify-between pt-8">
                        <div className="flex items-center bg-[#F5F5F7] rounded-full px-6 py-2 border border-[#111111]/5">
                          <button 
                            onClick={() => dispatch(cartActions.removeItemFromCart(item.id))}
                            className="text-2xl font-light hover:text-[#4F8CFF] transition-colors w-8"
                          >
                            —
                          </button>
                          <span className="px-8 font-bold text-lg w-20 text-center tracking-tighter">{item.quantity}</span>
                          <button 
                            onClick={() => dispatch(cartActions.addItemToCart(item))}
                            className="text-2xl font-light hover:text-[#4F8CFF] transition-colors w-8"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-3xl font-bold tracking-tighter">${item.totalPrice}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-5">
              <div className="bg-[#F5F5F7] p-16 rounded-[4rem] space-y-16 border border-[#111111]/5 shadow-premium-md sticky top-32">
                <h2 className="text-5xl font-bold tracking-tighter text-[#111111]">Summary.</h2>
                
                <div className="space-y-10">
                  <Input label="FULL NAME" placeholder="John Doe" />
                  <Input label="EMAIL ADDRESS" placeholder="john@archive" />
                  <Input label="SHIPPING" placeholder="123 Gallery St, KY" />
                </div>

                <div className="space-y-8 pt-12 border-t border-[#111111]/5">
                  <div className="flex justify-between text-xl font-medium text-[#111111]/30 italic">
                    <span>Selected Objects</span>
                    <span>${cart.totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-xl font-medium text-[#111111]/30 italic">
                    <span>Shipping</span>
                    <span className="text-[#4F8CFF] font-bold tracking-[0.1em]">COMPLIMENTARY</span>
                  </div>
                  <div className="flex justify-between text-4xl font-bold tracking-tighter pt-8 border-t border-[#111111]/10">
                    <span>Total</span>
                    <span>${cart.totalAmount}</span>
                  </div>
                </div>

                <div className="space-y-8">
                  <Button 
                    variant="primary"
                    size="lg"
                    className="w-full flex items-center justify-center gap-6"
                  >
                    SECURE CHECKOUT <ArrowRight size={20} />
                  </Button>
                  
                  <div className="flex items-center justify-center gap-4 text-[#111111]/10">
                    <Lock size={16} />
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Archival Encryption Active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
