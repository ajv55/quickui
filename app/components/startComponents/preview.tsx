// /components/ComponentPreview.tsx
'use client';
import { FC } from 'react';
import { FaCode } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface ComponentPreviewProps {
  id: string;
  title: string;
  code: string;
  children: React.ReactNode;
}

const ComponentPreview: FC<ComponentPreviewProps> = ({ id, title, code, children }) => {
  return (
    <section id={id} className="p-8 bg-background-light rounded-lg shadow-lg mb-12">
      <h3 className="text-2xl text-primary-dark font-semibold mb-4">{title}</h3>
      <div className="mb-4">{children}</div>
      <div className="bg-background-dark p-4 rounded-lg">
        <h4 className="text-xl text-accent-light font-bold flex items-center mb-2">
          <FaCode className="mr-2" /> Code Example
        </h4>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {code}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};

export default ComponentPreview;
