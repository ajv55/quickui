'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaCogs, FaRocket } from 'react-icons/fa';
import clsx from 'clsx';
import MobileMobiusCanvas from './mobius';

interface HowItWorksSectionProps {
  className?: string;
}

const steps = [
  {
    icon: <FaDownload />,
    title: "Install QuickUI",
    description: "Install QuickUI via npm: npm i quick-ui-library.",
  },
  {
    icon: <FaCode />,
    title: "Import Components",
    description: "Import the desired component: import { CustomButton } from 'quick-ui-library'.",
  },
  {
    icon: <FaCogs />,
    title: "Customize Components",
    description: "Customize the component using props and Tailwind CSS classes.",
  },
  {
    icon: <FaRocket />,
    title: "Deploy Faster",
    description: "Deploy your project faster with fully responsive and animated components.",
  },
];

const HowItWorksSection: FC<HowItWorksSectionProps> = ({ className }) => {
  return (
    <section id="how-it-works" className={clsx("relative py-20 bg-gradient-to-b from-background-dark via-primary-light to-background-dark text-text-light", className)}>
      <div className="container mx-auto text-center mb-16">
        <h2 className="lg:text-6xl text-5xl bg-gradient-to-tr from-primary-light via-accent-light to-secondary-light bg-clip-text text-transparent font-bold">How It Works</h2>
      </div>
     <div className=' '>
      <div className="relative w-full mx-auto p-3 flex flex-col justify-start items-start space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3, type: 'spring', stiffness: 80 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 p-4 rounded-full bg-primary-dark text-white text-3xl">
                {step.icon}
              </div>
              <div className="ml-6">
                <h3 className="text-3xl text-secondary-light font-semibold mb-2">{step.title}</h3>
                <p className="text-text-dark">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Coding Symbol */}
        <motion.div
          className="absolute lg:block hidden top-1/2 right-64 transform -translate-x-1/2 -translate-y-1/2 text-secondary-light text-8xl font-bold"
          animate={{ rotateY: [0, 360], scale: [3, 3, 3] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          style={{ filter: "drop-shadow(0 3px 10px rgba(59, 130, 246, 0.5))" }}
        >
          &lt;/&gt;
        </motion.div>
     </div>
    </section>
  );
};

export default HowItWorksSection;

