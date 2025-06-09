'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Send } from 'lucide-react'
import MiamiButton from '@/components/ui/MiamiButton'

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Adresse",
      value: "123 Rue de la Photo, 75015 Paris",
      gradient: "from-miami-pink to-miami-pink-light" // Rose uniquement
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      gradient: "from-miami-cyan to-miami-cyan-light" // Cyan uniquement
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      value: "hello@neversadstudio.com",
      gradient: "from-miami-pink to-miami-cyan" // Dégradé Rose vers Cyan
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Horaires",
      value: "Lun-Ven: 9h-18h | Sam: 10h-16h",
      gradient: "from-miami-cyan to-miami-pink" // Dégradé Cyan vers Rose
    }
  ]

  const socialLinks = [
    { 
      icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />, 
      label: "Instagram",
      href: "https://instagram.com/neversadstudio",
      gradient: "from-miami-pink to-miami-pink-light",
      followers: "12.5K"
    },
    { 
      icon: <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />, 
      label: "Facebook",
      href: "https://facebook.com/neversadstudio",
      gradient: "from-miami-cyan to-miami-cyan-light",
      followers: "8.2K"
    },
    { 
      icon: <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />, 
      label: "YouTube",
      href: "https://youtube.com/neversadstudio",
      gradient: "from-miami-pink to-miami-cyan",
      followers: "5.1K"
    }
  ]

  // Positions fixes pour les particules - Rose et Cyan uniquement
  const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 30
  const particlePositions = Array.from({ length: particleCount }, (_, i) => ({
    left: `${8 + (i * 29) % 84}%`,
    top: `${12 + (i * 19) % 76}%`,
    delay: i * 0.2,
    duration: 3 + (i % 2),
    color: i % 2 === 0 ? 'bg-miami-pink' : 'bg-miami-cyan'
  }))

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden bg-dark-950">
      {/* 🌙 Background avec dégradé dark */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
        <div className="absolute inset-0 bg-miami-grid-dark opacity-5"></div>
        {mounted && (
          <div className="absolute inset-0 opacity-10 sm:opacity-15">
            {particlePositions.map((particle, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 ${particle.color} rounded-full`}
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
        {/* 📍 Header dark */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h2 
            className="font-display-dark text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 text-miami-gradient text-glow-miami"
          >
            CONTACT
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto px-4">
            Prêt à capturer vos moments les plus précieux ? Contactez-nous pour discuter de votre projet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* 📝 Informations de contact dark */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                Restons en <span className="text-miami-gradient">contact</span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 sm:space-x-4 group"
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">{info.title}</h4>
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed break-words">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 📱 Réseaux sociaux dark */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Suivez-nous</h4>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`group p-3 sm:p-4 rounded-xl sm:rounded-2xl card-dark hover:border-miami-pink/30 transition-all duration-300 hover:transform hover:scale-105`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        {social.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-white font-medium text-sm sm:text-base">{social.label}</div>
                        <div className="text-neutral-400 text-xs sm:text-sm">{social.followers} followers</div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 📋 Formulaire de contact dark */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-miami-pink to-miami-cyan rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
              <div className="relative glass-dark-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-800/50">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Envoyez-nous un message</h3>
                
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-neutral-400 text-xs sm:text-sm font-medium mb-2">
                        Prénom
                      </label>
                      <input
                        type="text"
                        className="input-dark"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-400 text-xs sm:text-sm font-medium mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        className="input-dark"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-neutral-400 text-xs sm:text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="input-dark"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-neutral-400 text-xs sm:text-sm font-medium mb-2">
                      Type de séance
                    </label>
                    <select className="input-dark">
                      <option value="">Sélectionnez une option</option>
                      <option value="portrait">Portrait</option>
                      <option value="corporate">Corporate</option>
                      <option value="event">Événement</option>
                      <option value="creative">Créatif</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-neutral-400 text-xs sm:text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="input-dark resize-none"
                      placeholder="Parlez-nous de votre projet..."
                    ></textarea>
                  </div>
                  
                  <MiamiButton 
                    variant="primary" 
                    size="lg" 
                    className="w-full group"
                    icon={<Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />}
                  >
                    Envoyer le message
                  </MiamiButton>
                </form>
                
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-miami-pink/10 rounded-xl border border-miami-pink/20">
                  <p className="text-neutral-400 text-xs sm:text-sm text-center">
                    📱 <strong className="text-miami-pink">Réponse rapide :</strong> Nous vous répondons sous 24h !
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 🎯 Call to action final dark */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <div className="relative inline-block w-full max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-miami-pink to-miami-cyan rounded-xl sm:rounded-2xl blur-lg opacity-50"></div>
            <div className="relative glass-dark-strong rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-neutral-800/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Prêt à commencer votre projet ?
              </h3>
              <p className="text-neutral-400 mb-4 sm:mb-6 text-sm sm:text-base px-4">
                Réservez votre consultation gratuite de 15 minutes pour discuter de vos besoins
              </p>
              <MiamiButton 
                variant="primary" 
                size="lg" 
                className="w-full sm:w-auto"
              >
                Réserver ma consultation gratuite
              </MiamiButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}