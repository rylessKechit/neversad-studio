'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import MiamiButton from '@/components/ui/MiamiButton'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const categories = ['Tous', 'Portrait', 'Mode', 'Corporate', 'Événement', 'Créatif']
  
  const portfolioItems = [
    {
      id: 1,
      title: "Élégance Corporate",
      category: "Corporate",
      image: "🎭",
      gradient: "from-miami-pink to-purple-500",
      description: "Shooting corporate pour dirigeante d'entreprise"
    },
    {
      id: 2,
      title: "Miami Nights",
      category: "Mode",
      image: "👑",
      gradient: "from-purple-500 to-blue-500",
      description: "Collection mode inspirée des nuits de Miami"
    },
    {
      id: 3,
      title: "Portrait Intimiste",
      category: "Portrait",
      image: "✨",
      gradient: "from-pink-500 to-red-500",
      description: "Séance portrait en lumière naturelle douce"
    },
    {
      id: 4,
      title: "Art Direction",
      category: "Créatif",
      image: "🎨",
      gradient: "from-green-500 to-teal-500",
      description: "Concept artistique pour campagne publicitaire"
    },
    {
      id: 5,
      title: "Gala de Mode",
      category: "Événement",
      image: "🌟",
      gradient: "from-yellow-500 to-orange-500",
      description: "Couverture événement fashion week parisienne"
    },
    {
      id: 6,
      title: "Duo Créatif",
      category: "Portrait",
      image: "💫",
      gradient: "from-indigo-500 to-purple-500",
      description: "Portrait duo avec mise en scène artistique"
    }
  ]

  const filteredItems = selectedCategory === 'Tous' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" className="py-24 px-4 bg-gradient-to-b from-black to-miami-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header avec effet parallax */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
            PORTFOLIO
          </motion.h2>
          <p className="text-xl text-miami-pink-light max-w-3xl mx-auto leading-relaxed">
            Explorez notre univers créatif où chaque image raconte une histoire unique, 
            capturée avec notre signature Miami moderne
          </p>
        </motion.div>

        {/* Filtres avec animations fluides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-500 relative overflow-hidden ${
                selectedCategory === category
                  ? 'text-white shadow-2xl shadow-miami-pink/30'
                  : 'text-miami-pink-light hover:text-white border border-miami-pink/30 hover:border-miami-pink'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-miami-pink to-miami-pink-light"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grille Portfolio avec animations sophistiquées */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <div className={`relative aspect-[4/5] rounded-2xl bg-gradient-to-br ${item.gradient} p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500`}>
                  <div className="h-full w-full bg-black/90 rounded-xl overflow-hidden relative">
                    {/* Image placeholder avec effet hover */}
                    <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-700">
                      {item.image}
                    </div>
                    
                    {/* Overlay avec infos */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredItem === item.id ? 1 : 0,
                        y: hoveredItem === item.id ? 0 : 20
                      }}
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6"
                    >
                      <span className="text-miami-pink text-sm font-medium mb-2 tracking-wide">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                      <MiamiButton variant="secondary" size="sm">
                        Voir plus
                      </MiamiButton>
                    </motion.div>
                  </div>
                </div>

                {/* Effet de glow au hover */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA pour voir plus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <MiamiButton variant="primary" size="lg" className="group">
            Voir tout le portfolio
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </MiamiButton>
        </motion.div>
      </div>
    </section>
  )
}