import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavigationProgress from "./components/NavigationProgress";

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
      </body>
    </html>
  );
}
