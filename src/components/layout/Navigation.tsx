'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera, Menu, X, Instagram, Phone } from 'lucide-react'
import MiamiButton from '@/components/ui/MiamiButton'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Accueil' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'Studio' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-miami-pink/20 shadow-lg shadow-miami-pink/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-miami-pink to-miami-pink-light rounded-xl flex items-center justify-center shadow-lg shadow-miami-pink/25 group-hover:shadow-miami-pink/50 transition-all duration-300">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-miami-pink to-miami-pink-light rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <div className="font-display">
              <div className="text-2xl font-black text-glow">
                NEVER<span className="text-miami-pink">SAD</span>
              </div>
              <div className="text-xs text-miami-pink-light tracking-widest">STUDIO</div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-white hover:text-miami-pink transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-miami-pink to-miami-pink-light"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+33123456789"
              className="text-miami-pink hover:text-miami-pink-light transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              className="text-miami-pink hover:text-miami-pink-light transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <MiamiButton variant="primary" size="sm">
              Réserver
            </MiamiButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-miami-pink transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4 border-t border-miami-pink/20">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block text-white hover:text-miami-pink transition-colors font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-miami-pink/20">
                <MiamiButton variant="primary" className="w-full">
                  Réserver maintenant
                </MiamiButton>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}