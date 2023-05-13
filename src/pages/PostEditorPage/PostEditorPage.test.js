import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { BlogContext } from '../../BlogContext';
import PostEditorPage from './PostEditorPage';

const mockPosts = [
    { id: 1, title: 'Test Post 1', content: 'Test content 1' },
    { id: 2, title: 'Test Post 2', content: 'Test content 2' },
];

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

const renderPostEditorPage = (postId) => {
    return render(
        <BlogContext.Provider
            value={{ posts: mockPosts, dispatch: mockDispatch }}
        >
            <MemoryRouter initialEntries={[`/blog/${postId}/edit`]}>
                <Routes>
                    <Route
                        path="/blog/:postId/edit"
                        element={<PostEditorPage />}
                    />
                </Routes>
            </MemoryRouter>
        </BlogContext.Provider>
    );
};

describe('PostEditorPage', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly when a post is found', () => {
        renderPostEditorPage(1);
        expect(screen.getByTestId('post-editor-page')).toBeInTheDocument();
    });

    it('renders the PostNotFound component when a post is not found', () => {
        renderPostEditorPage(999);
        expect(screen.getByText('Post not found')).toBeInTheDocument();
    });

    it("updates the post correctly and navigates to the post's page on submit", () => {
        renderPostEditorPage(1);
        fireEvent.click(screen.getByText('Submit'));
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'EDIT_POST',
            payload: { id: 1, title: 'Test Post 1', content: 'Test content 1' },
        });
        expect(mockNavigate).toHaveBeenCalledWith('/blog/1');
    });

    it('deletes the post correctly and navigates to the blog page on delete', () => {
        renderPostEditorPage(1);
        fireEvent.click(screen.getByText('Delete Post'));
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'DELETE_POST',
            payload: 1,
        });
        expect(mockNavigate).toHaveBeenCalledWith('/blog');
    });
});
