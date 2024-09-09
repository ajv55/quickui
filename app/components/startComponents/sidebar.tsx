'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { CgMenuLeftAlt } from "react-icons/cg";
import { motion } from 'framer-motion';
import ModalSidebar from './modalSidebar';

const Sidebar: FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const links = [
    { name: 'Alert', href: '/getStarted/alert' },
    { name: 'Buttons', href: '/getStarted/button' },
    { name: 'Badges', href: '/getStarted/badges' },
    { name: 'Breadcrumb', href: '/getStarted/breadcrumb' },
    { name: 'Cards', href: '/getStarted/card' },
    { name: 'Carousel', href: '/getStarted/carousel' },
    { name: 'Clipboard', href: '/getStarted/clipboard' },
    { name: 'DatePicker', href: '/getStarted/datepicker' },
    { name: 'Dropdown', href: '/getStarted/dropdown' },
    { name: 'Forms', href: '/getStarted/form' },
    { name: 'Footers', href: '/getStarted/footer' },
    { name: 'Gallery', href: '/getStarted/gallery' },
    { name: 'Indictors', href: '/getStarted/indictors' },
    { name: 'Input Fields', href: '/getStarted/input' },
    { name: 'List Group', href: '/getStarted/listGroup' },
    { name: 'Modals', href: '/getStarted/modal' },
    { name: 'Navgation Bar', href: '/getStarted/navbar' },
    { name: 'Pagination', href: '/getStarted/pagination' },
    { name: 'Popover', href: '/getStarted/popover' },
    { name: 'Progress Bars', href: '/getStarted/progress' },
    { name: 'Rating', href: '/getStarted/rating' },
    { name: 'Sidebar', href: '/getStarted/sidebar' },
    { name: 'Skeleton', href: '/getStarted/skeleton' },
    { name: 'Table', href: '/getStarted/table' },
    { name: 'Tab', href: '/getStarted/tab' },
    
    
    // Add more component links here
  ];

  return (
    <div className='relative'>
      {isOpen && <ModalSidebar links={links} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />}
      <nav className='w-full lg:hidden flex justify-between items-center p-2 bg-primary-light h-16'>
        <h2 className="text-xl font-bold text-secondary-light">QuickUI Components</h2>
        <motion.span whileTap={{scale: 1.3}} onClick={() => setIsOpen(!isOpen)}><CgMenuLeftAlt size={35} className='text-secondary-light' /></motion.span>
      </nav>
      <aside className="w-64 h-screen lg:block hidden bg-primary-dark overflow-x-scroll text-white shadow-lg">
        <div className="p-4 text-3xl font-bold text-secondary-light">
          QuickUI Components
        </div>
        <nav className="mt-6 ">
          <ul className="space-y-2 ">
            {/* Getting Started Section */}
            <li>
              <Link
                className={clsx(
                  'block px-2 py-3 rounded-sm hover:text-text-light text-lg hover:border-r-8 hover:border-background-dark hover:bg-gradient-to-r from-primary-dark to-secondary-light',
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
            <div className='flex flex-col justify-start space-y-1 overflow-y-scroll'>
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
            </div>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
