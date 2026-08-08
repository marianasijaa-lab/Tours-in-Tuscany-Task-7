'use client'

import { useState } from 'react'

interface ContactFormData {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  subject?: string
  message?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'This field is required'
    if (!formData.email.trim()) newErrors.email = 'This field is required'
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address'
    if (!formData.subject) newErrors.subject = 'Please select a subject'
    if (!formData.message.trim()) newErrors.message = 'This field is required'
    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
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
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <section className="py-16  bg-white">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#888888] text-[15px] font-semibold uppercase mb-2">CONTACT US</p>
          <h2 className="text-2xl md:text-[28px] font-extrabold text-[#333333] mb-4">
            Send Us a Message
          </h2>
          <p className="text-[#888888] text-[15px]">
            Have questions about our tours? Fill out the form and we&apos;ll get back to you shortly.
          </p>
        </div>

        {/* Success Banner */}
        {isSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl px-6 py-4 mb-6 text-center text-sm font-semibold" role="alert">
            ✓ Your message has been sent! We&apos;ll get back to you within 24 hours.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-3xl shadow-lg px-6 sm:px-10 py-8"
          aria-label="Contact form"
        >
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="contact-fullName" className="block text-base font-semibold text-[#333333] mb-1">
                Full Name <span className="text-[#FA8B02]">*</span>
              </label>
              <input
                id="contact-fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA8B02] transition-colors ${
                  errors.fullName ? 'border-red-600' : 'border-[#EFEFEF]'
                }`}
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && <p className="text-red-600 text-xs mt-1" role="alert">{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-base font-semibold text-[#333333] mb-1">
                Email Address <span className="text-[#FA8B02]">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA8B02] transition-colors ${
                  errors.email ? 'border-red-600' : 'border-[#EFEFEF]'
                }`}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="text-red-600 text-xs mt-1" role="alert">{errors.email}</p>}
            </div>
          </div>

          {/* Row 2: Phone + Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="contact-phone" className="block text-base font-semibold text-[#333333] mb-1">
                Phone Number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-[#EFEFEF] rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA8B02] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-base font-semibold text-[#333333] mb-1">
                Subject <span className="text-[#FA8B02]">*</span>
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FA8B02] transition-colors cursor-pointer ${
                  errors.subject ? 'border-red-600' : 'border-[#EFEFEF]'
                }`}
                aria-invalid={!!errors.subject}
              >
                <option value="">Select a subject</option>
                <option value="booking">Booking Inquiry</option>
                <option value="tours">Tour Information</option>
                <option value="groups">Group Bookings</option>
                <option value="special">Special Requests</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && <p className="text-red-600 text-xs mt-1" role="alert">{errors.subject}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="contact-message" className="block text-base font-semibold text-[#333333] mb-1">
              Message <span className="text-[#FA8B02]">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your inquiry..."
              className={`w-full border rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA8B02] transition-colors resize-none ${
                errors.message ? 'border-red-600' : 'border-[#EFEFEF]'
              }`}
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="text-red-600 text-xs mt-1" role="alert">{errors.message}</p>}
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FA8B02] hover:bg-orange-600 disabled:bg-[#cccccc] disabled:cursor-not-allowed text-white font-semibold py-3 px-12 rounded-full transition-colors cursor-pointer text-base flex items-center gap-2"
              aria-label="Send contact message"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
