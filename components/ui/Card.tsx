import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ className, children, ...props }: CardProps) => {
  return (
    <h3 className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props}>
      {children}
    </h3>
  );
};

export const CardDescription = ({ className, children, ...props }: CardProps) => {
  return (
    <p className={cn('text-sm text-gray-500', className)} {...props}>
      {children}
    </p>
  );
};

export const CardContent = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={cn('flex items-center p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
};
