'use client';
import { FC, useState } from 'react';
import { CustomButton, AnimatedButton } from '../../components/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import clsx from 'clsx';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

const buttonExamples = [
  {
    title: 'Default Button',
    component: <CustomButton variant="default">Default Button</CustomButton>,
    code: `
<CustomButton variant="default">Default Button</CustomButton>
`
  },
  {
    title: 'Primary Button',
    component: <CustomButton variant="primary">Primary Button</CustomButton>,
    code: `
<CustomButton variant="primary">Primary Button</CustomButton>
`
  },
  {
    title: 'Secondary Button',
    component: <CustomButton variant="secondary">Secondary Button</CustomButton>,
    code: `
<CustomButton variant="secondary">Secondary Button</CustomButton>
`
  },
  {
    title: 'Large Primary Button',
    component: <CustomButton variant="primary" size="large">Large Primary Button</CustomButton>,
    code: `
<CustomButton variant="primary" size="large">Large Primary Button</CustomButton>
`
  },
  {
    title: 'Custom Styled Button',
    component: (
      <CustomButton
        variant="default"
        size="large"
        className="bg-green-500 text-white hover:bg-green-600"
        style={{ borderRadius: '12px', fontWeight: 'bold' }}
      >
        Custom Styled Button
      </CustomButton>
    ),
    code: `
<CustomButton
  variant="default"
  size="large"
  className="bg-green-500 text-white hover:bg-green-600"
  style={{ borderRadius: '12px', fontWeight: 'bold' }}
>
  Custom Styled Button
</CustomButton>
`
  },
  {
    title: 'Animated Button',
    component: (
      <AnimatedButton className="bg-blue-500 text-white hover:bg-blue-600" style={{ fontSize: '1.2rem' }}>
        Animated Button
      </AnimatedButton>
    ),
    code: `
<AnimatedButton className="bg-blue-500 text-white hover:bg-blue-600" style={{ fontSize: '1.2rem' }}>
  Animated Button
</AnimatedButton>
`
  },
  {
    title: 'Outline Button',
    component: (
      <CustomButton
        variant="default"
        className="border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-white"
        style={{ borderRadius: '8px', fontWeight: 'normal' }}
      >
        Outline Button
      </CustomButton>
    ),
    code: `
<CustomButton
  variant="default"
  className="border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-white"
  style={{ borderRadius: '8px', fontWeight: 'normal' }}
>
  Outline Button
</CustomButton>
`
  },
  {
    title: 'Gradient Button',
    component: (
      <CustomButton
        variant="default"
        className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white"
        style={{ fontWeight: 'bold' }}
      >
        Gradient Button
      </CustomButton>
    ),
    code: `
<CustomButton
  variant="default"
  className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white"
  style={{ fontWeight: 'bold' }}
>
  Gradient Button
</CustomButton>
`
  },
  {
    title: 'Shadow Button',
    component: (
      <CustomButton
        variant="default"
        className="bg-gray-200 text-gray-800 shadow-lg hover:shadow-2xl"
        style={{ fontSize: '1rem' }}
      >
        Shadow Button
      </CustomButton>
    ),
    code: `
<CustomButton
  variant="default"
  className="bg-gray-200 text-gray-800 shadow-lg hover:shadow-2xl"
  style={{ fontSize: '1rem' }}
>
  Shadow Button
</CustomButton>
`
  },
  {
    title: '3D Button',
    component: (
      <CustomButton
        variant="default"
        className="bg-gray-300 text-gray-800 transform transition-transform duration-300 hover:translate-y-1 hover:shadow-2xl"
        style={{ fontSize: '1rem', borderRadius: '8px' }}
      >
        3D Button
      </CustomButton>
    ),
    code: `
<CustomButton
  variant="default"
  className="bg-gray-300 text-gray-800 transform transition-transform duration-300 hover:translate-y-1 hover:shadow-2xl"
  style={{ fontSize: '1rem', borderRadius: '8px' }}
>
  3D Button
</CustomButton>
`
  },
  {
    title: 'Loading Button',
    component: (
      <button
        className="relative bg-blue-500 text-white py-2 px-4 rounded-lg"
        disabled
      >
        <span className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-5 h-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8 8 8 0 010 16 8 8 0 01-8-8z"
            />
          </svg>
        </span>
        Loading...
      </button>
    ),
    code: `
<button
  className="relative bg-blue-500 text-white py-2 px-4 rounded-lg"
  disabled
>
  <span className="absolute inset-0 flex items-center justify-center">
    <svg
      className="w-5 h-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8 8 8 0 010 16 8 8 0 01-8-8z"
      />
    </svg>
  </span>
  Loading...
</button>
`
  },
];

const ButtonShowcase: FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000); // Reset the copied state after 2 seconds
  };

  return (
    <div className="w-full py-6 px-4 bg-background-dark overflow-scroll h-screen">
      <div className="flex flex-col justify-start items-center mx-auto ">
        <div className="w-full flex flex-col justify-start items-start text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">Button Showcase</h1>
          <div className="bg-gradient-to-r from-secondary-light to-primary-light h-1 w-full mb-8" />
          <p className="text-lg text-left text-text-dark leading-relaxed w-full">
            Welcome to the <span className='bg-gradient-to-br text-xl from-primary-light via-accent-light to-secondary-light bg-clip-text text-transparent'>Button Showcase!</span> This page is designed to highlight the versatility and creativity you can achieve with custom buttons in your application. Here, you will find a diverse collection of button styles, each meticulously crafted to demonstrate various design approaches and functionality. Whether you need a simple, flat button for basic interactions or a more complex, animated button to catch users' attention, this showcase covers a wide range of use cases. Each example is accompanied by its respective code snippet, allowing you to easily replicate or modify these designs in your own projects. Explore the different styles, understand the design choices, and get inspired to create buttons that not only meet your needs but also enhance the user experience in your application.
          </p>
        </div>

        <div className="flex w-full pr-4 flex-col justify-center items-center gap-8">
          {buttonExamples.map((example, index) => (
            <div key={index} className="bg-background-light w-full p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary-light">{example.title}</h2>
              <div className="mb-4">
                {example.component}
              </div>
              <div className="relative">
                <CopyToClipboard text={example.code} onCopy={() => handleCopy(index)}>
                  <button className="absolute top-2 right-2 p-1 rounded bg-secondary-dark hover:bg-secondary-light text-white">
                    <FaCopy />
                  </button>
                </CopyToClipboard>
                <SyntaxHighlighter language='typescript' style={duotoneDark} showLineNumbers={true}>
                  {example.code}
                </SyntaxHighlighter>
                {copiedIndex === index && (
                  <div className="absolute bottom-2 right-2 text-sm text-primary-light">
                    Copied!
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;
