import React from 'react';
import TextField from '@mui/material/TextField';

const TextArea = ({ label, ...props }) => {
    return (
        <TextField
            label={label}
            multiline
            rows={4}
            variant="outlined"
            {...props}
        />
    );
};

export default TextArea;
