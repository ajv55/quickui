import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import HowItWorksSection from '@/app/components/mainPage/how';

beforeAll(() => {
    class InterscectionObserverMock {
        observe = jest.fn();
        unobserve = jest.fn();
        disconnect = jest.fn();
        takeRecords = jest.fn();
        constructor() {}
    }

    global.IntersectionObserver = InterscectionObserverMock as any
})

describe('how it works compnonet', () => {

    it('renders the how it works sections', () => {
        render(<HowItWorksSection />)

        //test that the main heading
        const heading = screen.getByRole('heading', {name: /How It Works/i})
        expect(heading).toBeInTheDocument();

         // Test that each step title is rendered
            const stepTitles = [
                'Install QuickUI',
                'Import Components',
                'Customize Components',
                'Deploy Faster',
            ];
        
            stepTitles.forEach((title) => {
                const stepTitle = screen.getByText(title);
                expect(stepTitle).toBeInTheDocument();
            });
            })

         

            
})