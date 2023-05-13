// AboutPage.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
    test('renders AboutTemplate component', () => {
        render(<AboutPage />);
        const aboutTemplate = screen.getByTestId('about-template');
        expect(aboutTemplate).toBeInTheDocument();
    });
});
