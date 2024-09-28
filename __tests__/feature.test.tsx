import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturesSection from '@/app/components/mainPage/feature';

describe('feature section', () => {

    it('renders main heading', () => {
        render(<FeaturesSection/>)

        const heading = screen.getByRole('heading', {name: 'Features'});
        expect(heading).toBeInTheDocument();
    })
})