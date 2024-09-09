'use client';
import React, { useState } from 'react';
import { FaCheck, FaCopy, FaExclamation, FaInfoCircle } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Badge from '../../components/badge'; // Adjust the path as needed

const BadgeShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000); // Reset the copied state after 2 seconds
  };

  const badgeExamples = [
    {
      variant: 'primary' as const,
      text: 'Primary Badge',
      icon: null,
    },
    {
      variant: 'success' as const,
      text: 'Success Badge',
      icon: <FaCheck />,
    },
    {
      variant: 'warning' as const,
      text: 'Warning Badge',
      icon: null,
    },
    {
      variant: 'error' as const,
      text: 'Error Badge',
      icon: <FaExclamation />,
    },
    {
      variant: 'info' as const,
      text: 'Info Badge',
      icon: <FaInfoCircle />,
    },
    {
      variant: 'light' as const,
      text: 'Light Badge',
      icon: null,
    },
    {
      variant: 'dark' as const,
      text: 'Dark Badge',
      icon: null,
    },
    {
      variant: 'outline' as const,
      text: 'Outline Badge',
      icon: null,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="lg:text-6xl text-4xl h-20 font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        Badge Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">Badge</code> component is a versatile and modern UI element used to display status, notifications, or other contextual information. It supports various styles and sizes to fit different use cases. Below you will find examples showcasing different badge variants along with their respective code snippets.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {badgeExamples.map((badge, index) => (
          <div key={badge.variant} className="relative mb-8">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <Badge variant={badge.variant} text={badge.text} icon={badge.icon} />
              </div>
            </div>
            <div className="relative">
              <SyntaxHighlighter language="html" style={solarizedlight} customStyle={{ padding: '1rem', borderRadius: '0.5rem' }}>
                {`<Badge variant="${badge.variant}" text="${badge.text}"  />`}
              </SyntaxHighlighter>
              <CopyToClipboard text={`<Badge variant="${badge.variant}" text="${badge.text}"  />`} onCopy={() => handleCopy(index)}>
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  aria-label="Copy to clipboard"
                >
                  {copiedIndex !== index && <FaCopy className='text-primary-light' />}
                  {copiedIndex === index && <span className="ml-2 text-sm text-green-500">Copied!</span>}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BadgeShowcase;
