'use client';

import { useState } from 'react';
import ResultPanel from './ResultPanel';
import { Loader2 } from 'lucide-react';

interface ToolInput {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'select';
  placeholder?: string;
  options?: string[];
}

interface ToolFormProps {
  inputs: ToolInput[];
  toolName: string;
}

export default function ToolForm({ inputs, toolName }: ToolFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleRun = async () => {
    setIsLoading(true);
    setResult(null);

    // Simulate asynchronous API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock result generation
    const mockResult = {
      status: 'success',
      tool: toolName,
      timestamp: new Date().toISOString(),
      inputs: formData,
      output: {
        score: Math.floor(Math.random() * 100),
        insights: `Analysis complete for inputs provided.`,
        recommendations: [
          'Improve meta description length.',
          'Add missing alt tags to images.',
          'Increase internal linking density.',
        ],
      },
    };

    setResult(mockResult);
    setIsLoading(false);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Configuration</h2>
      
      <form onSubmit={(e) => { e.preventDefault(); handleRun(); }} className="space-y-6">
        {inputs.map((input) => (
          <div key={input.key}>
            <label htmlFor={input.key} className="block text-sm font-medium text-gray-700">
              {input.label}
            </label>
            <div className="mt-1">
              {input.type === 'textarea' ? (
                <textarea
                  id={input.key}
                  rows={4}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                  placeholder={input.placeholder}
                  value={formData[input.key] || ''}
                  onChange={(e) => handleInputChange(input.key, e.target.value)}
                />
              ) : input.type === 'select' ? (
                <select
                  id={input.key}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                  value={formData[input.key] || ''}
                  onChange={(e) => handleInputChange(input.key, e.target.value)}
                >
                  <option value="">Select an option...</option>
                  {input.options?.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={input.type}
                  id={input.key}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                  placeholder={input.placeholder}
                  value={formData[input.key] || ''}
                  onChange={(e) => handleInputChange(input.key, e.target.value)}
                />
              )}
            </div>
          </div>
        ))}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                Running...
              </>
            ) : (
              'Run Analysis'
            )}
          </button>
        </div>
      </form>

      {/* Result Panel */}
      {isLoading || result ? (
        <div className="mt-8">
          <ResultPanel result={result} isLoading={isLoading} />
        </div>
      ) : null}
    </div>
  );
}
