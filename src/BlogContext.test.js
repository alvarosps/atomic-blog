import React, { useContext } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BlogContext, BlogProvider } from './BlogContext';

const TestComponent = () => {
    const { posts, dispatch } = useContext(BlogContext);

    const createPost = () => {
        const uniqueId = Math.max(...posts.map((post) => post.id)) + 1;
        dispatch({
            type: 'CREATE_POST',
            payload: {
                id: uniqueId,
                title: 'New Post',
                content: 'This is a new post',
            },
        });
    };

    const editPost = () => {
        dispatch({
            type: 'EDIT_POST',
            payload: {
                id: 1,
                title: 'Updated Post',
                content: 'This is an updated post',
            },
        });
    };

    const deletePost = (id) => {
        dispatch({ type: 'DELETE_POST', payload: id });
    };

    return (
        <>
            {posts.map((post) => (
                <p key={post.id} data-testid={`post-${post.id}`}>
                    {post.title}
                </p>
            ))}
            <button onClick={createPost} data-testid="create-post">
                Create Post
            </button>
            <button onClick={editPost} data-testid="edit-post">
                Edit Post
            </button>
            <button onClick={() => deletePost(2)} data-testid="delete-post">
                Delete Post
            </button>
        </>
    );
};

describe('BlogProvider', () => {
    it('provides the initial state', () => {
        const { getByTestId } = render(
            <BlogProvider>
                <TestComponent />
            </BlogProvider>
        );

        expect(getByTestId('post-1')).toBeInTheDocument();
        expect(getByTestId('post-2')).toBeInTheDocument();
    });

    it('handles CREATE_POST action', () => {
        const { getByTestId } = render(
            <BlogProvider>
                <TestComponent />
            </BlogProvider>
        );

        fireEvent.click(getByTestId('create-post'));
        expect(getByTestId('post-3')).toBeInTheDocument();
    });

    it('handles EDIT_POST action', () => {
        const { getByTestId } = render(
            <BlogProvider>
                <TestComponent />
            </BlogProvider>
        );

        fireEvent.click(getByTestId('edit-post'));
        expect(getByTestId('post-1')).toHaveTextContent('Updated Post');
    });

    it('handles DELETE_POST action', () => {
        const { getByTestId, queryByTestId } = render(
            <BlogProvider>
                <TestComponent />
            </BlogProvider>
        );

        fireEvent.click(getByTestId('delete-post'));
        expect(queryByTestId('post-2')).not.toBeInTheDocument();
    });
});
