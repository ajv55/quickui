'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface PopoverProps {
  trigger: JSX.Element;
  content: JSX.Element;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  variant?: 'default' | 'dark' | 'light';
  offset?: number;
  triggerOnHover?: boolean; // New prop to control hover behavior
}

const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  placement = 'bottom',
  variant = 'default',
  offset = 8,
  triggerOnHover = false, // Default to false for click-only behavior
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const togglePopover = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const openPopover = () => {
    if (triggerOnHover) {
      setIsOpen(true);
    }
  };

  const closePopover = () => {
    if (triggerOnHover) {
      setIsOpen(false);
    }
  };

  const getPopoverPosition = () => {
    if (!triggerRef.current || !popoverRef.current) return { top: 0, left: 0 };

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();
    const offsetValue = offset;

    switch (placement) {
      case 'top':
        return {
          top: triggerRect.top - popoverRect.height - offsetValue,
          left: triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2,
        };
      case 'bottom':
        return {
          top: triggerRect.bottom + offsetValue,
          left: triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2,
        };
      case 'left':
        return {
          top: triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2,
          left: triggerRect.left - popoverRect.width - offsetValue,
        };
      case 'right':
        return {
          top: triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2,
          left: triggerRect.right + offsetValue,
        };
      default:
        return { top: 0, left: 0 };
    }
  };

  const position = getPopoverPosition();

  return (
    <div
      className="relative inline-block"
      ref={triggerRef}
      onMouseEnter={openPopover} // Trigger popover on hover
      onMouseLeave={closePopover} // Hide popover on hover out
    >
      <div
        onClick={togglePopover} // Toggle popover on click
        className="cursor-pointer"
      >
        {trigger}
      </div>
      {isOpen && (
        <motion.div
          ref={popoverRef}
          className={clsx(
            'absolute z-10 p-4 border rounded shadow-lg transition-opacity duration-300',
            variant === 'default' && 'bg-white text-gray-800 border-gray-300',
            variant === 'dark' && 'bg-gray-800 text-gray-200 border-gray-700',
            variant === 'light' && 'bg-gray-100 text-gray-800 border-gray-200'
          )}
          style={{ top: position.top, left: position.left }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

export default Popover;
