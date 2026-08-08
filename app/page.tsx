import HeroSection from '@/components/sections/HeroSection'
import PopularDestinations from '@/components/sections/PopularDestinations'
import AboutSection from '@/components/sections/AboutSection'
import SpecialOffersBanner from '@/components/sections/SpecialOffersBanner'
import ServicesSection from '@/components/sections/ServicesSection'
import BookNowSection from '@/components/sections/BookNowSection'
import PricingSection from '@/components/sections/PricingSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import { destinations } from '@/data/destinations'
import { services } from '@/data/services'
import { pricingPackages } from '@/data/packages'
import { testimonials } from '@/data/testimonials'

const stats = [
  { value: '20+', label: 'Years\nExperience' },
  { value: '100+', label: 'Happy\nCustomer' },
  { value: '15+', label: 'Choice\nof Services' },
  { value: '10+', label: 'Professional\nGuides' },
]

export default function HomePage() {
  return (
    <main>
      <HeroSection
        heading="Enjoy in the best way!"
        subheading="Enjoy our services for your trip anytime"
        backgroundImageUrl="/images/image 1.jpg"
        destinations={destinations}
        showSearchBar={true}
      />
      <PopularDestinations
        heading="Explore Our Popular Destinantions"
        destinations={destinations}
      />
      <AboutSection
        heading="We are the best company for your visit"
        subheading="WELCOME TO OUR SITE!"
        description="After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!"
        imageUrl="/images/about picture.png"
        stats={stats}
        imagePosition="left"
        imageContainerClassName="w-full max-w-[420px] mx-auto"
        imageInnerClassName="relative w-full aspect-[3/4] overflow-hidden"
      />
      <SpecialOffersBanner
        heading="Get Special Offers for Organizations"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        ctaLabel="Contact Us"
        ctaHref="/contact"
        imageUrl="/images/image 8.png"
      />
      <ServicesSection services={services} />
      <BookNowSection
        heading="Book Now Bike"
        bikeImageUrl="/images/bike picture.png"
        serviceOptions={['Bike Rental', 'Guided Tour', 'Taxi / NCC', 'Bus Package']}
      />
      <PricingSection
        heading="The Most Popular Packages"
        packages={pricingPackages}
      />
      <TestimonialsSection
        heading="Happy Customers Says"
        testimonials={testimonials}
      />
    </main>
  )
}
