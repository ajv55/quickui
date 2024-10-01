import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Alert from '@/app/components/alert';

describe('alert compnoent', () => {

    it('renders correct message and icon type for success type', () => {
        render(<Alert type='success' message='Completed task!!' />)

        const message = screen.getByText(/Completed task!!/i)
        expect(message).toBeInTheDocument();

        const icon = screen.getByTestId('icon')
        expect(icon).toHaveClass('text-green-500')
    });

    it('renders correct message and icon type for error type', () => {
        render(<Alert type='error' message='Error occured!' />)

        const message = screen.getByText(/Error occured!/i)
        expect(message).toBeInTheDocument();

        const icon = screen.getByTestId('icon')
        expect(icon).toHaveClass('text-red-500')
    });

    it('renders correct message and icon type for warning type', () => {
        render(<Alert type='warning' message='Warning!!' />)

        const message = screen.getByText(/Warning!!/i)
        expect(message).toBeInTheDocument();

        const icon = screen.getByTestId('icon')
        expect(icon).toHaveClass('text-yellow-500')
    });

    it('renders correct message and icon type for info type', () => {
        render(<Alert type='info' message='Informational section!' />)

        const message = screen.getByText(/Informational section!/i)
        expect(message).toBeInTheDocument();

        const icon = screen.getByTestId('icon')
        expect(icon).toHaveClass('text-blue-500')
    })
})