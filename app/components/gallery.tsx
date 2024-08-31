'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  width: number;  // Width of the image
  height: number; // Height of the image
}

interface GalleryProps {
  items: GalleryItem[];
  layout?: 'grid' | 'carousel'; // Allows for grid or carousel layout
  animation?: 'fade' | 'scale' | 'slide'; // Type of animation
  className?: string; // Additional custom class names
}

const Gallery: React.FC<GalleryProps> = ({
  items,
  layout = 'grid',
  animation = 'fade',
  className = '',
}) => {
  const gridLayout = layout === 'grid';
  const animationVariants = {
    fade: { opacity: 1, transition: { duration: 0.5 } },
    scale: { scale: 1, transition: { duration: 0.5 } },
    slide: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const animationInitial = {
    fade: { opacity: 0 },
    scale: { scale: 0.8 },
    slide: { x: 20, opacity: 0 },
  };

  return (
    <div
      className={clsx(
        'w-full h-full',
        {
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4': gridLayout,
          'flex overflow-x-auto space-x-4': !gridLayout,
        },
        className
      )}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="relative flex-shrink-0"
          initial={animationInitial[animation]}
          animate={animationVariants[animation]}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}  // Dynamic width
            height={item.height} // Dynamic height
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
