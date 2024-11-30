import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from './components/header/page';
import Footer from './components/footer/page';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <Header/>        
        {children}
        <Footer/>        
        
      </body>
    </html>
  )
}
