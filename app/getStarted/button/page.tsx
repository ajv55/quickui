'use client';
import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CustomButton, AnimatedButton } from '../../components/button'; // Adjust the path as needed

const ButtonShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000); // Reset the copied state after 2 seconds
  };

  const buttonCode = `
import { CustomButton, AnimatedButton } from './CustomButton';

const ExamplePage = () => {
  return (
    <div className="p-8">
      <CustomButton variant="primary" size="medium">Primary Button</CustomButton>
      <CustomButton variant="secondary" size="large">Secondary Button</CustomButton>
      <AnimatedButton>Animated Button</AnimatedButton>
      <CustomButton variant="default" size="small">Default Small Button</CustomButton>
      <CustomButton variant="primary" size="large">Primary Large Button</CustomButton>
      <CustomButton variant="secondary" size="small">Secondary Small Button</CustomButton>
      <AnimatedButton className="bg-primary-light">Custom Animated Button</AnimatedButton>
    </div>
  );
};

export default ExamplePage;
`;

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="lg:text-5xl text-4xl font-bold text-primary-dark mb-6">
        <span className='bg-gradient-to-l from-primary-light to-secondary-light bg-clip-text text-transparent'>
          Button Component Showcase
        </span>
      </h1>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-text-dark mb-4">
          The <code className="text-primary-dark">CustomButton</code> component is a versatile button component that supports various styles and sizes. Below you will find examples of different button variants and sizes, including a special animated button.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Usage Examples</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-dark mb-4">Primary Button</h3>
          <div className="bg-background-light p-4 rounded-lg mb-4">
            <CustomButton variant='primary' size="medium">Primary Button</CustomButton>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-dark mb-4">Secondary Button</h3>
          <div className="bg-background-light p-4 rounded-lg mb-4">
            <CustomButton variant="secondary" size="large">Secondary Button</CustomButton>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-dark mb-4">Animated Button</h3>
          <div className="bg-background-light p-4 rounded-lg mb-4">
            <AnimatedButton className='bg-primary-dark'>Animated Button</AnimatedButton>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-dark mb-4">Default Small Button</h3>
          <div className="bg-background-light p-4 rounded-lg mb-4">
            <CustomButton variant="default" size="small">Default Small Button</CustomButton>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-dark mb-4">Primary Large Button</h3>
          <div className="bg-background-light p-4 rounded-lg mb-4">
            <CustomButton variant="primary" size="large">Primary Large Button</CustomButton>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-dark mb-4">Secondary Small Button</h3>
          <div className="bg-background-light p-4 rounded-lg mb-4">
            <CustomButton variant="secondary" size="small">Secondary Small Button</CustomButton>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-dark mb-4">Custom Animated Button</h3>
          <div className="bg-background-light p-4 rounded-lg mb-4">
            <AnimatedButton className="bg-primary-light">Custom Animated Button</AnimatedButton>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Code Snippet</h2>
        <div className="relative mb-4">
          <CopyToClipboard text={buttonCode} onCopy={() => handleCopy(0)}>
            <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
              <FaCopy />
              {copiedIndex === 0 && <span className="ml-2 text-sm text-green-500">Copied!</span>}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="typescript" style={solarizedlight} customStyle={{ padding: '1rem', borderRadius: '0.5rem' }}>
            {buttonCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
};

export default ButtonShowcase;
