import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata = {
    title: "DNR Agri Exports",
    description: "Premium agro products exported worldwide",
    openGraph: {
        title: "DNR Agri Exports",
        description:
            "Premium agro products exported worldwide — dehydrated onion, garlic, spices, peanuts and vegetable powders.",
        images: ["/images/factory.jpg"],
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen text-black font-body">
                <Navbar />
                <main>{children}</main>
                <Footer />
                <FloatingWhatsApp />
            </body>
        </html>
    );
}
