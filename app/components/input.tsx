'use client';
import React from 'react';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface VersatileInputFieldProps {
  id: string;
  type?: 'text' | 'password' | 'email' | 'tel' | 'date' | 'number' | 'url'; // More types as needed
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactElement<IconType>; // Optional icon
  styleType?: 'basic' | 'rounded' | 'outlined' | 'icon' | 'animated' | 'glowing'; // Added 'glowing'
  className?: string; // Additional classes for further customization
  errorMessage?: string; // Optional error message
}

const VersatileInputField: React.FC<VersatileInputFieldProps> = ({
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  styleType = 'basic',
  className = '',
  errorMessage,
}) => {
  const baseStyles = 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2';
  const styleVariants = {
    basic: 'border-gray-300 bg-white text-gray-800',
    rounded: 'border-gray-300 rounded-full shadow-md',
    outlined: 'border-blue-500 border-2 text-blue-500',
    icon: 'border-gray-300 rounded-lg flex items-center',
    animated: 'border-gray-300 bg-white text-gray-800 transition-transform duration-300 ease-in-out transform hover:scale-105',
    glowing: 'border-gray-300 bg-white text-gray-800 animate-pulse transition-shadow duration-300 focus:ring-4 focus:ring-blue-500', // Added glowing style
  };

  return (
    <div className={clsx('mb-4', { 'relative': styleType === 'icon' }, className)}>
      <label htmlFor={id} className="block text-gray-700 text-sm font-semibold mb-2">
        {placeholder}
      </label>
      <div className={clsx('flex items-center', { 'border': styleType === 'icon' })}>
        {styleType === 'icon' && icon && (
          <span className="flex items-center px-4 text-gray-500">
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsx(baseStyles, styleVariants[styleType], className)}
        />
      </div>
      {errorMessage && (
        <motion.div
          className="text-red-600 text-sm mt-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {errorMessage}
        </motion.div>
      )}
    </div>
  );
};

export default VersatileInputField;
