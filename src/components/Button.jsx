import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  type = 'button', 
  ...props 
}) => {
  const variants = {
    primary: 'bg-[#111111] text-white hover:bg-[#111111] shadow-premium-lg',
    outline: 'bg-transparent border border-[#111111]/10 text-[#111111] hover:bg-[#F5F5F7]',
    ghost: 'bg-transparent text-[#111111] hover:bg-[#F5F5F7]',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  }

  const sizes = {
    sm: 'px-6 py-3 text-[9px]',
    md: 'px-10 py-5 text-[10px]',
    lg: 'px-14 py-6 text-[11px]',
  }

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.12)"
      }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center overflow-hidden
        font-bold tracking-[0.4em] uppercase
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        rounded-full
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
