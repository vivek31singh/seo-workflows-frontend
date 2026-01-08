'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Tools', href: '/tools' },
  { label: 'Resources', href: '/resources', hasDropdown: true },
  { label: 'Company', href: '/company/about', hasDropdown: true },
  { label: 'Contact', href: '/company/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              SEO<span className="text-blue-600">Workflows</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center text-sm font-medium leading-6 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open main menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/tools"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile menu placeholder - Full implementation in Phase 4 with Modal component */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
