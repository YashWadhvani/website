"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function StatsCard({
    label,
    value,
}: {
    label: string;
    value: number;
}) {
    const [display, setDisplay] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const duration = 2000;
                    const startTime = performance.now();

                    function step(now: number) {
                        const t = Math.min(1, (now - startTime) / duration);
                        const easeOut = 1 - Math.pow(1 - t, 3);
                        setDisplay(Math.floor(easeOut * value));
                        if (t < 1) requestAnimationFrame(step);
                        else setDisplay(value);
                    }

                    requestAnimationFrame(step);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 },
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, hasAnimated]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="card-premium p-8 text-center group hover:border-[var(--brand-light-green)] hover:shadow-lg cursor-default transition-all duration-300"
        >
            <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-light-green)] bg-clip-text mb-2">
                {display}+
            </div>
            <div className="text-sm font-medium text-[var(--muted)] group-hover:text-[var(--brand-dark-green)] transition-colors">
                {label}
            </div>
        </motion.div>
    );
}
