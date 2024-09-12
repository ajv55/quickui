'use client';

import React, { useState } from 'react';
import { FaImage, FaCopy } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Carousel from '../../components/carousel'; // Adjust the path as needed
import clsx from 'clsx';

const CarouselShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000); // Reset the copied state after 2 seconds
  };

  const carouselExamples = [
    {
      items: [
        <div key="1" className="w-full h-full bg-red-500 flex items-center justify-center">
          <FaImage className="text-white text-6xl" />
        </div>,
        <div key="2" className="w-full h-full bg-green-500 flex items-center justify-center">
          <FaImage className="text-white text-6xl" />
        </div>,
        <div key="3" className="w-full h-full bg-blue-500 flex items-center justify-center">
          <FaImage className="text-white text-6xl" />
        </div>,
      ],
      autoPlay: false,
      interval: 3000,
      showControls: true,
      label: 'Default Carousel',
    },
    {
      items: [
        <div key="4" className="w-full h-full bg-purple-500 flex items-center justify-center">
          <FaImage className="text-white text-6xl" />
        </div>,
        <div key="5" className="w-full h-full bg-yellow-500 flex items-center justify-center">
          <FaImage className="text-white text-6xl" />
        </div>,
        <div key="6" className="w-full h-full bg-teal-500 flex items-center justify-center">
          <FaImage className="text-white text-6xl" />
        </div>,
      ],
      autoPlay: true,
      interval: 2000,
      showControls: true,
      label: 'AutoPlay Carousel',
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="lg:text-6xl text-4xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        Carousel Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">Carousel</code> component is a versatile tool for displaying a series of items in a rotating fashion. Below are examples demonstrating different carousel configurations.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {carouselExamples.map((example, index) => (
          <div key={index} className="relative mb-8">
            <div className="mb-4">
              <Carousel
                items={example.items}
                autoPlay={example.autoPlay}
                interval={example.interval}
                showControls={example.showControls}
                className="h-64 max-w-4xl mx-auto bg-gray-200"
              />
            </div>
            <div className="relative">
              <SyntaxHighlighter
                language="tsx"
                style={solarizedlight}
                customStyle={{ padding: '1rem', borderRadius: '0.5rem', position: 'relative' }}
              >
                {`<Carousel 
  items={[
    <div key="1" className="w-full h-full bg-red-500 flex items-center justify-center">
      <FaImage className="text-white text-6xl" />
    </div>,
    <div key="2" className="w-full h-full bg-green-500 flex items-center justify-center">
      <FaImage className="text-white text-6xl" />
    </div>,
    <div key="3" className="w-full h-full bg-blue-500 flex items-center justify-center">
      <FaImage className="text-white text-6xl" />
    </div>,
  ]}
  autoPlay={${example.autoPlay}}
  interval={${example.interval}}
  showControls={${example.showControls}}
  className="h-64 bg-gray-200"
/>`}
              </SyntaxHighlighter>
              <CopyToClipboard
                text={`<Carousel 
  items={[
    <div key="1" className="w-full h-full bg-red-500 flex items-center justify-center">
      <FaImage className="text-white text-6xl" />
    </div>,
    <div key="2" className="w-full h-full bg-green-500 flex items-center justify-center">
      <FaImage className="text-white text-6xl" />
    </div>,
    <div key="3" className="w-full h-full bg-blue-500 flex items-center justify-center">
      <FaImage className="text-white text-6xl" />
    </div>,
  ]}
  autoPlay={${example.autoPlay}}
  interval={${example.interval}}
  showControls={${example.showControls}}
  className="h-64 bg-gray-200"
/>`}
                onCopy={() => handleCopy(index)}
              >
                <button
                  className={clsx(
                    'absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition',
                    copiedIndex === index ? 'bg-primary-dark text-secondary-light' : 'bg-secondary-light'
                  )}
                >
                  {copiedIndex === index ? 'Copied!' : <FaCopy />}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CarouselShowcase;
