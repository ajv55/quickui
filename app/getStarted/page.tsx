'use client';
import { FC } from 'react';
import Sidebar from '../components/startComponents/sidebar';
import ComponentPreview from '../components/startComponents/preview';

const GetStartedPage: FC = () => {
  return (
    <div className="flex  justify-start items-start h-screen overflow-scroll bg-background-dark">
      <main className="flex-grow p-10">
        <h1 className="text-4xl text-primary-dark font-bold mb-12">Explore Components</h1>

        {/* Button Component Preview */}
        <ComponentPreview
          id="button"
          title="Button Component"
          code={`<button className="bg-primary-dark text-white py-2 px-4 rounded-lg hover:bg-primary-light">Click Me</button>`}
        >
          <button className="bg-primary-dark text-white py-2 px-4 rounded-lg hover:bg-primary-light">
            Click Me
          </button>
        </ComponentPreview>

        {/* Card Component Preview */}
        <ComponentPreview
          id="card"
          title="Card Component"
          code={`<div className="p-6 bg-white rounded-lg shadow-lg">Card Content</div>`}
        >
          <div className="p-6 bg-white rounded-lg shadow-lg">
            Card Content
          </div>
        </ComponentPreview>

        {/* Modal Component Preview */}
        {/* <ComponentPreview
          id="modal"
          title="Modal Component"
          code={`<div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">Modal Content</div>`}
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              Modal Content
            </div>
          </div>
        </ComponentPreview> */}

        {/* Add more component previews as needed */}
      </main>
    </div>
  );
};

export default GetStartedPage;
