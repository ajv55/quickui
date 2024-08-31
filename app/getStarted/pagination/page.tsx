'use client';

import React, { useState } from 'react';
import Pagination from '../../components/pagination'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from 'react-icons/fa';

const PaginationShowcase: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCopy = (index: number) => {
    navigator.clipboard.writeText(paginationExamples[index].code);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const paginationExamples = [
    {
      type: 'Default Pagination',
      render: (
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={handlePageChange}
          variant="default"
        />
      ),
      code: `<Pagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={handlePageChange}
  variant="default"
/>`,
    },
    {
      type: 'Outlined Pagination',
      render: (
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={handlePageChange}
          variant="outlined"
        />
      ),
      code: `<Pagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={handlePageChange}
  variant="outlined"
/>`,
    },
    {
      type: 'Minimal Pagination',
      render: (
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={handlePageChange}
          variant="minimal"
        />
      ),
      code: `<Pagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={handlePageChange}
  variant="minimal"
/>`,
    },
    {
      type: 'Round Pagination',
      render: (
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={handlePageChange}
          variant="round"
        />
      ),
      code: `<Pagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={handlePageChange}
  variant="round"
/>`,
    },
    {
      type: 'Primary Pagination',
      render: (
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={handlePageChange}
          variant="primary"
        />
      ),
      code: `<Pagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={handlePageChange}
  variant="primary"
/>`,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        Pagination Component Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">Pagination</code> component provides several styles for navigating through pages. Below are examples demonstrating different styles such as default, outlined, minimal, round, and primary.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {paginationExamples.map((example, index) => (
          <div key={index} className="relative mb-8">
            <h3 className="text-2xl font-semibold text-primary-dark mb-2">{example.type}</h3>
            <div className="flex items-center mb-4">
              {example.render}
            </div>
            <div className="relative">
              <SyntaxHighlighter
                language="tsx"
                style={solarizedlight}
                customStyle={{ padding: '1rem', borderRadius: '0.5rem', position: 'relative' }}
              >
                {example.code}
              </SyntaxHighlighter>
              <button
                onClick={() => handleCopy(index)}
                className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition"
              >
                {copiedIndex === index ? 'Copied!' : <FaCopy />}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PaginationShowcase;
