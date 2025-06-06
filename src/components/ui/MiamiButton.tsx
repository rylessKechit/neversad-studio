'use client'

import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface StudioButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: React.ReactNode
  children: ReactNode
}

export default function MiamiButton({ 
  variant = 'primary', 
  size = 'md',
  icon,
  children, 
  className = '',
  ...props 
}: StudioButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-studio-coral to-studio-miami text-white shadow-coral hover:shadow-lg border-0 font-medium',
    secondary: 'bg-white/90 backdrop-blur-sm text-studio-coral border-2 border-studio-coral/20 hover:border-studio-coral hover:bg-studio-coral hover:text-white shadow-soft',
    outline: 'border-2 border-studio-coral text-studio-coral hover:bg-studio-coral hover:text-white bg-transparent font-medium',
    ghost: 'text-studio-coral hover:text-studio-coral-dark hover:bg-studio-coral/5 border-0 bg-transparent'
  }
  
  const baseClasses = 'font-medium rounded-2xl transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-studio-coral/20'
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {/* Effet shimmer pour primary */}
      {variant === 'primary' && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
        />
      )}
      
      {/* Effet de profondeur pour secondary */}
      {variant === 'secondary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-studio-coral/10 to-studio-miami/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
    </motion.button>
  )
}