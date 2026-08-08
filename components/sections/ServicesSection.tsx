import Image from 'next/image'
import { Service } from '@/types'

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col"
            >
              {/* Image with rounded corners */}
              <div className="w-full rounded-2xl overflow-hidden mb-4">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h3 className="font-bold text-[#333333] text-xl sm:text-xl mb-1 min-h-[54px]">{service.title}</h3>
                <p className="text-[#333333] md:text-sm sm:text-lg leading-6">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
