"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const countries = [
    { code: "us", name: "USA" },
    { code: "ae", name: "UAE" },
    { code: "gb", name: "UK" },
    { code: "nl", name: "Netherlands" },
    { code: "jp", name: "Japan" },
    { code: "au", name: "Australia" },
    { code: "sa", name: "Saudi Arabia" },
    { code: "ke", name: "Kenya" },
    { code: "de", name: "Germany" },
    { code: "br", name: "Brazil" },
    { code: "ca", name: "Canada" },
    { code: "vn", name: "Vietnam" },
];

export default function CountryGrid() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.08,
                    },
                },
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
            {countries.map((country) => (
                <motion.div
                    key={country.name}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                        y: -8,
                        scale: 1.02,
                    }}
                    transition={{ duration: 0.25 }}
                    className="
            group
            bg-white
            border
            border-[var(--border-light)]
            rounded-2xl
            p-6
            text-center
            shadow-sm
            hover:shadow-xl
            transition-all
            duration-300
          "
                >
                    <div className="flex justify-center mb-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md border border-gray-100">
                            <Image
                                src={`/flags/${country.code}.svg`}
                                alt={country.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    <h3 className="font-semibold text-[var(--charcoal)] text-lg">
                        {country.name}
                    </h3>
                </motion.div>
            ))}
        </motion.div>
    );
}
