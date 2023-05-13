import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BlogContext } from '../../BlogContext';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';

const mockPosts = [
    { id: 1, title: 'Post 1', content: 'Post 1 content' },
    { id: 2, title: 'Post 2', content: 'Post 2 content' },
    { id: 3, title: 'Post 3', content: 'Post 3 content' },
    { id: 4, title: 'Post 4', content: 'Post 4 content' },
    { id: 5, title: 'Post 5', content: 'Post 5 content' },
    { id: 6, title: 'Post 6', content: 'Post 6 content' },
];

import { waitFor } from '@testing-library/react';

describe('HomePage', () => {
    test('fetches and renders posts data from BlogContext', async () => {
        render(
            <BlogContext.Provider value={{ posts: mockPosts }}>
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </BlogContext.Provider>
        );

        expect(screen.getByTestId('homepage-container')).toBeInTheDocument();
        expect(screen.getByAltText('Hero Image')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText(mockPosts[0].title)).toBeInTheDocument();
        });

        await waitFor(() => {
            const postImages = screen.getAllByAltText('Post Image');
            expect(postImages.length).toBe(4);
        });

        expect(screen.getByTestId('video-embed')).toBeInTheDocument();
    });
});
