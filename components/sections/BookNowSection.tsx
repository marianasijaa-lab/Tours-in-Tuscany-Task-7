import Image from 'next/image'
import BookingForm from '@/components/ui/BookingForm'

interface BookNowSectionProps {
  heading: string
  bikeImageUrl: string
  serviceOptions: string[]
}

export default function BookNowSection({
  heading,
  bikeImageUrl,
  serviceOptions,
}: BookNowSectionProps) {
  return (
    <section className="relative overflow-visible lg:pb-10">
      {/* Background */}
      <div className="absolute inset-x-0 top-0 h-full  -z-10">
        <Image
          src="/images/bg.png"
          alt="background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full pt-10 pb-10 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Booking Form */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#333333] mb-6 text-center">
              {heading}
            </h2>
            <BookingForm serviceOptions={serviceOptions} />
          </div>

          {/* Bike Image  */}
          <div className="relative w-full lg:w-1/2 flex-shrink-0 h-[280px] md:h-[420px] lg:h-[450px] lg:-mb-[120px] -mb-[70px] sm:-mb-16">
            <Image
              src={bikeImageUrl}
              alt={heading}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  )
}
