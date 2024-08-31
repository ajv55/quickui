'use client';

import React, { useState } from 'react';
import ListGroup from '../../components/listGroup'; // Adjust the path as needed
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from 'react-icons/fa';
import clsx from 'clsx';

const ListGroupShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const listGroupExamples = [
    {
      type: 'Vertical Layout with Fade Animation',
      render: (
        <ListGroup
          items={[
            { id: '1', content: 'Item 1', href: '#' },
            { id: '2', content: 'Item 2', href: '#' },
            { id: '3', content: 'Item 3' },
            { id: '4', content: 'Item 4', href: '#' },
          ]}
          layout="vertical"
          animation="fade"
        />
      ),
      code: `<ListGroup
  items={[
    { id: '1', content: 'Item 1', href: '#' },
    { id: '2', content: 'Item 2', href: '#' },
    { id: '3', content: 'Item 3' },
    { id: '4', content: 'Item 4', href: '#' },
  ]}
  layout="vertical"
  animation="fade"
/>`,
    },
    {
      type: 'Horizontal Layout with Slide Animation',
      render: (
        <ListGroup
          items={[
            { id: '1', content: 'Item 1', href: '#' },
            { id: '2', content: 'Item 2', href: '#' },
            { id: '3', content: 'Item 3' },
            { id: '4', content: 'Item 4', href: '#' },
          ]}
          layout="horizontal"
          animation="slide"
        />
      ),
      code: `<ListGroup
  items={[
    { id: '1', content: 'Item 1', href: '#' },
    { id: '2', content: 'Item 2', href: '#' },
    { id: '3', content: 'Item 3' },
    { id: '4', content: 'Item 4', href: '#' },
  ]}
  layout="horizontal"
  animation="slide"
/>`,
    },
    {
      type: 'Vertical Layout with Custom Styling',
      render: (
        <ListGroup
          items={[
            { id: '1', content: 'Custom Item 1' },
            { id: '2', content: 'Custom Item 2' },
            { id: '3', content: 'Custom Item 3' },
          ]}
          layout="vertical"
          animation="fade"
          className="border border-gray-300 rounded-lg shadow-lg"
        />
      ),
      code: `<ListGroup
  items={[
    { id: '1', content: 'Custom Item 1' },
    { id: '2', content: 'Custom Item 2' },
    { id: '3', content: 'Custom Item 3' },
  ]}
  layout="vertical"
  animation="fade"
  className="border border-gray-300 rounded-lg shadow-lg"
/>`,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        ListGroup Component Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">ListGroup</code> component is a versatile and customizable component designed to display lists with various layout options and animations. Below are examples demonstrating different configurations, including vertical and horizontal layouts with fade and slide animations.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {listGroupExamples.map((example, index) => (
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

export default ListGroupShowcase;
