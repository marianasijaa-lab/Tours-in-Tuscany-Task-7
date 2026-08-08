import DestinationsCarousel from '@/components/ui/DestinationsCarousel'
import { Destination } from '@/types'

interface PopularDestinationsProps {
  heading: string
  destinations: Destination[]
}

export default function PopularDestinations({ heading, destinations }: PopularDestinationsProps) {
  return (
    <section id="popular-destinations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <DestinationsCarousel items={destinations} itemsPerView={4} heading={heading} />
      </div>
    </section>
  )
}
