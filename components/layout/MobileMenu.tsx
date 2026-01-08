'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
            <span className="text-lg font-semibold text-gray-900">Menu</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/company/about"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/company/contact"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer in mobile menu */}
          <div className="border-t border-gray-200 px-4 py-4">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} SEO Workflows
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
