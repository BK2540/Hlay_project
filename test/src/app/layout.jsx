import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/Scroll'
import { GlobalProvider } from './GlobalProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HLAY',
  description: 'Ceramics website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
        <Navbar/>
        {children}
        <Footer/>
        <ScrollToTop/>
        </GlobalProvider>
        
      </body>
    </html>
  )
}
