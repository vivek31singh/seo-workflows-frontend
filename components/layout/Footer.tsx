import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  product: [
    { label: 'All Tools', href: '/tools' },
    { label: 'Data Analysis', href: '/tools?category=Data+Analysis' },
    { label: 'Relevance', href: '/tools?category=Relevance' },
    { label: 'Technical SEO', href: '/tools?category=Technical' },
    { label: 'Authority', href: '/tools?category=Authority' },
  ],
  resources: [
    { label: 'Resource Hub', href: '/resources' },
    { label: 'Glossary', href: '/resources/glossary' },
    { label: 'Chatbots', href: '/resources/chatbots' },
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Extensions', href: '/resources/extensions' },
  ],
  company: [
    { label: 'About Us', href: '/company/about' },
    { label: 'Contact', href: '/company/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: Github,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                SEO<span className="text-blue-600">Workflows</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              A comprehensive directory of free SEO tools and resources to help you
              optimize your website and improve search rankings.
            </p>
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                  aria-label={item.name}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Product
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerLinks.product.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Resources
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerLinks.resources.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerLinks.company.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} SEO Workflows. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
