import Image from 'next/image'
import Link from 'next/link'
import SearchBar from '@/components/ui/SearchBar'
import { Destination } from '@/types'

interface HeroSectionProps {
  heading: string
  subheading: string
  backgroundImageUrl: string
  destinations?: Destination[]
  showSearchBar?: boolean
  ctaLabel?: string
  ctaHref?: string
  headingClassName?: string
  subheadingClassName?: string
}

export default function HeroSection({
  heading,
  subheading,
  backgroundImageUrl,
  destinations = [],
  showSearchBar = false,
  ctaLabel,
  ctaHref,
  headingClassName,
  subheadingClassName,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageUrl}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 " />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center text-center pt-36 md:pt-40 lg:pt-8">
        <h1 className={headingClassName || "podcast-font text-4xl md:text-5xl lg:text-7xl text-white mb-2 leading-tight"}>
          {heading}
        </h1>
        <p className={subheadingClassName || "text-white text-base md:text-2xl max-w-2xl mb-8 font-bold"}>
          {subheading}
        </p>

        {/* CTA button (for pages without search bar) */}
        {!showSearchBar && ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            className="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors mb-8 text-sm sm:text-base lg:text-lg whitespace-nowrap"
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </Link>
        )}

        {/* Search Bar */}
        {showSearchBar && destinations.length > 0 && (
          <div className="w-full mt-4">
            <SearchBar destinations={destinations} />
          </div>
        )}
      </div>
    </section>
  )
}
