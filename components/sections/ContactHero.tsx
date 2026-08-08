import Image from 'next/image'

interface ContactHeroProps {
  heading: string
  subheading: string
  backgroundImageUrl: string
}

export default function ContactHero({ heading, subheading, backgroundImageUrl }: ContactHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageUrl}
          alt="Contact background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center text-center lg:mt-10 pt-40 pb-16 sm:pt-36 lg:pt-24">
        <h1 className="podcast-font text-3xl sm:text-4xl md:text-5xl lg:text-[65px] text-white mb-4 leading-tight text-center">
          {heading}
        </h1>
        <p className="text-white text-sm md:text-xl max-w-[695px] mb-6 font-bold">
          {subheading}
        </p>
      </div>
    </section>
  )
}
