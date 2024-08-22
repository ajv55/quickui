'use client';

import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import clsx from 'clsx';

interface CarouselProps {
  items: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  interval = 3000,
  showControls = true,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  React.useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(goToNext, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval]);

  return (
    <div className={clsx('relative overflow-hidden', className)}>
      <AnimatePresence>
        {items.map((item, index) => (
          index === currentIndex && (
            <motion.div
              key={index} // Add key prop
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;

