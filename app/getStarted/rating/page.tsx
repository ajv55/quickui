'use client';

import React from 'react';
import Rating from '../../components/rating';
import { FaStar, FaHeart, FaCircle } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const RatingShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const ratingExamples = [
    {
      type: 'Star Rating',
      render: <Rating maxRating={5} initialRating={3} icon={<FaStar />} color="text-yellow-500" />,
      code: `<Rating maxRating={5} initialRating={3} icon={<FaStar />} color="text-yellow-500" />`,
    },
    {
      type: 'Heart Rating',
      render: <Rating maxRating={5} initialRating={4} icon={<FaHeart />} color="text-red-500" />,
      code: `<Rating maxRating={5} initialRating={4} icon={<FaHeart />} color="text-red-500" />`,
    },
    {
      type: 'Circle Rating',
      render: <Rating maxRating={5} initialRating={2} icon={<FaCircle />} color="text-blue-500" />,
      code: `<Rating maxRating={5} initialRating={2} icon={<FaCircle />} color="text-blue-500" />`,
    },
    {
      type: 'Custom Colors Rating',
      render: <Rating maxRating={7} initialRating={5} icon={<FaStar />} color="text-green-500" />,
      code: `<Rating maxRating={7} initialRating={5} icon={<FaStar />} color="text-green-500" />`,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="lg:text-6xl text-4xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        Rating Component Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">Rating</code> component allows users to rate items using icons like stars, hearts, or circles. Below are examples demonstrating various styles and configurations.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {ratingExamples.map((example, index) => (
          <div key={index} className="relative mb-8">
            <h3 className="text-2xl font-semibold text-primary-dark mb-2">{example.type}</h3>
            <div className="flex items-center mb-4 p-2 rounded bg-gray-200">
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
              <CopyToClipboard
                text={example.code}
                onCopy={() => setCopiedIndex(index)}
              >
                <button
                  className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light hover:text-primary-dark"
                >
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

export default RatingShowcase;

