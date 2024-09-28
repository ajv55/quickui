import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturesSection from '@/app/components/mainPage/feature';

beforeAll(() => {
    class IntersectionObserverMock {
      observe = jest.fn();
      unobserve = jest.fn();
      disconnect = jest.fn();
      takeRecords = jest.fn();
      constructor() {}
    }
  
    global.IntersectionObserver = IntersectionObserverMock as any;
  });

describe('feature section', () => {

    it('renders main heading', () => {
        render(<FeaturesSection />)

        const heading = screen.getByRole('heading', {level: 2});
        expect(heading).toBeInTheDocument();
    })
})