"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
    const phone = "+919876543210";
    if (
        typeof window !== "undefined" &&
        document.body.classList.contains("menu-open")
    )
        return null;
    return (
        <motion.a
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            href={`https://wa.me/${phone.replace(/\+/g, "")}`}
            aria-label="Chat on WhatsApp"
            className="wa-float group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="bg-gradient-to-br from-[var(--brand-light-green)] to-[var(--brand-dark-green)] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:rotate-12">
                <FaWhatsapp size={28} />
            </div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-[var(--charcoal)] px-4 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap pointer-events-none opacity-0"
            >
                Chat with us!
            </motion.div>
        </motion.a>
    );
}
