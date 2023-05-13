import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const PostSummary = ({ post }) => {
    return (
        <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ height: '100%' }}>
                <CardContent>
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {post.content}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default PostSummary;
