"use client";
import Image from "next/image";
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
                className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 hover:bg-[var(--cream-premium)] rounded-lg transition-all"
                >
                    <FaTimes size={24} className="text-[var(--charcoal)]" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6">
                    {/* Image (40%) */}
                    <div className="md:col-span-2 relative h-56 md:h-auto md:max-h-[90vh]">
                        <Image
                            src={product.image ?? ""}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content (60%) */}
                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between max-h-[90vh] overflow-auto">
                        <div>
                            <div className="inline-block bg-[var(--brand-light-green)]/10 text-[var(--brand-dark-green)] px-3 py-1 rounded-full text-xs font-semibold mb-4">
                                Product Details
                            </div>
                            <h2 className="text-3xl font-heading font-semibold text-[var(--charcoal)] mb-3">
                                {product.name}
                                {activeVariant
                                    ? ` — ${activeVariant.label}`
                                    : ""}
                            </h2>
                            <p className="text-[var(--text-dark)] leading-relaxed mb-6">
                                {activeVariant?.description ??
                                    product.description}
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-[var(--charcoal)] mb-2">
                                        Specifications
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--muted)]">
                                        <div className="space-y-2">
                                            <div>
                                                <span className="font-semibold text-[var(--charcoal)]">
                                                    Origin:
                                                </span>{" "}
                                                {product.spec?.origin ??
                                                    "India"}
                                            </div>
                                            <div>
                                                <span className="font-semibold text-[var(--charcoal)]">
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
                                                <span className="font-semibold text-[var(--charcoal)]">
                                                    Aroma:
                                                </span>{" "}
                                                {product.spec?.aroma ??
                                                    "Strong Aroma (Indian Origin)"}
                                            </div>
                                            <div>
                                                <span className="font-semibold text-[var(--charcoal)]">
                                                    Qualities:
                                                </span>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {(
                                                        product.spec
                                                            ?.qualities ?? [
                                                            "Premium Grade",
                                                            "A grade",
                                                            "Commercial Grade",
                                                        ]
                                                    ).map((q: any) => (
                                                        <span
                                                            key={q}
                                                            className="badge"
                                                        >
                                                            {q}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-[var(--charcoal)] mb-1">
                                                Packaging Details
                                            </h5>
                                            <ul className="text-sm text-[var(--muted)] space-y-1">
                                                <li className="flex items-start gap-2">
                                                    <FaCheck className="text-[var(--brand-light-green)] mt-1" />{" "}
                                                    {product.spec?.packing ??
                                                        product.packaging ??
                                                        "Packaging as per client requirement"}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--charcoal)] mb-2">
                                        Quality Assurance
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "ISO 22000 Certified",
                                            "Fully Traceable",
                                            "Hygienically Processed",
                                        ].map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center gap-2 text-[var(--text-dark)]"
                                            >
                                                <FaCheck
                                                    size={16}
                                                    className="text-[var(--brand-light-green)]"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex gap-3 mt-8 pt-6 border-t border-[var(--border-light)]">
                            <a
                                href="/contact"
                                className="btn-group-slide flex-1 inline-block bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                            >
                                <div className="btn-group-content">
                                    <div className="btn-slide-default flex items-center justify-center">
                                        <span>Send Inquiry</span>
                                    </div>
                                    <div className="btn-slide-hover flex items-center justify-center">
                                        <span>Send Inquiry</span>
                                    </div>
                                </div>
                            </a>
                            <button
                                onClick={onClose}
                                className="px-6 py-3 rounded-xl border-2 border-[var(--border-light)] text-[var(--charcoal)] hover:bg-[var(--cream-premium)] transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
                {/* Second row: variants tabs + variant details */}
                <div className="p-6 md:p-8">
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

                    <div className="bg-[var(--off-white)] p-3 rounded-xl border border-[var(--border-light)]">
                        {activeVariant ? (
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                                <div className="md:col-span-2">
                                    <div className="relative w-full h-56 md:h-48 rounded-md overflow-hidden bg-[var(--brand-light-green)]/5">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeVariant.key}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
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

                                <div className="md:col-span-3">
                                    <div className="text-sm text-[var(--muted)]">
                                        Format
                                    </div>
                                    <div className="font-semibold mb-2">
                                        {activeVariant.label}
                                    </div>
                                    <div className="text-sm text-[var(--muted)]">
                                        Size
                                    </div>
                                    <div className="font-semibold">
                                        {activeVariant.size ?? "N/A"}
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
