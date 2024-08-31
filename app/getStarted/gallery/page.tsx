'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Gallery from '../../components/gallery'; 
import { FaCode, FaCopy } from 'react-icons/fa';

const GalleryShowcase: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (index: number) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const galleryExamples = [
    {
      type: 'Grid Layout with Fade Animation',
      render: (
        <Gallery
          items={[
            { id: '1', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg', alt: 'Photo 1', width: 600, height: 400 },
            { id: '2', src: 'https://t4.ftcdn.net/jpg/06/93/50/89/240_F_693508921_gKBFzoKzSriGPK8jMPFwtGo7efIyUszw.jpg', alt: 'Photo 2', width: 600, height: 400 },
            { id: '3', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazing-animal-beautiful-beautifull.jpg', alt: 'Photo 3', width: 600, height: 400 },
            { id: '4', src: 'https://www.shutterstock.com/image-photo/landscape-long-exposure-majestic-clouds-600nw-2191117807.jpg', alt: 'Photo 4', width: 600, height: 400 },
          ]}
          layout="grid"
          animation="fade"
        />
      ),
      code: `<Gallery
  items={[
    { id: '1', src: '/images/photo1.jpg', alt: 'Photo 1', width: 600, height: 400 },
    { id: '2', src: '/images/photo2.jpg', alt: 'Photo 2', width: 600, height: 400 },
    { id: '3', src: '/images/photo3.jpg', alt: 'Photo 3', width: 600, height: 400 },
    { id: '4', src: '/images/photo4.jpg', alt: 'Photo 4', width: 600, height: 400 },
  ]}
  layout="grid"
  animation="fade"
/>`,
    },
    {
      type: 'Carousel Layout with Scale Animation',
      render: (
        <Gallery
          items={[
            { id: '1', src: 'https://www.shutterstock.com/image-photo/landscape-long-exposure-majestic-clouds-600nw-2191117807.jpg', alt: 'Photo 1', width: 600, height: 400 },
            { id: '2', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazing-animal-beautiful-beautifull.jpg', alt: 'Photo 2', width: 600, height: 400 },
            { id: '3', src: 'https://t4.ftcdn.net/jpg/06/93/50/89/240_F_693508921_gKBFzoKzSriGPK8jMPFwtGo7efIyUszw.jpg', alt: 'Photo 3', width: 600, height: 400 },
            { id: '4', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg', alt: 'Photo 4', width: 600, height: 400 },
          ]}
          layout="carousel"
          animation="scale"
        />
      ),
      code: `<Gallery
  items={[
    { id: '1', src: '/images/photo1.jpg', alt: 'Photo 1', width: 600, height: 400 },
    { id: '2', src: '/images/photo2.jpg', alt: 'Photo 2', width: 600, height: 400 },
    { id: '3', src: '/images/photo3.jpg', alt: 'Photo 3', width: 600, height: 400 },
    { id: '4', src: '/images/photo4.jpg', alt: 'Photo 4', width: 600, height: 400 },
  ]}
  layout="carousel"
  animation="scale"
/>`,
    },
    {
      type: 'Custom Styled Gallery with Slide Animation',
      render: (
        <Gallery
          items={[
            { id: '1', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazing-animal-beautiful-beautifull.jpg', alt: 'Photo 1', width: 600, height: 400 },
            { id: '2', src: 'https://www.shutterstock.com/image-photo/landscape-long-exposure-majestic-clouds-600nw-2191117807.jpg', alt: 'Photo 2', width: 600, height: 400 },
            { id: '3', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg', alt: 'Photo 3', width: 600, height: 400 },
            { id: '4', src: 'https://t4.ftcdn.net/jpg/06/93/50/89/240_F_693508921_gKBFzoKzSriGPK8jMPFwtGo7efIyUszw.jpg', alt: 'Photo 4', width: 600, height: 400 },
          ]}
          layout="grid"
          animation="slide"
          className="bg-gray-800 p-4 rounded-lg"
        />
      ),
      code: `<Gallery
  items={[
    { id: '1', src: '/images/photo1.jpg', alt: 'Photo 1', width: 600, height: 400 },
    { id: '2', src: '/images/photo2.jpg', alt: 'Photo 2', width: 600, height: 400 },
    { id: '3', src: '/images/photo3.jpg', alt: 'Photo 3', width: 600, height: 400 },
    { id: '4', src: '/images/photo4.jpg', alt: 'Photo 4', width: 600, height: 400 },
  ]}
  layout="grid"
  animation="slide"
  className="bg-gray-800 p-4 rounded-lg"
/>`,
    },
  ];

  return (
    <div className="w-full h-screen overflow-scroll bg-background-dark p-8">
      <h1 className="text-6xl font-bold bg-gradient-to-br from-primary-light via-secondary-light to-secondary-light bg-clip-text text-transparent mb-4">
        Gallery Component Showcase
      </h1>

      <section className="flex flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold text-secondary-light mb-4">Introduction</h2>
        <p className="text-lg text-left text-text-dark mb-4">
          The <code className="text-primary-dark">Gallery</code> component is a flexible and visually appealing component for displaying images with various layouts and animations. Here are some examples showcasing different configurations.
        </p>
        <h2 className="text-3xl font-semibold text-secondary-light">Usage Examples</h2>
      </section>

      <section>
        {galleryExamples.map((example, index) => (
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

export default GalleryShowcase;
