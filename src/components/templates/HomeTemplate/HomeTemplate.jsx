import React from 'react';
import { Box, Grid } from '@mui/material';
import ImageHero from '../../atoms/ImageHero/ImageHero';
import PostSummary from '../../molecules/PostSummary/PostSummary';
import ImageLink from '../../molecules/ImageLink/ImageLink';
import VideoEmbed from '../../molecules/VideoEmbed/VideoEmbed';

const HomeTemplate = ({ posts }) => {
    return (
        <Box data-testid="homepage-container">
            <ImageHero
                src="https://via.placeholder.com/1500x300"
                alt="Hero Image"
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <PostSummary post={posts[0]} />
                </Grid>
                <Grid item xs={2} container justifyContent="center">
                    <ImageLink
                        to={`/blog/${posts[1].id}`}
                        src="https://via.placeholder.com/150"
                        alt="Post Image"
                    />
                </Grid>
                <Grid item xs={4}>
                    <PostSummary post={posts[2]} />
                </Grid>
                <Grid item xs={6} container>
                    <VideoEmbed src="https://www.youtube.com/embed/LlvBzyy-558" />
                </Grid>
                <Grid
                    item
                    xs={6}
                    container
                    justifyContent="space-around"
                    sx={{ height: '350px' }}
                >
                    <Grid item>
                        <ImageLink
                            to={`/blog/${posts[3].id}`}
                            src="https://via.placeholder.com/150"
                            alt="Post Image"
                        />
                    </Grid>
                    <Grid item>
                        <ImageLink
                            to={`/blog/${posts[4].id}`}
                            src="https://via.placeholder.com/150"
                            alt="Post Image"
                        />
                    </Grid>
                    <Grid item>
                        <ImageLink
                            to={`/blog/${posts[5].id}`}
                            src="https://via.placeholder.com/150"
                            alt="Post Image"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeTemplate;
