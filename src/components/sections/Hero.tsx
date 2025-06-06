'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Star, ArrowDown, Heart, Award } from 'lucide-react'
import MiamiButton from '@/components/ui/MiamiButton'

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const [mounted, setMounted] = useState(false)
  
  const heroTexts = [
    "Capturer l'Émotion",
    "Révéler la Beauté",
    "Créer l'Instantané"
  ]

  // Fix hydration issue
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [mounted])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-studio-cream">
      {/* Background texture subtile */}
      <div className="absolute inset-0 bg-texture-paper opacity-30"></div>
      
      {/* Floating elements subtils */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-studio-coral/10 rounded-full"
              style={{
                left: `${15 + (i * 7) % 70}%`,
                top: `${20 + (i * 11) % 60}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + (i % 3),
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
      
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Badge de présentation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-glass-warm rounded-full px-6 py-3 mb-12 shadow-soft"
        >
          <Camera className="w-5 h-5 text-studio-coral" />
          <span className="text-caption text-studio-coral">Studio Photo Premium</span>
          <div className="w-2 h-2 bg-studio-coral rounded-full animate-pulse"></div>
        </motion.div>

        {/* Titre principal élégant */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="heading-hero text-neutral-900 mb-6">
            <span className="block">NEVER</span>
            <motion.span 
              className="block text-warm"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              SAD
            </motion.span>
          </h1>
          <div className="font-accent-modern text-lg md:text-xl text-neutral-500 tracking-[0.2em]">
            STUDIO PHOTOGRAPHIQUE
          </div>
        </motion.div>

        {/* Sous-titre animé avec élégance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          {mounted && (
            <AnimatePresence mode="wait">
              <motion.p
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-lead text-neutral-700 max-w-2xl mx-auto"
              >
                {heroTexts[currentText]}
              </motion.p>
            </AnimatePresence>
          )}
          <p className="mt-4 text-lg text-neutral-500 font-body-refined">
            Portraits • Événements • Corporate • Création artistique
          </p>
        </motion.div>
        
        {/* Boutons CTA élégants */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="btn-studio text-white font-medium px-8 py-4 rounded-2xl inline-flex items-center space-x-3">
              <Camera className="w-5 h-5" />
              <span>Réserver une séance</span>
            </button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="btn-outline-studio font-medium px-8 py-4 rounded-2xl inline-flex items-center space-x-3">
              <Heart className="w-5 h-5" />
              <span>Découvrir nos réalisations</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Social proof élégant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-studio-coral mr-2" />
              <span className="font-display-elegant text-2xl text-neutral-800">500+</span>
            </div>
            <p className="text-sm text-neutral-600 font-body-refined">Clients satisfaits</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-5 h-5 text-studio-coral mr-2" />
              <span className="font-display-elegant text-2xl text-neutral-800">5 ans</span>
            </div>
            <p className="text-sm text-neutral-600 font-body-refined">D'expérience</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Camera className="w-5 h-5 text-studio-coral mr-2" />
              <span className="font-display-elegant text-2xl text-neutral-800">Paris 15ème</span>
            </div>
            <p className="text-sm text-neutral-600 font-body-refined">Studio moderne</p>
          </div>
        </motion.div>
      </div>

      {/* Indicateur de scroll sophistiqué */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 border-2 border-studio-coral rounded-full flex justify-center cursor-pointer hover:border-studio-coral-dark transition-colors"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-studio-coral rounded-full mt-2"
          />
        </motion.div>
        <div className="text-xs text-neutral-500 text-center mt-2 font-accent-modern tracking-wider">
          DÉCOUVRIR
        </div>
      </motion.div>
    </section>
  )
}