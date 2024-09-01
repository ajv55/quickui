'use client';
import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ProgressBarProps {
  progress: number; // Progress value should be between 0 and 100
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  animated?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  size = 'medium',
  color = 'primary',
  animated = false,
  className,
}) => {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  const sizeClasses = {
    small: 'h-2',
    medium: 'h-4',
    large: 'h-6',
  };

  const colorClasses = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
  };

  const baseClass = 'relative overflow-hidden rounded-full bg-gray-200';
  const animatedClass = animated ? 'transition-all duration-500 ease-out' : '';

  return (
    <div className={clsx(baseClass, sizeClasses[size], className)}>
      <motion.div
        className={clsx(
          'absolute top-0 left-0 h-full rounded-full',
          colorClasses[color],
          animatedClass
        )}
        style={{ width: `${clampedProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
