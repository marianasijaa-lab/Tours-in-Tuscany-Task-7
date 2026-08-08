import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import FeaturesGrid from '@/components/sections/FeaturesGrid'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import { testimonials } from '@/data/testimonials'
import { Feature } from '@/types'

const stats = [
  { value: '20+', label: 'Years\nExperience' },
  { value: '100+', label: 'Happy\nCustomer' },
  { value: '15+', label: 'Choice\nof Services' },
  { value: '10+', label: 'Professional\nGuides' },
]

const features: Feature[] = [
  { title: 'Complete Packages For All Your Wishes', iconUrl: '/images/icon 15.png' },
  { title: 'Over 30 Years Of Experience', iconUrl: '/images/icon 16.png' },
  { title: 'Expert Guides For You', iconUrl: '/images/icon 6.png' },
  { title: 'Guaranteed fun at the best price!', iconUrl: '/images/icon 13.png' },
]

export default function AboutPage() {
  return (
    <main>
      <HeroSection
        heading="Our team cares about your full relax"
        subheading="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
        backgroundImageUrl="/images/image 2.jpg"
        showSearchBar={false}
        ctaLabel="View our Tour Packages"
        ctaHref="/#popular-destinations"
        headingClassName="podcast-font text-3xl md:text-4xl lg:text-[65px] text-white mb-5 mt-12"
        subheadingClassName="text-white text-sm md:text-xl max-w-[695px] mb-6 font-bold"
      />
      <AboutSection
        heading="We Are The Center Of Lucca To Offer You The Best"
        subheading="WELCOME TO OUR SITE!"
        description="We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"
        imageUrl="/images/image 16.png"
        stats={stats}
        imagePosition="left"
        showImageBorder={true}
      />
      <FeaturesGrid features={features} />
      <TestimonialsSection
        heading="Happy Customers Says"
        testimonials={testimonials}
      />
    </main>
  )
}
