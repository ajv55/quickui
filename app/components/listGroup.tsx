'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ListGroupProps {
  items: Array<{
    id: string;
    content: string | JSX.Element;
    href?: string;
  }>;
  layout?: 'vertical' | 'horizontal';
  animation?: 'fade' | 'slide';
  className?: string;
}

const ListGroup: React.FC<ListGroupProps> = ({
  items,
  layout = 'vertical',
  animation = 'fade',
  className = '',
}) => {
  const listClass = clsx('flex', {
    'flex-col': layout === 'vertical',
    'flex-row': layout === 'horizontal',
  });

  const itemAnimation = {
    fade: { opacity: 0, y: 20 },
    slide: { x: -20, opacity: 0 },
  };

  const itemVariants = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: itemAnimation[animation],
  };

  return (
    <div className={clsx('w-full', className)}>
      <ul className={listClass}>
        {items.map((item) => (
          <motion.li
            key={item.id}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            {item.href ? (
              <a
                href={item.href}
                className="block p-4 bg-gray-500 hover:bg-gray-300 rounded transition-colors"
              >
                {item.content}
              </a>
            ) : (
              <div className="block p-4 bg-gray-300 rounded">{item.content}</div>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
