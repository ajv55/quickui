'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Dropdown from '../../components/dropdown'; // Adjust the path as needed
import { FaCode, FaCopy } from 'react-icons/fa';

const DropdownShowcase: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const dropdownExamples = [
    {
      type: 'Fade Animation',
      render: (
        <Dropdown
          label="Fade Animation"
          className='bg-primary-light'
          options={['Option 1', 'Option 2', 'Option 3']}
          onSelect={(option) => setSelectedOption(option)}
          animationType="fade"
        />
      ),
      code: `<Dropdown
  label="Fade Animation"
  options={['Option 1', 'Option 2', 'Option 3']}
  onSelect={(option) => setSelectedOption(option)}
  animationType="fade"
/>`,
    },
    {
      type: 'Scale Animation',
      render: (
        <Dropdown
          label="Scale Animation"
          itemClassName='hover:bg-blue-300'
          className='bg-gradient-to-br from-primary-light to-secondary-light rounded-md'
          options={['Option 1', 'Option 2', 'Option 3']}
          onSelect={(option) => setSelectedOption(option)}
          animationType="scale"
        />
      ),
      code: `<Dropdown
    label="Scale Animation"
    itemClassName='hover:bg-blue-300'
    className='bg-gradient-to-br from-primary-light to-secondary-light rounded-md'
    options={['Option 1', 'Option 2', 'Option 3']}
    onSelect={(option) => setSelectedOption(option)}
    animationType="scale"
/>`,
    },
    {
      type: 'Slide Animation',
      render: (
        <Dropdown
          label="Slide Animation"
          className='bg-accent-light rounded-md'
          buttonClassName='text-background-dark'
          itemClassName='hover:bg-red-300'
          options={['Option 1', 'Option 2', 'Option 3']}
          onSelect={(option) => setSelectedOption(option)}
          animationType="slide"
        />
      ),
      code: `<Dropdown
    label="Slide Animation"
    className='bg-accent-light rounded-md'
    buttonClassName='text-background-dark'
    itemClassName='hover:bg-red-300'
    options={['Option 1', 'Option 2', 'Option 3']}
    onSelect={(option) => setSelectedOption(option)}
    animationType="slide"
/>`,
    },
    {
      type: 'Custom Styled Dropdown',
      render: (
        <Dropdown
          label="Custom Styled"
          options={['Custom 1', 'Custom 2', 'Custom 3']}
          onSelect={(option) => setSelectedOption(option)}
          animationType="fade"
          className="w-64"
          buttonClassName="bg-purple-600 text-white"
          listClassName="bg-purple-50"
          itemClassName="hover:bg-purple-200"
        />
      ),
      code: `<Dropdown
    label="Custom Styled"
    options={['Custom 1', 'Custom 2', 'Custom 3']}
    onSelect={(option) => setSelectedOption(option)}
    animationType="fade"
    className="w-64"
    buttonClassName="bg-purple-600 text-white"
    listClassName="bg-purple-50"
    itemClassName="hover:bg-purple-200"
/>`,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        Dropdown Component Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">Dropdown</code> component is a versatile and customizable component that can be used to create dropdown menus with smooth animations and various styles. Below are examples demonstrating different configurations, including fade, scale, and slide animations.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {dropdownExamples.map((example, index) => (
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
                className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition "
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

export default DropdownShowcase;
