"use client";
import HeroSection from "../components/HeroSection";
import SectionHeading from "../components/SectionHeading";
import StatsCard from "../components/StatsCard";
import TimelineSection from "../components/TimelineSection";
import CertificationCard from "../components/CertificationCard";
import CTASection from "../components/CTASection";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import productsData from "../data/products.json";
import Link from "next/link";
import { FaAward, FaShieldAlt, FaGlobe, FaBolt, FaClipboardList } from "react-icons/fa";

const products = productsData?.products ?? [];
const categories = Array.from(
    new Set(products.map((p: any) => p.category).filter(Boolean)),
);
const productTabs = ["All", ...categories];

export default function Home() {
    const [active, setActive] = useState<any>(null);
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("All");
    const openProduct = (p: any) => {
        setActive(p);
        setOpen(true);
    };
    const visibleProducts =
        activeTab === "All"
            ? products
            : products.filter((p) => p.category === activeTab);

    return (
        <div>
            <HeroSection />

            {/* Product Categories Infinite Marquee */}
            <div className="bg-white border-b border-[var(--border-light)] py-6 overflow-hidden relative w-full z-20 shadow-sm">
                <div className="flex animate-marquee whitespace-nowrap gap-6">
                    {[...Array(3)].flatMap(() => [
                        "Dehydrated Onion - White",
                        "Dehydrated Onion - Red",
                        "Dehydrated Onion - Pink",
                        "Dehydrated Fried Onion",
                        "Dehydrated Garlic",
                        "Spices",
                        "Peanuts",
                    ]).map((cat, idx) => (
                        <div
                            key={idx}
                            className="bg-[var(--off-white)] border border-[var(--border-light)] px-6 py-3 rounded-full text-[var(--brand-dark-green)] font-semibold shadow-sm hover:border-[var(--brand-light-green)] transition-all font-body text-xs md:text-sm tracking-wide uppercase"
                        >
                            {cat}
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Track Record */}
            <section className="py-24 bg-[var(--background)]">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <SectionHeading
                            title="Our Track Record"
                            subtitle="Proven excellence in global agro exports"
                        />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.1,
                                },
                            },
                        }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        <StatsCard label="Years Experience" value={12} />
                        <StatsCard label="Countries Exported" value={23} />
                        <StatsCard label="Product Range" value={5} />
                        <StatsCard label="Happy Clients" value={98} />
                    </motion.div>
                </div>
            </section>

            {/* Our Products */}
            <section className="py-24 bg-[var(--background)]">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <SectionHeading
                            title="Our Products"
                            subtitle="Browse by category and click any product to view details and inquire"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-2xl bg-[var(--off-white)] p-4 md:p-6 shadow-soft"
                    >
                        <div className="flex flex-wrap gap-3 justify-center">
                            {productTabs.map((tab) => {
                                const isActive = activeTab === tab;
                                const count =
                                    tab === "All"
                                        ? products.length
                                        : products.filter(
                                              (p) => p.category === tab,
                                          ).length;

                                return (
                                    <button
                                        key={tab}
                                        type="button"
                                        onClick={() => setActiveTab(tab)}
                                        className={`relative overflow-hidden rounded-full px-4 md:px-5 py-2.5 text-sm md:text-base font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-[var(--charcoal)] hover:text-[var(--brand-dark-green)]"}`}
                                        aria-pressed={isActive}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="active-product-tab"
                                                className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)] shadow-md"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 40,
                                                }}
                                            />
                                        )}
                                        <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                                            <span>{tab}</span>
                                            <span
                                                className={`text-xs px-2 py-0.5 rounded-full ${isActive ? "bg-white/15 text-white" : "bg-white text-[var(--muted)] border border-[var(--border-light)]"}`}
                                            >
                                                {count}
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="mt-8"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {visibleProducts.map((p) => (
                                        <ProductCard
                                            key={p.id}
                                            product={p}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Our Manufacturing Process */}
            <section className="relative overflow-hidden py-28 bg-[var(--cream)]">
                {/* Background Glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-[var(--brand-light-green)]/10 blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[var(--brand-dark-green)]/10 blur-3xl" />
                </div>

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <SectionHeading
                            title="Our Manufacturing Process"
                            subtitle="From carefully sourced raw materials to export-ready products, every stage follows strict quality and hygiene standards."
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-white border border-[var(--border-light)] shadow-xl p-8 md:p-12"
                    >
                        <TimelineSection />
                    </motion.div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-24 bg-[var(--background)]">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <SectionHeading
                            title="Certifications & Registrations"
                            subtitle="DNR Agri Exports is fully certified by leading food safety and trade export bodies."
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            {
                                abbr: "ISO",
                                title: "ISO 22000:2018",
                                org: "Food Safety Management System",
                                no: "Certificate No: [Pending]",
                            },
                            {
                                abbr: "F",
                                title: "FSSAI",
                                org: "Food Safety & Standards Authority of India",
                                no: "License No: [Pending]",
                            },
                            {
                                abbr: "AP",
                                title: "APEDA",
                                org: "Agricultural & Processed Food Products Export Development Authority",
                                no: "Registration No: [Pending]",
                            },
                            {
                                abbr: "SB",
                                title: "SPICES BOARD",
                                org: "Ministry of Commerce & Industry, Govt. of India",
                                no: "Registration No: [Pending]",
                            },
                        ].map((c) => (
                            <CertificationCard key={c.title} cert={c} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Exhibitions Section */}
            <section className="py-24 bg-[var(--off-white)] border-t border-b border-[var(--border-light)]">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <SectionHeading
                            title="Global Trade Showcases"
                            subtitle="Representing India's agricultural excellence at premier international and domestic food forums"
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {[
                            {
                                title: "Gulfood 2025",
                                venue: "Dubai World Trade Centre, Dubai, UAE",
                                date: "February 17 - 21, 2025",
                                image: "/images/exhibitions/gulfood_2025.png",
                                desc: "At the 30th edition of Gulfood, DNR Agri Exports engaged with global buying delegations to showcase our premium dehydrated products and secure long-term import partnerships.",
                                badge: "International",
                            },
                            {
                                title: "Indus Food Expo",
                                venue: "India Exposition Mart, Greater Noida, India",
                                date: "January 8 - 10, 2024",
                                image: "/images/exhibitions/indus_food.png",
                                desc: "Participating in South Asia's largest integrated food & beverage trade show, we successfully networked with buyers from over 80 countries.",
                                badge: "Domestic / B2B Export",
                            },
                        ].map((expo, i) => (
                            <motion.div
                                key={expo.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-lg border border-[var(--border-light)] transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={expo.image}
                                        alt={expo.title}
                                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 left-4 bg-[var(--brand-dark-green)] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm">
                                        {expo.badge}
                                    </span>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold text-[var(--charcoal)] mb-3">
                                        {expo.title}
                                    </h3>
                                    <div className="flex flex-col gap-2 mb-4 text-sm text-[var(--muted)]">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[var(--brand-dark-green)]">📍</span>
                                            <span>{expo.venue}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[var(--brand-dark-green)]">📅</span>
                                            <span>{expo.date}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm md:text-base text-[var(--text-dark)] leading-relaxed mb-6 flex-grow">
                                        {expo.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <Link
                            href="/exhibitions"
                            className="btn-group-slide inline-block bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all"
                        >
                            <div className="btn-group-content">
                                <div className="btn-slide-default">
                                    <span className="flex items-center gap-2">
                                        Explore All Exhibitions <span className="text-lg">→</span>
                                    </span>
                                </div>
                                <div className="btn-slide-hover">
                                    <span className="flex items-center gap-2">
                                        Explore All Exhibitions <span className="text-lg">→</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-[var(--cream)]">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <SectionHeading
                            title="Why Choose Us?"
                            subtitle="Partner with a trusted global exporter"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                    >
                        {[
                            {
                                icon: FaShieldAlt,
                                title: "Quality Assured",
                                desc: "ISO 22000 & FSSAI certified",
                            },
                            {
                                icon: FaGlobe,
                                title: "Global Network",
                                desc: "Export to 50+ countries",
                            },
                            {
                                icon: FaBolt,
                                title: "Fast Logistics",
                                desc: "Reliable shipping partners",
                            },
                            {
                                icon: FaClipboardList,
                                title: "Full Traceability",
                                desc: "Track every batch",
                            },
                        ].map((item, i) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -8 }}
                                    className="card-premium p-6 flex flex-col justify-start"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-light-green)]/10 flex items-center justify-center text-[var(--brand-dark-green)] mb-4">
                                        <IconComponent size={24} />
                                    </div>
                                    <h3 className="font-semibold text-[var(--charcoal)] mb-2 font-heading">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[var(--muted)] font-body">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Certifications Infinite Marquee */}
            <section className="py-12 bg-white border-t border-b border-[var(--border-light)] overflow-hidden">
                <div className="container mb-6">
                    <div className="text-center">
                        <span className="text-xs uppercase tracking-widest font-bold text-[var(--brand-light-green)] font-heading">Accredited Quality</span>
                        <h4 className="text-lg font-bold text-[var(--charcoal)] mt-1 font-heading">Government Registered & Internationally Certified Exporter</h4>
                    </div>
                </div>
                <div className="w-full relative py-2 bg-[var(--ivory-light)]">
                    <div className="flex animate-marquee-fast whitespace-nowrap gap-16 text-base font-bold text-[var(--brand-dark-green)]">
                        {[...Array(4)].flatMap(() => [
                            { name: "ISO 22000:2018", detail: "Food Safety Certified" },
                            { name: "FSSAI License", detail: "Govt of India Approved" },
                            { name: "APEDA Registered", detail: "Agro Export Promotion" },
                            { name: "SPICES BOARD", detail: "Ministry of Commerce" },
                        ]).map((cert, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-[var(--border-light)] shadow-sm">
                                <FaAward className="text-[var(--brand-dark-green)] text-xl flex-shrink-0" />
                                <div className="flex flex-col text-left font-body">
                                    <span className="text-sm font-extrabold text-[var(--charcoal)]">{cert.name}</span>
                                    <span className="text-xs font-semibold text-[var(--muted)]">{cert.detail}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />

            <ProductModal
                product={active}
                open={open}
                onClose={() => setOpen(false)}
            />
        </div>
    );
}
