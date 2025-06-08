'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera, Users, Heart, Zap, Check, ArrowRight } from 'lucide-react'
import MiamiButton from '@/components/ui/MiamiButton'

export default function Services() {
  const [mounted, setMounted] = useState(false)

  // Fix hydration issue
  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      id: 1,
      name: "Portrait Session",
      price: "150",
      originalPrice: "200",
      duration: "1h",
      icon: <Camera className="w-8 h-8" />,
      popular: false,
      gradient: "from-pink-500 to-rose-500",
      features: [
        "5 photos HD retouchées",
        "Consultation style incluse",
        "Éclairage professionnel",
        "Ambiance personnalisée",
        "Galerie privée 30 jours"
      ]
    },
    {
      id: 2,
      name: "Corporate Deluxe",
      price: "300",
      originalPrice: "400",
      duration: "2h",
      icon: <Users className="w-8 h-8" />,
      popular: true,
      gradient: "from-purple-500 to-indigo-500",
      features: [
        "15 photos HD premium",
        "Retouches professionnelles",
        "Usage commercial illimité",
        "Portraits individuels et équipe",
        "Livraison express 48h",
        "Consultation image de marque"
      ]
    },
    {
      id: 3,
      name: "Événement Miami",
      price: "500",
      originalPrice: "650",
      duration: "4h",
      icon: <Heart className="w-8 h-8" />,
      popular: false,
      gradient: "from-emerald-500 to-teal-500",
      features: [
        "Couverture complète",
        "100+ photos livrées",
        "Reportage en temps réel",
        "Galerie en ligne illimitée",
        "Impressions offertes",
        "Backup sécurisé"
      ]
    }
  ]

  // Positions fixes pour les particules
  const particlePositions = Array.from({ length: 50 }, (_, i) => ({
    left: `${10 + (i * 17) % 80}%`,
    top: `${5 + (i * 13) % 90}%`,
    delay: i * 0.1,
    duration: 2 + (i % 3)
  }))

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Background avec effet de particules */}
      <div className="absolute inset-0 bg-gradient-to-br from-miami-dark via-black to-miami-dark">
        {mounted && (
          <div className="absolute inset-0 opacity-30">
            {particlePositions.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-miami-pink rounded-full"
                style={{
                  left: particle.left,
                  top: particle.top,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="font-display text-5xl md:text-7xl font-black mb-6"
            style={{
              background: 'linear-gradient(45deg, #ff0080, #ff4da6, #8B5CF6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            NOS SERVICES
          </motion.h2>
          <p className="text-xl text-miami-blue-light max-w-3xl mx-auto">
            Des prestations premium pensées pour révéler votre personnalité avec notre signature Miami moderne
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative group ${service.popular ? 'transform scale-105 z-10' : ''}`}
            >
              {/* Badge populaire */}
              {service.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ POPULAIRE
                  </div>
                </motion.div>
              )}
              
              {/* Card */}
              <div className={`relative h-full rounded-3xl p-1 transition-all duration-500 group-hover:scale-105 ${
                service.popular 
                  ? 'bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 shadow-2xl shadow-pink-500/25' 
                  : `bg-gradient-to-br ${service.gradient}`
              }`}>
                <div className="h-full bg-black/95 rounded-3xl p-8 group-hover:bg-black/90 transition-all duration-500 relative overflow-hidden">
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-miami-grid"></div>
                  </div>

                  {/* Header du service */}
                  <div className="relative z-10 text-center mb-8">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    
                    {/* Prix avec animation */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-3">
                        <motion.span
                          className="text-4xl font-black bg-gradient-to-r from-miami-pink to-miami-pink-light bg-clip-text text-transparent"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.3 }}
                        >
                          {service.price}€
                        </motion.span>
                        <span className="text-gray-500 line-through text-lg">{service.originalPrice}€</span>
                      </div>
                      <div className="text-miami-pink-light text-sm">Durée: {service.duration}</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-4 mb-8 relative z-10">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mr-3 flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <div className="relative z-10">
                    <MiamiButton 
                      variant={service.popular ? "primary" : "secondary"}
                      className="w-full group"
                    >
                      Réserver maintenant
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </MiamiButton>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
              />
            </motion.div>
          ))}
        </div>

        {/* Section devis personnalisé */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-miami-pink via-purple-500 to-blue-500"
        >
          <div className="bg-black/95 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-miami-pink/5 to-purple-500/5" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-miami-pink to-purple-500 rounded-3xl flex items-center justify-center"
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-miami-pink to-purple-500 bg-clip-text text-transparent">
                Projet sur-mesure ?
              </h3>
              
              <p className="text-xl text-miami-blue-light mb-8 max-w-2xl mx-auto leading-relaxed">
                Chaque projet est unique. Discutons de votre vision et créons ensemble 
                une expérience photographique qui vous ressemble.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MiamiButton variant="primary" size="lg" className="group">
                  <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Devis gratuit en 24h
                </MiamiButton>
                <MiamiButton variant="ghost" size="lg">
                  Voir nos réalisations
                </MiamiButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}