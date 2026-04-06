import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fardeen Tours — Discover India, Your Way",
  description:
    "Premium India tour packages — Taj Mahal, Golden Triangle, Royal Rajasthan & more. 7+ years of crafting unforgettable experiences with personalized service.",
  keywords:
    "India tours, Taj Mahal tour, Golden Triangle, Rajasthan tour, Agra tour, Delhi tour, Jaipur tour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
