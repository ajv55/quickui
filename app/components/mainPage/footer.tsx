import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={clsx("bg-background-dark text-white py-8", className)}>
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 QuickUI. All rights reserved.</p>
        <div className="mt-4">
          <Link href="#features">Features</Link> | 
          <Link href="#why-us"> Why QuickUI</Link> | 
          <Link href="#how-it-works"> How It Works</Link> | 
          <Link href="#contact"> Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
