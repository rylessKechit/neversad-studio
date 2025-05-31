'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-miami-dark to-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-display font-bold text-center mb-12 text-glow"
        >
          À Propos
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-miami-pink mb-6">
              Neversad Studio
            </h3>
            <p className="text-miami-pink-light leading-relaxed mb-6">
              Bienvenue dans l'univers de Neversad Studio, où la photographie rencontre l'esthétique Miami moderne. 
              Notre studio combine expertise technique et vision artistique pour créer des images qui racontent votre histoire.
            </p>
            <p className="text-miami-pink-light leading-relaxed mb-6">
              Spécialisés dans le portrait, la photographie corporate et les événements, nous apportons une touche unique 
              inspirée de l'énergie vibrant de Miami à chaque séance.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-miami-pink">500+</div>
                <div className="text-sm text-miami-pink-light">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-miami-pink">5</div>
                <div className="text-sm text-miami-pink-light">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-miami-pink">10k+</div>
                <div className="text-sm text-miami-pink-light">Photos créées</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square bg-gradient-to-br from-miami-pink/30 to-miami-pink-light/30 rounded-lg border border-miami-pink/50 glow-pink flex items-center justify-center"
          >
            <span className="text-miami-pink-light text-lg">
              Photo du studio
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}