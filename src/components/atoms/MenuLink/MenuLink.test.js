import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuLink from './MenuLink';
import { BrowserRouter } from 'react-router-dom';

test('renders menu link with correct text and href', () => {
    render(
        <BrowserRouter>
            <MenuLink to="/example">Example</MenuLink>
        </BrowserRouter>
    );

    const link = screen.getByRole('link', { name: /Example/i });
    expect(link).toHaveAttribute('href', '/example');
});
