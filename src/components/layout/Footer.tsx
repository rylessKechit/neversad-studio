'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera, Instagram, Facebook, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks = [
    { 
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />, 
      href: "https://instagram.com", 
      gradient: "from-miami-pink to-miami-pink-light" // Rose uniquement
    },
    { 
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />, 
      href: "https://facebook.com", 
      gradient: "from-miami-cyan to-miami-cyan-light" // Cyan uniquement
    },
    { 
      icon: <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />, 
      href: "https://youtube.com", 
      gradient: "from-miami-pink to-miami-cyan" // Dégradé Rose vers Cyan
    }
  ]

  const quickLinks = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" }
  ]

  const contactInfo = [
    { 
      icon: <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />, 
      text: "123 Rue de la Photo, 75015 Paris" 
    },
    { 
      icon: <Phone className="w-3 h-3 sm:w-4 sm:h-4" />, 
      text: "+33 1 23 45 67 89" 
    },
    { 
      icon: <Mail className="w-3 h-3 sm:w-4 sm:h-4" />, 
      text: "hello@neversadstudio.com" 
    }
  ]

  // Positions fixes pour éviter l'hydration mismatch - Rose et Cyan uniquement
  const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20
  const particlePositions = Array.from({ length: particleCount }, (_, i) => ({
    left: `${10 + (i * 25) % 80}%`,
    top: `${5 + (i * 31) % 90}%`,
    delay: i * 0.1,
    duration: 3 + (i % 2),
    color: i % 2 === 0 ? 'bg-miami-pink' : 'bg-miami-cyan'
  }))

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-dark-950 border-t border-miami-pink/10 overflow-hidden">
      {/* 🌙 Background effects dark */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
        <div className="absolute inset-0 bg-miami-grid-dark opacity-5"></div>
        {mounted && (
          <div className="absolute inset-0 opacity-5 sm:opacity-10">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* 🎯 Logo & Description dark */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-miami-pink to-miami-cyan rounded-xl flex items-center justify-center shadow-miami-dark flex-shrink-0 overflow-hidden">
                {/* 🎯 REMPLACEZ PAR VOTRE LOGO */}
                <img 
                  src="images/logo/neversad-logo.png" 
                  alt="Neversad Studio Logo" 
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
                <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white hidden" />
              </div>
              <div className="font-display-dark">
                <div className="text-xl sm:text-2xl font-black text-glow-miami">
                  NEVER<span className="text-miami-gradient">SAD</span>
                </div>
                <div className="text-xs text-miami-cyan tracking-widest">STUDIO</div>
              </div>
            </div>
            
            <p className="text-neutral-400 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Studio photo premium spécialisé dans les portraits, la mode et les événements. 
              Nous capturons vos moments avec une esthétique Miami moderne unique.
            </p>

            {/* 📱 Social Links dark */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 📝 Quick Links dark */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="sm:col-span-1 lg:col-span-1"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-neutral-400 hover:text-miami-pink transition-colors duration-300 flex items-center group text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }
                    }}
                  >
                    <span className="w-1 h-1 bg-miami-cyan rounded-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"></span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 📞 Contact Info dark */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="sm:col-span-1 lg:col-span-1"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-miami-pink/20 rounded-lg flex items-center justify-center text-miami-pink flex-shrink-0 mt-0.5">
                    {info.icon}
                  </div>
                  <span className="text-neutral-400 text-xs sm:text-sm leading-relaxed break-words">{info.text}</span>
                </li>
              ))}
            </ul>

            {/* ⏰ Horaires dark */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-miami-pink/10 rounded-xl border border-miami-pink/20">
              <h4 className="text-miami-pink font-semibold mb-2 text-sm sm:text-base">Horaires d'ouverture</h4>
              <div className="text-xs sm:text-sm text-neutral-400 space-y-1">
                <div>Lun - Ven: 9h - 18h</div>
                <div>Samedi: 10h - 16h</div>
                <div>Dimanche: Sur RDV</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 📋 Bottom Bar dark */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-miami-pink/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-neutral-400 text-xs sm:text-sm text-center md:text-left">
              <span>© 2024 Neversad Studio. Fait avec</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-miami-pink flex-shrink-0" />
              </motion.div>
              <span>à Paris</span>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm text-neutral-400">
              <motion.a
                href="/mentions-legales"
                className="hover:text-miami-pink transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Mentions légales
              </motion.a>
              <motion.a
                href="/confidentialite"
                className="hover:text-miami-cyan transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Confidentialité
              </motion.a>
              <motion.a
                href="/cgv"
                className="hover:text-miami-pink transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                CGV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}