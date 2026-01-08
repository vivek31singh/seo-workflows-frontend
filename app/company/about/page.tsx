import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'About Us - SEO Workflows',
  description: 'Learn about our mission to provide free, accessible SEO tools for everyone.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About SEO Workflows
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering SEO professionals with free, accessible, and powerful tools
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At SEO Workflows, we believe that powerful SEO tools shouldn't be locked behind expensive
              subscriptions. Our mission is to democratize access to professional-grade SEO utilities
              that help marketers, developers, and business owners succeed in the digital landscape.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every tool in our directory is designed to solve real-world SEO challenges, from data
              analysis and technical audits to content relevance and authority building. We're committed
              to maintaining a comprehensive, up-to-date resource hub that evolves with the industry.
            </p>
          </Card>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Analysis</h3>
              <p className="text-gray-600 text-sm">
                Powerful tools to analyze and interpret your SEO data effectively.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical SEO</h3>
              <p className="text-gray-600 text-sm">
                Diagnose and fix technical issues that impact your search rankings.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Results</h3>
              <p className="text-gray-600 text-sm">
                Get instant insights with our fast, browser-based tools.
              </p>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Accessibility First</h3>
                  <p className="text-gray-600 mt-1">
                    SEO tools should be available to everyone, regardless of budget or technical expertise.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Privacy & Security</h3>
                  <p className="text-gray-600 mt-1">
                    Your data stays in your browser. We never store or transmit your information to external servers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Continuous Improvement</h3>
                  <p className="text-gray-600 mt-1">
                    We regularly update our tools and add new features based on community feedback and industry trends.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
