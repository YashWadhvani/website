"use client";
import { useState, useEffect } from "react";
import { FaEnvelope, FaWhatsapp, FaCheckCircle } from "react-icons/fa";

const productsList = [
    { id: "onion-white", name: "Dehydrated Onion - White" },
    { id: "onion-red", name: "Dehydrated Onion - Red" },
    { id: "onion-pink", name: "Dehydrated Onion - Pink" },
    { id: "onion-fried", name: "Dehydrated Fried Onion" },
    { id: "garlic", name: "Dehydrated Garlic" },
    { id: "spices", name: "Spices & Powder Blends" },
    { id: "peanuts", name: "Peanuts (Salted / Masala / Blanch)" },
];

export default function InquiryForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [inquiryType, setInquiryType] = useState("general");
    const [selectedProduct, setSelectedProduct] = useState("onion-white");
    const [message, setMessage] = useState("");
    const [sentStatus, setSentStatus] = useState<string | null>(null);

    // Pre-fill query parameters on load
    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const type = params.get("inquiryType");
            const prod = params.get("productId");
            if (type === "product") {
                setInquiryType("product");
                if (prod) {
                    const match = productsList.find((p) => p.id === prod);
                    if (match) {
                        setSelectedProduct(match.id);
                    }
                }
            }
        }
    }, []);

    const getSelectedProductName = () => {
        const prod = productsList.find((p) => p.id === selectedProduct);
        return prod ? prod.name : "Selected Product";
    };

    // Helper to format structured message text
    const formatMessageText = () => {
        const productInfo =
            inquiryType === "product"
                ? `\n*Product of Interest:* ${getSelectedProductName()}`
                : "";

        return `Hello DNR Agri Exports Team,

I would like to inquire about sourcing agro products. Here are my details:
*Name:* ${name}
*Email:* ${email}
*Company:* ${company || "Not Provided"}
*Phone:* ${phone}${productInfo}

*Requirements:*
${message || "No additional comments"}

Looking forward to your reply.`;
    };

    const handleSendEmail = (e: React.MouseEvent) => {
        if (!name || !email || !phone) return; // let form validation trigger if submitted normally
        e.preventDefault();

        const subject =
            inquiryType === "product"
                ? `B2B Product Inquiry: ${getSelectedProductName()} - DNR Agri Exports`
                : "General Trade Inquiry - DNR Agri Exports";

        const mailtoLink = `mailto:sales@dnragriexports.com?subject=${encodeURIComponent(
            subject,
        )}&body=${encodeURIComponent(formatMessageText())}`;

        window.location.href = mailtoLink;
        setSentStatus("email");
        setTimeout(() => setSentStatus(null), 5000);
    };

    const handleSendWhatsApp = (e: React.MouseEvent) => {
        if (!name || !email || !phone) return;
        e.preventDefault();

        // Target sales number
        const whatsappNumber = "919876543210"; 
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            formatMessageText(),
        )}`;

        window.open(whatsappUrl, "_blank");
        setSentStatus("whatsapp");
        setTimeout(() => setSentStatus(null), 5000);
    };

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-3xl shadow-xl p-8 border border-[var(--border-light)] max-w-2xl mx-auto space-y-6"
        >
            <h3 className="text-2xl font-heading font-extrabold text-[var(--charcoal)] mb-2">
                Send Request For Quote (RFQ)
            </h3>
            <p className="text-sm text-[var(--muted)] mb-6 font-body">
                Specify your cargo requirements, packaging, and quantity. We will respond with pricing details within 24 hours.
            </p>

            {/* Inquiry Type Radio Selectors */}
            <div className="bg-[var(--off-white)] p-1.5 rounded-2xl flex border border-[var(--border-light)] shadow-sm">
                <button
                    type="button"
                    onClick={() => setInquiryType("general")}
                    className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                        inquiryType === "general"
                            ? "bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)] text-white shadow-md"
                            : "text-[var(--charcoal)] hover:text-[var(--brand-dark-green)]"
                    }`}
                >
                    General Inquiry
                </button>
                <button
                    type="button"
                    onClick={() => setInquiryType("product")}
                    className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                        inquiryType === "product"
                            ? "bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)] text-white shadow-md"
                            : "text-[var(--charcoal)] hover:text-[var(--brand-dark-green)]"
                    }`}
                >
                    Product Inquiry
                </button>
            </div>

            {/* Dynamic Product Dropdown */}
            {inquiryType === "product" && (
                <div className="space-y-2 animate-slide-up">
                    <label className="text-sm font-bold text-[var(--charcoal)] font-heading">
                        Select Product of Interest
                    </label>
                    <select
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        className="w-full p-3.5 rounded-xl border border-[var(--border-light)] focus:ring-2 focus:ring-[var(--brand-light-green)] focus:outline-none bg-white text-[var(--charcoal)] font-medium shadow-sm transition-all"
                    >
                        {productsList.map((prod) => (
                            <option key={prod.id} value={prod.id}>
                                {prod.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--charcoal)] font-heading">
                        Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full p-3.5 rounded-xl border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-light-green)] bg-white text-[var(--charcoal)] text-sm shadow-sm transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--charcoal)] font-heading">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. buyer@company.com"
                        className="w-full p-3.5 rounded-xl border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-light-green)] bg-white text-[var(--charcoal)] text-sm shadow-sm transition-all"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--charcoal)] font-heading">
                        Company Name
                    </label>
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Global Foods Ltd"
                        className="w-full p-3.5 rounded-xl border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-light-green)] bg-white text-[var(--charcoal)] text-sm shadow-sm transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--charcoal)] font-heading">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +1 (555) 000-0000"
                        className="w-full p-3.5 rounded-xl border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-light-green)] bg-white text-[var(--charcoal)] text-sm shadow-sm transition-all"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--charcoal)] font-heading">
                    Cargo Specifications & Details
                </label>
                <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your destination port, packaging preferences, and volume requirements..."
                    className="w-full p-4 rounded-xl border border-[var(--border-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-light-green)] bg-white text-[var(--charcoal)] text-sm shadow-sm transition-all resize-none"
                />
            </div>

            {/* B2B Multi-Redirection CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                    type="button"
                    onClick={handleSendEmail}
                    disabled={!name || !email || !phone}
                    className={`btn-group-slide flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--brand-dark-green)] to-[var(--brand-forest)] text-white px-6 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 text-center ${
                        !name || !email || !phone ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    <div className="btn-group-content flex items-center gap-2">
                        <FaEnvelope size={16} />
                        <span>Send Quote Email</span>
                    </div>
                </button>

                <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    disabled={!name || !email || !phone}
                    className={`btn-group-slide flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 text-center ${
                        !name || !email || !phone ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    <div className="btn-group-content flex items-center gap-2">
                        <FaWhatsapp size={16} />
                        <span>Send WhatsApp RFQ</span>
                    </div>
                </button>
            </div>

            {/* Success/Redirection Notice */}
            {sentStatus && (
                <div className="flex items-center gap-2 text-[var(--brand-dark-green)] font-semibold text-sm justify-center pt-2 animate-fade-in">
                    <FaCheckCircle size={16} />
                    <span>
                        Redirecting to your {sentStatus === "email" ? "Email Client" : "WhatsApp Chat"}...
                    </span>
                </div>
            )}
        </form>
    );
}
