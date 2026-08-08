'use client'

import { useState } from 'react'
import Image from 'next/image'
import { BookingFormData } from '@/types'

interface BookingFormProps {
  serviceOptions: string[]
}

interface BookingFormErrors {
  name?: string
  email?: string
  serviceType?: string
  date?: string
  time?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const timeOptions = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']

const emptyForm: BookingFormData = {
  name: '',
  email: '',
  telephone: '',
  serviceType: '',
  date: '',
  time: '',
}

export default function BookingForm({ serviceOptions }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>(emptyForm)
  const [errors, setErrors] = useState<BookingFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof BookingFormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validate = (): BookingFormErrors => {
    const newErrors: BookingFormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'This field is required'
    if (!formData.email.trim()) newErrors.email = 'This field is required'
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address'
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service'
    if (!formData.date) newErrors.date = 'Please select a date'
    if (!formData.time) newErrors.time = 'Please select a time'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData(emptyForm)
    setTimeout(() => setIsSuccess(false), 4000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-[#FFFFFF4D] rounded-3xl shadow-lg px-6 sm:px-11 py-8 w-full max-w-xl"
      aria-label="Book a service form"
    >
      {/* Success Banner */}
      {isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl px-4 py-3 mb-5 text-center text-sm font-semibold" role="alert">
          ✓ Your booking request has been sent! We&apos;ll contact you shortly.
        </div>
      )}

      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="booking-name" className="block text-base font-semibold text-[#333333] mb-1">
            Name and Surname <span className="text-[#FA8B02]">*</span>
          </label>
          <input
            id="booking-name"
            type="text"
            value={formData.name}
            onChange={e => handleChange('name', e.target.value)}
            placeholder="Enter your name and surname"
            className={`w-full border rounded-lg px-4 py-2.5 text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA8B02] ${errors.name ? 'border-red-500' : 'border-white'}`}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="booking-email" className="block text-base font-semibold text-[#333333] mb-1">
            Email Address <span className="text-[#FA8B02]">*</span>
          </label>
          <input
            id="booking-email"
            type="email"
            value={formData.email}
            onChange={e => handleChange('email', e.target.value)}
            placeholder="Enter your email address"
            className={`w-full border rounded-lg px-4 py-2.5 text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA8B02] ${errors.email ? 'border-red-500' : 'border-white'}`}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>}
        </div>
      </div>

      {/* Row 2: Telephone + Service Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="booking-telephone" className="block text-base font-semibold text-[#333333] mb-1">
            Telephone Number
          </label>
          <input
            id="booking-telephone"
            type="tel"
            value={formData.telephone}
            onChange={e => handleChange('telephone', e.target.value)}
            placeholder="Enter your telephone number"
            className="w-full border border-white rounded-lg px-4 py-2.5 text-[13px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA8B02]"
          />
        </div>
        <div>
          <label htmlFor="booking-service" className="block text-base font-semibold text-[#333333] mb-1">
            Service Type <span className="text-[#FA8B02]">*</span>
          </label>
          <div className="relative">
            <select
              id="booking-service"
              value={formData.serviceType}
              onChange={e => handleChange('serviceType', e.target.value)}
              className={`w-full border rounded-lg px-4 py-2.5 pr-8 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#FA8B02] bg-white cursor-pointer appearance-none ${errors.serviceType ? 'border-red-500' : 'border-white'} ${formData.serviceType ? 'text-[#333333]' : 'text-gray-400'}`}
              aria-label="Select service type"
              aria-invalid={!!errors.serviceType}
            >
              <option value="">Select the service types</option>
              {serviceOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {errors.serviceType && <p className="text-red-500 text-xs mt-1" role="alert">{errors.serviceType}</p>}
        </div>
      </div>

      {/* Row 3: Date + Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="booking-date" className="block text-base font-semibold text-[#333333] mb-1">
            Date <span className="text-[#FA8B02]">*</span>
          </label>
          <div className="relative">
            <input
              id="booking-date"
              type="date"
              value={formData.date}
              min={new Date().toISOString().split('T')[0]}
              onChange={e => handleChange('date', e.target.value)}
              className={`w-full border rounded-lg px-3 py-2.5 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#FA8B02] pr-9 ${errors.date ? 'border-red-500' : 'border-gray-200'} ${formData.date ? 'text-[#333333]' : 'text-gray-500'}`}
              aria-invalid={!!errors.date}
            />
            <Image
              src="/images/Vector 2.png"
              alt="date icon"
              width={16}
              height={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
          {errors.date && <p className="text-red-500 text-xs mt-1" role="alert">{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="booking-time" className="block text-base font-semibold text-[#333333] mb-1">
            Time <span className="text-[#FA8B02]">*</span>
          </label>
          <div className="relative">
            <select
              id="booking-time"
              value={formData.time}
              onChange={e => handleChange('time', e.target.value)}
              className={`w-full border rounded-lg px-4 py-2.5 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#FA8B02] bg-white cursor-pointer pr-9 appearance-none ${errors.time ? 'border-red-500' : 'border-white'} ${formData.time ? 'text-[#333333]' : 'text-gray-500'}`}
              aria-label="Select time"
              aria-invalid={!!errors.time}
            >
              <option value="">Select the time</option>
              {timeOptions.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <Image
              src="/images/Vector 3.png"
              alt="time icon"
              width={16}
              height={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
          {errors.time && <p className="text-red-500 text-xs mt-1" role="alert">{errors.time}</p>}
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#FA8B02] hover:bg-orange-600 disabled:bg-[#cccccc] disabled:cursor-not-allowed text-white font-semibold py-2 px-14 rounded-full transition-colors cursor-pointer text-base flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Booking...
            </>
          ) : (
            'Book Now'
          )}
        </button>
      </div>
    </form>
  )
}
