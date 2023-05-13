import React from 'react';
import { render, screen } from '@testing-library/react';
import PostForm from './PostForm';

test('renders PostForm component', () => {
    render(<PostForm />);
    const titleInput = screen.getByLabelText(/title/i);
    const contentInput = screen.getByLabelText(/content/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(titleInput).toBeInTheDocument();
    expect(contentInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});
