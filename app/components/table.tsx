'use client';

import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

type TableProps = {
  variant?: 'basic' | 'striped' | 'expandable';
  columns: string[];
  data: any[];
  expandable?: boolean;
  onRowExpand?: (rowIndex: number) => void;
};

const Table: React.FC<TableProps> = ({
  variant = 'basic',
  columns,
  data,
  expandable = false,
  onRowExpand,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className={clsx(
        'w-full border-collapse',
        variant === 'striped' && 'border-separate border-spacing-0',
        variant === 'expandable' && 'relative'
      )}>
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <motion.tr
                className={clsx(
                  'hover:bg-gray-50 cursor-pointer',
                  variant === 'striped' && 'bg-gray-50 odd:bg-white'
                )}
                onClick={() => expandable && onRowExpand && onRowExpand(rowIndex)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-4 py-2 border-b text-sm text-gray-600">
                    {row[column]}
                  </td>
                ))}
              </motion.tr>
              {expandable && rowIndex === data.length - 1 && (
                <motion.tr
                  className="bg-gray-100"
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <td colSpan={columns.length} className="p-4">
                    {/* Add your expandable content here */}
                    Expanded Content for Row {rowIndex + 1}
                  </td>
                </motion.tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
