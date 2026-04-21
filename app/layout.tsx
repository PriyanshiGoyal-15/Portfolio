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
  title: {
    default: "Priyanshi Goyal | Developer & Designer",
    template: "%s | Priyanshi Goyal",
  },
  description: "Developer & Designer crafting high-performance digital interfaces with a focus on functional minimalism and clean architecture.",
  keywords: [
    "Priyanshi Goyal",
    "Portfolio",
    "Web Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js",
    "Frontend Engineer",
    "Frontend Developer",
  ],
  authors: [{ name: "Priyanshi Goyal" }],
  creator: "Priyanshi Goyal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://priyanshigoyal.dev", // Replace with your actual domain
    siteName: "Priyanshi Goyal Portfolio",
    title: "Priyanshi Goyal | Developer & Designer",
    description: "Developer & Designer crafting high-performance digital interfaces with a focus on functional minimalism and clean architecture.",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Priyanshi Goyal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshi Goyal | Developer & Designer",
    description: "Developer & Designer crafting high-performance digital interfaces with a focus on functional minimalism and clean architecture.",
    images: ["/profile.png"],
    creator: "@priyanshi", // Replace with your actual twitter handle if available
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
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
