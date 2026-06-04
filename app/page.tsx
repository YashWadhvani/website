"use client";
import HeroSection from "../components/HeroSection";
import SectionHeading from "../components/SectionHeading";
import StatsCard from "../components/StatsCard";
import TimelineSection from "../components/TimelineSection";
import CountryGrid from "../components/CountryGrid";
import CertificationCard from "../components/CertificationCard";
import CTASection from "../components/CTASection";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import productsData from "../data/products.json";

const products = productsData?.products ?? [];
const categories = Array.from(
    new Set(products.map((p: any) => p.category).filter(Boolean)),
);
const productTabs = ["All", ...categories];
const exportStats = [
    {
        value: "25+",
        label: "Countries Served",
    },
    {
        value: "500+",
        label: "Shipments Delivered",
    },
    {
        value: "100+",
        label: "Global Clients",
    },
    {
        value: "12+",
        label: "Years Experience",
    },
];

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
            <section className="container py-24">
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
            </section>

            <section className="container py-24">
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
                    className="rounded-2xl bg-[var(--cream-premium)] p-4 md:p-6 shadow-soft"
                >
                    <div className="flex flex-wrap gap-3 justify-center">
                        {productTabs.map((tab) => {
                            const isActive = activeTab === tab;
                            const count =
                                tab === "All"
                                    ? products.length
                                    : products.filter((p) => p.category === tab)
                                          .length;

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
                                        onOpen={openProduct}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </section>

            <section className="relative overflow-hidden py-28">
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

            <section className="relative overflow-hidden py-28">
                {/* Background Glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[var(--brand-light-green)]/10 blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[var(--brand-dark-green)]/10 blur-3xl" />
                </div>

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <SectionHeading
                            title="Global Export Network"
                            subtitle="Delivering premium agricultural products to international markets through reliable logistics, strict quality control and long-term partnerships."
                        />
                    </motion.div>

                    {/* Export Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
                    >
                        {exportStats.map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-white border border-[var(--border-light)] rounded-2xl p-6 text-center shadow-sm"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-[var(--brand-dark-green)]">
                                    {stat.value}
                                </div>

                                <div className="text-sm text-[var(--muted)] mt-2">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Countries */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white border border-[var(--border-light)] rounded-3xl p-8 md:p-10 shadow-xl"
                    >
                        <CountryGrid />
                    </motion.div>
                </div>
            </section>

            <section className="container py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <SectionHeading title="Certifications" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                    {[
                        {
                            abbr: "AP",
                            title: "APEDA",
                            org: "Agricultural Processed Export Development Authority",
                        },
                        {
                            abbr: "F",
                            title: "FSSAI",
                            org: "Food Safety & Standards Authority of India",
                        },
                        {
                            abbr: "ISO",
                            title: "ISO 22000",
                            org: "Food Safety Management",
                        },
                    ].map((c) => (
                        <CertificationCard key={c.title} cert={c} />
                    ))}
                </motion.div>
            </section>
            <section className="container py-24">
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
                            icon: "✓",
                            title: "Quality Assured",
                            desc: "ISO 22000 & FSSAI certified",
                        },
                        {
                            icon: "🌍",
                            title: "Global Network",
                            desc: "Export to 50+ countries",
                        },
                        {
                            icon: "⚡",
                            title: "Fast Logistics",
                            desc: "Reliable shipping partners",
                        },
                        {
                            icon: "📋",
                            title: "Full Traceability",
                            desc: "Track every batch",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="card-premium p-6"
                        >
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h3 className="font-semibold text-[var(--charcoal)] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[var(--muted)]">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <ProductModal
                product={active}
                open={open}
                onClose={() => setOpen(false)}
            />
        </div>
    );
}
