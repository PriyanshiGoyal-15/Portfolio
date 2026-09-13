import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://priyanshi-goyal.vercel.app/"),
  title: {
    default: "Priyanshi Goyal | Frontend Developer",
    template: "%s | Priyanshi Goyal",
  },
  description:
    "Frontend Developer with 1+ year professional experience building scalable web applications with React.js, Next.js, TypeScript, and Redux. Immediate Joiner open to relocation across India.",
  keywords: [
    "Priyanshi Goyal",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript",
    "Redux Toolkit",
    "MERN Stack",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Priyanshi Goyal" }],
  creator: "Priyanshi Goyal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://priyanshi-goyal.vercel.app/",
    siteName: "Priyanshi Goyal Portfolio",
    title: "Priyanshi Goyal | Frontend Developer",
    description:
      "Frontend Developer with 1+ year professional experience building scalable web applications with React.js, Next.js, TypeScript, and Redux. Immediate Joiner open to relocation across India.",
    images: [
      {
        url: "https://priyanshi-goyal.vercel.app/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Priyanshi Goyal | Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshi Goyal | Frontend Developer",
    description:
      "Frontend Developer with 1+ year professional experience building scalable web applications with React.js, Next.js, TypeScript, and Redux. Immediate Joiner open to relocation across India.",
    images: ["https://priyanshi-goyal.vercel.app/og-banner.png"],
    creator: "@priyanshi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
