import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const PostDetails = ({ post }) => {
    return (
        <Card
            sx={{
                mt: 2,
                p: 2,
                boxShadow: 3,
            }}
            data-testid="post-details-page"
        >
            <CardContent
                sx={{
                    paddingLeft: '20px',
                    paddingRight: '20px',
                }}
            >
                <Typography variant="h5" gutterBottom className="post-title">
                    {post.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    {post.content}
                </Typography>
                <Box textAlign="right">
                    <Button
                        component={Link}
                        to={`/blog/${post.id}/edit`}
                        variant="contained"
                        color="primary"
                    >
                        Edit Post
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PostDetails;
