import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PostHogProvider } from "@/components/PostHogProvider";
import { PostHogPageView } from "@/components/PostHogPageView";
import { DevModeIndicator } from "@/components/DevModeIndicator";
import { structuredData } from "./structured-data";
import Script from "next/script";
import { Suspense } from "react";

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
    "Arnav V Kulkarni",
    "a3kulkarni",
    "arnavk2001",
    "Arnav Kulkarni PICT",
    "Arnav Kulkarni Pune",
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
        url: "https://arnavvkulkarni.com/arnav.png",
        width: 1200,
        height: 630,
        alt: "Arnav Kulkarni - Software Engineer Portfolio",
      },
    ],
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
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
        <PostHogProvider>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          <ThemeProvider>
            {children}
          </ThemeProvider>
          <DevModeIndicator />
        </PostHogProvider>
      </body>
    </html>
  );
}
