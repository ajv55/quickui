'use client';
import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaCalendar, FaAddressCard, FaSearch, FaGlobe } from 'react-icons/fa';

interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  styleType?: 'basic' | 'rounded' | 'icon' | 'outlined' | 'floating-label'; // Added floating-label
  icon?: React.ReactNode;
  className?: string;
  label?: string; // Added for custom label
  backgroundColor?: string; // Added for custom background color
  borderColor?: string; // Added for custom border color
  inputClassName?: string; // Added for custom input styles
}

interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string; // Added for custom background color
  borderColor?: string; // Added for custom border color
  buttonClassName?: string; // Added for custom button styles
}

const VersatileForm: React.FC<FormProps> = ({
  onSubmit,
  children,
  className,
  backgroundColor = 'bg-white', // Default background color
  borderColor = 'gray-300', // Default border color
  buttonClassName = ''
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className={clsx(
        'space-y-4 p-4 rounded-lg shadow-md',
        className,
        `${backgroundColor}`,
        `border border-${borderColor}`
      )}
    >
      {children}
      <motion.button
        type="submit"
        className={clsx(
          'px-4 py-2 rounded-md font-semibold text-white transition-transform duration-300 ease-in-out',
          buttonClassName,
          `bg-blue-500 hover:bg-blue-600`
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Submit
      </motion.button>
    </form>
  );
};

const VersatileInputField: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  styleType = 'basic',
  icon,
  className,
  label,
  backgroundColor = 'white', // Added for custom background color
  borderColor = 'gray-300', // Added for custom border color
  inputClassName // Added for custom input styles
}) => {
  const baseStyles = `p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-${backgroundColor} border-${borderColor}`;
  const styleClasses = {
    basic: baseStyles,
    rounded: `${baseStyles} rounded-full`,
    icon: `flex items-center border p-2 rounded-md bg-${backgroundColor} border-${borderColor}`,
    outlined: `border-2 border-${borderColor} p-2 rounded-md bg-${backgroundColor}`,
    'floating-label': `relative p-2 bg-transparent border-${borderColor} border-2 rounded-md`
  };

  return (
    <motion.div
      className={clsx(styleClasses[styleType], className)}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {styleType === 'floating-label' && label && (
        <label
          htmlFor={id}
          className={clsx(
            'absolute top-2 left-2 text-gray-500 transition-all duration-300',
            value || placeholder ? 'text-xs transform -translate-y-4 scale-75' : 'text-base'
          )}
        >
          {label}
        </label>
      )}
      {icon && styleType !== 'floating-label' && (
        <span className="mr-2 text-gray-500">{icon}</span>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={styleType === 'floating-label' ? '' : placeholder} // Avoid placeholder overlap with floating label
        value={value}
        onChange={onChange}
        className={clsx(
          `flex-1 bg-transparent border-none outline-none ${styleType === 'floating-label' ? 'pt-6' : ''}`,
          inputClassName // Apply custom input styles
        )}
      />
    </motion.div>
  );
};

export { VersatileForm, VersatileInputField };
