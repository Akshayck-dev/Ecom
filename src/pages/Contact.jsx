import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Input from '../components/Input'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <div className="pt-48 pb-64 min-h-screen bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 mb-32"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#4F8CFF] block mb-12">ATELIER CONCIERGE</span>
            <h1 className="text-7xl md:text-[140px] font-bold tracking-tighter text-[#111111] leading-[0.85] flex flex-col">
              <span>Connect with</span>
              <span className="font-serif italic font-normal text-[#111111]/10">The Studio.</span>
            </h1>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
              <div className="lg:col-span-7">
                <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Input label="FULL NAME" placeholder="Your Name" />
                    <Input label="EMAIL ADDRESS" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-6 group">
                    <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#111111]/30 group-focus-within:text-[#4F8CFF] transition-colors duration-500 ml-1">MESSAGE</label>
                    <textarea 
                      className="w-full bg-transparent border-b border-[#E5E7EB] py-6 text-base md:text-lg font-medium text-[#111111] placeholder:text-[#111111]/20 outline-none focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#4F8CFF]/5 transition-all duration-500 ease-[0.16, 1, 0.3, 1] min-h-[150px] resize-none"
                      placeholder="Discuss your archival needs..."
                    ></textarea>
                  </div>
                  <div className="pt-8">
                    <Button type="submit" size="lg" className="w-full md:w-auto min-w-[280px]">
                      SUBMIT INQUIRY
                    </Button>
                  </div>
                </form>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-5 space-y-24">
                <div className="space-y-16">
                  {[
                    { icon: <Mail size={24} />, title: 'EMAIL', value: 'concierge@atelier.com' },
                    { icon: <Phone size={24} />, title: 'TELEPHONE', value: '+44 (0) 20 7421 9000' },
                    { icon: <MapPin size={24} />, title: 'STUDIO', value: '128 Shoreditch High St, London' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-start gap-8 group cursor-default"
                    >
                      <div className="w-16 h-16 rounded-[1.5rem] bg-[#F5F5F7] flex items-center justify-center text-[#111111]/20 group-hover:text-[#4F8CFF] group-hover:bg-[#4F8CFF]/5 transition-all duration-500">
                        {item.icon}
                      </div>
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#111111]/30">{item.title}</p>
                        <p className="text-xl font-bold text-[#111111]">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-12 rounded-[3rem] bg-[#F5F5F7] border border-[#111111]/5 space-y-8">
                   <h4 className="text-[10px] font-bold tracking-[0.3em] text-[#111111]/30 uppercase">STUDIO HOURS</h4>
                   <div className="space-y-4 text-lg font-bold text-[#111111]">
                     <div className="flex justify-between border-b border-[#111111]/5 pb-4"><span>MON — FRI</span> <span>10:00 — 18:00</span></div>
                     <div className="flex justify-between border-b border-[#111111]/5 pb-4"><span>SATURDAY</span> <span>11:00 — 16:00</span></div>
                     <div className="flex justify-between"><span>SUNDAY</span> <span className="text-[#111111]/20 italic font-normal">CLOSED</span></div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
