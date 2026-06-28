"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import type { Product, Variant } from "../types/product";

export default function ProductModal({
    product,
    open,
    onClose,
}: {
    product: Product | null;
    open: boolean;
    onClose: () => void;
}) {
    if (!open || !product) return null;

    const isOnion = String(product.id || product.category || "")
        .toLowerCase()
        .includes("onion");
    const isGarlic = String(product.id || product.category || "")
        .toLowerCase()
        .includes("garlic");

    // Active variant state (first variant by default)
    const [activeVariant, setActiveVariant] = useState<Variant | null>(
        product.spec?.variants?.[0] ?? null,
    );

    useEffect(() => {
        setActiveVariant(product.spec?.variants?.[0] ?? null);
    }, [product]);

    const productVariants = product.spec?.variants ?? [];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60"
                onClick={onClose}
            ></motion.div>
            <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.28 }}
                className="relative bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="fixed top-6 right-6 z-[100] p-3 bg-white shadow-xl border border-[var(--border-light)] rounded-full hover:bg-[var(--cream-premium)] transition-all"
                >
                    <FaTimes size={24} className="text-[var(--charcoal)]" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8">
                    {/* Image (40%) */}
                    <div className="md:col-span-2 relative h-56 md:h-auto md:max-h-[90vh]">
                        <Image
                            src={product.image ?? ""}
                            alt={product.name}
                            fill
                            className="object-cover rounded-l-2xl"
                        />
                    </div>

                    {/* Content (60%) */}
                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                        {/* Badge */}
                        <h4 className="w-fit bg-[var(--brand-light-green)]/10 text-[var(--brand-dark-green)] py-1 rounded-full text-xs font-semibold mb-4">
                            Product Details
                        </h4>

                        {/* Title */}
                        <h2 className="text-4xl font-heading font-semibold text-[var(--charcoal)] mb-4">
                            {product.name}
                        </h2>

                        {/* Description */}
                        <p className="text-[var(--muted)] leading-relaxed text-lg mb-8">
                            {product.description}
                        </p>

                        {/* Main Info Cards */}
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-xl text-[var(--charcoal)] mb-4">
                                    Specifications
                                </h4>

                                <div className="space-y-3 text-[var(--text-dark)] grid grid-cols-2 gap-x-8 gap-y-3">
                                    <div>
                                        <span className="font-semibold">
                                            Origin:
                                        </span>{" "}
                                        {product.spec?.origin ?? "India"}
                                    </div>

                                    <div>
                                        <span className="font-semibold">
                                            Color:
                                        </span>{" "}
                                        {(product.spec?.colors ??
                                        product.spec?.color)
                                            ? Array.isArray(
                                                  product.spec?.colors,
                                              )
                                                ? product.spec.colors.join(
                                                      " / ",
                                                  )
                                                : product.spec.color
                                            : isGarlic
                                              ? "White"
                                              : "White / Red / Pink"}
                                    </div>

                                    <div>
                                        <span className="font-semibold">
                                            Aroma:
                                        </span>{" "}
                                        {product.spec?.aroma ??
                                            "Strong Aroma (Indian Origin)"}
                                    </div>

                                    <div>
                                        <span className="font-semibold">
                                            Packaging:
                                        </span>{" "}
                                        {product.spec?.packing ??
                                            product.packaging ??
                                            "Packaging as per client requirement"}
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div>
                                    <h4 className="font-semibold text-xl text-[var(--charcoal)] mb-4">
                                        Available Quality Grades
                                    </h4>

                                    <div className="space-y-3">
                                        {(
                                            product.spec?.qualities ?? [
                                                "Premium Grade",
                                                "A Grade",
                                                "Commercial Grade",
                                            ]
                                        ).map((q) => (
                                            <div
                                                key={q}
                                                className="flex items-center gap-3"
                                            >
                                                <span>{q}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-xl text-[var(--charcoal)] mb-4">
                                        Quality Assurance
                                    </h4>

                                    <div className="space-y-2">
                                        {[
                                            "ISO 22000 Certified",
                                            "Fully Traceable",
                                            "Hygienically Processed",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-3"
                                            >
                                                <FaCheck
                                                    size={14}
                                                    className="text-[var(--brand-light-green)]"
                                                />

                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second row: variants tabs + variant details */}
                <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-semibold text-[var(--charcoal)] mb-5">
                        Available Forms & Sizes
                    </h3>
                    {/* Variant Tabs */}
                    <div className="flex gap-2 flex-wrap mb-4">
                        {productVariants.map((v) => (
                            <button
                                key={v.key}
                                onClick={() => setActiveVariant(v)}
                                className={`px-3 py-2 rounded-full text-sm ${activeVariant?.key === v.key ? "bg-[var(--brand-dark-green)] text-white" : "bg-white border border-[var(--border-light)] text-[var(--charcoal)]"}`}
                            >
                                {v.label}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-[var(--border-light)] shadow-sm">
                        {activeVariant ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="relative w-full h-72 md:h-[320px] rounded-md overflow-hidden bg-[var(--brand-light-green)]/5">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeVariant.key}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.95,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.95,
                                                }}
                                                transition={{ duration: 0.32 }}
                                                className="absolute inset-0"
                                            >
                                                <Image
                                                    src={
                                                        activeVariant.image ??
                                                        product.image ??
                                                        ""
                                                    }
                                                    alt={activeVariant.label}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-sm text-[var(--muted)]">
                                        Format
                                    </div>
                                    <div className="font-semibold mb-2">
                                        {activeVariant.label}
                                    </div>
                                    <div className="mt-3">
                                        <span className="text-sm text-[var(--muted)]">
                                            Size:
                                        </span>

                                        <div className="font-semibold text-lg text-[var(--charcoal)]">
                                            {activeVariant.size ??
                                                "Custom Size Available"}
                                        </div>
                                    </div>
                                    {activeVariant.description ? (
                                        <p className="text-xs text-[var(--muted)] mt-3">
                                            {activeVariant.description}
                                        </p>
                                    ) : null}

                                    {activeVariant.applications?.length ? (
                                        <div className="mt-4">
                                            <div className="text-sm text-[var(--muted)]">
                                                Applications
                                            </div>
                                            <ul className="list-disc ml-5 text-sm text-[var(--muted)]">
                                                {activeVariant.applications.map(
                                                    (a) => (
                                                        <li key={a}>{a}</li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    ) : null}

                                    <div className="mt-4">
                                        <h5 className="font-semibold text-[var(--charcoal)] mb-1">
                                            Packaging Details
                                        </h5>
                                        <ul className="text-sm text-[var(--muted)] space-y-1">
                                            <li className="flex items-start gap-2">
                                                <FaCheck className="text-[var(--brand-light-green)] mt-1" />{" "}
                                                {activeVariant.packaging ??
                                                    product.spec?.packing ??
                                                    product.packaging ??
                                                    "Packaging as per client requirement"}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-[var(--border-light)]">
                                        <Link
                                            href={`/contact?inquiryType=product&productId=${product.id}&variantId=${activeVariant.key}`}
                                            className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                                        >
                                            Request Quote for{" "}
                                            {activeVariant.label}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-[var(--muted)]">
                                No variants available.
                            </p>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
