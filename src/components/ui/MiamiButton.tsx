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
    sm: 'px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm',
    md: 'px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg',
    xl: 'px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl'
  }
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-studio-coral to-studio-miami text-white shadow-coral hover:shadow-lg border-0 font-medium',
    secondary: 'bg-white/90 backdrop-blur-sm text-studio-coral border-2 border-studio-coral/20 hover:border-studio-coral hover:bg-studio-coral hover:text-white shadow-soft',
    outline: 'border-2 border-studio-coral text-studio-coral hover:bg-studio-coral hover:text-white bg-transparent font-medium',
    ghost: 'text-studio-coral hover:text-studio-coral-dark hover:bg-studio-coral/5 border-0 bg-transparent'
  }
  
  const baseClasses = 'font-medium rounded-xl sm:rounded-2xl transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-studio-coral/20 whitespace-nowrap'
  
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
      
      {/* Content - UNE SEULE LIGNE FORCÉE */}
      <span className="relative z-10 inline-flex items-center justify-center gap-1 sm:gap-2 overflow-hidden">
        {icon && (
          <span className="inline-flex flex-shrink-0">
            {icon}
          </span>
        )}
        <span className="inline-block truncate">
          {children}
        </span>
      </span>
    </motion.button>
  )
}