import React from 'react';
import { render, screen } from '@testing-library/react';
import { BlogContext } from '../../BlogContext';
import PostDetailsPage from './PostDetailsPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const mockPosts = [
    {
        id: 1,
        title: 'Test Post 1',
        content: 'This is a test post 1.',
    },
    {
        id: 2,
        title: 'Test Post 2',
        content: 'This is a test post 2.',
    },
];

const renderPostDetailsPage = (postId) => {
    return render(
        <BlogContext.Provider value={{ posts: mockPosts }}>
            <MemoryRouter initialEntries={[`/blog/${postId}`]}>
                <Routes>
                    <Route path="/blog/:postId" element={<PostDetailsPage />} />
                </Routes>
            </MemoryRouter>
        </BlogContext.Provider>
    );
};

describe('PostDetailsPage', () => {
    test('renders post details correctly', () => {
        const postId = 1;
        renderPostDetailsPage(postId);

        expect(screen.getByText('Test Post 1')).toBeInTheDocument();
        expect(screen.getByText('This is a test post 1.')).toBeInTheDocument();
    });

    test('renders PostNotFound component when post is not found', () => {
        const postId = 99;
        renderPostDetailsPage(postId);

        expect(screen.getByText('Post not found')).toBeInTheDocument();
    });
});
