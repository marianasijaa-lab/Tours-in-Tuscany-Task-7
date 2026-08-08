import Image from 'next/image'
import { ContactItem } from '@/types'

interface ContactInfoProps {
  items: ContactItem[]
}

export default function ContactInfo({ items }: ContactInfoProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-8 border border-[#EFEFEF] rounded-3xl hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 relative mb-4">
                <Image src={item.icon} alt={item.alt} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-extrabold text-[#333333] mb-2">{item.title}</h3>
              {item.lines.map((line) =>
                item.href ? (
                  <a
                    key={line}
                    href={item.href}
                    className="text-[#888888] text-sm font-semibold hover:text-[#FA8B02] transition-colors"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={line} className="text-[#888888] text-sm font-semibold">
                    {line}
                  </p>
                )
              )}
              {item.note && (
                <p className="text-[#888888] text-xs mt-2">{item.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
