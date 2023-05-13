import React from 'react';
import { Box } from '@mui/material';
import PostForm from '../../molecules/PostForm/PostForm';
import CustomButton from '../../atoms/Button/Button';

const PostEditor = ({ onSubmit, initialValues, onDelete }) => {
    return (
        <Box sx={{ mt: 2 }} data-testid="post-editor-page">
            <PostForm onSubmit={onSubmit} initialValues={initialValues} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CustomButton
                    onClick={onDelete}
                    style={{ backgroundColor: '#ff4d4d', color: '#fff' }}
                >
                    Delete Post
                </CustomButton>
            </div>
        </Box>
    );
};

export default PostEditor;
