'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Coins } from 'lucide-react'

const coinPackages = [
  {
    amount: '1,000',
    price: 4.99,
    bonus: '0',
  },
  {
    amount: '5,000',
    price: 19.99,
    bonus: '500',
  },
  {
    amount: '10,000',
    price: 34.99,
    bonus: '1,500',
  },
  {
    amount: '25,000',
    price: 79.99,
    bonus: '5,000',
  },
]

export default function CoinsPage() {
  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Server Coins</h1>
          <p className="text-gray-400">Purchase coins to use in our server shop</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coinPackages.map((pack, index) => (
            <motion.div
              key={pack.amount}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#2b1912] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-500/20 transition-all"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <Coins className="w-12 h-12 text-yellow-500" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-2">
                  {pack.amount} Coins
                </h2>
                {pack.bonus !== '0' && (
                  <p className="text-green-500 text-center mb-4">
                    +{pack.bonus} Bonus
                  </p>
                )}
                <p className="text-3xl font-bold text-center mb-6">
                  ${pack.price}
                </p>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Purchase
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

