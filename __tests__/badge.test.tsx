import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from '@/app/components/badge';
import { FaCheck } from 'react-icons/fa';

describe('Badge compnonet', () => {

    it('renders with default variant and size',() => {
        render(<Badge text='Default Badge' />)

        const badge = screen.getByText(/Default Badge/i)
        expect(badge).toBeInTheDocument();
        expect(badge).toHaveClass('bg-gray-200 text-gray-800')
        expect(badge).toHaveClass('text-sm')
    })

    it('renders with a primary variant and large size', () => {
        render(<Badge text='Primary Badge' variant='primary' size='large'/>)

        const badge = screen.getByText(/Primary Badge/i)
        expect(badge).toBeInTheDocument()
        expect(badge).toHaveClass('bg-blue-500 text-white')
        expect(badge).toHaveClass('text-lg')
    })

    it('renders with an icon', () => {
        render(<Badge text='Icon Badge' icon={<FaCheck size={20} />} />)

        const badge = screen.getByText(/Icon Badge/i)
        expect(badge).toBeInTheDocument()
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    })

    it('renders with a custom class', () => {
        render(<Badge text="Custom Badge" className="custom-class" />);
    
        const badge = screen.getByText(/Custom Badge/i);
        expect(badge).toHaveClass('custom-class');
      });
    
      it('renders with an outline variant', () => {
        render(<Badge text="Outline Badge" variant="outline" />);
    
        const badge = screen.getByText(/Outline Badge/i);
        expect(badge).toHaveClass('bg-transparent border border-gray-800 text-gray-800'); // outline variant
      });

})