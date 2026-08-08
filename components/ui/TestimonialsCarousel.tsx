'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Testimonial } from '@/types'

interface TestimonialsCarouselProps {
  items: Testimonial[]
  heading?: string
}

export default function TestimonialsCarousel({ items, heading }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => setCurrentIndex(prev => Math.max(0, prev - 1))
  const handleNext = () => setCurrentIndex(prev => Math.min(items.length - 1, prev + 1))

  const visible = items.slice(currentIndex, currentIndex + 2)

  return (
    <div>
      {/* Header row: heading + nav buttons */}
      <div className="flex items-center justify-between mb-8">
        {heading && (
          <h2 className="text-2xl md:text-[28px] font-bold text-[#333333]">{heading}</h2>
        )}
        <div className="flex gap-2 ml-auto">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-9 h-9 rounded-full border border-[#EFEFEF] bg-[#EFEFEF] flex items-center justify-center hover:bg-gray-50  disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={17} className="text-gray-400" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + 2 >= items.length}
            className="w-9 h-9 rounded-full bg-[#FA8B02] text-white flex items-center justify-center hover:bg-[#FA8B02] disabled:cursor-not-allowed transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      {/* Two cards side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visible.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border border-[#EFEFEF] rounded-3xl p-7"
          >
            {/* Avatar + name centered at top */}
            <div className="flex flex-col items-center mb-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-2">
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.customerName}
                  fill
                  className="object-cover"
                />
              </div>
              <p className=" text-[#333333] text-base">{testimonial.customerName}</p>
            </div>

            {/* Opening quote - two icons side by side */}
            <div className="flex mb-2">
              <div className="relative w-6 h-6 opacity-10">
                <Image src="/images/icon 14.png" alt="quote" fill className="object-contain" />
              </div>
              <div className="relative w-6 h-6 opacity-10 -ml-1">
                <Image src="/images/icon 14.png" alt="quote" fill className="object-contain" />
              </div>
            </div>

            {/* Comment text */}
            <p className="text-[#333333] text-[15px] leading-[30px] ml-5 mb-4">
              {testimonial.comment}
            </p>

            {/* Closing quote - two icons side by side, bottom right*/}
            <div className="flex justify-end">
              <div className="relative w-6 h-6 opacity-10 ">
                <Image src="/images/icon 14.png" alt="quote" fill className="object-contain" />
              </div>
              <div className="relative w-6 h-6 opacity-10 -ml-1">
                <Image src="/images/icon 14.png" alt="quote" fill className="object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
