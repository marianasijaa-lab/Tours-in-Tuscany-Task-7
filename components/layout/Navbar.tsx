import Link from 'next/link'
import Image from 'next/image'
import { NavLink } from '@/types'
import NavbarClient from './NavbarClient'

interface NavbarProps {
  links: NavLink[]
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-40 px-4 lg:px-8">
      <div className="absolute inset-0 bg-[#FFFFFF33] " aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center mt-2" aria-label="Tours in Tuscany - Home">
          <div className="w-[85px] h-[85px] relative lg:ml-10">
            <Image
              src="/images/logo.png"
              alt="Tours in Tuscany logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Right side: Desktop Nav Links + Language + Auth buttons */}
        <NavbarClient links={links} />
      </div>
    </nav>
  )
}
