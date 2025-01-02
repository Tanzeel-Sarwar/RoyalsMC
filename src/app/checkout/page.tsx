'use client'

import { useState } from 'react'
import { useCart } from '@/context/cart-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { motion } from 'framer-motion'

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('credit-card')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement payment processing logic here
    alert('Payment processed successfully!')
    clearCart()
  }

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 bg-[#1F130C]">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center text-[#7DAC52]"
        >
          Checkout
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#2A1810] p-6 rounded-lg mb-8 border border-[#8B5E34]"
        >
          <h2 className="text-xl font-semibold mb-4 text-[#E6D5AC]">Order Summary</h2>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between mb-2 text-[#E6D5AC]">
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t border-[#8B5E34] mt-4 pt-4 font-bold text-[#7DAC52]">
            <span>Total:</span>
            <span className="float-right">${total.toFixed(2)}</span>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-[#2A1810] p-6 rounded-lg border border-[#8B5E34]"
        >
          <h2 className="text-xl font-semibold mb-4 text-[#E6D5AC]">Payment Method</h2>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mb-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit-card" id="credit-card" />
              <Label htmlFor="credit-card" className="text-[#E6D5AC]">Credit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal" className="text-[#E6D5AC]">PayPal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="discord" id="discord" />
              <Label htmlFor="discord" className="text-[#E6D5AC]">Discord Ticket</Label>
            </div>
          </RadioGroup>

          {paymentMethod === 'credit-card' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="card-number" className="text-[#E6D5AC]">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" className="bg-[#1F130C] text-[#E6D5AC] border-[#8B5E34]" />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Label htmlFor="expiry" className="text-[#E6D5AC]">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" className="bg-[#1F130C] text-[#E6D5AC] border-[#8B5E34]" />
                </div>
                <div className="flex-1">
                  <Label htmlFor="cvv" className="text-[#E6D5AC]">CVV</Label>
                  <Input id="cvv" placeholder="123" className="bg-[#1F130C] text-[#E6D5AC] border-[#8B5E34]" />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'paypal' && (
            <div>
              <p className="text-[#E6D5AC] mb-4">You will be redirected to PayPal to complete your payment.</p>
            </div>
          )}

          {paymentMethod === 'discord' && (
            <div>
              <p className="text-[#E6D5AC] mb-4">A ticket will be created in our Discord server for manual processing.</p>
              <Input placeholder="Discord Username" className="bg-[#1F130C] text-[#E6D5AC] border-[#8B5E34] mb-4" />
            </div>
          )}

          <Button type="submit" className="w-full bg-[#7DAC52] hover:bg-[#5E833E] text-white">
            {paymentMethod === 'discord' ? 'Create Discord Ticket' : 'Pay Now'}
          </Button>
        </motion.form>
      </div>
    </div>
  )
}

