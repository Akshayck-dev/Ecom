import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Listing = ({ onNavigate, categoryFilter }) => {
  const products = useSelector((state) => state.products.items)
  const [activeCategory, setActiveCategory] = React.useState(categoryFilter || 'All Products')

  const filteredProducts = activeCategory === 'All Products' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  const categories = [
    { name: 'All Products', count: products.length },
    { name: 'Home Decor', count: products.filter(p => p.category === 'Home Decor').length },
    { name: 'Kitchenware', count: products.filter(p => p.category === 'Kitchenware').length },
    { name: 'Stationery', count: products.filter(p => p.category === 'Stationery').length },
    { name: 'Textiles', count: products.filter(p => p.category === 'Textiles').length },
    { name: 'Electronics', count: products.filter(p => p.category === 'Electronics').length },
    { name: 'Accessories', count: products.filter(p => p.category === 'Accessories').length },
    { name: 'Furniture', count: products.filter(p => p.category === 'Furniture').length }
  ]

  // Sync active category if filter changes from prop (e.g. from Home page click)
  React.useEffect(() => {
    if (categoryFilter) {
      setActiveCategory(categoryFilter)
    }
  }, [categoryFilter])

  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header content ... */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 space-y-12 max-w-5xl"
        >
          <div className="flex items-baseline gap-4">
            <h1 className="text-6xl md:text-[80px] font-bold tracking-[-0.04em] text-[#111111]">Curated <span className="font-serif italic font-normal text-[#4F8CFF]">Essentials.</span></h1>
          </div>
          <p className="text-2xl text-[#111111]/40 leading-relaxed font-medium max-w-3xl italic">
            A deliberate collection of artisan goods and daily necessities, selected for their quality, heritage, and timeless design.
          </p>
        </motion.header>

        <div className="flex flex-col lg:flex-row gap-24">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0 space-y-16">
            {/* Category */}
            <div className="space-y-8">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#111111]/20">Category</h3>
              <ul className="space-y-4">
                {categories.map((cat, i) => (
                  <li 
                    key={i} 
                    onClick={() => setActiveCategory(cat.name)}
                    className="flex justify-between items-center group cursor-pointer"
                  >
                    <span className={`text-[14px] font-bold transition-colors ${activeCategory === cat.name ? 'text-[#4F8CFF]' : 'text-[#111111]/60 group-hover:text-[#4F8CFF]'}`}>{cat.name}</span>
                    <span className={`text-[11px] font-bold transition-colors ${activeCategory === cat.name ? 'text-[#4F8CFF]/50' : 'text-[#111111]/20 group-hover:text-[#111111]/40'}`}>({cat.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="space-y-8">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#111111]/20">Price Range</h3>
              <div className="space-y-6">
                <div className="h-1 bg-[#F5F5F7] rounded-full relative">
                  <div className="absolute left-[10%] right-[30%] h-full bg-[#4F8CFF] rounded-full">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#4F8CFF] rounded-full shadow-sm cursor-pointer" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#4F8CFF] rounded-full shadow-sm cursor-pointer" />
                  </div>
                </div>
                <div className="flex justify-between text-[11px] font-bold text-[#111111]/40">
                  <span>$0</span>
                  <span>$450</span>
                </div>
              </div>
            </div>

            {/* Palette */}
            <div className="space-y-8">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#111111]/20">Palette</h3>
              <div className="flex gap-4">
                {['#FFFFFF', '#111111', '#E5E1DA', '#F1F1F6'].map((color, i) => (
                  <div 
                    key={i} 
                    className="w-6 h-6 rounded-full border border-[#111111]/5 cursor-pointer hover:scale-110 transition-transform shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 space-y-24">
            <div className="flex justify-end items-center gap-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]/20">Sort By:</span>
              <button className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111] border-b border-[#111111]/10 pb-1">
                Popularity
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onNavigate={onNavigate}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 pt-12">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#111111]/5 text-[#111111]/30 hover:border-[#111111] hover:text-[#111111] transition-all">
                <span className="sr-only">Previous</span>
                &larr;
              </button>
              {[1, 2, 3].map(n => (
                <button 
                  key={n}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-[12px] font-bold transition-all ${
                    n === 1 
                    ? 'bg-[#4F8CFF] text-white' 
                    : 'text-[#111111]/30 hover:text-[#111111]'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#111111]/5 text-[#111111]/30 hover:border-[#111111] hover:text-[#111111] transition-all">
                <span className="sr-only">Next</span>
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing
