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
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[#E5E7EB]/30 translate-x-[20%] -skew-x-12" />
        
        <div className="relative z-10 text-center space-y-12 px-6 max-w-6xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, tracking: "0.2em" }}
            animate={{ opacity: 1, tracking: "0.8em" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] font-bold uppercase text-[#111111]/30 block"
          >
            SUMMER COLLECTION 2024
          </motion.span>
          
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[#111111]/40 text-lg md:text-xl font-medium"
            >
              Inter
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[130px] font-bold tracking-[-0.04em] text-[#111111] leading-[0.85]"
            >
              The Art of <br />
              <span className="font-serif italic font-normal text-[#4F8CFF]">Intentional</span> Living
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
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
              className="min-w-[220px] bg-white/50 backdrop-blur-sm border-none shadow-sm"
            >
              LOOKBOOK
            </Button>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-48 md:py-64">
        <div className="mb-24">
          <h2 className="text-[32px] font-bold tracking-tight text-[#111111]">New Arrivals</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {featuredProducts.slice(0, 3).map(product => (
            <div key={product.id} className="space-y-8">
              <ProductCard product={product} onNavigate={onNavigate} />
              <div className="flex flex-col gap-4">
                <Button variant="primary" className="w-full">EXPLORE NOW</Button>
                <Button variant="outline" className="w-full">LOOKBOOK</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Verticals */}
      <section className="bg-white py-48 md:py-64">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-[32px] font-bold tracking-tight text-[#111111] mb-24">Curated Verticals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Fashion Street', img: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=1000' },
              { name: 'Healthy Kitchen', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000' },
              { name: 'Natural Care Zone', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000' },
              { name: 'Gift Corner', img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1000' },
              { name: 'Kids Zone', img: 'https://images.unsplash.com/photo-1515488442202-6a62156ec462?q=80&w=1000' },
              { name: 'Service Zone', img: 'https://images.unsplash.com/photo-1521737706076-79de22bbad52?q=80&w=1000' },
              { name: 'Pack Corner', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000' },
              { name: 'New Premium', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000' }
            ].map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="group cursor-pointer aspect-square relative rounded-2xl overflow-hidden bg-[#F5F5F7]"
              >
                <img src={v.img} alt={v.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/5" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-[12px] font-bold tracking-tight text-[#111111] shadow-sm">
                    {v.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Classics */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-48 md:py-64">
        <h2 className="text-[32px] font-bold tracking-tight text-[#111111] mb-24">Hall of Classics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.slice(4, 7).map(product => (
            <div key={product.id} className="space-y-8">
              <div className="aspect-square bg-[#F5F5F7] rounded-2xl overflow-hidden group cursor-pointer shadow-premium-sm hover:shadow-premium-lg transition-all duration-700">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#111111]">{product.name}</h3>
                <Button variant="primary" className="w-full">EXPLORE NOW</Button>
              </div>
            </div>
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
      </section>
    </div>
  )
}

export default Home
