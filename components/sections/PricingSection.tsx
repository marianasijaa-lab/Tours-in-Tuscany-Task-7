import Image from 'next/image'
import { PricingPackage } from '@/types'

interface PricingSectionProps {
  heading: string
  packages: PricingPackage[]
}

export default function PricingSection({ heading, packages }: PricingSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-[28px] font-extrabold text-[#333333] mb-8">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-3xl overflow-hidden flex flex-col border border-[#EFEFEF] bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Package Image */}
              {pkg.imageUrl ? (
                <div className="w-full flex-shrink-0 overflow-hidden rounded-t-3xl">
                  <Image
                    src={pkg.imageUrl}
                    alt={pkg.name}
                    width={600}
                    height={400}
                    className="w-full h-auto max-h-[380px]  object-cover object-top"
                  />
                </div>
              ) : (
                <div className="h-[200px] sm:h-[265px] w-full bg-white flex-shrink-0" />
              )}

              <div className="p-4 flex flex-col flex-1">
                {/* Package name */}
                <h3 className="font-extrabold text-[#333333] text-base mb-[6px]">
                  {pkg.name}
                </h3>

                {/* Price: € 10 /day */}
                <div className="flex items-end gap-1 mb-5">
                  <span className="text-gray-400 text-base self-start mt-1">€</span>
                  <span className="text-[#FA8B02] font-bold text-4xl leading-none">
                    {pkg.pricePerDay}
                  </span>
                  <span className="text-gray-400 text-sm">/day</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex items-center gap-4 text-[#333333] text-base"
                    >
                      <span className="flex-shrink-0 w-5 h-5 relative">
                        <Image
                          src={feature.icon}
                          alt={feature.label}
                          fill
                          className="object-contain"
                        />
                      </span>
                      {feature.label}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className="w-full border border-[#FA8B02] text-[#FA8B02] hover:bg-[#FA8B02] hover:text-white font-semibold py-2.5 rounded-full transition-colors cursor-pointer text-sm"
                  aria-label={`${pkg.ctaLabel} - ${pkg.name}`}
                >
                  {pkg.ctaLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
