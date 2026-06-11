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
        title: "Procurement",
        description: "Premium raw materials sourced from trusted farms",
    },
    {
        icon: FaFilter,
        title: "Sorting",
        description: "Careful grading and selection of produce",
    },
    {
        icon: FaTint,
        title: "Cleaning",
        description: "Multi-stage washing and impurity removal",
    },
    {
        icon: FaCut,
        title: "Processing",
        description: "Cutting, slicing and preparation",
    },
    {
        icon: FaIndustry,
        title: "Dehydration",
        description: "Controlled drying to retain quality",
    },
    {
        icon: FaCheckCircle,
        title: "Quality Check",
        description: "Strict inspection and testing",
    },
    {
        icon: FaBoxOpen,
        title: "Packaging",
        description: "Export-grade hygienic packaging",
    },
    {
        icon: FaShip,
        title: "Export",
        description: "Worldwide logistics and delivery",
    },
];

export default function TimelineSection() {
    return (
        <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand-light-green)] via-[var(--brand-dark-green)] to-[var(--brand-light-green)] rounded-full" />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 relative">
                {steps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            whileHover={{
                                y: -8,
                            }}
                            className="relative text-center group"
                        >
                            {/* Circle */}
                            <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-[var(--off-white)] shadow-lg border border-[var(--border-light)] flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[var(--brand-light-green)] to-[var(--brand-dark-green)] flex items-center justify-center text-white">
                                    <Icon size={26} />
                                </div>
                            </div>

                            {/* Step Number */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                                <div className="w-7 h-7 rounded-full bg-[var(--charcoal)] text-white text-xs flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-5">
                                <h3 className="font-semibold text-[var(--charcoal)] text-base">
                                    {step.title}
                                </h3>

                                <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
