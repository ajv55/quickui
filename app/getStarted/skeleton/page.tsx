'use client';

import React from 'react';
import Skeleton from '../../components/skeleton'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SkeletonShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const skeletonExamples = [
    {
      type: 'Text Skeleton',
      render: <Skeleton variant="text" width="80%" height="1.5rem" />,
      code: `
import Skeleton from '../../components/skeleton'; 

const TextSkeleton: React.FC = () => (
  <Skeleton variant="text" width="80%" height="1.5rem" />
);

export default TextSkeleton;
      `,
    },
    {
      type: 'Card Skeleton',
      render: <Skeleton variant="card" width="100%" height="200px" />,
      code: `
import Skeleton from '../../components/skeleton'; 

const CardSkeleton: React.FC = () => (
  <Skeleton variant="card" width="100%" height="200px" />
);

export default CardSkeleton;
      `,
    },
    {
      type: 'Image Skeleton',
      render: <Skeleton  variant="image" width="50%" height="300px" />,
      code: `
import Skeleton from '../../components/skeleton'; 

const ImageSkeleton: React.FC = () => (
  <Skeleton variant="image" width="100%" height="150px" />
);

export default ImageSkeleton;
      `,
    },
    {
      type: 'Spinner Skeleton',
      render: <Skeleton variant="spinner" color="#FF5733" width="60px" height="60px" />,
      code: `
import Skeleton from '../../components/skeleton'; 

const SpinnerSkeleton: React.FC = () => (
  <Skeleton variant="spinner" color="#FF5733" width="60px" height="60px" />
);

export default SpinnerSkeleton;
      `,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">Skeleton Component Showcase</h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg mb-4">
          The <code className="text-primary-dark">Skeleton</code> component provides placeholder content while the actual content is loading. Below are examples showcasing different skeleton types, including customizable options.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-dark">Usage Examples</h2>
      </section>

      <section>
        {skeletonExamples.map((example, index) => (
          <div key={index} className="relative mb-8">
            <h3 className="text-2xl font-semibold mb-2">{example.type}</h3>
            <div className="flex mb-4 items-center justify-center">
              {example.render}
            </div>
            <div className="relative">
              <SyntaxHighlighter
                language="tsx"
                style={solarizedlight}
                customStyle={{ padding: '1rem', borderRadius: '0.5rem' }}
              >
                {example.code}
              </SyntaxHighlighter>
              <CopyToClipboard text={example.code} onCopy={() => handleCopy(index)}>
                <button className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light hover:text-primary-dark">
                  <FaCopy />
                  {copiedIndex === index && <span className="ml-2 text-green-600">Copied!</span>}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SkeletonShowcase;
