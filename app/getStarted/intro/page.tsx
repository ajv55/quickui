'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaChevronRight, FaCopy, FaFolder, FaHome } from 'react-icons/fa';
const GettingStarted: FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000); // Reset the copied state after 2 seconds
  };

  const codeSnippets = [
    "npm install quick-ui-library",
    "yarn add quick-ui-library",
    "npm install -D tailwindcss postcss autoprefixer",
    "npx tailwindcss init -p",
    "npm install framer-motion",
    "yarn add framer-motion",
    `import { Button } from 'quick-ui-library';

const MyComponent = () => (
  <Button variant="primary">
    Click Me!
  </Button>
);`,
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="lg:text-5xl text-4xl font-bold text-primary-dark mb-6">
        <span className='bg-gradient-to-l  from-primary-light to-secondary-light bg-clip-text text-transparent'>
          Getting Started
        </span> with QuickUI
      </h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-text-dark mb-4">
          QuickUI is a modern and flexible React component library built with TypeScript, Tailwind CSS, and Framer Motion. It offers a wide range of pre-built components that are easy to use and customize, making it ideal for building high-quality user interfaces quickly and efficiently.
        </p>
        <p className="text-lg text-text-dark">
          This guide will walk you through the steps of installing QuickUI, configuring it in your project, and using the components to build your application.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Installation</h2>
        <p className="text-lg text-text-dark mb-4">
          To start using QuickUI, you&#39;ll need to install the library via npm or yarn. Open your terminal and run the following command:
        </p>
        <div className="relative overflow-scroll bg-primary-dark p-4 rounded-lg mb-4">
          <pre className='whitespace-pre-wrap'>
            <code className="text-lg text-secondary-light">
              {codeSnippets[0]}
            </code>
          </pre>
          <CopyToClipboard text={codeSnippets[0]} onCopy={() => handleCopy(0)}>
            <button className=" absolute top-2 right-2 text-secondary-light">
              {copiedIndex === 0 ? 'Copied!' : <FaCopy />}
            </button>
          </CopyToClipboard>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Configuration</h2>
        <p className="text-lg text-text-dark mb-4">
          After installing the library, you&#39;ll need to set up Tailwind CSS and Framer Motion in your project if you haven&#39;t already. Here&#39;s how to do it:
        </p>
        <h3 className="text-2xl font-bold text-primary-dark mb-2">1. Setting up Tailwind CSS</h3>
        <p className="text-lg text-text-dark mb-4">
          If you&#39;re new to Tailwind CSS, you can follow the official <Link href="https://tailwindcss.com/docs/installation" className="text-secondary-light underline">installation guide</Link>. For a typical React setup, you can install Tailwind CSS with the following commands:
        </p>
        <div className="relative bg-primary-dark overflow-scroll p-4 rounded-lg mb-4">
          <pre className="whitespace-pre-wrap">
            <code className="text-lg text-secondary-light break-all">
              {codeSnippets[2]}
            </code>
          </pre>
          <CopyToClipboard text={codeSnippets[2]} onCopy={() => handleCopy(2)}>
            <button className="absolute top-2 right-2 text-secondary-light">
              {copiedIndex === 2 ? 'Copied!' : <FaCopy />}
            </button>
          </CopyToClipboard>
        </div>

        <p className="text-lg text-text-dark mb-4">
          Then, initialize Tailwind CSS:
        </p>
        <div className="relative bg-primary-dark p-4 rounded-lg mb-4">
          <pre>
            <code className="text-lg text-secondary-light">
              {codeSnippets[3]}
            </code>
          </pre>
          <CopyToClipboard text={codeSnippets[3]} onCopy={() => handleCopy(3)}>
            <button className="absolute top-2 right-2 text-secondary-light">
              {copiedIndex === 3 ? 'Copied!' : <FaCopy />}
            </button>
          </CopyToClipboard>
        </div>
        <h3 className="text-2xl font-bold text-primary-dark mb-2">2. Setting up Framer Motion</h3>
        <p className="text-lg text-text-dark mb-4">
          Install Framer Motion using npm or yarn:
        </p>
        <div className="relative bg-primary-dark p-4 rounded-lg mb-4">
          <pre className='whitespace-pre-wrap'>
            <code className="text-lg text-secondary-light">
              {codeSnippets[4]}
            </code>
          </pre>
          <CopyToClipboard text={codeSnippets[4]} onCopy={() => handleCopy(4)}>
            <button className="absolute top-2 right-2 text-secondary-light">
              {copiedIndex === 4 ? 'Copied!' : <FaCopy />}
            </button>
          </CopyToClipboard>
        </div>
       
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Usage</h2>
        <p className="text-lg text-text-dark mb-4">
          Once you&#39;ve completed the installation and configuration, you can start using QuickUI components in your project. Here&#39;s an example of how to use the <code className="text-primary-dark">Button</code> component:
        </p>
        <div className="relative bg-background-light p-4 rounded-lg mb-4">
          <pre className='whitespace-pre-wrap'>
            <code className="text-lg text-text-light">
              {codeSnippets[6]}
            </code>
          </pre>
          <CopyToClipboard text={codeSnippets[6]} onCopy={() => handleCopy(6)}>
            <button className="absolute top-2 right-2 text-text-light">
              {copiedIndex === 6 ? 'Copied!' : <FaCopy />}
            </button>
          </CopyToClipboard>
        </div>
        <p className="text-lg text-text-dark">
          This will render a primary button with the label &quot;Click Me!&quot; on your page. You can customize the button by passing different props to suit your design needs.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Next Steps</h2>
        <p className="text-lg text-text-dark mb-4">
          Now that you&#39;ve set up QuickUI and learned the basics of using its components, you can explore the full documentation to discover more components and advanced usage. Check out the <Link href="/getStarted/button" className="text-secondary-light underline">Components</Link> section to start building with QuickUI.
        </p>
        <p className="text-lg text-text-dark">
          Happy coding!
        </p>
      </section>
    </div>
  );
};

export default GettingStarted;
