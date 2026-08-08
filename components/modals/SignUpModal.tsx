'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import PasswordInput from '@/components/ui/PasswordInput'
import type { SignUpFormData } from '@/types'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

interface FormErrors {
  fullName?: string
  email?: string
  password?: string
  agreeToTerms?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function SignUpModal({ isOpen, onClose, onSwitchToLogin }: SignUpModalProps) {
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'This field is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'This field is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.password) {
      newErrors.password = 'This field is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and privacy policy'
    }

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
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 backdrop-blur-sm px-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Sign Up"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-7 right-6  text-[#888888] hover:text-gray-600 transition-colors cursor-pointer"
          aria-label="Close sign up modal"
          tabIndex={0}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-3">Create Account</h2>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
          {/* Full Name */}
          <div>
            <label htmlFor="signup-fullName" className="block text-base font-semibold text-[#888888]  mb-1">
              Name and Surname
            </label>
            <input
              id="signup-fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name and surname"
              className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none  focus:ring-2 focus:ring-[#FA8B02] transition-colors ${
                errors.fullName ? 'border-red-600 focus:ring-red-600' : 'border-[#33333333]'
              }`}
              aria-describedby={errors.fullName ? 'signup-fullName-error' : undefined}
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && (
              <p id="signup-fullName-error" className="text-red-600 text-xs mt-1" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="signup-email" className="block text-base font-semibold text-[#888888] mb-1">
              Email Address
            </label>
            <input
              id="signup-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address "
              className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA8B02] transition-colors ${
                errors.email ? 'border-red-600 focus:ring-red-600' : 'border-[#33333333]'
              }`}
              aria-describedby={errors.email ? 'signup-email-error' : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p id="signup-email-error" className="text-red-600 text-xs mt-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <PasswordInput
            id="signup-password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password "
            label="Password"
            error={errors.password}
          />

          {/* Terms & Privacy Checkbox */}
          <div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[##FA8B02] focus:ring-[#FA8B02] cursor-pointer"
                aria-describedby={errors.agreeToTerms ? 'signup-terms-error' : undefined}
                aria-invalid={!!errors.agreeToTerms}
              />
              <span className="text-[13px] text-[#33333399]">
                I agree to the{' '}
                <a href="#" className="text-[#FA8B02] hover:underline ">
                  Terms 
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#FA8B02] hover:underline ">
                  Privacy 
                </a>
              </span>
            </label>
            {errors.agreeToTerms && (
              <p id="signup-terms-error" className="text-red-600 text-xs mt-1" role="alert">
                {errors.agreeToTerms}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.agreeToTerms || isSubmitting}
            className="w-full bg-[#FA8B02] hover:bg-orange-600 disabled:bg-[#cccccc] disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
            aria-label="Sign up for an account"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Processing...
              </>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-2 ">
          <span className="text-base text-gray-400">or</span>
        </div>

        <button
          type="button"
          className="w-full border border-gray-300 hover:bg-gray-50 text-gray-400 text-[17px] font-semibold py-2 rounded-full transition-colors flex items-center justify-center gap-3 cursor-pointer"
          aria-label="Sign up with Google"
        >
          <svg width="24" height="24" viewBox="0 0 18 18" aria-hidden="true" className="flex-shrink-0">
            <path
              d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
              fill="#4285F4"
            />
            <path
              d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
              fill="#34A853"
            />
            <path
              d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
              fill="#FBBC05"
            />
            <path
              d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
              fill="#EA4335"
            />
          </svg>
          <span>Sign Up with Google</span>
        </button>

        {/* Switch to Login */}
        <p className="text-center text-sm text-[#333333] mt-4">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-[#FA8B02] hover:underline font-semibold cursor-pointer"
            aria-label="Switch to login"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  )
}
