import { Skeleton } from '@/components/ui/Skeleton';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface ResultPanelProps {
  result: any;
  isLoading: boolean;
  error?: string | null;
  onClear?: () => void;
}

export function ResultPanel({ result, isLoading, error, onClear }: ResultPanelProps) {
  if (isLoading) {
    return (
      <Card className="p-6">
        <div className="space-y-4">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <div className="pt-4 border-t">
            <Skeleton className="h-20 w-full" />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6 border-destructive/50 bg-destructive/10">
        <div className="flex items-start gap-3">
          <div className="text-destructive">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-destructive">Error</h3>
            <p className="text-sm text-destructive/80 mt-1">{error}</p>
          </div>
          {onClear && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClear}
            >
              Dismiss
            </Button>
          )}
        </div>
      </Card>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Results</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Tool execution completed successfully
          </p>
        </div>
        {onClear && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClear}
          >
            Clear
          </Button>
        )}
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 overflow-auto max-h-96">
        <pre className="text-sm font-mono whitespace-pre-wrap break-words">
          {JSON.stringify(result, null, 2)}
        </pre>
      </div>
    </Card>
  );
}