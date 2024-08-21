'use client';
import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated' | 'image' | 'hover' | 'profile' | 'info' | 'action' | 'feature' | 'pricing';
  image?: string;
  title: string;
  description: string;
  additionalContent?: ReactNode;
  className?: string; // Additional custom classes for the card container
  titleClassName?: string; // Custom classes for the title
  descriptionClassName?: string; // Custom classes for the description
  imageClassName?: string; // Custom classes for the image
  backgroundClassName?: string; // Custom classes for the background color
  button?: ReactNode;
  additionalContentClassname?: string
}

const Card: FC<CardProps> = ({
  variant = 'default',
  image,
  title,
  description,
  additionalContent,
  className,
  titleClassName,
  descriptionClassName,
  imageClassName,
  backgroundClassName,
  additionalContentClassname,
  button
}) => {
  const baseStyles = "p-6 rounded-lg transition-shadow duration-300 ease-in-out";
  const variantStyles = {
    default: "bg-white shadow-md border border-gray-200",
    outlined: "border border-gray-300 bg-white",
    elevated: "bg-white shadow-xl hover:shadow-2xl",
    image: "bg-white shadow-md overflow-hidden rounded-lg",
    hover: "bg-white shadow-md hover:shadow-xl hover:transform hover:scale-105",
    profile: "bg-white border border-gray-200 shadow-lg text-center rounded-lg",
    info: "bg-blue-50 text-blue-900 border border-blue-300",
    action: "bg-green-50 text-green-900 border border-green-300",
    feature: "bg-yellow-50 text-yellow-900 border border-yellow-300",
    pricing: "bg-gray-100 text-gray-900 border border-gray-300"
  };

  return (
    <div className={clsx(baseStyles, variantStyles[variant], backgroundClassName, className)}>
      {image && variant === 'image' && (
        <img
          src={image}
          alt={title}
          className={clsx("w-full h-40 object-cover rounded-t-lg", imageClassName)}
        />
      )}
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className={clsx("text-2xl font-bold", titleClassName)}>{title}</h3>
          <p className={clsx("mt-2", descriptionClassName)}>{description}</p>
          {additionalContent && <div className={clsx('mt-4', additionalContentClassname)}>{additionalContent}</div>}
        </div>
        {button && <div className="mt-4">{button}</div>}
      </div>
    </div>
  );
};

export default Card;
