'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import DatePickerComponent from '../../components/datepicker'; // Adjust the path as needed
import { FaCode, FaCopy } from 'react-icons/fa';
import { div } from 'three/webgpu';
import CopyToClipboard from 'react-copy-to-clipboard';

const DatePickerShowcase: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000); // Reset the copied state after 2 seconds
  };

  const handleInstall = (index: number) => {
    setCopied(index);
    setTimeout(() => {
      setCopied(null);
    }, 2000); // Reset the copied state after 2 seconds
  };

  const datePickerExamples = [
    {
      type: 'Single Date Picker',
      description:
        'This is a basic implementation of a single date picker, where users can select a single date. It’s ideal for scenarios like setting a due date, booking a single event, or selecting a birthdate.',
      render: (
        <DatePickerComponent
          selectedDate={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          datePickerClassName="p-4 border border-gray-300 rounded-md"
        />
      ),
      code: `<DatePicker
  selectedDate={selectedDate}
  onChange={(date) => setSelectedDate(date)}
  datePickerClassName="p-4 border border-gray-300 rounded-md"
/>`,
    },
    {
      type: 'Date Range Picker',
      description:
        'The Date Range Picker allows users to select a range of dates. It’s perfect for booking start and end dates for travel, rentals, or other time-bound events.',
      render: (
        <DatePickerComponent
          isRangePicker
          startDate={startDate}
          endDate={endDate}
          onRangeChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
          }}
          datePickerClassName="p-4 border border-gray-300 rounded-md shadow-lg"
        />
      ),
      code: `<DatePicker
  isRangePicker
  startDate={startDate}
  endDate={endDate}
  onRangeChange={(dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }}
  datePickerClassName="p-4 border border-gray-300 rounded-md shadow-lg"
/>`,
    },
    {
      type: 'Custom Date Format',
      description:
        'This example demonstrates the use of a custom date format. Users can customize the date format to suit regional preferences or specific design requirements.',
      render: (
        <DatePickerComponent
          selectedDate={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          datePickerClassName="p-4 border border-gray-300 rounded-md"
        />
      ),
      code: `<DatePicker
  selectedDate={selectedDate}
  onChange={(date) => setSelectedDate(date)}
  dateFormat="dd/MM/yyyy"
  datePickerClassName="p-4 border border-gray-300 rounded-md"
/>`,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        DatePicker Showcase
      </h1>

      

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">DatePicker</code> component allows users to select dates with smooth animations and customizable styles. Below are examples demonstrating different configurations.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Installation</h2>
        <p className="text-lg text-text-dark mb-4">
          To start using the DatePicker component, you&#39;ll need to install the library via npm or yarn. Open your terminal and run the following command:
        </p>
        <div className="relative bg-primary-dark p-4 rounded-lg mb-4">
          <pre>
            <code className="text-lg text-secondary-light">
            npm i react-datepicker
            </code>
          </pre>
          <CopyToClipboard text={'npm i react-datepicker'} onCopy={() => handleInstall(0)}>
            <button className="absolute top-2 right-2 text-secondary-light">
              {copied === 0 ? 'Copied!' : <FaCopy />}
            </button>
          </CopyToClipboard>
        </div>
      </section>

      <section>
        {datePickerExamples.map((example, index) => (
          <div key={index} className="relative mb-8">
            <h3 className="text-xl font-semibold text-primary-light mb-2">{example.type}</h3>
            <p className="text-lg text-text-dark mb-2">{example.description}</p>
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
                className="absolute top-2 right-2 p-2 rounded text-lg font-semibold text-primary-light transition"
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

export default DatePickerShowcase;
