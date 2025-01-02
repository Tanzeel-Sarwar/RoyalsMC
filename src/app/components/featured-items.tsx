'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '@/context/cart-context'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// Sample data (you would typically fetch this from an API)
// id: string
// name: string
// price: number
// quantity: number
// image: string
// type: 'rank' | 'key' | 'coins'

const allItems = [
  // Ranks
  {
    id: 'rank-vip',
    name: "VIP Rank",
    price: 9.99,
    image: '/images/vip-rank.png',
    description: 'Get VIP status and exclusive perks!',
    type: 'rank',
  },
  {
    id: 'rank-mvp',
    name: "MVP Rank",
    price: 19.99,
    image: '/images/mvp-rank.webp',
    description: 'Upgrade to MVP for amazing benefits!',
    type: 'rank',
  },
  // Keys
  {
    id: 'key-common',
    name: "Common Key",
    price: 4.99,
    image: '/images/rare-key.webp',
    description: 'Open common crates for cool items!',
    type: 'key',
  },
  {
    id: 'key-rare',
    name: "Rare Key",
    price: 9.99,
    image: '/images/legend-key.webp',
    description: 'Unlock rare items with this key!',
    type: 'key',
  },
  // Coins
  {
    id: 'coins-1000',
    name: "1000 Coins",
    price: 4.99,
    image: '/images/coins.png',
    description: 'Get 1000 in-game coins!',
    type: 'coins',
  },
  {
    id: 'coins-5000',
    name: "5000 Coins",
    price: 19.99,
    image: '/images/coins.png',
    description: 'Boost your balance with 5000 coins!',
    type: 'coins',
  },
]

const getRandomItems = (count: number) => {
  const shuffled = allItems.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export default function FeaturedItems() {
  const [featuredItems, setFeaturedItems] = useState(getRandomItems(6))
  const { addItem } = useCart()

  useEffect(() => {
    // Refresh featured items every 5 minutes
    const interval = setInterval(() => {
      setFeaturedItems(getRandomItems(6))
    }, 5 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-16 bg-[#1F130C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#7DAC52] mb-8">Featured Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#2A1810] border-[#8B5E34] overflow-hidden">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}  
                      width={200}
                        height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl text-center text-[#E6D5AC]">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-center text-xl font-bold text-[#7DAC52]">
                    ${item.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#E6D5AC] text-center">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-[#7DAC52] hover:bg-[#5E833E] text-white"
                    onClick={() => addItem(item)}
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

