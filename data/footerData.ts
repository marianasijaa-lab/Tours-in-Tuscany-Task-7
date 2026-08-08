import { FooterColumn } from '@/types'

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Bike and Rickshaw rental', href: '#' },
      { label: 'Guided Tours of Lucca', href: '#' },
      { label: 'Guided Bike Tour of Lucca', href: '#' },
      { label: 'Trip In The Tuscan Hills', href: '#' },
      { label: 'Transportation With Luxury Cars', href: '#' },
      { label: 'Wine Tours By Bus With Guide', href: '#' },
    ],
  },
  {
    heading: 'Home',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Tour Packages', href: '/#popular-destinations' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { label: 'Terms of Use', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
]

export const socialLinks = [
  { platform: 'Twitter', href: '#' },
  { platform: 'Facebook', href: '#' },
  { platform: 'Instagram', href: '#' },
]
