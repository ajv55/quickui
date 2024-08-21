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
}

const CustomButton: FC<CustomButtonProps> = ({ variant = 'default', size = 'medium', children, className, style }) => {
  const baseStyles = "font-semibold rounded-lg focus:outline-none";
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg"
  };
  
  // Default variant styles
  const variantStyles = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-primary-light text-white hover:bg-primary-dark",
    secondary: "bg-secondary-light text-white hover:bg-secondary-dark",
    animated: "bg-gradient-to-r from-primary-light via-primary-dark to-secondary-light text-white"
  };

  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      style={style}
    >
      {children}
    </button>
  );
};

const AnimatedButton: FC<CustomButtonProps> = ({ children, className, style }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={clsx("font-semibold rounded-lg px-6 py-3 text-lg shadow-lg", className)}
    style={style}
  >
    {children}
  </motion.button>
);

export { CustomButton, AnimatedButton };
