import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeTemplate from './HomeTemplate';
import { BrowserRouter } from 'react-router-dom';

const mockPosts = [
    { id: 1, title: 'Post 1', content: 'Post 1 content' },
    { id: 2, title: 'Post 2', content: 'Post 2 content' },
    { id: 3, title: 'Post 3', content: 'Post 3 content' },
    { id: 4, title: 'Post 4', content: 'Post 4 content' },
    { id: 5, title: 'Post 5', content: 'Post 5 content' },
    { id: 6, title: 'Post 6', content: 'Post 6 content' },
];

describe('HomeTemplate', () => {
    test('renders HomeTemplate component', () => {
        render(
            <BrowserRouter>
                <HomeTemplate posts={mockPosts} />
            </BrowserRouter>
        );
        expect(screen.getByTestId('homepage-container')).toBeInTheDocument();
        expect(screen.getByAltText('Hero Image')).toBeInTheDocument();

        // Check if the first and third post titles are present
        [mockPosts[0], mockPosts[2]].forEach((post) => {
            expect(screen.getByText(post.title)).toBeInTheDocument();
        });

        // Check if the images for the posts exist
        const postImages = screen.getAllByAltText('Post Image');
        expect(postImages.length).toBe(4); // Ensure there are 4 post images

        // Check if the second post's image exists with the correct href
        const secondPostImage = postImages[0];
        expect(secondPostImage.closest('a')).toHaveAttribute(
            'href',
            `/blog/${mockPosts[1].id}`
        );

        // Check if the images for the remaining posts exist with the correct href
        postImages.slice(1).forEach((img, index) => {
            expect(img.closest('a')).toHaveAttribute(
                'href',
                `/blog/${mockPosts[index + 3].id}`
            );
        });

        expect(screen.getByTestId('video-embed')).toBeInTheDocument();
    });
});
