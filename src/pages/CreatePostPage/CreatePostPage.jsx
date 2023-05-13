import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import PostEditor from '../../components/organisms/PostEditor/PostEditor';
import { BlogContext } from '../../BlogContext';

const CreatePostPage = () => {
    const { dispatch } = useContext(BlogContext);

    const onSubmit = (values) => {
        dispatch({
            type: 'CREATE_POST',
            payload: { ...values, id: Date.now() },
        });
    };

    const initialValues = {
        title: '',
        content: '',
    };

    return (
        <Box mt={4}>
            <Typography variant="h4" mb={3} textAlign="center">
                Create a New Post
            </Typography>
            <PostEditor onSubmit={onSubmit} initialValues={initialValues} />
        </Box>
    );
};

export default CreatePostPage;
