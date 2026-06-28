"use client";
import { useState } from "react";
import ProductModal from "./ProductModal";
import FormCard from "./FormCard";

export default function ProductForms({ product }: { product: any }) {
    const [open, setOpen] = useState(false);
    const [selectedForm, setSelectedForm] = useState<{
        key: string;
        label: string;
        size?: string;
    } | null>(null);

    // derive forms from product.spec
    const spec = product.spec || {};
    const forms: { key: string; label: string; size?: string }[] = [];

    const normalizeKey = (label: string) => {
        const s = label.toLowerCase();
        if (s.includes("flake")) return "flakes";
        if (s.includes("kibble")) return "flakes";
        if (s.includes("chopp")) return "chopped";
        if (s.includes("large") && s.includes("chopp")) return "chopped";
        if (s.includes("minc")) return "minced";
        if (s.includes("granul")) return "granules";
        if (s.includes("powder") || s.includes("mesh")) return "powder";
        return s.replace(/[^a-z0-9]+/g, "-");
    };

    if (spec.forms && Array.isArray(spec.forms)) {
        spec.forms.forEach((f: string) => {
            const key = normalizeKey(f);
            const size = spec.sizes?.[key];
            forms.push({ key, label: f, size });
        });
    } else if (spec.examples) {
        spec.examples.forEach((f: string) => {
            const key = normalizeKey(f);
            forms.push({ key, label: f, size: spec.sizes?.[key] });
        });
    } else if (spec.variants) {
        spec.variants.forEach((v: any) => {
            const key = v.key || (typeof v.label === "string" ? normalizeKey(v.label) : "");
            forms.push({
                key,
                label: typeof v.label === "string" ? v.label : (v.key || "Product Variant"),
                size: v.size || spec.sizes?.[key],
            });
        });
    } else if (spec.sizes) {
        Object.keys(spec.sizes).forEach((k) => {
            const label = k.charAt(0).toUpperCase() + k.slice(1);
            forms.push({ key: k, label, size: spec.sizes[k] });
        });
    }

    // Deduplicate forms by key while preserving order
    const seen = new Set<string>();
    const uniqueForms: { key: string; label: string; size?: string }[] = [];
    for (const f of forms) {
        if (!seen.has(f.key)) {
            seen.add(f.key);
            uniqueForms.push(f);
        }
    }
    // use uniqueForms for rendering
    const renderForms = uniqueForms;

    function openForm(f: { key: string; label: string; size?: string }) {
        setSelectedForm(f);
        setOpen(true);
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {renderForms.map((f) => (
                    <FormCard
                        key={f.key}
                        form={f}
                        product={product}
                        onClick={() => openForm(f)}
                    />
                ))}
            </div>

            <ProductModal
                product={product}
                open={open}
                onClose={() => {
                    setOpen(false);
                    setSelectedForm(null);
                }}
            />
        </div>
    );
}
