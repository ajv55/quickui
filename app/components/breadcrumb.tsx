'use client';

import React from 'react';
import clsx from 'clsx';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string; // If href is provided, the item becomes a link
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
  itemClassName?: string;
  linkClassName?: string;
  iconClassName?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = <FaChevronRight className="mx-2" />,
  className = '',
  itemClassName = '',
  linkClassName = '',
  iconClassName = '',
}) => {
  return (
    <nav className={clsx('flex items-center', className)} aria-label="breadcrumb">
      {items.map((item, index) => (
        <div key={index} className={clsx('flex items-center', itemClassName)}>
          {item.icon && <span className={clsx('mr-1', iconClassName)}>{item.icon}</span>}
          {item.href ? (
            <Link className={clsx('text-primary-dark hover:text-primary', linkClassName)} href={item.href}>
              {item.label}
            </Link>
          ) : (
            <span className={clsx('text-text-dark', linkClassName)}>{item.label}</span>
          )}
          {index < items.length - 1 && separator}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
