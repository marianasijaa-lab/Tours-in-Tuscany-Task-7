import { Testimonial } from '@/types'
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel'

interface TestimonialsSectionProps {
  heading: string
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ heading, testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <TestimonialsCarousel items={testimonials} heading={heading} />
      </div>
    </section>
  )
}
