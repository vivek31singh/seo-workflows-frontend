import { Metadata } from "next";
import { HeroSection } from '@/components/home/HeroSection';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { ResourceStrip } from '@/components/home/ResourceStrip';

export const metadata: Metadata = {
  title: "Home",
  description: "Access a comprehensive directory of free SEO tools and resources. Discover interactive tools for data analysis, relevance optimization, technical SEO, and authority building to boost your search engine rankings.",
  openGraph: {
    title: "SEO Workflows - Free SEO Tools & Resources",
    description: "Access a comprehensive directory of free SEO tools and resources. Discover interactive tools for data analysis, relevance optimization, technical SEO, and authority building."
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategoryGrid />
      <ResourceStrip />
    </main>
  );
}