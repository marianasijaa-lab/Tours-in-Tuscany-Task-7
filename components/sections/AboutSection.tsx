import Image from 'next/image'
import { Stat } from '@/types'

interface AboutSectionProps {
  heading: string
  subheading: string
  description: string
  imageUrl: string
  stats: Stat[]
  imagePosition?: 'left' | 'right'
  imageContainerClassName?: string
  imageInnerClassName?: string
  showImageBorder?: boolean
}

export default function AboutSection({
  heading,
  subheading,
  description,
  imageUrl,
  stats,
  imagePosition = 'left',
  imageContainerClassName,
  imageInnerClassName,
  showImageBorder = false,
}: AboutSectionProps) {
  const defaultContainer = "w-full max-w-[430px]  md:max-w-[560px]  lg:max-w-none"
  const defaultInner = "relative w-full aspect-[4/3] lg:h-[430px] lg:aspect-auto"

  const imageBlock = (
    <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-[45%]">
      <div className={imageContainerClassName || defaultContainer}>
        {showImageBorder ? (
          <div className="p-4 bg-white rounded-3xl border border-[#EFEFEF]
 ">
            <div className={`${imageInnerClassName || defaultInner} rounded-3xl overflow-hidden`}>
              <Image
                src={imageUrl}
                alt="About us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <div className={imageInnerClassName || defaultInner}>
            <Image
              src={imageUrl}
              alt="About us"
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  )

  const textBlock = (
    <div className="flex flex-col justify-center lg:w-[50%]">
      <p className="text-[#888888] text-[15px] font-semibold uppercase mb-2">
        {subheading}
      </p>
      <h2 className="text-2xl md:text-[28px] font-extrabold text-[#333333] mb-6">
        {heading}
      </h2>
      <p className="text-[#333333] text-[15.4px] leading-8 mb-8">{description}</p>

      {/* Stats - inline row */}
      <div className="flex flex-wrap gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <p className="text-[28px] font-bold text-[#FA8B02]">{stat.value}</p>
            <p className="text-[#888888] text-sm mt-0.5 leading-snug whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-16 mb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {imagePosition === 'left' ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
