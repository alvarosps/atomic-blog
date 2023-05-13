import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoEmbed from './VideoEmbed';

test('renders VideoEmbed component', () => {
    render(<VideoEmbed src="https://www.youtube.com/embed/test" />);
    const iframeElement = screen.getByTitle(/video/i);
    expect(iframeElement).toBeInTheDocument();
});
