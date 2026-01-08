import { Metadata } from "next";
import { Search } from "lucide-react";
import { ToolCard } from "@/components/tools/ToolCard";
import tools from "@/data/tools.";

export const metadata: Metadata = {
  title: "SEO Tools Directory",
  description: "Browse our comprehensive collection of free SEO tools. Filter by category including Data Analysis, Relevance, Technical SEO, and Authority to find the perfect tool for your needs.",
  openGraph: {
    title: "SEO Tools Directory | SEO Workflows",
    description: "Browse our comprehensive collection of free SEO tools. Filter by category including Data Analysis, Relevance, Technical SEO, and Authority to find the perfect tool for your needs."
  }
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SEO Tools Directory</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our collection of free, interactive SEO tools designed to help you optimize your digital presence.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}