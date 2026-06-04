import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="bg-[var(--charcoal)] text-white py-16 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-light-green)] to-[var(--brand-dark-green)] flex items-center justify-center text-white font-bold">D</div>
              <div>
                <div className="text-lg font-semibold">DNR Agri</div>
                <div className="text-xs opacity-75">Exports</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">Premium dehydrated onions, garlic, spices, peanuts and vegetable powders. We prioritize quality, traceability and timely logistics globally.</p>
            <div className="mt-4 flex items-center gap-2">
              <a href="https://wa.me/919876543210" aria-label="WhatsApp" className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[var(--brand-light-green)] rounded-lg transition-all duration-300">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[var(--brand-light-green)] rounded-lg transition-all duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[var(--brand-light-green)] rounded-lg transition-all duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="/" className="hover:text-[var(--brand-light-green)] transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-[var(--brand-light-green)] transition-colors">About Us</a></li>
              <li><a href="/products" className="hover:text-[var(--brand-light-green)] transition-colors">Products</a></li>
              <li><a href="/quality" className="hover:text-[var(--brand-light-green)] transition-colors">Quality</a></li>
              <li><a href="/contact" className="hover:text-[var(--brand-light-green)] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <FaPhone size={16} className="text-[var(--brand-light-green)] flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[var(--brand-light-green)] transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope size={16} className="text-[var(--brand-light-green)] flex-shrink-0" />
                <a href="mailto:sales@dnragri.com" className="hover:text-[var(--brand-light-green)] transition-colors">sales@dnragri.com</a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <p className="text-sm text-gray-300 mb-4">ISO 9001:2015 certified | APEDA registered | FDA compliant</p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-xs text-gray-400">Exporting quality agri products to 50+ countries worldwide</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>© {new Date().getFullYear()} DNR Agri Exports. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[var(--brand-light-green)] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--brand-light-green)] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
