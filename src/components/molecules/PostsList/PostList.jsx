import React from 'react';
import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

const PostsList = ({ posts }) => {
    return (
        <Box mt={4}>
            <Box mb={2}>
                <Link to="/blog/create" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        Add post
                    </Button>
                </Link>
            </Box>
            <Grid container spacing={4}>
                {posts.map((post) => (
                    <Grid key={post.id} item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://via.placeholder.com/300x200"
                                alt="Post Image"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    <Link to={`/blog/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {post.excerpt}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PostsList;
