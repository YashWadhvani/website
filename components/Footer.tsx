import {
    FaInstagram,
    FaLinkedin,
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/images/DNR_Agri_Exports_Logo.png";

export default function Footer() {
    return (
        <footer className="bg-[var(--brand-dark-green)] border-t border-[var(--brand-forest)] text-white py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="inline-flex p-3 rounded-xl bg-[var(--brand-sage)]">
                                <Image
                                    src={Logo}
                                    alt="DNR Agri Exports Logo"
                                    width={200}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-sm text-[var(--brand-sage)] leading-relaxed max-w-sm">
                            Premium dehydrated onions, garlic, spices, peanuts
                            and vegetable powders. We prioritize quality,
                            traceability and timely logistics globally.
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                            <a
                                href="https://wa.me/919876543210"
                                aria-label="WhatsApp"
                                className="w-10 h-10 flex items-center justify-center bg-[var(--brand-forest)] text-[var(--cream)] hover:bg-[var(--brand-light-green)] rounded-xl transition-all duration-300 hover:text-[var(--brand-dark-green)] hover:-translate-y-1"
                            >
                                <FaWhatsapp size={20} />
                            </a>
                            <a
                                href="https://instagram.com"
                                aria-label="Instagram"
                                className="w-10 h-10 flex items-center justify-center bg-[var(--brand-forest)] text-[var(--cream)] hover:bg-[var(--brand-light-green)] rounded-xl transition-all duration-300 hover:text-[var(--brand-dark-green)] hover:-translate-y-1"
                            >
                                <FaInstagram size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                aria-label="LinkedIn"
                                className="w-10 h-10 flex items-center justify-center bg-[var(--brand-forest)] text-[var(--cream)] hover:bg-[var(--brand-light-green)] rounded-xl transition-all duration-300 hover:text-[var(--brand-dark-green)] hover:-translate-y-1"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[var(--cream)]">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm text-[var(--brand-sage)]">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-[var(--cream)] transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-[var(--cream)] transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/products"
                                    className="hover:text-[var(--cream)] transition-colors"
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/quality"
                                    className="hover:text-[var(--cream)] transition-colors"
                                >
                                    Quality
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-[var(--cream)] transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[var(--cream)]">
                            Get in Touch
                        </h3>
                        <ul className="space-y-3 text-sm text-[var(--brand-sage)]">
                            <li className="flex items-center gap-2">
                                <FaPhone
                                    size={16}
                                    className="text-[var(--brand-light-green)] flex-shrink-0"
                                />
                                <a
                                    href="tel:+919876543210"
                                    className="hover:text-[var(--cream)] transition-colors"
                                >
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope
                                    size={16}
                                    className="text-[var(--brand-light-green)] flex-shrink-0"
                                />
                                <a
                                    href="mailto:sales@dnragri.com"
                                    className="hover:text-[var(--cream)] transition-colors"
                                >
                                    sales@dnragri.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[var(--cream)]">
                            Certifications
                        </h3>
                        <p className="text-sm text-[var(--brand-sage)] mb-4">
                            ISO 9001:2015 certified | APEDA registered | FDA
                            compliant
                        </p>
                        {/* <div className="bg-[var(--brand-forest)]/30 border border-[var(--brand-sage)]/20 rounded-xl p-4">
                            <p className="text-xs text-[var(--brand-sage)]">
                                Exporting quality agri products to 50+ countries
                                worldwide
                            </p>
                        </div> */}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[var(--brand-forest)] pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[var(--brand-sage)]">
                        <p className="text-[var(--brand-sage)]">
                            © {new Date().getFullYear()} DNR Agri Exports. All
                            rights reserved.
                        </p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a
                                href="#"
                                className="hover:text-[var(--cream)] transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="hover:text-[var(--cream)] transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
