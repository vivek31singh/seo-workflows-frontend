import Link from 'next/link';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                  <span className="text-sm font-bold text-white">SW</span>
                </div>
                <span className="text-lg font-bold text-gray-900">SEO Workflows</span>
              </div>
              <p className="text-sm text-gray-600">
                A comprehensive directory of free SEO tools and resources to help you optimize your digital presence.
              </p>
            </div>

            {/* Tools Section */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                Tools
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/tools"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    All Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools?category=Data+Analysis"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    Data Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools?category=Relevance"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    Relevance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools?category=Technical"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    Technical SEO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools?category=Authority"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    Authority
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/resources/glossary"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    Glossary
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/chatbots"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    AI Chatbots
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/blog"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/extensions"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    Extensions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/company/about"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company/contact"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} SEO Workflows. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-200 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-200 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-200 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-200 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
