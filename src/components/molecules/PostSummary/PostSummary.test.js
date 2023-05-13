import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostSummary from './PostSummary';
import { BrowserRouter as Router } from 'react-router-dom';
import { CardMedia } from '@mui/material';

test('renders PostSummary component with given data', () => {
    const postData = {
        id: 1,
        title: 'Test Post',
        content: 'This is a test post.',
        imageUrl: 'https://via.placeholder.com/300x200',
    };

    render(
        <Router>
            <PostSummary post={postData} />
        </Router>
    );

    expect(screen.getByText(postData.title)).toBeInTheDocument();
    expect(screen.getByText(postData.content)).toBeInTheDocument();
});
