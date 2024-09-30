import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import WhyUsSection from '@/app/components/mainPage/why';

describe('why us section compnonet', () => {
    
    it('renders the why us section', () => {
        render(<WhyUsSection />)

        const heading = screen.getByRole('heading', {name: /Why QuickUI?/i})
        expect(heading).toBeInTheDocument();

        const para = screen.getByText(/QuickUI is designed to accelerate/i)
        expect(para).toBeInTheDocument();
    })
})