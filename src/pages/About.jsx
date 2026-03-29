import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="pt-48 pb-64 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Cinematic Header */}
        <motion.header 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-48 md:mb-64 space-y-12 max-w-5xl"
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#4F8CFF] block">OUR ESSENCE</span>
          <h1 className="text-7xl md:text-[140px] font-bold tracking-tighter text-[#111111] leading-[0.85] flex flex-col">
            <span>Designing for</span>
            <span className="font-serif italic font-normal text-[#111111]/10">Generations.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[#111111]/40 leading-tight font-medium max-w-3xl italic">
            Atelier is a ritual-based studio focused on objects that gain character with age.
          </p>
        </motion.header>

        {/* Cinematic Reveal Section */}
        <div className="space-y-64">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-12 relative aspect-[21/9] rounded-[4rem] overflow-hidden shadow-premium-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2000" 
                alt="Atelier Studio" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[5s]"
              />
            </motion.div>
            
            <div className="lg:col-span-12 max-w-4xl mx-auto text-center space-y-16">
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-8xl font-bold tracking-tighter text-[#111111]"
              >
                The Silent Power <br />of Quiet Objects.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-[#111111]/50 text-xl md:text-3xl leading-relaxed font-medium max-w-3xl mx-auto"
              >
                We curate objects that don't shout for attention. They are the background architecture of a life well-lived. Each piece is selected for its material integrity and timeless utility.
              </motion.p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="pt-32 border-t border-[#111111]/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
              {[
                { label: 'ESTABLISHED', value: '2018' },
                { label: 'CURATED OBJECTS', value: '450+' },
                { label: 'GLOBAL ATELIERS', value: '12' },
                { label: 'QUALITY RATING', value: '∞' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 1 }}
                  className="space-y-4"
                >
                  <p className="text-5xl md:text-7xl font-bold tracking-tighter text-[#111111]">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#4F8CFF]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
