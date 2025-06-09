'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import MiamiButton from '@/components/ui/MiamiButton'

interface ContactFormProps {
  variant?: 'full' | 'compact'
  title?: string
  description?: string
  className?: string
}

export default function ContactForm({ 
  variant = 'full', 
  title = "Demande de devis",
  description = "Remplissez ce formulaire pour recevoir votre devis personnalisé gratuit",
  className = ""
}: ContactFormProps) {
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

  const maxSteps = variant === 'compact' ? 2 : 3

  return (
    <div className={`relative ${className}`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          {title.split(' ').map((word, index) => 
            word.toLowerCase() === 'devis' || word.toLowerCase() === 'contact' ? (
              <span key={index} className="bg-gradient-to-r from-miami-pink to-miami-cyan bg-clip-text text-transparent">
                {word}
              </span>
            ) : (
              <span key={index}> {word}</span>
            )
          )}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          {description}
        </p>
      </motion.div>

      {/* Form Container */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-miami-pink/10 to-miami-cyan/10 rounded-3xl blur-xl"></div>
        
        <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-miami-pink/20">
          {/* Progress bar */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-between mb-4">
              {Array.from({ length: maxSteps }, (_, i) => i + 1).map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                    formStep >= step 
                      ? 'bg-gradient-to-br from-miami-pink to-miami-cyan text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {submitStatus === 'success' && step <= maxSteps ? '✓' : step}
                  </div>
                  {step < maxSteps && (
                    <div className={`w-8 sm:w-12 lg:w-20 h-1 mx-1 sm:mx-2 transition-all ${
                      formStep > step ? 'bg-miami-cyan' : 'bg-gray-700'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-xs sm:text-sm text-gray-400">
              Étape {formStep} sur {maxSteps}
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
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Vos informations</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Pour que nous puissions vous recontacter</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-neutral-400 text-xs sm:text-sm font-medium mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full bg-dark-700/50 border border-neutral-700 rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-white placeholder-neutral-400 focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all duration-300 text-sm sm:text-base"
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-400 text-xs sm:text-sm font-medium mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full bg-dark-700/50 border border-neutral-700 rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-white placeholder-neutral-400 focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all duration-300 text-sm sm:text-base"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-400 text-xs sm:text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-dark-700/50 border border-neutral-700 rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-white placeholder-neutral-400 focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>

                  {variant === 'full' && (
                    <div>
                      <label className="block text-neutral-400 text-xs sm:text-sm font-medium mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full bg-dark-700/50 border border-neutral-700 rounded-xl px-3 py-3 sm:px-4 sm:py-4 text-white placeholder-neutral-400 focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all duration-300 text-sm sm:text-base"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                  )}
                </motion.div>
              )}

              {/* Étape 2: Projet (ou Message si compact) */}
              {formStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {variant === 'compact' ? 'Votre message' : 'Votre projet'}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {variant === 'compact' ? 'Décrivez-nous votre vision' : 'Parlez-nous de ce que vous envisagez'}
                    </p>
                  </div>

                  {variant === 'full' ? (
                    <>
                      <div>
                        <label className="block text-miami-pink-light text-xs sm:text-sm font-medium mb-3">
                          Type de séance *
                        </label>
                        <div className="grid grid-cols-1 gap-2 sm:gap-3">
                          {services.map((service) => (
                            <label
                              key={service.id}
                              className={`relative cursor-pointer rounded-xl border-2 p-3 sm:p-4 transition-all ${
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
                                <span className="text-white font-medium text-sm sm:text-base">{service.name}</span>
                                <span className="text-miami-cyan text-xs sm:text-sm">{service.price}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-miami-pink-light text-xs sm:text-sm font-medium mb-2">
                            Date souhaitée *
                          </label>
                          <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => handleInputChange('date', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full bg-miami-dark/50 border border-miami-pink/20 rounded-xl px-3 py-3 sm:px-4 sm:py-3 text-white focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all text-sm sm:text-base"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-miami-pink-light text-xs sm:text-sm font-medium mb-2">
                            Créneau préféré
                          </label>
                          <select
                            value={formData.time}
                            onChange={(e) => handleInputChange('time', e.target.value)}
                            className="w-full bg-miami-dark/50 border border-miami-pink/20 rounded-xl px-3 py-3 sm:px-4 sm:py-3 text-white focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all text-sm sm:text-base"
                          >
                            <option value="">Sélectionner</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Version compacte : message directement à l'étape 2
                    <div>
                      <label className="block text-miami-pink-light text-xs sm:text-sm font-medium mb-2">
                        Décrivez votre projet *
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={4}
                        className="w-full bg-miami-dark/50 border border-miami-pink/20 rounded-xl px-3 py-3 sm:px-4 sm:py-3 text-white placeholder-gray-400 focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all resize-none text-sm sm:text-base"
                        placeholder="Parlez-nous de votre projet, de vos attentes, du style recherché..."
                        required
                        minLength={10}
                      />
                      <div className="text-right text-xs text-gray-400 mt-1">
                        {formData.message.length}/200 caractères
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Étape 3: Message (seulement en mode full) */}
              {formStep === 3 && variant === 'full' && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Votre message</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Décrivez-nous votre vision et vos attentes</p>
                  </div>

                  <div>
                    <label className="block text-miami-pink-light text-xs sm:text-sm font-medium mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      className="w-full bg-miami-dark/50 border border-miami-pink/20 rounded-xl px-3 py-3 sm:px-4 sm:py-3 text-white placeholder-gray-400 focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all resize-none text-sm sm:text-base"
                      placeholder="Parlez-nous de votre projet, de vos attentes, du style recherché, du nombre de personnes, du lieu souhaité..."
                      required
                      minLength={10}
                    />
                    <div className="text-right text-xs text-gray-400 mt-1">
                      {formData.message.length}/500 caractères
                    </div>
                  </div>

                  {/* Récapitulatif */}
                  <div className="bg-miami-dark/30 rounded-xl p-3 sm:p-4 border border-miami-pink/20">
                    <h4 className="text-white font-medium mb-3 text-sm sm:text-base">📋 Récapitulatif de votre demande</h4>
                    <div className="space-y-2 text-xs sm:text-sm">
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
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation du formulaire */}
            <div className="flex items-center justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
              <div>
                {formStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm sm:text-base"
                  >
                    ← Retour
                  </button>
                )}
              </div>

              <div className="flex gap-2 sm:gap-3">
                {formStep < maxSteps ? (
                  <MiamiButton
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    variant="primary"
                    size="sm"
                  >
                    Continuer →
                  </MiamiButton>
                ) : (
                  <MiamiButton
                    type="submit"
                    disabled={!isStepValid() || isSubmitting}
                    variant="primary"
                    size="sm"
                    className="relative"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white rounded-full mr-2"></div>
                        Envoi...
                      </>
                    ) : (
                      <>
                        <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Envoyer
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
                className="absolute inset-0 bg-black/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl flex items-center justify-center"
              >
                <div className="text-center p-4 sm:p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-miami-pink to-miami-cyan rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  >
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">Message envoyé !</h3>
                  <p className="text-gray-400 mb-4 sm:mb-6 max-w-sm mx-auto text-sm sm:text-base">
                    Merci pour votre demande. Nous vous recontacterons sous 24h.
                  </p>
                  <div className="text-miami-pink text-xs sm:text-sm">
                    ✓ Email de confirmation envoyé
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}