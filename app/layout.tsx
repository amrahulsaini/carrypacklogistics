import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavigationProgress from "./components/NavigationProgress";
import { Phone, MessageSquare } from 'lucide-react';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Carry Pack Logistics | Professional Transport & Warehouse Services in Ahmedabad",
  description: "Structured Logistics. Transparent Commitments. Premium Execution. Offering separate vehicle service, sharing vehicle service, warehouse solutions, car & bike transport, and door-to-door delivery in Ahmedabad.",
  keywords: "logistics, transport, warehouse, car transport, bike transport, Ahmedabad, door-to-door service",
  authors: [{ name: "Carry Pack Logistics" }],
  icons: {
    icon: "/faicon-carry.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <NavigationProgress />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />

        <div className="fixed bottom-4 right-4 z-50">
          <a
            href="https://wa.me/918949437619?text=Hello%20Carry%20Pack%20Logistics"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
            aria-label="WhatsApp chat"
          >
            <MessageSquare size={24} />
          </a>
        </div>

        <div className="fixed bottom-4 left-4 z-50">
          <a
            href="tel:+918949437619"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1d4ed8] text-white shadow-lg hover:scale-105 transition-transform"
            aria-label="Call us"
          >
            <Phone size={24} />
          </a>
        </div>
      </body>
    </html>
  );
}
