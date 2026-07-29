import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import WhatsappButton from "@/components/shared/WhatsAppButton";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Smigen Industries | Professional Painting Services",

  description:
    "Smigen Industries provides professional residential, commercial, and industrial painting services with premium finishes and exceptional workmanship.",

  keywords: [
    "Painting Company",
    "Interior Painting",
    "Exterior Painting",
    "Commercial Painting",
    "House Painting",
    "Smigen Industries",
    "Nigeria Painters",
  ],

  openGraph: {
    title: "Smigen Industries",

    description:
      "Professional Painting Services",

    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}