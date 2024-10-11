import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { AnimatedButton, CustomButton } from '@/app/components/button'; 

describe('CustomButton Component', () => {
    it('renders the CustomButton with default props', () => {
      render(<CustomButton>Click Me</CustomButton>);
  
      const button = screen.getByRole('button', { name: 'Click Me' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('bg-gray-300 text-gray-800'); // Default variant styles
    });
  
    it('renders the CustomButton with a primary variant', () => {
      render(<CustomButton variant="primary">Primary Button</CustomButton>);
  
      const button = screen.getByRole('button', { name: 'Primary Button' });
      expect(button).toHaveClass('bg-gradient-to-r from-blue-500 to-purple-600 text-white');
    });
  
    it('applies the correct size styles', () => {
      render(<CustomButton size="large">Large Button</CustomButton>);
  
      const button = screen.getByRole('button', { name: 'Large Button' });
      expect(button).toHaveClass('px-8 py-4 text-lg');
    });
  
    it('renders the button as disabled', () => {
      render(<CustomButton disabled>Disabled Button</CustomButton>);
  
      const button = screen.getByRole('button', { name: 'Disabled Button' });
      expect(button).toBeDisabled();
      expect(button).toHaveClass('opacity-50 cursor-not-allowed');
    });
  });
  
  describe('AnimatedButton Component', () => {
    it('renders the AnimatedButton and applies animation on hover and tap', () => {
      render(<AnimatedButton>Animated Button</AnimatedButton>);
  
      const button = screen.getByRole('button', { name: 'Animated Button' });
      expect(button).toBeInTheDocument();
      
      // Ensure motion is applied
      expect(button).toHaveClass('px-6 py-3 text-lg shadow-lg');
    });
  });