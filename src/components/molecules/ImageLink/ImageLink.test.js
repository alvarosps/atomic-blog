import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageLink from './ImageLink';
import { BrowserRouter } from 'react-router-dom';

test('renders image with correct src and alt', () => {
    render(
        <BrowserRouter>
            <ImageLink src="sample-image.jpg" alt="Sample image" />
        </BrowserRouter>
    );
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', 'sample-image.jpg');
    expect(image).toHaveAttribute('alt', 'Sample image');
});
