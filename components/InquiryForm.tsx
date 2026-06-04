"use client"
import {useState} from 'react'
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa'

export default function InquiryForm(){
  const [sent,setSent]=useState(false)
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }
  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-[var(--border-light)]">
      <h3 className="text-2xl font-heading font-semibold mb-6">Send Inquiry</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input 
          required 
          type="text"
          placeholder="Your Name" 
          className="p-3 rounded-lg border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-light-green)] focus:border-transparent transition-all"
        />
        <input 
          required 
          type="email"
          placeholder="Email Address" 
          className="p-3 rounded-lg border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-light-green)] focus:border-transparent transition-all"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input 
          type="text"
          placeholder="Company Name" 
          className="p-3 rounded-lg border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-light-green)] focus:border-transparent transition-all"
        />
        <input 
          type="tel"
          placeholder="Phone Number" 
          className="p-3 rounded-lg border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-light-green)] focus:border-transparent transition-all"
        />
      </div>
      
      <textarea 
        placeholder="Tell us about your requirements..." 
        rows={5}
        className="w-full p-3 rounded-lg border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-light-green)] focus:border-transparent transition-all mb-6 resize-none"
      />
      
      <div className="flex items-center justify-between flex-wrap gap-4">
        <button 
          type="submit"
          className="btn-group-slide inline-block bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95"
        >
          <div className="btn-group-content">
            <div className="btn-slide-default">
              <FaPaperPlane size={16} />
              <span>Send Inquiry</span>
            </div>
            <div className="btn-slide-hover">
              <FaPaperPlane size={16} />
              <span>Send Inquiry</span>
            </div>
          </div>
        </button>
        {sent && (
          <div className="flex items-center gap-2 text-[var(--brand-dark-green)] font-semibold text-sm">
            <FaCheckCircle size={18} />
            Inquiry sent successfully!
          </div>
        )}
      </div>
      
      <p className="text-xs text-[var(--muted)] mt-4">We typically respond within 24 hours on business days.</p>
    </form>
  )
}
