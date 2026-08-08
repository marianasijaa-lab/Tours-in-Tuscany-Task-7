import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { navLinks } from '@/data/navLinks'
import { footerColumns, socialLinks } from '@/data/footerData'

export const metadata: Metadata = {
  title: 'Tours in Tuscany',
  description: 'Discover the magic of Tuscany with our expert guides. Book bike tours, wine tastings, and more.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar links={navLinks} />
        {children}
        <Footer
          logoText="Tours in Tuscany"
          columns={footerColumns}
          socialLinks={socialLinks}
          copyrightText="Copyright © 2022. All rights reserved."
        />
      </body>
    </html>
  )
}
