'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

interface NavbarProps {
  brandName?: string;
  links: Array<{ text: string; href: string }>;
  className?: string;
  navClassName?: string;
  linkClassName?: string;
  mobileMenuClassName?: string;
  closeClassName?: string
}

const Navbar: React.FC<NavbarProps> = ({
  brandName = 'Brand',
  links,
  className,
  navClassName,
  linkClassName,
  mobileMenuClassName,
  closeClassName
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={clsx('bg-primary-dark text-white', className)}>
      <nav className={clsx('flex items-center justify-between p-4', navClassName)}>
        <div className="flex items-center">
          <span className="text-2xl font-bold">{brandName}</span>
        </div>
        <div className="hidden md:flex space-x-4">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className={clsx('hover:text-primary-light', linkClassName)}>
              {link.text}
            </Link>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      <motion.div
        className={clsx('fixed top-0 left-0 w-full h-full bg-primary-dark z-50 md:hidden', { 'block': isOpen, 'hidden': !isOpen }, mobileMenuClassName)}
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-start h-full space-y-4">
          <div className='flex w-full justify-end items-center'>
           <IoMdClose onClick={toggleMenu} size={40} className={clsx('text-secondary-dark', closeClassName)} />
          </div>
          {links.map((link, index) => (
            <Link key={index} href={link.href} className={clsx('text-white text-lg', linkClassName)} onClick={toggleMenu}>
              {link.text}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
