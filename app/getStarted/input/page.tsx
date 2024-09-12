'use client';
import React, { useState } from 'react';
import VersatileInputField from '@/app/components/input';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaCalendar, FaSearch, FaGlobe, FaCopy } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Showcase: React.FC = () => {
  const [textValue, setTextValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
    if (event.target.value.length < 5) {
      setError('Input must be at least 5 characters long.');
    } else {
      setError('');
    }
  };

  return (
    <div className="p-8 w-full bg-background-dark h-screen overflow-scroll space-y-12">
      <div className="text-center flex flex-col items-start justify-start mb-8">
        <h1 className="lg:text-6xl text-4xl text-left font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">Input Field Showcase</h1>
        <section className="flex justify-start items-start flex-col">
          <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
          <p className="text-lg text-left text-text-dark mb-4">
            The <code className="text-primary-dark">Input Field</code> component is a versatile and essential UI element designed to capture user input. It supports various types such as text, password, email, and more. Below are examples illustrating different styles and configurations of input fields.
          </p>
          <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
        </section>
      </div>

            
      <section className="bg-background-light p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">1. Basic Text Input</h2>
        <p className="mb-4 text-lg text-text-light">A simple text input field ideal for general use cases. This example demonstrates a basic text input with standard styling.</p>
        <VersatileInputField
          id="basic-input"
          placeholder="Basic text input"
          value={textValue}
          onChange={handleChange}
          styleType="basic"
        />
        <div className="mt-4 relative">
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileInputField
  id="basic-input"
  placeholder="Basic text input"
  value={textValue}
  onChange={handleChange}
  styleType="basic"
/>`}
          </SyntaxHighlighter>
          <button
              onClick={() => handleCopy(0)}
              className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition "
            >
              {copiedIndex === 0 ? 'Copied!' : <FaCopy />}
            </button>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">2. Rounded Input with Shadow</h2>
        <p className="mb-4 text-gray-700">A text input with rounded corners and a subtle shadow effect. This style is suitable for modern, minimalist designs.</p>
        <VersatileInputField
          id="rounded-input"
          placeholder="Rounded input"
          value={textValue}
          onChange={handleChange}
          styleType="rounded"
        />
        <div className="mt-4 relative">
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileInputField
  id="rounded-input"
  placeholder="Rounded input"
  value={textValue}
  onChange={handleChange}
  styleType="rounded"
/>`}
          </SyntaxHighlighter>
          <button
              onClick={() => handleCopy(1)}
              className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition "
            >
              {copiedIndex === 1 ? 'Copied!' : <FaCopy />}
            </button>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">3. Input with Icon</h2>
        <p className="mb-4 text-gray-700">An input field featuring an icon to provide context or visual cues. This example uses the user icon.</p>
        <VersatileInputField
          id="icon-input"
          placeholder="Input with icon"
          value={textValue}
          onChange={handleChange}
          styleType="icon"
          icon={<FaUser size={20} />}
        />
        <div className="mt-4 relative">
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileInputField
  id="icon-input"
  placeholder="Input with icon"
  value={textValue}
  onChange={handleChange}
  styleType="icon"
  icon={<FaUser size={20} />}
/>`}
          </SyntaxHighlighter>
          <button
              onClick={() => handleCopy(2)}
              className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition "
            >
              {copiedIndex === 2 ? 'Copied!' : <FaCopy />}
            </button>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">4. Outlined Input</h2>
        <p className="mb-4 text-gray-700">An input field with an outlined border, which provides a clear and defined edge. Perfect for forms and interfaces with a clean look.</p>
        <VersatileInputField
          id="outlined-input"
          placeholder="Outlined input"
          value={textValue}
          onChange={handleChange}
          styleType="outlined"
        />
        <div className="mt-4 relative">
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileInputField
  id="outlined-input"
  placeholder="Outlined input"
  value={textValue}
  onChange={handleChange}
  styleType="outlined"
/>`}
          </SyntaxHighlighter>
          <button
              onClick={() => handleCopy(4)}
              className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition "
            >
              {copiedIndex === 4 ? 'Copied!' : <FaCopy />}
            </button>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">5. Animated Input</h2>
        <p className="mb-4 text-gray-700">An input field with a scaling animation effect on hover. This adds a dynamic touch to the input field.</p>
        <VersatileInputField
          id="animated-input"
          placeholder="Animated input"
          value={textValue}
          onChange={handleChange}
          styleType="animated"
        />
        <div className="mt-4 relative">
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileInputField
  id="animated-input"
  placeholder="Animated input"
  value={textValue}
  onChange={handleChange}
  styleType="animated"
