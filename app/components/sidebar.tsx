'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarVariants = {
    open: {
      width: '250px',
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    closed: {
      width: '0px',
      opacity: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  };

  return (
    <motion.div
      className={clsx(
        'absolute top-0 left-0 h-full bg-gray-800 text-white shadow-lg z-50',
        'overflow-hidden',
        'flex flex-col'
      )}
      variants={sidebarVariants}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
    >
      <button
        className="p-4 text-xl text-gray-300 hover:text-white self-end"
        onClick={onClose}
      >
        &times;
      </button>
      <nav className="flex-1">
        <ul className="space-y-4 p-4">
          <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md transition">
            <FaHome className="text-xl" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md transition">
            <FaUser className="text-xl" />
            <span>Profile</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md transition">
            <FaCog className="text-xl" />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md transition">
            <FaSignOutAlt className="text-xl" />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
