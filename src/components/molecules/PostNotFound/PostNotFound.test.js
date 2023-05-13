import React from 'react';
import { render, screen } from '@testing-library/react';
import PostNotFound from './PostNotFound';

test('renders PostNotFound component', () => {
    render(<PostNotFound />);

    const icon = screen.getByTestId('sentiment-icon');
    const heading = screen.getByRole('heading', { name: /post not found/i });
    const bodyText = screen.getByText(
        /we're sorry, but the post you're looking for doesn't seem to exist./i
    );

    expect(icon).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(bodyText).toBeInTheDocument();
});
