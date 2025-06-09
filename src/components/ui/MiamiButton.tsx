'use client'

import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface MiamiButtonProps extends HTMLMotionProps<'button'> {
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
}: MiamiButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm min-h-[36px]',
    md: 'px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base min-h-[40px]',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg min-h-[44px]',
    xl: 'px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl min-h-[48px]'
  }
  
  // 🎨 VARIANTS AVEC 2 COULEURS UNIQUEMENT
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-miami-pink to-miami-cyan 
      text-white shadow-pink border-0 font-medium
      hover:shadow-pink-lg hover:shadow-cyan/20
    `,
    secondary: `
      bg-dark-800/60 backdrop-blur-sm text-white 
      border-2 border-miami-pink/30 
      hover:border-miami-pink hover:bg-miami-pink/10 
      shadow-dark
    `,
    outline: `
      border-2 border-miami-pink text-miami-pink 
      hover:bg-miami-pink hover:text-white 
      bg-transparent font-medium
      hover:shadow-pink
    `,
    ghost: `
      text-miami-cyan hover:text-miami-pink 
      hover:bg-miami-pink/5 border-0 bg-transparent
    `
  }
  
  const baseClasses = `
    font-medium rounded-xl sm:rounded-2xl transition-all duration-300 
    inline-flex items-center justify-center relative overflow-hidden 
    group disabled:opacity-50 disabled:cursor-not-allowed 
    focus:outline-none focus:ring-4 focus:ring-miami-pink/20 
    whitespace-nowrap text-nowrap flex-nowrap leading-none
  `
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {/* 🌟 Effet shimmer pour primary - Rose vers Cyan */}
      {variant === 'primary' && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
        />
      )}
      
      {/* 🌟 Effet de profondeur pour secondary */}
      {variant === 'secondary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-miami-pink/10 to-miami-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      )}
      
      {/* 🌟 Effet glow pour outline */}
      {variant === 'outline' && (
        <motion.div
          className="absolute inset-0 bg-miami-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      )}
      
      {/* Content - FORCÉ SUR UNE SEULE LIGNE */}
      <span className="relative z-10 inline-flex items-center justify-center gap-1 sm:gap-2 overflow-hidden whitespace-nowrap text-nowrap flex-nowrap max-w-full">
        <span className="inline-block truncate text-nowrap overflow-hidden whitespace-nowrap flex-shrink min-w-0">
          {children}
        </span>
        {icon && (
          <span className="inline-flex flex-shrink-0 items-center justify-center">
            {icon}
          </span>
        )}
      </span>
    </motion.button>
  )
}