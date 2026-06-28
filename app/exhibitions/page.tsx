"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionHeading from "../../components/SectionHeading";
import CTASection from "../../components/CTASection";
import {
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaGlobe,
    FaBuilding,
    FaCheckCircle,
    FaArrowRight,
    FaAward,
} from "react-icons/fa";

const exhibitionsData = [
    {
        id: "gulfood-2025",
        title: "Gulfood 2025 at Dubai",
        type: "International",
        date: "February 17 - 21, 2025",
        venue: "Dubai World Trade Centre (DWTC), Dubai, UAE",
        image: "/images/exhibitions/gulfood_2025.png",
        desc: "Celebrating the 30th anniversary of the world's largest annual food & beverage sourcing event. DNR Agri Exports showcased its flagship dehydrated onion, garlic, vegetable powders, and spices to global buyers, securing significant bulk supply agreements and expanding our footprint in global F&B networks.",
        highlights: [
            "Presented Premium Dehydrated Onion & Garlic",
            "Met with 150+ global F&B distributors",
            "Negotiated sustainable crop supply contracts",
            "Expanded exports to Middle East & EU",
        ],
        badgeColor: "bg-blue-600",
    },
    {
        id: "gulfood-2024",
        title: "Gulfood 2024 at Dubai",
        type: "International",
        date: "February 19 - 23, 2024",
        venue: "Dubai World Trade Centre (DWTC), Dubai, UAE",
        image: "/images/exhibitions/gulfood_2024.png",
        desc: "As the premier annual event for global food sourcing, Gulfood 2024 served as a strategic platform for DNR Agri Exports to connect with Middle Eastern and European importers. We highlighted our strict quality control, farm-to-shipment traceability, and complete dehydrated product lineup.",
        highlights: [
            "Demonstrated farm-to-shipment traceability",
            "Established Middle-East distribution channels",
            "Showcased ISO 22000 & FSSAI standards compliance",
            "Engaged with 100+ prospective trade partners",
        ],
        badgeColor: "bg-blue-600",
    },
    {
        id: "sial-india-2024",
        title: "SIAL Foods at Mumbai",
        type: "Domestic",
        date: "December 5 - 7, 2024",
        venue: "Jio World Convention Centre, Mumbai, India",
        image: "/images/exhibitions/sial_foods.png",
        desc: "SIAL India at Mumbai connects international and domestic food brands with the rapidly expanding Indian market. DNR Agri Exports took this opportunity to network with global buying delegations, hotel chains, and major domestic retailers, presenting our industry-leading processing capabilities.",
        highlights: [
            "Hosted dynamic B2B networking sessions",
            "Highlighted FSSAI & FDA compliance certificates",
            "Showcased raw materials and ready-to-use powders",
            "Connected with premium retail chains & HoReCa",
        ],
        badgeColor: "bg-amber-600",
    },
    {
        id: "indus-food-2024",
        title: "Indus Food Expo",
        type: "Domestic",
        date: "January 8 - 10, 2024",
        venue: "India Exposition Mart, Greater Noida, India",
        image: "/images/exhibitions/indus_food.png",
        desc: "Organized by the Trade Promotion Council of India (TPCI), Indusfood is the ultimate B2B export-promotion trade fair in South Asia. DNR Agri Exports displayed its complete range of dehydrated onion/garlic products and spices, finalizing key distribution deals across North America and Asia.",
        highlights: [
            "TPCI Export Buyer Matchmaking program",
            "Secured 25+ bulk export contracts",
            "Demonstrated advanced food dehydration tech",
            "Connected with importers from 80+ countries",
        ],
        badgeColor: "bg-amber-600",
    },
    {
        id: "aahar-2024",
        title: "Aahar Foods",
        type: "Domestic",
        date: "March 7 - 11, 2024",
        venue: "Bharat Mandapam, Pragati Maidan, New Delhi, India",
        image: "/images/exhibitions/aahar_foods.png",
        desc: "AAHAR is Asia's most prominent food and hospitality trade fair. We displayed our range of dehydrated ingredients tailored specifically for food service, catering, and institutional buyers, strengthening our domestic supply networks and showcasing our processing technology.",
        highlights: [
            "Staged visual products display at Bharat Mandapam",
            "Focused on food service, catering & HoReCa clients",
            "Conducted live demonstrations of product reconstitution",
            "Strengthened domestic bulk distribution networks",
        ],
        badgeColor: "bg-amber-600",
    },
];

