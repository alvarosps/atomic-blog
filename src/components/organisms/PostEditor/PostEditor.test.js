import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostEditor from './PostEditor';

test('submits PostEditor form with input values', () => {
    const onSubmit = jest.fn();
    const initialValues = {
        title: '',
        content: '',
    };

    render(<PostEditor onSubmit={onSubmit} initialValues={initialValues} />);

    const titleInput = screen.getByLabelText('Title');
    const contentInput = screen.getByLabelText('Content');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(contentInput, { target: { value: 'Test Content' } });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({
        title: 'Test Title',
        content: 'Test Content',
    });
});
