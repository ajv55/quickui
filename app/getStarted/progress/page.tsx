'use client';

import React from 'react';
import ProgressBar from '../../components/progress';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ProgressBarShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        ProgressBar Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">ProgressBar</code> component displays progress with optional styling effects such as animation. Below are examples demonstrating various styles and configurations.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      {/* Example 1: Default Progress Bar */}
      <div className="relative mb-8">
        <h3 className="text-2xl font-semibold text-primary-dark mb-2">Default Progress Bar</h3>
        <ProgressBar progress={50} />
        <div className="relative">
          <SyntaxHighlighter
            language="tsx"
            style={solarizedlight}
            customStyle={{ padding: '1rem', borderRadius: '0.5rem', position: 'relative' }}
          >
            {`<ProgressBar progress={50} />`}
          </SyntaxHighlighter>
          <CopyToClipboard text={`<ProgressBar progress={50} />`} onCopy={() => handleCopy(1)}>
            <button className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light hover:text-primary-dark">
              <FaCopy />
              {copiedIndex === 1 && <span className="ml-2 text-green-600">Copied!</span>}
            </button>
          </CopyToClipboard>
        </div>
      </div>

      {/* Example 2: Success Progress Bar (Animated) */}
      <div className="relative mb-8">
        <h3 className="text-2xl font-semibold text-primary-dark mb-2">Success Progress Bar (Animated)</h3>
        <ProgressBar progress={75} color="success" animated />
        <div className="relative">
          <SyntaxHighlighter
            language="tsx"
            style={solarizedlight}
            customStyle={{ padding: '1rem', borderRadius: '0.5rem', position: 'relative' }}
          >
            {`<ProgressBar progress={75} color="success" animated />`}
          </SyntaxHighlighter>
          <CopyToClipboard text={`<ProgressBar progress={75} color="success" animated />`} onCopy={() => handleCopy(2)}>
            <button className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light hover:text-primary-dark">
              <FaCopy />
              {copiedIndex === 2 && <span className="ml-2 text-green-600">Copied!</span>}
            </button>
          </CopyToClipboard>
        </div>
      </div>

      {/* Example 3: Warning Progress Bar (Striped) */}
      <div className="relative mb-8">
        <h3 className="text-2xl font-semibold text-primary-dark mb-2">Warning Progress Bar (Striped)</h3>
        <ProgressBar progress={30} color="warning" />
        <div className="relative">
          <SyntaxHighlighter
            language="tsx"
            style={solarizedlight}
            customStyle={{ padding: '1rem', borderRadius: '0.5rem', position: 'relative' }}
          >
            {`<ProgressBar progress={30} color="warning" />`}
          </SyntaxHighlighter>
          <CopyToClipboard text={`<ProgressBar progress={30} color="warning" />`} onCopy={() => handleCopy(3)}>
            <button className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light hover:text-primary-dark">
              <FaCopy />
              {copiedIndex === 3 && <span className="ml-2 text-green-600">Copied!</span>}
            </button>
          </CopyToClipboard>
        </div>
      </div>

      {/* Example 4: Danger Progress Bar (Large) */}
      <div className="relative mb-8">
        <h3 className="text-2xl font-semibold text-primary-dark mb-2">Danger Progress Bar (Large)</h3>
        <ProgressBar progress={90} color="danger" size="large" />
        <div className="relative">
          <SyntaxHighlighter
            language="tsx"
            style={solarizedlight}
            customStyle={{ padding: '1rem', borderRadius: '0.5rem', position: 'relative' }}
          >
            {`<ProgressBar progress={90} color="danger" size="large" />`}
          </SyntaxHighlighter>
          <CopyToClipboard text={`<ProgressBar progress={90} color="danger" size="large" />`} onCopy={() => handleCopy(4)}>
            <button className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light hover:text-primary-dark">
              <FaCopy />
              {copiedIndex === 4 && <span className="ml-2 text-green-600">Copied!</span>}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarShowcase;
