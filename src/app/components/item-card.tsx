import { motion } from 'framer-motion'
import { useCart } from '@/context/cart-context'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import Image from 'next/image'

type ItemCardProps = {
  item: {
    id: string
    name: string
    price: number
    image: string
    description: string
    type: 'rank' | 'key' | 'coin'
  }
  index: number
}

export default function ItemCard({ item, index }: ItemCardProps) {
  const { addItem } = useCart()

  const getCardColor = (type: string) => {
    switch (type) {
      case 'rank':
        return 'from-purple-500 to-blue-500'
      case 'key':
        return 'from-yellow-500 to-orange-500'
      case 'coin':
        return 'from-green-500 to-emerald-500'
      default:
        return 'from-gray-500 to-gray-700'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="bg-[#2A1810] border-[#8B5E34] overflow-hidden h-full flex flex-col">
        <div className={`h-2 bg-gradient-to-r ${getCardColor(item.type)}`} />
        <CardHeader>
          <div className="w-20 h-20 mx-auto mb-4">
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
          <CardTitle className="text-xl md:text-2xl text-center text-[#E6D5AC]">
            {item.name}
          </CardTitle>
          <CardDescription className="text-center text-lg md:text-xl font-bold text-[#7DAC52]">
            ${item.price}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-[#E6D5AC] text-center text-sm md:text-base">{item.description}</p>
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
  )
}

