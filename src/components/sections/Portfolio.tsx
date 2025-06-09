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
  
  // Portfolio avec 14 photos
  const portfolioItems = [
    { id: 1, image: "/images/portfolio/photo-1.JPG" },
    { id: 2, image: "/images/portfolio/photo-2.JPG" },
    { id: 3, image: "/images/portfolio/photo-3.JPG" },
    { id: 4, image: "/images/portfolio/photo-4.JPG" },
    { id: 5, image: "/images/portfolio/photo-5.JPG" },
    { id: 6, image: "/images/portfolio/photo-6.JPG" },
    { id: 7, image: "/images/portfolio/photo-7.JPG" },
    { id: 8, image: "/images/portfolio/photo-8.JPG" },
    { id: 9, image: "/images/portfolio/photo-9.JPG" },
    { id: 10, image: "/images/portfolio/photo-10.JPG" },
    { id: 11, image: "/images/portfolio/photo-11.JPG" },
    { id: 12, image: "/images/portfolio/photo-12.JPG" },
    { id: 13, image: "/images/portfolio/photo-13.JPG" },
    { id: 14, image: "/images/portfolio/photo-14.JPG" },
  ]

  // Créer les lignes avec les bonnes tailles - TOUJOURS 3 LIGNES
  const createRows = (items: typeof portfolioItems) => {
    const rows = []
    rows.push(items.slice(0, 5))   
    rows.push(items.slice(5, 10))   
    rows.push(items.slice(10, 14))  
    return rows
  }

  const [rows, setRows] = useState(createRows(portfolioItems))

  const openLightbox = (imageIndex: number) => {
    setSelectedImage(imageIndex)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
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
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 px-4 bg-dark-950 overflow-hidden relative">
      {/* 🌙 Background effects dark */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950">
        <div className="absolute inset-0 bg-miami-grid-dark opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 📍 Header dark */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2 
            className="font-display-dark text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 md:mb-6 text-miami-gradient text-glow-miami"
          >
            PORTFOLIO
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed px-4">
            Nos créations dans un carrousel hypnotique
          </p>
        </motion.div>

        {/* 🎠 Carousel Grid Fluide Dark */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {rows.map((row, rowIndex) => {
            // Triple pour le scroll infini
            const extendedRow = [...row, ...row, ...row]
            const direction = rowIndex % 2 === 0 ? -1 : 1
            const speed = 35 + rowIndex * 8 // Plus lent et hypnotique
            
            // Responsive sizes
            const getImageSize = () => {
              if (typeof window === 'undefined') return { width: 200, height: 280 }
              if (window.innerWidth < 640) return { width: 160, height: 220 }
              if (window.innerWidth < 768) return { width: 190, height: 260 }
              if (window.innerWidth < 1024) return { width: 220, height: 300 }
              return { width: 280, height: 360 }
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
                {/* Container avec scroll infini CSS dark */}
                <div 
                  className="flex gap-4 sm:gap-6 md:gap-8 will-change-transform"
                  style={{
                    width: `${extendedRow.length * (imageSize.width + 32)}px`,
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
                        transition: { duration: 0.3 }
                      }}
                      onClick={() => openLightbox(portfolioItems.findIndex(p => p.id === item.id))}
                    >
                      {/* 🖼️ Container de l'image dark */}
                      <div className="relative w-full h-full rounded-2xl sm:rounded-3xl bg-dark-800 overflow-hidden shadow-dark group-hover:shadow-pink-dark transition-all duration-500 border border-neutral-800/50 group-hover:border-miami-pink/30">
                        <img 
                          src={item.image}
                          alt={`Portfolio image ${item.id}`}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        
                        {/* 🌟 Overlay au hover - Rose et Cyan */}
                        <div className="absolute inset-0 bg-gradient-to-t from-miami-pink/20 via-transparent to-miami-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* 💫 Effet de glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-miami-pink/5 to-miami-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 🎯 CTA dark */}
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

      {/* 🔍 Lightbox Dark */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-4"
            onClick={closeLightbox}
          >
            {/* Close button dark */}
            <motion.button
              className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 glass-dark border border-miami-pink/20 hover:border-miami-pink/50 rounded-full flex items-center justify-center transition-all z-10 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeLightbox}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-miami-pink group-hover:text-white transition-colors" />
            </motion.button>

            {/* Navigation buttons dark */}
            <motion.button
              className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-dark border border-miami-cyan/20 hover:border-miami-cyan/50 rounded-full flex items-center justify-center transition-all group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-miami-cyan group-hover:text-white transition-colors" />
            </motion.button>

            <motion.button
              className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 glass-dark border border-miami-cyan/20 hover:border-miami-cyan/50 rounded-full flex items-center justify-center transition-all group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-miami-cyan group-hover:text-white transition-colors" />
            </motion.button>

            {/* Image container dark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-full max-h-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[600px] max-w-4xl rounded-2xl sm:rounded-3xl bg-dark-800 shadow-dark-lg overflow-hidden border border-neutral-700">
                <div className="h-full w-full flex items-center justify-center">
                  <img 
                    src={portfolioItems[selectedImage]?.image}
                    alt={`Portfolio image ${selectedImage + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Image info dark */}
              <div className="text-center mt-4 sm:mt-6">
                <p className="text-neutral-400 text-xs sm:text-sm">
                  <span className="text-miami-pink">{selectedImage + 1}</span> / <span className="text-miami-cyan">{portfolioItems.length}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS pour les animations fluides dark */}
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
        
        /* Pause au hover pour interaction */
        @media (min-width: 768px) {
          .group:hover {
            animation-play-state: paused;
          }
        }
        
        /* Optimisation mobile dark */
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