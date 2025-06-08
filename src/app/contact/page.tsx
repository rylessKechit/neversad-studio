'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Send, Calendar, MessageSquare, Star, CheckCircle, AlertCircle } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import MiamiButton from '@/components/ui/MiamiButton'

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    budget: '',
    message: ''
  })
  const [formStep, setFormStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    setMounted(true)
  }, [])

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      description: "Lun-Ven 9h-18h, Sam 10h-16h",
      color: "from-green-500 to-emerald-500",
      href: "tel:+33123456789",
      available: true
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@neversadstudio.com",
      description: "Réponse sous 24h garantie",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:hello@neversadstudio.com",
      available: true
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+33 6 12 34 56 78",
      description: "Réponse immédiate 9h-19h",
      color: "from-green-400 to-green-600",
      href: "https://wa.me/33612345678",
      available: true
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Consultation",
      value: "Gratuite 15min",
      description: "Visio ou téléphone",
      color: "from-purple-500 to-pink-500",
      href: "#booking",
      available: true
    }
  ]

  const socialLinks = [
    { 
      icon: <Instagram className="w-6 h-6" />, 
      label: "Instagram",
      handle: "@neversadstudio",
      followers: "12.5K",
      href: "https://instagram.com/neversadstudio",
      color: "from-pink-500 to-purple-500"
    },
    { 
      icon: <Facebook className="w-6 h-6" />, 
      label: "Facebook",
      handle: "Neversad Studio",
      followers: "8.2K",
      href: "https://facebook.com/neversadstudio",
      color: "from-blue-500 to-indigo-500"
    },
    { 
      icon: <Youtube className="w-6 h-6" />, 
      label: "YouTube",
      handle: "Neversad Studio",
      followers: "5.1K",
      href: "https://youtube.com/neversadstudio",
      color: "from-red-500 to-pink-500"
    }
  ]

  const services = [
    { id: 'portrait', name: 'Portrait', price: '150€' },
    { id: 'corporate', name: 'Corporate', price: '300€' },
    { id: 'event', name: 'Événement', price: '500€' },
    { id: 'creative', name: 'Création Artistique', price: '400€' },
    { id: 'other', name: 'Autre (préciser)', price: 'Sur devis' }
  ]

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ]

  const budgetRanges = [
    '100€ - 200€',
    '200€ - 500€', 
    '500€ - 1000€',
    '1000€+'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1)
  }

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      // Reset après 3 secondes
      setTimeout(() => {
        setSubmitStatus('idle')
        setFormStep(1)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          budget: '',
          message: ''
        })
      }, 3000)
    }, 2000)
  }

  const isStepValid = () => {
    switch (formStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email
      case 2:
        return formData.service && formData.date
      case 3:
        return formData.message.length > 10
      default:
        return false
    }
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
              CONTACTEZ-NOUS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-miami-pink-light max-w-3xl mx-auto mb-8"
            >
              Prêt à capturer vos moments les plus précieux ? Parlons de votre projet !
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Satisfaction garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-miami-pink" />
                <span>Consultation gratuite</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Méthodes de contact */}
        <section className="px-4 mb-16 sm:mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Comment nous <span className="text-miami-pink">joindre</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choisissez le moyen de contact qui vous convient le mieux
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-miami-dark/30 backdrop-blur-sm rounded-2xl p-6 border border-miami-pink/20 hover:border-miami-pink/40 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
                    <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <div className="text-white">{method.icon}</div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                    <p className="text-miami-pink font-medium mb-2">{method.value}</p>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                    
                    {method.available && (
                      <div className="absolute top-4 right-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Formulaire de contact multi-étapes */}
        <section className="px-4 mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Demande de <span className="text-miami-pink">devis</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Remplissez ce formulaire pour recevoir votre devis personnalisé gratuit
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-miami-pink/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-miami-pink/20">
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                          formStep >= step 
                            ? 'bg-gradient-to-br from-miami-pink to-purple-500 text-white' 
                            : 'bg-gray-700 text-gray-400'
                        }`}>
                          {submitStatus === 'success' && step <= 3 ? '✓' : step}
                        </div>
                        {step < 3 && (
                          <div className={`w-12 sm:w-20 h-1 mx-2 transition-all ${
                            formStep > step ? 'bg-miami-pink' : 'bg-gray-700'
                          }`}></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-sm text-gray-400">
                    Étape {formStep} sur 3
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {/* Étape 1: Informations personnelles */}
                    {formStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold text-white mb-2">Vos informations</h3>
                          <p className="text-gray-400 text-sm">Pour que nous puissions vous recontacter</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-miami-pink-light text-sm font-medium mb-2">
                              Prénom *
                            </label>
                            <input
                              type="text"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              className="w-full bg-miami-dark/50 border border-miami-pink/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all"
                              placeholder="Votre prénom"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-miami-pink-light text-sm font-medium mb-2">
                              Nom *
                            </label>
                            <input
                              type="text"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              className="w-full bg-miami-dark/50 border border-miami-pink/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all"
                              placeholder="Votre nom"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-miami-pink-light text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full bg-miami-dark/50 border border-miami-pink/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all"
                            placeholder="votre@email.com"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-miami-pink-light text-sm font-medium mb-2">
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full bg-miami-dark/50 border border-miami-pink/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all"
                            placeholder="+33 6 12 34 56 78"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Étape 2: Détails du projet */}
                    {formStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold text-white mb-2">Votre projet</h3>
                          <p className="text-gray-400 text-sm">Parlez-nous de ce que vous envisagez</p>
                        </div>

                        <div>
                          <label className="block text-miami-pink-light text-sm font-medium mb-3">
                            Type de séance *
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {services.map((service) => (
                              <label
                                key={service.id}
                                className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${
                                  formData.service === service.id
                                    ? 'border-miami-pink bg-miami-pink/10'
                                    : 'border-gray-700 hover:border-miami-pink/50'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="service"
                                  value={service.id}
                                  checked={formData.service === service.id}
                                  onChange={(e) => handleInputChange('service', e.target.value)}
                                  className="sr-only"
                                />
                                <div className="flex items-center justify-between">
                                  <span className="text-white font-medium">{service.name}</span>
                                  <span className="text-miami-pink text-sm">{service.price}</span>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-miami-pink-light text-sm font-medium mb-2">
                              Date souhaitée *
                            </label>
                            <input
                              type="date"
                              value={formData.date}
                              onChange={(e) => handleInputChange('date', e.target.value)}
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full bg-miami-dark/50 border border-miami-pink/20 rounded-xl px-4 py-3 text-white focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-miami-pink-light text-sm font-medium mb-2">
                              Créneau préféré
                            </label>
                            <select
                              value={formData.time}
                              onChange={(e) => handleInputChange('time', e.target.value)}
                              className="w-full bg-miami-dark/50 border border-miami-pink/20 rounded-xl px-4 py-3 text-white focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all"
                            >
                              <option value="">Sélectionner</option>
                              {timeSlots.map((time) => (
                                <option key={time} value={time}>{time}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-miami-pink-light text-sm font-medium mb-2">
                            Budget approximatif
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => handleInputChange('budget', e.target.value)}
                            className="w-full bg-miami-dark/50 border border-miami-pink/20 rounded-xl px-4 py-3 text-white focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all"
                          >
                            <option value="">Sélectionner une fourchette</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {/* Étape 3: Message et finalisation */}
                    {formStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold text-white mb-2">Votre message</h3>
                          <p className="text-gray-400 text-sm">Décrivez-nous votre vision et vos attentes</p>
                        </div>

                        <div>
                          <label className="block text-miami-pink-light text-sm font-medium mb-2">
                            Décrivez votre projet *
                          </label>
                          <textarea
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            rows={6}
                            className="w-full bg-miami-dark/50 border border-miami-pink/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all resize-none"
                            placeholder="Parlez-nous de votre projet, de vos attentes, du style recherché, du nombre de personnes, du lieu souhaité..."
                            required
                            minLength={10}
                          />
                          <div className="text-right text-xs text-gray-400 mt-1">
                            {formData.message.length}/500 caractères
                          </div>
                        </div>

                        {/* Récapitulatif */}
                        <div className="bg-miami-dark/30 rounded-xl p-4 border border-miami-pink/20">
                          <h4 className="text-white font-medium mb-3">📋 Récapitulatif de votre demande</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Contact:</span>
                              <span className="text-white">{formData.firstName} {formData.lastName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Service:</span>
                              <span className="text-miami-pink">
                                {services.find(s => s.id === formData.service)?.name}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Date:</span>
                              <span className="text-white">{formData.date}</span>
                            </div>
                            {formData.budget && (
                              <div className="flex justify-between">
                                <span className="text-gray-400">Budget:</span>
                                <span className="text-white">{formData.budget}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation du formulaire */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-700">
                    <div>
                      {formStep > 1 && (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                        >
                          ← Retour
                        </button>
                      )}
                    </div>

                    <div className="flex gap-3">
                      {formStep < 3 ? (
                        <MiamiButton
                          type="button"
                          onClick={nextStep}
                          disabled={!isStepValid()}
                          variant="primary"
                        >
                          Continuer →
                        </MiamiButton>
                      ) : (
                        <MiamiButton
                          type="submit"
                          disabled={!isStepValid() || isSubmitting}
                          variant="primary"
                          className="relative"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"></div>
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Envoyer ma demande
                            </>
                          )}
                        </MiamiButton>
                      )}
                    </div>
                  </div>
                </form>

                {/* Message de confirmation */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute inset-0 bg-black/95 backdrop-blur-sm rounded-3xl flex items-center justify-center"
                    >
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                          <CheckCircle className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-4">Message envoyé !</h3>
                        <p className="text-gray-400 mb-6 max-w-md mx-auto">
                          Merci pour votre demande. Nous vous recontacterons sous 24h avec votre devis personnalisé.
                        </p>
                        <div className="text-miami-pink text-sm">
                          ✓ Email de confirmation envoyé
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Réseaux sociaux */}
        <section className="px-4 mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Suivez nos <span className="text-miami-pink">créations</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Découvrez nos dernières réalisations et coulisses sur nos réseaux sociaux
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${social.color} bg-opacity-10 border border-gray-800 hover:border-miami-pink/30 transition-all duration-300 group-hover:transform group-hover:scale-105`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center`}>
                        {social.icon}
                      </div>
                      <div>
                        <div className="text-white font-medium">{social.label}</div>
                        <div className="text-gray-400 text-sm">{social.handle}</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{social.followers}</div>
                      <div className="text-gray-400 text-sm">Followers</div>
                    </div>

                    <div className="mt-4 text-center">
                      <span className="text-miami-pink text-sm font-medium group-hover:text-white transition-colors">
                        Suivre →
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Informations pratiques */}
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Localisation */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-miami-dark/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-miami-pink/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Notre localisation</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-miami-pink font-medium mb-2">📍 Adresse</h4>
                    <p className="text-gray-400">123 Rue de la Photo</p>
                    <p className="text-gray-400">75015 Paris, France</p>
                  </div>
                  
                  <div>
                    <h4 className="text-miami-pink font-medium mb-2">🚇 Accès</h4>
                    <p className="text-gray-400">Métro Boucicaut (Ligne 8)</p>
                    <p className="text-gray-400">Bus 39, 70, 88</p>
                  </div>

                  <div>
                    <h4 className="text-miami-pink font-medium mb-2">🚗 Parking</h4>
                    <p className="text-gray-400">Places gratuites devant le studio</p>
                    <p className="text-gray-400">Parking public à 100m</p>
                  </div>
                </div>

                <MiamiButton variant="outline" className="w-full">
                  Itinéraire Google Maps
                </MiamiButton>
              </motion.div>

              {/* Horaires et infos */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-miami-dark/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-miami-pink/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Horaires & infos</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-miami-pink font-medium mb-3">🕒 Horaires d'ouverture</h4>
                    <div className="space-y-2 text-gray-400 text-sm">
                      <div className="flex justify-between">
                        <span>Lundi - Vendredi</span>
                        <span className="text-white">9h - 18h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi</span>
                        <span className="text-white">10h - 16h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dimanche</span>
                        <span className="text-miami-pink">Sur rendez-vous</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-miami-pink font-medium mb-3">ℹ️ Informations pratiques</h4>
                    <div className="space-y-2 text-gray-400 text-sm">
                      <div>✓ Wifi gratuit haut débit</div>
                      <div>✓ Climatisation / Chauffage</div>
                      <div>✓ Accès PMR (handicapés)</div>
                      <div>✓ Vestiaire et espace détente</div>
                      <div>✓ Café et rafraîchissements</div>
                      <div>✓ Matériel de maquillage disponible</div>
                    </div>
                  </div>

                  <div className="bg-miami-pink/10 rounded-xl p-4 border border-miami-pink/20">
                    <div className="text-miami-pink text-sm font-medium mb-2">
                      ⚡ Urgence ou week-end ?
                    </div>
                    <div className="text-gray-400 text-sm">
                      Contactez-nous sur WhatsApp pour les demandes urgentes. 
                      Supplément de 30% pour les shootings week-end.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}