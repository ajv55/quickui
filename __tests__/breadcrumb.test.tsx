import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumb from '@/app/components/breadcrumb';
import { FaChevronRight, FaHome } from 'react-icons/fa';

describe('Breadcrumb compnonent', () => {
    const items = [
        { label: 'Home', href: '/', icon: <FaHome /> },
        { label: 'Category', href: '/category' },
        { label: 'Subcategory' },
      ];

      it('renders breadcrumb items with links and labels', () => {
        render(<Breadcrumb items={items} />);
    
        // Test if "Home" breadcrumb item is a link with an icon
        const homeItem = screen.getByText('Home');
        expect(homeItem).toBeInTheDocument();
        expect(homeItem).toHaveAttribute('href', '/');
    
        // Test if "Category" breadcrumb item is a link
        const categoryItem = screen.getByRole('link', { name: 'Category' });
        expect(categoryItem).toBeInTheDocument();
        expect(categoryItem).toHaveAttribute('href', '/category');
    
        // Test if "Subcategory" breadcrumb item is a span, not a link
        const subcategoryItem = screen.getByText('Subcategory');
        expect(subcategoryItem.tagName).toBe('SPAN');
      });

      it('renders the correct separator between items', () => {
        render(<Breadcrumb items={items} separator={<FaChevronRight data-testid="separator" />} />);
    
        // Test if the separator is rendered between breadcrumb items
        const separators = screen.getAllByTestId('separator');
        expect(separators.length).toBe(2); // Should be between "Home" and "Category", and "Category" and "Subcategory"
      });

      it('applies custom classes to the breadcrumb, item, and link', () => {
        const customClassNames = {
          className: 'breadcrumb-custom',
          itemClassName: 'breadcrumb-item-custom',
          linkClassName: 'breadcrumb-link-custom',
        };
    
        render(<Breadcrumb items={items} {...customClassNames} />);
    
        // Check for custom class on the breadcrumb container
        const breadcrumbContainer = screen.getByRole('navigation', { name: /breadcrumb/i });
        expect(breadcrumbContainer).toHaveClass('breadcrumb-custom');
    
        // Check custom class on breadcrumb items
        const homeItem = screen.getByText(/Home/i);
        expect(homeItem.closest('div')).toHaveClass('breadcrumb-item-custom');
    
        // Check custom class on breadcrumb links
        expect(homeItem).toHaveClass('breadcrumb-link-custom');
      });
      
      it('renders breadcrumb item with an icon', () => {
        render(<Breadcrumb items={[{ label: 'Home', icon: <FaHome data-testid="home" /> }]} />);
    
        // Ensure the icon is rendered
        const icon = screen.getByTestId('home');
        expect(icon).toBeInTheDocument();
      });


})