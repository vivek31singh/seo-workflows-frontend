import { Metadata } from "next";
import { BookOpen, MessageSquare, FileText, Zap } from "lucide-react";
import { ResourceCard } from "@/components/resources/ResourceCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources Hub - SEO Workflows",
  description: "Access our comprehensive collection of SEO resources including glossary, blog posts, chatbots, and browser extensions.",
};

const resourceCategories = [
  {
    title: "Glossary",
    description: "Comprehensive SEO terminology and definitions to help you understand industry jargon and concepts.",
    icon: BookOpen,
    link: "/resources/glossary",
  },
  {
    title: "Blog",
    description: "In-depth articles, tutorials, and insights on SEO strategies, best practices, and industry trends.",
    icon: FileText,
    link: "/resources/blog",
  },
  {
    title: "Chatbots",
    description: "AI-powered chatbots and conversational tools to assist with your SEO workflows and research.",
    icon: MessageSquare,
    link: "/resources/chatbots",
  },
  {
    title: "Extensions",
    description: "Browser extensions and add-ons that streamline your SEO tasks and improve productivity.",
    icon: Zap,
    link: "/resources/extensions",
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="border-b bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Resources Hub
            </h1>
            <p className="text-lg text-gray-600">
              Explore our curated collection of SEO resources designed to help you master search engine optimization and stay ahead of the competition.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {resourceCategories.map((category) => (
              <Link key={category.title} href={category.link} className="block">
                <ResourceCard
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  className="h-full"
                />
              </Link>
            ))}
          </div>

          {/* Additional Resources Section */}
          <section className="mt-16 rounded-lg bg-primary-50 p-8 text-center">
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              Looking for Interactive Tools?
            </h2>
            <p className="mb-6 text-gray-600">
              Check out our free SEO tools directory for hands-on analysis and optimization utilities.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Browse SEO Tools
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
