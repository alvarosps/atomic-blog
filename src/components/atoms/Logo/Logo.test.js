import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('renders the logo text correctly', () => {
    render(<Logo />);
    expect(screen.getByText('Atomic Blog')).toBeInTheDocument();
});
