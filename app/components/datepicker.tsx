'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default styles
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

interface DatePickerProps {
  selectedDate?: Date | null;
  onChange?: (date: Date | null) => void;
  className?: string;
  datePickerClassName?: string;
  isRangePicker?: boolean;
  startDate?: Date | null;
  endDate?: Date | null;
  onRangeChange?: (dates: [Date | null, Date | null]) => void;
  dateFormat?: string;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({
  selectedDate,
  onChange,
  className,
  datePickerClassName,
  isRangePicker = false,
  startDate,
  endDate,
  onRangeChange,
  dateFormat = 'MM/dd/yyyy',
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleToggle = () => {
    setShowCalendar(prev => !prev);
  };

  return (
    <div className={clsx('relative', className)}>
      <button
        onClick={handleToggle}
        className="px-4 py-2 border rounded-md bg-primary-light text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
      >
        {selectedDate ? selectedDate.toDateString() : 'Select Date'}
      </button>
      <AnimatePresence>
        {showCalendar && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={clsx('absolute mt-2 z-10', datePickerClassName)}
          >
            {!isRangePicker ? (
              <DatePicker
                selected={selectedDate}
                onChange={onChange}
                inline
                dateFormat={dateFormat}
                className="bg-white border rounded-md shadow-lg"
              />
            ) : (
              <DatePicker
                selected={startDate}
                onChange={onRangeChange}
                startDate={startDate!}
                endDate={endDate!}
                selectsRange
                inline
                dateFormat={dateFormat}
                className="bg-white border rounded-md shadow-lg"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DatePickerComponent;
