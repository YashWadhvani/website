"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisInit() {
    useEffect(() => {
        const lenis = new Lenis({ duration: 1.2 });
        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);
    return null;
}
