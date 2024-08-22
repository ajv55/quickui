'use client';
import { FC } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'light' | 'dark' | 'outline';
  size?: 'small' | 'medium' | 'large';
  text: string;
  className?: string; // Additional custom classes for the badge
  icon?: React.ReactNode; // Optional icon to be included in the badge
}

const Badge: FC<BadgeProps> = ({
  variant = 'default',
  size = 'medium',
  text,
  className,
  icon
}) => {
  const baseStyles = "inline-flex items-center font-semibold rounded-full px-3 py-1.5";
  const sizeStyles = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-lg"
  };
  
  const variantStyles = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-gray-800",
    error: "bg-red-500 text-white",
    info: "bg-teal-500 text-white",
    light: "bg-white text-gray-800 border border-gray-300",
    dark: "bg-gray-800 text-white",
    outline: "bg-transparent border border-gray-800 text-gray-800"
  };

  return (
    <span
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </span>
  );
};

export default Badge;
