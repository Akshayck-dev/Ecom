import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index}
          className="border-b border-[#E5E7EB] last:border-none group"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-10 flex justify-between items-center text-left hover:px-4 transition-all duration-500 ease-[0.16, 1, 0.3, 1]"
          >
            <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${openIndex === index ? 'text-[#111111]' : 'text-[#111111]/40 group-hover:text-[#111111]'}`}>
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#4F8CFF]"
            >
              <ChevronDown size={22} strokeWidth={2} />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-on-background/60 leading-relaxed text-sm">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default Accordion
