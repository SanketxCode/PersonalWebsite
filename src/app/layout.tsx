import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanket Kumbhar — Software Engineer",
  description:
    "Full Stack Developer at Barclays building reliable, performant, and secure software. Experienced with React, Spring Boot, CI/CD, and enterprise web architecture.",
  keywords: [
    "Sanket Kumbhar",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Spring Boot",
    "Barclays",
    "Pune",
    "Portfolio",
  ],
  authors: [{ name: "Sanket Kumbhar" }],
  openGraph: {
    type: "website",
    title: "Sanket Kumbhar — Software Engineer",
    description:
      "Full Stack Developer at Barclays building reliable, performant, and secure software.",
    siteName: "Sanket Kumbhar",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanket Kumbhar — Software Engineer",
    description:
      "Full Stack Developer at Barclays building reliable, performant, and secure software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise-bg`}
      >
        {children}
      </body>
    </html>
  );
}
