'use client'

import { motion } from 'framer-motion'
import MiamiButton from '@/components/ui/MiamiButton'
import NeonGrid from '@/components/ui/NeonGrid'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <NeonGrid animated />
      
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-6xl md:text-8xl font-black text-glow mb-6"
        >
          NEVER<span className="text-miami-pink animate-glitch">SAD</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl mb-8 text-miami-pink-light"
        >
          Studio Photo Premium • Miami Aesthetic
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-x-4"
        >
          <MiamiButton variant="primary">
            Réserver une séance
          </MiamiButton>
          <MiamiButton variant="secondary">
            Voir le portfolio
          </MiamiButton>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-miami-dark/50 to-miami-dark" />
    </section>
  )
}