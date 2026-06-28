"use client";

import { motion } from "framer-motion";
import {
    FaSeedling,
    FaFilter,
    FaTint,
    FaCut,
    FaIndustry,
    FaCheckCircle,
    FaBoxOpen,
    FaShip,
} from "react-icons/fa";

const steps = [
    {
        icon: FaSeedling,
        title: "Procurement & Sourcing",
        desc: "We source top-quality raw onions, garlic, spices, and bold peanuts directly from trusted agricultural farms across India.",
    },
    {
        icon: FaFilter,
        title: "Sorting & Grading",
        desc: "Strict selection process to separate uniform, healthy produce from any damaged or undersized materials.",
    },
    {
        icon: FaTint,
        title: "Multi-Stage Cleaning",
        desc: "Thorough washing, peeling, and sanitization in modern chambers to ensure zero soil or debris residue.",
    },
    {
        icon: FaCut,
        title: "Precision Processing",
        desc: "Cutting, slicing, mincing, or chopping utilizing automated machinery to maintain size uniformity.",
    },
    {
        icon: FaIndustry,
        title: "Controlled Dehydration",
        desc: "Advanced convection drying chambers maintain ideal temperatures to reduce moisture to <6% while retaining oils and aroma.",
    },
    {
        icon: FaCheckCircle,
        title: "Quality Assurance & Testing",
        desc: "Double sweep metal detection, microbiological testing, and ash/moisture parameters validation in QA labs.",
    },
    {
        icon: FaBoxOpen,
        title: "Export-Grade Packaging",
        desc: "Hygienic vacuum sealing and moisture-resistant poly lining inside strong double-wall corrugated cartons.",
    },
    {
        icon: FaShip,
        title: "Loading & Global Shipment",
        desc: "Container loading under strict supervision, routed through major Indian ports for global delivery.",
    },
];

export default function TimelineSection() {
    return (
        <div className="relative max-w-5xl mx-auto px-4">
            {/* Center connecting line for desktop */}
            <div className="absolute left-[29px] md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[var(--brand-light-green)] via-[var(--brand-dark-green)] to-[var(--brand-light-green)] transform -translate-x-1/2 rounded-full opacity-60" />

            <div className="space-y-12">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={step.title}
                            className={`flex flex-col md:flex-row items-stretch relative ${
                                isEven ? "md:flex-row-reverse" : ""
                            }`}
                        >
                            {/* Visual Timeline Marker Node - Centered with the line on both mobile & desktop */}
                            <div className="absolute left-[29px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 w-16 h-16 md:w-20 md:h-20">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border-2 border-[var(--brand-light-green)] flex items-center justify-center shadow-lg group relative overflow-hidden"
                                >
                                    <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-[var(--brand-light-green)] to-[var(--brand-dark-green)] flex items-center justify-center text-white">
                                        <Icon size={18} className="md:size-6" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Left/Right Card Spacer on Desktop */}
                            <div className="w-full md:w-1/2 hidden md:block" />

                            {/* Actual Step Card Wrapper with correct responsive padding to prevent line touching */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ y: -4 }}
                                className={`w-full md:w-1/2 pl-16 flex ${
                                    isEven
                                        ? "md:pl-0 md:pr-10 lg:pr-14"
                                        : "md:pl-10 lg:pl-14"
                                }`}
                            >
                                <div className="bg-white border border-[var(--border-light)] rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 w-full flex flex-col justify-center relative overflow-hidden">
                                    {/* Large premium watermark step count */}
                                    <div className="text-4xl md:text-5xl font-extrabold text-[var(--brand-light-green)]/15 absolute top-4 right-6 select-none font-heading">
                                        0{index + 1}
                                    </div>
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--brand-light-green)] mb-1 font-heading">
                                        Process Stage
                                    </span>
                                    
                                    <h3 className="text-lg md:text-xl font-bold font-heading text-[var(--charcoal)] mb-3">
                                        {step.title}
                                    </h3>
                                    
                                    <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed font-body">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
