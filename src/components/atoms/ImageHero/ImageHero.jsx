import React from 'react';
import { Box } from '@mui/material';

const ImageHero = ({ src, alt }) => {
    return (
        <Box>
            <img
                src={src}
                alt={alt}
                style={{ width: '100%', height: 'auto' }}
            />
        </Box>
    );
};

export default ImageHero;
