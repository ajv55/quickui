import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactSection from '@/app/components/mainPage/contact';

describe('contact compnonent', () => {

    it('render the h2 heading', () => {
        render(<ContactSection />)

        const heading = screen.getByRole('heading', {name: /Get In Touch/i});
        expect(heading).toBeInTheDocument();
    })
})