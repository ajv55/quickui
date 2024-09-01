'use client';

import React, { useState } from 'react';
import { FaStar, FaHeart, FaCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type RatingProps = {
  maxRating?: number;
  initialRating?: number;
  icon?: React.ReactNode;
  color?: string;
  onRatingChange?: (rating: number) => void;
};

const Rating: React.FC<RatingProps> = ({
  maxRating = 5,
  initialRating = 0,
  icon = <FaStar />,
  color = 'text-yellow-500',
  onRatingChange,
}) => {
  const [rating, setRating] = useState<number>(initialRating);

  const handleClick = (index: number) => {
    setRating(index);
    if (onRatingChange) {
      onRatingChange(index);
    }
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxRating }, (_, index) => (
        <motion.button
          key={index}
          onClick={() => handleClick(index + 1)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={clsx(
            'focus:outline-none',
            index < rating ? color : 'text-gray-300'
          )}
        >
          {React.cloneElement(icon as React.ReactElement, { size: 24 })}
        </motion.button>
      ))}
    </div>
  );
};

export default Rating;
