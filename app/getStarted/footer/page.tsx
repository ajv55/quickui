'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Footer from '../../components/footer'; // Adjust the path as needed
import { FaCode, FaCopy, FaFacebook } from 'react-icons/fa';
import clsx from 'clsx';

const FooterShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const footerExamples = [
    {
      type: 'Dark Theme with 3 Columns',
      render: (
        <Footer
          columns={3}
          theme='dark'
          content={[
            { title: 'About Us', items: [{ type: 'text', content: 'We are a company...' }] },
            { title: 'Services', items: [{ type: 'link', content: 'Service 1', href: '/service1' }] },
            { title: 'Contact', items: [{ type: 'link', content: 'Email Us', href: 'mailto:info@example.com' }] },
          ]}
          className='w-full'
          utilityLinks={[{ text: 'Privacy Policy', href: '/privacy' }]}
          copyrightText='© 2024 MyCompany. All rights reserved.'
        />
      ),
      code: `<Footer
  columns={3}
  theme='dark'
  content={[
    { title: 'About Us', items: [{ type: 'text', content: 'We are a company...' }] },
    { title: 'Services', items: [{ type: 'link', content: 'Service 1', href: '/service1' }] },
    { title: 'Contact', items: [{ type: 'link', content: 'Email Us', href: 'mailto:info@example.com' }] },
  ]}
  className='w-full'
  utilityLinks={[{ text: 'Privacy Policy', href: '/privacy' }]}
  copyrightText='© 2024 MyCompany. All rights reserved.'
/>`,
    },
    {
      type: 'Light Theme with 4 Columns and Custom Class',
      render: (
        <Footer
          columns={4}
          theme='light'
          className='custom-footer-class w-full'
          content={[
            { title: 'Company', items: [{ type: 'link', content: 'Home', href: '/' }] },
            { title: 'Products', items: [{ type: 'link', content: 'Product 1', href: '/product1' }] },
            { title: 'Support', items: [{ type: 'text', content: 'Help Center' }] },
            { title: 'Follow Us', items: [{ type: 'social', content: <FaFacebook />, href: 'https://facebook.com' }] },
          ]}
          utilityLinks={[{ text: 'Terms of Service', href: '/terms' }]}
          copyrightText='© 2024 MyCompany. All rights reserved.'
        />
      ),
      code: `<Footer
  columns={4}
  theme='light'
  className='custom-footer-class w-full'
  content={[
    { title: 'Company', items: [{ type: 'link', content: 'Home', href: '/' }] },
    { title: 'Products', items: [{ type: 'link', content: 'Product 1', href: '/product1' }] },
    { title: 'Support', items: [{ type: 'text', content: 'Help Center' }] },
    { title: 'Follow Us', items: [{ type: 'social', content: <FaFacebook />, href: 'https://facebook.com' }] },
  ]}
  utilityLinks={[{ text: 'Terms of Service', href: '/terms' }]}
  copyrightText='© 2024 MyCompany. All rights reserved.'
/>`,
    },
    {
      type: 'Footer with Only Utility Links',
      render: (
        <Footer
          columns={1}
          theme='dark'
          content={[]}
          className='w-full'
          utilityLinks={[{ text: 'Contact Us', href: '/contact' }, { text: 'FAQs', href: '/faqs' }]}
          copyrightText='© 2024 MyCompany. All rights reserved.'
        />
      ),
      code: `<Footer
  columns={1}
  theme='dark'
  content={[]}
  className='w-full'
  utilityLinks={[{ text: 'Contact Us', href: '/contact' }, { text: 'FAQs', href: '/faqs' }]}
  copyrightText='© 2024 MyCompany. All rights reserved.'
/>`,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        Footer Component Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">Footer</code> component is a versatile and customizable footer element that can adapt to different layouts and themes. Below are examples showcasing various configurations including different column counts, themes, and additional styling options.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {footerExamples.map((example, index) => (
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

export default FooterShowcase;
