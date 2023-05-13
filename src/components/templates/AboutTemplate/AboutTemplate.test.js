import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutTemplate from './AboutTemplate';

describe('AboutTemplate', () => {
    test('renders AboutTemplate component', () => {
        render(<AboutTemplate />);

        expect(screen.getByTestId('about-template')).toBeInTheDocument();
        expect(screen.getByText(/About/i)).toBeInTheDocument();
        expect(screen.getByText(/Our Story/i)).toBeInTheDocument();
        expect(screen.getByAltText(/Author/i)).toBeInTheDocument();
    });
});
