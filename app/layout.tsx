import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEO Workflows - Free SEO Tools & Resources",
  description: "A comprehensive directory of free SEO tools and resources to help you optimize your digital presence.",
  keywords: ["SEO", "tools", "resources", "search engine optimization", "digital marketing"],
  authors: [{ name: "SEO Workflows" }],
  openGraph: {
    title: "SEO Workflows - Free SEO Tools & Resources",
    description: "A comprehensive directory of free SEO tools and resources to help you optimize your digital presence.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
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
