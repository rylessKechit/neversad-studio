'use client'

import { motion } from 'framer-motion'

export default function Portfolio() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-display font-bold text-center mb-12 text-glow"
        >
          Portfolio
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[1,2,3,4,5,6].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="aspect-square bg-gradient-to-br from-miami-pink/20 to-miami-pink-light/20 rounded-lg border border-miami-pink/30 glow-pink flex items-center justify-center group cursor-pointer"
            >
              <span className="text-miami-pink-light group-hover:text-miami-pink transition-colors">
                Photo {i}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border-2 border-miami-pink text-miami-pink hover:bg-miami-pink hover:text-white transition-all duration-300 rounded-lg glow-pink">
            Voir tout le portfolio
          </button>
        </motion.div>
      </div>
    </section>
  )
}