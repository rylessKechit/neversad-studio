'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Star } from 'lucide-react'
import MiamiButton from '@/components/ui/MiamiButton'
import NeonGrid from '@/components/ui/NeonGrid'

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const [mounted, setMounted] = useState(false)
  
  const heroTexts = [
    "CAPTURER L'INSTANT",
    "RÉVÉLER LA BEAUTÉ",
    "CRÉER L'ÉMOTION"
  ]

  // Fix hydration issue
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [mounted, heroTexts.length]) // Ajout de heroTexts.length dans les dépendances

  // Positions fixes pour éviter l'hydration mismatch
  const particlePositions = [
    { left: '10%', top: '20%' },
    { left: '80%', top: '10%' },
    { left: '15%', top: '60%' },
    { left: '75%', top: '70%' },
    { left: '40%', top: '15%' },
    { left: '60%', top: '80%' },
    { left: '25%', top: '40%' },
    { left: '85%', top: '45%' },
    { left: '5%', top: '85%' },
    { left: '90%', top: '25%' },
    { left: '35%', top: '75%' },
    { left: '65%', top: '30%' },
    { left: '20%', top: '90%' },
    { left: '70%', top: '5%' },
    { left: '45%', top: '55%' },
    { left: '50%', top: '95%' },
    { left: '95%', top: '60%' },
    { left: '30%', top: '25%' },
    { left: '55%', top: '85%' },
    { left: '8%', top: '50%' }
  ]

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec grid animé */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-miami-dark to-black" />
        <NeonGrid animated density={40} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Particules flottantes - seulement après le mount */}
      {mounted && (
        <div className="absolute inset-0">
          {particlePositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-miami-pink rounded-full"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Titre principal avec effet glitch */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black mb-4">
            <span className="block text-glow">NEVER</span>
            <motion.span 
              className="block text-miami-pink"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(255, 0, 110, 0.5)',
                  '0 0 40px rgba(255, 0, 110, 0.8)',
                  '0 0 20px rgba(255, 0, 110, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SAD
            </motion.span>
          </h1>
          <div className="text-lg md:text-xl font-display text-miami-pink-light tracking-[0.3em]">
            STUDIO
          </div>
        </motion.div>

        {/* Sous-titre animé */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          {mounted && (
            <AnimatePresence mode="wait">
              <motion.p
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-light text-miami-pink-light mb-4"
              >
                {heroTexts[currentText]}
              </motion.p>
            </AnimatePresence>
          )}
          <p className="text-lg text-gray-400">
            Studio Photo Premium • Miami Vibes • Paris 15ème
          </p>
        </motion.div>
        
        {/* Boutons CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MiamiButton variant="primary" size="lg" className="group">
            <Camera className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Réserver ma séance
          </MiamiButton>
          <MiamiButton variant="secondary" size="lg">
            Découvrir le portfolio
          </MiamiButton>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center justify-center space-x-8 text-sm text-gray-500"
        >
          <div className="flex items-center">
            <Star className="w-4 h-4 text-miami-pink mr-1" />
            <span>500+ clients satisfaits</span>
          </div>
          <div className="w-px h-4 bg-gray-700" />
          <div className="flex items-center">
            <Camera className="w-4 h-4 text-miami-pink mr-1" />
            <span>5 ans d&apos;expérience</span>
          </div>
        </motion.div>
      </div>

      {/* Indicateur de scroll simplifié */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-miami-pink rounded-full flex justify-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-miami-pink rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}