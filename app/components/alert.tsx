'use client';
import React, { FC } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import clsx from 'clsx';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  className?: string; // Optional custom class name
}

// Alert component
const Alert: FC<AlertProps> = ({ type, message, onClose, className }) => {
  // Function to get the appropriate icon based on the alert type
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="text-green-500" />;
      case 'error':
        return <FaTimesCircle className="text-red-500" />;
      case 'warning':
        return <FaExclamationTriangle className="text-yellow-500" />;
      case 'info':
        return <FaInfoCircle className="text-blue-500" />;
      default:
        return null;
    }
  };

  // Base styles for the alert component
  const baseStyles = 'flex items-center border-l-4 p-4 mb-4 rounded-lg';

  // Dynamic class names based on the alert type
  const typeStyles = clsx({
    'bg-green-100 border-green-500 text-green-700': type === 'success',
    'bg-red-100 border-red-500 text-red-700': type === 'error',
    'bg-yellow-100 border-yellow-500 text-yellow-700': type === 'warning',
    'bg-blue-100 border-blue-500 text-blue-700': type === 'info',
  });

  return (
    <div className={clsx(baseStyles, typeStyles, className)}>
      <div className="flex-shrink-0 mr-3">
        {getIcon()}
      </div>
      <div className="flex-1">
        <p className="font-medium">{message}</p>
      </div>
      {onClose && (
        <button
          className="ml-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FaTimesCircle />
        </button>
      )}
    </div>
  );
};

export default Alert;
