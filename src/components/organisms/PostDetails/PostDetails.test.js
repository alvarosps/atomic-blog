import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PostDetails from './PostDetails';

test('renders PostDetails component', () => {
    const testPost = {
        id: 1,
        title: 'Test Post',
        content: 'This is a test post.',
    };

    render(
        <BrowserRouter>
            <PostDetails post={testPost} />
        </BrowserRouter>
    );

    const title = screen.getByRole('heading', { name: /test post/i });
    const content = screen.getByText(/this is a test post./i);
    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
});
