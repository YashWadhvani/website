"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
    FaBars,
    FaTimes,
    FaInstagram,
    FaLinkedin,
    FaPhone,
    FaWhatsapp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../public/images/DNR_Agri_Exports_Logo.png";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const closeMenu = () => {
        setClosing(true);

        setTimeout(() => {
            setOpen(false);
            setClosing(false);
        }, 700);
    };

    useEffect(() => {
        if (open) {
            setClosing(false);
        }
    }, [open]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMenu();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/products", label: "Products" },
        { href: "/quality", label: "Quality" },
        { href: "/exhibitions", label: "Exhibitions" },
        { href: "/contact", label: "Contact Us" },
    ];

    return (
        <header
            className={`fixed w-full z-40 top-0 transition-all duration-300 ${scrolled ? "bg-[var(--ivory-light)]/95 backdrop-blur-sm shadow-md border-b border-[var(--border-light)]" : "bg-[var(--background)]/80 backdrop-blur-sm"}`}
        >
            <div className="container flex items-center justify-between h-20 relative">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src={Logo}
                        alt="DNR Agri Exports Logo"
                        width={140}
                        height={40}
                        className="object-contain"
                    />
                </Link>

                {/* Center nav - visible on md and up */}
                <nav className="hidden md:flex flex-1 justify-center">
                    <ul className="flex items-center gap-8">
                        {links.map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    className={`text-sm font-medium transition-colors ${scrolled ? "text-[var(--text-dark)] hover:text-[var(--brand-dark-green)]" : "text-[var(--charcoal)] hover:text-[var(--brand-dark-green)]"}`}
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right side: CTA + mobile menu button */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/contact"
                        className="btn-group-slide hidden md:inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)] text-white shadow-md hover:shadow-lg hover:text-white transition-all"
                    >
                        <div className="btn-group-content">
                            <div className="btn-slide-default">
                                <span>Inquire Now</span>
                            </div>
                            <div className="btn-slide-hover">
                                <span>Inquire Now</span>
                            </div>
                        </div>
                    </Link>

                    <button
                        id="menu-toggle"
                        className="md:hidden p-2 text-[var(--charcoal)] relative z-40"
                        onClick={() => {
                            if (open) {
                                closeMenu();
                            } else {
                                setClosing(false);
                                setOpen(true);
                            }
                        }}
                        aria-label="Toggle menu"
                    >
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile full-screen overlay menu with expanding circle animation */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* expanding circle */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{
                                scale: closing ? 0 : 80,
                            }}
                            transition={{
                                duration: closing ? 0.7 : 0.7,
                                ease: "easeInOut",
                            }}
                            style={{
                                transformOrigin: "center center",
                                top: 12,
                                right: 12,
                            }}
                            className="fixed w-10 h-10 rounded-full bg-[var(--brand-dark-green)] z-40 pointer-events-none"
                        />

                        {/* menu content */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: closing ? 0 : 1,
                                y: closing ? 20 : 0,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                            style={{ paddingTop: "env(safe-area-inset-top)" }}
                            className="fixed inset-0 z-50 text-white flex flex-col"
                        >
                            <div className="flex items-center justify-between p-4 bg-white">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2"
                                    onClick={() => closeMenu()}
                                >
                                    <Image
                                        src={Logo}
                                        alt="DNR Logo"
                                        width={150}
                                        height={36}
                                        className="object-contain"
                                    />
                                </Link>
                                <button
                                    onClick={() => closeMenu()}
                                    aria-label="Close menu"
                                    className="p-1 z-50 text-[var(--brand-dark-green)]"
                                >
                                    <FaTimes size={28} />
                                </button>
                            </div>

                            <div className="flex-1 flex items-center justify-center px-6 pt-8">
                                <ul className="flex flex-col items-center gap-8 text-xl font-semibold">
                                    {links.map((l) => (
                                        <li key={l.href}>
                                            <Link
                                                href={l.href}
                                                onClick={() => closeMenu()}
                                                className="hover:text-[var(--brand-light-green)] transition-colors"
                                            >
                                                {l.label}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link
                                            href="/contact"
                                            onClick={() => closeMenu()}
                                            className="btn-group-slide mt-6 inline-block px-8 py-3 rounded-xl bg-white text-[var(--brand-dark-green)] font-semibold shadow-lg"
                                        >
                                            <div className="btn-group-content">
                                                <div className="btn-slide-default">
                                                    <span>Inquire Now</span>
                                                </div>
                                                <div className="btn-slide-hover">
                                                    <span>Inquire Now</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6">
                                <div className="border-t border-white/20 pt-6">
                                    <div className="text-sm opacity-80 mb-4">
                                        Connect with us
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <a
                                            href="https://wa.me/919876543210"
                                            aria-label="WhatsApp"
                                            className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                                        >
                                            <FaWhatsapp size={20} />
                                        </a>
                                        <a
                                            href="https://instagram.com"
                                            aria-label="Instagram"
                                            className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                                        >
                                            <FaInstagram size={20} />
                                        </a>
                                        <a
                                            href="tel:+919876543210"
                                            aria-label="Call"
                                            className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                                        >
                                            <FaPhone size={20} />
                                        </a>
                                        <a
                                            href="https://linkedin.com"
                                            aria-label="LinkedIn"
                                            className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                                        >
                                            <FaLinkedin size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
