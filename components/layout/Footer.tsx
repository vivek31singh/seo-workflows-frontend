import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">SEO Workflows</h3>
            <p className="text-sm text-muted-foreground">
              Your comprehensive directory of free SEO tools and resources to optimize your digital presence.
            </p>
          </div>

          {/* Tools Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tools" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/tools?category=Data Analysis" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link href="/tools?category=Technical" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Technical SEO
                </Link>
              </li>
              <li>
                <Link href="/tools?category=Authority" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Authority Building
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/glossary" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/resources/chatbots" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/extensions" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Extensions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/company/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SEO Workflows. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}