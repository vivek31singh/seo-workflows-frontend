import { HeroSection } from '@/components/home/HeroSection';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { ResourceStrip } from '@/components/home/ResourceStrip';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategoryGrid />
      <ResourceStrip />
    </main>
  );
}

export const metadata = {
  title: 'SEO Workflows - Free SEO Tools & Resources',
  description: 'Access a comprehensive directory of free SEO tools, technical resources, and expert guides. Optimize your website and build authority without breaking the bank.',
};