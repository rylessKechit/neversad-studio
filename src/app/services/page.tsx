'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Users, Heart, Zap, Check, ArrowRight, Clock, Euro, Star, Award, ChevronDown, ChevronUp } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import MiamiButton from '@/components/ui/MiamiButton'

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      id: 'portrait',
      name: "Portrait Signature",
      shortName: "Portrait",
      price: "150",
      originalPrice: "200",
      duration: "1h",
      icon: <Camera className="w-8 h-8" />,
      popular: false,
      gradient: "from-pink-500 to-rose-500",
      description: "Séance portrait artistique avec notre signature Miami moderne",
      includes: [
        "Consultation pré-séance (15min)",
        "5 photos HD retouchées professionnellement",
        "Éclairage professionnel multi-sources",
        "Ambiance personnalisée selon votre style",
        "Galerie privée en ligne (30 jours)",
        "Possibilité photos supplémentaires (+25€/photo)",
        "Conseils styling et posing inclus"
      ],
      process: [
        "Consultation téléphonique",
        "Préparation du studio",
        "Séance photo (1h)",
        "Sélection des meilleures prises",
        "Retouches professionnelles",
        "Livraison galerie (48-72h)"
      ],
      addOns: [
        { name: "Photos supplémentaires", price: 25, unit: "par photo" },
        { name: "Retouches avancées", price: 40, unit: "par photo" },
        { name: "Prints premium", price: 35, unit: "30x40cm" }
      ]
    },
    {
      id: 'corporate',
      name: "Corporate Deluxe",
      shortName: "Corporate",
      price: "300",
      originalPrice: "400",
      duration: "2h",
      icon: <Users className="w-8 h-8" />,
      popular: true,
      gradient: "from-purple-500 to-indigo-500",
      description: "Pack professionnel premium pour entreprises et dirigeants",
      includes: [
        "Consultation image de marque (30min)",
        "15 photos HD premium retouchées",
        "Portraits individuels et équipe",
        "Usage commercial illimité",
        "Livraison express 48h",
        "Formats multiples (LinkedIn, site web, print)",
        "Session styling professionnelle",
        "Backup cloud sécurisé (1 an)"
      ],
      process: [
        "Brief image de marque",
        "Planning des portraits",
        "Setup professionnel",
        "Séance corporate (2h)",
        "Sélection collaborative",
        "Retouches corporate",
        "Livraison multi-formats"
      ],
      addOns: [
        { name: "Vidéo portrait", price: 150, unit: "30 secondes" },
        { name: "Team building photo", price: 200, unit: "équipe" },
        { name: "Shooting on-site", price: 100, unit: "déplacement" }
      ]
    },
    {
      id: 'event',
      name: "Événement Miami",
      shortName: "Événement", 
      price: "500",
      originalPrice: "650",
      duration: "4h",
      icon: <Heart className="w-8 h-8" />,
      popular: false,
      gradient: "from-emerald-500 to-teal-500",
      description: "Couverture complète d'événements avec style Miami moderne",
      includes: [
        "Couverture événement complète (4h)",
        "100+ photos haute définition",
        "Reportage en temps réel",
        "Galerie en ligne illimitée",
        "Impressions premium offertes (10 photos)",
        "Backup sécurisé permanent",
        "Story Instagram en direct",
        "Livraison express 24h"
      ],
      process: [
        "Repérage des lieux",
        "Planning événement",
        "Couverture photo/vidéo",
        "Tri et sélection",
        "Retouches événement",
        "Galerie en ligne",
        "Impressions et livraison"
      ],
      addOns: [
        { name: "Heure supplémentaire", price: 80, unit: "par heure" },
        { name: "Vidéo highlights", price: 250, unit: "2-3 minutes" },
        { name: "Album premium", price: 180, unit: "30 pages" }
      ]
    },
    {
      id: 'creative',
      name: "Création Artistique",
      shortName: "Créatif",
      price: "400", 
      originalPrice: "550",
      duration: "3h",
      icon: <Zap className="w-8 h-8" />,
      popular: false,
      gradient: "from-orange-500 to-red-500",
      description: "Projet artistique sur-mesure avec concept créatif unique",
      includes: [
        "Conception créative collaborative",
        "Séance artistique (3h)",
        "20 photos d'art retouchées", 
        "Styling et maquillage inclus",
        "Décors et accessoires créatifs",
        "Post-production artistique avancée",
        "Prints d'art grand format inclus",
        "Shooting concept unique"
      ],
      process: [
        "Brainstorming créatif",
        "Mood board et concept",
        "Préparation artistique",
        "Réalisation créative",
        "Post-production artistique",
        "Finalisation des œuvres"
      ],
      addOns: [
        { name: "Maquillage artistique", price: 120, unit: "séance" },
        { name: "Décor sur-mesure", price: 200, unit: "création" },
        { name: "Tirage d'art", price: 80, unit: "50x70cm" }
      ]
    }
  ]

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "CEO, TechStart",
      image: "/images/testimonials/sophie.jpg",
      rating: 5,
      text: "Neversad Studio a complètement transformé notre image corporate. L'équipe est professionnelle et le résultat dépasse nos attentes !",
      service: "Corporate Deluxe"
    },
    {
      name: "Thomas Dubois", 
      role: "Photographe Indépendant",
      image: "/images/testimonials/thomas.jpg",
      rating: 5,
      text: "Une séance portrait exceptionnelle ! L'ambiance Miami et la qualité technique sont au rendez-vous. Je recommande vivement.",
      service: "Portrait Signature"
    },
    {
      name: "Marie & Pierre",
      role: "Futurs Mariés",
      image: "/images/testimonials/marie-pierre.jpg", 
      rating: 5,
      text: "Notre engagement photo était magique ! L'équipe a su capturer notre amour avec une esthétique moderne et élégante.",
      service: "Événement Miami"
    }
  ]

  const faqItems = [
    {
      question: "Combien de temps à l'avance dois-je réserver ?",
      answer: "Nous recommandons de réserver au moins 2 semaines à l'avance pour garantir votre créneau préféré. Pour les événements importants, 1 mois est idéal."
    },
    {
      question: "Puis-je voir les photos avant la retouche finale ?",
      answer: "Absolument ! Nous vous envoyons une galerie de sélection dans les 24h pour que vous puissiez choisir vos photos préférées avant la retouche professionnelle."
    },
    {
      question: "Que se passe-t-il si je ne suis pas satisfait du résultat ?",
      answer: "Votre satisfaction est notre priorité. Si vous n'êtes pas entièrement satisfait, nous organisons une nouvelle séance gratuite ou remboursons intégralement."
    },
    {
      question: "Puis-je utiliser les photos à des fins commerciales ?",
      answer: "Cela dépend du package choisi. Les formules Corporate et Événement incluent les droits commerciaux. Pour les autres, c'est disponible en option."
    },
    {
      question: "Proposez-vous des shootings en extérieur ?",
      answer: "Oui ! Nous nous déplaçons partout en Île-de-France. Des frais de déplacement peuvent s'appliquer selon la distance (gratuit dans Paris)."
    }
  ]

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

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
              NOS SERVICES
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-miami-pink-light max-w-3xl mx-auto mb-8"
            >
              Des prestations premium pensées pour révéler votre personnalité avec notre signature Miami moderne
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-miami-pink" />
                <span>500+ clients satisfaits</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-miami-pink" />
                <span>Note moyenne 4.9/5</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-miami-pink" />
                <span>Livraison 24-72h</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 mb-16 sm:mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative group ${service.popular ? 'lg:transform lg:scale-105' : ''}`}
                >
                  {/* Badge populaire */}
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ POPULAIRE
                      </div>
                    </div>
                  )}
                  
                  {/* Service Card */}
                  <div className={`relative rounded-3xl p-1 transition-all duration-500 group-hover:scale-105 ${
                    service.popular 
                      ? 'bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600' 
                      : `bg-gradient-to-br ${service.gradient}`
                  }`}>
                    <div className="h-full bg-black/95 rounded-3xl p-8 relative overflow-hidden">
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                            <div className="text-white">{service.icon}</div>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{service.name}</h3>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Prix */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-4xl font-black bg-gradient-to-r from-miami-pink to-miami-pink-light bg-clip-text text-transparent">
                            {service.price}€
                          </span>
                          <span className="text-gray-500 line-through text-lg">{service.originalPrice}€</span>
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                            -25%
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Euro className="w-4 h-4" />
                            Devis gratuit
                          </span>
                        </div>
                      </div>

                      {/* Inclus */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-4">✨ Inclus dans cette formule</h4>
                        <ul className="space-y-3">
                          {service.includes.slice(0, 4).map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                              <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mt-0.5 flex-shrink-0`}>
                                <Check className="w-3 h-3 text-white" />
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                          {service.includes.length > 4 && (
                            <li className="text-miami-pink text-sm font-medium">
                              + {service.includes.length - 4} autres avantages...
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="space-y-3">
                        <MiamiButton 
                          variant={service.popular ? "primary" : "secondary"}
                          className="w-full group"
                          onClick={() => setSelectedPackage(service.id)}
                          icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                        >
                          Réserver maintenant
                        </MiamiButton>
                        <button 
                          className="w-full py-3 text-miami-pink hover:text-white transition-colors text-sm font-medium"
                          onClick={() => setSelectedPackage(selectedPackage === service.id ? null : service.id)}
                        >
                          {selectedPackage === service.id ? 'Masquer les détails' : 'Voir tous les détails'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Détails expandables */}
                  <AnimatePresence>
                    {selectedPackage === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 bg-miami-dark/30 backdrop-blur-sm rounded-2xl p-6 border border-miami-pink/20"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Processus */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">📋 Notre processus</h4>
                            <ol className="space-y-2">
                              {service.process.map((step, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                  <div className="w-6 h-6 bg-miami-pink/20 text-miami-pink rounded-full flex items-center justify-center text-xs font-bold">
                                    {i + 1}
                                  </div>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>

                          {/* Options supplémentaires */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">🎯 Options supplémentaires</h4>
                            <ul className="space-y-2">
                              {service.addOns.map((addon, i) => (
                                <li key={i} className="flex items-center justify-between text-gray-300 text-sm">
                                  <span>{addon.name}</span>
                                  <span className="text-miami-pink font-medium">+{addon.price}€ {addon.unit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="px-4 mb-16 sm:mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ce que disent nos <span className="text-miami-pink">clients</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Plus de 500 clients nous font confiance pour leurs projets photo
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-miami-dark/30 backdrop-blur-sm rounded-2xl p-6 border border-miami-pink/20 hover:border-miami-pink/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">"{testimonial.text}"</p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-miami-pink to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{testimonial.name}</div>
                      <div className="text-gray-400 text-xs">{testimonial.role}</div>
                      <div className="text-miami-pink text-xs">{testimonial.service}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Questions <span className="text-miami-pink">fréquentes</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tout ce que vous devez savoir sur nos services
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-miami-dark/30 backdrop-blur-sm rounded-2xl border border-miami-pink/20 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-miami-pink/5 transition-colors"
                  >
                    <h3 className="text-white font-medium">{item.question}</h3>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-miami-pink" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl p-1 bg-gradient-to-r from-miami-pink via-purple-500 to-blue-500"
            >
              <div className="bg-black/95 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-miami-grid opacity-5"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.3 }}
                    className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-miami-pink to-purple-500 rounded-3xl flex items-center justify-center"
                  >
                    <Zap className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-3xl sm:text-4xl font-black mb-6 bg-gradient-to-r from-miami-pink to-purple-500 bg-clip-text text-transparent">
                    Prêt à créer ensemble ?
                  </h3>
                  
                  <p className="text-lg text-miami-blue-light mb-8 max-w-2xl mx-auto leading-relaxed">
                    Chaque projet est unique. Discutons de votre vision et créons 
                    une expérience photographique qui vous ressemble.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                    <MiamiButton variant="primary" size="lg" className="group">
                      <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Devis gratuit en 24h
                    </MiamiButton>
                    <MiamiButton variant="ghost" size="lg">
                      Voir nos réalisations
                    </MiamiButton>
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="text-sm text-gray-400">
                      <span className="text-miami-pink font-semibold">✓</span> Devis sous 24h
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="text-miami-pink font-semibold">✓</span> Satisfaction garantie
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="text-miami-pink font-semibold">✓</span> Paiement sécurisé
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}