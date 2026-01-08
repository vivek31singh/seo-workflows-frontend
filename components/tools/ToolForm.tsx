"use client";

import { useState } from 'react';
import { Play, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface InputField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'select';
  placeholder?: string;
  options?: string[];
}

interface ToolFormProps {
  inputs: InputField[];
  onSubmit: (data: Record<string, string>) => Promise<void>;
  isLoading: boolean;
}

export default function ToolForm({ inputs, onSubmit, isLoading }: ToolFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    // Clear error when user starts typing
    if (errors[key]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[key];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: Record<string, string> = {};
    inputs.forEach((input) => {
      if (!formData[input.key]?.trim()) {
        newErrors[input.key] = `${input.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {inputs.map((input) => (
        <div key={input.key} className="space-y-2">
          <label
            htmlFor={input.key}
            className="block text-sm font-medium text-foreground"
          >
            {input.label}
          </label>
          {input.type === 'textarea' ? (
            <Textarea
              id={input.key}
              placeholder={input.placeholder}
              value={formData[input.key] || ''}
              onChange={(e) => handleChange(input.key, e.target.value)}
              className={cn(
                errors[input.key] && 'border-destructive focus-visible:ring-destructive'
              )}
              rows={4}
            />
          ) : input.type === 'select' ? (
            <select
              id={input.key}
              value={formData[input.key] || ''}
              onChange={(e) => handleChange(input.key, e.target.value)}
              className={cn(
                'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
                'placeholder:text-muted-foreground',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50',
                errors[input.key] && 'border-destructive focus-visible:ring-destructive'
              )}
            >
              <option value="">Select an option</option>
              {input.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <Input
              id={input.key}
              type={input.type}
              placeholder={input.placeholder}
              value={formData[input.key] || ''}
              onChange={(e) => handleChange(input.key, e.target.value)}
              className={cn(
                errors[input.key] && 'border-destructive focus-visible:ring-destructive'
              )}
            />
          )}
          {errors[input.key] && (
            <p className="text-sm text-destructive">{errors[input.key]}</p>
          )}
        </div>
      ))}

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Play className="mr-2 h-4 w-4" />
            Run Tool
          </>
        )}
      </Button>
    </form>
  );
}