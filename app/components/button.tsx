'use client';
import { FC } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface CustomButtonProps {
  variant?: 'default' | 'primary' | 'secondary' | 'animated';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string; // Additional custom classes
  style?: React.CSSProperties; // Inline styles
  disabled?: boolean; // Optional disabled state
}

const CustomButton: FC<CustomButtonProps> = ({ variant = 'default', size = 'medium', children, className, style, disabled = false }) => {
  const baseStyles = "font-semibold rounded-lg focus:outline-none transition-transform duration-300 ease-in-out transform";
  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };
  
  // Default variant styles with enhanced appearance
  const variantStyles = {
    default: "bg-gray-300 text-gray-800 shadow-md hover:bg-gray-400 active:scale-95",
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:from-blue-600 hover:to-purple-700 active:scale-95",
    secondary: "bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg hover:from-green-500 hover:to-teal-600 active:scale-95",
    animated: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-lg hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 active:scale-95"
  };

  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className, { 'opacity-50 cursor-not-allowed': disabled })}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const AnimatedButton: FC<CustomButtonProps> = ({ children, className, style }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={clsx("font-semibold rounded-lg px-6 py-3 text-lg shadow-lg transition-transform duration-300 ease-in-out", className)}
    style={style}
  >
    {children}
  </motion.button>
);

export { CustomButton, AnimatedButton };