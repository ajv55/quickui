'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

type TabProps = {
  tabs: { label: string; content: React.ReactNode }[];
  variant?: 'horizontal' | 'vertical' | 'animated';
};

const Tabs: React.FC<TabProps> = ({ tabs, variant = 'horizontal' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={clsx('relative', variant === 'vertical' && 'flex justify-between')}>
      <div
        className={clsx(
          'tabs-container',
          variant === 'horizontal' && 'flex',
          variant === 'vertical' && 'flex-col'
        )}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={clsx(
              'tab-button px-4 py-2 font-semibold text-sm',
              variant === 'horizontal' && 'mr-2',
              variant === 'vertical' && 'mb-2',
              index === activeIndex && 'bg-gray-200 text-gray-800'
            )}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {variant === 'animated' ? (
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {tabs[activeIndex].content}
          </motion.div>
        ) : (
          tabs[activeIndex].content
        )}
      </div>
    </div>
  );
};

export default Tabs;
