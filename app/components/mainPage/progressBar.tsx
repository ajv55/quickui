'use client';

import React from 'react';
import clsx from 'clsx';

interface ProgressBarProps {
  value: number; // Value should be between 0 and 100
  className?: string;
  progressBarClassName?: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, className, progressBarClassName }) => {
  return (
    <div className={clsx('relative w-full h-4 bg-gray-200 rounded-full', className)}>
      <div
        className={clsx('absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-width', progressBarClassName)}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
