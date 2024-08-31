import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import clsx from 'clsx';

interface FooterProps {
  columns?: number; // Number of columns (1, 2, 3, 4)
  theme?: 'dark' | 'light';
  content: Array<{
    title: string;
    items: Array<{
      type: 'link' | 'text' | 'social' | 'image' | 'form';
      content: string | JSX.Element;
      href?: string;
    }>;
  }>;
  utilityLinks?: Array<{ text: string; href: string }>;
  copyrightText?: string;
  className?: string; // Additional custom classes
}

const Footer: React.FC<FooterProps> = ({
  columns = 4,
  theme = 'dark',
  content,
  utilityLinks = [],
  copyrightText = '© 2024 MyCompany. All rights reserved.',
  className,
}) => {
  const columnClass = `grid-cols-1 sm:grid-cols-${columns > 1 ? 2 : 1} lg:grid-cols-${columns} gap-8`;
  const themeClasses = theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900';

  return (
    <footer className={clsx(themeClasses, 'py-10 px-8', className)}>
      <div className={clsx('grid', columnClass)}>
        {content.map((column, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold uppercase tracking-wider">{column.title}</h3>
            <ul className="space-y-2">
              {column.items.map((item, i) => (
                <li key={i} className="flex items-center">
                  {item.type === 'link' && item.href ? (
                    <Link href={item.href} className="hover:text-primary-light">
                      {item.content}
                    </Link>
                  ) : item.type === 'text' ? (
                    <p>{item.content}</p>
                  ) : item.type === 'social' ? (
                    <Link
                      href={item.href!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-light text-2xl"
                    >
                      {item.content}
                    </Link>
                  ) : (
                    item.content
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {utilityLinks.length > 0 && (
        <div className="flex flex-wrap justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <ul className="flex space-x-4">
            {utilityLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-primary-light">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 sm:mt-0 text-sm">{copyrightText}</p>
        </div>
      )}
    </footer>
  );
};

export default Footer;

