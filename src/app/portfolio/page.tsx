'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Grid, List, Search, X, ChevronLeft, ChevronRight, Download, Share2, Heart } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry')
  const [searchTerm, setSearchTerm] = useState('')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const categories = [
    { id: 'all', name: 'Tous', count: 48 },
    { id: 'portrait', name: 'Portrait', count: 15 },
    { id: 'corporate', name: 'Corporate', count: 12 },
    { id: 'wedding', name: 'Mariage', count: 8 },
    { id: 'event', name: 'Événement', count: 7 },
    { id: 'lifestyle', name: 'Lifestyle', count: 6 }
  ]

  // Portfolio étendu avec 48 photos
  const portfolioItems = Array.from({ length: 48 }, (_, i) => ({
    id: i + 1,
    image: `/images/portfolio/photo-${((i % 14) + 1)}.JPG`,
    title: `Photo ${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1].id,
    tags: ['studio', 'professionnel', 'créatif'],
    date: '2024',
    featured: i < 6,
    description: 'Séance photo artistique avec éclairage professionnel'
  }))

  const filteredItems = portfolioItems.filter(item => {
    const matchesFilter = filter === 'all' || item.category === filter
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % filteredItems.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
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
    <>
      <Navigation />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-miami-dark via-black to-miami-dark">
            <div className="absolute inset-0 bg-miami-grid opacity-10"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6"
              style={{
                background: 'linear-gradient(45deg, #ff0080, #ff4da6, #8B5CF6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              PORTFOLIO
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-miami-pink-light max-w-3xl mx-auto"
            >
              Découvrez nos créations photographiques avec l'esthétique Miami moderne
            </motion.p>
          </div>
        </section>

        {/* Filters & Controls */}
        <section className="px-4 mb-8 sm:mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center justify-between mb-6 sm:mb-8">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-miami-dark/50 border border-miami-pink/20 rounded-xl text-white placeholder-gray-400 focus:border-miami-pink focus:ring-2 focus:ring-miami-pink/20 transition-all"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-miami-dark/50 rounded-xl p-1 border border-miami-pink/20">
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'masonry' ? 'bg-miami-pink text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-miami-pink text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-miami-pink to-purple-500 text-white shadow-lg'
                      : 'bg-miami-dark/50 text-gray-400 hover:text-white hover:bg-miami-dark/80 border border-miami-pink/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-4 mb-12 sm:mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              layout
              className={`grid gap-4 sm:gap-6 ${
                viewMode === 'masonry' 
                  ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              <AnimatePresence>
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className={`group relative cursor-pointer ${
                      viewMode === 'masonry' 
                        ? `${index % 4 === 0 ? 'row-span-2' : ''} ${index % 5 === 0 ? 'row-span-3' : ''}` 
                        : 'aspect-square'
                    }`}
                    onClick={() => openLightbox(index)}
                  >
                    <div className={`relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 shadow-lg group-hover:shadow-2xl transition-all duration-300 ${
                      viewMode === 'masonry' ? 'h-48 sm:h-64 lg:h-80' : 'h-full'
                    }`}>
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">{item.title}</h3>
                          <div className="flex flex-wrap gap-1">
                            {item.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="text-xs px-2 py-1 bg-miami-pink/20 text-miami-pink-light rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <button className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-miami-pink/50 transition-colors">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-miami-pink/50 transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Featured badge */}
                      {item.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                            ⭐ FEATURED
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Results count */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-8 sm:mt-12"
            >
              <p className="text-gray-400 text-sm sm:text-base">
                {filteredItems.length} photo{filteredItems.length > 1 ? 's' : ''} trouvée{filteredItems.length > 1 ? 's' : ''}
                {filter !== 'all' && ` dans "${categories.find(c => c.id === filter)?.name}"`}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close button */}
              <button
                className="absolute top-6 right-6 w-12 h-12 bg-miami-pink/20 hover:bg-miami-pink/40 rounded-full flex items-center justify-center transition-colors z-20"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation */}
              <button
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-miami-pink/20 hover:bg-miami-pink/40 rounded-full flex items-center justify-center transition-colors z-20"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-miami-pink/20 hover:bg-miami-pink/40 rounded-full flex items-center justify-center transition-colors z-20"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={filteredItems[selectedImage]?.image}
                  alt={filteredItems[selectedImage]?.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                />

                {/* Image info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h3 className="font-semibold mb-1">{filteredItems[selectedImage]?.title}</h3>
                      <p className="text-sm text-gray-300">{filteredItems[selectedImage]?.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 bg-miami-pink/20 hover:bg-miami-pink/40 rounded-full flex items-center justify-center transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-miami-pink/20 hover:bg-miami-pink/40 rounded-full flex items-center justify-center transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                {selectedImage + 1} / {filteredItems.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  )
}