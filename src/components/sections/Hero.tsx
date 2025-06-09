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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950 pt-16 sm:pt-20">
      {/* 🌙 Background texture dark */}
      <div className="absolute inset-0 bg-miami-grid-dark opacity-20"></div>
      
      {/* 🌙 Gradient overlay dark */}
      <div className="absolute inset-0 bg-gradient-radial opacity-80"></div>
      
      {/* 🌟 Floating elements - Rose et Cyan uniquement */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: window.innerWidth < 768 ? 8 : 16 }, (_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full ${
                i % 2 === 0 ? 'bg-miami-pink/20' : 'bg-miami-cyan/20'
              }`}
              style={{
                left: `${15 + (i * 7) % 70}%`,
                top: `${20 + (i * 11) % 60}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
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
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto w-full">
        {/* 🏷️ Badge de présentation dark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 glass-dark rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-12 shadow-pink-dark"
        >
          <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-miami-pink flex-shrink-0" />
          <span className="font-accent-dark text-miami-pink text-xs sm:text-sm">Studio Photo Premium</span>
          <div className="w-2 h-2 bg-miami-cyan rounded-full animate-pulse flex-shrink-0"></div>
        </motion.div>

        {/* 💫 Titre principal dark */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display-dark text-white mb-4 sm:mb-6 leading-tight">
            <span className="block text-glow-miami">NEVER</span>
            <motion.span 
              className="block text-miami-gradient"
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
          <div className="font-accent-dark text-base sm:text-lg md:text-xl lg:text-2xl text-miami-cyan tracking-[0.15em] sm:tracking-[0.2em]">
            STUDIO PHOTOGRAPHIQUE
          </div>
        </motion.div>

        {/* 📝 Sous-titre animé dark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          {mounted && (
            <AnimatePresence mode="wait">
              <motion.p
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto font-body-dark leading-relaxed text-glow-cyan"
              >
                {heroTexts[currentText]}
              </motion.p>
            </AnimatePresence>
          )}
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-400 font-body-dark px-4">
            Portraits • Événements • Corporate • Création artistique
          </p>
        </motion.div>
        
        {/* 🎯 Boutons CTA dark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <MiamiButton 
              variant="primary" 
              size="lg"
              className="w-full sm:w-auto group"
              icon={<Camera className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
            >
              Réserver une séance
            </MiamiButton>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <MiamiButton 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto group"
              icon={<Heart className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
            >
              Découvrir nos réalisations
            </MiamiButton>
          </motion.div>
        </motion.div>

        {/* 📊 Social proof dark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-miami-pink mr-2 flex-shrink-0" />
              <span className="font-display-dark text-xl sm:text-2xl text-white">500+</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 font-body-dark">Clients satisfaits</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-miami-cyan mr-2 flex-shrink-0" />
              <span className="font-display-dark text-xl sm:text-2xl text-white">5 ans</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 font-body-dark">D'expérience</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-miami-pink mr-2 flex-shrink-0" />
              <span className="font-display-dark text-xl sm:text-2xl text-white">Paris 15ème</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 font-body-dark">Studio moderne</p>
          </div>
        </motion.div>
      </div>

      {/* ⬇️ Indicateur de scroll dark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-miami-pink rounded-full flex justify-center cursor-pointer hover:border-miami-cyan transition-colors"
          onClick={() => {
            const portfolioSection = document.querySelector('#portfolio')
            if (portfolioSection) {
              portfolioSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 sm:h-3 bg-gradient-to-b from-miami-pink to-miami-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}