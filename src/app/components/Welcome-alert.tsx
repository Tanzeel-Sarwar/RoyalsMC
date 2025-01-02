'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

export default function WelcomeAlert() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md bg-[#2A1810] p-6 rounded-lg shadow-xl border-2 border-[#8B5E34] m-4"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <Image
                  src="/images/Logo_1.png"
                  alt="Minecraft Grass Block"
                  width={250}
                  height={250}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-[#7DAC52] mb-2">Welcome to RoyalsMC!</h2>
              <p className="text-[#E6D5AC] mb-4">
                Ready to embark on an epic Minecraft adventure? Join our community today!
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-[#7DAC52] hover:bg-[#5E833E] text-white px-6 py-2 rounded-lg transition-colors"
              >
                Let&#39;s Begin!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