/>`}
          </SyntaxHighlighter>
          <button
              onClick={() => handleCopy(5)}
              className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition "
            >
              {copiedIndex === 5 ? 'Copied!' : <FaCopy />}
            </button>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">6. Password Input with Error</h2>
        <p className="mb-4 text-gray-700">A password input field with an error message when the input length is less than 5 characters. This showcases the error handling feature.</p>
        <VersatileInputField
          id="password-input"
          type="password"
          placeholder="Password"
          value={textValue}
          onChange={handleChange}
          styleType="basic"
          errorMessage={error}
        />
        <div className="mt-4 relative">
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileInputField
  id="password-input"
  type="password"
  placeholder="Password"
  value={textValue}
  onChange={handleChange}
  styleType="basic"
  errorMessage={error}
/>`}
          </SyntaxHighlighter>
          <button
              onClick={() => handleCopy(6)}
              className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition "
            >
              {copiedIndex === 6 ? 'Copied!' : <FaCopy />}
            </button>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">7. Email Input</h2>
        <p className="mb-4 text-gray-700">An input field designed for email addresses, with validation to ensure proper email format.</p>
        <VersatileInputField
          id="email-input"
          type="email"
          placeholder="Email address"
          value={textValue}
          onChange={handleChange}
          styleType="basic"
        />
        <div className="mt-4 relative">
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileInputField
  id="email-input"
  type="email"
  placeholder="Email address"
  value={textValue}
  onChange={handleChange}
  styleType="basic"
/>`}
          </SyntaxHighlighter>
          <button
              onClick={() => handleCopy(7)}
              className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition "
            >
              {copiedIndex === 7 ? 'Copied!' : <FaCopy />}
            </button>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">8. Phone Number Input</h2>
        <p className="mb-4 text-gray-700">An input field tailored for phone numbers, allowing users to enter their contact details easily.</p>
        <VersatileInputField
          id="phone-input"
          type="tel"
          placeholder="Phone number"
          value={textValue}
          onChange={handleChange}
          styleType="basic"
        />
        <div className="mt-4 relative">
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileInputField
  id="phone-input"
  type="tel"
  placeholder="Phone number"
  value={textValue}
  onChange={handleChange}
  styleType="basic"
/>`}
          </SyntaxHighlighter>
          <button
              onClick={() => handleCopy(8)}
              className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition "
            >
              {copiedIndex === 8 ? 'Copied!' : <FaCopy />}
            </button>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">9. Date Input</h2>
        <p className="mb-4 text-gray-700">A date input field for selecting dates. Useful for scheduling and date-related data entry.</p>
        <VersatileInputField
          id="date-input"
          type="date"
          placeholder="Select date"
          value={textValue}
          onChange={handleChange}
          styleType="basic"
        />
        <div className="mt-4 relative">
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileInputField
  id="date-input"
  type="date"
  placeholder="Select date"
  value={textValue}
  onChange={handleChange}
  styleType="basic"
/>`}
          </SyntaxHighlighter>
          <button
              onClick={() => handleCopy(9)}
              className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition "
            >
              {copiedIndex === 9 ? 'Copied!' : <FaCopy />}
            </button>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">10. Search Input with Animation</h2>
        <p className="mb-4 text-gray-700">A search input field that expands into a full input box when focused, enhancing the user experience with smooth animations.</p>
        <VersatileInputField
          id="search-input"
          placeholder="Search..."
          value={textValue}
          onChange={handleChange}
          styleType="animated"
          icon={<FaSearch size={20} />}
        />
        <div className="mt-4 relative">
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileInputField
  id="search-input"
  placeholder="Search..."
  value={textValue}
  onChange={handleChange}
  styleType="animated"
  icon={<FaSearch size={20} />}
/>`}
          </SyntaxHighlighter>
          <button
              onClick={() => handleCopy(10)}
              className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition "
            >
              {copiedIndex === 10 ? 'Copied!' : <FaCopy />}
            </button>
        </div>
      </section>

      
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">11. Glowing Border Input</h2>
        <p className="mb-4 text-gray-700">An input field with a glowing border effect when focused, adding a visually appealing touch to your forms.</p>
        <VersatileInputField
          id="glowing-input"
          placeholder="Glowing border input"
          value={textValue}
          onChange={handleChange}
          styleType="glowing"
        />
        <div className="mt-4 relative">
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileInputField
  id="glowing-input"
  placeholder="Glowing border input"
  value={textValue}
  onChange={handleChange}
  styleType="glowing"
/>`}
          </SyntaxHighlighter>
          <button
              onClick={() => handleCopy(11)}
              className="absolute top-2 right-2 p-2 rounded text-sm font-semibold text-primary-light transition "
            >
              {copiedIndex === 11 ? 'Copied!' : <FaCopy />}
            </button>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
