import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CartProvider } from '@/context/cart-context'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Cart from '@/app/components/Cart'
import WelcomeAlert from '@/app/components/Welcome-alert'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RoyalsMC Gaming Store',
  description: 'Official gaming store for RoyalsMC Minecraft server',
  icons: {
    icon: '/images/Logo_1.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1F130C] text-white min-h-screen`}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Cart />
          <WelcomeAlert />
        </CartProvider>
      </body>
    </html>
  )
}

