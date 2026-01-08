import { Metadata } from "next";
import { BookOpen, Search } from "lucide-react";
import resources from "@/data/resources.json";

export const metadata: Metadata = {
  title: "SEO Glossary - Resources Hub",
  description: "Comprehensive definitions of SEO terms, concepts, and terminology to help you understand search engine optimization.",
};

export default function GlossaryPage() {
  const glossary = resources.glossary;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <BookOpen className="mr-2 h-4 w-4" />
              SEO Knowledge Base
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              SEO Glossary
            </h1>
            <p className="text-lg text-muted-foreground">
              Master the language of search engine optimization with our comprehensive
              glossary of terms and definitions.
            </p>
          </div>
        </div>
      </section>

      {/* Glossary Content */}
      <main className="container flex-1 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {glossary.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
              <Search className="mb-4 h-12 w-12 text-muted-foreground/50" />
              <h3 className="mb-2 text-lg font-semibold">No glossary terms yet</h3>
              <p className="text-sm text-muted-foreground">
                Check back soon for comprehensive SEO definitions.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {glossary.map((item, index) => (
                <article
                  key={index}
                  className="group rounded-lg border bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <dt className="mb-2 flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                      {item.term[0].toUpperCase()}
                    </span>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {item.term}
                    </h3>
                  </dt>
                  <dd className="ml-11 text-muted-foreground leading-relaxed">
                    {item.definition}
                  </dd>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
