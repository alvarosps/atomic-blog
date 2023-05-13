// BlogPage.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { BlogProvider } from '../../BlogContext';
import BlogPage from './BlogPage';

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

describe('BlogPage', () => {
    test('renders BlogTemplate component with context data', () => {
        renderWithRouter(<BlogPage />);
        const blogContainer = screen.getByTestId('blog-container');
        expect(blogContainer).toBeInTheDocument();
    });

    test('renders BlogTemplate component with searchResults prop data', () => {
        const searchResults = [
            { id: '1', title: 'Search Result 1', content: 'Content 1' },
            { id: '2', title: 'Search Result 2', content: 'Content 2' },
        ];

        renderWithRouter(<BlogPage searchResults={searchResults} />);
        searchResults.forEach((result) => {
            const postTitle = screen.getByText(new RegExp(result.title, 'i'));
            expect(postTitle).toBeInTheDocument();
        });
    });
});
