import { FC } from 'react';
import clsx from 'clsx';

interface ContactSectionProps {
  className?: string;
}

const ContactSection: FC<ContactSectionProps> = ({ className }) => {
  return (
    <section id="contact" className={clsx("py-20 bg-indigo-600 text-white", className)}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="mb-6">Have questions or feedback? We&#39;d love to hear from you!</p>
        <a href="mailto:support@quickui.com" className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
