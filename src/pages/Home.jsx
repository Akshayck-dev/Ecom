import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'

const Home = ({ onNavigate }) => {
  const products = useSelector((state) => state.products.items)
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F7]">
        {/* Abstract Background Elements with Parallax */}
        <motion.div 
          initial={{ x: "20%", rotate: -12 }}
          animate={{ x: "15%", rotate: -10 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute top-0 right-0 w-[60%] h-full bg-[#E5E7EB]/30 translate-x-[20%] -skew-x-12" 
        />
        
        <div className="relative z-10 text-center space-y-12 px-6 max-w-6xl mx-auto">
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
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#111111]/30 block mb-6"
            >
              SUMMER COLLECTION 2024
            </motion.span>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[130px] font-bold tracking-[-0.04em] text-[#111111] leading-[0.85] mb-12"
            >
              The Art of <br />
              <span className="font-serif italic font-normal text-[#4F8CFF]">Intentional</span> Living
            </motion.h1>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12"
            >
              <Button 
                onClick={() => onNavigate('listing')} 
                variant="primary"
                size="lg"
                className="min-w-[220px]"
              >
                EXPLORE NOW
              </Button>
              <Button 
                onClick={() => onNavigate('listing')} 
                variant="outline"
                size="lg"
                className="min-w-[220px] bg-white/50 backdrop-blur-sm border-none shadow-luxury-md"
              >
                LOOKBOOK
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Essentials with Scroll Reveal */}
      <motion.section 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto px-6 md:px-12 py-48 md:py-64"
      >
        <div className="flex justify-between items-end mb-24 border-b border-[#111111]/5 pb-8">
          <h2 className="text-[32px] md:text-5xl font-bold tracking-tight text-[#111111]">Featured Essentials</h2>
          <button 
            onClick={() => onNavigate('listing')}
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#111111]/40 hover:text-[#4F8CFF] transition-colors"
          >
            VIEW ALL PIECES
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {featuredProducts.slice(0, 3).map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="space-y-8"
            >
              <ProductCard product={product} onNavigate={onNavigate} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Curated Verticals with Scroll Reveal */}
      <motion.section 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-[#F5F5F7]/30 py-48 md:py-64"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-24">
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#4F8CFF] block mb-4">CATEGORIES</span>
            <h2 className="text-[32px] md:text-5xl font-bold tracking-tight text-[#111111]">Curated Verticals</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Fashion Street', category: 'Textiles', img: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=1000' },
              { name: 'Healthy Kitchen', category: 'Kitchenware', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000' },
              { name: 'Natural Care', category: 'Accessories', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000' },
              { name: 'Gift Corner', category: 'Stationery', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000' },
              { name: 'Kids Zone', category: 'Home Decor', img: 'https://images.unsplash.com/photo-1515488442202-6a62156ec462?q=80&w=1000' },
              { name: 'Service Zone', category: 'Electronics', img: 'https://images.unsplash.com/photo-1521737706076-79de22bbad52?q=80&w=1000' },
              { name: 'Pack Corner', category: 'Accessories', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000' },
              { name: 'New Premium', category: 'Furniture', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000' }
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onClick={() => onNavigate('listing', v.category)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group cursor-pointer aspect-square relative rounded-[2.5rem] overflow-hidden bg-white shadow-luxury-sm hover:shadow-luxury-lg"
              >
                <img src={v.img} alt={v.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start gap-1">
                  <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[12px] font-bold tracking-tight text-[#111111]">
                    {v.name}
                  </span>
                  <span className="text-[9px] font-bold text-white/60 tracking-widest pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">EXPLORE CATEGORY</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Hall of Classics with Scroll Reveal */}
      <motion.section 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-[1400px] mx-auto px-6 md:px-12 py-48 md:py-64"
      >
        <h2 className="text-[32px] md:text-5xl font-bold tracking-tight text-[#111111] mb-24">Hall of Classics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.slice(4, 7).map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="space-y-8"
            >
              <div className="aspect-square bg-[#F5F5F7] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-luxury-sm hover:shadow-luxury-lg transition-all duration-700">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-1000" />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#111111]">{product.name}</h3>
                <Button variant="primary" className="w-full">DISCOVER PIECE</Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Features Bar */}
        <div className="mt-48 pt-24 border-t border-[#111111]/5 flex flex-wrap justify-center gap-24 md:gap-48">
          {[
            { label: 'Local Sellers', icon: '📍' },
            { label: 'Handmade Quality', icon: '🤝' },
            { label: 'Fast Delivery', icon: '🚚' }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center gap-4 text-center group">
              <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-500">{feature.icon}</span>
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#111111]/40 group-hover:text-[#111111] transition-colors">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Home
