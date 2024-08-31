'use client';

import React from 'react';
import Popover from '../../components/popover'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from 'react-icons/fa';

const PopoverShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleCopy = (index: number) => {
    navigator.clipboard.writeText(popoverExamples[index].code);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const popoverExamples = [
    {
      type: 'Default Popover (Click)',
      render: (
        <Popover
          trigger={<button className="px-4 py-2 bg-blue-600 text-white rounded">Default Popover (Click)</button>}
          content={<div>Default Popover Content</div>}
          variant="default"
        />
      ),
      code: `<Popover
  trigger={<button className="px-4 py-2 bg-blue-600 text-white rounded">Default Popover (Click)</button>}
  content={<div>Default Popover Content</div>}
  variant="default"
/>`,
    },
    {
      type: 'Dark Popover (Hover)',
      render: (
        <Popover
          trigger={<button className="px-4 py-2 bg-gray-800 text-white rounded">Dark Popover (Hover)</button>}
          content={<div>Dark Popover Content</div>}
          variant="dark"
          triggerOnHover={true}
        />
      ),
      code: `<Popover
  trigger={<button className="px-4 py-2 bg-gray-800 text-white rounded">Dark Popover (Hover)</button>}
  content={<div>Dark Popover Content</div>}
  variant="dark"
  triggerOnHover={true}
/>`,
    },
    {
      type: 'Light Popover (Click & Hover)',
      render: (
        <Popover
          trigger={<button className="px-4 py-2 bg-gray-100 text-gray-800 rounded">Light Popover (Click & Hover)</button>}
          content={<div>Light Popover Content</div>}
          variant="light"
          triggerOnHover={true}
        />
      ),
      code: `<Popover
  trigger={<button className="px-4 py-2 bg-gray-100 text-gray-800 rounded">Light Popover (Click & Hover)</button>}
  content={<div>Light Popover Content</div>}
  variant="light"
  triggerOnHover={true}
/>`,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        Popover Component Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">Popover</code> component allows for versatile popover positioning and styling. Below are examples demonstrating different styles such as default, dark, and light, with both click and hover triggers.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {popoverExamples.map((example, index) => (
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
                className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light hover:text-primary-dark"
              >
                <FaCopy />
                {copiedIndex === index && <span className="ml-2 text-green-600">Copied!</span>}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PopoverShowcase;
