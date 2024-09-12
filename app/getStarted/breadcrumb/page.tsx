'use client';

import React, { useState } from 'react';
import { FaHome, FaFolder, FaChevronRight, FaCopy } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Breadcrumb from '../../components/breadcrumb'; // Adjust the path as needed

const BreadcrumbShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000); // Reset the copied state after 2 seconds
  };

  const breadcrumbExamples = [
    {
      items: [
        { label: 'Home', href: '/', icon: '<FaHome />' },
        { label: 'Projects', href: '/projects', icon: '<FaFolder />' },
        { label: 'Project X', href: '/projects/x' },
        { label: 'Details' }, // No href for the current page
      ],
      separator: '<FaChevronRight />',
      label: 'Default Breadcrumb',
    },
    {
      items: [
        { label: 'Home', href: '/', icon: '<FaHome />' },
        { label: 'Projects', href: '/projects' },
        { label: 'Project Y', href: '/projects/y' },
        { label: 'Details' },
      ],
      separator: '/',
      label: 'Breadcrumb with Slash Separator',
    },
    {
      items: [
        { label: 'Home', href: '/', icon: '<FaHome />' },
        { label: 'Library', href: '/library' },
        { label: 'Fiction', href: '/library/fiction' },
        { label: 'Bestsellers' },
      ],
      separator: '>',
      label: 'Breadcrumb with Custom Text Separator',
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark lg:p-8 p-4">
      <h1 className="lg:text-6xl text-4xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        Breadcrumb Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">Breadcrumb</code> component is a navigation aid that helps users understand their current location within the site’s hierarchy. Below are examples demonstrating different breadcrumb configurations.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {breadcrumbExamples.map((example, index) => (
          <div key={index} className="relative mb-8">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <Breadcrumb
                className='text-sm lg:text-lg'
                  items={example.items.map(item => ({
                    ...item,
                    icon: item.icon === '<FaHome />' ? <FaHome /> : item.icon === '<FaFolder />' ? <FaFolder /> : null,
                  }))}
                  separator={example.separator === '<FaChevronRight />' ? <FaChevronRight /> : example.separator}
                />
              </div>
            </div>
            <div className="relative">
              <SyntaxHighlighter
                language="tsx"
                style={solarizedlight}
                customStyle={{ padding: '1rem', borderRadius: '0.5rem', position: 'relative' }}
              >
                {`<Breadcrumb items={[
  { label: 'Home', href: '/', icon: <FaHome /> },
  { label: 'Projects', href: '/projects', icon: <FaFolder /> },
  { label: 'Project X', href: '/projects/x' },
  { label: 'Details' }
]} separator={${example.separator}} />`}
              </SyntaxHighlighter>
              <CopyToClipboard
                text={`<Breadcrumb items={[
  { label: 'Home', href: '/', icon: <FaHome /> },
  { label: 'Projects', href: '/projects', icon: <FaFolder /> },
  { label: 'Project X', href: '/projects/x' },
  { label: 'Details' }
]} separator={${example.separator}} />`}
                onCopy={() => handleCopy(index)}
              >
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                  {copiedIndex === index ? (
                    <span className="text-green-500">Copied!</span>
                  ) : (
                    <FaCopy className="text-primary-light" />
                  )}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BreadcrumbShowcase;

