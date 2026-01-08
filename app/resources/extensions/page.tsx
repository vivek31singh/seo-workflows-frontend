import resources from "@/data/resources.json";
import { ResourceCard } from "@/components/resources/ResourceCard";

export default function ExtensionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">SEO Extensions</h1>
          <p className="text-lg text-gray-600">
            Useful browser extensions to help with your SEO workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.extensions.map((extension, index) => (
            <ResourceCard
              key={index}
              title={extension.name}
              description={extension.description}
              link={extension.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
