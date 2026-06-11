"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaLeaf } from "react-icons/fa";
import Onion from "../public/images/product-onion.png";
import Garlic from "../public/images/product-garlic.png";

export default function HeroSection() {
    return (
        <section className="pt-20 pb-20 min-h-[80vh] bg-[var(--background)]">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-[var(--brand-light-green)]/10 text-[var(--brand-dark-green)] px-4 py-2 rounded-full mb-4"
                        >
                            <FaLeaf size={16} />
                            <span className="text-sm font-semibold">
                                Premium Agro Exports
                            </span>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight text-[var(--charcoal)]">
                            Global Quality, Local Care
                        </h1>
                    </div>
                    <p className="text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
                        We supply premium dehydrated onions, garlic, spices,
                        peanuts and vegetable powders to discerning buyers
                        worldwide. ISO certified. Fully traceable.
                        Uncompromising quality.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="/products"
                            className="btn-group-slide inline-block bg-[var(--brand-dark-green)] hover:bg-[var(--brand-forest)] text-white hover:text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95"
                        >
                            <div className="btn-group-content">
                                <div className="btn-slide-default">
                                    <span>Explore Products</span>
                                </div>
                                <div className="btn-slide-hover">
                                    <span>Explore Products</span>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/contact"
                            className="btn-group-slide inline-block border-2 border-[var(--brand-light-green)] text-[var(--brand-dark-green)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--brand-light-green)] hover:text-white transition-all"
                        >
                            <div className="btn-group-content">
                                <div className="btn-slide-default">
                                    <span>Contact Us</span>
                                </div>
                                <div className="btn-slide-hover">
                                    <span>Contact Us</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-96 md:h-full min-h-[400px]"
                >
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="absolute right-0 top-0 w-64 h-56 rounded-2xl shadow-lg overflow-hidden"
                    >
                        <Image
                            src={Garlic}
                            alt="Garlic"
                            width={420}
                            height={300}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                    <div className="absolute left-0 bottom-0 w-80 h-64 rounded-2xl shadow-lg overflow-hidden">
                        <Image
                            src={Onion}
                            alt="Onion"
                            width={480}
                            height={360}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
