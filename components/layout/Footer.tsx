import Link from 'next/link'
import Image from 'next/image'
import { FooterColumn } from '@/types'

interface SocialLink {
  platform: string
  href: string
}

interface FooterProps {
  logoText: string
  columns: FooterColumn[]
  socialLinks: SocialLink[]
  copyrightText: string
}

export default function Footer({ logoText, columns, socialLinks, copyrightText }: FooterProps) {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">

        {/* Logo row */}
        <div className="mb-10 pb-16 border-b border-gray-600 flex sm:block justify-center">
          <Link href="/" aria-label={`${logoText} - Home`}>
            <div className="w-24 h-24 relative">
              <Image
                src="/images/logo.png"
                alt="Tours in Tuscany logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Columns row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr_1fr] gap-6 gap-y-8">

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-extrabold text-base mb-4">{columns[0]?.heading}</h3>
            <ul className="space-y-2">
              {columns[0]?.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white text-sm font-semibold hover:text-[#FA8B02] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Home */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-extrabold text-base mb-4">{columns[1]?.heading}</h3>
            <ul className="space-y-2">
              {columns[1]?.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white text-sm font-semibold hover:text-[#FA8B02] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-extrabold text-base mb-4">{columns[2]?.heading}</h3>
            <ul className="space-y-2">
              {columns[2]?.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white text-sm font-semibold hover:text-[#FA8B02] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="sm:col-span-1 min-w-0">
            <h3 className="text-white font-extrabold text-base mb-4 text-center sm:text-left">Contacts</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white text-sm font-semibold justify-center sm:justify-start">
                <div className="w-4 h-4 relative mt-0.5 flex-shrink-0">
                  <Image src="/images/icon footer 1.png" alt="Location" fill className="object-contain" />
                </div>
                <span>Piazza Napoleone, Lucca, Tuscany</span>
              </li>
              <li className="flex items-center gap-2 text-white text-sm font-semibold justify-center sm:justify-start">
                <div className="w-4 h-4 relative flex-shrink-0">
                  <Image src="/images/icon footer 2.png" alt="Phone" fill className="object-contain" />
                </div>
                <span>+39 346 368 5708</span>
              </li>
              <li className="flex items-center gap-2 text-white text-sm font-semibold justify-center sm:justify-start">
                <div className="w-4 h-4 relative flex-shrink-0">
                  <Image src="/images/icon footer 3.png" alt="Email" fill className="object-contain" />
                </div>
                <span>italiainlimo@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-extrabold text-base mb-4">Social Media</h3>
            <div className="flex gap-3 justify-center sm:justify-start">
              {socialLinks.map((social, index) => (
                <Link
                  key={social.platform}
                  href={social.href}
                  className="w-9 h-9 relative flex-shrink-0"
                  aria-label={`Follow us on ${social.platform}`}
                >
                  <Image
                    src={`/images/social media${index + 1}.png`}
                    alt={social.platform}
                    fill
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="border-t border-gray-600" />
      </div>
      <div className="py-4">
        <p className="text-center text-gray-200 text-sm">{copyrightText}</p>
      </div>
    </footer>
  )
}
