import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Terms of Service - SEO Workflows',
  description: 'Terms of service and usage guidelines for SEO Workflows.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <Card className="p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to SEO Workflows. By accessing or using our website and tools, you agree to be
              bound by these Terms of Service. If you disagree with any part of these terms, please do
              not use our service.
            </p>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SEO Workflows provides a directory of free SEO tools and resources that run entirely in
              your web browser. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Access to various SEO analysis tools</li>
              <li>Educational resources and guides</li>
              <li>Tool documentation and usage instructions</li>
              <li>Resource directories for glossaries, extensions, and more</li>
            </ul>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree to use our service only for lawful purposes and in accordance with these Terms.
              You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Use the tools for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Use automated tools to scrape or harvest data</li>
              <li>Reproduce, duplicate, or copy any part of the service without permission</li>
              <li>Use the service to harass, abuse, or harm others</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All content on SEO Workflows, including but not limited to text, graphics, logos, icons,
              images, and software, is the property of SEO Workflows or its content suppliers and is
              protected by intellectual property laws.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You may not modify, reproduce, distribute, or create derivative works based on our content
              without express written permission.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SEO Workflows is provided "as is" without warranties of any kind, either express or implied.
              We do not guarantee that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>The service will be uninterrupted, timely, secure, or error-free</li>
              <li>The results from using our tools are 100% accurate</li>
              <li>Any errors or defects will be corrected</li>
              <li>The service is free of viruses or other harmful components</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              SEO recommendations and analysis should be used as guidance, not as definitive answers.
              Always verify results through multiple sources.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              In no event shall SEO Workflows be liable for any indirect, incidental, special, consequential,
              or punitive damages, including without limitation, loss of profits, data, use, goodwill, or
              other intangible losses, resulting from your access to or use of or inability to access or
              use the service.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Our service may contain links to third-party websites or resources. We are not responsible
              for the content, accuracy, or opinions expressed in such websites. We provide these links
              as a convenience and do not endorse the linked sites.
            </p>
          </section>

          {/* Modifications to Service */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modifications to Service</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the service at any time without
              prior notice. We will not be liable to you or any third party for any modification,
              suspension, or discontinuation of the service.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to update these Terms at any time. When we do, we will revise the
              updated date at the top of this page. Your continued use of the service after any such
              changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
              in which SEO Workflows operates, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Contact Information */}
          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our
              <a href="/company/contact" className="text-blue-600 hover:underline">contact page</a>.
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
