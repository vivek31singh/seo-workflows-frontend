import { Metadata } from "next";
import { BookOpen, Search } from "lucide-react";
import resources from "@/data/resources.json";

export const metadata: Metadata = {
  title: "SEO Glossary - Resources Hub",
  description: "Comprehensive SEO terminology and definitions to help you understand industry jargon and concepts.",
};

export default function GlossaryPage() {
  const glossaryTerms = resources.glossary;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="border-b bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">SEO Glossary</h1>
                <p className="text-gray-600">Industry terminology explained simply</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Search Notice */}
            <div className="mb-8 flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-200 p-4 text-sm text-blue-800">
              <Search className="h-4 w-4 flex-shrink-0" />
              <p>Use your browser's find function (Ctrl+F or Cmd+F) to quickly search for specific terms.</p>
            </div>

            {/* Glossary Terms Grid */}
            <div className="space-y-4">
              {glossaryTerms.map((item, index) => (
                <article
                  key={`${item.term}-${index}`}
                  className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {item.term}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                </article>
              ))}
            </div>

            {glossaryTerms.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-gray-600">No glossary terms available at this time.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
