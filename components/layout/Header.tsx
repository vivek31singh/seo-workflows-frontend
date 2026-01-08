'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                <span className="text-sm font-bold text-white">SW</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SEO Workflows</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-8">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600"
              >
                Home
              </Link>
              <Link
                href="/tools"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600"
              >
                Tools
              </Link>
              <Link
                href="/resources"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600"
              >
                Resources
              </Link>
              <Link
                href="/company/about"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600"
              >
                About
              </Link>
              <Link
                href="/company/contact"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
