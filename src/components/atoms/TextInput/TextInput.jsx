import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ label, ...props }) => {
    return <TextField label={label} variant="outlined" {...props} />;
};

export default TextInput;
