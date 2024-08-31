'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'default' | 'outlined' | 'minimal' | 'round' | 'primary'; // Add more styles if needed
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'default',
}) => {
  const handleClick = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleClick(currentPage - 1)}
        className={clsx(
          'px-4 py-2 border rounded-lg transition-colors duration-300',
          variant === 'default' && 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300',
          variant === 'outlined' && 'bg-transparent border-gray-500 text-gray-500 hover:bg-gray-100',
          variant === 'minimal' && 'bg-transparent text-gray-700 hover:bg-gray-100',
          variant === 'round' && 'bg-blue-600 text-white rounded-full hover:bg-blue-700',
          variant === 'primary' && 'bg-blue-700 text-white border-blue-700 hover:bg-blue-800'
        )}
      >
        &lt;
      </motion.button>
      {Array.from({ length: totalPages }, (_, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick(i + 1)}
          className={clsx(
            'px-4 py-2 border rounded-lg transition-colors duration-300',
            currentPage === i + 1 ? 
            clsx(
              variant === 'default' && 'bg-blue-600 text-white border-blue-600',
              variant === 'outlined' && 'bg-blue-100 text-blue-600 border-blue-600',
              variant === 'minimal' && 'bg-blue-50 text-blue-600 border-blue-600',
              variant === 'round' && 'bg-blue-600 text-white',
              variant === 'primary' && 'bg-blue-700 text-white border-blue-700'
            ) 
            : 
            clsx(
              variant === 'default' && 'bg-transparent text-gray-700 border-gray-300 hover:bg-gray-100',
              variant === 'outlined' && 'bg-transparent text-gray-500 border-gray-500 hover:bg-gray-100',
              variant === 'minimal' && 'bg-transparent text-gray-700 hover:bg-gray-100',
              variant === 'round' && 'bg-transparent text-blue-600 hover:bg-blue-50',
              variant === 'primary' && 'bg-transparent text-blue-600 border-blue-600 hover:bg-blue-100'
            )
          )}
        >
          {i + 1}
        </motion.button>
      ))}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleClick(currentPage + 1)}
        className={clsx(
          'px-4 py-2 border rounded-lg transition-colors duration-300',
          variant === 'default' && 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300',
          variant === 'outlined' && 'bg-transparent border-gray-500 text-gray-500 hover:bg-gray-100',
          variant === 'minimal' && 'bg-transparent text-gray-700 hover:bg-gray-100',
          variant === 'round' && 'bg-blue-600 text-white rounded-full hover:bg-blue-700',
          variant === 'primary' && 'bg-blue-700 text-white border-blue-700 hover:bg-blue-800'
        )}
      >
        &gt;
      </motion.button>
    </div>
  );
};

export default Pagination;
