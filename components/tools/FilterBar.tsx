'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = ['All', 'Data Analysis', 'Relevance', 'Technical', 'Authority'];

export const FilterBar = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: FilterBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search
          className={cn(
            'absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors',
            isFocused ? 'text-primary-500' : 'text-gray-400'
          )}
          aria-hidden="true"
        />
        <input
          type="text"
          placeholder="Search tools by name or description..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full rounded-lg border border-gray-300 pl-10 pr-10 py-3 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all"
          aria-label="Search tools"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Category Chips */}
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter by category"
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                isSelected
                  ? 'bg-primary-600 text-white shadow-md hover:bg-primary-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
              aria-pressed={isSelected}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
