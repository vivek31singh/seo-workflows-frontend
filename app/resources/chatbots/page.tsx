import { Metadata } from "next";
import { MessageSquare, Bot, ExternalLink } from "lucide-react";
import resources from "@/data/resources.json";

export const metadata: Metadata = {
  title: "AI Chatbots - Resources Hub",
  description: "AI-powered chatbots and conversational tools to assist with your SEO workflows and research.",
};

export default function ChatbotsPage() {
  const chatbots = resources.chatbots;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Bot className="mr-2 h-4 w-4" />
              AI Assistants
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              SEO Chatbots & AI Tools
            </h1>
            <p className="text-lg text-muted-foreground">
              Leverage artificial intelligence to accelerate your SEO research,
              content creation, and analysis workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Chatbots Grid */}
      <main className="container flex-1 px-4 py-12">
        {chatbots.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
            <MessageSquare className="mb-4 h-12 w-12 text-muted-foreground/50" />
            <h3 className="mb-2 text-lg font-semibold">No chatbots listed yet</h3>
            <p className="text-sm text-muted-foreground">
              Check back soon for AI-powered SEO chatbots and assistants.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {chatbots.map((chatbot, index) => (
              <article
                key={index}
                className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Bot className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                    {chatbot.title}
                  </h3>
                  <p className="flex-1 text-muted-foreground leading-relaxed">
                    {chatbot.description}
                  </p>
                </div>
                {chatbot.link && (
                  <div className="border-t bg-muted/30 px-6 py-4">
                    <a
                      href={chatbot.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Try Chatbot
                      <ExternalLink className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
