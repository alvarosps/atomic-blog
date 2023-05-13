import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
    test('renders ContactTemplate component', () => {
        render(<ContactPage />);
        const contactTemplate = screen.getByTestId('contact-container');
        expect(contactTemplate).toBeInTheDocument();
    });
});
