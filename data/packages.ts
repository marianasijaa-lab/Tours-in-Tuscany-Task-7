import { PricingPackage } from '@/types'

export const pricingPackages: PricingPackage[] = [
  {
    id: 'bike-rickshaw',
    name: 'BIKE / RICKSHAW',
    pricePerDay: 10,
    features: [
      { icon: '/images/icon 1.png', label: 'Your bike for a day' },
      { icon: '/images/icon 2.png', label: 'City App' },
      { icon: '/images/icon 3.png', label: 'Discount on Rickshaw' },
      { icon: '/images/icon 4.png', label: 'Guaranteed Support' },
    ],
    ctaLabel: 'Book Now',
    imageUrl: '/images/image 13.png',
  },
  {
    id: 'bike-tours',
    name: 'BIKE TOURS',
    pricePerDay: 30,
    features: [
      { icon: '/images/icon 5.png', label: 'A Mountain Bike included' },
      { icon: '/images/icon 6.png', label: 'A Guide For You' },
      { icon: '/images/icon 7.png', label: 'Bottle of water' },
      { icon: '/images/icon 4.png', label: 'Guaranteed Support' },
    ],
    ctaLabel: 'Book Now',
    imageUrl: '/images/image 17.png',
  },
  {
    id: 'bus-trips',
    name: 'BUS TRIPS',
    pricePerDay: 45,
    features: [
      { icon: '/images/icon 8.png', label: 'Park ticket' },
      { icon: '/images/icon 9.png', label: 'Return bus' },
      { icon: '/images/icon 10.png', label: 'Companion' },
      { icon: '/images/icon 4.png', label: 'Guaranteed Support' },
    ],
    ctaLabel: 'Book Now',
    imageUrl: '/images/image 14.png',
  },
  {
    id: 'transfer',
    name: 'TRANSFER',
    pricePerDay: 10,
    features: [
      { icon: '/images/icon 11.png', label: 'Personal Driver' },
      { icon: '/images/icon 12.png', label: 'Wherever You Want' },
      { icon: '/images/icon 13.png', label: 'At the best price' },
      { icon: '/images/icon 4.png', label: 'Guaranteed Support' },
    ],
    ctaLabel: 'Book Now',
    imageUrl: '/images/image 11.png',
  },
]
