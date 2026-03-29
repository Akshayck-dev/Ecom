import React from 'react'

const Input = ({ label, type = 'text', placeholder, value, onChange, className = '', ...props }) => {
  return (
    <div className={`space-y-4 group ${className}`}>
      {label && (
        <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#111111]/30 group-focus-within:text-[#4F8CFF] transition-colors duration-500 ml-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-[#F5F5F7]/30 backdrop-blur-sm border-b border-[#E5E7EB] py-4 md:py-6 text-lg md:text-xl font-medium text-[#111111] placeholder:text-[#111111]/20 outline-none focus:border-[#4F8CFF] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        {...props}
      />
    </div>
  )
}

export default Input
