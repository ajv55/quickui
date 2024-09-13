'use client';

import React from 'react';
import Tabs from '../../components/tab';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const TabShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const tabsData = [
    {
      type: 'Horizontal Tabs',
      render: (
        <Tabs
          tabs={[
            { label: 'Tab 1', content: <div>Content for Tab 1</div> },
            { label: 'Tab 2', content: <div>Content for Tab 2</div> },
            { label: 'Tab 3', content: <div>Content for Tab 3</div> },
          ]}
          variant="horizontal"
        />
      ),
      code: `
import Tabs from '../../components/Tabs';

const HorizontalTabs: React.FC = () => {
  return (
    <Tabs
      tabs={[
        { label: 'Tab 1', content: <div>Content for Tab 1</div> },
        { label: 'Tab 2', content: <div>Content for Tab 2</div> },
        { label: 'Tab 3', content: <div>Content for Tab 3</div> },
      ]}
      variant="horizontal"
    />
  );
};

export default HorizontalTabs;
      `,
    },
    {
      type: 'Vertical Tabs',
      render: (
        <Tabs
          tabs={[
            { label: 'Tab 1', content: <div>Content for Tab 1</div> },
            { label: 'Tab 2', content: <div>Content for Tab 2</div> },
            { label: 'Tab 3', content: <div>Content for Tab 3</div> },
          ]}
          variant="vertical"
        />
      ),
      code: `
import Tabs from '../../components/Tabs';

const VerticalTabs: React.FC = () => {
  return (
    <Tabs
      tabs={[
        { label: 'Tab 1', content: <div>Content for Tab 1</div> },
        { label: 'Tab 2', content: <div>Content for Tab 2</div> },
        { label: 'Tab 3', content: <div>Content for Tab 3</div> },
      ]}
      variant="vertical"
    />
  );
};

export default VerticalTabs;
      `,
    },
    {
      type: 'Animated Tabs',
      render: (
        <Tabs
          tabs={[
            { label: 'Tab 1', content: <div>Content for Tab 1</div> },
            { label: 'Tab 2', content: <div>Content for Tab 2</div> },
            { label: 'Tab 3', content: <div>Content for Tab 3</div> },
          ]}
          variant="animated"
        />
      ),
      code: `
import Tabs from '../../components/Tabs';
import { motion } from 'framer-motion';

const AnimatedTabs: React.FC = () => {
  return (
    <Tabs
      tabs={[
        { label: 'Tab 1', content: <div>Content for Tab 1</div> },
        { label: 'Tab 2', content: <div>Content for Tab 2</div> },
        { label: 'Tab 3', content: <div>Content for Tab 3</div> },
      ]}
      variant="animated"
    />
  );
};

export default AnimatedTabs;
      `,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="lg:text-6xl text-4xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">Tab Component Showcase</h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg mb-4">
          The <code className="text-primary-dark">Tabs</code> component is versatile and supports different styles and animations. Below are examples showcasing different tab types.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-dark">Usage Examples</h2>
      </section>

      <section>
        {tabsData.map((tabData, index) => (
          <div key={index} className="relative mb-8">
            <h3 className="text-2xl font-semibold mb-2">{tabData.type}</h3>
            <div className="mb-4">
              {tabData.render}
            </div>
            <div className="relative">
              <SyntaxHighlighter
                language="tsx"
                style={solarizedlight}
                customStyle={{ padding: '1rem', borderRadius: '0.5rem' }}
              >
                {tabData.code}
              </SyntaxHighlighter>
              <CopyToClipboard text={tabData.code} onCopy={() => handleCopy(index)}>
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

export default TabShowcase;
