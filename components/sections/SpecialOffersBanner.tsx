import Image from 'next/image'
import Link from 'next/link'

interface SpecialOffersBannerProps {
  heading: string
  description: string
  ctaLabel: string
  ctaHref: string
  imageUrl: string
}

export default function SpecialOffersBanner({
  heading,
  description,
  ctaLabel,
  ctaHref,
  imageUrl,
}: SpecialOffersBannerProps) {
  return (
    <div className="relative overflow-visible">
      {/* ── xs (< 640px): image on top, card below ── */}
      <div className="sm:hidden">
        {/* Orange background wraps both */}
        <div className="relative overflow-hidden" style={{minHeight: '500px'}}>
          {/* Background */}
          <Image
            src="/images/Rectangle.png"
            alt=""
            fill
            className="object-cover object-center"
            style={{ zIndex: 0 }}
            aria-hidden="true"
          />

          {/* Card */}
          <div className="relative z-10 px-4 pt-8 pb-[300px]">
            <div className="bg-[#FFFFFF4D] rounded-3xl p-5 text-center shadow-sm">
              <h2 className="text-xl font-extrabold text-[#333333] mb-2">
                {heading}
              </h2>
              <p className="text-black text-sm leading-[22px] mb-4">
                {description}
              </p>
              <Link
                href={ctaHref}
                className="inline-block bg-[#FA8B02] hover:bg-orange-600 text-white font-semibold px-10 py-1 rounded-full transition-colors text-sm"
                aria-label={ctaLabel}
              >
                {ctaLabel}
              </Link>
            </div>
          </div>

          {/* Image — absolute, pinned to bottom center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[220px] h-[260px]">
            <Image
              src={imageUrl}
              alt="Special offer"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* ── sm+ (≥ 640px): side by side, image overflows bottom ── */}
      <section className="hidden sm:block relative overflow-visible sm:h-[300px] md:h-[380px] lg:h-[300px]">
        {/* Background */}
        <Image
          src="/images/Rectangle.png"
          alt=""
          fill
          className="object-cover object-center"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16 flex flex-row items-center h-[280px] md:h-[360px] lg:h-[280px] lg:justify-between">
          {/* Card */}
          <div className="bg-[#FFFFFF4D] rounded-3xl p-3 w-72 md:w-80 lg:w-[450px] text-center shadow-sm mt-3 flex-shrink-0">
            <h2 className="text-[22px] md:text-[28px] font-extrabold text-[#333333] mb-2">
              {heading}
            </h2>
            <p className="text-black text-base leading-[26px] mb-4">
              {description}
            </p>
            <Link
              href={ctaHref}
              className="inline-block bg-[#FA8B02] hover:bg-orange-600 text-white font-semibold px-[42px] py-2 rounded-full transition-colors text-[17px]"
              aria-label={ctaLabel}
            >
              {ctaLabel}
            </Link>
          </div>

          {/* Image — overflows top on md, bottom on lg */}
          <div className="absolute right-[20px] bottom-0 w-[220px] h-[300px]
            md:right-[40px]  md:w-[280px] md:h-auto
            lg:top-auto lg:bottom-[-20px] lg:right-[80px] lg:w-[340px] lg:h-[392px]">
            <Image
              src={imageUrl}
              alt="Special offer"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
