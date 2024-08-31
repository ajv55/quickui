'use client';
import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Alert from '../../components/alert'; // Adjust the path as needed

const AlertShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000); // Reset the copied state after 2 seconds
  };

  const alertCode = `
import Alert from './Alert';

const ExamplePage = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="p-8">
      {showAlert && (
        <Alert
          type="success"
          message="Your action was successful!"
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default ExamplePage;
`;

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-5xl font-bold text-primary-dark mb-6">
        <span className='bg-gradient-to-l from-primary-light to-secondary-light bg-clip-text text-transparent'>
          Alert Component Showcase
        </span>

      </h1>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-text-dark mb-4">
          The <code className="text-primary-dark">Alert</code> component is a versatile notification component that can be used to display different types of messages such as success, error, warning, and info. Below you will find examples of how to use the Alert component in various scenarios.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Usage Examples</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-dark mb-4">Success Alert</h3>
          <div className="bg-background-light p-4 rounded-lg mb-4">
            <Alert
              type="success"
              message="Your action was successful!"
              onClose={() => {}}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-dark mb-4">Error Alert</h3>
          <div className="bg-background-light p-4 rounded-lg mb-4">
            <Alert
              type="error"
              message="Something went wrong. Please try again."
              onClose={() => {}}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-dark mb-4">Warning Alert</h3>
          <div className="bg-background-light p-4 rounded-lg mb-4">
            <Alert
              type="warning"
              message="Please be aware of the following changes."
              onClose={() => {}}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-dark mb-4">Info Alert</h3>
          <div className="bg-background-light p-4 rounded-lg mb-4">
            <Alert
              type="info"
              message="This is an informational alert."
              onClose={() => {}}
            />
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Code Snippet</h2>
        <div className="relative mb-4">
          <CopyToClipboard text={alertCode} onCopy={() => handleCopy(0)}>
            <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
              <FaCopy />
              {copiedIndex === 0 && <span className="ml-2 text-sm text-green-500">Copied!</span>}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="typescript" style={gruvboxLight} customStyle={{ padding: '1rem', borderRadius: '0.5rem' }}>
            {alertCode}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
};

export default AlertShowcase;
