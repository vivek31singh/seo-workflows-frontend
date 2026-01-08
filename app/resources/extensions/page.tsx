import resources from '@/data/resources.json';
import { ResourceCard } from '@/components/resources/ResourceCard';

export default function ExtensionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Extensions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.extensions.map((extension, index) => (
          <ResourceCard
            key={index}
            name={extension.name}
            description={extension.description}
            link={extension.link}
          />
        ))}
      </div>
    </div>
  );
}
