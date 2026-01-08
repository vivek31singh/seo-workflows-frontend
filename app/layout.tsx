import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://seoworkflows.com'),
  title: {
    default: "SEO Workflows - Free SEO Tools & Resources",
    template: "%s | SEO Workflows"
  },
  description: "A comprehensive directory of free SEO tools and resources to help you optimize your website and improve search engine rankings.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seoworkflows.com",
    title: "SEO Workflows - Free SEO Tools & Resources",
    description: "Access free SEO tools and resources for data analysis, technical SEO, and authority building.",
    siteName: "SEO Workflows",
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
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
