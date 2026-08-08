'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import dynamic from 'next/dynamic'
import { NavLink } from '@/types'

const SignUpModal = dynamic(() => import('@/components/modals/SignUpModal'), { ssr: false })
const LoginModal = dynamic(() => import('@/components/modals/LoginModal'), { ssr: false })

type ActiveModal = 'signup' | 'login' | null

interface NavbarClientProps {
  links?: NavLink[]
  signUpLabel?: string
  loginLabel?: string
}

export default function NavbarClient({
  links = [],
  signUpLabel = 'Sign Up',
  loginLabel = 'Login',
}: NavbarClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeModal, setActiveModal] = useState<ActiveModal>(null)
  const pathname = usePathname()

  // Determine if a link is active based on current pathname
  const isActive = (href: string) => {
    // Hash links (e.g. /#popular-destinations) are never considered active pages 
    if (href.includes('#')) return false
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  const openModal = (modal: ActiveModal) => {
    setActiveModal(modal)
    setIsMenuOpen(false)
  }

  const closeModal = () => setActiveModal(null)

  return (
    <>
      {/* Desktop Nav Links */}
      <div className="hidden lg:flex items-center gap-7">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-label={link.label}
            className={`relative text-white text-base font-semibold transition-colors pb-1 ${
              isActive(link.href)
                ? 'text-[#FA8B02] after:absolute after:bottom-1 after:left-0.5 after:w-full after:h-[2px] after:bg-[#FA8B02] after:rounded-full'
                : 'hover:text-[#FA8B02]'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3 mr-0.5">
        {/* Language Button - Desktop */}
        <button
          className="hidden lg:flex items-center gap-1 text-white text-base hover:text-[#FA8B02] transition-colors cursor-pointer opacity-65"
          aria-label="Select language"
        >
          Eng <span className="text-sm">▾</span>
        </button>

        {/* Login Button - Desktop */}
        <button
          onClick={() => openModal('login')}
          className="hidden lg:block text-white text-base font-semibold px-4 py-2 hover:text-[#FA8B02] transition-colors cursor-pointer"
          aria-label="Login to your account"
        >
          {loginLabel}
        </button>

        {/* Sign Up Button - Desktop */}
        <button
          onClick={() => openModal('signup')}
          className="hidden lg:block bg-[#FA8B02] hover:bg-orange-600 text-white text-base font-semibold px-7 py-2 rounded-full transition-colors cursor-pointer"
          aria-label="Create a new account"
        >
          {signUpLabel}
        </button>

        {/* Hamburger - Mobile */}
        <button
          className="lg:hidden text-white p-3"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Full-Screen Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[90] flex flex-col lg:hidden">
          {/* Header row — X button */}
          <div className="flex items-center justify-end px-5 h-28">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[#333333] p-2"
              aria-label="Close menu"
            >
              <X size={30} />
            </button>
          </div>

          {/* Links — centered */}
          <div className="flex flex-col items-center gap-6 flex-1 overflow-y-auto pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-semibold transition-colors ${
                  isActive(link.href)
                    ? 'text-[#FA8B02]'
                    : 'text-gray-800 hover:text-[#FA8B02]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="px-6 py-6 flex flex-col items-center gap-3">
            <button
              onClick={() => openModal('login')}
              className="w-72 border border-[#FA8B02] text-[#FA8B02] text-base font-semibold py-2.5 rounded-full transition-colors cursor-pointer hover:bg-[#FA8B02] hover:text-white"
            >
              {loginLabel}
            </button>
            <button
              onClick={() => openModal('signup')}
              className="w-72 bg-[#FA8B02] hover:bg-orange-600 text-white text-base font-semibold py-2.5 rounded-full transition-colors cursor-pointer"
            >
              {signUpLabel}
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <SignUpModal
        isOpen={activeModal === 'signup'}
        onClose={closeModal}
        onSwitchToLogin={() => setActiveModal('login')}
      />
      <LoginModal
        isOpen={activeModal === 'login'}
        onClose={closeModal}
        onSwitchToSignUp={() => setActiveModal('signup')}
      />
    </>
  )
}
