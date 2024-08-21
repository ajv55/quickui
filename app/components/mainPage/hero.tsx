'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Dynamically import MobiusStripCanvas to avoid server-side rendering issues
const SphereCanvas = dynamic(() => import('../mainPage/spinningCube'), { ssr: false });
const MobileSphereCanvas = dynamic(() => import('../mainPage/mobileSphere'), { ssr: false });

interface HeroSectionProps {
  className?: string;
}

const HeroSection: FC<HeroSectionProps> = ({ className }) => {

    const router = useRouter();

  return (
    <section className={clsx("relative py-12 text-primary-light bg-gradient-to-l from-primary-light to-background-light", className)}>
      
      <div className="w-full  h-[29rem] mx-auto flex lg:flex-row flex-col items-center justify-between relative z-10">
        <div className="lg:w-1/2 w-full p-2">
          <h1 className="lg:text-6xl text-4xl font-bold mb-4">
            Build Faster with <span className="bg-gradient-to-r from-primary-light to-secondary-dark bg-clip-text text-transparent">QuickUI</span>
          </h1>
          <p className="lg:text-lg text-sm mb-6">
            Pre-built, reusable, and customizable components for modern web development.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-light w-[20%] text-center hover:bg-secondary-light shadow-md hover:text-primary-light hover:shadow-primary-light text-text-dark lg:px-6 px-3 lg:py-3 py-2 rounded-md font-semibold"
          >
            <Link href='/getStarted'>Get Started</Link>
          </motion.div>
        </div>
        <div className=" lg:w-1/2 lg:block hidden w-full h-[28rem] z-40">
            <SphereCanvas />
        </div>
        <div className=" lg:w-1/2 lg:hidden block w-full h-[28rem] z-40">
            <MobileSphereCanvas />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

