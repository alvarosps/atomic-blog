import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router';
import { BlogProvider } from '../../BlogContext';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import BlogPage from '../BlogPage/BlogPage';
import { ContactPage } from '@mui/icons-material';
import CreatePostPage from '../CreatePostPage/CreatePostPage';

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

describe('AppRouter', () => {
    test('renders HomePage on default route', () => {
        renderWithRouter(<HomePage />);
        expect(screen.getByTestId('homepage-container')).toBeInTheDocument();
    });

    test('renders AboutPage on /about route', () => {
        renderWithRouter(<AboutPage />, { route: '/about' });
        expect(screen.getByTestId('about-template')).toBeInTheDocument();
    });

    test('renders BlogPage on /blog route', () => {
        renderWithRouter(<BlogPage />, { route: '/blog' });
        expect(screen.getByTestId('blog-container')).toBeInTheDocument();
    });

    test('renders ContactPage on /contact route', () => {
        renderWithRouter(<ContactPage />, { route: '/contact' });
        expect(screen.getByTestId('ContactPageIcon')).toBeInTheDocument();
    });

    test('renders CreatePostPage on /blog/create route', () => {
        renderWithRouter(<CreatePostPage />, { route: '/blog/create' });
        expect(screen.getByText(/Create a New Post/i)).toBeInTheDocument();
    });
});
