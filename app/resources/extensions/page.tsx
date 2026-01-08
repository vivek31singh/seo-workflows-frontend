import { Metadata } from "next";
import { Zap, ExternalLink, Download } from "lucide-react";
import resources from "@/data/resources.json";

export const metadata: Metadata = {
  title: "Browser Extensions - Resources Hub",
  description: "Browser extensions and add-ons that streamline your SEO tasks and improve productivity.",
};

export default function ExtensionsPage() {
  const extensions = resources.extensions;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="border-b bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Browser Extensions</h1>
                <p className="text-gray-600">Productivity tools for SEO professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Browser Support Notice */}
            <div className="mb-8 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <p>
                  Most extensions are available for Chrome, Firefox, Edge, and Safari. Visit the extension store for your browser to install.
                </p>
              </div>
            </div>

            {/* Extensions List */}
            <div className="grid gap-4">
              {extensions.map((ext, index) => (
                <article
                  key={`${ext.name}-${index}`}
                  className="flex items-start gap-4 rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {ext.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{ext.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href={ext.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Get Extension
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {extensions.length === 0 && (
              <div className="text-center py-12">
                <Zap className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-gray-600">No extensions available at this time.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
