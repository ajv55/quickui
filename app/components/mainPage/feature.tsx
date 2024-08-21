'use client';
import { FC, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import clsx from 'clsx';
import { useRef } from 'react';

interface FeaturesSectionProps {
  className?: string;
}

const features = [
  { title: 'Reusable Components', description: 'Build once, use anywhere in TypeScript and JavaScript projects.' },
  { title: 'Customizable', description: 'Easily customize components to match your project’s needs.' },
  { title: 'Responsive Design', description: 'Components are fully responsive, making your site look great on any device.' },
];

const FeaturesSection: FC<FeaturesSectionProps> = ({ className }) => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    } , [isInView, mainControls])

  return (
    <section id="features" className={clsx("py-20 bg-background-dark", className)}>
      <div  className="container mx-auto text-center">
        <h2 className="text-6xl bg-gradient-to-bl from-primary-dark via-secondary-light to-accent-light bg-clip-text text-transparent font-bold mb-8">Features</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
            key={index}
            variants={{
              visible: { scale: 1, y: 0, opacity: 1, transition: { duration: 1, type: 'spring', stiffness: 90, delay: index * 0.75 } }
            }}
            initial={{ scale: 1, y: 50, opacity: 0 }}
            animate={mainControls}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-background-light hover:bg-gradient-to-t hover:from-primary-light hover:to-secondary-light h-[12rem] flex flex-col justify-center items-center hover:shadow-secondary-light group hover:shadow-xl shadow-lg rounded-md"
            style={{ transformOrigin: 'center' }}
            >
              <h3 className="text-xl text-primary-dark group-hover:text-text-dark font-semibold mb-4">{feature.title}</h3>
              <p className='group-hover:text-secondary-light text-text-light'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
