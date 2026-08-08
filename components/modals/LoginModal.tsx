'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import PasswordInput from '@/components/ui/PasswordInput'
import type { LoginFormData } from '@/types'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToSignUp: () => void
}

interface FormErrors {
  email?: string
  password?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function LoginModal({ isOpen, onClose, onSwitchToSignUp }: LoginModalProps) {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
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

    if (!formData.email.trim()) {
      newErrors.email = 'This field is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.password) {
      newErrors.password = 'This field is required'
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
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 backdrop-blur-[2px] px-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Login"
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-9 right-7 text-[#888888] hover:text-gray-600 transition-colors cursor-pointer"
          aria-label="Close login modal"
          tabIndex={0}
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl sm:text-[25px] font-bold text-[#333333] mb-6">Login</h2>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label htmlFor="login-email" className="block text-base font-semibold text-[#888888] mb-2">
              Email Address
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FA8B02] transition-colors ${
                errors.email ? 'border-red-600 focus:ring-red-600' : 'border-[#33333333]'
              }`}
              aria-describedby={errors.email ? 'login-email-error' : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p id="login-email-error" className="text-red-600 text-xs mt-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <PasswordInput
              id="login-password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              label="Password"
              error={errors.password}
            />
            {/* Forgot password */}
            <div className="text-right mt-1">
              <a
                href="#"
                className="text-sm text-[#33333399] hover:underline"
                aria-label="Forgot your password"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FA8B02] hover:bg-orange-600 disabled:bg-[#cccccc] disabled:cursor-not-allowed text-xl text-white font-semibold py-2.5 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
            aria-label="Sign in to your account"
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
          'Sign In'
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-2">
          <span className="text-base text-gray-400 ">or</span>
        </div>

        {/* Google Sign In */}
        <button
          type="button"
          className="w-full border border-gray-300 hover:bg-gray-50 text-gray-400 text-lg font-semibold py-2 rounded-full transition-colors flex items-center justify-center gap-3 cursor-pointer"
          aria-label="Sign in with Google"
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
          <span>Sign In with Google</span>
        </button>

        {/* Switch to Sign Up */}
        <p className="text-center text-base font-normal text-[#333333] mt-4">
          Don&apos;t have an account ?{' '}
          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="text-[#FA8B02] text-base hover:underline font-semibold cursor-pointer"
            aria-label="Switch to sign up"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  )
}
