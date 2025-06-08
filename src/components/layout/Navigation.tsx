'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Menu, X, Instagram, Phone, Mail, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MiamiButton from '@/components/ui/MiamiButton'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

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

  // Navigation items mis à jour avec les nouvelles pages
  const navItems = [
    { href: '/', label: 'Accueil', section: '#home' },
    { href: '/portfolio', label: 'Portfolio', section: null },
    { href: '/services', label: 'Services', section: null },
    { href: '/studio', label: 'Studio', section: null },
    { href: '/contact', label: 'Contact', section: null }
  ]

  const handleNavClick = (href: string, section: string | null) => {
    setIsMenuOpen(false)
    
    // Si c'est une section de la homepage (commence par #)
    if (section && pathname === '/') {
      const element = document.querySelector(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    // Sinon, Next.js s'occupe de la navigation vers les autres pages
  }

  const isActivePage = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname === href) return true
    return false
  }

  return (
    <>
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
          <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-0">
            {/* Logo élégant - Responsive */}
            <motion.div
              className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-studio-coral to-studio-miami rounded-2xl flex items-center justify-center shadow-coral group-hover:shadow-lg transition-all duration-300">
                    <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="font-display-elegant">
                  <div className="text-xl sm:text-2xl font-semibold text-neutral-900">
                    NEVER<span className="text-warm">SAD</span>
                  </div>
                  <div className="text-xs text-neutral-500 font-accent-modern tracking-wider">STUDIO</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href === '/' ? (
                    // Homepage - scroll vers section
                    <button
                      onClick={() => handleNavClick(item.href, item.section)}
                      className={`relative py-2 font-medium transition-colors duration-300 ${
                        isActivePage(item.href)
                          ? 'text-studio-coral'
                          : 'text-neutral-700 hover:text-studio-coral'
                      }`}
                    >
                      {item.label}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-studio-coral to-studio-miami"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActivePage(item.href) ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </button>
                  ) : (
                    // Autres pages - navigation Next.js
                    <Link
                      href={item.href}
                      className={`relative py-2 font-medium transition-colors duration-300 ${
                        isActivePage(item.href)
                          ? 'text-studio-coral'
                          : 'text-neutral-700 hover:text-studio-coral'
                      }`}
                    >
                      {item.label}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-studio-coral to-studio-miami"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActivePage(item.href) ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact & CTA Desktop */}
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
              <Link href="/contact">
                <MiamiButton variant="primary" size="sm">
                  Réserver
                </MiamiButton>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-neutral-700 hover:text-studio-coral transition-colors rounded-xl hover:bg-studio-coral/5 relative z-50"
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

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white/95 backdrop-blur-xl z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header du menu mobile */}
                <div className="flex items-center justify-between p-6 border-b border-neutral-200/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-studio-coral to-studio-miami rounded-lg flex items-center justify-center">
                      <Camera className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-xs font-bold text-neutral-700">MENU</div>
                  </div>
                  
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-neutral-700 hover:text-studio-coral transition-colors rounded-xl hover:bg-studio-coral/5"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Navigation Items Mobile */}
                <div className="flex-1 px-6 py-8 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.href === '/' ? (
                        <button
                          onClick={() => handleNavClick(item.href, item.section)}
                          className={`w-full text-left text-xl font-medium py-4 px-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                            isActivePage(item.href)
                              ? 'text-studio-coral bg-studio-coral/10 border-l-4 border-studio-coral'
                              : 'text-neutral-700 hover:text-studio-coral hover:bg-studio-coral/5'
                          }`}
                        >
                          <span>{item.label}</span>
                          {isActivePage(item.href) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-studio-coral rounded-full"
                            />
                          )}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block text-xl font-medium py-4 px-4 rounded-xl transition-all duration-300 group ${
                            isActivePage(item.href)
                              ? 'text-studio-coral bg-studio-coral/10 border-l-4 border-studio-coral'
                              : 'text-neutral-700 hover:text-studio-coral hover:bg-studio-coral/5'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.label}</span>
                            {isActivePage(item.href) ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 bg-studio-coral rounded-full"
                              />
                            ) : (
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                            )}
                          </div>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Footer du menu mobile */}
                <div className="p-6 border-t border-neutral-200/50 space-y-6">
                  {/* Contact Icons */}
                  <div className="flex justify-center space-x-4">
                    <motion.a 
                      href="tel:+33123456789" 
                      className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Phone className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                      href="mailto:hello@neversadstudio.com" 
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                      href="https://instagram.com" 
                      className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                      href="/contact" 
                      className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Calendar className="w-5 h-5" />
                    </motion.a>
                  </div>
                  
                  {/* CTA Button */}
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <MiamiButton variant="primary" className="w-full">
                      Réserver maintenant
                    </MiamiButton>
                  </Link>

                  {/* Info rapide */}
                  <div className="text-center text-xs text-neutral-500">
                    <p>📱 Réponse sous 24h garantie</p>
                    <p>📍 Paris 15ème • Métro Boucicaut</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}