'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Clipboard from '../../components/clipboard'; // Adjust the path as needed
import { FaCode } from 'react-icons/fa';

const ClipboardShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000); // Reset the copied state after 2 seconds
  };

  const clipboardExamples = [
    {
      text: 'Example text for clipboard',
      successMessage: 'Copied successfully!',
      errorMessage: 'Copy failed!',
      buttonClassName: 'bg-blue-500 hover:bg-blue-600',
      label: 'Basic Clipboard',
    },
    {
      text: 'Another example text',
      successMessage: 'Text copied!',
      errorMessage: 'Oops! Failed to copy.',
      buttonClassName: 'bg-green-500 hover:bg-green-600',
      label: 'Success Style',
    },
    {
      text: 'One more example text',
      successMessage: 'Successfully copied!',
      errorMessage: 'Copy action failed.',
      buttonClassName: 'bg-red-500 hover:bg-red-600',
      label: 'Error Style',
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        Clipboard Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">Clipboard</code> component allows users to copy text to the clipboard with different styles and feedback messages. Below are examples demonstrating various configurations.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {clipboardExamples.map((example, index) => (
          <div key={index} className="relative mb-8">
            <div className="flex items-center mb-4">
              <Clipboard
                text={example.text}
                successMessage={example.successMessage}
                errorMessage={example.errorMessage}
                buttonClassName={example.buttonClassName}
              />
            </div>
            <div className="relative">
              <SyntaxHighlighter
                language="tsx"
                style={solarizedlight}
                customStyle={{ padding: '1rem', borderRadius: '0.5rem', position: 'relative' }}
              >
                {`<Clipboard 
  text="${example.text}"
  successMessage="${example.successMessage}"
  errorMessage="${example.errorMessage}"
  buttonClassName="${example.buttonClassName}"
/>`}
              </SyntaxHighlighter>
              <button
                onClick={() => handleCopy(index)}
                className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-secondary-light transition bg-primary-dark hover:text-primary-light hover:bg-secondary-light"
              >
                {copiedIndex === index ? 'Copied!' : <FaCode />}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ClipboardShowcase;
