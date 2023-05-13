import React from 'react';
import { Box } from '@mui/material';
import PostsList from '../../molecules/PostsList/PostList';

const SearchPosts = ({ posts }) => {
    return (
        <Box sx={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <PostsList posts={posts} />
        </Box>
    );
};

export default SearchPosts;
