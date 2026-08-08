// ——— Destination / Tour ———
export interface Destination {
  id: string
  title: string
  priceFrom: number          // EUR
  schedule: string           // e.g. "Every Day", "Monday", "To Be Decided"
  minPeople: number
  maxPeople: number
  shortDescription: string
  imageUrl: string
}

// ——— Service ———
export interface Service {
  id: string
  title: string
  description: string
  imageUrl: string
}

// ——— Pricing Package ———
export interface PricingPackage {
  id: string
  name: string
  pricePerDay: number        // EUR
  features: { icon: string; label: string }[]
  ctaLabel: string
  imageUrl?: string
}

// ——— Testimonial ———
export interface Testimonial {
  id: string
  customerName: string
  avatarUrl: string
  comment: string
}

// ——— Search / Booking ———
export interface SearchParams {
  tourType: 'public' | 'private'
  numberOfPeople: number
  date: string
  time: string
  tourId: string
  transportation: string
}

export interface BookingFormData {
  name: string
  email: string
  telephone: string
  serviceType: string
  date: string
  time: string
}

// ——— Auth ———
export interface SignUpFormData {
  fullName: string
  email: string
  password: string
  agreeToTerms: boolean
}

export interface LoginFormData {
  email: string
  password: string
}

// ——— Navigation ———
export interface NavLink {
  label: string
  href: string
}

export interface FooterColumn {
  heading: string
  links: { label: string; href: string }[]
}

// ——— Features ———
export interface Feature {
  title: string
  iconUrl?: string
}

// ——— Contact ———
export interface ContactItem {
  icon: string
  alt: string
  title: string
  lines: string[]
  note: string | null
  href: string | null
}

// ——— Stats ——— 
export interface Stat {
  value: string
  label: string
}
