import React from 'react';
import { Box, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const PostNotFound = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="60vh"
            textAlign="center"
        >
            <SentimentVeryDissatisfiedIcon
                fontSize="large"
                data-testid="sentiment-icon"
            />
            <Typography variant="h4" mt={2}>
                Post not found
            </Typography>
            <Typography variant="body1" mt={1}>
                We're sorry, but the post you're looking for doesn't seem to
                exist.
            </Typography>
        </Box>
    );
};

export default PostNotFound;
