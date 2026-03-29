import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import { X, MessageCircle, ArrowLeft } from 'lucide-react'
import Button from './Button'
import Input from './Input'

const CheckoutModal = ({ isOpen, onClose }) => {
  const cart = useSelector((state) => state.cart)

  const handleWhatsAppOrder = () => {
    const itemsList = cart.items.map(item => `${item.name} x${item.quantity} ($${item.totalPrice})`).join('\n')
    const total = (cart.totalAmount * 1.08).toFixed(2)
    const text = `Hello Atelier,\n\nI'd like to place an order:\n\n${itemsList}\n\nTotal (incl. tax): $${total}\n\nDelivery Details:\n[Name]\n[Phone]\n[Address]`
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111111]/40 backdrop-blur-md z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center p-6 z-[101] pointer-events-none">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white w-full max-w-[1000px] h-fit md:h-[700px] rounded-[3rem] shadow-premium-lg overflow-hidden flex flex-col md:flex-row pointer-events-auto"
            >
              {/* Order Summary Sidebar */}
              <div className="md:w-[350px] bg-[#F5F5F7] p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-[24px] font-bold tracking-tight mb-8">Order Summary</h2>
                  <div className="space-y-6 max-h-[350px] overflow-y-auto pr-4 custom-scrollbar">
                    {cart.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center group">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 rounded-lg bg-white overflow-hidden shadow-sm">
                            <img src={item.image} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[13px] font-bold leading-tight">{item.name}</p>
                            <p className="text-[11px] font-bold text-[#111111]/30">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="text-[14px] font-bold text-[#111111]">${item.totalPrice}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-[#111111]/5 space-y-4">
                  <div className="flex justify-between text-[13px] font-bold text-[#111111]/30 uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span>${cart.totalAmount}.00</span>
                  </div>
                  <div className="flex justify-between text-[13px] font-bold text-[#111111]/30 uppercase tracking-widest">
                    <span>Shipping</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between text-[28px] font-bold tracking-tighter text-[#111111] pt-4 border-t border-[#111111]/10">
                    <span>Total</span>
                    <span>${(cart.totalAmount * 1.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Form */}
              <div className="flex-1 p-12 md:p-16 relative">
                <button 
                  onClick={onClose}
                  className="absolute top-8 right-8 text-[#111111]/20 hover:text-[#111111] transition-colors"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>

                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-12">
                    <h2 className="text-[32px] font-bold tracking-tight">Checkout Details</h2>
                    
                    <div className="grid grid-cols-2 gap-8">
                      <div className="col-span-2">
                        <Input label="FULL NAME" placeholder="Enter your full name" />
                      </div>
                      <div className="col-span-2">
                        <Input label="PHONE NUMBER" placeholder="+91 98765 43210" />
                      </div>
                      <div className="col-span-2">
                        <Input label="DELIVERY ADDRESS" placeholder="Street, Apartment, etc." />
                      </div>
                      <Input label="PINCODE" placeholder="682001" />
                      <Input label="CITY" placeholder="Kochi" />
                    </div>
                  </div>

                  <div className="pt-12 space-y-6">
                    <Button 
                      onClick={handleWhatsAppOrder}
                      variant="primary" 
                      size="lg" 
                      className="w-full bg-[#4F8CFF] text-white shadow-xl shadow-[#4F8CFF]/20 flex items-center justify-center gap-4"
                    >
                      <MessageCircle size={20} />
                      Order via WhatsApp
                    </Button>
                    <button 
                      onClick={onClose}
                      className="w-full flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/30 hover:text-[#111111] transition-colors"
                    >
                      <ArrowLeft size={14} /> Return to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CheckoutModal
