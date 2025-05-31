'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MiamiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  glowIntensity?: 'low' | 'medium' | 'high'
  children: ReactNode
}

export default function MiamiButton({ 
  variant = 'primary', 
  glowIntensity = 'medium',
  children, 
  className = '',
  ...props 
}: MiamiButtonProps) {
  const baseClasses = 'px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105'
  
  const variantClasses = {
    primary: 'bg-miami-pink text-white hover:bg-miami-pink-light glow-pink-strong',
    secondary: 'border-2 border-miami-pink text-miami-pink hover:bg-miami-pink hover:text-white glow-pink',
    ghost: 'text-miami-pink hover:text-miami-pink-light hover:bg-miami-pink/10'
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
