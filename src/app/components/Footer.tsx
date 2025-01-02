import Link from 'next/link'
import Image from 'next/image'
import { DiscIcon as Discord } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2A1810] border-t-2 border-[#8B5E34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/Logo_1.png"
                alt="RoyalsMC Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-[#7DAC52]">RoyalsMC</span>
            </Link>
            <p className="text-[#E6D5AC] max-w-md">
              Join the ultimate Minecraft gaming experience with RoyalsMC. 
              Build, survive, and thrive in our amazing community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#7DAC52] font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ranks" className="text-[#E6D5AC] hover:text-[#7DAC52] transition-colors">
                  Ranks
                </Link>
              </li>
              <li>
                <Link href="/keys" className="text-[#E6D5AC] hover:text-[#7DAC52] transition-colors">
                  Keys
                </Link>
              </li>
              <li>
                <Link href="/coins" className="text-[#E6D5AC] hover:text-[#7DAC52] transition-colors">
                  Coins
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#E6D5AC] hover:text-[#7DAC52] transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-[#7DAC52] font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://discord.gg/royalsmc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6D5AC] hover:text-[#7DAC52] transition-colors"
              >
                <Discord className="h-6 w-6" />
              </a>
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6D5AC] hover:text-[#7DAC52] transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6D5AC] hover:text-[#7DAC52] transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#8B5E34]">
          <p className="text-center text-[#E6D5AC]">
            © {new Date().getFullYear()} RoyalsMC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

