import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="mx-auto max-w-md space-y-6">
        {/* 404 Header */}
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        
        {/* Page Title */}
        <h2 className="text-2xl font-semibold text-foreground">
          Page Not Found
        </h2>
        
        {/* Description */}
        <p className="text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or the URL might be incorrect.
        </p>
        
        {/* Return Home Button */}
        <div className="pt-4">
          <Link href="/">
            <Button variant="default" size="lg">
              Return Home
            </Button>
          </Link>
        </div>
        
        {/* Additional Help Text */}
        <p className="text-sm text-muted-foreground">
          Or try using the navigation menu to find what you're looking for.
        </p>
      </div>
    </main>
  );
}
