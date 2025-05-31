'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-t from-miami-dark to-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-display font-bold text-center mb-12 text-glow"
        >
          Contact
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-miami-pink mb-6">
              Restons en contact
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-miami-pink rounded-full mr-4 flex items-center justify-center">
                  <span className="text-xs">📍</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Adresse</div>
                  <div className="text-miami-pink-light">123 Rue de la Photo, 75001 Paris</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 bg-miami-pink rounded-full mr-4 flex items-center justify-center">
                  <span className="text-xs">📞</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Téléphone</div>
                  <div className="text-miami-pink-light">+33 1 23 45 67 89</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 bg-miami-pink rounded-full mr-4 flex items-center justify-center">
                  <span className="text-xs">✉️</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-miami-pink-light">hello@neversadstudio.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 bg-miami-pink rounded-full mr-4 flex items-center justify-center">
                  <span className="text-xs">🕒</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Horaires</div>
                  <div className="text-miami-pink-light">Lun-Ven: 9h-18h | Sam: 10h-16h</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                  <button
                    key={social}
                    className="px-4 py-2 border border-miami-pink text-miami-pink hover:bg-miami-pink hover:text-white transition-all duration-300 rounded-lg"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square bg-gradient-to-br from-miami-pink/20 to-miami-pink-light/20 rounded-lg border border-miami-pink/30 glow-pink flex items-center justify-center"
          >
            <span className="text-miami-pink-light text-lg">
              Map / Photo du studio
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}