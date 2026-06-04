"use client"
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapPin, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../../components/SectionHeading'
import InquiryForm from '../../components/InquiryForm'

export default function ContactPage(){
  return (
    <main className="container py-24">
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}}>
        <SectionHeading title="Get In Touch" subtitle="Connect with our team for inquiries and partnerships"/>
      </motion.div>
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} viewport={{once:true}} className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <div>
          <h3 className="text-2xl font-heading font-semibold mb-6">Contact Information</h3>
          <p className="text-[var(--text-dark)] mb-8">Reach out to our export team for pricing, samples, certifications and logistics details. We're here to support your business needs.</p>
          
          <div className="space-y-6">
            {/* Phone */}
            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--brand-light-green)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-[var(--brand-dark-green)]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--charcoal)] mb-2">Phone</h4>
                  <a href="tel:+919876543210" className="text-[var(--brand-dark-green)] hover:text-[var(--brand-light-green)] font-medium">+91 98765 43210</a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--brand-light-green)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-[var(--brand-dark-green)]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--charcoal)] mb-2">Email</h4>
                  <a href="mailto:sales@dnragriexports.com" className="text-[var(--brand-dark-green)] hover:text-[var(--brand-light-green)] font-medium">sales@dnragriexports.com</a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--brand-light-green)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapPin className="text-[var(--brand-dark-green)]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--charcoal)] mb-2">Location</h4>
                  <p className="text-[var(--text-dark)] text-sm">Example Industrial Estate,<br/>City, State 000000</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-[var(--border-light)]">
              <h4 className="font-semibold text-[var(--charcoal)] mb-4">Connect With Us</h4>
              <div className="flex items-center gap-3">
                <a href="https://wa.me/919876543210" aria-label="WhatsApp" className="w-11 h-11 flex items-center justify-center bg-[var(--brand-light-green)]/10 hover:bg-[var(--brand-light-green)] text-[var(--brand-dark-green)] hover:text-white rounded-lg transition-all">
                  <FaWhatsapp size={20} />
                </a>
                <a href="https://instagram.com" aria-label="Instagram" className="w-11 h-11 flex items-center justify-center bg-[var(--brand-light-green)]/10 hover:bg-[var(--brand-light-green)] text-[var(--brand-dark-green)] hover:text-white rounded-lg transition-all">
                  <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="w-11 h-11 flex items-center justify-center bg-[var(--brand-light-green)]/10 hover:bg-[var(--brand-light-green)] text-[var(--brand-dark-green)] hover:text-white rounded-lg transition-all">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <InquiryForm />
        </div>
      </motion.div>
    </main>
  )
}
