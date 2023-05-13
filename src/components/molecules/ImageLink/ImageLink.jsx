import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ImageLink = ({ to, src, alt }) => {
    return (
        <Box>
            <Link to={to}>
                <img
                    src={src}
                    alt={alt}
                    style={{ width: '100%', height: 'auto' }}
                />
            </Link>
        </Box>
    );
};

export default ImageLink;
