import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactSection from '@/app/components/mainPage/contact';

describe('contact compnonent', () => {

    it('render the h2 heading', () => {
        render(<ContactSection />)

        const heading = screen.getByRole('heading', {name: /Get In Touch/i});
        expect(heading).toBeInTheDocument();
    })

    it('render a p tag', () => {
        render(<ContactSection/>)

        const paragraphElement = screen.getByText(/Have questions or feedback\? We\'d love to hear from you!/i);
        expect(paragraphElement).toBeInTheDocument();
    })

    it('renders contact us link with correct mailto href', () => {
        render(<ContactSection />);
        
        // Find the anchor element
        const linkElement = screen.getByRole('link', { name: /contact us/i });
    
        // Check that it has the correct href attribute
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', 'mailto:support@quickui.com');
      });
})