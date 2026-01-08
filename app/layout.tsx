import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SEO Workflows - Free SEO Tools & Resources",
    template: "%s | SEO Workflows"
  },
  description: "A comprehensive directory of free SEO tools and resources to help you optimize your website and improve search engine rankings.",
  manifest: "/manifest.json",
  keywords: ["SEO tools", "SEO resources", "search engine optimization", "free SEO tools"],
  authors: [{ name: "SEO Workflows" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seoworkflows.com",
    siteName: "SEO Workflows",
    title: "SEO Workflows - Free SEO Tools & Resources",
    description: "A comprehensive directory of free SEO tools and resources."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
