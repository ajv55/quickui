// pages/TableShowcase.tsx

'use client';

import React from 'react';
import Table from '../../components/table';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const TableShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const columns = ['Name', 'Age', 'Occupation'];
  const data = [
    { Name: 'John Doe', Age: 28, Occupation: 'Software Engineer' },
    { Name: 'Jane Smith', Age: 34, Occupation: 'Product Manager' },
    { Name: 'Sam Brown', Age: 22, Occupation: 'Designer' },
  ];

  const tableExamples = [
    {
      type: 'Basic Table',
      render: (
        <Table
          columns={columns}
          data={data}
          variant="basic"
        />
      ),
      code: `
import Table from '../../components/Table'; 

const BasicTable: React.FC = () => {
  const columns = ['Name', 'Age', 'Occupation'];
  const data = [
    { Name: 'John Doe', Age: 28, Occupation: 'Software Engineer' },
    { Name: 'Jane Smith', Age: 34, Occupation: 'Product Manager' },
    { Name: 'Sam Brown', Age: 22, Occupation: 'Designer' },
  ];

  return <Table columns={columns} data={data} variant="basic" />;
};

export default BasicTable;
      `,
    },
    {
      type: 'Striped Table',
      render: (
        <Table
          columns={columns}
          data={data}
          variant="striped"
        />
      ),
      code: `
import Table from '../../components/Table'; 

const StripedTable: React.FC = () => {
  const columns = ['Name', 'Age', 'Occupation'];
  const data = [
    { Name: 'John Doe', Age: 28, Occupation: 'Software Engineer' },
    { Name: 'Jane Smith', Age: 34, Occupation: 'Product Manager' },
    { Name: 'Sam Brown', Age: 22, Occupation: 'Designer' },
  ];

  return <Table columns={columns} data={data} variant="striped" />;
};

export default StripedTable;
      `,
    },
    {
      type: 'Expandable Table',
      render: (
        <Table
          columns={columns}
          data={data}
          variant="expandable"
          expandable
          onRowExpand={(rowIndex) => console.log('Expanded row:', rowIndex)}
        />
      ),
      code: `
import Table from '../../components/Table'; 

const ExpandableTable: React.FC = () => {
  const columns = ['Name', 'Age', 'Occupation'];
  const data = [
    { Name: 'John Doe', Age: 28, Occupation: 'Software Engineer' },
    { Name: 'Jane Smith', Age: 34, Occupation: 'Product Manager' },
    { Name: 'Sam Brown', Age: 22, Occupation: 'Designer' },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      variant="expandable"
      expandable
      onRowExpand={(rowIndex) => console.log('Expanded row:', rowIndex)}
    />
  );
};

export default ExpandableTable;
      `,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="lg:text-6xl text-4xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">Table Component Showcase</h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg mb-4">
          The <code className="text-primary-dark">Table</code> component is versatile and supports different styles and configurations. Below are examples showcasing different table types.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-dark">Usage Examples</h2>
      </section>

      <section>
        {tableExamples.map((example, index) => (
          <div key={index} className="relative mb-8">
            <h3 className="text-2xl font-semibold mb-2">{example.type}</h3>
            <div className="mb-4">
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

export default TableShowcase;
