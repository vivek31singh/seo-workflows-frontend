import { notFound } from 'next/navigation';
import tools from '@/data/tools.json';
import { Tool } from '@/types';
import ToolForm from '@/components/tools/ToolForm';
import ErrorBoundary from '@/components/ErrorBoundary';

interface ToolPageProps {
  params: {
    slug: string;
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  // Find the tool matching the slug
  const tool = tools.find((t: Tool) => t.slug === params.slug);

  // If tool is not found, trigger 404
  if (!tool) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Wrap ToolForm with ErrorBoundary to catch runtime errors */}
      <ErrorBoundary>
        <ToolForm tool={tool} />
      </ErrorBoundary>
    </div>
  );
}
