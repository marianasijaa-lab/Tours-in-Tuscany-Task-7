'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Destination } from '@/types'

interface DestinationsCarouselProps {
  items: Destination[]
  itemsPerView?: number
  heading?: string
}

export default function DestinationsCarousel({ items, itemsPerView = 4, heading }: DestinationsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // On large screens show itemsPerView items; on small/medium show all
  const maxIndex = Math.max(0, items.length - itemsPerView)

  const handlePrev = () => setCurrentIndex(prev => Math.max(0, prev - 1))
  const handleNext = () => setCurrentIndex(prev => Math.min(maxIndex, prev + 1))

  // Visible items for lg screens 
  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <div>
      {/* Header row: heading + nav buttons */}
      <div className="flex items-center justify-between mb-8">
        {heading && (
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#333333]">{heading}</h2>
        )}
        <div className="flex gap-2 ml-auto">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-9 h-9 rounded-full border border-[#EFEFEF] bg-[#EFEFEF] flex items-center justify-center hover:bg-gray-300 disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="Previous destinations"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="w-9 h-9 rounded-full bg-[#FA8B02] text-white flex items-center justify-center hover:bg-orange-600 disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="Next destinations"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Mobile & tablet: full grid, all items visible */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        {items.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>

      {/* Desktop: carousel window */}
      <div className={`hidden lg:grid lg:grid-cols-${itemsPerView} gap-6`}>
        {visibleItems.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  )
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="cursor-pointer">
      {/* Image */}
      <div className="relative h-48 sm:h-64 lg:h-80 w-full rounded-2xl lg:rounded-3xl overflow-hidden mb-3">
        <Image
          src={destination.imageUrl}
          alt={destination.title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="font-bold text-[#333333] text-base lg:text-lg mb-1">{destination.title}</h3>
      <p className="text-gray-500 font-semibold text-sm mb-2">
        from{' '}
        <span className="ml-1 text-lg lg:text-xl font-extrabold text-[#FA8B02]">
          {destination.priceFrom} &euro;
        </span>
      </p>

      {/* Schedule & People */}
      <div className="flex items-center gap-4 lg:gap-16 mb-3 flex-wrap">
        <div className="flex items-center gap-1 text-[#FA8B02] text-xs lg:text-sm font-semibold opacity-60">
          <Image src="/images/Vector 7 (1).png" alt="schedule" width={14} height={14} />
          <span>{destination.schedule}</span>
        </div>
        <div className="flex items-center gap-1 text-[#FA8B02] text-xs lg:text-sm font-semibold opacity-60">
          <Image src="/images/Vector 8.png" alt="people" width={16} height={16} />
          <span>{destination.minPeople}-{destination.maxPeople} PP</span>
        </div>
      </div>

      <p className="text-[#333333] text-sm lg:text-[15px] line-clamp-2">
        {destination.shortDescription}
      </p>
    </div>
  )
}
