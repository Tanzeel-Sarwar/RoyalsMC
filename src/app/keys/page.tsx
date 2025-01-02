'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const keys = [
  {
    name: 'Common Key',
    price: 4.99,
    rewards: [
      'Random common items',
      'Small amount of in-game currency',
      'Basic enchanted books',
    ],
    color: 'from-gray-400 to-gray-600',
  },
  {
    name: 'Rare Key',
    price: 9.99,
    rewards: [
      'Random rare items',
      'Moderate amount of in-game currency',
      'Advanced enchanted books',
      'Chance for special items',
    ],
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Legendary Key',
    price: 19.99,
    rewards: [
      'Random legendary items',
      'Large amount of in-game currency',
      'Premium enchanted books',
      'Guaranteed special items',
      'Exclusive cosmetics',
    ],
    color: 'from-yellow-400 to-yellow-600',
  },
]

export default function KeysPage() {
  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Crate Keys</h1>
          <p className="text-gray-400">Unlock amazing rewards with our crate keys</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keys.map((key, index) => (
            <motion.div
              key={key.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#2b1912] rounded-lg overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${key.color}`} />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{key.name}</h2>
                <p className="text-3xl font-bold mb-6">${key.price}</p>
                <ul className="space-y-2 mb-6">
                  {key.rewards.map((reward) => (
                    <li key={reward} className="flex items-center text-gray-300">
                      <span className="mr-2">•</span>
                      {reward}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r ${key.color}">
                  Purchase Key
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

