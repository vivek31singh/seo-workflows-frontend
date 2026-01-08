'use client';

import { useState, useMemo } from 'react';
import { FilterBar } from '@/components/tools/FilterBar';
import { ToolGrid } from '@/components/tools/ToolGrid';
import tools from '@/data/tools.json';
import { Tool } from '@/types';

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter tools based on search query and selected category
  const filteredTools = useMemo(() => {
    let result = tools as Tool[];

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter((tool) => tool.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.shortDescription.toLowerCase().includes(query) ||
          tool.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl mb-4">
              SEO Tools Directory
            </h1>
            <p className="text-xl text-gray-600">
              Explore our collection of free, browser-based SEO tools to optimize your
              website's performance, visibility, and ranking.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <div className="mb-8">
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredTools.length}</span>{' '}
            tool{filteredTools.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && (
              <span className="ml-2">
                in <span className="font-semibold text-gray-900">{selectedCategory}</span>
              </span>
            )}
            {searchQuery.trim() && (
              <span className="ml-2">
                matching <span className="font-semibold text-gray-900">"{searchQuery}"</span>
              </span>
            )}
          </p>
        </div>

        {/* Tool Grid */}
        <ToolGrid tools={filteredTools} />
      </section>
    </main>
  );
}
