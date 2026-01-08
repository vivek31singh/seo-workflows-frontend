'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { ResultPanel } from '@/components/tools/ResultPanel';
import type { Tool } from '@/types';
import { Loader2 } from 'lucide-react';

interface ToolFormProps {
  tool: Tool;
}

interface FormValues {
  [key: string]: string;
}

export function ToolForm({ tool }: ToolFormProps) {
  const [values, setValues] = useState<FormValues>({});
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setError(null);
  };

  const generateMockResult = (): Record<string, unknown> => {
    const mockResult: Record<string, unknown> = {
      success: true,
      tool: tool.name,
      timestamp: new Date().toISOString(),
      inputs: { ...values },
    };

    // Generate category-specific mock results
    switch (tool.category) {
      case 'Data Analysis':
        mockResult.metrics = {
          totalKeywords: Math.floor(Math.random() * 1000) + 100,
          avgVolume: Math.floor(Math.random() * 50000) + 1000,
          difficultyScore: (Math.random() * 100).toFixed(1),
        };
        break;
      case 'Relevance':
        mockResult.scores = {
          contentScore: (Math.random() * 100).toFixed(1),
          keywordDensity: (Math.random() * 5).toFixed(2) + '%',
          readabilityScore: Math.floor(Math.random() * 100) + 1,
        };
        break;
      case 'Technical':
        mockResult.technical = {
          status: 200,
          loadTime: (Math.random() * 3).toFixed(2) + 's',
          mobileFriendly: Math.random() > 0.3,
          issuesFound: Math.floor(Math.random() * 10),
        };
        break;
      case 'Authority':
        mockResult.authority = {
          domainAuthority: Math.floor(Math.random() * 100) + 1,
          pageAuthority: Math.floor(Math.random() * 100) + 1,
          backlinks: Math.floor(Math.random() * 10000) + 100,
        };
        break;
      default:
        mockResult.message = 'Tool executed successfully with mock data.';
    }

    return mockResult;
  };

  const handleRun = async () => {
    // Validate required fields
    const missingFields = tool.inputs.filter((input) => {
      const value = values[input.key];
      return !value || value.trim() === '';
    });

    if (missingFields.length > 0) {
      setError(`Please fill in all fields: ${missingFields.map((f) => f.label).join(', ')}`);
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      const mockResult = generateMockResult();
      setResult(mockResult);
    } catch (err) {
      setError('An error occurred while running the tool. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {tool.inputs.map((input) => (
          <div key={input.key} className="space-y-2">
            <label
              htmlFor={input.key}
              className="block text-sm font-medium text-gray-700"
            >
              {input.label}
            </label>
            {input.type === 'textarea' ? (
              <Textarea
                id={input.key}
                placeholder={input.placeholder || `Enter ${input.label.toLowerCase()}`}
                value={values[input.key] || ''}
                onChange={(e) => handleChange(input.key, e.target.value)}
                rows={4}
              />
            ) : input.type === 'select' ? (
              <select
                id={input.key}
                value={values[input.key] || ''}
                onChange={(e) => handleChange(input.key, e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="">Select an option...</option>
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
                placeholder={input.placeholder || `Enter ${input.label.toLowerCase()}`}
                value={values[input.key] || ''}
                onChange={(e) => handleChange(input.key, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <Button
        onClick={handleRun}
        disabled={isLoading}
        className="w-full sm:w-auto"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Running...
          </>
        ) : (
          'Run Tool'
        )}
      </Button>

      {result && <ResultPanel result={result} />}
    </div>
  );
}