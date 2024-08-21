'use client';
import React, { useState } from 'react';
import { VersatileForm, VersatileInputField } from '../../components/form';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaCalendar, FaAddressCard, FaSearch, FaGlobe, FaCopy } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';

const Showcase: React.FC = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    date: '',
    search: '',
    address: ''
  });

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000); // Reset the copied state after 2 seconds
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formValues);
  };

  return (
    <div className="py-6 px-4 w-full bg-background-dark h-screen overflow-scroll space-y-12">
      <div className="text-center flex flex-col items-start justify-start mb-8">
        <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">Form Showcase</h1>
        <section className="flex justify-start items-start flex-col">
          <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
          <p className="text-lg text-left text-text-dark mb-4">
            The <code className="text-primary-dark">Form</code> component is a comprehensive UI element designed to collect and validate user input across various fields and layouts. It supports different field types, validation rules, and submission methods. Below are examples demonstrating various configurations and use cases of the Form component.
          </p>
          <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
        </section>
      </div>


      {/* 1. Basic Form */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">Basic Form</h2>
        <p className="mb-4 text-lg text-text-light">
          A simple form with basic text inputs. This example demonstrates a standard form setup with minimal styling.
        </p>
        <VersatileForm
          onSubmit={handleSubmit}
          className="border max-w-md mx-auto border-gray-900 p-6 rounded-md"
          backgroundColor="white"
          borderColor="gray-900"
        >
          <VersatileInputField
            id="username"
            name="username"
            placeholder="Username"
            inputClassName=' outline text-zinc-900 outline-zinc-400 border-red-500'
            value={formValues.username}
            onChange={handleChange}
            styleType="basic"
          />
          <VersatileInputField
            id="password"
            name="password"
            type="password"
            inputClassName=' outline text-zinc-900 outline-zinc-400 border-red-500'
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            styleType="basic"
          />
        </VersatileForm>
        <div className="mt-4 relative">
          <CopyToClipboard text={`<VersatileForm onSubmit={handleSubmit} className="border border-gray-900 p-6 rounded-md" backgroundColor="white" borderColor="gray-900">
  <VersatileInputField
    id="username"
    name="username"
    placeholder="Username"
    value={formValues.username}
    onChange={handleChange}
    styleType="basic"
  />
  <VersatileInputField
    id="password"
    name="password"
    type="password"
    placeholder="Password"
    value={formValues.password}
    onChange={handleChange}
    styleType="basic"
  />
  <button type="submit" className="bg-indigo-500 text-white p-2 rounded-md transition-transform duration-300 hover:scale-105">Submit</button>
</VersatileForm>`}>
            <button onClick={() => handleCopy(1)} className="flex w-full justify-end items-center  text-primary-light">
              <FaCopy size={20} className="mr-2" />
              {copiedIndex === 1 ? 'Copied!' : 'Copy'}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileForm onSubmit={handleSubmit} className="border border-gray-900 p-6 rounded-md" backgroundColor="white" borderColor="gray-900">
  <VersatileInputField
    id="username"
    name="username"
    placeholder="Username"
    value={formValues.username}
    onChange={handleChange}
    styleType="basic"
  />
  <VersatileInputField
    id="password"
    name="password"
    type="password"
    placeholder="Password"
    value={formValues.password}
    onChange={handleChange}
    styleType="basic"
  />
  <button type="submit" className="bg-indigo-500 text-white p-2 rounded-md transition-transform duration-300 hover:scale-105">Submit</button>
</VersatileForm>`}
          </SyntaxHighlighter>
        </div>
      </section>

      {/* 2. Form with Icons */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">Form with Icons</h2>
        <p className="mb-4 text-text-light">
          This form includes input fields with icons for better visual context. Icons help users understand the input type.
        </p>
        <VersatileForm
          onSubmit={handleSubmit}
          className="border max-w-md mx-auto border-gray-300 p-6 rounded-md"
          backgroundColor="white"
          borderColor="gray-300"
        >
          <VersatileInputField
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            value={formValues.email}
            onChange={handleChange}
            styleType="icon"
            icon={<FaEnvelope size={20} />}
            backgroundColor="white"
            borderColor="gray-300"
          />
          <VersatileInputField
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone number"
            value={formValues.phone}
            onChange={handleChange}
            styleType="icon"
            icon={<FaPhone size={20} />}
            backgroundColor="white"
            borderColor="gray-300"
          />
        </VersatileForm>
        <div className="mt-4">
          <CopyToClipboard text={`<VersatileForm onSubmit={handleSubmit} className="border border-gray-300 p-6 rounded-md" backgroundColor="white" borderColor="gray-300">
  <VersatileInputField
    id="email"
    name="email"
    type="email"
    placeholder="Email address"
    value={formValues.email}
    onChange={handleChange}
    styleType="icon"
    icon={<FaEnvelope size={20} />}
    backgroundColor="white"
    borderColor="gray-300"
  />
  <VersatileInputField
    id="phone"
    name="phone"
    type="tel"
    placeholder="Phone number"
    value={formValues.phone}
    onChange={handleChange}
    styleType="icon"
    icon={<FaPhone size={20} />}
    backgroundColor="white"
    borderColor="gray-300"
  />
  <button type="submit" className="bg-indigo-500 text-white p-2 rounded-md transition-transform duration-300 hover:scale-105">Submit</button>
</VersatileForm>`}>
            <button onClick={() => handleCopy(2)} className="flex w-full justify-end items-center  text-primary-light">
              <FaCopy size={20} className="mr-2" />
              {copiedIndex === 2 ? 'Copied!' : 'Copy'}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileForm onSubmit={handleSubmit} className="border border-gray-300 p-6 rounded-md" backgroundColor="white" borderColor="gray-300">
  <VersatileInputField
    id="email"
    name="email"
    type="email"
    placeholder="Email address"
    value={formValues.email}
    onChange={handleChange}
    styleType="icon"
    icon={<FaEnvelope size={20} />}
    backgroundColor="white"
    borderColor="gray-300"
  />
  <VersatileInputField
    id="phone"
    name="phone"
    type="tel"
    placeholder="Phone number"
    value={formValues.phone}
    onChange={handleChange}
    styleType="icon"
    icon={<FaPhone size={20} />}
    backgroundColor="white"
    borderColor="gray-300"
  />
  <button type="submit" className="bg-indigo-500 text-white p-2 rounded-md transition-transform duration-300 hover:scale-105">Submit</button>
</VersatileForm>`}
          </SyntaxHighlighter>
        </div>
      </section>

      {/* 3. Form with Additional Fields */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-primary-light font-semibold mb-4">Form with Additional Fields</h2>
        <p className="mb-4 text-text-light">
          This form includes additional fields such as date and address. It demonstrates a more comprehensive form setup.
        </p>
        <VersatileForm
          onSubmit={handleSubmit}
          className="border max-w-md mx-auto border-gray-300 p-6 rounded-md"
          backgroundColor="bg-background-light"
          borderColor="gray-300"
        >
          <VersatileInputField
            id="date"
            name="date"
            type="date"
            placeholder="Select date"
            inputClassName='text-gray-600'
            value={formValues.date}
            onChange={handleChange}
            styleType="basic"
          />
          <VersatileInputField
            id="search"
            name="search"
            type="search"
            placeholder="Search"
            value={formValues.search}
            onChange={handleChange}
            styleType="icon"
            icon={<FaSearch size={20} />}
            backgroundColor="white"
            borderColor="gray-300"
          />
          <VersatileInputField
            id="address"
            name="address"
            placeholder="Address"
            value={formValues.address}
            onChange={handleChange}
            styleType="basic"
          />
        </VersatileForm>
        <div className="mt-4">
          <CopyToClipboard text={`<VersatileForm onSubmit={handleSubmit} className="border border-gray-300 p-6 rounded-md" backgroundColor="white" borderColor="gray-300">
  <VersatileInputField
    id="date"
    name="date"
    type="date"
    placeholder="Select date"
    value={formValues.date}
    onChange={handleChange}
    styleType="basic"
  />
  <VersatileInputField
    id="search"
    name="search"
    type="search"
    placeholder="Search"
    value={formValues.search}
    onChange={handleChange}
    styleType="icon"
    icon={<FaSearch size={20} />}
    backgroundColor="white"
    borderColor="gray-300"
  />
  <VersatileInputField
    id="address"
    name="address"
    placeholder="Address"
    value={formValues.address}
    onChange={handleChange}
    styleType="basic"
  />
  <button type="submit" className="bg-indigo-500 text-white p-2 rounded-md transition-transform duration-300 hover:scale-105">Submit</button>
</VersatileForm>`}>
            <button onClick={() => handleCopy(3)} className="flex w-full justify-end items-center text-primary-light">
              <FaCopy size={20} className="mr-2" />
              {copiedIndex === 3 ? 'Copied!' : 'Copy'}
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language="typescript" style={duotoneDark}>
            {`<VersatileForm onSubmit={handleSubmit} className="border border-gray-300 p-6 rounded-md" backgroundColor="white" borderColor="gray-300">
  <VersatileInputField
    id="date"
    name="date"
    type="date"
    placeholder="Select date"
    value={formValues.date}
    onChange={handleChange}
    styleType="basic"
  />
  <VersatileInputField
    id="search"
    name="search"
    type="search"
    placeholder="Search"
    value={formValues.search}
    onChange={handleChange}
    styleType="icon"
    icon={<FaSearch size={20} />}
    backgroundColor="white"
    borderColor="gray-300"
  />
  <VersatileInputField
    id="address"
    name="address"
    placeholder="Address"
    value={formValues.address}
    onChange={handleChange}
    styleType="basic"
  />
  <button type="submit" className="bg-indigo-500 text-white p-2 rounded-md transition-transform duration-300 hover:scale-105">Submit</button>
</VersatileForm>`}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
