import Image from 'next/image'
import { Feature } from '@/types'

interface FeaturesGridProps {
  features: Feature[]
}

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg 2.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1035px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#FFFFFF4D] rounded-3xl px-2 py-6 flex flex-col items-center text-center"
            >
              {feature.iconUrl && (
                <div className="w-20 h-12 flex items-center justify-center mb-2">
                  <div className="relative w-10 h-10">
                    <Image
                      src={feature.iconUrl}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
              <h3 className="font-semibold text-black text-base">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
