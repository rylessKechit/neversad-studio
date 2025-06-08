'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
import MiamiButton from '@/components/ui/MiamiButton'

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Portfolio avec 14 photos (4 + 5 + 5)
  const portfolioItems = [
    // Ligne 1 - 4 photos
    { id: 1, image: "/images/portfolio/photo-1.JPG" },
    { id: 2, image: "/images/portfolio/photo-2.JPG" },
    { id: 3, image: "/images/portfolio/photo-3.JPG" },
    { id: 4, image: "/images/portfolio/photo-4.JPG" },

    // Ligne 2 - 5 photos
    { id: 5, image: "/images/portfolio/photo-5.JPG" },
    { id: 6, image: "/images/portfolio/photo-6.JPG" },
    { id: 7, image: "/images/portfolio/photo-7.JPG" },
    { id: 8, image: "/images/portfolio/photo-8.JPG" },
    { id: 9, image: "/images/portfolio/photo-9.JPG" },

    // Ligne 3 - 5 photos
    { id: 10, image: "/images/portfolio/photo-10.JPG" },
    { id: 11, image: "/images/portfolio/photo-11.JPG" },
    { id: 12, image: "/images/portfolio/photo-12.JPG" },
    { id: 13, image: "/images/portfolio/photo-13.JPG" },
    { id: 14, image: "/images/portfolio/photo-14.JPG" },
  ]

  // Créer les lignes avec les bonnes tailles responsive - TOUJOURS 3 LIGNES
  const createRows = (items: typeof portfolioItems) => {
    // TOUJOURS 3 lignes peu importe le device
    const rows = []
    // Première ligne : 4 photos (ou 5 si mobile)
    rows.push(items.slice(0, 5))   
    // Deuxième ligne : 5 photos
    rows.push(items.slice(5, 10))   
    // Troisième ligne : 4 photos restantes
    rows.push(items.slice(10, 14))  
    return rows
  }

  const [rows, setRows] = useState(createRows(portfolioItems))

  // Plus besoin de recalculer au resize puisqu'on garde toujours 3 lignes

  const openLightbox = (imageIndex: number) => {
    setSelectedImage(imageIndex)
    setLightboxOpen(true)
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    // Restaurer le scroll du body
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [lightboxOpen])

  if (!mounted) return null

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-b from-black to-miami-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2 
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 md:mb-6"
            style={{
              background: 'linear-gradient(45deg, #ff0080, #ff4da6, #8B5CF6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            PORTFOLIO
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-miami-blue-light max-w-3xl mx-auto leading-relaxed px-4">
            Nos créations dans un carrousel hypnotique
          </p>
        </motion.div>

        {/* Carousel Grid Fluide - Responsive */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {rows.map((row, rowIndex) => {
            // Créer un tableau étendu pour le scroll infini
            const extendedRow = [...row, ...row, ...row] // Triple pour plus de fluidité
            const direction = rowIndex % 2 === 0 ? -1 : 1
            const speed = 30 + rowIndex * 5 // Vitesse progressive
            
            // Responsive sizes
            const getImageSize = () => {
              if (typeof window === 'undefined') return { width: 200, height: 250 }
              if (window.innerWidth < 640) return { width: 150, height: 200 }
              if (window.innerWidth < 768) return { width: 180, height: 230 }
              if (window.innerWidth < 1024) return { width: 200, height: 250 }
              return { width: 250, height: 320 }
            }
            
            const imageSize = getImageSize()
            
            return (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: rowIndex * 0.2 }}
                className="relative overflow-hidden"
              >
                {/* Container avec scroll infini CSS - Responsive */}
                <div 
                  className="flex gap-3 sm:gap-4 md:gap-6 will-change-transform"
                  style={{
                    width: `${extendedRow.length * (imageSize.width + 24)}px`,
                    animation: `scroll-${direction > 0 ? 'right' : 'left'} ${speed}s linear infinite`,
                  }}
                >
                  {extendedRow.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${index}`}
                      className="group relative cursor-pointer flex-shrink-0"
                      style={{ 
                        width: `${imageSize.width}px`, 
                        height: `${imageSize.height}px` 
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        zIndex: 10,
                        transition: { duration: 0.2 }
                      }}
                      onClick={() => openLightbox(portfolioItems.findIndex(p => p.id === item.id))}
                    >
                      {/* Container de l'image - Responsive */}
                      <div className="relative w-full h-full rounded-xl sm:rounded-2xl bg-gray-900 overflow-hidden shadow-lg sm:shadow-xl group-hover:shadow-2xl transition-all duration-300">
                        <img 
                          src={item.image}
                          alt={`Portfolio image ${item.id}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Overlay subtil au hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <MiamiButton 
            variant="primary" 
            size="lg" 
            className="group w-full sm:w-auto"
            icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />}
          >
            Voir tous nos projets
          </MiamiButton>
        </motion.div>
      </div>

      {/* Lightbox - Responsive */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4"
            onClick={closeLightbox}
          >
            {/* Close button - Responsive */}
            <motion.button
              className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-miami-pink/20 hover:bg-miami-pink/40 rounded-full flex items-center justify-center transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeLightbox}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.button>

            {/* Navigation buttons - Responsive */}
            <motion.button
              className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-miami-pink/20 hover:bg-miami-pink/40 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.button>

            <motion.button
              className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-miami-pink/20 hover:bg-miami-pink/40 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.button>

            {/* Image container - Responsive */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-full max-h-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] max-w-4xl rounded-xl sm:rounded-2xl bg-gray-800 shadow-2xl overflow-hidden">
                <div className="h-full w-full flex items-center justify-center">
                  <img 
                    src={portfolioItems[selectedImage]?.image}
                    alt={`Portfolio image ${selectedImage + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Image info - Responsive */}
              <div className="text-center mt-4 sm:mt-6">
                <p className="text-gray-400 text-xs sm:text-sm">
                  {selectedImage + 1} / {portfolioItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS pour les animations fluides - Responsive */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        /* Pause au hover pour interaction - mais pas sur mobile */
        @media (min-width: 768px) {
          .group:hover {
            animation-play-state: paused;
          }
        }
        
        /* Optimisation mobile */
        @media (max-width: 767px) {
          .will-change-transform {
            will-change: transform;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
        }
      `}</style>
    </section>
  )
}