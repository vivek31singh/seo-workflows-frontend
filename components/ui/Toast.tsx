'use client';

import { useEffect, useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  isVisible: boolean;
  onClose: () => void;
  className?: ClassValue;
}

const toastStyles: Record<ToastType, string> = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
};

const iconStyles: Record<ToastType, string> = {
  success: 'text-green-500',
  error: 'text-red-500',
  info: 'text-blue-500',
};

const icons: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle className="w-5 h-5" />,
  error: <AlertCircle className="w-5 h-5" />,
  info: <Info className="w-5 h-5" />,
};

export function Toast({
  message,
  type = 'info',
  duration = 5000,
  isVisible,
  onClose,
  className,
}: ToastProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(onClose, 300); // Wait for exit animation
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible && !isAnimating) return null;

  const baseClasses = 'fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg transition-all duration-300 transform max-w-md';
  const animationClasses = isAnimating 
    ? 'translate-x-0 opacity-100' 
    : 'translate-x-full opacity-0';

  return (
    <div
      className={twMerge(
        clsx(
          baseClasses,
          toastStyles[type],
          animationClasses,
          className
        )
      )}
      role="alert"
      aria-live="polite"
    >
      <span className={iconStyles[type]}>{icons[type]}</span>
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className={`p-1 hover:bg-black/10 rounded transition-colors ${iconStyles[type]}`}
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

// Hook for managing toast state
export function useToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<ToastType>('info');

  const showToast = (newMessage: string, newType: ToastType = 'info') => {
    setMessage(newMessage);
    setType(newType);
    setIsVisible(true);
  };

  const hideToast = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    message,
    type,
    showToast,
    hideToast,
  };
}
