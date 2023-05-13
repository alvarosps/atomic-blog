import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreatePostPage from './CreatePostPage';
import { BlogContext } from '../../BlogContext';

describe('CreatePostPage', () => {
    test('renders PostEditor component with correct onSubmit and initialValues', async () => {
        const dispatchMock = jest.fn();

        render(
            <BlogContext.Provider value={{ dispatch: dispatchMock }}>
                <CreatePostPage />
            </BlogContext.Provider>
        );

        const titleInput = screen.getByLabelText(/title/i);
        const contentInput = screen.getByLabelText(/content/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });

        fireEvent.change(titleInput, { target: { value: 'Test Title' } });
        fireEvent.change(contentInput, { target: { value: 'Test Content' } });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(dispatchMock).toHaveBeenCalledTimes(1);
            expect(dispatchMock).toHaveBeenCalledWith(
                expect.objectContaining({
                    type: 'CREATE_POST',
                    payload: expect.objectContaining({
                        title: 'Test Title',
                        content: 'Test Content',
                    }),
                })
            );
        });
    });
});
