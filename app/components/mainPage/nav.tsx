'use client';
import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { GiQuickSlash } from "react-icons/gi";
import { CustomButton, AnimatedButton } from 'quick-ui-library';

interface NavBarProps {
  className?: string;
}

const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <nav className={clsx("bg-background-light shadow-md py-4", className)}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl flex justify-center items-center gap-3 font-bold text-primary-light">
            <GiQuickSlash size={25} color='#4F46E5' />
          <Link href="/">QuickUI</Link>
        </div>
        <ul className="flex   space-x-6">
          <li><Link className='text-primary-dark cursor-pointer hover:underline hover:underline-offset-2 hover:text-secondary-dark' href="#features">Features</Link></li>
          <li><Link className='text-primary-dark cursor-pointer hover:underline hover:underline-offset-2 hover:text-secondary-dark' href="#why-us">Why QuickUI</Link></li>
          <li><Link className='text-primary-dark cursor-pointer hover:underline hover:underline-offset-2 hover:text-secondary-dark' href="#how-it-works">How It Works</Link></li>
          <li><Link className='text-primary-dark cursor-pointer hover:underline hover:underline-offset-2 hover:text-secondary-dark' href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
