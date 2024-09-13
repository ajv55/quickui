'use client';

import React, { useState } from 'react';
import Sidebar from '../../components/sidebar'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion } from 'framer-motion';

const SidebarShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState([false, false, false, false]);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const toggleSidebar = (index: number) => {
    setSidebarOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const sidebarExamples = [
    {
      type: 'Basic Sidebar',
      render: (
        <Sidebar isOpen={isSidebarOpen[0]} onClose={() => toggleSidebar(0)} />
      ),
      code: `
import { useState } from 'react';
import Sidebar from '../../components/Sidebar'; 

const Layout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <button
        className="fixed top-4 left-4 z-50 p-2 text-xl bg-gray-800 text-white rounded-full hover:bg-gray-700"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? '&times;' : '☰'}
      </button>
      <main className="ml-60 p-8">Content goes here</main>
    </div>
  );
};

export default Layout;
      `,
    },
    {
      type: 'Collapsible Sidebar',
      render: (
        <Sidebar isOpen={isSidebarOpen[1]} onClose={() => toggleSidebar(1)} />
      ),
      code: `
import { useState } from 'react';
import Sidebar from '../../components/Sidebar'; 

const Layout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <button
        className="fixed top-4 left-4 z-50 p-2 text-xl bg-gray-800 text-white rounded-full hover:bg-gray-700"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? '&times;' : '☰'}
      </button>
      <main className="p-8">Content goes here</main>
    </div>
  );
};

export default Layout;
      `,
    },
    {
      type: 'Sidebar with Icons',
      render: (
        <Sidebar isOpen={isSidebarOpen[2]} onClose={() => toggleSidebar(2)} />
      ),
      code: `
import { useState } from 'react';
import Sidebar from '../../components/Sidebar'; 

const Layout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)}>
        <ul>
          <li><FaHome /> Home</li>
          <li><FaUser /> Profile</li>
          <li><FaCog /> Settings</li>
        </ul>
      </Sidebar>
      <button
        className="fixed top-4 left-4 z-50 p-2 text-xl bg-gray-800 text-white rounded-full hover:bg-gray-700"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? '&times;' : '☰'}
      </button>
      <main className="ml-60 p-8">Content goes here</main>
    </div>
  );
};

export default Layout;
      `,
    },
    {
      type: 'Sidebar with Animation',
      render: (
        <Sidebar isOpen={isSidebarOpen[3]} onClose={() => toggleSidebar(3)} />
      ),
      code: `
import { useState } from 'react';
import Sidebar from '../../components/Sidebar'; 
import { motion } from 'framer-motion';

const Layout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)}>
        <motion.ul
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <li>Animated Item 1</li>
          <li>Animated Item 2</li>
          <li>Animated Item 3</li>
        </motion.ul>
      </Sidebar>
      <button
        className="fixed top-4 left-4 z-50 p-2 text-xl bg-gray-800 text-white rounded-full hover:bg-gray-700"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? '&times;' : '☰'}
      </button>
      <main className="ml-60 p-8">Content goes here</main>
    </div>
  );
};

export default Layout;
      `,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="lg:text-6xl text-4xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">Sidebar Component Showcase</h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg mb-4">
          The <code className="text-primary-dark">Sidebar</code> component can be customized to fit various needs. Below are examples showcasing different styles and configurations.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-dark">Usage Examples</h2>
      </section>

      <section className="mb-8">
        {sidebarExamples.map((example, index) => (
          <div key={index} className="relative mb-8">
            <h3 className="text-2xl font-semibold mb-2">{example.type}</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-4 px-4 py-2 text-white bg-primary-dark rounded-lg hover:bg-primary-light"
              onClick={() => toggleSidebar(index)}
            >
              {isSidebarOpen[index] ? 'Close Sidebar' : 'Open Sidebar'}
            </motion.button>
            <div className="flex mb-4">
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

export default SidebarShowcase;

