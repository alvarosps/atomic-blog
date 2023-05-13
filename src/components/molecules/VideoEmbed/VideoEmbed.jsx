import React from 'react';
import { Box } from '@mui/material';

const VideoEmbed = ({ src }) => {
    return (
        <Box sx={{ width: '100%' }} data-testid="video-embed">
            <iframe
                title="Video"
                width="100%"
                height="100%"
                src={src}
                allowFullScreen
            />
        </Box>
    );
};

export default VideoEmbed;
