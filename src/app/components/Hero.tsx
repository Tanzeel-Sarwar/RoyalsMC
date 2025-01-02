'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const images = [
  {
    title: 'Welcome to RoyalsMC',
    description: 'Experience the ultimate Minecraft adventure',
    character: '/images/Character 1.png',
  },
  {
    title: 'Epic Gameplay',
    description: 'Join thousands of players in exciting battles',
    character: '/images/Character 2.png',
  },
  {
    title: 'Exclusive Rewards',
    description: 'Unlock amazing items and special perks',
    character: '/images/Character 5.png',
  },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    } else {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }
  }

  return (
    <div className="relative h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >

          <div className="relative h-full flex items-center justify-center">
            <div className="text-center max-w-7xl w-full px-4 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 md:pr-8">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#E6D5AC] mb-4"
                >
                  {images[currentIndex].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-[#E6D5AC]/90 mb-8"
                >
                  {images[currentIndex].description}
                </motion.p>
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-[#7DAC52] hover:bg-[#5E833E] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-base md:text-lg font-semibold transition-colors"
                >
                  Start Playing Now
                </motion.button>
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="md:w-1/2 mt-8 md:mt-0"
              >
                <Image
                  src={images[currentIndex].character}
                  alt="Minecraft Character"
                  width={300}
                  height={600}
                  className="mx-auto max-h-[75vh] w-auto object-contain"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => navigate('prev')}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#2A1810]/80 text-[#E6D5AC] p-2 rounded-full hover:bg-[#2A1810] transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => navigate('next')}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#2A1810]/80 text-[#E6D5AC] p-2 rounded-full hover:bg-[#2A1810] transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#7DAC52]' : 'bg-[#E6D5AC]/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

