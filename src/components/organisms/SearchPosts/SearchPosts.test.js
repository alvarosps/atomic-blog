import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPosts from './SearchPosts';
import PostsList from '../../molecules/PostsList/PostList';

// Mock the PostsList component to check if it's rendered with the correct props
jest.mock('../../molecules/PostsList/PostList', () => {
    return jest.fn(() => <div data-testid="mock-posts-list" />);
});

test('renders SearchPosts component with correct posts prop', () => {
    const testPosts = [
        { id: 1, title: 'Test Post 1', content: 'This is test post 1.' },
        { id: 2, title: 'Test Post 2', content: 'This is test post 2.' },
    ];

    render(<SearchPosts posts={testPosts} />);

    // Check if the mocked PostsList component is rendered
    const postsListElement = screen.getByTestId('mock-posts-list');
    expect(postsListElement).toBeInTheDocument();

    // Check if the PostsList component is called with the correct posts prop
    expect(PostsList).toHaveBeenCalledWith(
        { posts: testPosts },
        expect.anything()
    );
});
