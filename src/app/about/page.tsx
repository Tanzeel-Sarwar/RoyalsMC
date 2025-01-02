'use client'

import { motion } from 'framer-motion'
import { Users, Shield, Award, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Active Community',
    description: 'Join thousands of players in our vibrant Minecraft community.',
  },
  {
    icon: Shield,
    title: 'Anti-Cheat Protection',
    description: 'Play fairly with our advanced anti-cheat system.',
  },
  {
    icon: Award,
    title: 'Regular Events',
    description: 'Participate in exciting events and win amazing rewards.',
  },
  {
    icon: MessageSquare,
    title: 'Helpful Staff',
    description: '24/7 support from our dedicated staff team.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">About RoyalsMC</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            RoyalsMC is a premium Minecraft server offering unique gameplay experiences
            with a focus on community and fun.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#3a241b] rounded-lg p-6 flex items-start space-x-4"
            >
              <feature.icon className="w-6 h-6 text-[#6c8f4b] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#3a241b] rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-400 mb-6">
            Connect with us on Discord and join thousands of other players!
          </p>
          <a
            href="https://discord.gg/royalsmc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7DAC52] hover:bg-[#4f7030] text-white px-6 py-3 rounded-lg transition-colors"
          >
            Join Discord
          </a>
        </motion.div>
      </div>
    </div>
  )
}

