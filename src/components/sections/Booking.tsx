'use client'

import { motion } from 'framer-motion'
import MiamiButton from '@/components/ui/MiamiButton'

export default function Booking() {
  const services = [
    {
      name: "Portrait Session",
      price: "150€",
      duration: "1h",
      features: ["Retouches incluses", "5 photos HD", "Consultation style"]
    },
    {
      name: "Corporate Shoot",
      price: "300€", 
      duration: "2h",
      features: ["Photos corporate", "10 photos HD", "Retouches pro", "Usage commercial"]
    },
    {
      name: "Event Photography",
      price: "500€",
      duration: "4h", 
      features: ["Couverture complète", "50+ photos", "Retouches incluses", "Galerie en ligne"]
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-display font-bold text-center mb-12 text-glow"
        >
          Réservation
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-miami rounded-lg p-6 hover:border-miami-pink transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-miami-pink mb-2">
                {service.name}
              </h3>
              <div className="text-3xl font-bold text-white mb-2">
                {service.price}
              </div>
              <div className="text-miami-pink-light mb-4">
                Durée: {service.duration}
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-miami-pink-light flex items-center">
                    <span className="w-2 h-2 bg-miami-pink rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <MiamiButton 
                variant="secondary" 
                className="w-full group-hover:variant-primary"
              >
                Réserver
              </MiamiButton>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-miami-pink-light mb-6">
            Besoin d'un devis personnalisé ? Contactez-nous pour discuter de votre projet.
          </p>
          <MiamiButton variant="primary">
            Demander un devis
          </MiamiButton>
        </motion.div>
      </div>
    </section>
  )
}