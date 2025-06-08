'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera, Heart, Award, Users, ArrowRight, Sparkles } from 'lucide-react'
import MiamiButton from '@/components/ui/MiamiButton'

export default function About() {
  const [mounted, setMounted] = useState(false)

  // Fix hydration issue
  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { 
      number: "500+", 
      label: "Clients satisfaits", 
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-pink-500 to-rose-500"
    },
    { 
      number: "5", 
      label: "Années d'expérience", 
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-purple-500 to-indigo-500"
    },
    { 
      number: "10k+", 
      label: "Photos créées", 
      icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      number: "98%", 
      label: "Taux de satisfaction", 
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-red-500 to-pink-500"
    }
  ]

  const values = [
    {
      title: "Créativité",
      description: "Chaque séance est une nouvelle aventure artistique où nous repoussons les limites de l'imagination",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Excellence",
      description: "Matériel haut de gamme et techniques avancées pour des résultats exceptionnels",
      icon: "⭐",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Authenticité",
      description: "Nous capturons votre vraie personnalité avec une approche sincère et bienveillante",
      icon: "💎",
      gradient: "from-blue-500 to-cyan-500"
    }
  ]

  // Positions fixes pour éviter l'hydration mismatch - Responsive
  const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40
  const particlePositions = Array.from({ length: particleCount }, (_, i) => ({
    left: `${5 + (i * 23) % 90}%`,
    top: `${10 + (i * 17) % 80}%`,
    delay: i * 0.15,
    duration: 3 + (i % 3)
  }))

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background avec effets - Responsive */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black">
        {mounted && (
          <div className="absolute inset-0 opacity-15 sm:opacity-20">
            {particlePositions.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-studio-coral rounded-full"
                style={{
                  left: particle.left,
                  top: particle.top,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h2 
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
            style={{
              background: 'linear-gradient(45deg, #ff0080, #ff4da6, #8B5CF6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            NOTRE STUDIO
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Bienvenue dans l'univers de Neversad Studio, où la photographie rencontre l'art et l'innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Contenu texte - Responsive */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg sm:text-xl">
                Chez <span className="text-studio-coral font-semibold">Neversad Studio</span>, 
                nous croyons que chaque personne a une histoire unique à raconter.
              </p>
              
              <p className="text-sm sm:text-base">
                Notre approche combine l'esthétique contemporaine avec une expertise technique de pointe. 
                Spécialisés dans le portrait, la photographie corporate et les événements, nous apportons 
                une vision artistique fraîche à chaque projet.
              </p>
              
              <p className="text-sm sm:text-base">
                Basés dans le 15ème arrondissement de Paris, notre studio de 200m² est équipé des dernières 
                technologies et d'un éclairage professionnel pour créer l'ambiance parfaite pour vos photos.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 sm:mt-8"
            >
              <MiamiButton 
                variant="primary" 
                className="group w-full sm:w-auto"
                icon={
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                }
              >
                Découvrir notre équipe
              </MiamiButton>
            </motion.div>
          </motion.div>

          {/* Image/Visual du studio - Responsive */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-studio-coral via-purple-500 to-blue-500 p-1 shadow-2xl">
              <div className="h-full w-full bg-black/90 rounded-2xl sm:rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Pattern de fond */}
                <div className="absolute inset-0 bg-gradient-to-br from-studio-coral/5 to-purple-500/5"></div>
                <div className="text-center relative z-10 px-4">
                  <div className="text-4xl sm:text-6xl md:text-8xl mb-3 sm:mb-4">📸</div>
                  <p className="text-gray-300 text-base sm:text-lg font-medium">Notre Studio Moderne</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Paris 15ème • 200m²</p>
                </div>
              </div>
            </div>
            
            {/* Éléments flottants - Responsive */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-studio-coral to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-studio-coral/25"
            >
              <Camera className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Statistiques - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="text-center group"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${stat.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-studio-coral to-purple-500 bg-clip-text text-transparent mb-1 sm:mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium px-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Nos valeurs - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-studio-coral to-purple-500 bg-clip-text text-transparent">
            Nos Valeurs
          </h3>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Ce qui nous guide au quotidien pour vous offrir une expérience photographique exceptionnelle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className={`relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br ${value.gradient} bg-opacity-10 border border-gray-800 hover:border-studio-coral/30 transition-all duration-300 group-hover:transform group-hover:scale-105`}>
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{value.icon}</div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{value.title}</h4>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-center">
                  {value.description}
                </p>
                
                {/* Effet de glow au hover */}
                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}