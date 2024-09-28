import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/app/components/mainPage/footer';


describe('footer compnonent', () => {

    it('renders the p tag', () => {
        render(<Footer />)

        const para = screen.getByText(/2024 QuickUI. All rights reserved./i)
        expect(para).toBeInTheDocument();
    })

    it('renders all navigation links with correct hrefs and text content', () => {
        render( <Footer />)

        const featureLink = screen.getByRole('link', {name: /Features/i})
        expect(featureLink).toBeInTheDocument()
        expect(featureLink).toHaveAttribute('href', '#features' )

        const whyLink = screen.getByRole('link', {name: /Why QuickUI/i})
        expect(whyLink).toBeInTheDocument()
        expect(whyLink).toHaveAttribute('href', '#why-us' )

        const howLink = screen.getByRole('link', {name: /How It Works/i})
        expect(howLink).toBeInTheDocument()
        expect(howLink).toHaveAttribute('href', '#how-it-works' )

        const contactLink = screen.getByRole('link', {name: /Contact/i})
        expect(contactLink).toBeInTheDocument()
        expect(contactLink).toHaveAttribute('href', '#contact' )
    })
})