'use client';

import React from 'react';
import clsx from 'clsx';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number; // Index of the current step
  className?: string;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  currentStep,
  className
}) => {
  return (
    <div className={clsx('flex items-center', className)}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={clsx(
            'relative flex items-center',
            index < currentStep ? 'text-blue-600' : 'text-gray-500',
            'flex-1'
          )}
        >
          <div
            className={clsx(
              'w-8 h-8 rounded-full flex items-center justify-center border-2',
              index < currentStep ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
            )}
          >
            <span
              className={clsx(
                'text-white font-bold',
                index === currentStep && 'text-blue-600'
              )}
            >
              {index + 1}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={clsx(
                'w-20 h-0.5 bg-gray-300',
                index < currentStep && 'bg-blue-600'
              )}
            />
          )}
          <div
            className={clsx(
              'absolute top-8 transform text-xs mt-1 text-center',
              'whitespace-nowrap'
            )}
            style={{ width: 'max-content' }} // Ensure text width adjusts to fit
          >
            {step}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;

