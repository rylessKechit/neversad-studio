'use client'

import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface MiamiButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: React.ReactNode
  glowIntensity?: 'low' | 'medium' | 'high'
  children: ReactNode
}

export default function MiamiButton({ 
  variant = 'primary', 
  size = 'md',
  icon,
  glowIntensity = 'medium',
  children, 
  className = '',
  ...props 
}: MiamiButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-miami-pink to-miami-pink-light text-white shadow-lg shadow-miami-pink/25 hover:shadow-miami-pink/40 hover:shadow-xl border-0',
    secondary: 'border-2 border-miami-pink text-miami-pink hover:bg-miami-pink hover:text-white hover:shadow-lg hover:shadow-miami-pink/25 bg-transparent',
    ghost: 'text-miami-pink hover:text-miami-pink-light hover:bg-miami-pink/10 border-0 bg-transparent',
    outline: 'border border-miami-pink/50 text-miami-pink-light hover:border-miami-pink hover:text-miami-pink hover:bg-miami-pink/5 bg-transparent'
  }
  
  const glowClasses = {
    low: 'hover:shadow-miami-glow',
    medium: 'hover:glow-pink',
    high: 'hover:glow-pink-strong'
  }
  
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 inline-flex items-center justify-center relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${glowClasses[glowIntensity]} ${className}`}
      {...props}
    >
      {/* Gradient overlay effect pour primary */}
      {variant === 'primary' && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-miami-pink-light to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      )}
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 scale-0 rounded-xl group-active:scale-100 transition-transform duration-200"
        initial={{ scale: 0 }}
        whileTap={{ scale: 1 }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
    </motion.button>
  )
}