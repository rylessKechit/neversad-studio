'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Send } from 'lucide-react'
import MiamiButton from '@/components/ui/MiamiButton'

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  // Fix hydration issue
  useEffect(() => {
    setMounted(true)
  }, [])

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      value: "123 Rue de la Photo, 75015 Paris",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@neversadstudio.com",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      value: "Lun-Ven: 9h-18h | Sam: 10h-16h",
      color: "from-green-500 to-blue-500"
    }
  ]

  const socialLinks = [
    { 
      icon: <Instagram className="w-6 h-6" />, 
      label: "Instagram",
      href: "https://instagram.com/neversadstudio",
      color: "from-pink-500 to-purple-500",
      followers: "12.5K"
    },
    { 
      icon: <Facebook className="w-6 h-6" />, 
      label: "Facebook",
      href: "https://facebook.com/neversadstudio",
      color: "from-blue-500 to-indigo-500",
      followers: "8.2K"
    },
    { 
      icon: <Youtube className="w-6 h-6" />, 
      label: "YouTube",
      href: "https://youtube.com/neversadstudio",
      color: "from-red-500 to-pink-500",
      followers: "5.1K"
    }
  ]

  // Positions fixes pour les particules
  const particlePositions = Array.from({ length: 30 }, (_, i) => ({
    left: `${8 + (i * 29) % 84}%`,
    top: `${12 + (i * 19) % 76}%`,
    delay: i * 0.2,
    duration: 3 + (i % 2)
  }))

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background avec dégradé */}
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
            CONTACT
          </motion.h2>
          <p className="text-xl text-miami-blue-light max-w-3xl mx-auto">
            Prêt à capturer vos moments les plus précieux ? Contactez-nous pour discuter de votre projet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Restons en <span className="text-miami-pink">contact</span>
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-miami-pink-light">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Suivez-nous</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`group p-4 rounded-2xl bg-gradient-to-br ${social.color} bg-opacity-10 border border-gray-800 hover:border-miami-pink/30 transition-all duration-300 hover:transform hover:scale-105`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center`}>
                        {social.icon}
                      </div>
                      <div>
                        <div className="text-white font-medium">{social.label}</div>
                        <div className="text-gray-400 text-sm">{social.followers} followers</div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-miami-pink to-purple-500 rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-miami-pink/20">
                <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-miami-pink-light text-sm font-medium mb-2">
                        Prénom
                      </label>
                      <input
                        type="text"
                        className="input-miami w-full"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-miami-pink-light text-sm font-medium mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        className="input-miami w-full"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-miami-pink-light text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="input-miami w-full"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-miami-pink-light text-sm font-medium mb-2">
                      Type de séance
                    </label>
                    <select className="input-miami w-full">
                      <option value="">Sélectionnez une option</option>
                      <option value="portrait">Portrait</option>
                      <option value="corporate">Corporate</option>
                      <option value="event">Événement</option>
                      <option value="creative">Créatif</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-miami-pink-light text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="input-miami w-full resize-none"
                      placeholder="Parlez-nous de votre projet..."
                    ></textarea>
                  </div>
                  
                  <MiamiButton variant="primary" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Envoyer le message
                  </MiamiButton>
                </form>
                
                <div className="mt-6 p-4 bg-miami-pink/10 rounded-xl border border-miami-pink/20">
                  <p className="text-miami-pink-light text-sm text-center">
                    📱 <strong>Réponse rapide :</strong> Nous vous répondons sous 24h !
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to action final */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-miami-pink to-purple-500 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-8 border border-miami-pink/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Prêt à commencer votre projet ?
              </h3>
              <p className="text-miami-pink-light mb-6">
                Réservez votre consultation gratuite de 15 minutes pour discuter de vos besoins
              </p>
              <MiamiButton variant="primary" size="lg">
                Réserver ma consultation gratuite
              </MiamiButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}