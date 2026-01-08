import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SEO Workflows - Free SEO Tools & Resources",
    template: "%s | SEO Workflows"
  },
  description: "A comprehensive directory of free SEO tools and resources to help you optimize your digital presence. Browse our collection of interactive tools for data analysis, relevance, technical SEO, and authority building.",
  keywords: ["SEO", "tools", "free SEO tools", "search engine optimization", "digital marketing", "keyword research", "technical SEO", "backlink analysis", "SEO resources"],
  authors: [{ name: "SEO Workflows" }],
  creator: "SEO Workflows",
  publisher: "SEO Workflows",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://seoworkflows.com'),
  openGraph: {
    title: "SEO Workflows - Free SEO Tools & Resources",
    description: "A comprehensive directory of free SEO tools and resources to help you optimize your digital presence.",
    type: "website",
    locale: "en_US",
    siteName: "SEO Workflows"
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Workflows - Free SEO Tools & Resources",
    description: "A comprehensive directory of free SEO tools and resources to help you optimize your digital presence."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/manifest."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}