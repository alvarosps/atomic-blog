import React from 'react';
import { render, screen } from '@testing-library/react';
import PostList from './PostList';
import { BrowserRouter } from 'react-router-dom';

test('renders list of posts', () => {
    const posts = [
        { id: '1', title: 'Post 1', summary: 'Summary 1' },
        { id: '2', title: 'Post 2', summary: 'Summary 2' },
    ];

    render(
        <BrowserRouter>
            <PostList posts={posts} />
        </BrowserRouter>
    );

    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
});

test('renders "Add post" button with correct href', () => {
    const posts = [
        { id: '1', title: 'Post 1', summary: 'Summary 1' },
        { id: '2', title: 'Post 2', summary: 'Summary 2' },
    ];

    render(
        <BrowserRouter>
            <PostList posts={posts} />
        </BrowserRouter>
    );

    const addButton = screen.getByRole('button', { name: /add post/i });
    expect(addButton).toBeInTheDocument();

    const addButtonLink = screen.getByRole('link', { name: /add post/i });
    expect(addButtonLink).toHaveAttribute('href', '/blog/create');
});
