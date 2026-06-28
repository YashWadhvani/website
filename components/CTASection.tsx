import Link from "next/link";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function CTASection() {
    return (
        <div className="bg-[var(--brand-dark-green)] text-white py-16 rounded-t-2xl shadow-lg overflow-hidden relative">
            {/* <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div> */}
            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-tight mb-4 text-[var(--ivory-light)]">
                            Ready to Source Premium Agro Products?
                        </h2>
                        <p className="text-lg text-[var(--cream)] mb-2">
                            Partner with us for competitive pricing, reliable
                            logistics and ISO-certified quality.
                        </p>
                        <p className="text-sm text-[var(--cream)]">
                            50+ countries served • ISO 22000 certified • Full
                            traceability
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-start md:justify-end">
                        <Link
                            href="/contact"
                            className="btn-group-slide inline-block bg-[var(--cream)] text-[var(--brand-dark-green)] px-6 py-3 rounded-xl font-semibold transition-all active:scale-95"
                        >
                            <div className="btn-group-content">
                                <div className="btn-slide-default">
                                    <span>Get Quote</span>
                                    <FaArrowRight size={16} />
                                </div>
                                <div className="btn-slide-hover">
                                    <span>Get Quote</span>
                                    <FaArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="https://wa.me/919876543210"
                            className="btn-group-slide inline-block bg-transparent border border-[var(--cream)] text-[var(--cream)] px-6 py-3 rounded-xl hover:text-[var(--cream)] transition-all"
                        >
                            <div className="btn-group-content">
                                <div className="btn-slide-default">
                                    <FaWhatsapp size={18} />
                                    <span>WhatsApp</span>
                                </div>
                                <div className="btn-slide-hover">
                                    <FaWhatsapp size={18} />
                                    <span>WhatsApp</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
