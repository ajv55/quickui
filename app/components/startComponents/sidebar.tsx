'use client';
import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const Sidebar: FC = () => {

  const links = [
    { name: 'Alert', href: '/getStarted/alert' },
    { name: 'Buttons', href: '/getStarted/button' },
    { name: 'Badges', href: '/getStarted/badges' },
    { name: 'Breadcrumb', href: '/getStarted/breadcrumb' },
    { name: 'Cards', href: '/getStarted/card' },
    { name: 'Carousel', href: '/getStarted/carousel' },
    { name: 'Clipboard', href: '/getStarted/clipboard' },
    { name: 'Modals', href: '/getStarted/modal' },
    { name: 'Input Fields', href: '/getStarted/input' },
    { name: 'Forms', href: '/getStarted/form' },
    
    // Add more component links here
  ];

  return (
    <aside className="w-64 h-screen bg-primary-dark text-white shadow-lg">
      <div className="p-6 text-3xl font-bold text-secondary-light">
        QuickUI Components
      </div>
      <nav className="mt-6 overflow-scroll">
        <ul className="space-y-4">
          {/* Getting Started Section */}
          <li>
            <Link
              className={clsx(
                'block px-4 py-3 rounded-sm hover:text-text-light text-lg hover:border-r-8 hover:border-background-dark hover:bg-gradient-to-r from-primary-dark to-secondary-light',
              )}
              href="/getStarted/intro"
            >
              Getting Started
            </Link>
          </li>

          {/* Components Heading */}
          <li className="mt-9 ml-1 text-xl font-semibold text-secondary-light">
            Components
          </li>

          {/* Components Links */}
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className={clsx(
                  'block px-3 py-1 rounded-sm hover:text-text-light text-sm hover:border-r-8 hover:border-background-dark hover:bg-gradient-to-r from-primary-dark to-secondary-light',
                )}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
