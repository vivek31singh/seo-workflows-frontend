import { Metadata } from "next";
import { Search } from "lucide-react";
import { ToolCard } from "@/components/tools/ToolCard";
import tools from "@/data/tools.json";

export const metadata: Metadata = {
  title: "SEO Tools Directory",
  description: "Browse our comprehensive collection of free SEO tools. Filter by category including Data Analysis, Relevance, Technical SEO, and Authority to find the perfect tool for your needs.",
  openGraph: {
    title: "SEO Tools Directory | SEO Workflows",
    description: "Browse our comprehensive collection of free SEO tools. Filter by category including Data Analysis, Relevance, Technical SEO, and Authority to find the perfect tool for your needs.",
  },
};

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">SEO Tools Directory</h1>
        <p className="text-lg text-muted-foreground">
          Browse our comprehensive collection of free SEO tools. Filter by category including Data Analysis, Relevance, Technical SEO, and Authority.
        </p>
      </div>

      <div className="mb-8 flex items-center gap-4 rounded-lg border bg-card p-4">
        <Search className="h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search tools..."
          className="flex-1 bg-transparent outline-none"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}