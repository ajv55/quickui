'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
  className?: string;
  buttonClassName?: string;
  listClassName?: string;
  itemClassName?: string;
  animationDuration?: number; // Duration in seconds for animation
  animationType?: 'fade' | 'scale' | 'slide'; // Different animation types
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onSelect,
  className,
  buttonClassName,
  listClassName,
  itemClassName,
  animationDuration = 0.3,
  animationType = 'fade', // Default to 'fade' animation
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  const getAnimation = () => {
    switch (animationType) {
      case 'fade':
        return { initial: { opacity: 0 }, animate: { opacity: isOpen ? 1 : 0 } };
      case 'scale':
        return { initial: { scale: 0 }, animate: { scale: isOpen ? 0 : 0.95 } };
      case 'slide':
        return { initial: { y: -15, opacity: 0 }, animate: { y: isOpen ?  0 : -5, opacity: isOpen ? 0 : 1 }};
      default:
        return { initial: { opacity: 0 }, animate: { opacity: isOpen ? 1 : 0 } };
    }
  };

  return (
    <div className={clsx('relative', className)}>
      <button
        className={clsx(
          'px-4 py-2 text-white bg-primary rounded-md shadow-md focus:outline-none',
          buttonClassName
        )}
        onClick={toggleDropdown}
      >
        {label}
      </button>

      <motion.ul
        className={clsx(
          'absolute left-0 z-30 mt-2 w-full bg-white rounded-md shadow-lg overflow-hidden',
          listClassName
        )}
        initial={getAnimation().initial}
        animate={getAnimation().animate}
        transition={{ duration: animationDuration }}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className={clsx(
              'px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 cursor-pointer',
              itemClassName
            )}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Dropdown;
