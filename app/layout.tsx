import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { structuredData } from "./structured-data";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Arnav Kulkarni - Software Engineer | UCSD Graduate",
    template: "%s | Arnav Kulkarni"
  },
  description: "Arnav Kulkarni - Software Engineer specializing in distributed systems, machine learning, and full-stack development. UCSD graduate with experience in C++, Go, Python, and cloud technologies. Former Research Associate at UCSD Contijoch Lab working on MRI imaging systems.",
  keywords: [
    "Arnav Kulkarni",
    "Arnav Kulkarni UCSD",
    "Arnav Kulkarni Software Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "Distributed Systems",
    "Machine Learning Engineer",
    "UCSD Computer Science",
    "MRI Research",
    "Go Developer",
    "C++ Developer",
    "Python Developer",
    "Siemens MRI",
    "Contijoch Lab",
    "ARKS MRI",
    "Portfolio",
    "arnavk2001"
  ],
  authors: [{ name: "Arnav Kulkarni", url: "https://github.com/arnavk2001" }],
  creator: "Arnav Kulkarni",
  publisher: "Arnav Kulkarni",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://arnavvkulkarni.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Arnav Kulkarni - Software Engineer | UCSD Graduate",
    description: "Software Engineer specializing in distributed systems, machine learning, and full-stack development. UCSD graduate with experience in C++, Go, Python, and cloud technologies.",
    siteName: "Arnav Kulkarni Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arnav Kulkarni - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Kulkarni - Software Engineer | UCSD Graduate",
    description: "Software Engineer specializing in distributed systems, machine learning, and full-stack development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
