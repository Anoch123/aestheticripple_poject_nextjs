import GlobalState from '@/context'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "AestheticRipple - Developers Talent Showcase",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          <main className='h-screen'>{children}</main>
        </GlobalState>
      </body>
    </html>
  )
}
