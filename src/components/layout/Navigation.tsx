'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

  // Fermer le menu lors du resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { href: '#home', label: 'Accueil' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'Studio' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-dark shadow-dark border-b border-miami-pink/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-dark">
          <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-0">
            {/* 🎯 Logo dark Miami */}
            <motion.a
              href="#home"
              className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick('#home')}
            >
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  {/* 🎯 REMPLACEZ PAR VOTRE LOGO */}
                  <img 
                    src="images/logo/neversad-logo.png" 
                    alt="Neversad Studio Logo" 
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                  <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white hidden" />
                </div>
              </div>
              <div className="font-display text-white">
                <div className="text-xl sm:text-2xl font-semibold">
                  NEVER<span className="text-miami-pink">SAD</span>
                </div>
                <div className="text-xs text-miami-cyan font-semibold tracking-wider">STUDIO</div>
              </div>
            </motion.a>

            {/* 🖥️ Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="relative text-neutral-300 hover:text-miami-pink transition-colors duration-300 font-medium py-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-miami-pink to-miami-cyan"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* 📱 Contact & CTA Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                href="tel:+33123456789"
                className="text-miami-cyan hover:text-miami-cyan-light transition-colors p-2 rounded-xl hover:bg-miami-cyan/5"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Appelez-nous"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:hello@neversadstudio.com"
                className="text-miami-pink hover:text-miami-pink-light transition-colors p-2 rounded-xl hover:bg-miami-pink/5"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Écrivez-nous"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                className="text-miami-cyan hover:text-miami-pink transition-colors p-2 rounded-xl hover:bg-miami-pink/5"
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

            {/* 📱 Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-neutral-300 hover:text-miami-pink transition-colors rounded-xl hover:bg-miami-pink/5 relative z-50"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 90 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 📱 Mobile Navigation Overlay Dark */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop dark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-dark-950/80 backdrop-blur-2xl z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel dark */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm glass-dark-strong z-50 lg:hidden shadow-2xl border-l border-miami-pink/20"
            >
              <div className="flex flex-col h-full">
                {/* 📍 Header du menu mobile dark */}
                <div className="flex items-center justify-between p-6 border-b border-neutral-800/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                      <img
                        src="images/logo/neversad-logo.png"
                        alt="Logo"
                        className="w-8 h-8 object-contain"
                      />
                      <svg className="w-4 h-4 text-white hidden" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </div>
                    <div className="text-xs font-bold text-neutral-300">MENU</div>
                  </div>
                  
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-neutral-300 hover:text-miami-pink transition-colors rounded-xl hover:bg-miami-pink/5"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* 📝 Navigation Items dark */}
                <div className="flex-1 px-6 py-8 space-y-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="block text-xl font-medium text-neutral-300 hover:text-miami-pink transition-colors py-3 border-b border-neutral-800 hover:border-miami-pink/20"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                {/* 📱 Footer du menu mobile dark */}
                <div className="p-6 border-t border-neutral-800/50 space-y-6">
                  {/* Contact Icons dark */}
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="tel:+33123456789" 
                      className="w-12 h-12 bg-gradient-to-br from-miami-pink to-miami-pink-light rounded-xl flex items-center justify-center text-white shadow-pink"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                    <a 
                      href="mailto:hello@neversadstudio.com" 
                      className="w-12 h-12 bg-gradient-to-br from-miami-cyan to-miami-cyan-light rounded-xl flex items-center justify-center text-white shadow-cyan"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      className="w-12 h-12 bg-gradient-to-br from-miami-pink to-miami-cyan rounded-xl flex items-center justify-center text-white shadow-miami-dark"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                  
                  {/* CTA Button dark */}
                  <MiamiButton variant="primary" className="w-full">
                    Réserver maintenant
                  </MiamiButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}