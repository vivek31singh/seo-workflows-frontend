import { notFound } from 'next/navigation';
import tools from '@/data/tools.json';
import { Tool } from '@/types';
import ToolForm from '@/components/tools/ToolForm';

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Tool Header */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {tool.category}
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            {tool.name}
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            {tool.longDescription}
          </p>
        </div>

        {/* Dynamic Tool Form */}
        <ToolForm inputs={tool.inputs} toolName={tool.name} />
      </div>
    </div>
  );
}

// Generate static params for all tools to ensure static generation where possible
export async function generateStaticParams() {
  return tools.map((tool: Tool) => ({
    slug: tool.slug,
  }));
}
