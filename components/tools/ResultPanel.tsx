import { CheckCircle, AlertCircle } from 'lucide-react';

interface ResultPanelProps {
  result: any;
  isLoading: boolean;
}

export default function ResultPanel({ result, isLoading }: ResultPanelProps) {
  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-32 bg-gray-200 rounded mb-2"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <div className="border-t border-gray-200 pt-6">
      <div className="flex items-center mb-4">
        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">Execution Results</h3>
      </div>

      {/* Mock formatted result display */}
      <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase">Status</span>
            <p className="text-sm font-medium text-gray-900">{result.status}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase">Timestamp</span>
            <p className="text-sm font-medium text-gray-900">{new Date(result.timestamp).toLocaleTimeString()}</p>
          </div>
        </div>

        {result.output && (
          <div className="space-y-3">
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase">Score</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${result.output.score}%` }}
                ></div>
              </div>
              <p className="text-right text-xs text-gray-500 mt-1">{result.output.score}/100</p>
            </div>

            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase">Insights</span>
              <p className="text-sm text-gray-700 mt-1">{result.output.insights}</p>
            </div>

            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase">Recommendations</span>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                {result.output.recommendations?.map((rec: string, idx: number) => (
                  <li key={idx}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Raw JSON Data Toggle (for mock demo purposes) */}
      <details className="mt-4">
        <summary className="cursor-pointer text-sm text-indigo-600 hover:text-indigo-800 font-medium">
          View Raw Response
        </summary>
        <pre className="mt-2 bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-xs">
          {JSON.stringify(result, null, 2)}
        </pre>
      </details>
    </div>
  );
}
