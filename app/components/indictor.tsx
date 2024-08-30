'use client';

import React from 'react';
import ProgressBar from '../components/mainPage/progressBar';
import CircularProgress from './circularProgress';
import StepIndicator from './step';
import clsx from 'clsx';

interface IndicatorsProps {
  type: 'progress-bar' | 'circular-progress' | 'step-indicator';
  progressValue?: number; // For ProgressBar and CircularProgress
  size?: number; // For CircularProgress
  strokeWidth?: number; // For CircularProgress
  steps?: string[]; // For StepIndicator
  currentStep?: number; // For StepIndicator
  className?: string; // Additional class for styling
}

const Indicators: React.FC<IndicatorsProps> = ({
  type,
  progressValue = 0,
  size = 100,
  strokeWidth = 8,
  steps = [],
  currentStep = 0,
  className
}) => {
  return (
    <div className={clsx('flex flex-col items-center justify-center', className)}>
      {type === 'progress-bar' && (
        <ProgressBar progressBarClassName='bg-blue-400' value={progressValue} className="mb-4" />
      )}
      {type === 'circular-progress' && (
        <CircularProgress
          value={progressValue}
          size={size}
          strokeWidth={strokeWidth}
          className="mb-4"
        />
      )}
      {type === 'step-indicator' && (
        <StepIndicator
          steps={steps}
          currentStep={currentStep}
          className="mb-4"
        />
      )}
    </div>
  );
};

export default Indicators;
