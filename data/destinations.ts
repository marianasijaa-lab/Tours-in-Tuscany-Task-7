import { Destination } from '@/types'

export const destinations: Destination[] = [
  {
    id: 'lucca-bike',
    title: 'Lucca Bike Tour',
    priceFrom: 34,
    schedule: 'EVERY DAY',
    minPeople: 3,
    maxPeople: 10,
    shortDescription: 'A tour of the city and its surroundings led by a professional guide ...',
    imageUrl: '/images/image 3.png',
  },
  {
    id: 'wine-tuscany',
    title: 'Wine tasting In Tuscany',
    priceFrom: 34,
    schedule: 'MONDAY',
    minPeople: 10,
    maxPeople: 30,
    shortDescription: 'The real magic is here where you can enjoy the best Tuscan wine and eat ...',
    imageUrl: '/images/image 4.png',
  },
  {
    id: 'cinque-terre',
    title: 'Cinque Terre Tour',
    priceFrom: 34,
    schedule: 'TO BE DECIDED',
    minPeople: 10,
    maxPeople: 50,
    shortDescription: 'Visiting the 5 Terre is a must, and you can never go there enough ...',
    imageUrl: '/images/image 5.png',
  },
  {
    id: 'siena-surroundings',
    title: 'Siena and Surroundings',
    priceFrom: 34,
    schedule: 'TO BE DECIDED',
    minPeople: 5,
    maxPeople: 10,
    shortDescription: 'Visit the beautiful Siena and the cities that surround it to experience ...',
    imageUrl: '/images/image 6.png',
  },
]
