import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

export const Badge = ({ className, variant = 'default', children, ...props }: BadgeProps) => {
  const variants = {
    default: 'bg-primary-100 text-primary-700 border-primary-200',
    secondary: 'bg-gray-100 text-gray-700 border-gray-200',
    outline: 'border border-gray-300 text-gray-700',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
