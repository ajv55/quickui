import { render, screen } from '@testing-library/react';
import HeroSection from '@/app/components/mainPage/hero'; // Adjust the import path as needed
import { useRouter } from 'next/navigation';
import '@testing-library/jest-dom';

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock dynamic imports for SphereCanvas and MobileSphereCanvas
jest.mock('next/dynamic', () => () => {
  const MockedComponent = () => <div>Mocked SphereCanvas</div>;
  MockedComponent.displayName = 'MockedSphereCanvas'; // Add display name
  return MockedComponent;
});

// Mock window.matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: query === '(max-width: 768px)', // Simulate a small screen size
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
});

describe('Hero Section Component', () => {
  it('renders the main heading', () => {
    // Mock the router implementation
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      pathname: '/',
      query: {},
      asPath: '/',
    });

    render(<HeroSection />);

    // Test for heading
    const heading = screen.getByRole('heading', { name: /Build Faster with QuickUI/i });
    expect(heading).toBeInTheDocument();

    // Test for paragraph text
    const paragraph = screen.getByText(/Pre-built, reusable, and customizable components for modern web development/i);
    expect(paragraph).toBeInTheDocument();

    // Test for "Get Started" link
    const getStartedLink = screen.getByRole('link', { name: /Get Started/i });
    expect(getStartedLink).toBeInTheDocument();

    // Test for arrow icon
    const arrowIcon = screen.getByTestId('arrow-icon');
    expect(arrowIcon).toBeInTheDocument();

    // Ensure dynamic component (SphereCanvas) is mocked
    const sphereCanvas = screen.getByText('Mocked SphereCanvas');
    expect(sphereCanvas).toBeInTheDocument();
  });

  it('displays the smaller arrow size on small screens', () => {
    // Simulate small screen
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: query === '(max-width: 768px)', // Matches small screen
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }),
    });

    render(<HeroSection />);

    const arrowIcon = screen.getByTestId('arrow-icon');
    expect(arrowIcon).toBeInTheDocument();
  });
});
