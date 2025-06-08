'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, MapPin, Lightbulb, Monitor, Palette, Coffee, Wifi, Car, Play, Pause, RotateCcw, Maximize, Info, ArrowRight } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import MiamiButton from '@/components/ui/MiamiButton'

export default function StudioPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [virtual360, setVirtual360] = useState(false)
  const [currentView, setCurrentView] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const studioFeatures = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Équipement Professionnel",
      description: "Matériel haute définition dernière génération",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Éclairage Modulaire",
      description: "Système d'éclairage professionnel adaptable",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Station de Retouche",
      description: "Setup pro pour visualisation immédiate",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Décors Variés",
      description: "Multiples ambiances et backgrounds",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Espace Détente",
      description: "Zone confortable pour se préparer",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Connexion Haut Débit",
      description: "Partage et envoi instantané",
      color: "from-indigo-500 to-blue-500"
    }
  ]

  const studioAreas = [
    {
      id: 'main-studio',
      name: "Studio Principal",
      size: "50m²",
      description: "Espace principal de prise de vue avec éclairage modulaire professionnel",
      features: ["Éclairage Profoto", "Cyclorama 4m", "Rails de suspension", "Contrôle température"],
      hotspots: [
        { x: 30, y: 40, title: "Zone Portrait", info: "Setup principal pour portraits" },
        { x: 70, y: 60, title: "Éclairage", info: "Profoto D2 1000W" }
      ]
    },
    {
      id: 'creative-corner',
      name: "Coin Créatif",
      size: "20m²", 
      description: "Espace dédié aux shootings artistiques et créatifs",
      features: ["Décors variables", "Props créatifs", "Éclairage coloré", "Ambiance modulable"],
      hotspots: [
        { x: 25, y: 50, title: "Décors", info: "Collection de backgrounds" },
        { x: 75, y: 30, title: "Props", info: "Accessoires créatifs" }
      ]
    },
    {
      id: 'prep-area',
      name: "Espace Préparation",
      size: "15m²",
      description: "Zone confortable pour maquillage, coiffure et préparation",
      features: ["Miroir Hollywood", "Éclairage maquillage", "Mobilier confort", "Zone rangement"],
      hotspots: [
        { x: 40, y: 35, title: "Miroir Pro", info: "Éclairage parfait pour maquillage" },
        { x: 60, y: 65, title: "Confort", info: "Espace détente clients" }
      ]
    },
    {
      id: 'tech-station',
      name: "Station Technique",
      size: "10m²",
      description: "Poste de travail pour retouche immédiate et validation",
      features: ["Écran calibré", "Station retouche", "Wifi pro", "Backup cloud"],
      hotspots: [
        { x: 50, y: 45, title: "Retouche", info: "Station Adobe Pro" },
        { x: 30, y: 60, title: "Validation", info: "Écran client 27\"" }
      ]
    }
  ]

  const virtualTour = [
    {
      id: 1,
      title: "Vue d'ensemble",
      description: "Panorama complet du studio principal",
      image: "/images/studio/360-main.jpg",
      hotspots: [
        { x: 25, y: 55, area: 'main-studio' },
        { x: 75, y: 45, area: 'creative-corner' }
      ]
    },
    {
      id: 2,
      title: "Zone de prise de vue",
      description: "Setup principal avec éclairage professionnel",
      image: "/images/studio/360-shooting.jpg",
      hotspots: [
        { x: 40, y: 30, area: 'main-studio' },
        { x: 60, y: 70, area: 'tech-station' }
      ]
    },
    {
      id: 3,
      title: "Espace créatif",
      description: "Coin dédié aux projets artistiques",
      image: "/images/studio/360-creative.jpg",
      hotspots: [
        { x: 35, y: 60, area: 'creative-corner' },
        { x: 65, y: 25, area: 'prep-area' }
      ]
    }
  ]

  const equipment = [
    {
      category: "Éclairage",
      items: [
        "Profoto D2 1000W (x4)",
        "Softbox Profoto (diverses tailles)",
        "Parapluies réflecteurs",
        "LED panels Godox",
        "Réflecteurs 5-en-1"
      ]
    },
    {
      category: "Appareils Photo",
      items: [
        "Canon EOS R5 (x2)",
        "Sony Alpha 7R V",
        "Objectifs 24-70mm f/2.8",
        "Objectifs 85mm f/1.4",
        "Objectifs 50mm f/1.2"
      ]
    },
    {
      category: "Accessoires",
      items: [
        "Pieds Manfrotto Pro",
        "Déclencheurs sans fil",
        "Batteries et chargeurs",
        "Cartes mémoire haute vitesse",
        "Filtres professionnels"
      ]
    }
  ]

  const toggleVirtual360 = () => {
    setVirtual360(!virtual360)
    setIsPlaying(false)
  }

  const nextView = () => {
    setCurrentView((prev) => (prev + 1) % virtualTour.length)
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && virtual360) {
      const interval = setInterval(() => {
        nextView()
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, virtual360])

  if (!mounted) return null

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-miami-dark via-black to-miami-dark">
            <div className="absolute inset-0 bg-miami-grid opacity-10"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6"
              style={{
                background: 'linear-gradient(45deg, #ff0080, #ff4da6, #8B5CF6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              NOTRE STUDIO
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-miami-pink-light max-w-3xl mx-auto mb-8"
            >
              Un espace de 200m² entièrement équipé avec la technologie de pointe pour vos séances photo
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <MiamiButton 
                variant="primary" 
                onClick={toggleVirtual360}
                icon={<Camera className="w-5 h-5" />}
              >
                {virtual360 ? 'Retour à la présentation' : 'Visite virtuelle 360°'}
              </MiamiButton>
              <MiamiButton variant="outline">
                Réserver une visite
              </MiamiButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-miami-pink" />
                <span>Paris 15ème • Métro Boucicaut</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-miami-pink" />
                <span>Parking gratuit disponible</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Visite Virtuelle 360° */}
        <AnimatePresence>
          {virtual360 && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="px-4 mb-16"
            >
              <div className="max-w-6xl mx-auto">
                <div className="relative bg-miami-dark/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-miami-pink/20">
                  {/* Tour 360° */}
                  <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
                    <div 
                      className="w-full h-full bg-gradient-to-br from-miami-pink/20 to-purple-500/20 flex items-center justify-center relative"
                      style={{
                        backgroundImage: `url(${virtualTour[currentView]?.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      {/* Simulation 360° avec gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
                      
                      {/* Hotspots interactifs */}
                      {virtualTour[currentView]?.hotspots.map((hotspot, index) => (
                        <motion.button
                          key={index}
                          className="absolute w-4 h-4 bg-miami-pink rounded-full border-2 border-white shadow-lg hover:scale-125 transition-transform"
                          style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                          onClick={() => setSelectedArea(hotspot.area)}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                            {studioAreas.find(area => area.id === hotspot.area)?.name}
                          </div>
                        </motion.button>
                      ))}

                      {/* Centre de contrôle */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-6xl sm:text-8xl mb-4 opacity-50">📸</div>
                          <h3 className="text-xl sm:text-2xl font-bold mb-2">{virtualTour[currentView]?.title}</h3>
                          <p className="text-sm sm:text-base text-gray-300 max-w-xs mx-auto">
                            {virtualTour[currentView]?.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contrôles de visite */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={togglePlayback}
                          className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-miami-pink/50 transition-colors"
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </button>
                        <button
                          onClick={() => setCurrentView(0)}
                          className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-miami-pink/50 transition-colors"
                        >
                          <RotateCcw className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        {virtualTour.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentView(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              currentView === index ? 'bg-miami-pink' : 'bg-white/30'
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={toggleVirtual360}
                        className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-miami-pink/50 transition-colors"
                      >
                        <Maximize className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Info panel des zones */}
                  <AnimatePresence>
                    {selectedArea && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="p-6 bg-miami-dark/50 border-t border-miami-pink/20"
                      >
                        {(() => {
                          const area = studioAreas.find(a => a.id === selectedArea)
                          if (!area) return null
                          
                          return (
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="text-xl font-bold text-white mb-2">{area.name}</h4>
                                <p className="text-gray-300 mb-4">{area.description}</p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                  {area.features.map((feature, index) => (
                                    <span key={index} className="text-xs px-2 py-1 bg-miami-pink/20 text-miami-pink-light rounded-full">
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <button
                                onClick={() => setSelectedArea(null)}
                                className="ml-4 text-gray-400 hover:text-white"
                              >
                                ✕
                              </button>
                            </div>
                          )
                        })()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Caractéristiques du studio */}
        {!virtual360 && (
          <section className="px-4 mb-16 sm:mb-20">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Un studio <span className="text-miami-pink">entièrement équipé</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  200m² dédiés à la création photographique avec le matériel le plus avancé
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {studioFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-miami-dark/30 backdrop-blur-sm rounded-2xl p-6 border border-miami-pink/20 hover:border-miami-pink/40 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
                      <div className={`w-12 h-12 mb-4 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <div className="text-white">{feature.icon}</div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Espaces du studio */}
        {!virtual360 && (
          <section className="px-4 mb-16 sm:mb-20">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Nos <span className="text-miami-pink">espaces</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Chaque zone est pensée pour optimiser votre expérience de shooting
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {studioAreas.map((area, index) => (
                  <motion.div
                    key={area.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-miami-dark/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-miami-pink/20 group hover:border-miami-pink/40 transition-all duration-300"
                  >
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{area.name}</h3>
                          <span className="text-miami-pink text-sm font-medium">{area.size}</span>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-miami-pink to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Camera className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">{area.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {area.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-miami-pink rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button 
                        onClick={() => {
                          setSelectedArea(area.id)
                          setVirtual360(true)
                        }}
                        className="text-miami-pink hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"
                      >
                        Voir en 360°
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Équipement */}
        {!virtual360 && (
          <section className="px-4 mb-16 sm:mb-20">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Notre <span className="text-miami-pink">équipement</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Du matériel professionnel haut de gamme pour des résultats exceptionnels
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {equipment.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-miami-dark/30 backdrop-blur-sm rounded-2xl p-6 border border-miami-pink/20"
                  >
                    <h3 className="text-xl font-bold text-white mb-6 text-center">{category.category}</h3>
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-miami-pink rounded-full flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Informations pratiques */}
        {!virtual360 && (
          <section className="px-4 mb-16">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl p-1 bg-gradient-to-r from-miami-pink via-purple-500 to-blue-500"
              >
                <div className="bg-black/95 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-miami-grid opacity-5"></div>
                  
                  <div className="relative z-10 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.3 }}
                      className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-miami-pink to-purple-500 rounded-3xl flex items-center justify-center"
                    >
                      <MapPin className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-3xl sm:text-4xl font-black mb-6 bg-gradient-to-r from-miami-pink to-purple-500 bg-clip-text text-transparent">
                      Venez nous rendre visite !
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-white mb-4">📍 Adresse</h4>
                        <p className="text-gray-400 mb-2">123 Rue de la Photo</p>
                        <p className="text-gray-400 mb-2">75015 Paris</p>
                        <p className="text-miami-pink text-sm">Métro Boucicaut (Ligne 8)</p>
                      </div>
                      
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-white mb-4">🕒 Horaires</h4>
                        <div className="space-y-1 text-gray-400 text-sm">
                          <p>Lundi - Vendredi: 9h - 18h</p>
                          <p>Samedi: 10h - 16h</p>
                          <p>Dimanche: Sur rendez-vous</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <MiamiButton variant="primary" size="lg">
                        Réserver une visite
                      </MiamiButton>
                      <MiamiButton variant="ghost" size="lg">
                        Nous contacter
                      </MiamiButton>
                    </div>

                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                      <div className="text-sm text-gray-400">
                        <span className="text-miami-pink font-semibold">✓</span> Parking gratuit
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="text-miami-pink font-semibold">✓</span> Accès PMR
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="text-miami-pink font-semibold">✓</span> Wifi gratuit
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="text-miami-pink font-semibold">✓</span> Climatisation
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  )
}