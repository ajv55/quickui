'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { FaImage } from "react-icons/fa6";

type SkeletonProps = {
  variant: 'text' | 'card' | 'image' | 'spinner';
  width?: string;
  height?: string;
  color?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ variant, width, height, color }) => {
  const baseClasses = 'bg-gray-300 animate-pulse';

  const variants = {
    text: { width, height, className: 'rounded' },
    card: { 
      width, 
      height, 
      className: 'p-4 border border-gray-200 rounded shadow',
      img: { width: '100%', height: '150px', className: 'mb-4 rounded-lg' },
      text: { width: '60%', height: '1rem', className: 'rounded-full' }
    },
    image: { width, height, className: 'rounded relative rounded-lg' },
    spinner: { width, height, color, className: 'relative flex items-center justify-center' },
  };

  if (variant === 'spinner') {
    return (
      <div className={`${variants.spinner.className}`} style={{ width, height }}>
        <div className="relative w-full h-full">
          {/* Outer border */}
          <div className={`absolute inset-0 border-4 border-gray-300 rounded-full`} />
          {/* Rotating spinner */}
          <motion.div
            className={`absolute inset-0 border-4 border-${color || 'gray-500'} border-t-transparent rounded-full`}
            style={{
              borderColor: `${color || 'gray-500'} transparent transparent transparent`,
              width: '100%',
              height: '100%',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`${baseClasses} ${variants.card.className}`} style={{ width, height }}>
        <div className={`${baseClasses} ${variants.card.img.className}`} />
        <div className={`${baseClasses} ${variants.card.text.className}`} style={{ width: '60%', height: '1rem' }} />
        <div className={`${baseClasses} ${variants.card.text.className}`} style={{ width: '40%', height: '0.8rem' }} />
      </div>
    );
  }

  if (variant === 'image') {
    return (
      <div className={`${baseClasses} ${variants.image.className}`} style={{ width, height }}>
        <div className={`flex items-center justify-center ${baseClasses}`} style={{ width: '100%', height: '100%' }}>
          <FaImage size={50} className='text-white' />
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseClasses} rounded`} style={{ width, height }} />
  );
};

export default Skeleton;
