'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '@/context/cart-context'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeItem, updateQuantity, total } = useCart()

  return (
    <>
      <Button
        variant="outline"
        className="fixed right-4 bottom-4 z-50 bg-[#2A1810] text-[#E6D5AC] border-[#8B5E34]"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        <span className="bg-[#7DAC52] text-white rounded-full px-2 py-1 text-xs">
          {items.length}
        </span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-[#2A1810] border-l-2 border-[#8B5E34] p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#7DAC52]">Your Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#E6D5AC] hover:text-[#7DAC52]"
                >
                  <X size={24} />
                </button>
              </div>

              {items.length === 0 ? (
                <p className="text-[#E6D5AC] text-center">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 bg-[#1F130C] p-4 rounded-lg border border-[#8B5E34]"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="text-[#E6D5AC] font-semibold">
                            {item.name}
                          </h3>
                          <p className="text-[#7DAC52]">${item.price}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, Math.max(0, item.quantity - 1))
                              }
                              className="text-[#E6D5AC] hover:text-[#7DAC52]"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="text-[#E6D5AC] w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="text-[#E6D5AC] hover:text-[#7DAC52]"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#E6D5AC] hover:text-red-500"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t-2 border-[#8B5E34] pt-4">
                    <div className="flex justify-between mb-4">
                      <span className="text-[#E6D5AC]">Total:</span>
                      <span className="text-[#7DAC52] font-bold">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                    <Link href="/checkout">
                      <Button
                        className="w-full bg-[#7DAC52] hover:bg-[#5E833E] text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        Proceed to Checkout
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

