import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router';
import { BlogProvider } from '../../../BlogContext';
import BlogTemplate from './BlogTemplate';

const posts = [
    {
        id: '1',
        title: 'Post 1',
        content: 'Content of post 1',
    },
    {
        id: '2',
        title: 'Post 2',
        content: 'Content of post 2',
    },
];

const renderWithRouter = (element, { route = '/' } = {}) => {
    return {
        ...render(
            <BlogProvider>
                <MemoryRouter initialEntries={[route]}>
                    <Routes>
                        <Route path="*" element={element} />
                    </Routes>
                </MemoryRouter>
            </BlogProvider>
        ),
    };
};

describe('BlogTemplate integration tests', () => {
    test('renders PostDetailsPage component on :postId path', async () => {
        renderWithRouter(<BlogTemplate posts={posts} />, { route: '/1' });

        const postDetails = await screen.findByTestId('post-details-page');
        expect(postDetails).toBeInTheDocument();
    });

    test('renders PostEditorPage component on :postId/edit path', async () => {
        renderWithRouter(<BlogTemplate posts={posts} />, { route: '/1/edit' });

        const postEditor = await screen.findByTestId('post-editor-page');
        expect(postEditor).toBeInTheDocument();
    });
});