export default function ExhibitionsPage() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredExhibitions = useMemo(() => {
        if (activeTab === "All") return exhibitionsData;
        return exhibitionsData.filter((expo) => expo.type === activeTab);
    }, [activeTab]);

    return (
        <main className="min-h-screen bg-[var(--background)] pb-24 text-[var(--text-dark)]">
            {/* Hero Header Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)] text-white py-24 md:py-32">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--brand-light-green)] blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[var(--accent-gold)] blur-3xl" />
                </div>

                <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xs uppercase tracking-widest font-semibold text-[var(--brand-light-green)] bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm"
                    >
                        Global Footprint
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-[var(--ivory-light)] mt-4 leading-tight"
                    >
                        Exhibitions & Trade Shows
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-xl text-[var(--brand-sage)] mt-6 leading-relaxed"
                    >
                        Connecting with international buyers and trade partners at premier food forums worldwide to showcase India's agricultural superiority.
                    </motion.p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="container mt-16 md:mt-24">
                {/* Page Intro Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-4 font-heading">
                        Our Participation Showcase
                    </h2>
                    <p className="text-base md:text-lg text-[var(--text-dark)] leading-relaxed font-body">
                        Through our regular presence at both international and domestic food expos, DNR Agri Exports demonstrates its dedication to quality, technology, and global partnerships. We bring high-grade dehydrated onions, garlic, peanut crops, and spices directly to international food manufacturers, packaging houses, and hospitality chains.
                    </p>
                </motion.div>

                {/* Interactive Filtering Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12"
                >
                    <div className="bg-[var(--off-white)] p-1.5 rounded-2xl flex border border-[var(--border-light)] shadow-sm max-w-md w-full">
                        {["All", "International", "Domestic"].map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative flex-1 text-center py-3.5 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 ${
                                        isActive
                                            ? "text-white shadow-md z-10"
                                            : "text-[var(--charcoal)] hover:text-[var(--brand-dark-green)]"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="active-expo-tab"
                                            className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)]"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center justify-center gap-1.5">
                                        {tab === "International" && <FaGlobe />}
                                        {tab === "Domestic" && <FaBuilding />}
                                        {tab}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Grid List of Exhibitions */}
                <motion.div
                    layout
                    className="grid grid-cols-1 gap-12 md:gap-16"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredExhibitions.map((expo, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    layout
                                    key={expo.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, type: "spring", bounce: 0.1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className={`flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 bg-white border border-[var(--border-light)] rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 lg:p-10 ${
                                        isEven ? "" : "lg:flex-row-reverse"
                                    }`}
                                >
                                    {/* Stand Image Visual */}
                                    <div className="w-full lg:w-[45%] flex-shrink-0 relative rounded-3xl overflow-hidden min-h-[300px] lg:min-h-[400px] shadow-sm">
                                        <img
                                            src={expo.image}
                                            alt={expo.title}
                                            className="object-cover absolute inset-0 w-full h-full hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className={`text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md ${
                                                expo.type === "International" ? "bg-[var(--brand-dark-green)]" : "bg-[var(--accent)]"
                                            }`}>
                                                {expo.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Text Content Block */}
                                    <div className="flex-1 flex flex-col justify-between py-2">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[var(--charcoal)] font-heading tracking-tight mb-4">
                                                {expo.title}
                                            </h3>

                                            {/* Details Metadata */}
                                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 text-sm md:text-base text-[var(--muted)] font-body">
                                                <div className="flex items-center gap-2">
                                                    <FaMapMarkerAlt className="text-[var(--brand-dark-green)]" />
                                                    <span>{expo.venue}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FaCalendarAlt className="text-[var(--brand-dark-green)]" />
                                                    <span>{expo.date}</span>
                                                </div>
                                            </div>

                                            <p className="text-[var(--text-dark)] leading-relaxed mb-8 text-sm md:text-base font-body">
                                                {expo.desc}
                                            </p>
                                        </div>

                                        {/* Dynamic Highlights / Achievements */}
                                        <div className="bg-[var(--ivory-light)] rounded-2xl border border-[var(--border-light)] p-5 md:p-6 mb-2">
                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-dark-green)] font-heading mb-3 flex items-center gap-2">
                                                <FaAward /> Highlights & Product Focus
                                            </h4>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-[var(--text-dark)] font-medium font-body">
                                                {expo.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-2.5">
                                                        <FaCheckCircle className="text-[var(--brand-light-green)] flex-shrink-0 mt-0.5" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Bottom Inquire CTA section */}
            <div className="mt-24"><CTASection /></div>
        </main>
    );
}
