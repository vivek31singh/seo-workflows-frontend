'use client';

import { Button } from '@/components/ui/Button';
import { CheckCircle2, Copy, Download } from 'lucide-react';
import { useState } from 'react';

interface ResultPanelProps {
  result: Record<string, unknown>;
}

export function ResultPanel({ result }: ResultPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const jsonString = JSON.stringify(result, null, 2);
    await navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const jsonString = JSON.stringify(result, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tool-result-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-8 rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <h3 className="text-sm font-semibold text-gray-900">Results</h3>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="text-gray-600 hover:text-gray-900"
          >
            {copied ? (
              <>
                <CheckCircle2 className="mr-1.5 h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="mr-1.5 h-4 w-4" />
                Copy
              </>
            )}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDownload}
            className="text-gray-600 hover:text-gray-900"
          >
            <Download className="mr-1.5 h-4 w-4" />
            Download JSON
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto p-4">
        <pre className="text-sm">
          <code className="language-json">
            {JSON.stringify(result, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  );
}