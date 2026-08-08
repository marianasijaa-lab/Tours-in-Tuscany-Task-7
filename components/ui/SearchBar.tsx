'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { Destination, SearchParams } from '@/types'

interface SearchBarProps {
  destinations: Destination[]
}

const peopleOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']
const timeOptions = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
const transportationOptions = ['Walking', 'Bike', 'Car', 'Bus', 'Private Car']

export default function SearchBar({ destinations }: SearchBarProps) {
  const [activeTab, setActiveTab] = useState<'public' | 'private'>('public')
  const [formValues, setFormValues] = useState<Partial<SearchParams>>({
    tourType: 'public',
    numberOfPeople: 0,
    date: '',
    time: '',
    tourId: '',
    transportation: '',
  })

  const handleTabChange = (tab: 'public' | 'private') => {
    setActiveTab(tab)
    setFormValues(prev => ({ ...prev, tourType: tab }))
  }

  const handleChange = (field: keyof SearchParams, value: string | number) => {
    setFormValues(prev => ({ ...prev, [field]: value }))
  }

  const [searchError, setSearchError] = useState<string | null>(null)

  const handleSearch = () => {
    // Validate at least one field is filled before searching
    const hasValues =
      formValues.numberOfPeople ||
      formValues.date ||
      formValues.time ||
      formValues.tourId ||
      formValues.transportation

    if (!hasValues) {
      setSearchError('Please fill in at least one field to search.')
      return
    }
    setSearchError(null)
    // Scroll to popular destinations section
    const section = document.getElementById('popular-destinations')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto">

      {/* Outer wrapper */}
      <div className="rounded-xl border border-[#FFFFFF33] bg-[#FFFFFF33] p-3">

        {/* Tabs */}
        <div className="flex gap-0 mb-0">
          <button
            onClick={() => handleTabChange('public')}
            className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-tl-xl text-sm sm:text-base font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'public'
                ? 'bg-white text-[#FA8B02]'
                : 'bg-[#FFFFFF66] text-white hover:bg-white/10'
            }`}
            aria-pressed={activeTab === 'public'}
            aria-label="Public Tours tab"
          >
            <Image
              src="/images/Vector 6.png"
              alt="Public Tours icon"
              width={17}
              height={17}
              className={activeTab === 'public' ? 'opacity-100' : 'opacity-60 brightness-0 invert'}
            />
            Public Tours
          </button>
          <button
            onClick={() => handleTabChange('private')}
            className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-tr-xl text-sm sm:text-base font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'private'
                ? 'bg-white text-[#FA8B02]'
                : 'bg-[#FFFFFF66] text-white hover:bg-white/10'
            }`}
            aria-pressed={activeTab === 'private'}
            aria-label="Private Tours tab"
          >
            <Image
              src="/images/Vector 8.png"
              alt="Private Tours icon"
              width={20}
              height={20}
              className={activeTab === 'private' ? 'opacity-100' : 'opacity-60 brightness-0 invert'}
            />
            Private Tours
          </button>
        </div>

        {/* White bar */}
        <div className="bg-white rounded-b-xl rounded-tr-xl shadow-lg p-4">

          {/* md: 2-column grid | lg: single flex row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:items-center gap-3">

            {/* Number of People */}
            <div className="min-w-0 border border-gray-100 md:border-0 rounded-lg md:rounded-none p-2 md:p-0">
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <Image src="/images/Vector 1.png" alt="People" width={17} height={17} />
                <span className="text-[15px] font-semibold text-[#333333]">Number of people</span>
              </div>
              <select
                value={formValues.numberOfPeople || ''}
                onChange={e => handleChange('numberOfPeople', e.target.value)}
                className="w-full text-[15px] text-[#888888] focus:outline-none bg-transparent cursor-pointer"
                aria-label="Number of people"
              >
                <option value="">Choose number</option>
                {peopleOptions.map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            <div className="hidden lg:block w-px h-10 bg-gray-200 flex-shrink-0" />

            {/* Date */}
            <div className="min-w-0 border border-gray-100 md:border-0 rounded-lg md:rounded-none p-2 md:p-0">
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <Image src="/images/Vector 2.png" alt="Date" width={17} height={17} />
                <span className="text-[15px] font-semibold text-[#333333]">Date</span>
              </div>
              <input
                type="date"
                value={formValues.date || ''}
                min={new Date().toISOString().split('T')[0]}
                onChange={e => handleChange('date', e.target.value)}
                className="w-full text-[15px] text-[#888888] focus:outline-none bg-transparent cursor-pointer"
                aria-label="Select date"
              />
            </div>

            <div className="hidden lg:block w-px h-10 bg-gray-200 flex-shrink-0" />

            {/* Time */}
            <div className="min-w-0 border border-gray-100 md:border-0 rounded-lg md:rounded-none p-2 md:p-0">
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <Image src="/images/Vector 3.png" alt="Time" width={17} height={17} />
                <span className="text-[15px] font-semibold text-[#333333]">Time</span>
              </div>
              <select
                value={formValues.time || ''}
                onChange={e => handleChange('time', e.target.value)}
                className="w-full text-[15px] text-[#888888] focus:outline-none bg-transparent cursor-pointer"
                aria-label="Choose time"
              >
                <option value="">Choose Time</option>
                {timeOptions.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="hidden lg:block w-px h-10 bg-gray-200 flex-shrink-0" />

            {/* Tour */}
            <div className="min-w-0 border border-gray-100 md:border-0 rounded-lg md:rounded-none p-2 md:p-0">
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <Image src="/images/Vector 4.png" alt="Tour" width={17} height={17} />
                <span className="text-[15px] font-semibold text-[#333333]">Tour</span>
              </div>
              <select
                value={formValues.tourId || ''}
                onChange={e => handleChange('tourId', e.target.value)}
                className="w-full text-[15px] text-[#888888] focus:outline-none bg-transparent cursor-pointer"
                aria-label="Select tour"
              >
                <option value="">Select Tour</option>
                {destinations.map(d => (
                  <option key={d.id} value={d.id}>{d.title}</option>
                ))}
              </select>
            </div>

            <div className="hidden lg:block w-px h-10 bg-gray-200 flex-shrink-0" />

            {/* Transportation */}
            <div className="min-w-0 border border-gray-100 md:border-0 rounded-lg md:rounded-none p-2 md:p-0">
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <Image src="/images/Vector 5.png" alt="Transportation" width={17} height={17} />
                <span className="text-[15px] font-semibold text-[#333333]">Transportation</span>
              </div>
              <select
                value={formValues.transportation || ''}
                onChange={e => handleChange('transportation', e.target.value)}
                className="w-full text-[15px] text-[#888888] focus:outline-none bg-transparent cursor-pointer"
                aria-label="Select transportation"
              >
                <option value="">Select Transportation</option>
                {transportationOptions.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full md:w-48 md:col-span-2 md:justify-self-center lg:w-14 h-14 bg-[#FA8B02] hover:bg-orange-600 text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
              aria-label="Search tours"
            >
              <Search size={28} className="md:hidden" />
              <Search size={36} className="hidden md:block lg:hidden" />
              <Search size={25} className="hidden lg:block" />
            </button>

          </div>
        </div>

      </div>

      {/* Validation message */}
      {searchError && (
        <p className="text-red-600 text-sm mt-2 text-center font-semibold" role="alert">
          {searchError}
        </p>
      )}
    </div>
  )
}
