'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Gamepad2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCopied, setShowCopied] = useState(false)

  const copyServerIP = () => {
    navigator.clipboard.writeText('play.royalsmc.fun')
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 2000)
  }

  return (
    <nav className="fixed top-0 w-full bg-[#2A1810]/95 backdrop-blur-sm z-50 border-b-2 border-[#8B5E34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/Logo_1.png"
              alt="RoyalsMC Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-[#7DAC52]">
              RoyalsMC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/ranks">Ranks</NavLink>
            <NavLink href="/keys">Keys</NavLink>
            <NavLink href="/coins">Coins</NavLink>
            <NavLink href="/about">About</NavLink>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-[#E6D5AC] hover:text-[#7DAC52]"
                >
                  <Gamepad2 className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-[#2A1810] border-[#8B5E34]">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none text-[#7DAC52]">Server IP</h4>
                    <p className="text-sm text-[#E6D5AC]">
                      Connect to our Minecraft server using this IP
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-[#8B5E34] bg-[#1F130C] px-3 py-2 text-sm text-[#E6D5AC]"
                      value="play.royalsmc.fun"
                      readOnly
                    />
                    <Button 
                      size="sm" 
                      className="px-3 bg-[#7DAC52] hover:bg-[#5E833E] text-white"
                      onClick={copyServerIP}
                    >
                      {showCopied ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Link href="https://discord.gg/royalsmc" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#7DAC52] hover:bg-[#5E833E] text-white">
                Join Discord
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#E6D5AC] hover:text-[#7DAC52]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#2A1810]">
              <MobileNavLink href="/ranks">Ranks</MobileNavLink>
              <MobileNavLink href="/keys">Keys</MobileNavLink>
              <MobileNavLink href="/coins">Coins</MobileNavLink>
              <MobileNavLink href="/about">About</MobileNavLink>
              <Button
                variant="ghost"
                className="w-full text-left text-[#E6D5AC] hover:text-[#7DAC52]"
                onClick={copyServerIP}
              >
                <Gamepad2 className="h-5 w-5 mr-2" />
                {showCopied ? 'Copied!' : 'play.royalsmc.fun'}
              </Button>
              <Link href="https://discord.gg/royalsmc" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-[#7DAC52] hover:bg-[#5E833E] text-white">
                  Join Discord
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[#E6D5AC] hover:text-[#7DAC52] transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7DAC52] transition-all group-hover:w-full" />
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-[#E6D5AC] hover:text-[#7DAC52] hover:bg-[#1F130C] transition-colors"
    >
      {children}
    </Link>
  )
}

