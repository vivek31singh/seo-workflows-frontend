import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Privacy Policy - SEO Workflows',
  description: 'Learn how SEO Workflows protects your privacy and handles your data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <Card className="p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At SEO Workflows, we take your privacy seriously. This Privacy Policy explains how we handle
              your information when you use our website and tools. Since our tools run entirely in your
              browser, we have a unique approach to data privacy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using SEO Workflows, you agree to the collection and use of information in accordance
              with this policy.
            </p>
          </section>

          {/* Information We Don't Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Don't Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Unlike many other SEO tools, <strong>we do not collect or store</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Your website URLs or domain names entered into our tools</li>
              <li>Any content you analyze using our tools</li>
              <li>Keywords or search queries you research</li>
              <li>Personal identification information through tool usage</li>
              <li>IP addresses or location data tied to your activities</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              All data processing happens locally in your browser. Nothing is transmitted to our servers.
            </p>
          </section>

          {/* Information We May Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We May Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Browser Cookies</h3>
                <p className="text-gray-600">
                  We use essential cookies to maintain your session and preferences. You can disable
                  cookies in your browser settings, but this may affect site functionality.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Form Data</h3>
                <p className="text-gray-600">
                  If you voluntarily submit information through our contact form, we only use it to
                  respond to your inquiry. This is a demo feature, so no data is actually transmitted.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Anonymous Analytics</h3>
                <p className="text-gray-600">
                  We may use anonymous analytics to understand site usage patterns and improve our
                  services. This data cannot identify you personally.
                </p>
              </div>
            </div>
          </section>

          {/* How We Protect Your Data */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Protect Your Data</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our architecture is designed with privacy-first principles:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Client-side processing: Your data never leaves your device</li>
              <li>No server-side databases storing user inputs</li>
              <li>No third-party data sharing or selling</li>
              <li>HTTPS encryption for all connections</li>
              <li>Regular security reviews of our codebase</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Since we don't collect personal data, you don't need to worry about:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Data deletion requests</li>
              <li>Data export requests</li>
              <li>Marketing opt-outs</li>
              <li>Profile modifications</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Your data stays with you, always.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us
              through our <a href="/company/contact" className="text-blue-600 hover:underline">contact page</a>.
            </p>
          </section>
        </Card>
      </div>
    </div>
  );
}
