import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'SEO Workflows - Free SEO Tools & Resources',
    template: '%s | SEO Workflows',
  },
  description:
    'A comprehensive directory of free SEO tools and resources. Analyze data, check relevance, optimize technical SEO, and build authority with our browser-based tools.',
  keywords: [
    'SEO tools',
    'free SEO',
    'SEO analysis',
    'technical SEO',
    'SEO resources',
    'search engine optimization',
    'keyword research',
    'backlink analysis',
  ],
  authors: [{ name: 'SEO Workflows Team' }],
  creator: 'SEO Workflows',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seoworkflows.com',
    title: 'SEO Workflows - Free SEO Tools & Resources',
    description:
      'A comprehensive directory of free SEO tools and resources. Analyze data, check relevance, optimize technical SEO, and build authority.',
    siteName: 'SEO Workflows',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Workflows - Free SEO Tools & Resources',
    description:
      'A comprehensive directory of free SEO tools and resources. Analyze data, check relevance, optimize technical SEO, and build authority.',
    creator: '@seoworkflows',
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
    // Add your verification codes here when deploying
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-gray-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
