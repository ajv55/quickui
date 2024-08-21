'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  titleColor?: string;
  backgroundColor?: string;
  textColor?: string;
  content?: React.ReactNode;
  children?: React.ReactNode;
  animationType?: 'fade' | 'slide' | 'zoom' | 'slide-right' | 'slide-left' | 'slide-top' | 'slide-bottom'; // Added new animation types
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  titleColor = 'text-black',
  backgroundColor = 'bg-white',
  textColor = 'text-gray-800',
  content,
  children,
  animationType = 'fade', // Default animation type
}) => {
  if (!isOpen) return null;

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'slide-right':
        return {
          initial: { x: '100vw' },
          animate: { x: 0 },
          exit: { x: '100vw' },
        };
      case 'slide-left':
        return {
          initial: { x: '-100vw' },
          animate: { x: 0 },
          exit: { x: '-100vw' },
        };
      case 'slide-top':
        return {
          initial: { y: '-100vh' },
          animate: { y: 0 },
          exit: { y: '-100vh' },
        };
      case 'slide-bottom':
        return {
          initial: { y: '100vh' },
          animate: { y: 0 },
          exit: { y: '100vh' },
        };
      case 'zoom':
        return {
          initial: { scale: 0.8 },
          animate: { scale: 1 },
          exit: { scale: 0.8 },
        };
      case 'fade':
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
    }
  };

  const animationVariants = getAnimationVariants();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />

      {/* Modal container */}
      <motion.div
        className={clsx('relative p-6 rounded-lg shadow-lg w-full max-w-md', backgroundColor)}
        initial={animationVariants.initial}
        animate={animationVariants.animate}
        exit={animationVariants.exit}
        transition={{ duration: 0.3 }}
      >
        <h2 className={clsx('text-2xl font-semibold mb-4', titleColor)}>{title}</h2>
        <div className={clsx('mb-4', textColor)}>
          {content || children}
        </div>
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;

