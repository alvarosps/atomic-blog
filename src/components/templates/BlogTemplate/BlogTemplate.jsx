import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import SearchPosts from '../../organisms/SearchPosts/SearchPosts';
import PostDetailsPage from '../../../pages/PostDetailsPage/PostDetailsPage';
import PostEditorPage from '../../../pages/PostEditorPage/PostEditorPage';

const BlogTemplate = ({ posts, children }) => {
    return (
        <Box data-testid="blog-container">
            <Routes>
                <Route path="/" element={<SearchPosts posts={posts} />} />
                <Route path=":postId" element={<PostDetailsPage />} />
                <Route path=":postId/edit" element={<PostEditorPage />} />
            </Routes>
            {children}
        </Box>
    );
};

export default BlogTemplate;
