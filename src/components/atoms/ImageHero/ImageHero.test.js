import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageHero from './ImageHero';

test('renders ImageHero component with correct src and alt attributes', () => {
    const testSrc = 'https://example.com/test-image.jpg';
    const testAlt = 'Test Image';

    render(<ImageHero src={testSrc} alt={testAlt} />);

    // Check if the img element is rendered with the correct src and alt attributes
    const imgElement = screen.getByRole('img', { name: testAlt });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', testSrc);
    expect(imgElement).toHaveAttribute('alt', testAlt);
});
