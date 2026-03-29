import React from 'react'
import Button from './Button'

const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-[#111111]/5 pt-48 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mb-48">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-12">
            <div 
              onClick={() => onNavigate('home')}
              className="text-3xl font-bold tracking-[-0.07em] cursor-pointer text-[#111111]"
            >
              ATELIER<span className="italic font-normal text-[#111111]/20">.</span>
            </div>
            <p className="text-[#111111]/40 text-lg md:text-xl font-medium leading-relaxed max-w-sm italic">
              A ritual-based studio focused on objects that gain character with age. Defining the modern sanctuary since 2018.
            </p>
            <div className="flex gap-10">
              {['Instagram', 'Twitter', 'Pinterest'].map((social) => (
                <button 
                  key={social}
                  className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#111111]/20 hover:text-[#111111] transition-colors duration-500"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#111111]/10">Archive</h3>
            <ul className="space-y-4">
              {['Lighting', 'Furniture', 'Bedding', 'Objects'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => onNavigate('listing')}
                    className="text-[14px] font-bold text-[#111111]/40 hover:text-[#111111] transition-all duration-500"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#111111]/10">Company</h3>
            <ul className="space-y-4">
              {['About', 'Archive', 'Journal', 'Concierge'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => onNavigate(link.toLowerCase())}
                    className="text-[14px] font-bold text-[#111111]/40 hover:text-[#111111] transition-all duration-500"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#111111]/10">Newsletter</h3>
            <div className="space-y-8">
              <p className="text-[14px] font-medium text-[#111111]/40 italic leading-relaxed">Receive private collection updates and archival notes.</p>
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 bg-transparent border-b border-[#111111]/10 py-2 text-sm focus:border-[#4F8CFF] outline-none transition-all duration-500 placeholder:text-[#111111]/10"
                />
                <Button variant="ghost" size="sm" className="!px-4 !py-2">
                  JOIN
                </Button>
              </div>
            </div>
          </div>
        </div>
      
        {/* Bottom */}
        <div className="pt-16 border-t border-[#E5E7EB]/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/20">
            © 2026 Atelier. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy', 'Terms', 'Cookies'].map((link) => (
              <button key={link} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/20 hover:text-[#111111] transition-colors">
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
