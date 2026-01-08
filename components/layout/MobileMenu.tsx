import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background shadow-xl md:hidden">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border p-4">
            <span className="text-lg font-semibold text-foreground">Menu</span>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/company/about"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/company/contact"
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer Info */}
          <div className="border-t border-border p-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SEO Workflows
            </p>
          </div>
        </div>
      </div>
    </>
  );
}