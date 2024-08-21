import { FC } from 'react';
import clsx from 'clsx';
import {Card } from 'quick-ui-library'

interface WhyUsSectionProps {
  className?: string;
}

const WhyUsSection: FC<WhyUsSectionProps> = ({ className }) => {
  return (
    <section id="why-us" className={clsx("py-20 bg-background-light", className)}>
      <div className="container mx-auto text-center">
        <h2 className="text-6xl text-primary-light font-bold mb-8">Why QuickUI?</h2>
        <p className="text-lg text-text-light leading-relaxed">
          QuickUI is designed to accelerate your development process by providing pre-built components that are customizable and easy to integrate.
          Our components are built with both TypeScript and JavaScript in mind, ensuring compatibility and flexibility for any project.
        </p>
      </div>
    </section>
  );
};

export default WhyUsSection;
