import ContactHero from '@/components/sections/ContactHero'
import ContactInfo from '@/components/sections/ContactInfo'
import ContactForm from '@/components/sections/ContactForm'
import { ContactItem } from '@/types'

const contactItems: ContactItem[] = [
  {
    icon: '/images/icon footer 1.png',
    alt: 'Location',
    title: 'Visit Us',
    lines: ['Piazza Napoleone', 'Lucca, Tuscany, Italy'],
    note: null,
    href: null,
  },
  {
    icon: '/images/icon footer 2.png',
    alt: 'Phone',
    title: 'Call Us',
    lines: ['+39 346 368 5708'],
    note: 'Mon - Sun: 9:00 AM – 6:00 PM',
    href: 'tel:+393463685708',
  },
  {
    icon: '/images/icon footer 3.png',
    alt: 'Email',
    title: 'Email Us',
    lines: ['italiainlimo@gmail.com'],
    note: "We'll respond within 24 hours",
    href: 'mailto:italiainlimo@gmail.com',
  },
]

export default function ContactPage() {
  return (
    <main>
      <ContactHero
        heading="Get in Touch"
        subheading="We're here to help you plan the perfect Tuscany experience. Reach out and we'll get back to you as soon as possible."
        backgroundImageUrl="/images/image 2.jpg"
      />
      <ContactInfo items={contactItems} />
      <ContactForm />
    </main>
  )
}
