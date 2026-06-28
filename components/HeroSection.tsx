"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaLeaf } from "react-icons/fa";

const slides = [
    {
        tag: "Premium Dehydrated Onion",
        title: "Dehydrated Onion - White, Red, Pink",
        subtitle: "India's finest dehydrated onions processed in flakes, chopped, minced, granules, and powder formats. Export-ready with complete quality traceability.",
        image: "/images/products/onion-white-combined.png",
        link: "/products?filter=onion-white",
    },
    {
        tag: "Aromatic Dehydrated Garlic",
        title: "Indian Dehydrated Garlic",
        subtitle: "Hygienically sorted and dehydrated garlic flakes (no size), chopped, minced, granules, and 80-100 mesh powders, loaded with strong aroma and flavor.",
        image: "/images/products/garlic-combined.png",
        link: "/products?filter=garlic",
    },
    {
        tag: "Indian Spices & Blends",
        title: "Pure Ground Spice Powders",
        subtitle: "Dry Mango, Ginger, Tomato, Lemon, Tamarind, and Turmeric (Powder/Fingers) processed under strict hygiene conditions for food manufacturing.",
        image: "/images/products/spices-combined.png",
        link: "/products?filter=spices",
    },
    {
        tag: "Sourced Peanut Commodities",
        title: "Bold, Blanched & Spiced Peanuts",
        subtitle: "Premium bold peanuts, blanched skinless (whole/splits), roasted salted, and masala peanuts packaged securely in vacuum packs or custom bags.",
        image: "/images/products/peanuts-combined.png",
        link: "/products?filter=peanuts",
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrent((prev) =>
                    prev === slides.length - 1 ? 0 : prev + 1,
                ),
            7000,
        );

        return () => {
            resetTimeout();
        };
    }, [current]);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className="relative w-full h-[70vh] md:h-[80vh] min-h-[500px] overflow-hidden bg-black">
            {/* Slide Background Images with Crossfade and Ken Burns Zoom Effect */}
            <div className="absolute inset-0 w-full h-full z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={slides[current].image}
                            alt={slides[current].tag}
                            fill
                            priority
                            className="object-cover object-center"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Dark Vignette Overlays for Premium Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/30 to-transparent z-10" />
            </div>

            {/* Premium Overlay Content Container */}
            <div className="container relative z-20 h-full flex items-center justify-start px-6 sm:px-12 lg:px-20">
                <div className="w-full max-w-2xl text-left">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-white space-y-4"
                        >
                            <span className="text-[var(--brand-light-green)] text-xs sm:text-sm font-extrabold uppercase tracking-widest block font-heading">
                                {slides[current].tag}
                            </span>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold leading-tight text-white tracking-tight drop-shadow-md">
                                {slides[current].title}
                            </h1>
                            
                            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed font-body font-medium drop-shadow-sm max-w-xl pb-4">
                                {slides[current].subtitle}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-2">
                                <Link
                                    href="/products"
                                    className="btn-group-slide inline-block bg-[var(--brand-light-green)] hover:bg-white text-white hover:text-[var(--brand-dark-green)] px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all active:scale-95 text-center text-xs tracking-wider uppercase"
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
                                    className="btn-group-slide inline-block border-2 border-white/65 text-white hover:bg-white hover:text-[var(--brand-dark-green)] px-8 py-4 rounded-xl font-bold transition-all text-center text-xs tracking-wider uppercase"
                                >
                                    <div className="btn-group-content">
                                        <div className="btn-slide-default">
                                            <span>Request Quote</span>
                                        </div>
                                        <div className="btn-slide-hover">
                                            <span>Request Quote</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slider Navigation Arrows */}
            <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-all active:scale-95"
            >
                <FaChevronLeft size={16} />
            </button>
            <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-all active:scale-95"
            >
                <FaChevronRight size={16} />
            </button>

            {/* Slide Indicators Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                            current === idx
                                ? "bg-white scale-120 shadow-md"
                                : "bg-white/40 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
