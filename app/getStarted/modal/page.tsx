'use client';
import React, { FC, useState } from 'react';
import Modal from '../../components/modal';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {  atomDark, dark, duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { FaCopy } from 'react-icons/fa';

const modalExamples = [
  {
    id: 'default',
    title: 'Default Modal',
    description: 'A simple modal with default styling. Ideal for general use cases where basic modal functionality is needed.',
    content: <p>This is a simple modal with default styling.</p>,
    footer: <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Close</button>,
    code: `
<Modal
  isOpen={true}
  onClose={() => {}}
  title="Default Modal"
  titleColor="text-black"
  backgroundColor="bg-white"
  textColor="text-gray-800"
  animationType="fade" // Default animation
>
  <p>This is a simple modal with default styling.</p>
  <div className="mt-4">
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Close</button>
  </div>
</Modal>
`,
    animationType: 'fade' as 'fade',
  },
  {
    id: 'slide-right',
    title: 'Slide Right Modal',
    description: 'A modal that slides in from the right side of the screen.',
    content: <p>This modal slides in from the right.</p>,
    footer: <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Close</button>,
    code: `
<Modal
  isOpen={true}
  onClose={() => {}}
  title="Slide Right Modal"
  titleColor="text-green-600"
  backgroundColor="bg-gray-800"
  textColor="text-white"
  animationType="slide-right" // Slide right animation
>
  <p>This modal slides in from the right.</p>
  <div className="mt-4">
    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Close</button>
  </div>
</Modal>
`,
    animationType: 'slide-right' as 'slide-right',
  },
  {
    id: 'slide-left',
    title: 'Slide Left Modal',
    description: 'A modal that slides in from the left side of the screen.',
    content: <p>This modal slides in from the left.</p>,
    footer: <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Close</button>,
    code: `
<Modal
  isOpen={true}
  onClose={() => {}}
  title="Slide Left Modal"
  titleColor="text-blue-600"
  backgroundColor="bg-gray-800"
  textColor="text-white"
  animationType="slide-left" // Slide left animation
>
  <p>This modal slides in from the left.</p>
  <div className="mt-4">
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Close</button>
  </div>
</Modal>
`,
    animationType: 'slide-left' as 'slide-left',
  },
  {
    id: 'slide-top',
    title: 'Slide Top Modal',
    description: 'A modal that slides in from the top of the screen.',
    content: <p>This modal slides in from the top.</p>,
    footer: <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Close</button>,
    code: `
<Modal
  isOpen={true}
  onClose={() => {}}
  title="Slide Top Modal"
  titleColor="text-red-600"
  backgroundColor="bg-gray-100"
  textColor="text-gray-700"
  animationType="slide-top" // Slide top animation
>
  <p>This modal slides in from the top.</p>
  <div className="mt-4">
    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">Close</button>
  </div>
</Modal>
`,
    animationType: 'slide-top' as 'slide-top',
  },
  {
    id: 'slide-bottom',
    title: 'Slide Bottom Modal',
    description: 'A modal that slides in from the bottom of the screen.',
    content: <p>This modal slides in from the bottom.</p>,
    footer: <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">Close</button>,
    code: `
<Modal
  isOpen={true}
  onClose={() => {}}
  title="Slide Bottom Modal"
  titleColor="text-purple-600"
  backgroundColor="bg-gray-200"
  textColor="text-black"
  animationType="slide-bottom" // Slide bottom animation
>
  <p>This modal slides in from the bottom.</p>
  <div className="mt-4">
    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">Close</button>
  </div>
</Modal>
`,
    animationType: 'slide-bottom' as 'slide-bottom',
  },
];

const ModalShowcase: FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };


  const handleOpenModal = (id: string) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="p-8 w-full bg-background-dark overflow-scroll h-screen">
      <div className="text-center flex flex-col items-start justify-start mb-8">
        <h1 className="lg:text-6xl text-4xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">Modal Showcase</h1>
        <section className="flex justify-start items-start flex-col">
          <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
          <p className="text-lg text-left text-text-dark mb-4">
            The <code className="text-primary-dark">Modal</code> component is a flexible and interactive UI element designed to capture user attention and present important information or actions. It supports various styles and configurations, such as default, informational, confirmation, and custom layouts. Below are examples demonstrating different uses of the Modal component.
          </p>
          <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
        </section>
      </div>
      {modalExamples.map((modal: any, index: number) => (
        <div key={modal.id} className="mb-12 border border-gray-200 rounded-lg bg-background-light shadow-lg p-6">
          <h3 className="text-3xl font-semibold mb-3 text-primary-light">{modal.title}</h3>
          <p className="mb-4 text-lg text-text-light">{modal.description}</p>
          <button
            onClick={() => handleOpenModal(modal.id)}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Open {modal.title}
          </button>

          {openModal === modal.id && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <Modal
                isOpen={true}
                onClose={handleCloseModal}
                title={modal.title}
                titleColor={modal.titleColor}
                backgroundColor={modal.backgroundColor}
                textColor={modal.textColor}
                animationType={modal.animationType}
              >
                {modal.content}
                <div onClick={handleCloseModal} className="mt-4">
                  {modal.footer}
                </div>
              </Modal>
            </div>
          )}

          <div className="mt-6 relative">
            <SyntaxHighlighter language="typescript" style={duotoneDark} className="p-4 rounded-lg bg-gray-100">
              {modal.code}
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
    </div>
  );
};

export default ModalShowcase;

