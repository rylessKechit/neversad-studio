'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera, Menu, X, Instagram, Phone, Mail } from 'lucide-react'
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
          ? 'glass-studio shadow-soft border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-studio">
        <div className="flex items-center justify-between h-20">
          {/* Logo élégant */}
          <motion.a
            href="#home"
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-studio-coral to-studio-miami rounded-2xl flex items-center justify-center shadow-coral group-hover:shadow-lg transition-all duration-300">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="font-display-elegant">
              <div className="text-2xl font-semibold text-neutral-900">
                NEVER<span className="text-warm">SAD</span>
              </div>
              <div className="text-xs text-neutral-500 font-accent-modern tracking-wider">STUDIO</div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-neutral-700 hover:text-studio-coral transition-colors duration-300 font-medium py-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-studio-coral to-studio-miami"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+33123456789"
              className="text-studio-coral hover:text-studio-coral-dark transition-colors p-2 rounded-xl hover:bg-studio-coral/5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Appelez-nous"
            >
              <Phone className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:hello@neversadstudio.com"
              className="text-studio-coral hover:text-studio-coral-dark transition-colors p-2 rounded-xl hover:bg-studio-coral/5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Écrivez-nous"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              className="text-studio-coral hover:text-studio-coral-dark transition-colors p-2 rounded-xl hover:bg-studio-coral/5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Instagram"
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
              className="p-2 text-neutral-700 hover:text-studio-coral transition-colors rounded-xl hover:bg-studio-coral/5"
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
            className="lg:hidden overflow-hidden glass-warm rounded-2xl mt-4 mb-4"
          >
            <div className="py-6 px-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block text-neutral-700 hover:text-studio-coral transition-colors font-medium py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              
              <div className="pt-4 border-t border-neutral-200/50 space-y-4">
                <div className="flex space-x-4">
                  <a href="tel:+33123456789" className="text-studio-coral hover:text-studio-coral-dark transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a href="mailto:hello@neversadstudio.com" className="text-studio-coral hover:text-studio-coral-dark transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com" className="text-studio-coral hover:text-studio-coral-dark transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
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