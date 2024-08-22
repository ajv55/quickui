'use client';

import React, { useState } from 'react';
import { FaCopy, FaCheck, FaTimes } from 'react-icons/fa';
import clsx from 'clsx';
import CopyToClipboard from 'react-copy-to-clipboard';

interface ClipboardProps {
  text: string;
  successMessage?: string;
  errorMessage?: string;
  className?: string;
  buttonClassName?: string;
}

const Clipboard: React.FC<ClipboardProps> = ({
  text,
  successMessage = 'Copied!',
  errorMessage = 'Failed to copy!',
  className,
  buttonClassName,
}) => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCopy = (success: boolean) => {
    if (success) {
      setCopyStatus('success');
      setTimeout(() => setCopyStatus('idle'), 2000); // Reset status after 2 seconds
    } else {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2000); // Reset status after 2 seconds
    }
  };

  return (
    <div className={clsx('flex items-center', className)}>
      <CopyToClipboard text={text} onCopy={(success: any) => handleCopy(success)}>
        <button
          className={clsx(
            'p-2 rounded transition-colors',
            copyStatus === 'idle' && 'bg-gray-300 hover:bg-gray-400 text-gray-800',
            copyStatus === 'success' && 'bg-green-500 hover:bg-green-600 text-white',
            copyStatus === 'error' && 'bg-red-500 hover:bg-red-600 text-white',
            buttonClassName
          )}
        >
          {copyStatus === 'idle' && <FaCopy />}
          {copyStatus === 'success' && <FaCheck />}
          {copyStatus === 'error' && <FaTimes />}
        </button>
      </CopyToClipboard>
      {copyStatus !== 'idle' && (
        <span
          className={clsx(
            'ml-2 text-sm font-semibold transition-colors',
            copyStatus === 'success' ? 'text-green-500' : 'text-red-500'
          )}
        >
          {copyStatus === 'success' ? successMessage : errorMessage}
        </span>
      )}
    </div>
  );
};

export default Clipboard;
