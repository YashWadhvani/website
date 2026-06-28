"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({ product }: { product: any }) {
    return (
        <Link href={`/products/${product.id}`} className="block">
            <motion.div
                whileHover={{ y: -8 }}
                className="group card-premium overflow-hidden cursor-pointer transition-all h-full flex flex-col"
            >
                <div className="relative h-56 w-full overflow-hidden bg-[var(--brand-light-green)]/5 flex-shrink-0">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <div className="font-heading font-semibold text-xl text-white drop-shadow-md">
                            {product.name}
                        </div>
                        <div className="text-xs text-white/90 uppercase tracking-wider mt-1 font-medium">
                            {product.short}
                        </div>
                    </div>
                </div>
                <div className="p-6 border-t border-[var(--border-light)] bg-white flex-grow flex flex-col justify-between">
                    <p className="text-sm text-[var(--muted)] mb-4 font-body leading-relaxed">
                        {product.description}
                    </p>
                    <div className="flex items-center justify-between text-xs pt-2 border-t border-[var(--border-light)]/60">
                        <span className="text-[var(--brand-dark-green)] font-bold">
                            Packaging: {product.packaging}
                        </span>
                        <span className="text-[var(--brand-light-green)] font-extrabold group-hover:translate-x-1.5 transition-transform duration-300">
                            Specs & Sizes →
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
