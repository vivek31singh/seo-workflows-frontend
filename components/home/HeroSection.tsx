import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 sm:py-32">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-transparent" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            <Zap className="mr-2 h-4 w-4" />
            Free SEO Tools & Resources
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Master Your SEO Workflow
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            Access a comprehensive directory of free SEO tools, technical resources, 
            and expert guides. Optimize your website, analyze data, and build authority 
            without breaking the bank.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/tools">
              <Button variant="primary" size="lg" className="group">
                Explore Tools
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button variant="secondary" size="lg">
                View Resources
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 text-sm text-slate-500">
            <p>12+ Free Tools • No Sign-up Required • Instant Results</p>
          </div>
        </div>
      </div>
    </section>
  );
}