import { Metadata } from "next";
import { BookOpen, MessageSquare, FileText, Zap } from "lucide-react";
import { ResourceCard } from "@/components/resources/ResourceCard";

export const metadata: Metadata = {
  title: "Resources Hub - SEO Workflows",
  description: "Access our comprehensive collection of SEO resources including glossary, blog posts, chatbots, and browser extensions.",
};

const resourceCategories = [
  {
    title: "Glossary",
    description: "Comprehensive definitions of SEO terminology and concepts to help you master the language of search engine optimization.",
    icon: BookOpen,
    href: "/resources/glossary",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Chatbots",
    description: "Curated list of AI-powered chatbots and conversational tools to enhance your SEO workflows and productivity.",
    icon: MessageSquare,
    href: "/resources/chatbots",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Blog",
    description: "In-depth articles, tutorials, and insights on the latest SEO trends, strategies, and best practices.",
    icon: FileText,
    href: "/resources/blog",
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Extensions",
    description: "Useful browser extensions and plugins that streamline your SEO tasks and improve efficiency.",
    icon: Zap,
    href: "/resources/extensions",
    color: "bg-amber-100 text-amber-700",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Resources Hub
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Explore our curated collection of SEO resources designed to help you succeed in your optimization journey.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {resourceCategories.map((category) => (
            <ResourceCard
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
              href={category.href}
              color={category.color}
            />
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600">
              Our resources are regularly updated to reflect the latest changes in search engine algorithms and SEO best practices. Bookmark this page and check back often for new content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}