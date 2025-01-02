'use client'

import { motion } from 'framer-motion'
import { useCart } from '@/context/cart-context'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const ranks = [
  {
    id: 'rank-vip',
    name: 'VIP',
    price: 9.99,
    image: '/images/vip-rank.png',
    features: [
      'Colored chat',
      '/fly command',
      'Access to VIP mines',
      '2x McMMO exp',
      'Custom join messages',
      '5 home locations',
    ],
    color: 'from-green-400 to-green-600',
  },
  {
    id: 'rank-mvp',
    name: 'MVP',
    price: 19.99,
    image: '/images/mvp-rank.webp',
    features: [
      'All VIP features',
      '/heal command',
      'Access to MVP mines',
      '3x McMMO exp',
      'Custom join messages',
      '10 home locations',
    ],
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'rank-legend',
    name: 'LEGEND',
    price: 29.99,
    image: 'https://placehold.co/200x200',
    features: [
      'All MVP features',
      '/feed command',
      'Access to Legend mines',
      '4x McMMO exp',
      'Custom join messages',
      '15 home locations',
    ],
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 'rank-titan',
    name: 'TITAN',
    price: 49.99,
    image: 'https://placehold.co/200x200',
    features: [
      'All Legend features',
      '/god command',
      'Access to Titan mines',
      '5x McMMO exp',
      'Animated join messages',
      '20 home locations',
    ],
    color: 'from-red-400 to-red-600',
  },
  {
    id: 'rank-supreme',
    name: 'SUPREME',
    price: 79.99,
    image: 'https://placehold.co/200x200',
    features: [
      'All Titan features',
      '/nick command',
      'Access to Supreme mines',
      '6x McMMO exp',
      'Custom particle effects',
      '25 home locations',
    ],
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    id: 'rank-royal',
    name: 'ROYAL',
    price: 99.99,
    image: 'https://placehold.co/200x200',
    features: [
      'All Supreme features',
      'Custom commands',
      'Access to Royal mines',
      '7x McMMO exp',
      'Special cosmetics',
      'Unlimited homes',
    ],
    color: 'from-pink-400 to-pink-600',
  },
]

export default function RanksPage() {
  const { addItem } = useCart()

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 bg-[#1F130C]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-[#7DAC52]">Server Ranks</h1>
          <p className="text-[#E6D5AC]">Choose the perfect rank for your journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ranks.map((rank, index) => (
            <motion.div
              key={rank.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#2A1810] border-[#8B5E34] overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${rank.color}`} />
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={rank.image}
                      alt={rank.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl text-center text-[#E6D5AC]">
                    {rank.name}
                  </CardTitle>
                  <CardDescription className="text-center text-2xl font-bold text-[#7DAC52]">
                    ${rank.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {rank.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-[#E6D5AC]"
                      >
                        <span className="mr-2 text-[#7DAC52]">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-[#7DAC52] hover:bg-[#5E833E] text-white"
                    onClick={() =>
                      addItem({
                        id: rank.id,
                        name: rank.name,
                        price: rank.price,
                        image: rank.image,
                        type: 'rank',
                      })
                    }
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

