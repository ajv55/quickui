'use client';

import React, { useState } from 'react';
import Indicators from '../../components/indictor';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCode, FaClipboard, FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const IndicatorsShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const examples = [
    {
      type: 'Progress Bar',
      render: (
        <div className="relative">
          <Indicators   type="progress-bar" progressValue={60} />
          <span className="absolute inset-0 -top-4 flex justify-center items-center text-white font-bold">
            60%
          </span>
        </div>
      ),
      code: `<div className="relative">
    <Indicators   type="progress-bar" progressValue={60} />
    <span className="absolute inset-0 -top-4 flex justify-center items-center text-white font-bold">
    60%
    </span>
</div>`,
    },
    {
      type: 'Circular Progress',
      render: <Indicators type="circular-progress" progressValue={75} size={120} strokeWidth={10} />,
      code: `<Indicators type="circular-progress" progressValue={75} size={120} strokeWidth={10} />`,
    },
    {
      type: 'Step Indicator',
      render: (
        <Indicators
          type="step-indicator"
          steps={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
          currentStep={2}
        />
      ),
      code: `<Indicators
  type="step-indicator"
  steps={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
  currentStep={2}
/>`,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        Indicators Component Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">Indicators</code> component is a versatile and reusable component designed to display different types of indicators. Below are examples of how to use the component with various configurations.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {examples.map((example, index) => (
          <div key={index} className="relative mb-8">
            <h3 className="text-xl font-semibold text-secondary-light mb-4">{example.type}</h3>
            <div className="mb-4">
              {example.render}
            </div>
            <div className="relative">
              <CopyToClipboard
                text={example.code}
                onCopy={() => handleCopy(index)}
              >
                <button className="absolute right-0 top-0 mt-2 mr-2 flex items-center text-primary-dark hover:underline focus:outline-none">
                  {copiedIndex !== index && <FaCopy className="mr-2" />}
                  {copiedIndex === index ? 'Copied!' : ''}
                </button>
              </CopyToClipboard>
              <SyntaxHighlighter
                language="typescript"
                style={solarizedlight}
                showLineNumbers
                className="mt-4 rounded-md"
              >
                {example.code}
              </SyntaxHighlighter>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default IndicatorsShowcase;
