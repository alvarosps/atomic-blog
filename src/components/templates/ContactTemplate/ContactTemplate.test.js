import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactTemplate from './ContactTemplate';

describe('ContactTemplate', () => {
    test('renders ContactTemplate component', () => {
        render(<ContactTemplate />);

        expect(
            screen.getByRole('heading', { name: /Contact/i, level: 4 })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', {
                name: /Contact Information/i,
                level: 6,
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /Get in Touch/i, level: 6 })
        ).toBeInTheDocument();
        expect(
            screen.getByText(/Email: example@example.com/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/Phone: \+1 \(555\) 555-5555/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/Address: 123 Main St, Anytown, USA/i)
        ).toBeInTheDocument();
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /Send Message/i })
        ).toBeInTheDocument();
    });
});
