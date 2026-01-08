import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, label, error, helperText, id, rows = 4, ...props },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-y dark:border-gray-600 dark:bg-gray-800 dark:text-white",
            error &&
              "border-red-500 focus:ring-red-500 focus:border-red-500",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={helperText || error ? `${textareaId}-description` : undefined}
          {...props}
        />
        {(error || helperText) && (
          <p
            id={`${textareaId}-description`}
            className={cn(
              "mt-1 text-sm",
              error ? "text-red-600" : "text-gray-500 dark:text-gray-400"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
