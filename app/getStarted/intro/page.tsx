'use client';
import { FC } from 'react';
import Link from 'next/link';

const GettingStarted: FC = () => {
  return ( 
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-5xl font-bold text-primary-dark mb-6"><span className='bg-gradient-to-l from-primary-light to-secondary-light bg-clip-text text-transparent'>Getting Started </span>with QuickUI</h1>
      
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
        <p className="text-lg ttext-text-dark mb-4">
          To start using QuickUI, you'll need to install the library via npm or yarn. Open your terminal and run the following command:
        </p>
        <pre className="bg-primary-dark p-4 rounded-lg mb-4">
          <code className="text-lg text-secondary-light">
            npm install quick-ui-library
          </code>
        </pre>
        <p className="text-lg text-text-dark">
          Alternatively, if you prefer using yarn:
        </p>
        <pre className="bg-primary-dark p-4 rounded-lg mb-4">
          <code className="text-lg text-secondary-light">
            yarn add quick-ui-library
          </code>
        </pre>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Configuration</h2>
        <p className="text-lg text-text-dark mb-4">
          After installing the library, you'll need to set up Tailwind CSS and Framer Motion in your project if you haven't already. Here's how to do it:
        </p>
        <h3 className="text-2xl font-bold text-primary-dark mb-2">1. Setting up Tailwind CSS</h3>
        <p className="text-lg text-text-dark mb-4">
          If you're new to Tailwind CSS, you can follow the official <Link href="https://tailwindcss.com/docs/installation" className="text-secondary-light underline">installation guide</Link>. For a typical React setup, you can install Tailwind CSS with the following commands:
        </p>
        <pre className="bg-primary-dark p-4 rounded-lg mb-4">
          <code className="text-lg text-secondary-light">
            npm install -D tailwindcss postcss autoprefixer
          </code>
        </pre>
        <p className="text-lg text-text-dark mb-4">
          Then, initialize Tailwind CSS:
        </p>
        <pre className="bg-primary-dark p-4 rounded-lg mb-4">
          <code className="text-lg text-secondary-light">
            npx tailwindcss init -p
          </code>
        </pre>
        <h3 className="text-2xl font-bold text-primary-dark mb-2">2. Setting up Framer Motion</h3>
        <p className="text-lg text-text-dark mb-4">
          Install Framer Motion using npm or yarn:
        </p>
        <pre className="bg-primary-dark p-4 rounded-lg mb-4">
          <code className="text-lg text-secondary-light">
            npm install framer-motion
          </code>
        </pre>
        <p className="text-lg text-text-dark mb-4">
          Or, if you're using yarn:
        </p>
        <pre className="bg-primary-dark p-4 rounded-lg mb-4">
          <code className="text-lg text-secondary-light">
            yarn add framer-motion
          </code>
        </pre>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Usage</h2>
        <p className="text-lg text-text-dark mb-4">
          Once you've completed the installation and configuration, you can start using QuickUI components in your project. Here's an example of how to use the <code className="text-primary-dark">Button</code> component:
        </p>
        <pre className="bg-background-light p-4 rounded-lg mb-4">
          <code className="text-lg text-text-light">
{`import { Button } from 'quick-ui-library';

const MyComponent = () => (
  <Button variant="primary">
    Click Me!
  </Button>
);`}
          </code>
        </pre>
        <p className="text-lg text-text-dark">
          This will render a primary button with the label "Click Me!" on your page. You can customize the button by passing different props to suit your design needs.
        </p>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Next Steps</h2>
        <p className="text-lg text-text-dark mb-4">
          Now that you've set up QuickUI and learned the basics of using its components, you can explore the full documentation to discover more components and advanced usage. Check out the <Link href="/getStarted/component" className="text-secondary-light underline">Components</Link> section to start building with QuickUI.
        </p>
        <p className="text-lg text-text-dark">
          Happy coding!
        </p>
      </section>
    </div>
  );
};

export default GettingStarted;
