'use client';

import React, { useState } from 'react';
import Navbar from '../../components/navBar'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from 'react-icons/fa';
import clsx from 'clsx';

const NavbarShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const navbarExamples = [
    {
      type: 'Basic Navbar',
      render: (
        <Navbar
          brandName="MySite"
          className='w-full'
          links={[
            { text: 'Home', href: '/' },
            { text: 'About', href: '/about' },
            { text: 'Services', href: '/services' },
            { text: 'Contact', href: '/contact' },
          ]}
        />
      ),
      code: `<Navbar
  brandName="MySite"
  className='w-full'
  links={[
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Contact', href: '/contact' },
  ]}
/>`,
    },
    {
      type: 'Styled Navbar with Custom Colors',
      render: (
        <Navbar
          brandName="StyledSite"
          links={[
            { text: 'Home', href: '/' },
            { text: 'Blog', href: '/blog' },
            { text: 'Portfolio', href: '/portfolio' },
            { text: 'Contact', href: '/contact' },
          ]}
          className="bg-blue-900 w-full"
          navClassName="p-6"
          linkClassName="hover:text-yellow-400"
          mobileMenuClassName="bg-blue-800"
        />
      ),
      code: `<Navbar
  brandName="StyledSite"
  links={[
    { text: 'Home', href: '/' },
    { text: 'Blog', href: '/blog' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'Contact', href: '/contact' },
  ]}
  className="bg-blue-900 w-full"
  navClassName="p-6"
  linkClassName="hover:text-yellow-400"
  mobileMenuClassName="bg-blue-800"
/>`,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="lg:text-6xl text-4xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        Navbar Component Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">Navbar</code> component is designed to provide flexible and customizable navigation options. Below are some examples of how to use and style this component.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {navbarExamples.map((example, index) => (
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
                className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition"
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

export default NavbarShowcase;
