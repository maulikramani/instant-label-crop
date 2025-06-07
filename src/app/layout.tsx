import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata: Metadata = {
    title: "Home | Instant Label Crop",
    description: "Instantly crop meesho and flipkart shipping labels.",
    keywords: [
        "Meesho label crop",
        "flipkart label crop",
        "meesho crop label",
        "flipkart crop label",
        "shipping label crop",
        "online shipping label crop",
        "online label crop",
        "meesho",
        "flipkart",
        "amazon",
        "online selling labels",
        "online selling",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                {children}
                <BootstrapClient />
            </body>
        </html>
    );
}
