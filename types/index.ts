export interface Tool {
  slug: string;
  name: string;
  category: "Data Analysis" | "Relevance" | "Technical" | "Authority";
  shortDescription: string;
  longDescription: string;
  inputs: Array<{
    key: string;
    label: string;
    type: "text" | "textarea" | "number" | "select";
    placeholder?: string;
    options?: string[];
  }>;
}

export interface Resources {
  glossary: Array<{ term: string; definition: string }>;
  chatbots: Array<{ title: string; description: string }>;
  blog: Array<{ slug: string; title: string; excerpt: string }>;
  extensions: Array<{ name: string; description: string; link: string }>;
}
