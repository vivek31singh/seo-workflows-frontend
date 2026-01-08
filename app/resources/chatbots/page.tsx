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
      <section className="border-b bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">AI Chatbots</h1>
                <p className="text-gray-600">Conversational AI tools for SEO workflows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Intro */}
            <div className="mb-8 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI-Powered SEO Assistance</h3>
                  <p className="text-sm text-gray-600">
                    Explore our collection of AI chatbots designed to help with keyword research, content optimization, technical SEO audits, and more. Each bot is specialized for specific SEO tasks.
                  </p>
                </div>
              </div>
            </div>

            {/* Chatbots List */}
            <div className="grid gap-4">
              {chatbots.map((chatbot, index) => (
                <article
                  key={`${chatbot.title}-${index}`}
                  className="flex items-start gap-4 rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {chatbot.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{chatbot.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                      <ExternalLink className="h-4 w-4" />
                      Try Now
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {chatbots.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-gray-600">No chatbots available at this time.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
